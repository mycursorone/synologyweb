'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MegaMenu from '@/components/mega-menu/MegaMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-8">
            {/* 添加Logo图片 */}
            <div className="mr-2 relative w-10 h-10 flex items-center justify-center bg-blue-600 rounded-md">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">群晖科技</span>
          </Link>

          {/* 将MegaMenu集成到Header中 */}
          <div className="hidden md:block menu-container">
            <MegaMenu />
          </div>
        </div>

        {/* 右侧功能区 */}
        <div className="flex items-center">
          {/* 搜索按钮 */}
          <button className="text-gray-500 hover:text-blue-600 mr-4 hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* 语言选择 */}
          <div className="mr-4 hidden md:block">
            <span className="text-gray-500 hover:text-blue-600 cursor-pointer">中文</span>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              产品
            </Link>
            <Link
              href="/solutions"
              className="text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              解决方案
            </Link>
            <Link
              href="/support"
              className="text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              支持
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              关于我们
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              联系我们
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
