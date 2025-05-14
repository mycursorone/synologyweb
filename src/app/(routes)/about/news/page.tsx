'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 新闻类别
const newsCategories = [
  { id: 'all', name: '全部' },
  { id: 'product', name: '产品新闻' },
  { id: 'company', name: '公司新闻' },
  { id: 'industry', name: '行业动态' },
  { id: 'event', name: '活动公告' },
];

// 新闻列表
const newsList = [
  {
    id: 'new-nas-2023',
    title: '美步科技发布全新一代NAS存储设备',
    category: 'product',
    date: '2023-10-15',
    summary: '美步科技今日发布全新一代NAS存储设备，采用最新处理器和存储技术，性能提升50%，同时能耗降低30%。',
    imageUrl: '/images/products/ds220plus.jpg',
    featured: true,
  },
  {
    id: 'ai-storage-solution',
    title: '美步科技推出AI驱动的智能存储解决方案',
    category: 'product',
    date: '2023-09-20',
    summary: '美步科技推出业内首个AI驱动的智能存储解决方案，通过机器学习优化数据存储和访问，提高效率并降低成本。',
    imageUrl: '/images/solutions/enterprise-storage.jpg',
    featured: true,
  },
  {
    id: 'global-expansion',
    title: '美步科技宣布全球业务扩张计划',
    category: 'company',
    date: '2023-08-15',
    summary: '美步科技宣布新一轮全球业务扩张计划，将在欧洲和南美开设新的分支机构，进一步拓展国际市场。',
    imageUrl: '/images/about/company-building.jpg',
    featured: false,
  },
  {
    id: 'partnership-cloud',
    title: '美步科技与领先云服务提供商达成战略合作',
    category: 'company',
    date: '2023-07-10',
    summary: '美步科技与全球领先的云服务提供商达成战略合作，共同开发混合云存储解决方案，为企业用户提供更灵活的数据管理选择。',
    imageUrl: '/images/features/cloud.jpg',
    featured: true,
  },
  {
    id: 'industry-report-2023',
    title: '美步科技发布2023年数据存储行业报告',
    category: 'industry',
    date: '2023-06-25',
    summary: '美步科技发布《2023年数据存储行业报告》，分析了当前行业趋势和未来发展方向，为企业数据管理提供参考。',
    imageUrl: '/images/solutions/small-business-it.jpg',
    featured: false,
  },
  {
    id: 'tech-summit-2023',
    title: '美步科技将举办2023技术峰会',
    category: 'event',
    date: '2023-05-30',
    summary: '美步科技将于下月举办2023技术峰会，邀请行业专家和合作伙伴共同探讨数据存储和管理的未来发展。',
    imageUrl: '/images/solutions/education-data.jpg',
    featured: false,
  },
  {
    id: 'award-innovation',
    title: '美步科技荣获年度技术创新奖',
    category: 'company',
    date: '2023-04-15',
    summary: '美步科技凭借在数据存储领域的创新技术和产品，荣获2023年度技术创新奖，彰显公司在行业中的领先地位。',
    imageUrl: '/images/about/milestone-2010.jpg',
    featured: false,
  },
  {
    id: 'security-solution',
    title: '美步科技推出增强型数据安全解决方案',
    category: 'product',
    date: '2023-03-20',
    summary: '美步科技推出增强型数据安全解决方案，提供端到端加密和高级访问控制，帮助企业应对日益复杂的网络安全挑战。',
    imageUrl: '/images/features/security.jpg',
    featured: false,
  },
  {
    id: 'market-share-growth',
    title: '美步科技市场份额持续增长',
    category: 'company',
    date: '2023-02-10',
    summary: '最新市场研究报告显示，美步科技在全球NAS存储市场的份额持续增长，成为增长最快的存储解决方案提供商之一。',
    imageUrl: '/images/solutions/healthcare-data.jpg',
    featured: false,
  },
  {
    id: 'industry-trend-analysis',
    title: '数据存储行业趋势分析：从本地到云端',
    category: 'industry',
    date: '2023-01-15',
    summary: '美步科技发布行业趋势分析报告，探讨数据存储从本地到云端的演变，以及混合存储模式在企业中的应用。',
    imageUrl: '/images/solutions/home-multimedia.jpg',
    featured: false,
  },
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 过滤新闻
  const filteredNews = newsList.filter((news) => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          news.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 获取特色新闻
  const featuredNews = newsList.filter(news => news.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">新闻中心</h1>
        <p className="text-xl mb-6">
          了解美步科技的最新动态、产品发布和行业见解。
        </p>

        {/* 搜索框 */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索新闻..."
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
          <Link href="/about" className="text-blue-600 hover:underline">
            关于我们
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">新闻中心</span>
        </div>
      </div>

      {/* 特色新闻 */}
      {searchTerm === '' && selectedCategory === 'all' && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">特色新闻</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredNews.map((news, index) => (
              <div
                key={news.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className={`relative ${index === 0 ? 'h-64 lg:h-80' : 'h-48'}`}>
                  {news.imageUrl ? (
                    <Image
                      src={news.imageUrl}
                      alt={news.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium text-lg">{news.title}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-600 text-white">
                      {newsCategories.find((c) => c.id === news.category)?.name || news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.summary}</p>
                  <Link
                    href={`/about/news/${news.id}`}
                    className="text-blue-600 font-medium flex items-center"
                  >
                    <span>阅读全文</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 新闻列表 */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {searchTerm || selectedCategory !== 'all' ? '搜索结果' : '所有新闻'}
          </h2>
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((category) => (
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

        {filteredNews.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到匹配的新闻</h3>
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
            {filteredNews.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48">
                  {news.imageUrl ? (
                    <Image
                      src={news.imageUrl}
                      alt={news.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium text-lg">{news.title}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-600 text-white">
                      {newsCategories.find((c) => c.id === news.category)?.name || news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.summary}</p>
                  <Link
                    href={`/about/news/${news.id}`}
                    className="text-blue-600 font-medium flex items-center"
                  >
                    <span>阅读全文</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 订阅新闻 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">订阅我们的新闻</h2>
            <p className="text-gray-700">
              订阅我们的新闻通讯，获取美步科技的最新动态、产品发布和行业见解。
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="flex">
              <input
                type="email"
                placeholder="您的电子邮箱"
                className="flex-grow px-4 py-2 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-r-lg transition-colors">
                订阅
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              我们尊重您的隐私，不会向第三方分享您的信息。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
