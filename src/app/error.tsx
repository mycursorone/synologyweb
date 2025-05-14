'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // 添加页面标题
  useEffect(() => {
    document.title = '出错了 - 美步科技';
    
    // 可以在这里添加错误日志记录
    console.error('页面错误:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-red-600 px-6 py-8 text-white text-center">
          <svg 
            className="w-16 h-16 mx-auto mb-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
          <h1 className="text-2xl font-semibold">出错了</h1>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            抱歉，页面加载过程中发生了错误。请尝试刷新页面或返回首页。
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">您可以尝试：</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>刷新页面</li>
                <li>清除浏览器缓存</li>
                <li>返回首页</li>
                <li>联系技术支持</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={reset}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-3 px-4 rounded-lg transition duration-200"
              >
                重试
              </button>
              <Link 
                href="/web" 
                className="flex-1 bg-white border border-red-600 text-red-600 hover:bg-red-50 text-center py-3 px-4 rounded-lg transition duration-200"
              >
                返回首页
              </Link>
            </div>
            
            <div className="text-center mt-4">
              <Link 
                href="/contact" 
                className="text-blue-600 hover:underline"
              >
                联系技术支持
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
