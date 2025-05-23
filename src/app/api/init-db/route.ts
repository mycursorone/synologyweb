import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import pool from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  try {
    // 检查是否已有管理员用户
    const adminResult = await pool.query(
      'SELECT * FROM users WHERE role = $1 LIMIT 1',
      ['admin']
    );

    const adminExists = adminResult.rows[0];

    if (adminExists) {
      return NextResponse.json({
        success: true,
        message: '管理员用户已存在',
        user: {
          id: adminExists.id,
          name: adminExists.name,
          email: adminExists.email,
          role: adminExists.role,
        },
      });
    }

    // 创建管理员用户
    const hashedPassword = await hash('admin123', 10);
    const adminId = uuidv4();

    const adminResult2 = await pool.query(
      `INSERT INTO users (id, name, email, password, role)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, name, email, role`,
      [adminId, '管理员', 'myshiner@gmail.com', hashedPassword, 'admin']
    );

    const admin = adminResult2.rows[0];

    return NextResponse.json({
      success: true,
      message: '管理员用户创建成功',
      user: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error('初始化数据库失败:', error);
    return NextResponse.json(
      {
        success: false,
        message: '初始化数据库失败',
        error: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    );
  }
}
