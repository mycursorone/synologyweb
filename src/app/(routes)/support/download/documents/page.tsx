'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// 文档类别
const documentCategories = [
  { id: 'all', name: '全部' },
  { id: 'manual', name: '用户手册' },
  { id: 'guide', name: '快速安装指南' },
  { id: 'whitepaper', name: '白皮书' },
  { id: 'datasheet', name: '产品规格表' },
];

// 产品系列
const productSeries = [
  { id: 'all', name: '全部产品' },
  { id: 'ds', name: 'DiskStation' },
  { id: 'rs', name: 'RackStation' },
  { id: 'router', name: '路由器' },
  { id: 'surveillance', name: '监控设备' },
];

// 文档列表
const documentsList = [
  {
    id: 'ds220plus-manual',
    title: 'DS220+ 用户手册',
    category: 'manual',
    productSeries: 'ds',
    productModel: 'DS220+',
    description: 'DS220+ NAS 的详细用户手册，包含硬件安装、软件设置和功能使用说明。',
    version: '3.2',
    releaseDate: '2023-06-05',
    language: '简体中文',
    fileSize: '15.2 MB',
    fileFormat: 'PDF',
    downloadUrl: '/downloads/documents/DS220plus_Manual_zhCN.pdf',
  },
  {
    id: 'ds220plus-guide',
    title: 'DS220+ 快速安装指南',
    category: 'guide',
    productSeries: 'ds',
    productModel: 'DS220+',
    description: '帮助您快速设置DS220+ NAS的简明指南，包含硬件连接和初始化设置步骤。',
    version: '1.5',
    releaseDate: '2023-05-20',
    language: '简体中文',
    fileSize: '3.8 MB',
    fileFormat: 'PDF',
    downloadUrl: '/downloads/documents/DS220plus_QIG_zhCN.pdf',
  },
  {
    id: 'ds1621plus-manual',
    title: 'DS1621+ 用户手册',
    category: 'manual',
    productSeries: 'ds',
    productModel: 'DS1621+',
    description: 'DS1621+ NAS 的详细用户手册，包含硬件安装、软件设置和功能使用说明。',
    version: '3.0',
    releaseDate: '2023-04-15',
    language: '简体中文',
    fileSize: '16.5 MB',
    fileFormat: 'PDF',
    downloadUrl: '/downloads/documents/DS1621plus_Manual_zhCN.pdf',
  },
  {
    id: 'rs1221plus-manual',
    title: 'RS1221+ 用户手册',
    category: 'manual',
    productSeries: 'rs',
    productModel: 'RS1221+',
    description: 'RS1221+ 机架式NAS的详细用户手册，包含硬件安装、软件设置和功能使用说明。',
    version: '2.8',
    releaseDate: '2023-03-10',
    language: '简体中文',
    fileSize: '17.2 MB',
    fileFormat: 'PDF',
    downloadUrl: '/downloads/documents/RS1221plus_Manual_zhCN.pdf',
  },
  {
    id: 'rt2600ac-manual',
    title: 'RT2600ac 用户手册',
    category: 'manual',
    productSeries: 'router',
    productModel: 'RT2600ac',
    description: 'RT2600ac 路由器的详细用户手册，包含硬件安装、软件设置和功能使用说明。',
    version: '2.5',
    releaseDate: '2023-02-20',
    language: '简体中文',
    fileSize: '12.8 MB',
    fileFormat: 'PDF',
    downloadUrl: '/downloads/documents/RT2600ac_Manual_zhCN.pdf',
  },
  {
    id: 'bc500-manual',
    title: 'BC500 用户手册',
    category: 'manual',
    productSeries: 'surveillance',
    productModel: 'BC500',
    description: 'BC500 监控摄像机的详细用户手册，包含硬件安装、软件设置和功能使用说明。',
    version: '2.0',
    releaseDate: '2023-01-15',
    language: '简体中文',
    fileSize: '10.5 MB',
    fileFormat: 'PDF',
    downloadUrl: '/downloads/documents/BC500_Manual_zhCN.pdf',
  },
  {
    id: 'storage-whitepaper',
    title: '企业存储解决方案白皮书',
    category: 'whitepaper',
    productSeries: 'all',
    productModel: '通用',
    description: '详细介绍美步企业存储解决方案的白皮书，包含技术架构、应用场景和成功案例。',
    version: '1.2',
    releaseDate: '2023-05-10',
    language: '简体中文',
    fileSize: '8.6 MB',
    fileFormat: 'PDF',
    downloadUrl: '/downloads/documents/Enterprise_Storage_Whitepaper_zhCN.pdf',
  },
  {
    id: 'ds220plus-datasheet',
    title: 'DS220+ 产品规格表',
    category: 'datasheet',
    productSeries: 'ds',
    productModel: 'DS220+',
    description: 'DS220+ NAS 的详细技术规格和性能参数。',
    version: '1.1',
    releaseDate: '2023-04-25',
    language: '简体中文',
    fileSize: '2.3 MB',
    fileFormat: 'PDF',
    downloadUrl: '/downloads/documents/DS220plus_Datasheet_zhCN.pdf',
  },
];

export default function DocumentsDownloadPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSeries, setSelectedSeries] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 过滤文档列表
  const filteredDocuments = documentsList.filter((doc) => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSeries = selectedSeries === 'all' || doc.productSeries === selectedSeries;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.productModel.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSeries && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">文档下载</h1>
        <p className="text-xl">
          下载产品手册、安装指南、白皮书和规格表，了解更多产品信息。
        </p>
      </div>

      {/* 面包屑导航 */}
      <div className="mb-8">
        <div className="flex items-center text-sm">
          <Link href="/support" className="text-blue-600 hover:underline">
            支持
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/support/download" className="text-blue-600 hover:underline">
            下载中心
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">文档下载</span>
        </div>
      </div>

      {/* 筛选和搜索 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">按文档类型筛选</h3>
              <div className="flex flex-wrap gap-2">
                {documentCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">按产品系列筛选</h3>
              <div className="flex flex-wrap gap-2">
                {productSeries.map((series) => (
                  <button
                    key={series.id}
                    onClick={() => setSelectedSeries(series.id)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedSeries === series.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {series.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">搜索文档</h3>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="输入关键词搜索..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 文档列表 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">可用文档</h2>
        {filteredDocuments.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到匹配的文档</h3>
            <p className="text-gray-500 mb-4">请尝试调整筛选条件或搜索词。</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSeries('all');
                setSearchTerm('');
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              重置筛选条件
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    文档名称
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    类型
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    产品型号
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    发布日期
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    大小
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 rounded-md">
                          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{doc.title}</div>
                          <div className="text-sm text-gray-500">{doc.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {documentCategories.find(c => c.id === doc.category)?.name || doc.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.productModel}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.releaseDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doc.fileSize}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a
                        href={doc.downloadUrl}
                        className="text-blue-600 hover:text-blue-900 inline-flex items-center"
                      >
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        下载
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* 帮助提示 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">需要其他文档？</h3>
            <p className="text-gray-700 mb-4 md:mb-0">
              如果您没有找到所需的文档，或者需要其他格式的文档，请联系我们的技术支持团队。
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
              联系支持
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
