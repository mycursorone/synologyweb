import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { TagCategory, Tag } from '@/types/product';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/options';

/**
 * 获取标签分类和标签
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const categoryType = searchParams.get('type'); // 可以是 '常用筛选' 或 '高级筛选'
    const id = searchParams.get('id'); // 单个标签ID
    const categoryId = searchParams.get('categoryId'); // 分类ID
    const mode = searchParams.get('mode'); // 模式：'admin' 或 'frontend'

    // 如果是管理模式且提供了ID，返回特定的标签
    if (mode === 'admin' && id) {
      const result = await pool.query(
        `SELECT t.*, tc.name as category_name
         FROM tags t
         LEFT JOIN tag_categories tc ON t.created_id = tc.id
         WHERE t.id = $1`,
        [id]
      );

      const tag = result.rows[0];
      if (!tag) {
        return NextResponse.json({ error: '未找到标签' }, { status: 404 });
      }

      return NextResponse.json(tag);
    }

    // 如果是管理模式且提供了分类ID，返回该分类下的所有标签
    if (mode === 'admin' && categoryId) {
      const result = await pool.query(
        `SELECT t.*, tc.name as category_name
         FROM tags t
         LEFT JOIN tag_categories tc ON t.created_id = tc.id
         WHERE t.created_id = $1
         ORDER BY t.sort_type ASC, t.sort_order ASC`,
        [categoryId]
      );

      return NextResponse.json({ tags: result.rows });
    }

    // 如果是管理模式，返回所有标签
    if (mode === 'admin') {
      const result = await pool.query(
        `SELECT t.*, tc.name as category_name
         FROM tags t
         LEFT JOIN tag_categories tc ON t.created_id = tc.id
         ORDER BY t.sort_type ASC, t.sort_order ASC`
      );

      return NextResponse.json({ tags: result.rows });
    }

    // 前端模式 - 原有逻辑
    // 构建查询条件
    let whereClause = '';
    const queryParams: any[] = [];

    if (categoryType) {
      whereClause = 'WHERE categories_type = $1';
      queryParams.push(categoryType);
    }

    // 查询标签分类
    const categoriesQuery = await pool.query(
      `SELECT * FROM tag_categories ${whereClause} ORDER BY sort`,
      queryParams
    );

    // 如果没有分类，直接返回空数组
    if (categoriesQuery.rows.length === 0) {
      return NextResponse.json({ categories: [] });
    }

    // 获取所有分类的ID
    const categoryIds = categoriesQuery.rows.map(category => category.id);

    // 查询所有标签
    const tagsQuery = await pool.query(
      `SELECT * FROM tags WHERE created_id = ANY($1) ORDER BY sort_order`,
      [categoryIds]
    );

    // 将标签数据组织成以分类ID为键的对象
    const categoryTags: Record<string, Tag[]> = {};
    tagsQuery.rows.forEach(tag => {
      if (!categoryTags[tag.created_id]) {
        categoryTags[tag.created_id] = [];
      }
      categoryTags[tag.created_id].push(tag);
    });

    // 将标签数据添加到分类中
    const categoriesWithTags = categoriesQuery.rows.map(category => ({
      ...category,
      tags: categoryTags[category.id] || []
    }));

    return NextResponse.json({ categories: categoriesWithTags });
  } catch (error) {
    console.error('Error fetching tags:', error);
    return NextResponse.json(
      { error: '获取标签数据时发生错误' },
      { status: 500 }
    );
  }
}

/**
 * 创建标签
 */
export async function POST(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: '未授权' }, { status: 401 });
    }

    const data = await request.json();
    const {
      created_id,
      product_spec,
      product_size,
      sort_type,
      sort_order,
      spec_size
    } = data;

    // 验证必填字段
    if (!created_id) {
      return NextResponse.json(
        { error: '分类ID不能为空' },
        { status: 400 }
      );
    }

    // 创建新标签
    const result = await pool.query(
      `INSERT INTO tags (
        id,
        created_id,
        product_spec,
        product_size,
        sort_type,
        sort_order,
        spec_size
      )
      VALUES (
        gen_random_uuid(),
        $1,
        $2,
        $3,
        $4,
        $5,
        $6
      )
      RETURNING *`,
      [
        created_id,
        product_spec || '',
        product_size || '',
        sort_type || 0,
        sort_order || 0,
        spec_size || ''
      ]
    );

    // 获取分类名称
    const categoryResult = await pool.query(
      'SELECT name FROM tag_categories WHERE id = $1',
      [created_id]
    );

    const tag = result.rows[0];
    tag.category_name = categoryResult.rows[0]?.name || '';

    return NextResponse.json({
      message: '标签创建成功',
      tag,
    });
  } catch (error) {
    console.error('创建标签失败:', error);
    return NextResponse.json(
      { error: '创建标签失败' },
      { status: 500 }
    );
  }
}

/**
 * 更新标签
 */
export async function PUT(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: '未授权' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: '缺少ID参数' }, { status: 400 });
    }

    const data = await request.json();
    const {
      created_id,
      product_spec,
      product_size,
      sort_type,
      sort_order,
      spec_size
    } = data;

    // 验证必填字段
    if (!created_id) {
      return NextResponse.json(
        { error: '分类ID不能为空' },
        { status: 400 }
      );
    }

    // 更新标签
    const result = await pool.query(
      `UPDATE tags
       SET
        created_id = $1,
        product_spec = $2,
        product_size = $3,
        sort_type = $4,
        sort_order = $5,
        spec_size = $6
       WHERE id = $7
       RETURNING *`,
      [
        created_id,
        product_spec || '',
        product_size || '',
        sort_type || 0,
        sort_order || 0,
        spec_size || '',
        id
      ]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: '未找到标签' }, { status: 404 });
    }

    // 获取分类名称
    const categoryResult = await pool.query(
      'SELECT name FROM tag_categories WHERE id = $1',
      [created_id]
    );

    const tag = result.rows[0];
    tag.category_name = categoryResult.rows[0]?.name || '';

    return NextResponse.json({
      message: '标签更新成功',
      tag,
    });
  } catch (error) {
    console.error('更新标签失败:', error);
    return NextResponse.json(
      { error: '更新标签失败' },
      { status: 500 }
    );
  }
}

/**
 * 删除标签
 */
export async function DELETE(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: '未授权' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: '缺少ID参数' }, { status: 400 });
    }

    // 检查是否有产品关联到此标签
    const productTagsResult = await pool.query(
      'SELECT COUNT(*) FROM product_tags WHERE tag_id = $1',
      [id]
    );

    if (parseInt(productTagsResult.rows[0].count) > 0) {
      return NextResponse.json(
        { error: '无法删除：此标签已被产品使用' },
        { status: 400 }
      );
    }

    // 删除标签
    const result = await pool.query(
      'DELETE FROM tags WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: '未找到标签' }, { status: 404 });
    }

    return NextResponse.json({
      message: '标签删除成功',
      tag: result.rows[0],
    });
  } catch (error) {
    console.error('删除标签失败:', error);
    return NextResponse.json(
      { error: '删除标签失败' },
      { status: 500 }
    );
  }
}
