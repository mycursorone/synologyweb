import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '实用工具下载 - 美步科技',
  description: '下载美步科技提供的各种实用工具，帮助您更好地使用和管理NAS设备',
};

// 实用工具数据
const utilities = [
  {
    id: 1,
    name: 'Assistant',
    version: '3.2.1',
    releaseDate: '2023-05-20',
    description: 'Assistant是一款桌面工具，帮助您在本地网络中快速查找、连接和设置美步NAS设备。它还提供了一键式安装DSM、映射网络驱动器和监控NAS状态的功能。',
    features: [
      '自动发现本地网络中的美步NAS设备',
      '快速连接到DSM管理界面',
      '一键式安装或恢复DSM操作系统',
      '映射NAS共享文件夹为网络驱动器',
      '监控NAS状态和性能',
      '支持Windows和macOS系统'
    ],
    platforms: [
      { name: 'Windows', link: '/downloads/utilities/Assistant_3.2.1_Windows.exe', size: '15 MB' },
      { name: 'macOS', link: '/downloads/utilities/Assistant_3.2.1_macOS.dmg', size: '18 MB' }
    ]
  },
  {
    id: 2,
    name: 'Drive',
    version: '4.0.2',
    releaseDate: '2023-06-15',
    description: 'Drive是一款文件同步和备份工具，可以在您的计算机和美步NAS之间自动同步文件，确保您的数据始终是最新的。它还提供了文件共享和协作功能，让团队工作更高效。',
    features: [
      '自动同步文件和文件夹',
      '选择性同步，只同步您需要的文件',
      '文件版本控制和恢复',
      '离线编辑文件，自动同步更改',
      '安全共享文件和文件夹',
      '团队协作功能'
    ],
    platforms: [
      { name: 'Windows', link: '/downloads/utilities/Drive_4.0.2_Windows.exe', size: '25 MB' },
      { name: 'macOS', link: '/downloads/utilities/Drive_4.0.2_macOS.dmg', size: '28 MB' },
      { name: 'Linux', link: '/downloads/utilities/Drive_4.0.2_Linux.deb', size: '22 MB' }
    ]
  },
  {
    id: 3,
    name: 'Active Backup',
    version: '2.5.0',
    releaseDate: '2023-04-10',
    description: 'Active Backup是一款全面的备份解决方案，可以备份PC、服务器、虚拟机和SaaS应用程序数据到您的美步NAS。它提供集中管理、重复数据删除和快速恢复功能，保护您的业务数据安全。',
    features: [
      '集中备份PC、服务器和虚拟机',
      '支持VMware、Hyper-V等虚拟化平台',
      '备份Microsoft 365和Google Workspace数据',
      '全局重复数据删除，节省存储空间',
      '灵活的备份计划和保留策略',
      '快速恢复文件、系统和虚拟机'
    ],
    platforms: [
      { name: 'Windows', link: '/downloads/utilities/ActiveBackup_2.5.0_Windows.exe', size: '35 MB' },
      { name: 'Linux', link: '/downloads/utilities/ActiveBackup_2.5.0_Linux.deb', size: '30 MB' }
    ]
  },
  {
    id: 4,
    name: 'Photo Station Uploader',
    version: '1.8.5',
    releaseDate: '2023-03-05',
    description: 'Photo Station Uploader是一款照片和视频上传工具，可以轻松将您计算机上的照片和视频上传到美步NAS的Photo Station或Moments应用。它支持批量上传、自动分类和照片编辑功能。',
    features: [
      '批量上传照片和视频',
      '自动按日期和位置分类',
      '保留照片的EXIF信息',
      '上传前编辑和调整照片',
      '创建和管理相册',
      '设置上传计划，自动上传新照片'
    ],
    platforms: [
      { name: 'Windows', link: '/downloads/utilities/PhotoStationUploader_1.8.5_Windows.exe', size: '12 MB' },
      { name: 'macOS', link: '/downloads/utilities/PhotoStationUploader_1.8.5_macOS.dmg', size: '14 MB' }
    ]
  },
  {
    id: 5,
    name: 'Download Station Client',
    version: '2.3.0',
    releaseDate: '2023-02-15',
    description: 'Download Station Client是一款下载管理工具，可以远程控制您NAS上的Download Station应用。它支持添加和管理各种类型的下载任务，包括HTTP、FTP、BT和NZB等，让您随时随地管理下载任务。',
    features: [
      '远程添加和管理下载任务',
      '支持HTTP、FTP、BitTorrent和NZB下载',
      '设置下载优先级和速度限制',
      '下载完成通知',
      '搜索BT种子和NZB文件',
      '下载计划和队列管理'
    ],
    platforms: [
      { name: 'Windows', link: '/downloads/utilities/DownloadStationClient_2.3.0_Windows.exe', size: '10 MB' },
      { name: 'macOS', link: '/downloads/utilities/DownloadStationClient_2.3.0_macOS.dmg', size: '12 MB' }
    ]
  }
];

export default function UtilitiesDownloadPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">实用工具下载</h1>
        <p className="text-xl text-gray-600">
          下载美步科技提供的各种实用工具，帮助您更好地使用和管理NAS设备
        </p>
      </div>

      {/* 工具列表 */}
      <div className="space-y-10">
        {utilities.map((utility) => (
          <div key={utility.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{utility.name}</h2>
                  <div className="flex items-center mt-1">
                    <span className="text-gray-500 text-sm mr-3">版本: {utility.version}</span>
                    <span className="text-gray-500 text-sm">发布日期: {utility.releaseDate}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{utility.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">主要功能</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {utility.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">下载</h3>
                <div className="flex flex-wrap gap-3">
                  {utility.platforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.link}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-flex items-center transition duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {platform.name} ({platform.size})
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 安装指南 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-8 mt-10">
        <h2 className="text-2xl font-bold mb-6">安装指南</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Windows</h3>
          <ol className="list-decimal pl-5 text-gray-600 space-y-2">
            <li>下载适用于Windows的安装程序(.exe文件)</li>
            <li>双击安装程序启动安装向导</li>
            <li>按照安装向导的指示完成安装</li>
            <li>安装完成后，从开始菜单或桌面快捷方式启动应用程序</li>
          </ol>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">macOS</h3>
          <ol className="list-decimal pl-5 text-gray-600 space-y-2">
            <li>下载适用于macOS的安装程序(.dmg文件)</li>
            <li>双击.dmg文件挂载磁盘映像</li>
            <li>将应用程序拖到Applications文件夹</li>
            <li>从启动台或Applications文件夹启动应用程序</li>
            <li>首次启动时，可能需要在{`"系统偏好设置"`}中允许来自已识别开发者的应用程序</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Linux</h3>
          <ol className="list-decimal pl-5 text-gray-600 space-y-2">
            <li>下载适用于Linux的安装包(.deb或.rpm文件)</li>
            <li>对于Debian/Ubuntu系统，使用命令: <code className="bg-gray-100 px-2 py-1 rounded">sudo dpkg -i 文件名.deb</code></li>
            <li>对于Red Hat/Fedora系统，使用命令: <code className="bg-gray-100 px-2 py-1 rounded">sudo rpm -i 文件名.rpm</code></li>
            <li>安装完成后，从应用程序菜单或使用命令行启动应用程序</li>
          </ol>
        </div>
      </div>

      {/* 帮助与支持 */}
      <div className="bg-white rounded-lg shadow-md p-8 mt-10">
        <h2 className="text-2xl font-bold mb-4">需要帮助？</h2>
        <p className="text-gray-600 mb-6">
          如果您在安装或使用这些工具时遇到问题，可以查看我们的知识库或联系技术支持。
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/support/knowledge"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded inline-flex items-center transition duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            查看知识库
          </Link>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-flex items-center transition duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            联系技术支持
          </Link>
        </div>
      </div>
    </div>
  );
}
