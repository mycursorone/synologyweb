'use client';

import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Shield, UserCog, UserPlus, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

// 角色类型定义
interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
}

export default function RolesPage() {
  const router = useRouter();
  
  // 预定义的角色
  const [roles] = useState<Role[]>([
    {
      id: 'admin',
      name: '管理员',
      description: '拥有系统的所有权限，可以管理用户、内容和系统设置',
      permissions: [
        '用户管理', '角色管理', '内容管理', '系统设置', '数据分析'
      ]
    },
    {
      id: 'editor',
      name: '编辑者',
      description: '可以管理内容，但不能管理用户和系统设置',
      permissions: [
        '内容管理', '数据分析'
      ]
    },
    {
      id: 'user',
      name: '普通用户',
      description: '只能查看内容，不能进行任何管理操作',
      permissions: [
        '查看内容'
      ]
    }
  ]);
  
  // 返回用户管理页面
  const goBackToUsers = () => {
    router.push('/admin/users');
  };
  
  // 获取角色图标
  const getRoleIcon = (roleId: string) => {
    switch (roleId) {
      case 'admin':
        return <Shield className="h-5 w-5 text-red-500" />;
      case 'editor':
        return <UserCog className="h-5 w-5 text-blue-500" />;
      case 'user':
        return <UserPlus className="h-5 w-5 text-green-500" />;
      default:
        return <UserPlus className="h-5 w-5" />;
    }
  };
  
  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <div className="flex items-center mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={goBackToUsers}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回用户管理
          </Button>
          <h1 className="text-2xl font-bold">角色管理</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>系统角色</CardTitle>
            <CardDescription>管理系统中的用户角色和权限</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">角色</TableHead>
                    <TableHead>描述</TableHead>
                    <TableHead>权限</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roles.map((role) => (
                    <TableRow key={role.id}>
                      <TableCell>
                        <div className="flex items-center">
                          {getRoleIcon(role.id)}
                          <span className="ml-2 font-medium">{role.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{role.description}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {role.permissions.map((permission) => (
                            <span
                              key={permission}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100"
                            >
                              {permission}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-md">
              <h3 className="text-sm font-medium text-blue-800 mb-2">关于角色和权限</h3>
              <p className="text-sm text-blue-700">
                系统目前使用预定义的角色和权限模型。如需自定义角色或权限，请联系系统管理员进行数据库调整。
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                {getRoleIcon('admin')}
                <CardTitle className="ml-2">管理员</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                管理员拥有系统的所有权限，可以管理用户、内容和系统设置。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></span>
                  可以创建、编辑和删除用户
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></span>
                  可以管理系统设置
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2"></span>
                  可以查看所有数据和报表
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center">
                {getRoleIcon('editor')}
                <CardTitle className="ml-2">编辑者</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                编辑者可以管理内容，但不能管理用户和系统设置。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                  可以创建、编辑和删除内容
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                  可以查看内容相关的数据和报表
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                  不能管理用户和系统设置
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center">
                {getRoleIcon('user')}
                <CardTitle className="ml-2">普通用户</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                普通用户只能查看内容，不能进行任何管理操作。
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span>
                  可以查看内容
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span>
                  不能创建、编辑或删除任何内容
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2"></span>
                  不能查看管理数据和报表
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
