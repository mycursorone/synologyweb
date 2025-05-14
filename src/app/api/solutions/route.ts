import { NextRequest, NextResponse } from 'next/server';

// 解决方案数据模型
const solutions = [
  {
    id: 'enterprise-storage',
    title: '企业数据存储与备份',
    slug: 'enterprise-storage',
    description: '为企业提供高可靠性、高性能的数据存储和备份解决方案，保障业务连续性。',
    fullDescription: `
      在当今数字化时代，数据已成为企业最宝贵的资产之一。美步企业数据存储与备份解决方案为企业提供全面的数据管理策略，
      从日常存储、协作到灾难恢复，全方位保障企业数据安全。

      我们的解决方案采用先进的存储技术和冗余设计，确保数据的高可用性和完整性。同时，直观的管理界面和丰富的应用生态，
      让企业IT管理变得简单高效。无论是中小企业还是大型组织，都能找到适合自己需求的存储方案。
    `,
    imageUrl: '/images/solutions/enterprise-storage.jpg',
    industry: '企业',
    benefits: [
      '高可靠性：RAID保护和快照技术，防止数据丢失',
      '灵活扩展：随业务增长轻松扩展存储容量',
      '高效备份：自动化备份策略，多版本保护',
      '灾难恢复：异地备份和快速恢复能力',
      '成本效益：比传统SAN/NAS解决方案更具成本效益'
    ],
    features: [
      '集中化存储管理',
      '文件同步与共享',
      '虚拟化支持',
      '加密与访问控制',
      '自动化备份计划',
      '实时监控与报警'
    ],
    caseStudies: [
      {
        title: '某制造企业案例',
        description: '通过部署美步企业级存储解决方案，该制造企业实现了生产数据的集中管理，提高了数据安全性，同时降低了IT管理成本。'
      },
      {
        title: '某金融机构案例',
        description: '该金融机构利用美步的备份解决方案，建立了完善的数据保护体系，满足了行业合规要求，并显著缩短了数据恢复时间。'
      }
    ],
    relatedProducts: ['ds1821plus', 'ds1621plus']
  },
  {
    id: 'video-surveillance',
    title: '视频监控与安全',
    slug: 'video-surveillance',
    description: '全方位的视频监控解决方案，为家庭和企业提供24/7安全保障。',
    fullDescription: `
      美步视频监控与安全解决方案提供端到端的安全监控体系，从高清摄像机到智能分析软件，全面满足不同场景的安全需求。

      我们的解决方案支持多种品牌的IP摄像机，提供灵活的存储选项和智能的视频管理功能。通过移动应用，用户可以随时随地查看实时画面和回放录像。
      先进的AI分析功能可以识别人员、车辆，并对异常行为进行预警，大幅提升安全监控的效率和准确性。
    `,
    imageUrl: '/images/solutions/video-surveillance.jpg',
    industry: '安防',
    benefits: [
      '全天候监控：24/7不间断录制和监控',
      '远程访问：随时随地通过移动设备查看',
      '智能分析：人员识别和异常行为检测',
      '灵活扩展：轻松添加摄像机和存储空间',
      '集中管理：统一平台管理所有设备'
    ],
    features: [
      '支持多品牌IP摄像机',
      '智能录像计划',
      'AI动态检测',
      '实时警报通知',
      '视频加密存储',
      '多用户权限管理'
    ],
    caseStudies: [
      {
        title: '某商业综合体案例',
        description: '该商业综合体部署了美步视频监控解决方案，覆盖了停车场、商场和办公区域，实现了安全事件的快速响应和处理。'
      },
      {
        title: '某住宅社区案例',
        description: '通过美步的监控系统，该社区提升了整体安全水平，居民可以通过手机查看公共区域的实时画面，增强了安全感。'
      }
    ],
    relatedProducts: ['bc500', 'ds220plus']
  },
  {
    id: 'home-multimedia',
    title: '家庭多媒体中心',
    slug: 'home-multimedia',
    description: '打造智能家庭娱乐中心，集中管理和享受您的所有数字媒体内容。',
    fullDescription: `
      美步家庭多媒体中心解决方案让您的数字娱乐体验更上一层楼。无论是电影、音乐、照片还是电视节目，都可以集中存储和管理，
      并在家中任何设备上流畅播放。

      我们的解决方案支持4K视频转码，兼容各种智能电视、游戏机和移动设备。强大的媒体服务器功能可以自动整理您的媒体库，
      添加封面和元数据，让浏览和查找变得轻松愉快。同时，照片管理功能可以自动备份手机照片，并通过AI技术进行智能分类和标记。
    `,
    imageUrl: '/images/solutions/home-multimedia.jpg',
    industry: '家庭',
    benefits: [
      '集中存储：所有媒体内容统一管理',
      '随处访问：在任何设备上享受内容',
      '自动备份：手机照片自动同步',
      '智能组织：AI辅助的媒体分类',
      '家庭共享：多用户访问和权限控制'
    ],
    features: [
      '4K视频流媒体',
      '照片自动备份与整理',
      '音乐流媒体服务',
      '媒体元数据管理',
      '跨平台访问支持',
      '个人云存储'
    ],
    caseStudies: [
      {
        title: '某四口之家案例',
        description: '这个家庭通过美步NAS建立了家庭媒体中心，所有成员的照片和视频都自动备份，家人可以在电视上轻松浏览和播放珍贵回忆。'
      },
      {
        title: '某影音爱好者案例',
        description: '作为电影收藏家，该用户使用美步存储和管理超过1000部高清电影，并通过DLNA在全屋任何设备上流畅播放。'
      }
    ],
    relatedProducts: ['ds220plus', 'ds220j']
  },
  {
    id: 'small-business-it',
    title: '小型企业IT基础设施',
    slug: 'small-business-it',
    description: '为小型企业提供一站式IT基础设施解决方案，简化管理，提升效率。',
    fullDescription: `
      美步小型企业IT基础设施解决方案专为资源有限的中小企业设计，提供文件服务器、邮件服务器、VPN和协作平台等核心IT功能，
      无需复杂的IT团队和昂贵的硬件投入。

      我们的解决方案采用模块化设计，企业可以根据自身需求选择所需功能。直观的管理界面让非IT专业人员也能轻松管理系统。
      随着业务发展，系统可以灵活扩展，保护企业的IT投资。
    `,
    imageUrl: '/images/solutions/small-business-it.jpg',
    industry: '中小企业',
    benefits: [
      '降低成本：整合多种IT功能，减少硬件投入',
      '简化管理：集中化管理界面，降低技术门槛',
      '提升协作：内置文件共享和协作工具',
      '增强安全：数据加密和访问控制',
      '业务连续性：自动备份和快速恢复'
    ],
    features: [
      '文件服务器',
      '邮件服务器',
      'VPN服务',
      '协作套件',
      '网络备份',
      '虚拟化支持'
    ],
    caseStudies: [
      {
        title: '某设计工作室案例',
        description: '该设计工作室通过美步解决方案建立了团队协作平台，解决了大文件共享和版本控制问题，显著提高了工作效率。'
      },
      {
        title: '某律师事务所案例',
        description: '该律所利用美步的安全存储和VPN功能，实现了敏感文件的安全存储和远程访问，同时满足了行业合规要求。'
      }
    ],
    relatedProducts: ['ds420j', 'rt2600ac']
  },
  {
    id: 'education-data',
    title: '教育机构数据管理',
    slug: 'education-data',
    description: '为学校和教育机构提供安全、高效的数据管理和教学资源共享平台。',
    fullDescription: `
      美步教育机构数据管理解决方案专为学校和教育机构设计，提供安全的数据存储、教学资源共享和学生作业管理功能。

      我们的解决方案支持多用户访问控制，教师可以轻松共享教学材料，学生可以安全提交作业。内置的备份功能确保重要数据不会丢失。
      系统支持与现有教育管理软件集成，提供统一的数据管理平台。
    `,
    imageUrl: '/images/solutions/education-data.jpg',
    industry: '教育',
    benefits: [
      '资源共享：教学材料集中存储和共享',
      '作业管理：学生作业提交和评阅平台',
      '数据保护：重要教育数据安全备份',
      '访问控制：基于角色的权限管理',
      '成本效益：比商业云服务更具成本优势'
    ],
    features: [
      '教学资源库',
      '学生作业提交系统',
      '用户权限管理',
      '数据备份与恢复',
      '跨平台访问',
      '与教育软件集成'
    ],
    caseStudies: [
      {
        title: '某中学案例',
        description: '该中学使用美步解决方案建立了校内教学资源库，教师可以共享教案和教学视频，学生可以在线提交作业，提高了教学效率。'
      },
      {
        title: '某大学系案例',
        description: '该大学系利用美步存储和管理研究数据和教学资料，建立了系内知识库，促进了教研工作的开展。'
      }
    ],
    relatedProducts: ['ds1621plus', 'ds420j']
  },
  {
    id: 'healthcare-data',
    title: '医疗数据存储与保护',
    slug: 'healthcare-data',
    description: '为医疗机构提供符合行业标准的数据存储、保护和共享解决方案。',
    fullDescription: `
      美步医疗数据存储与保护解决方案专为医院和医疗机构设计，提供安全、合规的医疗数据管理平台。

      我们的解决方案支持医学影像存储、电子病历管理和医疗数据备份，同时确保数据安全和隐私保护。
      系统采用加密技术和严格的访问控制，帮助医疗机构满足行业合规要求。
    `,
    imageUrl: '/images/solutions/healthcare-data.jpg',
    industry: '医疗',
    benefits: [
      '合规存储：满足医疗数据保护法规要求',
      '安全共享：医疗团队间安全共享患者信息',
      '长期归档：医疗数据长期保存和快速检索',
      '灾难恢复：关键医疗数据的备份和恢复',
      '成本控制：优化医疗IT基础设施投资'
    ],
    features: [
      '医学影像存储',
      '电子病历管理',
      '数据加密与保护',
      '访问审计日志',
      '自动化备份',
      '多站点复制'
    ],
    caseStudies: [
      {
        title: '某社区医院案例',
        description: '该社区医院通过美步解决方案建立了医学影像存档系统，实现了影像数据的长期保存和快速调阅，提高了诊断效率。'
      },
      {
        title: '某医疗集团案例',
        description: '该医疗集团利用美步的多站点复制功能，在多家分院间建立了数据共享和灾备系统，确保了业务连续性和数据安全。'
      }
    ],
    relatedProducts: ['ds1821plus', 'ds1621plus']
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const industry = searchParams.get('industry');

  // 如果提供了 slug 参数，返回单个解决方案
  if (slug) {
    const solution = solutions.find(s => s.slug === slug);
    if (!solution) {
      return NextResponse.json({ error: '未找到解决方案' }, { status: 404 });
    }
    return NextResponse.json(solution);
  }

  // 如果提供了 industry 参数，按行业筛选
  if (industry) {
    const filteredSolutions = solutions.filter(s => s.industry === industry);
    return NextResponse.json(filteredSolutions);
  }

  // 否则返回所有解决方案
  return NextResponse.json(solutions);
}
