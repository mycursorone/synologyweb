'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 获取产品数据
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // 构建查询参数
        const params = new URLSearchParams();
        
        if (searchTerm) {
          params.append('search', searchTerm);
        }
        
        params.append('page', currentPage.toString());
        params.append('limit', '10');
        
        const response = await fetch(`/api/products?${params.toString()}`);

        if (!response.ok) {
          throw new Error('获取产品数据失败');
        }

        const data = await response.json();
        setProducts(data.products);
        setTotalPages(data.pagination.totalPages);
      } catch (err) {
        setError(err instanceof Error ? err.message : '未知错误');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchTerm, currentPage]);

  // 处理搜索
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // 重置页码
  };

  // 处理删除产品
  const handleDeleteProduct = async (id: string) => {
    if (!confirm('确定要删除这个产品吗？此操作不可撤销。')) {
      return;
    }

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('删除产品失败');
      }

      // 从列表中移除已删除的产品
      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : '未知错误');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">产品管理</h1>
        <Link 
          href="/admin/products/new" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          添加新产品
        </Link>
      </div>

      {/* 搜索栏 */}
      <div className="mb-6">
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="搜索产品..."
            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
          >
            搜索
          </button>
        </form>
      </div>

      {/* 产品列表 */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-900 mb-2">没有找到产品</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm ? '尝试使用不同的搜索词' : '点击"添加新产品"按钮创建第一个产品'}
          </p>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">产品名称</th>
                  <th className="py-3 px-4 text-left">描述</th>
                  <th className="py-3 px-4 text-center">状态</th>
                  <th className="py-3 px-4 text-center">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        {product.cover_image && (
                          <img
                            src={product.cover_image}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded mr-3"
                          />
                        )}
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-gray-600 truncate max-w-xs">
                        {product.description || '无描述'}
                      </p>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          product.is_active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {product.is_active ? '已激活' : '未激活'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center space-x-2">
                        <Link
                          href={`/admin/products/${product.id}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          编辑
                        </Link>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          删除
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 分页 */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <nav className="flex items-center">
                <button
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded-l border ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  上一页
                </button>
                <div className="px-4 py-1 border-t border-b bg-white">
                  第 {currentPage} 页，共 {totalPages} 页
                </div>
                <button
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded-r border ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  下一页
                </button>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  );
}
