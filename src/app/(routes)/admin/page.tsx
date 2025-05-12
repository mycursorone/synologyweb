export default function AdminPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">管理后台</h1>
        <p className="text-gray-600 text-center mb-8">
          管理后台功能正在开发中，敬请期待...
        </p>
        <div className="flex justify-center">
          <a
            href="/web"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            返回网站首页
          </a>
        </div>
      </div>
    </div>
  );
}
