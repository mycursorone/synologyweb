import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import pool from '@/lib/db';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log('开始认证过程，邮箱:', credentials?.email);

        if (!credentials?.email || !credentials?.password) {
          console.log('认证失败: 缺少邮箱或密码');
          return null;
        }

        try {
          console.log('查询数据库中的用户:', credentials.email);

          // 使用pg连接池查询用户
          const result = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [credentials.email]
          );

          console.log('数据库查询结果:', result.rows.length > 0 ? '找到用户' : '未找到用户');

          const user = result.rows[0];

          if (!user) {
            console.log('用户不存在:', credentials.email);
            return null;
          }

          console.log('验证密码中...');
          const isPasswordValid = await compare(credentials.password, user.password);

          if (!isPasswordValid) {
            console.log('密码无效:', credentials.email);
            return null;
          }

          console.log('认证成功:', user.email, '角色:', user.role);

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error('认证错误:', error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  debug: true, // 启用调试模式
};
