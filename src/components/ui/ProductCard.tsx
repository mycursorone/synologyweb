'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  features?: string[];
}

const ProductCard = ({
  id,
  title,
  description,
  imageUrl,
  category,
  features = [],
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        {/* 使用真实图片 */}
        <div className="absolute inset-0">
          <Image
            src={imageUrl || `/images/products/${id}.jpg`}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* 悬停效果 */}
        {isHovered && (
          <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
            <Link
              href={`/products/${category}/${id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              查看详情
            </Link>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="text-sm text-blue-600 mb-1">{category}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        {features.length > 0 && (
          <div className="mb-4">
            <ul className="text-sm text-gray-700">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start mb-1">
                  <svg
                    className="h-5 w-5 text-green-500 mr-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}


      </div>
    </div>
  );
};

export default ProductCard;
