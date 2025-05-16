import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('开始初始化数据库...');

    // 创建初始管理员用户
    const adminExists = await prisma.user.findUnique({
      where: {
        email: 'admin@meibu.com',
      },
    });

    if (!adminExists) {
      const hashedPassword = await hash('admin123', 10);
      
      await prisma.user.create({
        data: {
          name: '管理员',
          email: 'admin@meibu.com',
          password: hashedPassword,
          role: 'admin',
        },
      });
      
      console.log('已创建初始管理员用户');
    } else {
      console.log('管理员用户已存在，跳过创建');
    }

    console.log('数据库初始化完成');
  } catch (error) {
    console.error('初始化数据库时出错:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
