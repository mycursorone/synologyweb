'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Trash2, Edit, Save, ArrowLeft, ChevronRight } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface TagCategory {
  id: string;
  name: string;
  sort: number;
  categories_type: string;
}

interface Tag {
  id: string;
  created_id: string;
  product_spec: string;
  product_size: string;
  sort_type: number;
  sort_order: number;
  spec_size: string;
  category_name?: string;
}

export default function TagsPage() {
  const router = useRouter();

  // 状态
  const [tags, setTags] = useState<Tag[]>([]);
  const [categories, setCategories] = useState<TagCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingTag, setEditingTag] = useState<Tag | null>(null);
  const [createdId, setCreatedId] = useState('');
  const [productSpec, setProductSpec] = useState('');
  const [productSize, setProductSize] = useState('');
  const [sortType, setSortType] = useState(0);
  const [sortOrder, setSortOrder] = useState(0);
  const [specSize, setSpecSize] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TagCategory | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);

  // 行内编辑状态
  const [inlineEditingId, setInlineEditingId] = useState<string | null>(null);
  const [inlineEditData, setInlineEditData] = useState<{
    created_id: string;
    product_spec: string;
    product_size: string;
    sort_type: number;
    sort_order: number;
    spec_size: string;
  }>({
    created_id: '',
    product_spec: '',
    product_size: '',
    sort_type: 0,
    sort_order: 0,
    spec_size: '',
  });

  // 初始化数据
  useEffect(() => {
    // 从URL中获取categoryId
    const url = new URL(window.location.href);
    const urlCategoryId = url.searchParams.get('categoryId');

    // 初始化加载
    const initializeData = async () => {
      await fetchCategories();

      // 如果URL中有categoryId，设置选中的分类并加载对应标签
      if (urlCategoryId) {
        setCategoryId(urlCategoryId);
      } else {
        // 否则加载所有标签
        await fetchTags(null);
      }
    };

    initializeData();
  }, []);

  // 当categoryId变化时获取标签
  useEffect(() => {
    if (categoryId !== null) {
      fetchTags(categoryId);
    }
  }, [categoryId]);

  // 获取所有标签分类
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/tag-categories');
      if (!response.ok) throw new Error('获取标签分类失败');

      const data = await response.json();
      setCategories(data.categories || []);

      // 如果URL中有categoryId，设置选中的分类
      if (categoryId) {
        const category = data.categories.find((c: TagCategory) => c.id === categoryId);
        if (category) {
          setSelectedCategory(category);
          setCreatedId(category.id); // 预设表单分类为当前选中分类
        }
      }
    } catch (error) {
      console.error('获取标签分类失败:', error);
      toast.error('获取标签分类失败');
    } finally {
      setLoading(false);
    }
  };

  // 获取标签列表，可以是特定分类的或全部
  const fetchTags = async (catId: string | null) => {
    try {
      setLoading(true);

      // 构建URL
      let url = '/api/tags?mode=admin';
      if (catId) {
        url += `&categoryId=${catId}`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error('获取标签失败');

      const data = await response.json();

      // 按sort_type和sort_order排序
      const sortedTags = [...(data.tags || [])].sort((a, b) => {
        if (a.sort_type !== b.sort_type) {
          return a.sort_type - b.sort_type;
        }
        return a.sort_order - b.sort_order;
      });

      setTags(sortedTags);
    } catch (error) {
      console.error('获取标签失败:', error);
      toast.error('获取标签失败');
    } finally {
      setLoading(false);
    }
  };

  // 保存标签
  const saveTag = async () => {
    try {
      setLoading(true);

      if (!createdId) {
        toast.error('请选择标签分类');
        return;
      }

      const tagData = {
        created_id: createdId,
        product_spec: productSpec,
        product_size: productSize,
        sort_type: sortType,
        sort_order: sortOrder,
        spec_size: specSize,
      };

      const url = editingTag
        ? `/api/tags?id=${editingTag.id}`
        : '/api/tags';

      const method = editingTag ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tagData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '保存标签失败');
      }

      const result = await response.json();

      // 更新标签列表
      if (editingTag) {
        setTags(tags.map(tag =>
          tag.id === editingTag.id ? result.tag : tag
        ));
      } else {
        setTags([...tags, result.tag]);
      }

      // 重置表单
      resetForm();
      toast.success(editingTag ? '标签更新成功' : '标签添加成功');
    } catch (error) {
      console.error('保存标签失败:', error);
      toast.error(error instanceof Error ? error.message : '保存标签失败');
    } finally {
      setLoading(false);
    }
  };

  // 删除标签
  const deleteTag = async (id: string) => {
    if (!confirm('确定要删除这个标签吗？')) return;

    try {
      setLoading(true);

      const response = await fetch(`/api/tags?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '删除标签失败');
      }

      setTags(tags.filter(tag => tag.id !== id));
      toast.success('标签删除成功');
    } catch (error) {
      console.error('删除标签失败:', error);
      toast.error(error instanceof Error ? error.message : '删除标签失败');
    } finally {
      setLoading(false);
    }
  };

  // 开始行内编辑
  const startInlineEdit = (tag: Tag) => {
    setInlineEditingId(tag.id);
    setInlineEditData({
      created_id: tag.created_id,
      product_spec: tag.product_spec || '',
      product_size: tag.product_size || '',
      sort_type: tag.sort_type || 0,
      sort_order: tag.sort_order || 0,
      spec_size: tag.spec_size || '',
    });
  };

  // 取消行内编辑
  const cancelInlineEdit = () => {
    setInlineEditingId(null);
  };

  // 保存行内编辑
  const saveInlineEdit = async () => {
    if (!inlineEditingId) return;

    try {
      setLoading(true);

      const response = await fetch(`/api/tags?id=${inlineEditingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inlineEditData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '保存标签失败');
      }

      const result = await response.json();

      // 更新标签列表
      setTags(tags.map(tag =>
        tag.id === inlineEditingId ? result.tag : tag
      ));

      // 重置行内编辑状态
      setInlineEditingId(null);
      toast.success('标签更新成功');
    } catch (error) {
      console.error('保存标签失败:', error);
      toast.error(error instanceof Error ? error.message : '保存标签失败');
    } finally {
      setLoading(false);
    }
  };

  // 编辑标签 (用于添加表单)
  const editTag = (tag: Tag) => {
    setEditingTag(tag);
    setCreatedId(tag.created_id);
    setProductSpec(tag.product_spec || '');
    setProductSize(tag.product_size || '');
    setSortType(tag.sort_type || 0);
    setSortOrder(tag.sort_order || 0);
    setSpecSize(tag.spec_size || '');
  };

  // 重置表单
  const resetForm = () => {
    // 清除编辑状态
    setEditingTag(null);

    // 重置表单字段
    setProductSpec('');
    setProductSize('');
    setSortType(0);
    setSortOrder(0);
    setSpecSize('');

    // 如果有选中的分类，预设表单分类为当前选中分类
    if (selectedCategory) {
      setCreatedId(selectedCategory.id);
    } else {
      // 否则清空分类选择
      setCreatedId('');
    }

    // 滚动到表单区域
    setTimeout(() => {
      const formElement = document.getElementById('tag-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // 返回分类列表
  const goBackToCategories = () => {
    router.push('/admin/categories/tag-categories');
  };

  // 筛选特定分类的标签
  const filterByCategory = (categoryId: string) => {
    // 更新URL
    router.push(`/admin/categories/tags?categoryId=${categoryId}`);

    // 更新状态
    setCategoryId(categoryId);

    // 设置选中的分类
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      setSelectedCategory(category);

      // 如果当前没有编辑中的标签，预设表单分类为当前选中分类
      if (!editingTag) {
        setCreatedId(category.id);
      }
    }
  };

  // 清除筛选，显示所有标签
  const clearFilter = () => {
    // 更新URL
    router.push('/admin/categories/tags');

    // 更新状态
    setSelectedCategory(null);
    setCategoryId(null);

    // 获取所有标签
    fetchTags(null);

    // 如果正在编辑标签，不重置表单的分类选择
    if (!editingTag) {
      setCreatedId('');
    }
  };

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
          <h1 className="text-2xl font-bold">标签管理</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* 左侧标签分类列表 */}
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>标签分类</CardTitle>
                <CardDescription>选择分类查看标签</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                  <div className="space-y-1">
                    <Button
                      variant={selectedCategory === null ? "default" : "ghost"}
                      className="w-full justify-start transition-all duration-200 hover:bg-gray-100 hover:shadow-sm"
                      onClick={clearFilter}
                    >
                      全部标签
                    </Button>
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory?.id === category.id ? "default" : "ghost"}
                        className="w-full justify-start transition-all duration-200 hover:bg-gray-100 hover:shadow-sm hover:pl-3"
                        onClick={() => filterByCategory(category.id)}
                      >
                        <span className="truncate">{category.name}</span>
                        {selectedCategory?.id === category.id && (
                          <ChevronRight className="ml-auto h-4 w-4" />
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧内容区域 */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 gap-6">
              {/* 标签列表 */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>
                      {selectedCategory ? `${selectedCategory.name} - 标签列表` : '全部标签'}
                    </CardTitle>
                    <CardDescription>
                      管理产品标签 (按排序类型和排序顺序排列)
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetForm}
                    className="ml-auto"
                  >
                    <PlusCircle className="h-4 w-4 mr-2" />
                    添加标签
                  </Button>
                </CardHeader>
                <CardContent>
                  {tags.length === 0 ? (
                    <div className="text-center py-4 text-gray-500">
                      {loading ? '加载中...' : '暂无标签数据，请添加'}
                    </div>
                  ) : (
                    <div className="rounded-md border">
                      <Table className="text-sm">
                        <TableHeader>
                          <TableRow className="bg-gray-50 hover:bg-gray-50">
                            <TableHead className="py-2">产品标签</TableHead>
                            <TableHead className="py-2">分类</TableHead>
                            <TableHead className="py-2 text-center">排序类型</TableHead>
                            <TableHead className="py-2 text-center">排序顺序</TableHead>
                            <TableHead className="py-2 text-right">操作</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tags.map((tag) => (
                            <TableRow
                              key={tag.id}
                              className={`hover:bg-gray-50 ${inlineEditingId === tag.id ? 'bg-blue-50' : ''}`}
                            >
                              {inlineEditingId === tag.id ? (
                                // 行内编辑模式
                                <>
                                  <TableCell className="py-1">
                                    <div className="space-y-1">
                                      <Input
                                        placeholder="规格"
                                        value={inlineEditData.product_spec}
                                        onChange={(e) => setInlineEditData({
                                          ...inlineEditData,
                                          product_spec: e.target.value
                                        })}
                                        className="h-7 text-xs"
                                      />
                                      <Input
                                        placeholder="尺寸"
                                        value={inlineEditData.product_size}
                                        onChange={(e) => setInlineEditData({
                                          ...inlineEditData,
                                          product_size: e.target.value
                                        })}
                                        className="h-7 text-xs"
                                      />
                                      <Input
                                        placeholder="规格尺寸"
                                        value={inlineEditData.spec_size}
                                        onChange={(e) => setInlineEditData({
                                          ...inlineEditData,
                                          spec_size: e.target.value
                                        })}
                                        className="h-7 text-xs"
                                      />
                                    </div>
                                  </TableCell>
                                  <TableCell className="py-1">
                                    <Select
                                      value={inlineEditData.created_id}
                                      onValueChange={(value) => setInlineEditData({
                                        ...inlineEditData,
                                        created_id: value
                                      })}
                                    >
                                      <SelectTrigger className="h-7 text-xs">
                                        <SelectValue placeholder="选择分类" />
                                      </SelectTrigger>
                                      <SelectContent
                                        side="top"
                                        position="popper"
                                        sideOffset={15}
                                        className="max-h-none z-[100] bg-white border border-gray-200 shadow-lg"
                                        avoidCollisions={true}
                                      >
                                        {categories.map((category) => (
                                          <SelectItem
                                            key={category.id}
                                            value={category.id}
                                            className="py-1 text-sm"
                                          >
                                            {category.name}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </TableCell>
                                  <TableCell className="py-1 text-center">
                                    <Input
                                      type="number"
                                      value={inlineEditData.sort_type}
                                      onChange={(e) => setInlineEditData({
                                        ...inlineEditData,
                                        sort_type: parseInt(e.target.value) || 0
                                      })}
                                      className="h-7 text-xs text-center"
                                    />
                                  </TableCell>
                                  <TableCell className="py-1 text-center">
                                    <Input
                                      type="number"
                                      value={inlineEditData.sort_order}
                                      onChange={(e) => setInlineEditData({
                                        ...inlineEditData,
                                        sort_order: parseInt(e.target.value) || 0
                                      })}
                                      className="h-7 text-xs text-center"
                                    />
                                  </TableCell>
                                  <TableCell className="py-1 text-right">
                                    <div className="flex justify-end space-x-1">
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={saveInlineEdit}
                                        disabled={loading}
                                        className="h-7 px-2"
                                      >
                                        <Save className="h-3.5 w-3.5 text-green-500" />
                                      </Button>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={cancelInlineEdit}
                                        className="h-7 px-2"
                                      >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                                          <line x1="18" y1="6" x2="6" y2="18"></line>
                                          <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                      </Button>
                                    </div>
                                  </TableCell>
                                </>
                              ) : (
                                // 正常显示模式
                                <>
                                  <TableCell className="py-1.5 font-medium">
                                    {tag.product_spec && <span>{tag.product_spec}</span>}
                                    {tag.spec_size && <span className="text-gray-500">{tag.spec_size}</span>}
                                    {tag.product_size && <span>{tag.product_size}</span>}
                                  </TableCell>
                                  <TableCell className="py-1.5">
                                    <Button
                                      variant="link"
                                      size="sm"
                                      onClick={() => filterByCategory(tag.created_id)}
                                      className="p-0 h-auto text-xs"
                                    >
                                      {tag.category_name}
                                    </Button>
                                  </TableCell>
                                  <TableCell className="py-1.5 text-center">{tag.sort_type}</TableCell>
                                  <TableCell className="py-1.5 text-center">{tag.sort_order}</TableCell>
                                  <TableCell className="py-1.5 text-right">
                                    <div className="flex justify-end space-x-1">
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => startInlineEdit(tag)}
                                        title="编辑"
                                        className="h-7 px-2"
                                      >
                                        <Edit className="h-3.5 w-3.5" />
                                      </Button>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => deleteTag(tag.id)}
                                        disabled={loading}
                                        title="删除"
                                        className="h-7 px-2"
                                      >
                                        <Trash2 className="h-3.5 w-3.5 text-red-500" />
                                      </Button>
                                    </div>
                                  </TableCell>
                                </>
                              )}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* 添加/编辑标签表单 */}
              <Card id="tag-form">
                <CardHeader>
                  <CardTitle>
                    {editingTag ? '编辑标签' : '添加标签'}
                  </CardTitle>
                  <CardDescription>
                    {selectedCategory
                      ? `为 "${selectedCategory.name}" 分类${editingTag ? '编辑' : '添加'}标签`
                      : '请先选择一个分类'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">分类</Label>
                    <Select
                      value={createdId}
                      onValueChange={setCreatedId}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="选择分类" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        className="max-h-none z-[100] bg-white border border-gray-200 shadow-lg"
                        avoidCollisions={true}
                      >
                        {categories.map((category) => (
                          <SelectItem
                            key={category.id}
                            value={category.id}
                            className="py-1 text-sm"
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="productSpec">规格</Label>
                      <Input
                        id="productSpec"
                        value={productSpec}
                        onChange={(e) => setProductSpec(e.target.value)}
                        placeholder="产品规格"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="productSize">尺寸</Label>
                      <Input
                        id="productSize"
                        value={productSize}
                        onChange={(e) => setProductSize(e.target.value)}
                        placeholder="产品尺寸"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specSize">规格尺寸</Label>
                    <Input
                      id="specSize"
                      value={specSize}
                      onChange={(e) => setSpecSize(e.target.value)}
                      placeholder="规格尺寸"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sortType">排序类型</Label>
                      <Input
                        id="sortType"
                        type="number"
                        value={sortType}
                        onChange={(e) => setSortType(parseInt(e.target.value) || 0)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sortOrder">排序顺序</Label>
                      <Input
                        id="sortOrder"
                        type="number"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(parseInt(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={resetForm}
                    disabled={loading}
                  >
                    取消
                  </Button>
                  <Button
                    onClick={saveTag}
                    disabled={loading || !createdId}
                  >
                    {loading ? '保存中...' : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        保存
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
