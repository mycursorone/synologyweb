'use client';

import { useState, useEffect } from 'react';
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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    categories: [],
    searchTerm: '',
  });

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
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '未知错误');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
  const allCategories = [...new Set(products.map(product => product.category))];



  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">所有产品</h1>
        <p className="text-gray-600">
          浏览我们的全系列产品，找到适合您需求的解决方案。
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
