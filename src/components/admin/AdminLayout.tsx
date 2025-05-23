'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  // 初始化时，根据当前路径自动展开对应的菜单
  useEffect(() => {
    const currentPath = pathname;

    // 特殊处理分类管理菜单
    if (currentPath.startsWith('/admin/categories')) {
      setExpandedMenus(prev => {
        if (!prev.includes('#')) {
          return [...prev, '#'];
        }
        return prev;
      });
    }

    // 处理其他菜单
    const shouldExpandMenus = menuItems
      .filter(item =>
        item.subItems &&
        item.path !== '#' &&
        currentPath.startsWith(item.path)
      )
      .map(item => item.path);

    if (shouldExpandMenus.length > 0) {
      setExpandedMenus(prev => {
        const newMenus = [...prev];
        shouldExpandMenus.forEach(menu => {
          if (!newMenus.includes(menu)) {
            newMenus.push(menu);
          }
        });
        return newMenus;
      });
    }
  }, [pathname]);

  // 如果未认证，重定向到登录页面
  if (status === 'unauthenticated') {
    router.push('/admin/login');
    return null;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/admin/login' });
  };

  // 处理菜单点击
  const handleMenuClick = (item: any, event: React.MouseEvent) => {
    // 如果有子菜单，则切换展开/折叠状态
    if (item.subItems && item.subItems.length > 0) {
      event.preventDefault();
      setExpandedMenus(prev =>
        prev.includes(item.path)
          ? prev.filter(path => path !== item.path)
          : [...prev, item.path]
      );
    }
  };

  const menuItems = [
    { name: '仪表板', path: '/admin/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: '产品管理', path: '/admin/products', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
    { name: '解决方案', path: '/admin/solutions', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    {
      name: '分类管理',
      path: '#', // 使用#作为路径，这样点击时不会导航
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      subItems: [
        { name: '标签分类', path: '/admin/categories/tag-categories' },
        { name: '标签管理', path: '/admin/categories/tags' },
        { name: '产品标签关联', path: '/admin/categories/product-tags' },
      ]
    },
    { name: '媒体库', path: '/admin/media', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Footer管理', path: '/admin/footer', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
    {
      name: '用户管理',
      path: '#',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      subItems: [
        { name: '账号管理', path: '/admin/users' },
        { name: '角色管理', path: '/admin/users/roles' },
      ]
    },
    { name: '系统设置', path: '/admin/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 侧边栏 */}
      <div className={`bg-white shadow-md fixed inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:inset-auto md:h-auto`}>
        <div className="flex items-center justify-center h-16 border-b">
          <h1 className="text-base font-bold text-blue-600">前端管理后端</h1>
        </div>

        <div className="p-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.path} className="space-y-1">
              {item.subItems ? (
                // 有子菜单的项目，点击时只展开/折叠子菜单，不导航
                <div
                  onClick={(e) => handleMenuClick(item, e)}
                  className={`flex items-center p-2 rounded-md transition-all duration-200 cursor-pointer admin-menu-item
                    ${pathname === item.path || (item.subItems && item.subItems.some(sub => pathname === sub.path))
                      ? 'active'
                      : ''
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 mr-3 transition-colors duration-200 admin-icon-button ${
                      pathname === item.path || (item.subItems && item.subItems.some(sub => pathname === sub.path))
                        ? 'text-accent'
                        : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                  {item.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-auto transition-transform duration-200 ${
                      expandedMenus.includes(item.path) ? 'rotate-180 text-accent' : 'text-gray-400'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              ) : (
                // 没有子菜单的项目，点击时正常导航
                <Link
                  href={item.path}
                  className={`flex items-center p-2 rounded-md transition-all duration-200 admin-menu-item
                    ${pathname === item.path
                      ? 'active'
                      : ''
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 mr-3 transition-colors duration-200 admin-icon-button ${
                      pathname === item.path
                        ? 'text-accent'
                        : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                  {item.name}
                </Link>
              )}

              {/* 子菜单 */}
              {item.subItems && expandedMenus.includes(item.path) && (
                <div className="ml-6 space-y-1 border-l border-gray-200 pl-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.path}
                      href={subItem.path}
                      className={`flex items-center p-2 rounded-md transition-all duration-200 admin-submenu-item ${
                        pathname === subItem.path
                          ? 'active'
                          : ''
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 主内容区 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部导航栏 */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 admin-card">
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-500 focus:outline-none admin-icon-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="flex items-center">
            <div className="relative">
              <button className="flex items-center text-gray-700 focus:outline-none admin-clickable">
                <span className="mr-2">{session?.user?.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden">
                <Link
                  href="/admin/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 admin-submenu-item"
                >
                  个人资料
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 admin-submenu-item"
                >
                  退出登录
                </button>
              </div>
            </div>

            <button
              onClick={handleSignOut}
              className="ml-4 text-gray-700 focus:outline-none admin-icon-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* 内容区 */}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
