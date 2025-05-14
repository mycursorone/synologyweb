#!/bin/bash

# 创建新闻图片目录
mkdir -p public/images/news

# 下载新闻图片 - 使用更简单的URL
curl -o public/images/news/new-nas-2023.jpg https://source.unsplash.com/random/800x500/?server,storage
curl -o public/images/news/ai-storage.jpg https://source.unsplash.com/random/800x500/?ai,technology
curl -o public/images/news/global-expansion.jpg https://source.unsplash.com/random/800x500/?global,business
curl -o public/images/news/cloud-partnership.jpg https://source.unsplash.com/random/800x500/?cloud,technology
curl -o public/images/news/industry-report.jpg https://source.unsplash.com/random/800x500/?report,business
curl -o public/images/news/tech-summit.jpg https://source.unsplash.com/random/800x500/?conference,technology
curl -o public/images/news/innovation-award.jpg https://source.unsplash.com/random/800x500/?award,trophy
curl -o public/images/news/security-solution.jpg https://source.unsplash.com/random/800x500/?security,technology
curl -o public/images/news/market-share.jpg https://source.unsplash.com/random/800x500/?market,graph
curl -o public/images/news/industry-trend.jpg https://source.unsplash.com/random/800x500/?trend,business

echo "新闻图片下载完成"
