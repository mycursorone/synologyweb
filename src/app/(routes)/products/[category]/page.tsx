'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import ProductFilter from '@/components/ui/ProductFilter';

// 产品数据类型
interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  features: string[];
}

// 筛选条件类型
interface FilterOptions {
  categories: string[];
  searchTerm: string;
}

// 类别映射
const categoryMapping: Record<string, string> = {
  'nas': 'NAS 存储',
  'surveillance': '监控方案',
  'router': '路由器',
};

// 类别描述
const categoryDescriptions: Record<string, string> = {
  'nas': '高性能、可靠的 NAS 存储设备，满足家庭和企业的各种需求。',
  'surveillance': '全方位保障您的安全，随时随地监控您的环境。',
  'router': '稳定、快速的网络连接，满足您的所有需求。',
};

export default function CategoryPage({ params }: { params: { category: string } | Promise<{ category: string }> }) {
  // 使用 React.use() 解包 params
  const resolvedParams = use(params);

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    categories: [],
    searchTerm: '',
  });

  const categorySlug = resolvedParams.category;
  const categoryName = categoryMapping[categorySlug] || categorySlug;
  const categoryDescription = categoryDescriptions[categorySlug] || '';

  // 获取所有产品
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');

        if (!response.ok) {
          throw new Error('获取产品数据失败');
        }

        const data = await response.json();

        // 根据类别筛选产品
        const categoryProducts = data.filter((product: Product) => {
          // 这里需要根据实际数据结构调整筛选逻辑
          if (categorySlug === 'nas') {
            return product.category.includes('NAS');
          } else if (categorySlug === 'surveillance') {
            return product.category.includes('监控');
          } else if (categorySlug === 'router') {
            return product.category.includes('路由器');
          }
          return false;
        });

        setProducts(categoryProducts);
        setFilteredProducts(categoryProducts);
      } catch (err) {
        setError(err instanceof Error ? err.message : '未知错误');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categorySlug]);

  // 当筛选条件变化时，过滤产品
  useEffect(() => {
    if (products.length === 0) return;

    let filtered = [...products];

    // 按类别筛选
    if (filterOptions.categories.length > 0) {
      filtered = filtered.filter(product =>
        filterOptions.categories.includes(product.category)
      );
    }



    // 按搜索词筛选
    if (filterOptions.searchTerm) {
      const searchLower = filterOptions.searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.features.some(feature => feature.toLowerCase().includes(searchLower))
      );
    }

    setFilteredProducts(filtered);
  }, [products, filterOptions]);

  // 处理筛选条件变化
  const handleFilterChange = (newFilterOptions: Partial<FilterOptions>) => {
    setFilterOptions(prev => ({
      ...prev,
      ...newFilterOptions
    }));
  };

  // 获取所有可用的类别
  const allCategories = products && products.length > 0 ? [...new Set(products.map(product => product.category))] : [];



  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <Link href="/products" className="text-blue-600 hover:underline mr-2">
            所有产品
          </Link>
          <span className="text-gray-500 mx-2">/</span>
          <h1 className="text-3xl font-bold">{categoryName}</h1>
        </div>
        <p className="text-gray-600">
          {categoryDescription}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* 筛选侧边栏 */}
        <div className="lg:w-1/4">
          <ProductFilter
            categories={allCategories}
            selectedFilters={filterOptions}
            onFilterChange={handleFilterChange}
          />
        </div>

        {/* 产品列表 */}
        <div className="lg:w-3/4">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p>{error}</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">没有找到匹配的产品</h3>
              <p className="text-gray-600 mb-4">请尝试调整筛选条件或搜索词。</p>
              <button
                onClick={() => setFilterOptions({
                  categories: [],
                  searchTerm: '',
                })}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                重置筛选条件
              </button>
            </div>
          ) : (
            <>
              <div className="mb-4 flex justify-between items-center">
                <p className="text-gray-600">显示 {filteredProducts.length} 个产品</p>
                {/* 这里可以添加排序功能 */}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
