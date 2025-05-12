'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">群晖科技</h3>
            <p className="text-gray-300">
              群晖科技致力于为企业和个人用户提供创新的存储、备份和网络解决方案。
            </p>
          </div>
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
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-semibold">电话：</span> 400-123-4567
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">邮箱：</span> info@synologyweb.com
              </li>
              <li className="text-gray-300">
                <span className="font-semibold">地址：</span> 北京市海淀区科技园区
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} 群晖科技. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
