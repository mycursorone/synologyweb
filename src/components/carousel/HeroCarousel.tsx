'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: '创新存储解决方案',
    description: '为企业和个人用户提供高性能、可靠的存储解决方案',
    imageUrl: '/images/carousel-1.jpg',
    linkUrl: '/products/nas',
  },
  {
    id: 2,
    title: '智能监控系统',
    description: '全方位保障您的安全，随时随地监控您的环境',
    imageUrl: '/images/carousel-2.jpg',
    linkUrl: '/products/surveillance',
  },
  {
    id: 3,
    title: '高速网络设备',
    description: '稳定、快速的网络连接，满足您的所有需求',
    imageUrl: '/images/carousel-3.jpg',
    linkUrl: '/products/router',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 切换到下一张幻灯片
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  // 切换到上一张幻灯片
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  // 直接跳转到指定幻灯片
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-carousel relative w-full h-[60vh] min-h-[600px] max-h-[750px] overflow-hidden z-10">
      {/* 轮播图片 */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselData.map((item) => (
          <div key={item.id} className="min-w-full h-full relative">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="w-full h-full relative">
              {/* 使用真实图片 */}
              <div className="absolute inset-0">
                <Image
                  src={`/images/carousel/carousel-${item.id}.jpg`}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={item.id === 1}
                />
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4 text-center">
              <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
              <p className="text-xl mb-8 max-w-2xl">{item.description}</p>
              <Link
                href={item.linkUrl}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                了解更多
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 左右箭头 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30"
        aria-label="上一张"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30"
        aria-label="下一张"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`转到幻灯片 ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
