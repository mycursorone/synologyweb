import { redirect } from 'next/navigation';

export default function Home() {
  // 直接重定向到 /web/home，使用绝对路径
  redirect('/web/home');
}
