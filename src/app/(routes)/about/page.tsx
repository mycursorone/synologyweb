'use client';

import Image from 'next/image';
import Link from 'next/link';

// 公司历史里程碑
const milestones = [
  {
    year: '2010',
    title: '公司成立',
    description: '成都美步科技有限公司在中国成立，致力于为用户提供创新的存储解决方案。'
  },
  {
    year: '2012',
    title: '第一代产品发布',
    description: '推出第一代NAS产品，获得市场广泛认可。'
  },
  {
    year: '2015',
    title: '业务扩展',
    description: '业务扩展到网络设备和监控解决方案领域。'
  },
  {
    year: '2018',
    title: '全球化战略',
    description: '开始实施全球化战略，产品销往全球多个国家和地区。'
  },
  {
    year: '2020',
    title: '十周年庆典',
    description: '庆祝公司成立十周年，推出多款创新产品。'
  },
  {
    year: '2023',
    title: '技术创新',
    description: '推出新一代AI驱动的存储和网络解决方案。'
  },
];

// 核心价值观
const values = [
  {
    title: '创新',
    description: '我们不断追求技术创新，为用户提供前沿的产品和解决方案。',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: '品质',
    description: '我们坚持高品质标准，确保每一款产品都经过严格测试和质量控制。',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: '用户至上',
    description: '我们始终将用户需求放在首位，提供卓越的产品体验和服务。',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: '可持续发展',
    description: '我们致力于环保设计和可持续发展，减少产品对环境的影响。',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
];

// 管理团队
const team = [
  {
    name: '张明',
    position: '创始人兼首席执行官',
    bio: '张明先生拥有20年科技行业经验，曾在多家知名科技公司担任高管职位。他于2010年创立美步科技，致力于为用户提供创新的存储和网络解决方案。',
    imageUrl: '/images/team/ceo.jpg'
  },
  {
    name: '李华',
    position: '首席技术官',
    bio: '李华博士拥有计算机科学博士学位，在存储技术和网络安全领域拥有多项专利。他领导美步科技的研发团队，推动技术创新和产品开发。',
    imageUrl: '/images/team/cto.jpg'
  },
  {
    name: '王芳',
    position: '首席运营官',
    bio: '王芳女士拥有丰富的运营和供应链管理经验，曾在多家跨国公司担任高级管理职位。她负责美步科技的日常运营和全球业务拓展。',
    imageUrl: '/images/team/coo.jpg'
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 公司简介 */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">关于成都美步科技有限公司</h1>
            <p className="text-lg text-gray-700 mb-4">
              成都美步科技有限公司是一家领先的存储和网络解决方案提供商，致力于为家庭和企业用户提供创新、可靠的产品和服务。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              自2010年成立以来，我们一直专注于技术创新和产品质量，为全球数百万用户提供高性能的NAS存储设备、路由器和监控解决方案。
            </p>
            <p className="text-lg text-gray-700 mb-4">
              我们的使命是通过创新技术简化数据管理和网络连接，帮助用户保护和充分利用他们的数字资产。
            </p>
            <p className="text-lg text-gray-700">
              公司地址：成都市武侯区人民南路四段1号时代数码大厦22楼B9，联系电话：028-82009000。
            </p>
          </div>
          <div className="md:w-1/2 bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-blue-600 font-bold text-5xl mb-2">10+</div>
              <div className="text-gray-700">年行业经验</div>
              <div className="flex justify-center gap-8 mt-6">
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-3xl mb-1">100+</div>
                  <div className="text-gray-700 text-sm">产品型号</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-3xl mb-1">50+</div>
                  <div className="text-gray-700 text-sm">国家和地区</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-3xl mb-1">1000万+</div>
                  <div className="text-gray-700 text-sm">用户</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 公司历史 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">公司发展历程</h2>
        <div className="relative">
          {/* 时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 z-10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="w-5/12 bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 font-bold text-xl mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 核心价值观 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">核心价值观</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 管理团队 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">管理团队</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-blue-600 mb-3">{member.position}</div>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 联系我们 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">加入我们</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          我们始终在寻找优秀的人才加入我们的团队。如果您对技术充满热情，并希望在一个创新的环境中工作，欢迎加入成都美步科技有限公司。
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about/careers"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            查看职位
          </Link>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-lg border border-blue-600 transition-colors"
          >
            联系我们
          </Link>
        </div>
      </div>
    </div>
  );
}
