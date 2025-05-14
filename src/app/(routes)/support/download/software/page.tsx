'use client';

import { useState } from 'react';
import Link from 'next/link';

// 软件类别
const softwareCategories = [
  { id: 'all', name: '全部' },
  { id: 'os', name: '操作系统' },
  { id: 'utilities', name: '实用工具' },
  { id: 'mobile', name: '移动应用' },
  { id: 'desktop', name: '桌面客户端' },
];

// 软件列表
const softwareList = [
  {
    id: 'dsm7',
    name: 'DSM 7.2',
    version: '7.2.1-69057',
    category: 'os',
    description: '美步NAS操作系统，提供直观的用户界面和强大的功能。',
    releaseDate: '2023-09-15',
    size: '275 MB',
    compatibility: 'DS220+, DS420j, DS1621+, DS1821+',
    url: '/support/download/software/dsm',
  },
  {
    id: 'dsm6',
    name: 'DSM 6.2',
    version: '6.2.4-25556',
    category: 'os',
    description: '适用于旧型号NAS的稳定操作系统。',
    releaseDate: '2022-12-10',
    size: '260 MB',
    compatibility: '旧型号NAS',
    url: '/support/download/software/dsm6',
  },
  {
    id: 'assistant',
    name: '美步助手',
    version: '7.0.3-50057',
    category: 'utilities',
    description: '帮助您快速设置NAS并管理基本功能的桌面工具。',
    releaseDate: '2023-08-20',
    size: '15 MB',
    compatibility: 'Windows 10/11, macOS 11+',
    url: '/support/download/software/assistant',
  },
  {
    id: 'dsfile',
    name: 'DS File',
    version: '5.2.7',
    category: 'mobile',
    description: '移动应用，让您随时随地访问NAS上的文件。',
    releaseDate: '2023-07-10',
    size: '45 MB',
    compatibility: 'iOS 14+, Android 8+',
    url: '/support/download/software/dsfile',
  },
  {
    id: 'dsdrive',
    name: 'DS Drive',
    version: '4.5.3',
    category: 'desktop',
    description: '桌面同步工具，自动同步您的文件到NAS。',
    releaseDate: '2023-06-15',
    size: '32 MB',
    compatibility: 'Windows 10/11, macOS 11+',
    url: '/support/download/software/dsdrive',
  },
  {
    id: 'dsvideo',
    name: 'DS Video',
    version: '3.2.5',
    category: 'mobile',
    description: '视频流媒体应用，在移动设备上观看NAS上的视频。',
    releaseDate: '2023-05-20',
    size: '50 MB',
    compatibility: 'iOS 14+, Android 8+',
    url: '/support/download/software/dsvideo',
  },
];

export default function SoftwareDownloadPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 过滤软件列表
  const filteredSoftware = softwareList.filter((software) => {
    const matchesCategory = selectedCategory === 'all' || software.category === selectedCategory;
    const matchesSearch = software.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          software.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">软件下载</h1>
        <p className="text-xl">
          下载最新的操作系统、实用工具和应用程序，提升您的设备体验。
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
          <span className="text-gray-700">软件下载</span>
        </div>
      </div>

      {/* 筛选和搜索 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-medium mb-2">按类别筛选</h3>
              <div className="flex flex-wrap gap-2">
                {softwareCategories.map((category) => (
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
            <div className="w-full md:w-1/3">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                搜索软件
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
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

      {/* 软件列表 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">可用软件</h2>
        {filteredSoftware.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到匹配的软件</h3>
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
          <div className="grid grid-cols-1 gap-6">
            {filteredSoftware.map((software) => (
              <div key={software.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-900">{software.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">版本: {software.version} | 发布日期: {software.releaseDate} | 大小: {software.size}</p>
                      <p className="text-gray-700">{software.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        href={software.url}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        下载
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-500">
                      <div className="mb-2 md:mb-0 md:mr-6">
                        <span className="font-medium text-gray-700">兼容设备:</span> {software.compatibility}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">类别:</span>{' '}
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          {softwareCategories.find((c) => c.id === software.category)?.name || software.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 帮助提示 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">安装帮助</h3>
            <p className="text-gray-700 mb-4 md:mb-0">
              如果您在软件安装或使用过程中遇到问题，请查看我们的安装指南或联系技术支持。
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end space-x-4">
            <Link
              href="/support/knowledge/faq"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              安装指南
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
