'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Search, Save, Tag, Check, X } from 'lucide-react';
import { toast } from 'react-hot-toast';

// 产品类型
interface Product {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
}

// 标签类型
interface Tag {
  id: string;
  product_spec: string;
  spec_size: string;
  product_size: string;
  sort_type: number;
  sort_order: number;
  created_id: string;
  category_name?: string;
}

// 产品标签关联类型
interface ProductTag {
  product_id: string;
  tag_id: string;
  tag_spec: string;
  tag_size: string;
}

export default function ProductTagsPage() {
  const router = useRouter();

  // 状态
  const [products, setProducts] = useState<Product[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagCategories, setTagCategories] = useState<any[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<Record<string, boolean>>({});
  const [tagData, setTagData] = useState<Record<string, { product_spec: string, product_size: string }>>({});
  const [productSearchTerm, setProductSearchTerm] = useState('');
  // 移除标签搜索状态
  const [loading, setLoading] = useState(false);
  const [savingLoading, setSavingLoading] = useState(false);

  // 初始加载产品列表和标签分类
  useEffect(() => {
    fetchProducts();
    fetchTagCategories();
  }, []);

  // 当选择产品时，加载标签和产品标签关联
  useEffect(() => {
    if (selectedProductId) {
      fetchTags();
      fetchProductTags(selectedProductId);
    } else {
      setSelectedTags({});
    }
  }, [selectedProductId]);

  // 获取产品列表
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error('获取产品列表失败');

      const data = await response.json();
      setProducts(data.products || []);

      // 如果有产品，默认选择第一个
      if (data.products && data.products.length > 0) {
        setSelectedProductId(data.products[0].id);
      }
    } catch (error) {
      console.error('获取产品列表失败:', error);
      toast.error('获取产品列表失败');
    } finally {
      setLoading(false);
    }
  };

  // 获取标签分类列表
  const fetchTagCategories = async () => {
    try {
      const response = await fetch('/api/tag-categories');
      if (!response.ok) throw new Error('获取标签分类列表失败');

      const data = await response.json();
      setTagCategories(data.categories || []);
    } catch (error) {
      console.error('获取标签分类列表失败:', error);
      toast.error('获取标签分类列表失败');
    }
  };

  // 获取标签列表
  const fetchTags = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/tags?mode=admin');
      if (!response.ok) throw new Error('获取标签列表失败');

      const data = await response.json();
      setTags(data.tags || []);

      // 构建标签数据映射
      const newTagData: Record<string, { product_spec: string, product_size: string }> = {};
      (data.tags || []).forEach((tag: Tag) => {
        newTagData[tag.id] = {
          product_spec: tag.product_spec,
          product_size: tag.product_size
        };
      });
      setTagData(newTagData);
    } catch (error) {
      console.error('获取标签列表失败:', error);
      toast.error('获取标签列表失败');
    } finally {
      setLoading(false);
    }
  };

  // 获取产品标签关联
  const fetchProductTags = async (productId: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/product-tags?productId=${productId}`);
      if (!response.ok) throw new Error('获取产品标签关联失败');

      const data = await response.json();

      // 重置选中状态
      const newSelectedTags: Record<string, boolean> = {};
      (data.productTags || []).forEach((pt: ProductTag) => {
        newSelectedTags[pt.tag_id] = true;
      });
      setSelectedTags(newSelectedTags);
    } catch (error) {
      console.error('获取产品标签关联失败:', error);
      toast.error('获取产品标签关联失败');
    } finally {
      setLoading(false);
    }
  };

  // 保存产品标签关联
  const saveProductTags = async () => {
    if (!selectedProductId) {
      toast.error('请先选择一个产品');
      return;
    }

    try {
      setSavingLoading(true);

      // 获取选中的标签ID列表
      const tagIds = Object.entries(selectedTags)
        .filter(([_, isSelected]) => isSelected)
        .map(([tagId]) => tagId);

      const response = await fetch('/api/product-tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: selectedProductId,
          tagIds,
          tagData
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '保存产品标签关联失败');
      }

      toast.success('产品标签关联保存成功');
    } catch (error) {
      console.error('保存产品标签关联失败:', error);
      toast.error(error instanceof Error ? error.message : '保存产品标签关联失败');
    } finally {
      setSavingLoading(false);
    }
  };

  // 切换标签选择状态
  const toggleTagSelection = (tagId: string) => {
    setSelectedTags(prev => ({
      ...prev,
      [tagId]: !prev[tagId]
    }));
  };

  // 返回分类列表
  const goBackToCategories = () => {
    router.push('/admin/categories');
  };

  // 过滤产品
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(productSearchTerm.toLowerCase())
  );

  // 使用所有标签，不进行过滤
  const filteredTags = tags;

  // 按created_id分组并按sort_type和sort_order排序
  const tagsByCategory = useMemo(() => {
    const grouped: Record<string, { name: string, tags: Tag[] }> = {};

    // 创建分类映射
    const categoryMap: Record<string, string> = {};
    tagCategories.forEach(category => {
      categoryMap[category.id] = category.name;
    });

    // 按created_id分组
    filteredTags.forEach(tag => {
      const categoryId = tag.created_id || 'uncategorized';
      const categoryName = categoryMap[categoryId] || '未分类';

      if (!grouped[categoryId]) {
        grouped[categoryId] = { name: categoryName, tags: [] };
      }

      grouped[categoryId].tags.push(tag);
    });

    // 对每个分类中的标签按sort_type和sort_order排序
    Object.keys(grouped).forEach(categoryId => {
      grouped[categoryId].tags.sort((a, b) => {
        // 先按sort_type排序
        if (a.sort_type !== b.sort_type) {
          return a.sort_type - b.sort_type;
        }
        // 再按sort_order排序
        return a.sort_order - b.sort_order;
      });
    });

    return grouped;
  }, [filteredTags, tagCategories]);

  // 获取当前选中的产品
  const selectedProduct = products.find(p => p.id === selectedProductId);

  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <div className="flex items-center mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={goBackToCategories}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回分类列表
          </Button>
          <h1 className="text-2xl font-bold">产品标签关联</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* 左侧产品列表 */}
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>产品列表</CardTitle>
                <CardDescription>选择产品管理其标签</CardDescription>
                <div className="relative mt-2">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="搜索产品..."
                    value={productSearchTerm}
                    onChange={(e) => setProductSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                  <div className="space-y-1">
                    {loading && filteredProducts.length === 0 ? (
                      <div className="text-center py-4 text-gray-500">加载中...</div>
                    ) : filteredProducts.length === 0 ? (
                      <div className="text-center py-4 text-gray-500">
                        {productSearchTerm ? '没有找到匹配的产品' : '暂无产品数据'}
                      </div>
                    ) : (
                      filteredProducts.map((product) => (
                        <Button
                          key={product.id}
                          variant={selectedProductId === product.id ? "default" : "ghost"}
                          className={`w-full justify-start transition-all duration-200 mb-1 ${
                            selectedProductId === product.id
                              ? 'bg-primary text-white border-l-4 border-accent'
                              : 'hover:bg-selected hover:text-primary hover:border-l-4 hover:border-hover hover:pl-3'
                          }`}
                          onClick={() => setSelectedProductId(product.id)}
                        >
                          <span className="truncate">{product.name}</span>
                        </Button>
                      ))
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧标签管理 */}
          <div className="md:col-span-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>
                      {selectedProduct ? `${selectedProduct.name} - 标签管理` : '请选择产品'}
                    </CardTitle>
                    <CardDescription>
                      点击标签进行选择或取消选择
                    </CardDescription>
                  </div>
                  <Button
                    onClick={saveProductTags}
                    disabled={!selectedProductId || savingLoading}
                    className="btn-primary"
                  >
                    {savingLoading ? '保存中...' : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        保存更改
                      </>
                    )}
                  </Button>
                </div>
                {/* 移除搜索标签框 */}
              </CardHeader>
              <CardContent>
                {!selectedProductId ? (
                  <div className="text-center py-8 text-gray-500">
                    请先从左侧选择一个产品
                  </div>
                ) : loading ? (
                  <div className="text-center py-8 text-gray-500">
                    加载中...
                  </div>
                ) : filteredTags.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    暂无标签数据
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(tagsByCategory).map(([categoryId, category]) => (
                      <div key={categoryId} className="mb-2">
                        <div className="grid grid-cols-6 gap-1">
                          {(() => {
                            // 创建标签布局
                            const rows = [];
                            const tagsPerRow = 5; // 每行显示5个标签（除第一列外）

                            // 创建标签元素
                            const tagElements = category.tags.map((tag) => (
                              <div
                                key={tag.id}
                                className={`
                                  border rounded-md p-1.5 cursor-pointer transition-all duration-200 group text-sm
                                  ${selectedTags[tag.id]
                                    ? 'bg-selected border-primary active'
                                    : 'hover:bg-selected hover:border-hover hover:transform hover:scale-105 hover:shadow-md border-gray-200'}
                                `}
                                onClick={() => toggleTagSelection(tag.id)}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <Tag className={`h-4 w-4 mr-2 ${selectedTags[tag.id] ? 'text-accent' : 'text-gray-400'}`} />
                                    <span className="text-sm font-medium truncate">
                                      {tag.product_spec}
                                      {tag.spec_size && <span className="text-gray-500 mx-1">{tag.spec_size}</span>}
                                      {tag.product_size}
                                    </span>
                                  </div>
                                  {selectedTags[tag.id] ? (
                                    <Check className="h-4 w-4 text-primary" />
                                  ) : (
                                    <X className="h-4 w-4 text-gray-300 group-hover:text-hover" />
                                  )}
                                </div>
                              </div>
                            ));

                            // 第一行：第一列为分类标题
                            const firstRow = [];
                            firstRow.push(
                              <div key="category-title" className="border rounded-md p-1.5 bg-primary text-white font-medium flex items-center justify-center pointer-events-none shadow-sm border-l-4 border-l-accent">
                                {category.name}
                              </div>
                            );

                            // 添加第一行的标签（最多5个）
                            for (let i = 0; i < tagsPerRow && i < tagElements.length; i++) {
                              firstRow.push(tagElements[i]);
                            }
                            rows.push(firstRow);

                            // 处理剩余的标签
                            for (let i = tagsPerRow; i < tagElements.length; i += tagsPerRow) {
                              const row = [];

                              // 第一列留空
                              row.push(<div key={`empty-${i}`} className="invisible"></div>);

                              // 添加该行的标签（最多5个）
                              for (let j = 0; j < tagsPerRow && i + j < tagElements.length; j++) {
                                row.push(tagElements[i + j]);
                              }

                              rows.push(row);
                            }

                            // 渲染所有行
                            return rows.map((row, rowIndex) => (
                              <React.Fragment key={`row-${rowIndex}`}>
                                {row}
                              </React.Fragment>
                            ));
                          })()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <div className="text-sm text-gray-500">
                  已选择: {Object.values(selectedTags).filter(Boolean).length} 个标签
                </div>
                <div className="text-sm text-gray-500">
                  总计: {filteredTags.length} 个标签
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
