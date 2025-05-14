'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';

// 产品数据类型
interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  features: string[];
}

// 类别映射
const categoryMapping: Record<string, string> = {
  'nas': 'NAS 存储',
  'surveillance': '监控方案',
  'router': '路由器',
};

export default function ProductPage({
  params
}: {
  params: { category: string; product: string } | Promise<{ category: string; product: string }>
}) {
  // 使用 React.use() 解包 params
  const resolvedParams = use(params);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const { category: categorySlug, product: productId } = resolvedParams;
  const categoryName = categoryMapping[categorySlug] || categorySlug;

  // 获取产品详情
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');

        if (!response.ok) {
          throw new Error('获取产品数据失败');
        }

        const data = await response.json();
        const productDetails = data.find((p: Product) => p.id === productId);

        if (!productDetails) {
          throw new Error('未找到产品');
        }

        setProduct(productDetails);
      } catch (err) {
        setError(err instanceof Error ? err.message : '未知错误');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error || '未找到产品'}</p>
        </div>
        <div className="mt-4">
          <Link href="/products" className="text-blue-600 hover:underline">
            返回产品列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 面包屑导航 */}
      <div className="mb-8">
        <div className="flex items-center text-sm">
          <Link href="/products" className="text-blue-600 hover:underline">
            所有产品
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href={`/products/${categorySlug}`} className="text-blue-600 hover:underline">
            {categoryName}
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">{product.title}</span>
        </div>
      </div>

      {/* 产品概览 */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* 产品图片 */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-96 relative">
            <Image
              src={product.imageUrl || `/images/products/${product.id}.jpg`}
              alt={product.title}
              fill
              style={{ objectFit: 'contain' }}
              className="p-4"
            />
          </div>
        </div>

        {/* 产品信息 */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-sm text-blue-600 mb-2">{product.category}</div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>



            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">主要特性</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                了解更多
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors">
                查看规格
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 产品详情选项卡 */}
      <div className="bg-white rounded-lg shadow-md mb-12">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'overview'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              产品概览
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'specs'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              技术规格
            </button>
            <button
              onClick={() => setActiveTab('downloads')}
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'downloads'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              下载
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">产品概览</h2>
              <p className="text-gray-700 mb-4">
                {product.description}
              </p>
              <p className="text-gray-700 mb-4">
                这款产品专为满足您的需求而设计，提供卓越的性能和可靠性。无论是家庭使用还是企业应用，它都能提供出色的体验。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">高性能</h3>
                  <p className="text-gray-700">采用先进技术，提供卓越的性能表现。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">易于使用</h3>
                  <p className="text-gray-700">直观的界面设计，让您轻松上手。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">可靠耐用</h3>
                  <p className="text-gray-700">高品质材料和严格的质量控制，确保产品长期稳定运行。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">全面支持</h3>
                  <p className="text-gray-700">提供全面的技术支持和服务，解决您的问题。</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">技术规格</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50 w-1/3">型号</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{product.title}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">类别</td>
                      <td className="py-3 px-4 text-sm text-gray-700">{product.category}</td>
                    </tr>
                    {product.features.map((feature, index) => (
                      <tr key={index}>
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 bg-gray-50">特性 {index + 1}</td>
                        <td className="py-3 px-4 text-sm text-gray-700">{feature}</td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'downloads' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">下载</h2>
              <p className="text-gray-700 mb-6">
                下载产品相关的软件、手册和其他资源。
              </p>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">用户手册</h3>
                    <p className="text-sm text-gray-600">PDF, 5.2MB</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                    下载
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">快速安装指南</h3>
                    <p className="text-sm text-gray-600">PDF, 2.1MB</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                    下载
                  </button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">驱动程序</h3>
                    <p className="text-sm text-gray-600">ZIP, 15.8MB</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                    下载
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 相关产品 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">相关产品</h2>
        <p className="text-gray-600 mb-8">
          您可能还对这些产品感兴趣
        </p>
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-700">相关产品功能正在开发中...</p>
        </div>
      </div>
    </div>
  );
}
