import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // 检查是否已有管理员用户
    const adminExists = await prisma.user.findFirst({
      where: {
        role: 'admin',
      },
    });

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
    const admin = await prisma.user.create({
      data: {
        name: '管理员',
        email: 'admin@meibu.com',
        password: hashedPassword,
        role: 'admin',
      },
    });

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
