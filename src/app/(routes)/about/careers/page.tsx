import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '招贤纳士 - 美步科技',
  description: '加入美步科技，与我们一起创造未来的数据存储和管理解决方案。',
};

// 职位数据
const jobPositions = [
  {
    id: 1,
    title: '软件工程师',
    department: '研发部',
    location: '上海',
    type: '全职',
    description: '负责公司核心产品的设计、开发和维护，包括NAS操作系统、应用程序和云服务等。',
    requirements: [
      '计算机科学或相关专业本科及以上学历',
      '熟悉C/C++、Python或Java等编程语言',
      '了解Linux操作系统和网络协议',
      '具有良好的团队合作精神和沟通能力',
      '有存储系统或分布式系统开发经验者优先'
    ]
  },
  {
    id: 2,
    title: '前端开发工程师',
    department: '研发部',
    location: '上海',
    type: '全职',
    description: '负责公司产品Web界面和移动应用的设计与开发，提供优秀的用户体验。',
    requirements: [
      '计算机相关专业本科及以上学历',
      '熟悉HTML、CSS、JavaScript等前端技术',
      '熟悉React、Vue等前端框架',
      '对UI/UX设计有一定了解',
      '有响应式设计经验者优先'
    ]
  },
  {
    id: 3,
    title: '产品经理',
    department: '产品部',
    location: '上海',
    type: '全职',
    description: '负责公司产品的规划、设计和生命周期管理，确保产品满足市场需求。',
    requirements: [
      '本科及以上学历，计算机或商业相关专业优先',
      '3年以上IT产品管理经验',
      '良好的沟通能力和团队协作精神',
      '熟悉存储、网络或云服务领域者优先',
      '具有数据分析能力和市场洞察力'
    ]
  },
  {
    id: 4,
    title: '销售经理',
    department: '销售部',
    location: '北京/上海/广州',
    type: '全职',
    description: '负责公司产品的销售工作，开发和维护客户关系，达成销售目标。',
    requirements: [
      '本科及以上学历',
      '3年以上IT行业销售经验',
      '优秀的沟通能力和谈判技巧',
      '有存储或网络设备销售经验者优先',
      '具有良好的客户资源和团队合作精神'
    ]
  },
];

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">招贤纳士</h1>
        <p className="text-xl text-gray-600">
          加入美步科技，与我们一起创造未来的数据存储和管理解决方案
        </p>
      </div>

      {/* 公司文化 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">公司文化</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">创新</h3>
            <p className="text-gray-600">
              我们鼓励创新思维，不断探索新技术和解决方案，为用户创造更大价值。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">协作</h3>
            <p className="text-gray-600">
              我们重视团队合作，相信通过有效的协作可以实现更大的目标和成就。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">品质</h3>
            <p className="text-gray-600">
              我们追求卓越品质，确保每一款产品和服务都能满足用户的高标准要求。
            </p>
          </div>
        </div>
      </div>

      {/* 职位列表 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">当前职位</h2>
        <div className="space-y-6">
          {jobPositions.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{job.department}</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{job.location}</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">{job.type}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="mb-4">
                <h4 className="font-medium mb-2">要求：</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200">
                申请职位
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 团队风采 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">团队风采</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/team/team1.jpg"
              alt="团队协作"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold mb-1">团队协作</h3>
                <p>我们相信通过有效的协作可以实现更大的目标和成就</p>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/team/team2.jpg"
              alt="创新思维"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold mb-1">创新思维</h3>
                <p>我们鼓励创新思维，不断探索新技术和解决方案</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 员工福利 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">员工福利</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="text-blue-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">具有竞争力的薪资</h3>
            <p className="text-gray-600">我们提供行业内具有竞争力的薪资待遇，并定期进行薪资调整。</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="text-blue-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">职业发展</h3>
            <p className="text-gray-600">我们提供清晰的职业发展路径和丰富的培训机会，帮助员工不断成长。</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="text-blue-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">灵活工作时间</h3>
            <p className="text-gray-600">我们提供灵活的工作时间安排，帮助员工平衡工作和生活。</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <div className="text-blue-600 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">健康保障</h3>
            <p className="text-gray-600">我们提供全面的健康保险和定期体检，关注员工的身心健康。</p>
          </div>
        </div>
      </div>

      {/* 联系我们 */}
      <div className="bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">没有找到合适的职位？</h2>
        <p className="text-gray-600 mb-6">
          如果您没有找到合适的职位，但对加入美步科技感兴趣，请将您的简历发送至我们的人力资源部门。
        </p>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block transition duration-200">
          联系我们
        </Link>
      </div>
    </div>
  );
}
