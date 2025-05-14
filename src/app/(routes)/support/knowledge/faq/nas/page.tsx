import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NAS 常见问题 - 美步科技',
  description: '了解美步科技 NAS 产品的常见问题和解决方案',
};

// FAQ数据
const faqs = [
  {
    id: 1,
    question: '什么是NAS？',
    answer: 'NAS（Network Attached Storage）是网络附加存储的缩写，是一种专门的数据存储设备，连接到网络，允许多个用户和客户端设备通过网络访问数据。NAS设备通常用于家庭或企业环境中的文件共享、数据备份、媒体流和远程访问等用途。'
  },
  {
    id: 2,
    question: '如何选择适合我的NAS设备？',
    answer: '选择NAS设备时，需要考虑以下几个因素：\n1. 用途：是用于家庭媒体中心、数据备份还是企业文件共享\n2. 容量需求：预计需要存储的数据量\n3. 性能要求：是否需要进行视频编辑、虚拟化等高性能任务\n4. 扩展性：未来是否需要增加存储容量\n5. 预算：不同型号的NAS设备价格差异较大\n\n家庭用户可以考虑DS220j或DS220+等入门级产品，而企业用户可能需要DS1621+或RS1221+等更高性能的设备。'
  },
  {
    id: 3,
    question: 'NAS设备如何保护我的数据安全？',
    answer: '美步NAS设备提供多种数据保护功能：\n1. RAID技术：通过多硬盘冗余保护数据\n2. 快照技术：创建文件系统的时间点副本，可以快速恢复被删除或损坏的文件\n3. 备份解决方案：支持本地备份、云备份和设备间备份\n4. 加密功能：支持文件夹加密和硬盘加密\n5. 防火墙和VPN：保护网络访问安全\n6. 双因素认证：增强账户安全性'
  },
  {
    id: 4,
    question: '如何设置NAS远程访问？',
    answer: '设置NAS远程访问的主要方法有：\n1. QuickConnect：最简单的方法，无需复杂网络设置\n2. DDNS（动态域名服务）：将动态IP地址映射到固定域名\n3. VPN服务器：通过VPN安全地访问NAS和本地网络\n4. 端口转发：在路由器上设置端口转发规则\n\n对于大多数用户，我们推荐使用QuickConnect服务，它简单安全，无需进行复杂的网络配置。'
  },
  {
    id: 5,
    question: 'NAS硬盘发生故障如何处理？',
    answer: '当NAS硬盘发生故障时，请按照以下步骤处理：\n1. 检查DSM存储管理器中的硬盘状态，确认故障\n2. 如果使用了RAID，系统可能仍在降级模式下运行\n3. 准备一个兼容的替换硬盘\n4. 关闭NAS电源\n5. 移除故障硬盘并安装新硬盘\n6. 重新启动NAS\n7. 系统将自动开始重建RAID阵列\n\n注意：RAID重建过程可能需要几小时到几天时间，取决于硬盘容量和系统负载。'
  },
  {
    id: 6,
    question: '如何升级NAS的DSM操作系统？',
    answer: '升级DSM操作系统的步骤：\n1. 登录DSM控制面板\n2. 打开"控制面板" > "更新与还原"\n3. 点击"检查更新"\n4. 如有可用更新，点击"下载"\n5. 下载完成后，点击"立即更新"\n6. 系统将自动安装更新并重启\n\n建议在升级前备份重要数据，并确保升级过程中不会断电。'
  },
  {
    id: 7,
    question: 'NAS可以作为媒体服务器使用吗？',
    answer: '是的，美步NAS是优秀的媒体服务器解决方案。您可以：\n1. 安装Video Station应用管理和播放视频\n2. 使用Audio Station管理和播放音乐\n3. 安装Photo Station或Moments管理照片\n4. 通过DLNA/UPnP将媒体流式传输到智能电视、游戏机等设备\n5. 安装Plex Media Server提供更强大的媒体管理和转码功能\n\n美步NAS支持多种视频格式，并可以根据播放设备的能力进行实时转码。'
  },
  {
    id: 8,
    question: 'NAS与云存储相比有什么优势？',
    answer: 'NAS相比云存储的主要优势：\n1. 一次性购买，无需持续订阅费用\n2. 数据存储在本地，完全控制数据隐私\n3. 访问速度更快，不受互联网带宽限制\n4. 存储容量可以根据需要灵活扩展\n5. 功能更丰富，可以运行各种应用程序\n6. 可以与云存储结合使用，获得两者的优势\n\n对于需要频繁访问大量数据的用户，NAS通常是更经济、更高效的选择。'
  },
  {
    id: 9,
    question: '如何解决NAS访问速度慢的问题？',
    answer: '解决NAS访问速度慢的常见方法：\n1. 检查网络连接：确保使用有线连接或强信号的Wi-Fi\n2. 升级网络设备：使用千兆或万兆网络设备\n3. 检查硬盘健康状态：老化或故障的硬盘可能影响性能\n4. 优化RAID配置：不同RAID类型有不同的性能特点\n5. 减少后台任务：暂停备份、索引等资源密集型任务\n6. 升级NAS内存：增加内存可以提高多任务性能\n7. 使用SSD缓存：为频繁访问的数据提供更快的访问速度\n\n如果问题持续存在，可能需要考虑升级到更高性能的NAS型号。'
  },
  {
    id: 10,
    question: '如何在NAS上设置用户权限？',
    answer: '在NAS上设置用户权限的步骤：\n1. 登录DSM控制面板\n2. 打开"控制面板" > "用户与权限" > "用户"\n3. 创建或编辑用户账户\n4. 在"权限"选项卡中，为用户分配共享文件夹的访问权限\n5. 可以设置"读取/写入"、"只读"或"无访问权限"\n6. 对于更精细的控制，可以使用"高级权限"设置\n7. 可以创建用户组，为多个用户同时分配权限\n\n正确设置权限对于保护数据安全和确保协作效率非常重要。'
  }
];

// 分类
const categories = [
  { id: 'basic', name: '基础知识', count: 2 },
  { id: 'security', name: '安全与备份', count: 2 },
  { id: 'access', name: '访问与连接', count: 2 },
  { id: 'maintenance', name: '维护与故障排除', count: 2 },
  { id: 'usage', name: '使用技巧', count: 2 },
];

export default function NasFaqPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">NAS 常见问题</h1>
        <p className="text-xl text-gray-600">
          查找关于美步 NAS 产品的常见问题解答
        </p>
      </div>

      {/* 主要内容区 */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* 侧边栏 */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">问题分类</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <a 
                    href={`#${category.id}`} 
                    className="flex justify-between items-center text-gray-700 hover:text-blue-600 py-2"
                  >
                    <span>{category.name}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">需要更多帮助？</h2>
            <p className="text-gray-600 mb-4">
              如果您没有找到所需的答案，请联系我们的技术支持团队。
            </p>
            <Link 
              href="/contact" 
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
            >
              联系技术支持
            </Link>
          </div>
        </div>

        {/* FAQ列表 */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* 搜索框 */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索常见问题..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-3 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* FAQ手风琴 */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.id} className="group border border-gray-200 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 font-medium">
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-600 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
