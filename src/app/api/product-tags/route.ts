import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/options';
import pool from '@/lib/db';

/**
 * 获取产品标签关联
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('productId');

    if (!productId) {
      return NextResponse.json({ error: '缺少产品ID参数' }, { status: 400 });
    }

    // 获取产品关联的标签
    const result = await pool.query(
      `SELECT pt.*, t.product_spec, t.spec_size, t.product_size, t.sort_type, t.sort_order
       FROM product_tags pt
       JOIN tags t ON pt.tag_id = t.id
       WHERE pt.product_id = $1
       ORDER BY t.sort_type, t.sort_order`,
      [productId]
    );

    return NextResponse.json({ productTags: result.rows });
  } catch (error) {
    console.error('获取产品标签关联失败:', error);
    return NextResponse.json(
      { error: '获取产品标签关联失败' },
      { status: 500 }
    );
  }
}

/**
 * 更新产品标签关联
 */
export async function POST(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: '未授权' }, { status: 401 });
    }

    const data = await request.json();
    const { productId, tagIds, tagData } = data;

    // 验证必填字段
    if (!productId || !Array.isArray(tagIds)) {
      return NextResponse.json(
        { error: '产品ID和标签ID列表不能为空' },
        { status: 400 }
      );
    }

    // 开始事务
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      // 获取产品信息，用于保存产品名称
      const productResult = await client.query(
        'SELECT name FROM products WHERE id = $1',
        [productId]
      );

      if (productResult.rows.length === 0) {
        throw new Error(`未找到ID为 ${productId} 的产品`);
      }

      const productName = productResult.rows[0].name;

      // 删除该产品的所有标签关联
      await client.query(
        'DELETE FROM product_tags WHERE product_id = $1',
        [productId]
      );

      // 如果有选中的标签，则添加新的关联
      if (tagIds.length > 0) {
        // 构建批量插入的值
        const values = tagIds.map((tagId: string, index: number) => {
          const tagInfo = tagData[tagId];
          return `($1, $${index + 2}, $${tagIds.length + index + 2}, $${2 * tagIds.length + index + 2}, $${3 * tagIds.length + 2})`;
        }).join(', ');

        // 构建参数数组
        const params = [
          productId,
          ...tagIds,
          ...tagIds.map((tagId: string) => tagData[tagId].product_spec || null),
          ...tagIds.map((tagId: string) => tagData[tagId].product_size || null),
          productName // 添加产品名称作为参数
        ];

        // 执行批量插入
        await client.query(
          `INSERT INTO product_tags (product_id, tag_id, tag_spec, tag_size, product_name)
           VALUES ${values}`,
          params
        );
      }

      await client.query('COMMIT');

      return NextResponse.json({
        message: '产品标签关联更新成功',
        productId,
        productName,
        tagCount: tagIds.length
      });
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('更新产品标签关联失败:', error);
    return NextResponse.json(
      { error: '更新产品标签关联失败' },
      { status: 500 }
    );
  }
}
