'use client';

import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag, Layers, Link2 } from 'lucide-react';

export default function CategoriesPage() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">分类管理</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 标签分类管理 */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="h-5 w-5 mr-2 text-blue-500" />
                标签分类管理
              </CardTitle>
              <CardDescription>
                管理产品标签的分类，如常用筛选、高级筛选等
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                在这里您可以创建、编辑和删除标签分类，为产品标签提供分类组织。
              </p>
              <Button 
                onClick={() => navigateTo('/admin/categories/tag-categories')}
                className="w-full"
              >
                进入管理
              </Button>
            </CardContent>
          </Card>

          {/* 标签管理 */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tag className="h-5 w-5 mr-2 text-green-500" />
                标签管理
              </CardTitle>
              <CardDescription>
                管理产品标签，如规格、尺寸等
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                在这里您可以创建、编辑和删除产品标签，并将其分配到不同的标签分类中。
              </p>
              <Button 
                onClick={() => navigateTo('/admin/categories/tags')}
                className="w-full"
              >
                进入管理
              </Button>
            </CardContent>
          </Card>

          {/* 产品标签关联 */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Link2 className="h-5 w-5 mr-2 text-purple-500" />
                产品标签关联
              </CardTitle>
              <CardDescription>
                管理产品与标签之间的关联关系
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                在这里您可以为产品添加或移除标签，建立产品与标签之间的关联关系。
              </p>
              <Button 
                onClick={() => navigateTo('/admin/categories/product-tags')}
                className="w-full"
              >
                进入管理
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
