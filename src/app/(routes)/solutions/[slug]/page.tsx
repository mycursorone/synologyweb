'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ui/ProductCard';

// 解决方案数据类型
interface Solution {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  industry: string;
  benefits: string[];
  features: string[];
  caseStudies: {
    title: string;
    description: string;
  }[];
  relatedProducts: string[];
}

// 产品数据类型
interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  features: string[];
}

export default function SolutionDetailPage({ 
  params 
}: { 
  params: { slug: string } | Promise<{ slug: string }> 
}) {
  // 使用 React.use() 解包 params
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const [solution, setSolution] = useState<Solution | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 获取解决方案详情
  useEffect(() => {
    const fetchSolutionDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/solutions?slug=${slug}`);
        
        if (!response.ok) {
          throw new Error('获取解决方案数据失败');
        }
        
        const data = await response.json();
        setSolution(data);
        
        // 获取相关产品
        if (data.relatedProducts && data.relatedProducts.length > 0) {
          const productsResponse = await fetch('/api/products');
          
          if (productsResponse.ok) {
            const productsData = await productsResponse.json();
            const filtered = productsData.filter((product: Product) => 
              data.relatedProducts.includes(product.id)
            );
            setRelatedProducts(filtered);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '未知错误');
      } finally {
        setLoading(false);
      }
    };

    fetchSolutionDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !solution) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error || '未找到解决方案'}</p>
        </div>
        <div className="mt-4">
          <Link href="/solutions" className="text-blue-600 hover:underline">
            返回解决方案列表
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
          <Link href="/solutions" className="text-blue-600 hover:underline">
            解决方案
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">{solution.title}</span>
        </div>
      </div>

      {/* 解决方案头部 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="relative h-64 md:h-96 w-full">
          {solution.imageUrl ? (
            <Image
              src={solution.imageUrl}
              alt={solution.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          ) : (
            <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-medium text-2xl">{solution.title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 md:p-8 text-white">
              <div className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded mb-4">
                {solution.industry}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{solution.title}</h1>
              <p className="text-lg md:text-xl max-w-3xl">{solution.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 详细描述 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">解决方案概述</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="prose max-w-none">
            {solution.fullDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 主要优势 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">主要优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solution.benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex">
              <div className="mr-4 flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 主要特性 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">主要特性</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solution.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 案例研究 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">客户案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solution.caseStudies.map((caseStudy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
              <p className="text-gray-700">{caseStudy.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 相关产品 */}
      {relatedProducts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">相关产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
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
        </div>
      )}

      {/* 咨询部分 */}
      <div className="bg-blue-50 rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">需要更多信息？</h2>
        <p className="text-gray-700 mb-6">
          我们的专业团队随时为您提供个性化的解决方案咨询，帮助您选择最适合的产品和服务。
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
          联系我们
        </button>
      </div>
    </div>
  );
}
