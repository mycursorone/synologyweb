import { NextRequest, NextResponse } from 'next/server';

// 模拟产品数据
const products = [
  {
    id: 'ds220plus',
    title: 'DS220+',
    description: '高性能双盘位 NAS，适合家庭和小型办公室使用，提供强大的文件共享和多媒体功能。',
    imageUrl: '/images/products/ds220plus.jpg',
    category: '家庭 NAS',
    features: ['双核处理器', '2GB DDR4 内存', '最大支持 32TB 存储空间', '硬件加速引擎'],
  },
  {
    id: 'ds1621plus',
    title: 'DS1621+',
    description: '强大的六盘位 NAS 解决方案，为中小型企业提供可扩展的存储和虚拟化功能。',
    imageUrl: '/images/products/ds1621plus.jpg',
    category: '企业 NAS',
    features: ['四核处理器', '4GB DDR4 ECC 内存', '最大支持 96TB 存储空间', '支持 SSD 缓存'],
  },
  {
    id: 'rt2600ac',
    title: 'RT2600ac',
    description: '高性能无线路由器，提供强大的网络安全功能和家长控制，适合家庭和小型办公室使用。',
    imageUrl: '/images/products/rt2600ac.jpg',
    category: '路由器',
    features: ['双频 WiFi', '1.7GHz 四核处理器', 'MU-MIMO 技术', '高级安全功能'],
  },
  {
    id: 'bc500',
    title: 'BC500',
    description: '高清网络摄像机，提供清晰的视频监控和智能侦测功能，适合家庭和小型企业使用。',
    imageUrl: '/images/products/bc500.jpg',
    category: '监控摄像机',
    features: ['5MP 高清分辨率', '夜视功能', '移动侦测', '防水防尘'],
  },
  // 添加更多产品数据
  {
    id: 'ds220j',
    title: 'DS220j',
    description: '入门级双盘位 NAS，适合家庭用户使用，提供基本的文件共享和多媒体功能。',
    imageUrl: '/images/products/ds220j.jpg',
    category: '家庭 NAS',
    features: ['双核处理器', '512MB DDR4 内存', '最大支持 32TB 存储空间', '低功耗设计'],
  },
  {
    id: 'ds420j',
    title: 'DS420j',
    description: '四盘位 NAS，适合家庭用户使用，提供更大的存储容量和更好的性能。',
    imageUrl: '/images/products/ds420j.jpg',
    category: '家庭 NAS',
    features: ['四核处理器', '1GB DDR4 内存', '最大支持 64TB 存储空间', '低噪音设计'],
  },
  {
    id: 'ds1821plus',
    title: 'DS1821+',
    description: '八盘位 NAS 解决方案，为中型企业提供大容量存储和高性能计算能力。',
    imageUrl: '/images/products/ds1821plus.jpg',
    category: '企业 NAS',
    features: ['四核处理器', '8GB DDR4 ECC 内存', '最大支持 128TB 存储空间', '支持 10GbE 网卡'],
  },
  {
    id: 'mr2200ac',
    title: 'MR2200ac',
    description: 'Mesh WiFi 路由器，提供全屋无缝覆盖，适合大户型家庭使用。',
    imageUrl: '/images/products/mr2200ac.jpg',
    category: '路由器',
    features: ['三频 WiFi', '双核处理器', 'Mesh 技术', '家长控制功能'],
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  // 如果提供了 id 参数，返回单个产品
  if (id) {
    const product = products.find(p => p.id === id);
    if (!product) {
      return NextResponse.json({ error: '未找到产品' }, { status: 404 });
    }
    return NextResponse.json(product);
  }

  // 否则返回所有产品
  return NextResponse.json(products);
}
