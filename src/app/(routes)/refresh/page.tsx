'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RefreshPage() {
  const router = useRouter();

  useEffect(() => {
    // 清除缓存
    if ('caches' in window) {
      window.caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          window.caches.delete(cacheName);
        });
      });
    }

    // 清除 localStorage
    localStorage.clear();

    // 清除 sessionStorage
    sessionStorage.clear();

    // 设置一个标记，表示已经刷新过
    sessionStorage.setItem('cache_cleared', 'true');

    // 延迟一秒后重定向到首页
    setTimeout(() => {
      router.push('/web');
    }, 1000);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">正在刷新缓存...</h1>
        <p className="text-gray-600 mb-4">
          正在清除浏览器缓存并刷新页面，请稍候...
        </p>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    </div>
  );
}
