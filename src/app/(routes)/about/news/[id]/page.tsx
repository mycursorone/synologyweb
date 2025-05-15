'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// 新闻类别
const newsCategories = [
  { id: 'all', name: '全部' },
  { id: 'product', name: '产品新闻' },
  { id: 'company', name: '公司新闻' },
  { id: 'industry', name: '行业动态' },
  { id: 'event', name: '活动公告' },
];

// 新闻列表 - 与新闻列表页面保持一致
const newsList = [
  {
    id: 'new-nas-2023',
    title: '美步科技发布全新一代NAS存储设备',
    category: 'product',
    date: '2023-10-15',
    summary: '美步科技今日发布全新一代NAS存储设备，采用最新处理器和存储技术，性能提升50%，同时能耗降低30%。',
    imageUrl: '/images/products/ds220plus.jpg',
    featured: true,
  },
  {
    id: 'ai-storage-solution',
    title: '美步科技推出AI驱动的智能存储解决方案',
    category: 'product',
    date: '2023-09-20',
    summary: '美步科技推出业内首个AI驱动的智能存储解决方案，通过机器学习优化数据存储和访问，提高效率并降低成本。',
    imageUrl: '/images/solutions/enterprise-storage.jpg',
    featured: true,
  },
  {
    id: 'global-expansion',
    title: '美步科技宣布全球业务扩张计划',
    category: 'company',
    date: '2023-08-15',
    summary: '美步科技宣布新一轮全球业务扩张计划，将在欧洲和南美开设新的分支机构，进一步拓展国际市场。',
    imageUrl: '/images/about/company-building.jpg',
    featured: false,
  },
  {
    id: 'partnership-cloud',
    title: '美步科技与领先云服务提供商达成战略合作',
    category: 'company',
    date: '2023-07-10',
    summary: '美步科技与全球领先的云服务提供商达成战略合作，共同开发混合云存储解决方案，为企业用户提供更灵活的数据管理选择。',
    imageUrl: '/images/features/cloud.jpg',
    featured: true,
  },
  {
    id: 'industry-report-2023',
    title: '美步科技发布2023年数据存储行业报告',
    category: 'industry',
    date: '2023-06-25',
    summary: '美步科技发布《2023年数据存储行业报告》，分析了当前行业趋势和未来发展方向，为企业数据管理提供参考。',
    imageUrl: '/images/solutions/small-business-it.jpg',
    featured: false,
  },
  {
    id: 'tech-summit-2023',
    title: '美步科技将举办2023技术峰会',
    category: 'event',
    date: '2023-05-30',
    summary: '美步科技将于下月举办2023技术峰会，邀请行业专家和合作伙伴共同探讨数据存储和管理的未来发展。',
    imageUrl: '/images/solutions/education-data.jpg',
    featured: false,
  },
  {
    id: 'innovation-award',
    title: '美步科技荣获2023年度存储创新奖',
    category: 'company',
    date: '2023-04-18',
    summary: '美步科技凭借创新的企业级存储解决方案，荣获2023年度存储创新奖，彰显了公司在技术创新方面的领先地位。',
    imageUrl: '/images/solutions/surveillance.jpg',
    featured: false,
  },
  {
    id: 'security-solution',
    title: '美步科技推出企业级安全存储解决方案',
    category: 'product',
    date: '2023-03-22',
    summary: '美步科技推出新一代企业级安全存储解决方案，采用先进的加密技术和访问控制，为企业数据提供全方位保护。',
    imageUrl: '/images/solutions/enterprise-storage.jpg',
    featured: false,
  },
  {
    id: 'market-share-growth',
    title: '美步科技市场份额持续增长',
    category: 'company',
    date: '2023-02-10',
    summary: '最新市场研究报告显示，美步科技在企业存储市场的份额持续增长，成为行业增长最快的公司之一。',
    imageUrl: '/images/solutions/small-business-it.jpg',
    featured: false,
  },
  {
    id: 'industry-trend-analysis',
    title: '数据存储行业趋势分析：从本地到云端',
    category: 'industry',
    date: '2023-01-15',
    summary: '美步科技发布行业趋势分析报告，探讨数据存储从本地到云端的演变，以及混合存储模式在企业中的应用。',
    imageUrl: '/images/solutions/home-multimedia.jpg',
    featured: false,
  },
];

// 新闻详情内容
const newsDetails = {
  'new-nas-2023': {
    content: `
      <p>美步科技今日隆重发布全新一代NAS存储设备，这款设备采用了最新的处理器和存储技术，相比上一代产品，性能提升了50%，同时能耗降低了30%。</p>

      <p>新一代NAS存储设备采用了最新的四核处理器和DDR4内存，支持最大32TB的存储空间，可满足家庭和小型企业的各种存储需求。同时，该设备还支持硬件加速引擎，可以更高效地处理数据加密和解密，提供更好的数据安全保障。</p>

      <p>在能耗方面，新一代NAS存储设备采用了更先进的电源管理技术，在保持高性能的同时，能耗降低了30%，这不仅可以帮助用户节省电费，还能减少对环境的影响。</p>

      <p>美步科技产品总监表示："我们一直致力于为用户提供高性能、低能耗的存储解决方案。这款新一代NAS存储设备是我们技术创新的最新成果，我们相信它将为用户带来更好的使用体验。"</p>

      <p>新一代NAS存储设备将于下月正式上市，感兴趣的用户可以通过美步科技官网或授权经销商了解更多信息。</p>
    `,
    relatedNews: ['ai-storage-solution', 'security-solution', 'industry-report-2023']
  },
  'ai-storage-solution': {
    content: `
      <p>美步科技今日宣布推出业内首个AI驱动的智能存储解决方案，该解决方案通过机器学习技术优化数据存储和访问，显著提高效率并降低成本。</p>

      <p>这一创新解决方案利用人工智能技术分析数据访问模式，自动将频繁访问的数据移至高速存储层，将不常用的数据移至低成本存储层，实现存储资源的最优配置。同时，系统还能预测未来的数据访问需求，提前做好资源准备，进一步提高数据访问速度。</p>

      <p>据美步科技技术团队介绍，这一解决方案在实际测试中，可以将数据访问速度提高40%，同时将存储成本降低25%。这对于需要处理大量数据的企业来说，将带来显著的效益提升。</p>

      <p>美步科技首席技术官表示："人工智能和机器学习技术正在改变各个行业，存储领域也不例外。我们的AI驱动智能存储解决方案将帮助企业更高效地管理和利用数据，释放数据的真正价值。"</p>

      <p>该解决方案目前已在部分企业客户中试用，反馈非常积极。美步科技计划在今年第四季度向所有企业客户推广这一解决方案。</p>
    `,
    relatedNews: ['new-nas-2023', 'security-solution', 'tech-summit-2023']
  },
  'global-expansion': {
    content: `
      <p>美步科技今日宣布新一轮全球业务扩张计划，将在欧洲和南美开设新的分支机构，进一步拓展国际市场。</p>

      <p>根据该计划，美步科技将在德国慕尼黑设立欧洲总部，负责欧洲市场的业务拓展和客户服务。同时，公司还将在巴西圣保罗设立南美分公司，开拓南美市场。这两个新的分支机构预计将在今年年底前正式运营。</p>

      <p>美步科技CEO表示："国际化是我们长期发展战略的重要组成部分。通过在欧洲和南美设立分支机构，我们将能够更好地服务当地客户，了解当地市场需求，提供更适合当地用户的产品和解决方案。"</p>

      <p>据了解，美步科技已经在亚太地区和北美市场取得了显著成绩，产品和解决方案受到了当地用户的广泛认可。此次扩张将进一步巩固公司的全球市场地位，为未来的持续增长奠定基础。</p>

      <p>分析师认为，美步科技此次全球扩张计划表明了公司对国际市场的重视和信心，有望进一步提升公司的国际影响力和市场份额。</p>
    `,
    relatedNews: ['market-share-growth', 'partnership-cloud', 'innovation-award']
  },
  'partnership-cloud': {
    content: `
      <p>美步科技今日宣布与全球领先的云服务提供商达成战略合作，双方将共同开发混合云存储解决方案，为企业用户提供更灵活的数据管理选择。</p>

      <p>根据合作协议，美步科技将与该云服务提供商共同研发基于混合云架构的数据存储和管理解决方案，结合美步科技在存储硬件和软件方面的优势，以及云服务提供商在云计算和网络服务方面的专长，为企业用户提供从本地到云端的一体化数据管理体验。</p>

      <p>美步科技战略合作部总监表示："混合云是未来企业IT架构的重要发展方向。通过此次合作，我们将能够为客户提供更全面、更灵活的数据管理选择，帮助他们在数字化转型过程中更好地管理和利用数据资产。"</p>

      <p>该云服务提供商的合作负责人也表示："我们很高兴与美步科技合作，共同为企业用户提供创新的混合云存储解决方案。这一合作将充分发挥双方的技术优势，为用户创造更大的价值。"</p>

      <p>双方计划在今年第四季度推出首批合作产品，包括混合云存储管理平台和数据备份恢复解决方案。</p>
    `,
    relatedNews: ['ai-storage-solution', 'global-expansion', 'industry-report-2023']
  },
  'industry-report-2023': {
    content: `
      <p>美步科技今日发布《2023年数据存储行业报告》，全面分析了当前行业趋势和未来发展方向，为企业数据管理提供重要参考。</p>

      <p>报告指出，随着数字化转型的深入推进，企业数据量呈爆发式增长，对存储系统的容量、性能和可靠性提出了更高要求。同时，人工智能、大数据和物联网等新兴技术的应用，也对数据存储和管理方式产生了深远影响。</p>

      <p>报告预测，未来几年，全闪存存储、软件定义存储和混合云存储将成为行业主要发展方向。其中，全闪存存储将在高性能应用场景中获得更广泛应用；软件定义存储将为企业提供更灵活、更经济的存储资源管理方式；而混合云存储则将帮助企业实现从本地到云端的无缝数据管理。</p>

      <p>美步科技研究院院长表示："通过发布这份行业报告，我们希望能够帮助企业更好地了解存储技术的发展趋势，制定更合理的数据管理策略，为数字化转型提供有力支持。"</p>

      <p>该报告已在美步科技官网发布，企业用户可免费下载阅读。</p>
    `,
    relatedNews: ['ai-storage-solution', 'partnership-cloud', 'industry-trend-analysis']
  },
  'tech-summit-2023': {
    content: `
      <p>美步科技今日宣布将于下月举办2023技术峰会，邀请行业专家和合作伙伴共同探讨数据存储和管理的未来发展。</p>

      <p>本次峰会以"数据驱动未来"为主题，将聚焦数据存储、数据管理和数据价值挖掘等热点话题。峰会将邀请国内外知名专家学者和企业代表发表主题演讲，分享最新技术趋势和实践经验。同时，还将举办多场技术研讨会和产品展示活动，为参会者提供深入交流的平台。</p>

      <p>美步科技市场总监表示："举办技术峰会是我们与行业伙伴和用户交流的重要方式。通过这一平台，我们希望能够促进行业内的技术交流和合作，共同推动数据存储和管理技术的创新发展。"</p>

      <p>据了解，本次峰会将重点展示美步科技最新的AI驱动智能存储解决方案和混合云存储管理平台，以及面向不同行业的定制化存储解决方案。</p>

      <p>峰会将于下月15日在北京举行，预计将有来自全国各地的500多名行业专家和企业代表参加。感兴趣的人士可通过美步科技官网报名参加。</p>
    `,
    relatedNews: ['ai-storage-solution', 'industry-report-2023', 'innovation-award']
  },
  'innovation-award': {
    content: `
      <p>美步科技今日宣布，凭借创新的企业级存储解决方案，荣获2023年度存储创新奖，彰显了公司在技术创新方面的领先地位。</p>

      <p>这一奖项由权威行业机构评选，旨在表彰在存储技术领域做出突出贡献的企业和产品。美步科技的企业级存储解决方案凭借其创新的架构设计、卓越的性能表现和灵活的扩展能力，从众多参评产品中脱颖而出，获得评委会的一致认可。</p>

      <p>美步科技研发总监在获奖感言中表示："这一奖项是对我们技术创新能力的肯定，也是对我们研发团队辛勤工作的认可。我们将继续坚持创新，为用户提供更优质、更高效的存储解决方案。"</p>

      <p>评委会在颁奖词中指出，美步科技的企业级存储解决方案在性能优化、数据保护和用户体验等方面都有突出表现，特别是其融合AI技术的智能管理功能，为企业数据管理带来了革命性的变化。</p>

      <p>业内分析师认为，此次获奖将进一步提升美步科技在企业存储市场的品牌影响力，有助于公司拓展更广阔的市场空间。</p>
    `,
    relatedNews: ['ai-storage-solution', 'security-solution', 'market-share-growth']
  },
  'security-solution': {
    content: `
      <p>美步科技今日推出新一代企业级安全存储解决方案，采用先进的加密技术和访问控制，为企业数据提供全方位保护。</p>

      <p>这一解决方案集成了硬件加密、数据传输加密和访问控制等多重安全机制，可有效防止数据泄露和未授权访问。其中，硬件加密采用AES-256标准，确保即使在设备丢失的情况下，数据也不会被非法获取；数据传输加密则采用TLS 1.3协议，保障数据在网络传输过程中的安全；而基于角色的访问控制系统，则可以精确管理不同用户对不同数据的访问权限。</p>

      <p>美步科技安全专家表示："随着数据安全威胁的日益增加，企业对数据保护的需求也越来越迫切。我们的企业级安全存储解决方案正是针对这一需求而设计，旨在为企业数据提供最高级别的安全保障。"</p>

      <p>除了安全功能外，该解决方案还提供了全面的审计和合规报告功能，帮助企业满足各种数据保护法规的要求，如GDPR和CCPA等。</p>

      <p>该解决方案已在金融、医疗等对数据安全要求较高的行业进行了试点应用，获得了用户的高度评价。</p>
    `,
    relatedNews: ['new-nas-2023', 'ai-storage-solution', 'industry-report-2023']
  },
  'market-share-growth': {
    content: `
      <p>最新市场研究报告显示，美步科技在企业存储市场的份额持续增长，成为行业增长最快的公司之一。</p>

      <p>根据权威市场研究机构发布的最新数据，美步科技在2023年第二季度的企业存储市场份额同比增长了35%，远高于行业平均水平。这一增长主要得益于公司在全闪存存储和混合云存储领域的创新产品，以及在中小企业市场的成功拓展。</p>

      <p>美步科技CEO在接受媒体采访时表示："这一成绩是对我们产品和服务的认可。我们将继续专注于技术创新和客户需求，提供更优质的存储解决方案，进一步扩大市场份额。"</p>

      <p>市场分析师指出，美步科技在产品性能、可靠性和成本效益方面的优势，使其在激烈的市场竞争中脱颖而出。特别是其AI驱动的智能存储解决方案，为企业客户带来了显著的效率提升和成本节约，获得了市场的广泛认可。</p>

      <p>报告还预测，随着数字化转型的深入推进和数据量的持续增长，企业对高效、可靠的存储解决方案的需求将进一步增加，美步科技有望在未来几年继续保持快速增长。</p>
    `,
    relatedNews: ['global-expansion', 'innovation-award', 'industry-report-2023']
  },
  'industry-trend-analysis': {
    content: `
      <p>美步科技今日发布行业趋势分析报告，深入探讨了数据存储从本地到云端的演变，以及混合存储模式在企业中的应用。</p>

      <p>报告指出，随着云计算技术的成熟和普及，越来越多的企业开始将数据从本地存储迁移到云端。然而，由于安全、合规和性能等方面的考虑，大多数企业并未完全放弃本地存储，而是采用混合存储模式，即将部分数据存储在本地，部分数据存储在云端。</p>

      <p>报告分析了混合存储模式的优势和挑战。在优势方面，混合存储可以兼顾本地存储的安全性和性能，以及云存储的灵活性和可扩展性；在挑战方面，如何实现本地和云端数据的统一管理和无缝协作，成为企业面临的主要问题。</p>

      <p>美步科技研究员表示："混合存储将是未来企业数据管理的主流模式。我们的研究旨在帮助企业更好地理解和应对这一趋势，制定更合理的数据存储和管理策略。"</p>

      <p>报告还提出了一系列最佳实践建议，帮助企业有效实施混合存储策略，包括数据分类、存储位置选择、数据同步和备份等方面的具体措施。</p>
    `,
    relatedNews: ['partnership-cloud', 'industry-report-2023', 'ai-storage-solution']
  }
};

export default function NewsDetailPage() {
  const params = useParams();
  const newsId = params.id as string;

  const [news, setNews] = useState<any>(null);
  const [relatedNews, setRelatedNews] = useState<any[]>([]);

  useEffect(() => {
    // 查找当前新闻
    const currentNews = newsList.find(item => item.id === newsId);
    if (currentNews) {
      setNews(currentNews);

      // 查找相关新闻
      const details = newsDetails[newsId as keyof typeof newsDetails];
      if (details && details.relatedNews) {
        const related = newsList.filter(item => details.relatedNews.includes(item.id));
        setRelatedNews(related);
      } else {
        // 如果没有指定相关新闻，则随机选择3个同类别的新闻
        const sameCategory = newsList.filter(item => item.id !== newsId && item.category === currentNews.category);
        setRelatedNews(sameCategory.slice(0, 3));
      }
    }
  }, [newsId]);

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 面包屑导航 */}
      <div className="mb-8">
        <div className="flex items-center text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            首页
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/about" className="text-blue-600 hover:underline">
            关于我们
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/about/news" className="text-blue-600 hover:underline">
            新闻中心
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">{news.title}</span>
        </div>
      </div>

      {/* 新闻详情 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="relative h-64 md:h-96">
          {news.imageUrl ? (
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-medium text-lg">{news.title}</span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 text-xs rounded-full bg-blue-600 text-white">
              {newsCategories.find((c) => c.id === news.category)?.name || news.category}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <div className="text-sm text-gray-500 mb-2">{news.date}</div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{news.title}</h1>

          <div className="prose max-w-none">
            {newsDetails[newsId as keyof typeof newsDetails] ? (
              <div dangerouslySetInnerHTML={{ __html: newsDetails[newsId as keyof typeof newsDetails].content }} />
            ) : (
              <p className="text-gray-600 mb-4">{news.summary}</p>
            )}
          </div>
        </div>
      </div>

      {/* 相关新闻 */}
      {relatedNews.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">相关新闻</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNews.map((relatedItem) => (
              <div key={relatedItem.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48">
                  {relatedItem.imageUrl ? (
                    <Image
                      src={relatedItem.imageUrl}
                      alt={relatedItem.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium text-lg">{relatedItem.title}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-600 text-white">
                      {newsCategories.find((c) => c.id === relatedItem.category)?.name || relatedItem.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{relatedItem.date}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{relatedItem.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedItem.summary}</p>
                  <Link
                    href={`/about/news/${relatedItem.id}`}
                    className="text-blue-600 font-medium flex items-center"
                  >
                    <span>阅读全文</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 返回按钮 */}
      <div className="flex justify-center">
        <Link
          href="/about/news"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回新闻列表
        </Link>
      </div>
    </div>
  );
}
