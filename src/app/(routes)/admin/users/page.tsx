'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { PlusCircle, Trash2, Edit, Save, UserPlus, UserCog, Shield } from 'lucide-react';
import { toast } from 'react-hot-toast';

// 用户类型定义
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export default function UsersPage() {
  const { data: session } = useSession();
  
  // 状态
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  
  // 表单状态
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  
  // 获取用户列表
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('获取用户列表失败');
      
      const data = await response.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error('获取用户列表失败:', error);
      toast.error('获取用户列表失败');
    } finally {
      setLoading(false);
    }
  };
  
  // 打开创建用户对话框
  const openCreateDialog = () => {
    setEditingUser(null);
    resetForm();
    setIsDialogOpen(true);
  };
  
  // 打开编辑用户对话框
  const openEditDialog = (user: User) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
    setPassword(''); // 编辑时不填充密码
    setRole(user.role);
    setIsDialogOpen(true);
  };
  
  // 打开删除确认对话框
  const openDeleteDialog = (user: User) => {
    setUserToDelete(user);
    setIsDeleteDialogOpen(true);
  };
  
  // 重置表单
  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRole('user');
  };
  
  // 保存用户（创建或更新）
  const saveUser = async () => {
    try {
      setLoading(true);
      
      // 验证表单
      if (!name || !email) {
        toast.error('姓名和邮箱不能为空');
        return;
      }
      
      if (!editingUser && !password) {
        toast.error('创建用户时密码不能为空');
        return;
      }
      
      const userData = {
        name,
        email,
        role,
        ...(password ? { password } : {})
      };
      
      let response;
      
      if (editingUser) {
        // 更新用户
        response = await fetch(`/api/users?id=${editingUser.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        });
      } else {
        // 创建用户
        response = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        });
      }
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '保存用户失败');
      }
      
      // 关闭对话框并刷新用户列表
      setIsDialogOpen(false);
      fetchUsers();
      toast.success(editingUser ? '用户更新成功' : '用户创建成功');
    } catch (error) {
      console.error('保存用户失败:', error);
      toast.error(error instanceof Error ? error.message : '保存用户失败');
    } finally {
      setLoading(false);
    }
  };
  
  // 删除用户
  const deleteUser = async () => {
    if (!userToDelete) return;
    
    try {
      setLoading(true);
      
      const response = await fetch(`/api/users?id=${userToDelete.id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '删除用户失败');
      }
      
      // 关闭对话框并刷新用户列表
      setIsDeleteDialogOpen(false);
      setUserToDelete(null);
      fetchUsers();
      toast.success('用户删除成功');
    } catch (error) {
      console.error('删除用户失败:', error);
      toast.error(error instanceof Error ? error.message : '删除用户失败');
    } finally {
      setLoading(false);
    }
  };
  
  // 获取角色显示名称
  const getRoleName = (role: string) => {
    switch (role) {
      case 'admin':
        return '管理员';
      case 'editor':
        return '编辑者';
      case 'user':
        return '普通用户';
      default:
        return role;
    }
  };
  
  // 获取角色图标
  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Shield className="h-4 w-4 text-red-500" />;
      case 'editor':
        return <UserCog className="h-4 w-4 text-blue-500" />;
      case 'user':
        return <UserPlus className="h-4 w-4 text-green-500" />;
      default:
        return <UserPlus className="h-4 w-4" />;
    }
  };
  
  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">用户管理</h1>
          <Button onClick={openCreateDialog}>
            <PlusCircle className="h-4 w-4 mr-2" />
            添加用户
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>用户列表</CardTitle>
            <CardDescription>管理系统用户账号和权限</CardDescription>
          </CardHeader>
          <CardContent>
            {loading && users.length === 0 ? (
              <div className="text-center py-4 text-gray-500">加载中...</div>
            ) : users.length === 0 ? (
              <div className="text-center py-4 text-gray-500">暂无用户数据</div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>用户名</TableHead>
                      <TableHead>邮箱</TableHead>
                      <TableHead>角色</TableHead>
                      <TableHead>创建时间</TableHead>
                      <TableHead className="text-right">操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {getRoleIcon(user.role)}
                            <span className="ml-2">{getRoleName(user.role)}</span>
                          </div>
                        </TableCell>
                        <TableCell>{new Date(user.created_at).toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openEditDialog(user)}
                              disabled={loading}
                              title="编辑"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openDeleteDialog(user)}
                              disabled={loading || user.id === session?.user?.id}
                              title={user.id === session?.user?.id ? "不能删除当前登录用户" : "删除"}
                              className={user.id === session?.user?.id ? "opacity-50 cursor-not-allowed" : ""}
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* 创建/编辑用户对话框 */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingUser ? '编辑用户' : '创建用户'}</DialogTitle>
              <DialogDescription>
                {editingUser ? '修改用户信息和权限' : '添加新用户到系统'}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">用户名</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="请输入用户名"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="请输入邮箱"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">
                  {editingUser ? '密码 (留空保持不变)' : '密码'}
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={editingUser ? '留空保持不变' : '请输入密码'}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">角色</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="选择角色" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">管理员</SelectItem>
                    <SelectItem value="editor">编辑者</SelectItem>
                    <SelectItem value="user">普通用户</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                取消
              </Button>
              <Button onClick={saveUser} disabled={loading}>
                {loading ? '保存中...' : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    保存
                  </>
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        {/* 删除确认对话框 */}
        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>确认删除用户</AlertDialogTitle>
              <AlertDialogDescription>
                您确定要删除用户 "{userToDelete?.name}" 吗？此操作不可撤销。
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>取消</AlertDialogCancel>
              <AlertDialogAction onClick={deleteUser} className="bg-red-600 hover:bg-red-700">
                {loading ? '删除中...' : '确认删除'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminLayout>
  );
}
