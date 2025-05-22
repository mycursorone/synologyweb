import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/options';

/**
 * 获取Footer信息
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const active = searchParams.get('active') === 'true';

    // 如果提供了ID，返回特定的Footer
    if (id) {
      const footer = await prisma.footer.findUnique({
        where: { id },
        include: {
          links: {
            orderBy: {
              sortOrder: 'asc',
            },
          },
        },
      });

      if (!footer) {
        return NextResponse.json({ error: '未找到Footer' }, { status: 404 });
      }

      return NextResponse.json(footer);
    }

    // 否则返回所有Footer（通常只有一个）
    const where = active ? { isActive: true } : {};
    const footers = await prisma.footer.findMany({
      where,
      include: {
        links: {
          where: active ? { isActive: true } : {},
          orderBy: {
            sortOrder: 'asc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ footers });
  } catch (error) {
    console.error('获取Footer失败:', error);
    return NextResponse.json(
      { error: '获取Footer失败' },
      { status: 500 }
    );
  }
}

/**
 * 创建或更新Footer
 */
export async function POST(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: '未授权' }, { status: 401 });
    }

    const data = await request.json();
    const { id, icpNumber, icpLink, copyright, isActive } = data;

    // 如果提供了ID，更新现有Footer
    if (id) {
      const updatedFooter = await prisma.footer.update({
        where: { id },
        data: {
          icpNumber,
          icpLink,
          copyright,
          isActive,
        },
      });

      return NextResponse.json({
        message: 'Footer更新成功',
        footer: updatedFooter,
      });
    }

    // 否则创建新Footer
    const newFooter = await prisma.footer.create({
      data: {
        icpNumber,
        icpLink,
        copyright,
        isActive,
      },
    });

    return NextResponse.json({
      message: 'Footer创建成功',
      footer: newFooter,
    });
  } catch (error) {
    console.error('创建/更新Footer失败:', error);
    return NextResponse.json(
      { error: '创建/更新Footer失败' },
      { status: 500 }
    );
  }
}

/**
 * 删除Footer
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

    await prisma.footer.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Footer删除成功' });
  } catch (error) {
    console.error('删除Footer失败:', error);
    return NextResponse.json(
      { error: '删除Footer失败' },
      { status: 500 }
    );
  }
}
