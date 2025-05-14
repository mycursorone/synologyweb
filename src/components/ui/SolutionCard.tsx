'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SolutionCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  industry: string;
}

const SolutionCard = ({
  id,
  title,
  description,
  imageUrl,
  slug,
  industry
}: SolutionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="relative h-48 w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-all duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-medium text-lg">{title}</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {industry}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <Link
          href={`/solutions/${slug}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          了解更多
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
