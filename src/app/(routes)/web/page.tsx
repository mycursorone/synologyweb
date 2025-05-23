import { redirect } from 'next/navigation';

export default function WebPage() {
  // 使用绝对路径重定向
  redirect('/web/home');
}
