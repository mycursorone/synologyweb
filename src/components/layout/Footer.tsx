'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FooterLink {
  id: string;
  title: string;
  url: string;
  category: string;
  icon?: string;
  sortOrder: number;
  isActive: boolean;
}

interface Footer {
  id: string;
  icpNumber?: string;
  icpLink?: string;
  copyright?: string;
  isActive: boolean;
  links: FooterLink[];
}

const Footer = () => {
  const [footer, setFooter] = useState<Footer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 获取Footer信息
  useEffect(() => {
    const fetchFooter = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/footers?active=true');
        if (!response.ok) throw new Error('获取Footer失败');

        const data = await response.json();
        if (data.footers && data.footers.length > 0) {
          setFooter(data.footers[0]);
        }
      } catch (error) {
        console.error('获取Footer失败:', error);
        setError('获取Footer信息失败');
      } finally {
        setLoading(false);
      }
    };

    fetchFooter();
  }, []);

  // 按分类对链接进行分组
  const getLinksByCategory = () => {
    if (!footer || !footer.links || footer.links.length === 0) return {};

    return footer.links.reduce((acc: Record<string, FooterLink[]>, link) => {
      if (!acc[link.category]) {
        acc[link.category] = [];
      }
      acc[link.category].push(link);
      return acc;
    }, {});
  };

  const linksByCategory = getLinksByCategory();
  const categories = Object.keys(linksByCategory);

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 第一列 - 关于我们 */}
          <div>
            <h3 className="text-xl font-bold mb-4">美步科技</h3>
            <p className="text-gray-300">
              美步科技致力于为企业和个人用户提供创新的存储、备份和网络解决方案。
            </p>
          </div>

          {/* 产品链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">产品</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/nas" className="text-gray-300 hover:text-white">
                  NAS 存储
                </Link>
              </li>
              <li>
                <Link href="/products/surveillance" className="text-gray-300 hover:text-white">
                  监控方案
                </Link>
              </li>
              <li>
                <Link href="/products/router" className="text-gray-300 hover:text-white">
                  路由器
                </Link>
              </li>
              <li>
                <Link href="/products/accessories" className="text-gray-300 hover:text-white">
                  配件
                </Link>
              </li>
            </ul>
          </div>

          {/* 解决方案链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">解决方案</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/business" className="text-gray-300 hover:text-white">
                  企业解决方案
                </Link>
              </li>
              <li>
                <Link href="/solutions/home" className="text-gray-300 hover:text-white">
                  家庭解决方案
                </Link>
              </li>
              <li>
                <Link href="/solutions/education" className="text-gray-300 hover:text-white">
                  教育解决方案
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-semibold">电话：</span> 028-82009000
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">邮箱：</span> mymeibu@tuta.io
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">地址：</span> 成都市武侯区人民南路四段1号时代数码大厦22楼B9
              </li>
            </ul>
          </div>

          {/* 动态外部链接 */}
          {categories.map((category) => (
            <div key={category} className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {linksByCategory[category].map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>{footer?.copyright || `© ${new Date().getFullYear()} 成都美步科技有限公司. 保留所有权利.`}</p>
          {footer?.icpNumber ? (
            <p className="mt-2">
              <a
                href={footer.icpLink || 'https://beian.miit.gov.cn'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                ICP备案号： {footer.icpNumber}
              </a>
            </p>
          ) : (
            <p className="mt-2">
              <a
                href="https://beian.miit.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                ICP备案号： 蜀ICP备17032817号-1
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
