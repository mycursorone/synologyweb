'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // 使用客户端导航重定向到仪表板
    router.push('/admin/dashboard');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">管理后台</h1>
        <p className="text-gray-600 text-center mb-8">
          正在重定向到仪表板...
        </p>
        <div className="flex justify-center">
          <Link
            href="/admin/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            手动前往仪表板
          </Link>
        </div>
      </div>
    </div>
  );
}
