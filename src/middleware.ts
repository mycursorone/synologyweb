import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // 定义公开路径（不需要认证）
  const publicPaths = ['/admin/login'];
  const isPublicPath = publicPaths.includes(path);
  
  // 检查是否是管理员路径
  const isAdminPath = path.startsWith('/admin');
  
  // 如果不是管理员路径，直接放行
  if (!isAdminPath) {
    return NextResponse.next();
  }
  
  // 获取 token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  
  // 未登录且访问非公开路径，重定向到登录页
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  
  // 已登录且访问登录页，重定向到仪表板
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }
  
  return NextResponse.next();
}

// 配置匹配的路径
export const config = {
  matcher: ['/admin/:path*'],
};
