'use client';

import { useState } from 'react';
import Link from 'next/link';

// 设备类别
const deviceCategories = [
  { id: 'all', name: '全部' },
  { id: 'nas', name: 'NAS 设备' },
  { id: 'router', name: '路由器' },
  { id: 'camera', name: '网络摄像机' },
];

// 固件列表
const firmwareList = [
  {
    id: 'ds220j-firmware',
    name: 'DS220j 固件',
    version: '7.2.1-69057',
    category: 'nas',
    description: 'DS220j NAS设备的最新固件更新，提供性能改进和安全修复。',
    releaseDate: '2023-09-15',
    size: '175 MB',
    model: 'DS220j',
    url: '/support/download/firmware/nas/ds220j',
    changelog: [
      '修复了SMB协议中的安全漏洞',
      '改进了系统稳定性',
      '优化了文件索引性能',
      '更新了内置应用程序',
    ],
  },
  {
    id: 'ds220plus-firmware',
    name: 'DS220+ 固件',
    version: '7.2.1-69057',
    category: 'nas',
    description: 'DS220+ NAS设备的最新固件更新，提供性能改进和安全修复。',
    releaseDate: '2023-09-15',
    size: '180 MB',
    model: 'DS220+',
    url: '/support/download/firmware/nas/ds220plus',
    changelog: [
      '修复了SMB协议中的安全漏洞',
      '改进了系统稳定性',
      '优化了文件索引性能',
      '更新了内置应用程序',
    ],
  },
  {
    id: 'ds1621plus-firmware',
    name: 'DS1621+ 固件',
    version: '7.2.1-69057',
    category: 'nas',
    description: 'DS1621+ NAS设备的最新固件更新，提供性能改进和安全修复。',
    releaseDate: '2023-09-15',
    size: '185 MB',
    model: 'DS1621+',
    url: '/support/download/firmware/nas/ds1621plus',
    changelog: [
      '修复了SMB协议中的安全漏洞',
      '改进了系统稳定性',
      '优化了文件索引性能',
      '更新了内置应用程序',
    ],
  },
  {
    id: 'rt2600ac-firmware',
    name: 'RT2600ac 固件',
    version: '1.3.5-8017',
    category: 'router',
    description: 'RT2600ac 路由器的最新固件更新，提供网络性能改进和安全增强。',
    releaseDate: '2023-08-20',
    size: '45 MB',
    model: 'RT2600ac',
    url: '/support/download/firmware/router/rt2600ac',
    changelog: [
      '增强了WiFi信号稳定性',
      '修复了DHCP服务器问题',
      '改进了防火墙功能',
      '优化了QoS性能',
    ],
  },
  {
    id: 'mr2200ac-firmware',
    name: 'MR2200ac 固件',
    version: '1.3.5-8017',
    category: 'router',
    description: 'MR2200ac Mesh路由器的最新固件更新，提供网络性能改进和安全增强。',
    releaseDate: '2023-08-20',
    size: '42 MB',
    model: 'MR2200ac',
    url: '/support/download/firmware/router/mr2200ac',
    changelog: [
      '增强了WiFi信号稳定性',
      '改进了Mesh网络性能',
      '修复了DHCP服务器问题',
      '优化了QoS性能',
    ],
  },
  {
    id: 'bc500-firmware',
    name: 'BC500 固件',
    version: '2.1.3-1587',
    category: 'camera',
    description: 'BC500 网络摄像机的最新固件更新，提供视频质量改进和安全增强。',
    releaseDate: '2023-07-10',
    size: '25 MB',
    model: 'BC500',
    url: '/support/download/firmware/camera/bc500',
    changelog: [
      '改进了低光环境下的图像质量',
      '优化了移动侦测算法',
      '增强了夜视功能',
      '修复了RTSP流问题',
    ],
  },
];

export default function FirmwareDownloadPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFirmware, setExpandedFirmware] = useState<string | null>(null);

  // 切换固件详情展开/折叠
  const toggleFirmwareDetails = (firmwareId: string) => {
    if (expandedFirmware === firmwareId) {
      setExpandedFirmware(null);
    } else {
      setExpandedFirmware(firmwareId);
    }
  };

  // 过滤固件列表
  const filteredFirmware = firmwareList.filter((firmware) => {
    const matchesCategory = selectedCategory === 'all' || firmware.category === selectedCategory;
    const matchesSearch = firmware.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          firmware.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          firmware.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">固件下载</h1>
        <p className="text-xl">
          下载最新的设备固件，获取最新功能、性能改进和安全修复。
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
          <span className="text-gray-700">固件下载</span>
        </div>
      </div>

      {/* 筛选和搜索 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-medium mb-2">按设备类型筛选</h3>
              <div className="flex flex-wrap gap-2">
                {deviceCategories.map((category) => (
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
                搜索固件
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="输入设备型号或关键词..."
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

      {/* 固件列表 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">可用固件</h2>
        {filteredFirmware.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到匹配的固件</h3>
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
            {filteredFirmware.map((firmware) => (
              <div key={firmware.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-900">{firmware.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">版本: {firmware.version} | 发布日期: {firmware.releaseDate} | 大小: {firmware.size}</p>
                      <p className="text-gray-700">{firmware.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        href={firmware.url}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        下载
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-500">
                      <div className="mb-2 md:mb-0 md:mr-6">
                        <span className="font-medium text-gray-700">适用型号:</span> {firmware.model}
                      </div>
                      <div className="mb-2 md:mb-0 md:mr-6">
                        <span className="font-medium text-gray-700">类别:</span>{' '}
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          {deviceCategories.find((c) => c.id === firmware.category)?.name || firmware.category}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleFirmwareDetails(firmware.id)}
                        className="text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        {expandedFirmware === firmware.id ? '隐藏更新日志' : '查看更新日志'}
                        <svg
                          className={`ml-1 h-4 w-4 transform transition-transform ${
                            expandedFirmware === firmware.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    {expandedFirmware === firmware.id && (
                      <div className="mt-4 bg-gray-50 p-4 rounded-md">
                        <h4 className="font-medium text-gray-900 mb-2">更新日志:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {firmware.changelog.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 固件更新指南 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">固件更新指南</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">1. 备份重要数据</h3>
              <p className="text-gray-600">在更新固件前，请确保备份所有重要数据，以防更新过程中出现问题。</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">2. 下载并安装固件</h3>
              <p className="text-gray-600">下载适合您设备的固件，并按照设备上的指示进行安装。</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">3. 验证更新</h3>
              <p className="text-gray-600">更新完成后，验证设备是否正常工作，并检查新功能是否可用。</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/support/knowledge/faq"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              查看详细更新指南
            </Link>
          </div>
        </div>
      </div>

      {/* 帮助提示 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">需要帮助？</h3>
            <p className="text-gray-700 mb-4 md:mb-0">
              如果您在固件更新过程中遇到问题，请查看我们的故障排除指南或联系技术支持。
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end space-x-4">
            <Link
              href="/support/knowledge/faq"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              故障排除
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
