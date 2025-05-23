'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProductTagsPage() {
  const router = useRouter();
  
  // 返回分类列表
  const goBackToCategories = () => {
    router.push('/admin/categories/tag-categories');
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
          <h1 className="text-2xl font-bold">产品标签关联</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>功能开发中</CardTitle>
            <CardDescription>产品标签关联功能正在开发中，敬请期待</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-8 text-center">
              <div className="text-6xl mb-4">🚧</div>
              <h2 className="text-2xl font-bold mb-2">功能正在建设中</h2>
              <p className="text-gray-500">
                此功能将允许您为产品选择和管理标签，目前正在开发中。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
