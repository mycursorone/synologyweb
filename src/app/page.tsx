import { redirect } from 'next/navigation';

export default function Home() {
  // 直接重定向到 /web/home，使用绝对路径
  // 使用 redirect 函数，不要添加 return
  redirect('/web/home');
}
