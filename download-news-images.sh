#!/bin/bash

# 创建新闻图片目录
mkdir -p public/images/news

# 下载新闻图片
curl -o public/images/news/new-nas-2023.jpg https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=800&h=500&auto=format&fit=crop
curl -o public/images/news/ai-storage.jpg https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=500&auto=format&fit=crop
curl -o public/images/news/global-expansion.jpg https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&h=500&auto=format&fit=crop
curl -o public/images/news/cloud-partnership.jpg https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&h=500&auto=format&fit=crop
curl -o public/images/news/industry-report.jpg https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=500&auto=format&fit=crop
curl -o public/images/news/tech-summit.jpg https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&h=500&auto=format&fit=crop
curl -o public/images/news/innovation-award.jpg https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=800&h=500&auto=format&fit=crop
curl -o public/images/news/security-solution.jpg https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&h=500&auto=format&fit=crop
curl -o public/images/news/market-share.jpg https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=800&h=500&auto=format&fit=crop
curl -o public/images/news/industry-trend.jpg https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=500&auto=format&fit=crop

echo "新闻图片下载完成"
