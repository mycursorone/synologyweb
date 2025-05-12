'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  icon: React.ReactNode;
}

// 图标组件
const StorageIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
    <path d="M2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"></path>
  </svg>
);

const SecurityIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
);

const NetworkIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
  </svg>
);

const CloudIcon = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
  </svg>
);

// 特色卡片数据
const featureCards: FeatureCard[] = [
  {
    id: 'storage',
    title: '存储解决方案',
    description: '高性能、可靠的存储系统，满足家庭和企业的各种需求。',
    imageUrl: '/images/features/storage.jpg',
    linkUrl: '/products/nas',
    icon: <StorageIcon />,
  },
  {
    id: 'security',
    title: '安全监控系统',
    description: '全方位保障您的安全，随时随地监控您的环境。',
    imageUrl: '/images/features/security.jpg',
    linkUrl: '/products/surveillance',
    icon: <SecurityIcon />,
  },
  {
    id: 'network',
    title: '网络设备',
    description: '稳定、快速的网络连接，满足您的所有需求。',
    imageUrl: '/images/features/network.jpg',
    linkUrl: '/products/router',
    icon: <NetworkIcon />,
  },
  {
    id: 'cloud',
    title: '云服务',
    description: '随时随地访问您的数据，保持连接和同步。',
    imageUrl: '/images/features/cloud.jpg',
    linkUrl: '/solutions/cloud',
    icon: <CloudIcon />,
  },
];

const HoverFeatureCards = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {featureCards.map((card) => (
        <div
          key={card.id}
          className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-2"
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* 背景 - 使用真实图片 */}
          <div className="absolute inset-0">
            <Image
              src={`/images/features/${card.id}.jpg`}
              alt={card.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* 内容 */}
          <div className="feature-card-content relative z-10 p-3 h-48 flex flex-col justify-between bg-gradient-to-t from-black/80 to-transparent text-white">
            <div className={`transition-all duration-300 ${
              hoveredCard === card.id ? 'opacity-0' : 'opacity-100'
            }`}>
              <div className="text-blue-400">{card.icon}</div>
              <h3 className="text-xl font-bold mt-2">{card.title}</h3>
            </div>

            <div className={`transition-all duration-300 ${
              hoveredCard === card.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="mb-4">{card.description}</p>
              <Link
                href={card.linkUrl}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverFeatureCards;
