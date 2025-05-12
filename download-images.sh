#!/bin/bash

# 创建图片目录
mkdir -p public/images/carousel
mkdir -p public/images/features
mkdir -p public/images/products
mkdir -p public/images/solutions
mkdir -p public/images/support

# 轮播图片
curl -o public/images/carousel/carousel-1.jpg https://images.unsplash.com/photo-1563770660941-10a63a9ed40f?q=80&w=1920&h=600&auto=format&fit=crop
curl -o public/images/carousel/carousel-2.jpg https://images.unsplash.com/photo-1581092921461-7d65ca45393a?q=80&w=1920&h=600&auto=format&fit=crop
curl -o public/images/carousel/carousel-3.jpg https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=1920&h=600&auto=format&fit=crop

# 特色卡片图片
curl -o public/images/features/storage.jpg https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=400&h=300&auto=format&fit=crop
curl -o public/images/features/security.jpg https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400&h=300&auto=format&fit=crop
curl -o public/images/features/network.jpg https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&h=300&auto=format&fit=crop
curl -o public/images/features/cloud.jpg https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&h=300&auto=format&fit=crop

# 产品图片
curl -o public/images/products/ds220plus.jpg https://images.unsplash.com/photo-1603732551658-5fabbafa25eb?q=80&w=300&h=200&auto=format&fit=crop
curl -o public/images/products/ds1621plus.jpg https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=300&h=200&auto=format&fit=crop
curl -o public/images/products/rt2600ac.jpg https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=300&h=200&auto=format&fit=crop
curl -o public/images/products/bc500.jpg https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=300&h=200&auto=format&fit=crop

# 公司图片
curl -o public/images/company.jpg https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&h=400&auto=format&fit=crop

echo "图片下载完成"
