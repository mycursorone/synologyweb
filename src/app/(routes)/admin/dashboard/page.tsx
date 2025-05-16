'use client';

import { useSession } from 'next-auth/react';

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">仪表板</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">产品</h2>
          <p className="text-3xl font-bold text-blue-600">8</p>
          <p className="text-gray-500 mt-2">总产品数量</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">解决方案</h2>
          <p className="text-3xl font-bold text-green-600">6</p>
          <p className="text-gray-500 mt-2">总解决方案数量</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">分类</h2>
          <p className="text-3xl font-bold text-purple-600">3</p>
          <p className="text-gray-500 mt-2">总分类数量</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg font-semibold mb-4">快速操作</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 py-3 px-4 rounded-md transition-colors">
            添加新产品
          </button>
          <button className="bg-green-100 hover:bg-green-200 text-green-800 py-3 px-4 rounded-md transition-colors">
            添加新解决方案
          </button>
          <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 py-3 px-4 rounded-md transition-colors">
            管理分类
          </button>
          <button className="bg-orange-100 hover:bg-orange-200 text-orange-800 py-3 px-4 rounded-md transition-colors">
            上传媒体文件
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">系统信息</h2>
        <div className="space-y-2">
          <p><span className="font-medium">当前用户：</span> {session?.user?.name}</p>
          <p><span className="font-medium">角色：</span> {session?.user?.role}</p>
          <p><span className="font-medium">数据库状态：</span> <span className="text-green-600">已连接</span></p>
          <p><span className="font-medium">系统版本：</span> 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
