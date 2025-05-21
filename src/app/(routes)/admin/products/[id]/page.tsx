'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Product, TagCategory, Tag } from '@/types/product';

interface ProductFormData {
  name: string;
  description: string;
  cover_image: string;
  spec_pdf_url: string;
  is_active: boolean;
  selectedTags: string[];
}

export default function EditProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const isNewProduct = params.id === 'new';
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tagCategories, setTagCategories] = useState<TagCategory[]>([]);
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    cover_image: '',
    spec_pdf_url: '',
    is_active: true,
    selectedTags: [],
  });

  // 获取产品数据和标签分类
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 获取标签分类
        const [commonResponse, advancedResponse] = await Promise.all([
          fetch('/api/tags?type=常用筛选'),
          fetch('/api/tags?type=高级筛选')
        ]);
        
        if (!commonResponse.ok || !advancedResponse.ok) {
          throw new Error('获取标签数据失败');
        }
        
        const commonData = await commonResponse.json();
        const advancedData = await advancedResponse.json();
        
        // 合并标签分类
        const allCategories = [
          ...commonData.categories,
          ...advancedData.categories
        ];
        
        setTagCategories(allCategories);
        
        // 如果不是新产品，获取产品数据
        if (!isNewProduct) {
          const productResponse = await fetch(`/api/products?id=${params.id}`);
          
          if (!productResponse.ok) {
            throw new Error('获取产品数据失败');
          }
          
          const productData = await productResponse.json();
          
          // 提取已选标签ID
          const selectedTagIds = productData.tags ? 
            productData.tags.map((tag: any) => tag.id) : 
            [];
          
          setFormData({
            name: productData.name || '',
            description: productData.description || '',
            cover_image: productData.cover_image || '',
            spec_pdf_url: productData.spec_pdf_url || '',
            is_active: productData.is_active !== false,
            selectedTags: selectedTagIds,
          });
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '未知错误');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id, isNewProduct]);

  // 处理表单字段变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // 处理标签选择
  const handleTagChange = (tagId: string) => {
    setFormData(prev => {
      const isSelected = prev.selectedTags.includes(tagId);
      
      return {
        ...prev,
        selectedTags: isSelected
          ? prev.selectedTags.filter(id => id !== tagId)
          : [...prev.selectedTags, tagId]
      };
    });
  };

  // 保存产品
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      
      const productData = {
        ...formData,
        tags: formData.selectedTags
      };
      
      const response = await fetch(
        isNewProduct ? '/api/products' : `/api/products/${params.id}`,
        {
          method: isNewProduct ? 'POST' : 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        }
      );
      
      if (!response.ok) {
        throw new Error(isNewProduct ? '创建产品失败' : '更新产品失败');
      }
      
      // 保存成功后返回产品列表页
      router.push('/admin/products');
    } catch (err) {
      setError(err instanceof Error ? err.message : '未知错误');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        {isNewProduct ? '添加新产品' : `编辑产品: ${formData.name}`}
      </h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        {/* 基本信息 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b">基本信息</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                产品名称 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="cover_image">
                封面图片URL
              </label>
              <input
                type="text"
                id="cover_image"
                name="cover_image"
                value={formData.cover_image}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2" htmlFor="description">
                产品描述
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="spec_pdf_url">
                规格PDF URL
              </label>
              <input
                type="text"
                id="spec_pdf_url"
                name="spec_pdf_url"
                value={formData.spec_pdf_url}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_active"
                name="is_active"
                checked={formData.is_active}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="is_active" className="ml-2 text-gray-700">
                产品激活状态
              </label>
            </div>
          </div>
        </div>

        {/* 标签选择 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b">产品标签</h2>
          
          {tagCategories.length === 0 ? (
            <p className="text-gray-500">没有可用的标签分类</p>
          ) : (
            <div className="space-y-6">
              {tagCategories.map(category => (
                <div key={category.id}>
                  <h3 className="font-medium text-gray-800 mb-2">{category.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.tags && category.tags.map(tag => (
                      <div key={tag.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`tag-${tag.id}`}
                          checked={formData.selectedTags.includes(tag.id)}
                          onChange={() => handleTagChange(tag.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`tag-${tag.id}`} className="ml-2 text-gray-700 text-sm">
                          {tag.product_spec ? 
                            (tag.product_size ? `${tag.product_spec}-${tag.product_size}` : tag.product_spec) : 
                            (tag.product_size || '未命名')}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 提交按钮 */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.push('/admin/products')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            取消
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:opacity-50"
          >
            {saving ? '保存中...' : (isNewProduct ? '创建产品' : '保存修改')}
          </button>
        </div>
      </form>
    </div>
  );
}
