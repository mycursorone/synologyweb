import { NextResponse } from 'next/server';

// 产品分类数据
const categories = [
  {
    id: 'nas',
    name: 'NAS 存储',
    description: '高性能、可靠的 NAS 存储设备，满足家庭和企业的各种需求。',
    subcategories: [
      {
        id: 'home-nas',
        name: '家庭 NAS',
        description: '适合家庭用户的 NAS 存储设备，提供文件共享、多媒体流媒体和备份功能。',
      },
      {
        id: 'business-nas',
        name: '企业 NAS',
        description: '适合企业用户的 NAS 存储设备，提供高性能、高可靠性和可扩展性。',
      }
    ]
  },
  {
    id: 'surveillance',
    name: '监控方案',
    description: '全方位保障您的安全，随时随地监控您的环境。',
    subcategories: [
      {
        id: 'surveillance-station',
        name: 'Surveillance Station',
        description: '专业的监控软件，支持多种摄像机，提供丰富的监控功能。',
      },
      {
        id: 'network-camera',
        name: '网络摄像机',
        description: '高清网络摄像机，提供清晰的视频监控和智能侦测功能。',
      }
    ]
  },
  {
    id: 'router',
    name: '路由器',
    description: '稳定、快速的网络连接，满足您的所有需求。',
    subcategories: [
      {
        id: 'wifi-router',
        name: 'WiFi 路由器',
        description: '高性能无线路由器，提供强大的网络覆盖和安全功能。',
      }
    ]
  }
];

export async function GET() {
  return NextResponse.json(categories);
}
