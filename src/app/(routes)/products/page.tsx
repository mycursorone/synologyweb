'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import ProductFilter from '@/components/ui/ProductFilter';
import { FilterCategory, FilterOption, Product } from '@/types/product';

// 筛选条件类型
interface FilterOptions {
  categoryIds: string[];
  tagIds: string[];
  searchTerm: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterCategories, setFilterCategories] = useState<FilterCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterLoading, setFilterLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    categoryIds: [],
    tagIds: [],
    searchTerm: '',
  });
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 20,
    totalPages: 0
  });

  // 获取筛选分类和选项
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        setFilterLoading(true);
        // 获取常用筛选
        const commonResponse = await fetch('/api/tags?type=常用筛选');

        if (!commonResponse.ok) {
          throw new Error('获取筛选选项失败');
        }

        const commonData = await commonResponse.json();

        // 获取高级筛选
        const advancedResponse = await fetch('/api/tags?type=高级筛选');

        if (!advancedResponse.ok) {
          throw new Error('获取筛选选项失败');
        }

        const advancedData = await advancedResponse.json();

        // 合并筛选选项
        const allCategories = [
          ...commonData.categories.map((category: any) => ({
            id: category.id,
            name: category.name,
            type: category.categories_type,
            sort: category.sort,
            options: category.tags.map((tag: any) => ({
              id: tag.id,
              name: tag.product_spec ?
                (tag.product_size ? `${tag.product_spec}-${tag.product_size}` : tag.product_spec) :
                (tag.product_size || '未命名'),
              checked: false
            }))
          })),
          ...advancedData.categories.map((category: any) => ({
            id: category.id,
            name: category.name,
            type: category.categories_type,
            sort: category.sort,
            options: category.tags.map((tag: any) => ({
              id: tag.id,
              name: tag.product_spec ?
                (tag.product_size ? `${tag.product_spec}-${tag.product_size}` : tag.product_spec) :
                (tag.product_size || '未命名'),
              checked: false
            }))
          }))
        ];

        // 按sort排序
        allCategories.sort((a, b) => (a.sort || 0) - (b.sort || 0));

        setFilterCategories(allCategories);
      } catch (err) {
        setError(err instanceof Error ? err.message : '未知错误');
      } finally {
        setFilterLoading(false);
      }
    };

    fetchFilterOptions();
  }, []);

  // 获取产品数据
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // 构建查询参数
        const params = new URLSearchParams();

        if (filterOptions.searchTerm) {
          params.append('search', filterOptions.searchTerm);
        }

        if (filterOptions.tagIds.length > 0) {
          // 由于API限制，我们只使用第一个标签ID进行筛选
          // 实际应用中可能需要修改API以支持多标签筛选
          params.append('tag_id', filterOptions.tagIds[0]);
        }

        if (filterOptions.categoryIds.length > 0) {
          // 同样，我们只使用第一个分类ID
          params.append('category_id', filterOptions.categoryIds[0]);
        }

        params.append('page', '1');
        params.append('limit', '20');

        const response = await fetch(`/api/products?${params.toString()}`);

        if (!response.ok) {
          throw new Error('获取产品数据失败');
        }

        const data = await response.json();
        setProducts(data.products);
        setPagination(data.pagination);
      } catch (err) {
        setError(err instanceof Error ? err.message : '未知错误');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filterOptions]);

  // 处理筛选条件变化
  const handleFilterChange = (newFilterOptions: Partial<FilterOptions>) => {
    setFilterOptions(prev => ({
      ...prev,
      ...newFilterOptions
    }));
  };

  // 加载更多产品
  const loadMoreProducts = async () => {
    if (loading || pagination.page >= pagination.totalPages) return;

    try {
      setLoading(true);

      // 构建查询参数
      const params = new URLSearchParams();

      if (filterOptions.searchTerm) {
        params.append('search', filterOptions.searchTerm);
      }

      if (filterOptions.tagIds.length > 0) {
        params.append('tag_id', filterOptions.tagIds[0]);
      }

      if (filterOptions.categoryIds.length > 0) {
        params.append('category_id', filterOptions.categoryIds[0]);
      }

      params.append('page', (pagination.page + 1).toString());
      params.append('limit', pagination.limit.toString());

      const response = await fetch(`/api/products?${params.toString()}`);

      if (!response.ok) {
        throw new Error('获取更多产品数据失败');
      }

      const data = await response.json();
      setProducts(prev => [...prev, ...data.products]);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : '未知错误');
    } finally {
      setLoading(false);
    }
  };

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
            filterCategories={filterCategories}
            selectedFilters={filterOptions}
            onFilterChange={handleFilterChange}
            isLoading={filterLoading}
          />
        </div>

        {/* 产品列表 */}
        <div className="lg:w-3/4">
          {loading && products.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p>{error}</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">没有找到匹配的产品</h3>
              <p className="text-gray-600 mb-4">请尝试调整筛选条件或搜索词。</p>
              <button
                onClick={() => setFilterOptions({
                  categoryIds: [],
                  tagIds: [],
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
                <p className="text-gray-600">显示 {products.length} / {pagination.total} 个产品</p>
                {/* 这里可以添加排序功能 */}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    description={product.description || ''}
                    imageUrl={product.cover_image || '/images/placeholder.jpg'}
                    category={product.tags && product.tags.length > 0 ?
                      product.tags[0].category_name : '未分类'}
                    features={[]}
                  />
                ))}
              </div>

              {/* 加载更多按钮 */}
              {pagination.page < pagination.totalPages && (
                <div className="mt-8 text-center">
                  <button
                    onClick={loadMoreProducts}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        加载中...
                      </span>
                    ) : (
                      '加载更多'
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
