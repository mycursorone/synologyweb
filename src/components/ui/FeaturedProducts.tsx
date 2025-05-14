'use client';

import Link from 'next/link';
import ProductCard from './ProductCard';

// 产品数据类型
interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  features: string[];
}

// 示例产品数据
const productData: Product[] = [
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
];

const FeaturedProducts = () => {
  // 未来可能会用于悬停效果
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">特色产品</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            探索我们的明星产品，为您的家庭和企业提供创新的存储、网络和安全解决方案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              category={product.category}

              features={product.features}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            查看所有产品
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
