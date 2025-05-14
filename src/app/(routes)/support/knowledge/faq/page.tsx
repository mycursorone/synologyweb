'use client';

import { useState } from 'react';
import Link from 'next/link';

// FAQ分类
const faqCategories = [
  { id: 'all', name: '全部' },
  { id: 'nas', name: 'NAS 存储' },
  { id: 'surveillance', name: '监控方案' },
  { id: 'router', name: '路由器' },
  { id: 'software', name: '软件应用' },
  { id: 'account', name: '账户与授权' },
];

// FAQ列表
const faqs = [
  {
    id: 'reset-nas',
    question: '如何重置我的NAS设备？',
    answer: '要重置NAS设备，请按照以下步骤操作：\n\n1. 备份重要数据\n2. 关闭NAS电源\n3. 找到设备背面的重置按钮\n4. 使用细针按住重置按钮\n5. 开启NAS电源，继续按住重置按钮4秒钟\n6. 当听到"哔"声后，松开重置按钮\n\n设备将重置为出厂设置。请注意，这将删除所有数据，因此请确保事先备份重要文件。',
    category: 'nas',
    popular: true,
  },
  {
    id: 'nas-not-found',
    question: '为什么我的电脑找不到NAS设备？',
    answer: '如果您的电脑无法找到NAS设备，请尝试以下解决方案：\n\n1. 确保NAS和电脑连接到同一网络\n2. 检查网络电缆连接是否正常\n3. 确认NAS电源已开启\n4. 尝试使用NAS的IP地址直接访问\n5. 检查电脑的防火墙设置\n6. 重启路由器和NAS设备\n\n如果问题仍然存在，可能需要重置网络设置或联系技术支持。',
    category: 'nas',
    popular: true,
  },
  {
    id: 'raid-rebuild',
    question: 'RAID重建需要多长时间？',
    answer: 'RAID重建的时间取决于多个因素：\n\n1. 硬盘容量 - 容量越大，重建时间越长\n2. RAID类型 - 不同RAID级别重建时间不同\n3. NAS负载 - 如果NAS同时处理其他任务，重建会更慢\n4. 硬盘速度 - 更快的硬盘可以加速重建过程\n\n一般来说，对于普通家用NAS，重建几TB的RAID可能需要12-24小时。企业级设备可能会更快。重建过程中，建议减少对NAS的访问，以加快重建速度。',
    category: 'nas',
    popular: false,
  },
  {
    id: 'camera-offline',
    question: '我的监控摄像机显示离线，如何解决？',
    answer: '摄像机离线可能有多种原因，请尝试以下步骤：\n\n1. 检查摄像机电源是否正常\n2. 确认网络连接是否稳定\n3. 重启摄像机\n4. 检查摄像机IP地址是否变更\n5. 确认摄像机固件是否需要更新\n6. 检查NVR或监控软件设置\n\n如果以上方法都无效，可能需要重置摄像机或联系技术支持。',
    category: 'surveillance',
    popular: true,
  },
  {
    id: 'motion-detection',
    question: '如何减少监控系统的误报警？',
    answer: '要减少监控系统的误报警，可以尝试以下方法：\n\n1. 调整移动侦测灵敏度 - 降低灵敏度可减少误报\n2. 设置侦测区域 - 只监控关键区域，忽略如树木等会移动的背景\n3. 使用智能侦测 - 启用人形或车辆识别功能\n4. 避免摄像机对着强光源或反光表面\n5. 确保摄像机固定牢固，避免风吹导致晃动\n6. 更新到最新固件以获得改进的算法\n\n合理的设置可以显著减少误报同时保持有效监控。',
    category: 'surveillance',
    popular: false,
  },
  {
    id: 'wifi-coverage',
    question: '如何扩展WiFi覆盖范围？',
    answer: '扩展WiFi覆盖范围有多种方法：\n\n1. 调整路由器位置 - 放置在家中央，远离墙壁和金属物体\n2. 升级天线 - 如果路由器支持，可以更换高增益天线\n3. 使用WiFi扩展器 - 在信号弱的区域放置扩展器\n4. 部署Mesh WiFi系统 - 多个节点协同工作，提供无缝覆盖\n5. 添加额外的接入点 - 通过有线连接多个WiFi接入点\n6. 升级到更新的WiFi标准 - 如WiFi 6提供更好的覆盖\n\n对于大型住宅，Mesh WiFi系统通常是最佳选择。',
    category: 'router',
    popular: true,
  },
  {
    id: 'router-slow',
    question: '为什么我的路由器网速变慢？',
    answer: '路由器网速变慢可能有以下原因：\n\n1. 网络拥堵 - 太多设备同时使用网络\n2. 干扰 - 邻居的WiFi或其他电子设备干扰\n3. 路由器过热 - 长时间运行可能导致性能下降\n4. 固件过时 - 需要更新到最新版本\n5. 路由器位置不佳 - 被墙壁或大型物体阻挡\n6. ISP限速 - 可能是服务提供商的问题\n\n尝试重启路由器、更新固件、更改WiFi信道或减少同时连接的设备数量。',
    category: 'router',
    popular: true,
  },
  {
    id: 'dsm-update',
    question: '如何更新DSM操作系统？',
    answer: '更新DSM操作系统的步骤：\n\n1. 登录DSM控制面板\n2. 打开"控制面板"\n3. 选择"更新与还原"\n4. 点击"更新"\n5. DSM会自动检查更新，如有可用更新，点击"下载"\n6. 下载完成后，点击"立即更新"\n7. 系统将自动安装更新并重启\n\n建议在更新前备份重要数据，并确保更新过程中不会断电。',
    category: 'software',
    popular: false,
  },
  {
    id: 'mobile-sync',
    question: '如何将手机照片自动同步到NAS？',
    answer: '将手机照片自动同步到NAS的方法：\n\n1. 安装DS Photo或DS File移动应用\n2. 登录您的NAS账户\n3. 在应用设置中启用"自动上传"\n4. 选择要同步的相册或文件夹\n5. 设置同步条件（如仅在WiFi下同步）\n6. 应用将在后台自动上传新照片\n\n您也可以使用第三方应用如Synology Photos或其他云同步工具来实现自动备份。',
    category: 'software',
    popular: true,
  },
  {
    id: 'account-locked',
    question: '我的账户被锁定，如何解锁？',
    answer: '账户被锁定通常是由于多次登录失败导致的安全措施。解锁方法：\n\n1. 等待锁定时间结束（通常为30分钟）\n2. 如果您是普通用户，联系管理员手动解锁\n3. 如果您是管理员，可以尝试通过重置网络设置解锁\n4. 在极端情况下，可能需要重置设备（这将删除所有数据）\n\n为避免账户被锁定，请确保记住正确的密码，并考虑启用双因素认证增强安全性。',
    category: 'account',
    popular: false,
  },
  {
    id: 'password-reset',
    question: '如何重置管理员密码？',
    answer: '重置管理员密码的方法：\n\n1. 如果您还能登录系统：\n   - 登录DSM控制面板\n   - 进入"控制面板" > "用户" > "管理员"\n   - 点击"编辑" > "更改密码"\n\n2. 如果无法登录：\n   - 关闭NAS电源\n   - 按住重置按钮\n   - 开启电源，听到"哔"声\n   - 继续按住按钮直到听到第二声"哔"\n   - 松开按钮，管理员密码将重置为空\n\n请注意，第二种方法不会删除数据，但会重置网络设置。',
    category: 'account',
    popular: true,
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // 切换FAQ展开/折叠
  const toggleFaq = (faqId: string) => {
    if (expandedFaq === faqId) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(faqId);
    }
  };

  // 过滤FAQ
  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 获取热门FAQ
  const popularFaqs = faqs.filter(faq => faq.popular);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">常见问题</h1>
        <p className="text-xl mb-6">
          查找常见问题的解答，快速解决您在使用过程中遇到的问题。
        </p>
        
        {/* 搜索框 */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索常见问题..."
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
          <Link href="/support/knowledge" className="text-blue-600 hover:underline">
            知识库
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">常见问题</span>
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium mb-4">按类别筛选</h3>
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((category) => (
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

      {/* 热门问题 */}
      {searchTerm === '' && selectedCategory === 'all' && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">热门问题</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {popularFaqs.map((faq, index) => (
              <div key={faq.id} className={`border-b border-gray-200 ${index === popularFaqs.length - 1 ? 'border-b-0' : ''}`}>
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${expandedFaq === faq.id ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-4 transition-all duration-300 ${
                    expandedFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {faq.answer.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-600 mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 所有问题 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          {searchTerm || selectedCategory !== 'all' ? '搜索结果' : '所有问题'}
        </h2>
        
        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到匹配的问题</h3>
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
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {filteredFaqs.map((faq, index) => (
              <div key={faq.id} className={`border-b border-gray-200 ${index === filteredFaqs.length - 1 ? 'border-b-0' : ''}`}>
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                >
                  <div className="flex items-start">
                    <span className="font-medium text-lg">{faq.question}</span>
                    <span className="ml-3 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {faqCategories.find((c) => c.id === faq.category)?.name || faq.category}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${expandedFaq === faq.id ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-4 transition-all duration-300 ${
                    expandedFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {faq.answer.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-600 mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 联系支持 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">没有找到您的问题？</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          如果您的问题没有在常见问题中列出，请联系我们的技术支持团队获取个性化帮助。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/support/knowledge"
            className="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            浏览知识库
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            联系技术支持
          </Link>
        </div>
      </div>
    </div>
  );
}
