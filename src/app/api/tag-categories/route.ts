import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/options';
import pool from '@/lib/db';

/**
 * 获取标签分类列表
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // 如果提供了ID，返回特定的标签分类
    if (id) {
      const result = await pool.query(
        'SELECT * FROM tag_categories WHERE id = $1',
        [id]
      );

      const category = result.rows[0];
      if (!category) {
        return NextResponse.json({ error: '未找到标签分类' }, { status: 404 });
      }

      return NextResponse.json(category);
    }

    // 否则返回所有标签分类，按sort排序
    const result = await pool.query(
      'SELECT * FROM tag_categories ORDER BY sort ASC'
    );

    return NextResponse.json({ categories: result.rows });
  } catch (error) {
    console.error('获取标签分类失败:', error);
    return NextResponse.json(
      { error: '获取标签分类失败' },
      { status: 500 }
    );
  }
}

/**
 * 创建标签分类
 */
export async function POST(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: '未授权' }, { status: 401 });
    }

    const data = await request.json();
    const { name, sort, categories_type } = data;

    // 验证必填字段
    if (!name || !categories_type) {
      return NextResponse.json(
        { error: '名称和分类类型不能为空' },
        { status: 400 }
      );
    }

    // 创建新标签分类
    const result = await pool.query(
      `INSERT INTO tag_categories (id, name, sort, categories_type) 
       VALUES (gen_random_uuid(), $1, $2, $3) 
       RETURNING *`,
      [name, sort || 0, categories_type]
    );

    return NextResponse.json({
      message: '标签分类创建成功',
      category: result.rows[0],
    });
  } catch (error) {
    console.error('创建标签分类失败:', error);
    return NextResponse.json(
      { error: '创建标签分类失败' },
      { status: 500 }
    );
  }
}

/**
 * 更新标签分类
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
    const { name, sort, categories_type } = data;

    // 验证必填字段
    if (!name || !categories_type) {
      return NextResponse.json(
        { error: '名称和分类类型不能为空' },
        { status: 400 }
      );
    }

    // 更新标签分类
    const result = await pool.query(
      `UPDATE tag_categories 
       SET name = $1, sort = $2, categories_type = $3 
       WHERE id = $4 
       RETURNING *`,
      [name, sort || 0, categories_type, id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: '未找到标签分类' }, { status: 404 });
    }

    return NextResponse.json({
      message: '标签分类更新成功',
      category: result.rows[0],
    });
  } catch (error) {
    console.error('更新标签分类失败:', error);
    return NextResponse.json(
      { error: '更新标签分类失败' },
      { status: 500 }
    );
  }
}

/**
 * 删除标签分类
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

    // 检查是否有标签关联到此分类
    const tagsResult = await pool.query(
      'SELECT COUNT(*) FROM tags WHERE created_id = $1',
      [id]
    );

    if (parseInt(tagsResult.rows[0].count) > 0) {
      return NextResponse.json(
        { error: '无法删除：此分类下有关联的标签' },
        { status: 400 }
      );
    }

    // 删除标签分类
    const result = await pool.query(
      'DELETE FROM tag_categories WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: '未找到标签分类' }, { status: 404 });
    }

    return NextResponse.json({
      message: '标签分类删除成功',
      category: result.rows[0],
    });
  } catch (error) {
    console.error('删除标签分类失败:', error);
    return NextResponse.json(
      { error: '删除标签分类失败' },
      { status: 500 }
    );
  }
}
