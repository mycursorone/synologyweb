'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlusCircle, Trash2, Edit, Save } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface TagCategory {
  id: string;
  name: string;
  sort: number;
  categories_type: string;
}

export default function TagCategoriesPage() {
  const router = useRouter();
  
  // 状态
  const [categories, setCategories] = useState<TagCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingCategory, setEditingCategory] = useState<TagCategory | null>(null);
  const [name, setName] = useState('');
  const [sort, setSort] = useState(0);
  const [categoriesType, setCategoriesType] = useState('');
  
  // 获取标签分类
  useEffect(() => {
    fetchCategories();
  }, []);
  
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/tag-categories');
      if (!response.ok) throw new Error('获取标签分类失败');
      
      const data = await response.json();
      setCategories(data.categories || []);
    } catch (error) {
      console.error('获取标签分类失败:', error);
      toast.error('获取标签分类失败');
    } finally {
      setLoading(false);
    }
  };
  
  // 保存标签分类
  const saveCategory = async () => {
    try {
      setLoading(true);
      
      if (!name || !categoriesType) {
        toast.error('请填写完整的分类信息');
        return;
      }
      
      const categoryData = {
        id: editingCategory?.id,
        name,
        sort,
        categories_type: categoriesType,
      };
      
      const url = editingCategory 
        ? `/api/tag-categories?id=${editingCategory.id}` 
        : '/api/tag-categories';
      
      const method = editingCategory ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(categoryData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '保存标签分类失败');
      }
      
      const result = await response.json();
      
      // 更新分类列表
      if (editingCategory) {
        setCategories(categories.map(cat => 
          cat.id === editingCategory.id ? result.category : cat
        ));
      } else {
        setCategories([...categories, result.category]);
      }
      
      // 重置表单
      resetForm();
      toast.success(editingCategory ? '分类更新成功' : '分类添加成功');
    } catch (error) {
      console.error('保存标签分类失败:', error);
      toast.error(error instanceof Error ? error.message : '保存标签分类失败');
    } finally {
      setLoading(false);
    }
  };
  
  // 删除标签分类
  const deleteCategory = async (id: string) => {
    if (!confirm('确定要删除这个分类吗？这将删除该分类下的所有标签！')) return;
    
    try {
      setLoading(true);
      
      const response = await fetch(`/api/tag-categories?id=${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '删除标签分类失败');
      }
      
      setCategories(categories.filter(cat => cat.id !== id));
      toast.success('分类删除成功');
    } catch (error) {
      console.error('删除标签分类失败:', error);
      toast.error(error instanceof Error ? error.message : '删除标签分类失败');
    } finally {
      setLoading(false);
    }
  };
  
  // 编辑标签分类
  const editCategory = (category: TagCategory) => {
    setEditingCategory(category);
    setName(category.name);
    setSort(category.sort);
    setCategoriesType(category.categories_type);
  };
  
  // 重置表单
  const resetForm = () => {
    setEditingCategory(null);
    setName('');
    setSort(0);
    setCategoriesType('');
  };
  
  // 查看分类下的标签
  const viewTags = (categoryId: string) => {
    router.push(`/admin/categories/tags?categoryId=${categoryId}`);
  };
  
  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">标签分类管理</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 分类列表 */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>标签分类列表</CardTitle>
                <CardDescription>管理产品标签的分类</CardDescription>
              </CardHeader>
              <CardContent>
                {categories.length === 0 ? (
                  <div className="text-center py-4 text-gray-500">
                    {loading ? '加载中...' : '暂无分类数据，请添加'}
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>名称</TableHead>
                        <TableHead>分类类型</TableHead>
                        <TableHead>排序</TableHead>
                        <TableHead>操作</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {categories.map((category) => (
                        <TableRow key={category.id}>
                          <TableCell className="font-medium">{category.name}</TableCell>
                          <TableCell>{category.categories_type}</TableCell>
                          <TableCell>{category.sort}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => viewTags(category.id)}
                                title="查看标签"
                              >
                                查看标签
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => editCategory(category)}
                                title="编辑"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => deleteCategory(category.id)}
                                disabled={loading}
                                title="删除"
                              >
                                <Trash2 className="h-4 w-4 text-red-500" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* 添加/编辑分类表单 */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>
                  {editingCategory ? '编辑分类' : '添加分类'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">名称</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="分类名称"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="categoriesType">分类类型</Label>
                  <Input
                    id="categoriesType"
                    value={categoriesType}
                    onChange={(e) => setCategoriesType(e.target.value)}
                    placeholder="例如：常用筛选、高级筛选"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sort">排序</Label>
                  <Input
                    id="sort"
                    type="number"
                    value={sort}
                    onChange={(e) => setSort(parseInt(e.target.value) || 0)}
                  />
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
                  onClick={saveCategory}
                  disabled={loading}
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
    </AdminLayout>
  );
}
