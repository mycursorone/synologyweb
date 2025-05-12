import { NextResponse } from 'next/server';

// 模拟产品数据
const products = [
  {
    id: 'ds220plus',
    title: 'DS220+',
    description: '高性能双盘位 NAS，适合家庭和小型办公室使用，提供强大的文件共享和多媒体功能。',
    imageUrl: '/images/products/ds220plus.jpg',
    category: '家庭 NAS',
    price: '¥2,999',
    features: ['双核处理器', '2GB DDR4 内存', '最大支持 32TB 存储空间', '硬件加速引擎'],
  },
  {
    id: 'ds1621plus',
    title: 'DS1621+',
    description: '强大的六盘位 NAS 解决方案，为中小型企业提供可扩展的存储和虚拟化功能。',
    imageUrl: '/images/products/ds1621plus.jpg',
    category: '企业 NAS',
    price: '¥8,999',
    features: ['四核处理器', '4GB DDR4 ECC 内存', '最大支持 96TB 存储空间', '支持 SSD 缓存'],
  },
  {
    id: 'rt2600ac',
    title: 'RT2600ac',
    description: '高性能无线路由器，提供强大的网络安全功能和家长控制，适合家庭和小型办公室使用。',
    imageUrl: '/images/products/rt2600ac.jpg',
    category: '路由器',
    price: '¥1,999',
    features: ['双频 WiFi', '1.7GHz 四核处理器', 'MU-MIMO 技术', '高级安全功能'],
  },
  {
    id: 'bc500',
    title: 'BC500',
    description: '高清网络摄像机，提供清晰的视频监控和智能侦测功能，适合家庭和小型企业使用。',
    imageUrl: '/images/products/bc500.jpg',
    category: '监控摄像机',
    price: '¥899',
    features: ['5MP 高清分辨率', '夜视功能', '移动侦测', '防水防尘'],
  },
];

export async function GET() {
  return NextResponse.json(products);
}
