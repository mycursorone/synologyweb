'use client';

import { useState } from 'react';
import Link from 'next/link';

// 菜单数据类型
interface MenuItem {
  id: string;
  title: string;
  url: string;
  children?: MenuItem[];
  image?: string;
}

// 菜单数据
const menuData: MenuItem[] = [
  {
    id: 'products',
    title: '产品',
    url: '/products',
    children: [
      {
        id: 'nas',
        title: 'NAS 存储',
        url: '/products/nas',
        children: [
          {
            id: 'home-nas',
            title: '家庭 NAS',
            url: '/products/nas/home',
            children: [
              { id: 'ds220j', title: 'DS220j', url: '/products/nas/home/ds220j', image: '/images/products/ds220j.jpg' },
              { id: 'ds220plus', title: 'DS220+', url: '/products/nas/home/ds220plus', image: '/images/products/ds220plus.jpg' },
              { id: 'ds420j', title: 'DS420j', url: '/products/nas/home/ds420j', image: '/images/products/ds420j.jpg' },
            ],
          },
          {
            id: 'business-nas',
            title: '企业 NAS',
            url: '/products/nas/business',
            children: [
              { id: 'ds1621plus', title: 'DS1621+', url: '/products/nas/business/ds1621plus', image: '/images/products/ds1621plus.jpg' },
              { id: 'ds1821plus', title: 'DS1821+', url: '/products/nas/business/ds1821plus', image: '/images/products/ds1821plus.jpg' },
              { id: 'rs1221plus', title: 'RS1221+', url: '/products/nas/business/rs1221plus', image: '/images/products/rs1221plus.jpg' },
            ],
          },
        ],
      },
      {
        id: 'surveillance',
        title: '监控方案',
        url: '/products/surveillance',
        children: [
          {
            id: 'surveillance-station',
            title: 'Surveillance Station',
            url: '/products/surveillance/station',
            children: [
              { id: 'license', title: '摄像头授权', url: '/products/surveillance/station/license', image: '/images/products/license.jpg' },
              { id: 'vs960hd', title: 'VS960HD', url: '/products/surveillance/station/vs960hd', image: '/images/products/vs960hd.jpg' },
            ],
          },
          {
            id: 'network-camera',
            title: '网络摄像机',
            url: '/products/surveillance/camera',
            children: [
              { id: 'bc500', title: 'BC500', url: '/products/surveillance/camera/bc500', image: '/images/products/bc500.jpg' },
              { id: 'ic500', title: 'IC500', url: '/products/surveillance/camera/ic500', image: '/images/products/ic500.jpg' },
            ],
          },
        ],
      },
      {
        id: 'router',
        title: '路由器',
        url: '/products/router',
        children: [
          {
            id: 'wifi-router',
            title: 'WiFi 路由器',
            url: '/products/router/wifi',
            children: [
              { id: 'rt2600ac', title: 'RT2600ac', url: '/products/router/wifi/rt2600ac', image: '/images/products/rt2600ac.jpg' },
              { id: 'mr2200ac', title: 'MR2200ac', url: '/products/router/wifi/mr2200ac', image: '/images/products/mr2200ac.jpg' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'solutions',
    title: '解决方案',
    url: '/solutions',
    children: [
      {
        id: 'business',
        title: '企业解决方案',
        url: '/solutions/business',
        children: [
          {
            id: 'storage',
            title: '存储解决方案',
            url: '/solutions/business/storage',
            children: [
              { id: 'backup', title: '数据备份', url: '/solutions/business/storage/backup', image: '/images/solutions/backup.jpg' },
              { id: 'virtualization', title: '虚拟化', url: '/solutions/business/storage/virtualization', image: '/images/solutions/virtualization.jpg' },
            ],
          },
          {
            id: 'security',
            title: '安全解决方案',
            url: '/solutions/business/security',
            children: [
              { id: 'surveillance', title: '监控系统', url: '/solutions/business/security/surveillance', image: '/images/solutions/surveillance.jpg' },
              { id: 'vpn', title: 'VPN 服务', url: '/solutions/business/security/vpn', image: '/images/solutions/vpn.jpg' },
            ],
          },
        ],
      },
      {
        id: 'home',
        title: '家庭解决方案',
        url: '/solutions/home',
        children: [
          {
            id: 'multimedia',
            title: '多媒体解决方案',
            url: '/solutions/home/multimedia',
            children: [
              { id: 'photo', title: '照片管理', url: '/solutions/home/multimedia/photo', image: '/images/solutions/photo.jpg' },
              { id: 'video', title: '视频流媒体', url: '/solutions/home/multimedia/video', image: '/images/solutions/video.jpg' },
              { id: 'music', title: '音乐串流', url: '/solutions/home/multimedia/music', image: '/images/solutions/music.jpg' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'support',
    title: '支持',
    url: '/support',
    children: [
      {
        id: 'download',
        title: '下载中心',
        url: '/support/download',
        children: [
          {
            id: 'software',
            title: '软件下载',
            url: '/support/download/software',
            children: [
              { id: 'dsm', title: 'DSM 操作系统', url: '/support/download/software/dsm', image: '/images/support/dsm.jpg' },
              { id: 'utilities', title: '实用工具', url: '/support/download/software/utilities', image: '/images/support/utilities.jpg' },
            ],
          },
          {
            id: 'firmware',
            title: '固件下载',
            url: '/support/download/firmware',
            children: [
              { id: 'nas-firmware', title: 'NAS 固件', url: '/support/download/firmware/nas', image: '/images/support/nas-firmware.jpg' },
              { id: 'router-firmware', title: '路由器固件', url: '/support/download/firmware/router', image: '/images/support/router-firmware.jpg' },
            ],
          },
        ],
      },
      {
        id: 'knowledge',
        title: '知识库',
        url: '/support/knowledge',
        children: [
          {
            id: 'faq',
            title: '常见问题',
            url: '/support/knowledge/faq',
            children: [
              { id: 'nas-faq', title: 'NAS 常见问题', url: '/support/knowledge/faq/nas', image: '/images/support/nas-faq.jpg' },
              { id: 'surveillance-faq', title: '监控常见问题', url: '/support/knowledge/faq/surveillance', image: '/images/support/surveillance-faq.jpg' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'about',
    title: '关于我们',
    url: '/about',
    children: [
      {
        id: 'company',
        title: '公司介绍',
        url: '/about/company',
      },
      {
        id: 'news',
        title: '新闻中心',
        url: '/about/news',
      },
      {
        id: 'careers',
        title: '招贤纳士',
        url: '/about/careers',
      },
    ],
  },
  {
    id: 'contact',
    title: '联系我们',
    url: '/contact',
  },
];

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeThirdMenu, setActiveThirdMenu] = useState<string | null>(null);

  const handleMenuHover = (menuId: string) => {
    setActiveMenu(menuId);
    setActiveSubMenu(null);
    setActiveThirdMenu(null);
  };

  const handleSubMenuHover = (menuId: string) => {
    setActiveSubMenu(menuId);
    setActiveThirdMenu(null);
  };

  const handleThirdMenuHover = (menuId: string) => {
    setActiveThirdMenu(menuId);
  };

  return (
    <nav className="bg-white">
      <ul className="flex">
        {menuData.map((menu) => (
          <li
            key={menu.id}
            className="relative group"
            onMouseEnter={() => handleMenuHover(menu.id)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={menu.url}
              className={`block px-4 py-4 text-gray-700 hover:text-blue-600 font-medium border-b-2 ${
                activeMenu === menu.id ? 'border-blue-600 text-blue-600' : 'border-transparent'
              }`}
            >
              {menu.title}
            </Link>

            {/* 一级下拉菜单 */}
            {activeMenu === menu.id && menu.children && (
              <div className="absolute left-0 top-full bg-white shadow-lg rounded-b-lg z-50 w-[800px]">
                <div className="flex p-4">
                  {/* 二级菜单列表 */}
                  <div className="w-1/4 border-r border-gray-200">
                    <ul className="pr-2">
                      {menu.children.map((subMenu) => (
                        <li
                          key={subMenu.id}
                          onMouseEnter={() => handleSubMenuHover(subMenu.id)}
                          className={`px-3 py-2 mb-1 rounded ${
                            activeSubMenu === subMenu.id
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Link href={subMenu.url} className="block font-medium text-sm">
                            {subMenu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 三级菜单列表 */}
                  {activeSubMenu &&
                    menu.children.find((item) => item.id === activeSubMenu)?.children && (
                      <div className="w-1/4 border-r border-gray-200 pl-2">
                        <ul className="pr-2">
                          {menu.children
                            .find((item) => item.id === activeSubMenu)
                            ?.children?.map((thirdMenu) => (
                              <li
                                key={thirdMenu.id}
                                onMouseEnter={() => handleThirdMenuHover(thirdMenu.id)}
                                className={`px-3 py-2 mb-1 rounded ${
                                  activeThirdMenu === thirdMenu.id
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                              >
                                <Link href={thirdMenu.url} className="block text-sm">
                                  {thirdMenu.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}

                  {/* 四级菜单和图片 */}
                  {activeThirdMenu &&
                    activeSubMenu &&
                    menu.children
                      .find((item) => item.id === activeSubMenu)
                      ?.children?.find((item) => item.id === activeThirdMenu)?.children && (
                      <div className="w-2/4 grid grid-cols-2 gap-3 p-2">
                        {menu.children
                          .find((item) => item.id === activeSubMenu)
                          ?.children?.find((item) => item.id === activeThirdMenu)
                          ?.children?.map((fourthMenu) => (
                            <Link
                              key={fourthMenu.id}
                              href={fourthMenu.url}
                              className="block p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md"
                            >
                              <div className="h-24 bg-blue-100 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                                <span className="text-blue-600 font-medium text-sm">{fourthMenu.title}</span>
                              </div>
                              <h4 className="font-medium text-gray-900 text-sm">{fourthMenu.title}</h4>
                              <p className="text-xs text-gray-500 mt-1">了解更多特性和优势</p>
                            </Link>
                          ))}
                      </div>
                    )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;
