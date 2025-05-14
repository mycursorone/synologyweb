#!/bin/bash

# 创建应用图标目录
mkdir -p public/images/apps

# 下载应用图标
curl -o public/images/apps/dsfile.png https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?q=80&w=200&h=200&auto=format&fit=crop
curl -o public/images/apps/dsvideo.png https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=200&h=200&auto=format&fit=crop
curl -o public/images/apps/dsphoto.png https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=200&h=200&auto=format&fit=crop
curl -o public/images/apps/dsdrive.png https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=200&h=200&auto=format&fit=crop
curl -o public/images/apps/assistant.png https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=200&h=200&auto=format&fit=crop
curl -o public/images/apps/dsaudio.png https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200&h=200&auto=format&fit=crop

echo "应用图标下载完成"
