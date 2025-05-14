'use client';

import { useState } from 'react';
import Link from 'next/link';

// 知识库分类
const categories = [
  { id: 'all', name: '全部' },
  { id: 'nas', name: 'NAS 存储' },
  { id: 'surveillance', name: '监控方案' },
  { id: 'router', name: '路由器' },
  { id: 'software', name: '软件应用' },
];

// 知识库文章
const articles = [
  {
    id: 'nas-setup',
    title: 'NAS 初始设置指南',
    category: 'nas',
    summary: '详细介绍如何设置和配置您的NAS设备，包括硬盘安装、网络连接和初始化步骤。',
    readTime: '10分钟',
    date: '2023-09-15',
    url: '/support/knowledge/nas-setup',
    popular: true,
  },
  {
    id: 'raid-explained',
    title: 'RAID 类型详解',
    category: 'nas',
    summary: '解释不同RAID类型的优缺点，帮助您为NAS选择最合适的存储配置。',
    readTime: '15分钟',
    date: '2023-08-20',
    url: '/support/knowledge/raid-explained',
    popular: true,
  },
  {
    id: 'backup-strategies',
    title: '数据备份策略',
    category: 'nas',
    summary: '介绍3-2-1备份策略和其他数据保护方法，确保您的重要数据安全。',
    readTime: '12分钟',
    date: '2023-07-10',
    url: '/support/knowledge/backup-strategies',
    popular: false,
  },
  {
    id: 'surveillance-setup',
    title: '监控系统设置指南',
    category: 'surveillance',
    summary: '如何设置和配置监控系统，包括摄像机安装、录像设置和移动侦测。',
    readTime: '20分钟',
    date: '2023-06-15',
    url: '/support/knowledge/surveillance-setup',
    popular: true,
  },
  {
    id: 'camera-placement',
    title: '摄像机布置最佳实践',
    category: 'surveillance',
    summary: '介绍摄像机布置的最佳位置和角度，以获得最佳监控效果。',
    readTime: '8分钟',
    date: '2023-05-20',
    url: '/support/knowledge/camera-placement',
    popular: false,
  },
  {
    id: 'router-setup',
    title: '路由器设置指南',
    category: 'router',
    summary: '详细介绍如何设置和配置您的路由器，包括网络设置、WiFi配置和安全选项。',
    readTime: '15分钟',
    date: '2023-04-25',
    url: '/support/knowledge/router-setup',
    popular: true,
  },
  {
    id: 'mesh-wifi',
    title: 'Mesh WiFi 网络指南',
    category: 'router',
    summary: '了解Mesh WiFi网络的工作原理和设置方法，解决家庭WiFi盲区问题。',
    readTime: '12分钟',
    date: '2023-03-30',
    url: '/support/knowledge/mesh-wifi',
    popular: false,
  },
  {
    id: 'dsm-guide',
    title: 'DSM 操作系统使用指南',
    category: 'software',
    summary: '全面介绍DSM操作系统的功能和使用方法，帮助您充分利用NAS设备。',
    readTime: '25分钟',
    date: '2023-02-15',
    url: '/support/knowledge/dsm-guide',
    popular: true,
  },
  {
    id: 'mobile-apps',
    title: '移动应用使用指南',
    category: 'software',
    summary: '介绍各种移动应用的功能和使用方法，随时随地访问您的设备和数据。',
    readTime: '18分钟',
    date: '2023-01-20',
    url: '/support/knowledge/mobile-apps',
    popular: false,
  },
];

// 常见问题分类
const faqCategories = [
  {
    id: 'nas-faq',
    title: 'NAS 常见问题',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    url: '/support/knowledge/faq/nas',
  },
  {
    id: 'surveillance-faq',
    title: '监控常见问题',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    url: '/support/knowledge/faq/surveillance',
  },
  {
    id: 'router-faq',
    title: '路由器常见问题',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    url: '/support/knowledge/faq/router',
  },
  {
    id: 'software-faq',
    title: '软件常见问题',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    url: '/support/knowledge/faq/software',
  },
];

export default function KnowledgeBasePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 过滤文章
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 获取热门文章
  const popularArticles = articles.filter(article => article.popular);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">知识库</h1>
        <p className="text-xl mb-6">
          查找产品使用指南、教程和常见问题解答，帮助您充分利用美步科技产品。
        </p>
        
        {/* 搜索框 */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索知识库..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="absolute right-3 top-3 text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 面包屑导航 */}
      <div className="mb-8">
        <div className="flex items-center text-sm">
          <Link href="/support" className="text-blue-600 hover:underline">
            支持
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">知识库</span>
        </div>
      </div>

      {/* 常见问题分类 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">常见问题</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqCategories.map((category) => (
            <Link
              key={category.id}
              href={category.url}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
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

      {/* 热门文章 */}
      {searchTerm === '' && selectedCategory === 'all' && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">热门文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article) => (
              <Link
                key={article.id}
                href={article.url}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {categories.find((c) => c.id === article.category)?.name || article.category}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <div className="text-blue-600 font-medium flex items-center">
                    <span>阅读全文</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 文章列表 */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-2xl font-bold">所有文章</h2>
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
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
        </div>

        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到匹配的文章</h3>
            <p className="text-gray-500 mb-4">请尝试调整筛选条件或搜索词。</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              重置筛选条件
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={article.url}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {categories.find((c) => c.id === article.category)?.name || article.category}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <div className="text-blue-600 font-medium flex items-center">
                    <span>阅读全文</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* 联系支持 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">没有找到您需要的信息？</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          如果您在知识库中没有找到所需的信息，请联系我们的技术支持团队，我们将竭诚为您服务。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          联系技术支持
        </Link>
      </div>
    </div>
  );
}
