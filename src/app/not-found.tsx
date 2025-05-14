'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
  // 添加页面标题
  useEffect(() => {
    document.title = '页面未找到 - 美步科技';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 px-6 py-8 text-white text-center">
          <h1 className="text-6xl font-bold mb-2">404</h1>
          <h2 className="text-2xl font-semibold">页面未找到</h2>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-center">
            抱歉，您访问的页面不存在或已被移除。
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">您可以尝试：</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>检查网址是否正确</li>
                <li>返回上一页</li>
                <li>访问我们的首页</li>
                <li>联系我们获取帮助</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/web" 
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg transition duration-200"
              >
                返回首页
              </Link>
              <Link 
                href="/contact" 
                className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-3 px-4 rounded-lg transition duration-200"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
