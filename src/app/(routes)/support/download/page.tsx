'use client';

import Link from 'next/link';
import Image from 'next/image';

// 下载类别
const downloadCategories = [
  {
    id: 'software',
    title: '软件下载',
    description: '操作系统、应用程序和实用工具',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    url: '/support/download/software',
  },
  {
    id: 'firmware',
    title: '固件下载',
    description: 'NAS、路由器和摄像机固件',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    url: '/support/download/firmware',
  },
  {
    id: 'apps',
    title: '应用程序下载',
    description: '移动应用和桌面客户端',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    url: '/support/download/apps',
  },
  {
    id: 'documents',
    title: '文档下载',
    description: '用户手册、快速安装指南和白皮书',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    url: '/support/download/documents',
  },
];

// 热门下载
const popularDownloads = [
  {
    title: 'DSM 7.2',
    description: '最新的NAS操作系统',
    category: '软件',
    date: '2023-09-15',
    url: '/support/download/software/dsm',
  },
  {
    title: 'RT2600ac 固件 1.3',
    description: '路由器固件更新',
    category: '固件',
    date: '2023-08-20',
    url: '/support/download/firmware/router',
  },
  {
    title: 'DS File 移动应用',
    description: '随时随地访问您的文件',
    category: '应用程序',
    date: '2023-07-10',
    url: '/support/download/apps',
  },
  {
    title: 'DS220+ 用户手册',
    description: '详细的产品使用指南',
    category: '文档',
    date: '2023-06-05',
    url: '/support/download/documents',
  },
];

export default function DownloadCenterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">下载中心</h1>
        <p className="text-xl">
          获取最新的软件、固件、应用程序和文档，充分发挥您的设备潜能。
        </p>
      </div>

      {/* 面包屑导航 */}
      <div className="mb-8">
        <div className="flex items-center text-sm">
          <Link href="/support" className="text-blue-600 hover:underline">
            支持
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">下载中心</span>
        </div>
      </div>

      {/* 下载类别 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">下载类别</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloadCategories.map((category) => (
            <Link
              key={category.id}
              href={category.url}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="text-blue-600 font-medium flex items-center">
                <span>查看详情</span>
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 热门下载 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">热门下载</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  名称
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  类别
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  发布日期
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {popularDownloads.map((download, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{download.title}</div>
                        <div className="text-sm text-gray-500">{download.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {download.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {download.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link href={download.url} className="text-blue-600 hover:text-blue-900">
                      下载
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 产品选择器 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">按产品查找下载</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="product-type" className="block text-sm font-medium text-gray-700 mb-2">
                产品类型
              </label>
              <select
                id="product-type"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>请选择产品类型</option>
                <option>NAS</option>
                <option>路由器</option>
                <option>监控设备</option>
              </select>
            </div>
            <div>
              <label htmlFor="product-series" className="block text-sm font-medium text-gray-700 mb-2">
                产品系列
              </label>
              <select
                id="product-series"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                disabled
              >
                <option>请先选择产品类型</option>
              </select>
            </div>
            <div>
              <label htmlFor="product-model" className="block text-sm font-medium text-gray-700 mb-2">
                产品型号
              </label>
              <select
                id="product-model"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                disabled
              >
                <option>请先选择产品系列</option>
              </select>
            </div>
          </div>
          <div className="mt-6 text-right">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              查找下载
            </button>
          </div>
        </div>
      </div>

      {/* 帮助提示 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">需要帮助？</h3>
            <p className="text-gray-700 mb-4 md:mb-0">
              如果您不确定需要下载哪些文件，或者在安装过程中遇到问题，请查看我们的知识库或联系技术支持。
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end space-x-4">
            <Link
              href="/support/knowledge"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              浏览知识库
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
