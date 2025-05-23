import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/options';
import pool from '@/lib/db';
import { hash } from 'bcryptjs';

/**
 * 获取用户列表
 */
export async function GET(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: '未授权' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // 如果提供了ID，返回特定的用户
    if (id) {
      const result = await pool.query(
        'SELECT id, name, email, role, created_at, updated_at FROM users WHERE id = $1',
        [id]
      );

      const user = result.rows[0];
      if (!user) {
        return NextResponse.json({ error: '未找到用户' }, { status: 404 });
      }

      return NextResponse.json(user);
    }

    // 否则返回所有用户
    const result = await pool.query(
      'SELECT id, name, email, role, created_at, updated_at FROM users ORDER BY created_at DESC'
    );

    return NextResponse.json({ users: result.rows });
  } catch (error) {
    console.error('获取用户失败:', error);
    return NextResponse.json(
      { error: '获取用户失败' },
      { status: 500 }
    );
  }
}

/**
 * 创建用户
 */
export async function POST(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: '未授权' }, { status: 401 });
    }

    const data = await request.json();
    const { name, email, password, role } = data;

    // 验证必填字段
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: '姓名、邮箱和密码不能为空' },
        { status: 400 }
      );
    }

    // 检查邮箱是否已存在
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: '该邮箱已被注册' },
        { status: 400 }
      );
    }

    // 密码加密
    const hashedPassword = await hash(password, 10);

    // 创建新用户
    const result = await pool.query(
      `INSERT INTO users (id, name, email, password, role)
       VALUES (gen_random_uuid(), $1, $2, $3, $4)
       RETURNING id, name, email, role, created_at, updated_at`,
      [name, email, hashedPassword, role || 'user']
    );

    return NextResponse.json({
      message: '用户创建成功',
      user: result.rows[0],
    });
  } catch (error) {
    console.error('创建用户失败:', error);
    return NextResponse.json(
      { error: '创建用户失败' },
      { status: 500 }
    );
  }
}

/**
 * 更新用户
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
    const { name, email, password, role } = data;

    // 验证必填字段
    if (!name || !email) {
      return NextResponse.json(
        { error: '姓名和邮箱不能为空' },
        { status: 400 }
      );
    }

    // 检查邮箱是否已被其他用户使用
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND id != $2',
      [email, id]
    );

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: '该邮箱已被其他用户注册' },
        { status: 400 }
      );
    }

    // 构建更新查询
    let query = 'UPDATE users SET name = $1, email = $2, role = $3';
    let params = [name, email, role || 'user'];

    // 如果提供了新密码，则更新密码
    if (password) {
      const hashedPassword = await hash(password, 10);
      query += ', password = $4';
      params.push(hashedPassword);
    }

    query += ', updated_at = CURRENT_TIMESTAMP WHERE id = $' + (params.length + 1);
    params.push(id);

    query += ' RETURNING id, name, email, role, created_at, updated_at';

    const result = await pool.query(query, params);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: '未找到用户' }, { status: 404 });
    }

    return NextResponse.json({
      message: '用户更新成功',
      user: result.rows[0],
    });
  } catch (error) {
    console.error('更新用户失败:', error);
    return NextResponse.json(
      { error: '更新用户失败' },
      { status: 500 }
    );
  }
}

/**
 * 删除用户
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

    // 防止删除自己
    if (id === session.user.id) {
      return NextResponse.json(
        { error: '不能删除当前登录的用户' },
        { status: 400 }
      );
    }

    // 删除用户
    const result = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING id',
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: '未找到用户' }, { status: 404 });
    }

    return NextResponse.json({ message: '用户删除成功' });
  } catch (error) {
    console.error('删除用户失败:', error);
    return NextResponse.json(
      { error: '删除用户失败' },
      { status: 500 }
    );
  }
}
