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

export default function Footer() {
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
  
  // 如果没有Footer数据，显示默认Footer
  if (loading || error || !footer) {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">关于我们</h3>
              <p className="text-gray-400">
                美步科技是一家专注于存储解决方案的科技公司，提供高性能、可靠的存储产品和服务。
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">产品</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/nas" className="text-gray-400 hover:text-white">
                    网络存储
                  </Link>
                </li>
                <li>
                  <Link href="/products/surveillance" className="text-gray-400 hover:text-white">
                    监控系统
                  </Link>
                </li>
                <li>
                  <Link href="/products/backup" className="text-gray-400 hover:text-white">
                    备份解决方案
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">解决方案</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/solutions/business" className="text-gray-400 hover:text-white">
                    企业解决方案
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/home" className="text-gray-400 hover:text-white">
                    家庭解决方案
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  电话: 400-123-4567
                </li>
                <li className="text-gray-400">
                  邮箱: info@meibu.com
                </li>
                <li className="text-gray-400">
                  地址: 中国四川省成都市高新区
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2023 美步科技. 保留所有权利.
            </p>
            
            <div className="mt-4 md:mt-0">
              <a
                href="https://beian.miit.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-white"
              >
                蜀ICP备17032817号-1
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  // 显示动态Footer
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 默认的第一列 - 关于我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <p className="text-gray-400">
              美步科技是一家专注于存储解决方案的科技公司，提供高性能、可靠的存储产品和服务。
            </p>
          </div>
          
          {/* 产品链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">产品</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/nas" className="text-gray-400 hover:text-white">
                  网络存储
                </Link>
              </li>
              <li>
                <Link href="/products/surveillance" className="text-gray-400 hover:text-white">
                  监控系统
                </Link>
              </li>
              <li>
                <Link href="/products/backup" className="text-gray-400 hover:text-white">
                  备份解决方案
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 解决方案链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">解决方案</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/business" className="text-gray-400 hover:text-white">
                  企业解决方案
                </Link>
              </li>
              <li>
                <Link href="/solutions/home" className="text-gray-400 hover:text-white">
                  家庭解决方案
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 联系我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                电话: 400-123-4567
              </li>
              <li className="text-gray-400">
                邮箱: info@meibu.com
              </li>
              <li className="text-gray-400">
                地址: 中国四川省成都市高新区
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
                      className="text-gray-400 hover:text-white"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {footer.copyright || '© 2023 美步科技. 保留所有权利.'}
          </p>
          
          {footer.icpNumber && (
            <div className="mt-4 md:mt-0">
              <a
                href={footer.icpLink || 'https://beian.miit.gov.cn'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-white"
              >
                {footer.icpNumber}
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
