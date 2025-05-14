'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// 应用类别
const appCategories = [
  { id: 'all', name: '全部' },
  { id: 'mobile', name: '移动应用' },
  { id: 'desktop', name: '桌面应用' },
  { id: 'utility', name: '实用工具' },
  { id: 'multimedia', name: '多媒体' },
];

// 应用列表
const appsList = [
  {
    id: 'dsfile',
    name: 'DS File',
    version: '5.2.7',
    category: 'mobile',
    description: '随时随地访问您的NAS文件。DS File让您可以通过移动设备浏览、上传、下载和管理NAS上的文件。',
    platforms: ['iOS', 'Android'],
    releaseDate: '2023-07-10',
    size: '45 MB',
    features: [
      '浏览和管理NAS上的文件和文件夹',
      '上传手机照片和视频到NAS',
      '下载文件到移动设备以供离线访问',
      '与其他应用共享文件',
      '支持文件预览和搜索'
    ],
    downloadLinks: {
      iOS: 'https://apps.apple.com/app/ds-file/id1234567890',
      Android: 'https://play.google.com/store/apps/details?id=com.meibu.dsfile'
    },
    iconUrl: '/images/apps/dsfile.png'
  },
  {
    id: 'dsvideo',
    name: 'DS Video',
    version: '3.2.5',
    category: 'mobile',
    description: '将您的NAS变成个人视频流媒体服务器。DS Video让您可以在移动设备上观看NAS上存储的视频内容。',
    platforms: ['iOS', 'Android', 'Apple TV', 'Android TV'],
    releaseDate: '2023-05-20',
    size: '50 MB',
    features: [
      '流式播放NAS上的视频内容',
      '自动转码以适应不同设备',
      '继续播放功能，在不同设备间无缝切换',
      '创建和管理播放列表',
      '支持字幕和多音轨'
    ],
    downloadLinks: {
      iOS: 'https://apps.apple.com/app/ds-video/id1234567891',
      Android: 'https://play.google.com/store/apps/details?id=com.meibu.dsvideo'
    },
    iconUrl: '/images/apps/dsvideo.png'
  },
  {
    id: 'dsphoto',
    name: 'DS Photo',
    version: '4.1.3',
    category: 'mobile',
    description: '管理和分享您的照片库。DS Photo提供直观的界面，让您可以浏览、整理和分享NAS上的照片。',
    platforms: ['iOS', 'Android'],
    releaseDate: '2023-06-15',
    size: '48 MB',
    features: [
      '自动备份手机照片到NAS',
      '按时间、位置或标签浏览照片',
      '创建和分享相册',
      '照片编辑功能',
      '支持RAW格式和EXIF信息'
    ],
    downloadLinks: {
      iOS: 'https://apps.apple.com/app/ds-photo/id1234567892',
      Android: 'https://play.google.com/store/apps/details?id=com.meibu.dsphoto'
    },
    iconUrl: '/images/apps/dsphoto.png'
  },
  {
    id: 'dsdrive',
    name: 'DS Drive',
    version: '4.5.3',
    category: 'desktop',
    description: '在桌面电脑上同步和访问NAS文件。DS Drive提供类似云存储的体验，自动同步文件并提供离线访问。',
    platforms: ['Windows', 'macOS'],
    releaseDate: '2023-06-15',
    size: '32 MB',
    features: [
      '自动同步指定文件夹',
      '文件版本控制',
      '选择性同步',
      '离线访问文件',
      '与Windows资源管理器和macOS Finder集成'
    ],
    downloadLinks: {
      Windows: '/downloads/apps/dsdrive_win_4.5.3.exe',
      macOS: '/downloads/apps/dsdrive_mac_4.5.3.dmg'
    },
    iconUrl: '/images/apps/dsdrive.png'
  },
  {
    id: 'dsassistant',
    name: '美步助手',
    version: '7.0.3',
    category: 'utility',
    description: '帮助您设置和管理NAS设备。美步助手可以自动发现网络中的NAS设备，并提供简单的设置向导。',
    platforms: ['Windows', 'macOS'],
    releaseDate: '2023-08-20',
    size: '15 MB',
    features: [
      '自动发现网络中的NAS设备',
      '简化NAS初始设置过程',
      '映射网络驱动器',
      '监控NAS状态',
      '一键访问Web界面'
    ],
    downloadLinks: {
      Windows: '/downloads/apps/assistant_win_7.0.3.exe',
      macOS: '/downloads/apps/assistant_mac_7.0.3.dmg'
    },
    iconUrl: '/images/apps/assistant.png'
  },
  {
    id: 'dsaudio',
    name: 'DS Audio',
    version: '3.8.2',
    category: 'multimedia',
    description: '将您的NAS变成个人音乐流媒体服务器。DS Audio让您可以在任何设备上欣赏NAS上存储的音乐。',
    platforms: ['iOS', 'Android', 'Windows', 'macOS'],
    releaseDate: '2023-04-10',
    size: '40 MB',
    features: [
      '流式播放NAS上的音乐',
      '创建和管理播放列表',
      '支持多种音频格式',
      '均衡器和音效设置',
      '离线收听功能'
    ],
    downloadLinks: {
      iOS: 'https://apps.apple.com/app/ds-audio/id1234567893',
      Android: 'https://play.google.com/store/apps/details?id=com.meibu.dsaudio',
      Windows: '/downloads/apps/dsaudio_win_3.8.2.exe',
      macOS: '/downloads/apps/dsaudio_mac_3.8.2.dmg'
    },
    iconUrl: '/images/apps/dsaudio.png'
  }
];

export default function AppsDownloadPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  // 过滤应用列表
  const filteredApps = appsList.filter((app) => {
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = selectedPlatform === 'all' ||
                           (app.platforms && app.platforms.some(p =>
                             p.toLowerCase() === selectedPlatform.toLowerCase()));

    return matchesCategory && matchesSearch && matchesPlatform;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">应用程序下载</h1>
        <p className="text-xl">
          下载美步官方应用程序，随时随地访问您的数据和服务。
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
          <span className="text-gray-700">应用程序下载</span>
        </div>
      </div>

      {/* 筛选和搜索 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">按类别筛选</h3>
              <div className="flex flex-wrap gap-2">
                {appCategories.map((category) => (
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
              <h3 className="text-lg font-medium mb-2">按平台筛选</h3>
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="all">所有平台</option>
                <option value="iOS">iOS</option>
                <option value="Android">Android</option>
                <option value="Windows">Windows</option>
                <option value="macOS">macOS</option>
                <option value="Apple TV">Apple TV</option>
                <option value="Android TV">Android TV</option>
              </select>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">搜索应用</h3>
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

      {/* 应用列表 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">可用应用程序</h2>
        {filteredApps.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到匹配的应用程序</h3>
            <p className="text-gray-500 mb-4">请尝试调整筛选条件或搜索词。</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPlatform('all');
                setSearchTerm('');
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              重置筛选条件
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredApps.map((app) => (
              <div key={app.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/6 flex justify-center mb-4 md:mb-0">
                      <div className="w-24 h-24 rounded-lg overflow-hidden relative">
                        {app.iconUrl ? (
                          <Image
                            src={app.iconUrl}
                            alt={`${app.name} 图标`}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-lg"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="md:w-5/6 md:pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">版本: {app.version} | 发布日期: {app.releaseDate} | 大小: {app.size}</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                            {appCategories.find((c) => c.id === app.category)?.name || app.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{app.description}</p>
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">主要功能：</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          {app.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-medium mb-2">可用平台：</h4>
                        <div className="flex flex-wrap gap-2">
                          {app.platforms.map((platform, index) => (
                            <a
                              key={index}
                              href={app.downloadLinks[platform]}
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              下载 {platform} 版本
                            </a>
                          ))}
                        </div>
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
            <h3 className="text-xl font-bold mb-2">应用安装帮助</h3>
            <p className="text-gray-700 mb-4 md:mb-0">
              如果您在应用安装或使用过程中遇到问题，请查看我们的应用指南或联系技术支持。
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end space-x-4">
            <Link
              href="/support/knowledge/faq"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              应用指南
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
