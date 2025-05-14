import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '监控常见问题 - 美步科技',
  description: '了解美步科技监控产品的常见问题和解决方案',
};

// FAQ数据
const faqs = [
  {
    id: 1,
    question: '什么是Surveillance Station？',
    answer: 'Surveillance Station是美步NAS设备上的专业监控系统应用程序，它将NAS转变为功能强大的网络视频录像机(NVR)。Surveillance Station支持超过7,900款IP摄像机，提供实时查看、录像、智能分析、警报通知等功能，适用于家庭和企业安全监控需求。'
  },
  {
    id: 2,
    question: '如何选择适合的监控摄像机？',
    answer: '选择监控摄像机时，需要考虑以下因素：\n1. 室内或室外使用：室外摄像机需要防水和耐候性能\n2. 分辨率：高清(1080p)或超高清(4K)取决于细节需求\n3. 夜视功能：在低光环境下的表现\n4. 视角范围：广角或特定区域监控\n5. 移动侦测和智能分析功能\n6. 双向音频需求\n7. 与美步Surveillance Station的兼容性\n\n美步提供BC500和IC500等高品质摄像机，专为与Surveillance Station无缝集成而设计。'
  },
  {
    id: 3,
    question: 'Surveillance Station支持多少个摄像机？',
    answer: 'Surveillance Station支持的摄像机数量取决于您的NAS型号：\n1. 大多数NAS设备默认包含2个免费摄像机授权\n2. 可以通过购买额外的摄像机授权包来增加支持的摄像机数量\n3. 入门级NAS(如DS220j)通常最多支持16个摄像机\n4. 高性能NAS(如DS1621+)可以支持40个或更多摄像机\n5. 企业级设备可以通过扩展单元支持更多摄像机\n\n具体支持的摄像机数量还受NAS硬件性能、网络带宽和存储容量的限制。'
  },
  {
    id: 4,
    question: '如何设置移动侦测和警报通知？',
    answer: '设置移动侦测和警报通知的步骤：\n1. 登录Surveillance Station\n2. 选择"IP摄像机"，然后选择要配置的摄像机\n3. 点击"编辑"，然后选择"事件侦测"选项卡\n4. 启用"移动侦测"并调整灵敏度和侦测区域\n5. 在"操作"选项卡中，配置触发事件时的响应\n6. 可以设置录像、电子邮件通知、短信通知或移动应用推送通知\n7. 保存设置\n\n您还可以设置时间表，在特定时间段内启用或禁用移动侦测。'
  },
  {
    id: 5,
    question: '如何远程查看监控画面？',
    answer: '远程查看监控画面的方法：\n1. 通过网页浏览器：\n   - 设置QuickConnect或DDNS\n   - 访问您的NAS地址并登录Surveillance Station\n\n2. 通过移动应用DS cam：\n   - 在iOS或Android设备上安装DS cam应用\n   - 使用QuickConnect ID或服务器地址登录\n   - 实时查看视频并接收推送通知\n\n3. 通过桌面客户端Surveillance Station Client：\n   - 在Windows或Mac电脑上安装客户端\n   - 连接到您的Surveillance Station\n\n所有方法都支持实时查看、回放录像和接收警报通知。'
  },
  {
    id: 6,
    question: '监控录像占用多少存储空间？',
    answer: '监控录像的存储空间占用取决于多个因素：\n1. 摄像机数量：每增加一个摄像机，存储需求就会增加\n2. 分辨率：1080p摄像机比720p摄像机占用更多空间\n3. 帧率：高帧率(如30fps)需要更多存储空间\n4. 编码格式：H.265比H.264更节省空间\n5. 录像时间：24/7录像还是仅在检测到动作时录像\n6. 保留期：录像保存多长时间\n\n一般估算：\n- 1080p摄像机，中等质量，H.264编码，24/7录像：约10-15GB/天/摄像机\n- 使用H.265编码可以节省约50%的空间\n- 仅动作触发录像可以节省60-90%的空间\n\nSurveillance Station提供存储计算器帮助估算需求。'
  },
  {
    id: 7,
    question: '如何提高监控系统的安全性？',
    answer: '提高监控系统安全性的建议：\n1. 更改默认密码：为所有账户使用强密码\n2. 启用双因素认证：为Surveillance Station账户添加额外保护\n3. 创建专用账户：为不同用户创建具有适当权限的账户\n4. 更新固件：定期更新NAS和摄像机固件\n5. 使用HTTPS：启用安全连接\n6. 设置防火墙规则：限制访问IP和端口\n7. 使用VPN：通过VPN安全地远程访问\n8. 物理安全：确保NAS设备放置在安全位置\n9. 定期备份配置：防止系统配置丢失\n\n安全性是分层的，实施多种措施可以提供更全面的保护。'
  },
  {
    id: 8,
    question: '监控系统支持哪些智能分析功能？',
    answer: 'Surveillance Station提供多种智能分析功能：\n1. 移动侦测：检测画面中的移动\n2. 入侵侦测：检测指定区域内的人员\n3. 绊线侦测：检测越过虚拟线的物体\n4. 徘徊侦测：检测在区域内停留过长时间的人员\n5. 物体消失侦测：检测被移除的物体\n6. 人脸识别：识别和分类人脸\n7. 人数统计：统计进入或离开区域的人数\n8. 自动跟踪：PTZ摄像机自动跟踪移动物体\n\n不同的摄像机型号支持不同的智能分析功能，高端摄像机通常提供更多高级功能。'
  },
  {
    id: 9,
    question: '如何解决摄像机离线问题？',
    answer: '解决摄像机离线问题的步骤：\n1. 检查物理连接：确保摄像机电源和网络连接正常\n2. 检查网络设置：确认摄像机和NAS在同一网络或可以互相访问\n3. 重启设备：尝试重启摄像机和NAS\n4. 检查IP地址：确认摄像机IP地址没有变化\n5. 检查摄像机账户：确认用户名和密码正确\n6. 更新固件：确保摄像机和NAS运行最新固件\n7. 检查摄像机兼容性：确认摄像机型号兼容Surveillance Station\n8. 检查授权：确认有足够的摄像机授权\n\n如果问题持续存在，可以尝试重新添加摄像机或联系技术支持。'
  },
  {
    id: 10,
    question: '如何导出和备份监控录像？',
    answer: '导出和备份监控录像的方法：\n1. 导出单个录像片段：\n   - 在Surveillance Station中打开"时间线"或"录像列表"\n   - 选择要导出的录像片段\n   - 点击"导出"按钮\n   - 选择导出格式(MP4、AVI等)和位置\n\n2. 批量导出：\n   - 使用"备份"功能\n   - 选择摄像机、时间范围和目标位置\n   - 可以导出到NAS共享文件夹、外部设备或云存储\n\n3. 自动备份：\n   - 配置"存档"任务\n   - 设置定期将录像存档到指定位置\n   - 可以设置保留策略，自动删除旧录像\n\n导出的录像可以包含水印，以验证其真实性和完整性。'
  }
];

// 分类
const categories = [
  { id: 'basic', name: '基础知识', count: 2 },
  { id: 'setup', name: '设置与配置', count: 2 },
  { id: 'remote', name: '远程访问', count: 2 },
  { id: 'storage', name: '存储与备份', count: 2 },
  { id: 'advanced', name: '高级功能', count: 2 },
];

export default function SurveillanceFaqPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">监控常见问题</h1>
        <p className="text-xl text-gray-600">
          查找关于美步监控产品的常见问题解答
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
