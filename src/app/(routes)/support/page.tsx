'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 支持类别
const supportCategories = [
  {
    id: 'download',
    title: '下载中心',
    description: '获取最新的软件、固件和应用程序',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    links: [
      { title: '软件下载', url: '/support/download/software' },
      { title: '固件下载', url: '/support/download/firmware' },
      { title: '应用程序下载', url: '/support/download/apps' },
    ]
  },
  {
    id: 'knowledge',
    title: '知识库',
    description: '查找常见问题解答、教程和指南',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    links: [
      { title: '常见问题', url: '/support/knowledge/faq' },
      { title: '教程', url: '/support/knowledge/tutorials' },
      { title: '用户手册', url: '/support/knowledge/manuals' },
    ]
  },
  {
    id: 'service',
    title: '服务与支持',
    description: '获取技术支持和售后服务',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    links: [
      { title: '联系技术支持', url: '/support/service/contact' },
      { title: '保修信息', url: '/support/service/warranty' },
      { title: '维修服务', url: '/support/service/repair' },
    ]
  },
  {
    id: 'community',
    title: '社区',
    description: '加入我们的社区，分享经验和获取帮助',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    links: [
      { title: '用户论坛', url: '/support/community/forum' },
      { title: '开发者中心', url: '/support/community/developer' },
      { title: '用户案例', url: '/support/community/stories' },
    ]
  },
];

// 常见问题
const faqs = [
  {
    question: '如何重置我的设备？',
    answer: '您可以通过按住设备背面的重置按钮5秒钟来重置设备。请注意，这将删除所有数据，建议在重置前备份重要数据。'
  },
  {
    question: '如何更新固件？',
    answer: '您可以在设备的管理界面中找到"系统更新"选项，或者从我们的下载中心获取最新固件并手动更新。建议定期检查更新以获得最佳性能和安全性。'
  },
  {
    question: '产品保修期是多久？',
    answer: '我们的大多数产品提供2年标准保修。某些企业级产品可能提供延长保修选项。您可以在产品包装或保修卡上找到具体信息。'
  },
  {
    question: '如何联系技术支持？',
    answer: '您可以通过电话、电子邮件或在线客服联系我们的技术支持团队。我们的支持团队工作时间为周一至周五9:00-18:00。'
  },
];

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // 处理FAQ展开/折叠
  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">支持中心</h1>
        <p className="text-xl mb-6">
          我们随时为您提供帮助和支持
        </p>
        
        {/* 搜索框 */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索支持内容..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* 支持类别 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">支持类别</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-blue-600 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 常见问题 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">常见问题</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedFaq === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 pb-4 transition-all duration-300 ${
                  expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/support/knowledge/faq"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            查看更多常见问题
          </Link>
        </div>
      </div>

      {/* 联系我们 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">需要更多帮助？</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            如果您没有找到所需的信息，请联系我们的支持团队。我们的专业技术人员随时为您提供帮助。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            联系我们
          </Link>
        </div>
      </div>
    </div>
  );
}
