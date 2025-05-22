import { PrismaClient } from '../src/generated/prisma';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  try {
    // 检查是否已有管理员用户
    const adminExists = await prisma.user.findFirst({
      where: {
        email: 'admin@example.com',
      },
    });

    if (adminExists) {
      console.log('管理员用户已存在:', adminExists.email);
      return;
    }

    // 创建管理员用户
    const hashedPassword = await hash('admin123', 10);
    const admin = await prisma.user.create({
      data: {
        name: '管理员',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin',
      },
    });

    console.log('管理员用户创建成功:', admin.email);
  } catch (error) {
    console.error('创建管理员用户失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
