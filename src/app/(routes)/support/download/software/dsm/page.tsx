import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DSM 操作系统下载 - 美步科技',
  description: '下载最新版本的美步 DSM 操作系统，享受更多功能和更好的性能',
};

// DSM版本数据
const dsmVersions = [
  {
    id: 1,
    version: 'DSM 7.2',
    releaseDate: '2023-06-15',
    status: '最新版本',
    description: 'DSM 7.2是美步NAS操作系统的最新版本，带来了全新的用户界面、增强的安全性和更多的功能。',
    features: [
      '全新设计的用户界面，提供更直观的操作体验',
      '增强的安全性，包括支持FIDO2安全密钥和改进的防火墙',
      '优化的存储管理，支持更大容量的存储池和更灵活的RAID配置',
      '改进的文件共享和协作功能，支持更多平台和协议',
      '增强的备份功能，提供更多备份选项和更高的可靠性',
      '优化的媒体管理和流媒体功能，支持更多格式和设备'
    ],
    compatibility: '兼容2018年及之后发布的所有NAS型号',
    downloadLink: '/downloads/dsm/dsm_7.2_update.pat',
    releaseNotes: '/support/download/software/dsm/release-notes/7.2',
    fileSize: '275 MB'
  },
  {
    id: 2,
    version: 'DSM 7.1.1',
    releaseDate: '2022-11-10',
    status: '稳定版本',
    description: 'DSM 7.1.1是一个稳定的更新版本，修复了多个问题并提高了系统稳定性。',
    features: [
      '修复了多个安全漏洞，提高了系统安全性',
      '改进了系统性能和稳定性',
      '优化了存储管理功能',
      '修复了文件共享和权限管理的问题',
      '改进了与第三方应用程序的兼容性'
    ],
    compatibility: '兼容2017年及之后发布的所有NAS型号',
    downloadLink: '/downloads/dsm/dsm_7.1.1_update.pat',
    releaseNotes: '/support/download/software/dsm/release-notes/7.1.1',
    fileSize: '260 MB'
  },
  {
    id: 3,
    version: 'DSM 7.0.1',
    releaseDate: '2021-07-20',
    status: '旧版本',
    description: 'DSM 7.0.1是DSM 7系列的第一个稳定版本，带来了全新的用户体验和功能。',
    features: [
      '全新设计的用户界面和登录页面',
      '新的存储管理器，支持更灵活的存储配置',
      '改进的照片管理应用程序',
      '增强的安全功能，包括安全顾问和双因素认证',
      '新的Active Insight云服务，提供主动监控和警报'
    ],
    compatibility: '兼容2016年及之后发布的大多数NAS型号',
    downloadLink: '/downloads/dsm/dsm_7.0.1_update.pat',
    releaseNotes: '/support/download/software/dsm/release-notes/7.0.1',
    fileSize: '240 MB'
  },
  {
    id: 4,
    version: 'DSM 6.2.4',
    releaseDate: '2020-09-15',
    status: '旧版本',
    description: 'DSM 6.2.4是DSM 6系列的最后一个主要更新版本，为旧型号NAS提供支持。',
    features: [
      '修复了多个安全漏洞',
      '改进了系统稳定性和性能',
      '优化了与最新网络协议的兼容性',
      '改进了备份和恢复功能',
      '增强了与云服务的集成'
    ],
    compatibility: '兼容2013年及之后发布的所有NAS型号，包括不支持DSM 7的旧型号',
    downloadLink: '/downloads/dsm/dsm_6.2.4_update.pat',
    releaseNotes: '/support/download/software/dsm/release-notes/6.2.4',
    fileSize: '210 MB'
  }
];

export default function DsmDownloadPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">DSM 操作系统下载</h1>
        <p className="text-xl text-gray-600">
          下载最新版本的美步 DSM 操作系统，享受更多功能和更好的性能
        </p>
      </div>

      {/* DSM介绍 */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">什么是DSM？</h2>
            <p className="text-gray-600 mb-4">
              DSM (DiskStation Manager) 是美步NAS设备的操作系统，提供直观的用户界面和强大的功能，让您轻松管理数据、共享文件、备份重要信息，以及享受多媒体内容。
            </p>
            <p className="text-gray-600 mb-4">
              DSM不仅仅是一个操作系统，它还是一个功能丰富的平台，支持各种应用程序，从文件共享和备份到媒体流和监控，满足家庭和企业用户的各种需求。
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">文件管理</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">数据备份</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">媒体流</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">协作工具</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">安全防护</span>
            </div>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80">
            <div className="relative rounded-lg w-full h-full overflow-hidden">
              <Image
                src="/images/support/dsm.jpg"
                alt="DSM 界面预览"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 版本列表 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">可用版本</h2>
        <div className="space-y-6">
          {dsmVersions.map((version) => (
            <div key={version.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{version.version}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-500 text-sm mr-3">发布日期: {version.releaseDate}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        version.status === '最新版本'
                          ? 'bg-green-100 text-green-800'
                          : version.status === '稳定版本'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {version.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <a
                      href={version.downloadLink}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-flex items-center transition duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      下载 ({version.fileSize})
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{version.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">主要特性：</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {version.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-gray-600">
                  <span className="font-medium">兼容性：</span> {version.compatibility}
                </div>
                <div className="mt-4">
                  <a href={version.releaseNotes} className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    查看完整发行说明
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 安装指南 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">如何更新DSM</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
              <span className="flex items-center justify-center h-6 w-6 bg-blue-600 text-white rounded-full text-sm">1</span>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">备份重要数据</h3>
              <p className="text-gray-600">在更新DSM之前，建议备份所有重要数据，以防更新过程中出现问题。</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
              <span className="flex items-center justify-center h-6 w-6 bg-blue-600 text-white rounded-full text-sm">2</span>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">登录DSM控制面板</h3>
              <p className="text-gray-600">使用管理员账户登录您的NAS的DSM控制面板。</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
              <span className="flex items-center justify-center h-6 w-6 bg-blue-600 text-white rounded-full text-sm">3</span>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">手动更新</h3>
              <p className="text-gray-600">前往"控制面板" > "更新与还原" > "手动更新"，上传下载的DSM更新文件(.pat)。</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
              <span className="flex items-center justify-center h-6 w-6 bg-blue-600 text-white rounded-full text-sm">4</span>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">按照向导完成更新</h3>
              <p className="text-gray-600">系统将验证更新文件并引导您完成更新过程。更新过程中，NAS将重启一次或多次。</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/support/knowledge/faq/nas"
            className="text-blue-600 hover:text-blue-800 inline-flex items-center"
          >
            查看详细的DSM更新指南
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
