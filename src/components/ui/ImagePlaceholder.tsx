'use client';

import React from 'react';

interface ImagePlaceholderProps {
  width: number;
  height: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width,
  height,
  text,
  bgColor = '#3B82F6', // 默认蓝色背景
  textColor = '#FFFFFF', // 默认白色文字
  className = '',
}) => {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <div className="text-center p-4">
        <div className="text-lg font-bold">{text || '示例图片'}</div>
        <div className="text-sm mt-2">{`${width} x ${height}`}</div>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
