#!/bin/bash

# 下载缺失的产品图片
curl -o public/images/products/ds220j.jpg https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=300&h=200&auto=format&fit=crop
curl -o public/images/products/license.jpg https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=300&h=200&auto=format&fit=crop
curl -o public/images/products/vs960hd.jpg https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=300&h=200&auto=format&fit=crop

echo "缺失图片下载完成"
