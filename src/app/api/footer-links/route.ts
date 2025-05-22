import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/options';

/**
 * 获取FooterLink列表
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const footerId = searchParams.get('footerId');
    const category = searchParams.get('category');
    const active = searchParams.get('active') === 'true';

    // 如果提供了ID，返回特定的FooterLink
    if (id) {
      const link = await prisma.footerLink.findUnique({
        where: { id },
      });

      if (!link) {
        return NextResponse.json({ error: '未找到链接' }, { status: 404 });
      }

      return NextResponse.json(link);
    }

    // 构建查询条件
    let where: any = {};
    if (footerId) where.footerId = footerId;
    if (category) where.category = category;
    if (active) where.isActive = true;

    // 查询链接列表
    const links = await prisma.footerLink.findMany({
      where,
      orderBy: {
        sortOrder: 'asc',
      },
    });

    return NextResponse.json({ links });
  } catch (error) {
    console.error('获取Footer链接失败:', error);
    return NextResponse.json(
      { error: '获取Footer链接失败' },
      { status: 500 }
    );
  }
}

/**
 * 创建或更新FooterLink
 */
export async function POST(request: NextRequest) {
  try {
    // 检查用户是否已认证
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: '未授权' }, { status: 401 });
    }

    const data = await request.json();
    const { id, title, url, category, icon, sortOrder, isActive, footerId } = data;

    // 验证必填字段
    if (!title || !url || !category || !footerId) {
      return NextResponse.json(
        { error: '标题、URL、分类和FooterID不能为空' },
        { status: 400 }
      );
    }

    // 如果提供了ID，更新现有链接
    if (id) {
      const updatedLink = await prisma.footerLink.update({
        where: { id },
        data: {
          title,
          url,
          category,
          icon,
          sortOrder: sortOrder || 0,
          isActive: isActive !== undefined ? isActive : true,
          footerId,
        },
      });

      return NextResponse.json({
        message: '链接更新成功',
        link: updatedLink,
      });
    }

    // 否则创建新链接
    const newLink = await prisma.footerLink.create({
      data: {
        title,
        url,
        category,
        icon,
        sortOrder: sortOrder || 0,
        isActive: isActive !== undefined ? isActive : true,
        footerId,
      },
    });

    return NextResponse.json({
      message: '链接创建成功',
      link: newLink,
    });
  } catch (error) {
    console.error('创建/更新Footer链接失败:', error);
    return NextResponse.json(
      { error: '创建/更新Footer链接失败' },
      { status: 500 }
    );
  }
}

/**
 * 删除FooterLink
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

    await prisma.footerLink.delete({
      where: { id },
    });

    return NextResponse.json({ message: '链接删除成功' });
  } catch (error) {
    console.error('删除Footer链接失败:', error);
    return NextResponse.json(
      { error: '删除Footer链接失败' },
      { status: 500 }
    );
  }
}
