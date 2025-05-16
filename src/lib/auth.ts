import { hash } from 'bcryptjs';
import prisma from './prisma';

export async function createUser(name: string, email: string, password: string, role: string = 'admin') {
  const hashedPassword = await hash(password, 10);
  
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
    },
  });
  
  return user;
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  
  return user;
}

export async function getAllUsers() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  
  return users;
}
