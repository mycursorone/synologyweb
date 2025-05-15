#!/bin/bash

# 创建目录
mkdir -p public/images/about

# 下载公司里程碑图片
curl -o public/images/about/milestone-2010.jpg https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&h=400&auto=format&fit=crop
curl -o public/images/about/milestone-2012.jpg https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&h=400&auto=format&fit=crop
curl -o public/images/about/milestone-2015.jpg https://images.unsplash.com/photo-1563770660941-10a63396ad13?q=80&w=800&h=400&auto=format&fit=crop
curl -o public/images/about/milestone-2018.jpg https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=800&h=400&auto=format&fit=crop
curl -o public/images/about/milestone-2020.jpg https://images.unsplash.com/photo-1581092921461-7d65ca45ec1e?q=80&w=800&h=400&auto=format&fit=crop
curl -o public/images/about/milestone-2023.jpg https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=800&h=400&auto=format&fit=crop

# 下载公司大楼图片
curl -o public/images/about/company-building.jpg https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&h=600&auto=format&fit=crop

echo "公司页面图片下载完成"
