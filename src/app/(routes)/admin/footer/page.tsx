'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { PlusCircle, Trash2, Edit, Save } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function FooterManagementPage() {
  const router = useRouter();
  
  // Footer基本信息状态
  const [footer, setFooter] = useState<any>(null);
  const [icpNumber, setIcpNumber] = useState('');
  const [icpLink, setIcpLink] = useState('https://beian.miit.gov.cn');
  const [copyright, setCopyright] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  
  // Footer链接状态
  const [links, setLinks] = useState<any[]>([]);
  const [editingLink, setEditingLink] = useState<any>(null);
  const [linkTitle, setLinkTitle] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [linkCategory, setLinkCategory] = useState('');
  const [linkIcon, setLinkIcon] = useState('');
  const [linkSortOrder, setLinkSortOrder] = useState(0);
  const [linkIsActive, setLinkIsActive] = useState(true);
  const [linkLoading, setLinkLoading] = useState(false);
  
  // 获取Footer信息
  useEffect(() => {
    const fetchFooter = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/footers');
        if (!response.ok) throw new Error('获取Footer失败');
        
        const data = await response.json();
        if (data.footers && data.footers.length > 0) {
          const footerData = data.footers[0];
          setFooter(footerData);
          setIcpNumber(footerData.icpNumber || '');
          setIcpLink(footerData.icpLink || 'https://beian.miit.gov.cn');
          setCopyright(footerData.copyright || '');
          setIsActive(footerData.isActive);
          setLinks(footerData.links || []);
        }
      } catch (error) {
        console.error('获取Footer失败:', error);
        toast.error('获取Footer信息失败');
      } finally {
        setLoading(false);
      }
    };
    
    fetchFooter();
  }, []);
  
  // 保存Footer基本信息
  const saveFooter = async () => {
    try {
      setLoading(true);
      
      const footerData = {
        id: footer?.id,
        icpNumber,
        icpLink,
        copyright,
        isActive,
      };
      
      const response = await fetch('/api/footers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(footerData),
      });
      
      if (!response.ok) throw new Error('保存Footer失败');
      
      const result = await response.json();
      setFooter(result.footer);
      toast.success('Footer信息保存成功');
      router.refresh();
    } catch (error) {
      console.error('保存Footer失败:', error);
      toast.error('保存Footer信息失败');
    } finally {
      setLoading(false);
    }
  };
  
  // 保存Footer链接
  const saveLink = async () => {
    try {
      setLinkLoading(true);
      
      if (!linkTitle || !linkUrl || !linkCategory) {
        toast.error('请填写完整的链接信息');
        return;
      }
      
      const linkData = {
        id: editingLink?.id,
        title: linkTitle,
        url: linkUrl,
        category: linkCategory,
        icon: linkIcon,
        sortOrder: linkSortOrder,
        isActive: linkIsActive,
        footerId: footer?.id,
      };
      
      const response = await fetch('/api/footer-links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(linkData),
      });
      
      if (!response.ok) throw new Error('保存链接失败');
      
      const result = await response.json();
      
      // 更新链接列表
      if (editingLink) {
        setLinks(links.map(link => link.id === editingLink.id ? result.link : link));
      } else {
        setLinks([...links, result.link]);
      }
      
      // 重置表单
      resetLinkForm();
      toast.success(editingLink ? '链接更新成功' : '链接添加成功');
    } catch (error) {
      console.error('保存链接失败:', error);
      toast.error('保存链接失败');
    } finally {
      setLinkLoading(false);
    }
  };
  
  // 删除链接
  const deleteLink = async (id: string) => {
    if (!confirm('确定要删除这个链接吗？')) return;
    
    try {
      setLinkLoading(true);
      
      const response = await fetch(`/api/footer-links?id=${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('删除链接失败');
      
      setLinks(links.filter(link => link.id !== id));
      toast.success('链接删除成功');
    } catch (error) {
      console.error('删除链接失败:', error);
      toast.error('删除链接失败');
    } finally {
      setLinkLoading(false);
    }
  };
  
  // 编辑链接
  const editLink = (link: any) => {
    setEditingLink(link);
    setLinkTitle(link.title);
    setLinkUrl(link.url);
    setLinkCategory(link.category);
    setLinkIcon(link.icon || '');
    setLinkSortOrder(link.sortOrder);
    setLinkIsActive(link.isActive);
  };
  
  // 重置链接表单
  const resetLinkForm = () => {
    setEditingLink(null);
    setLinkTitle('');
    setLinkUrl('');
    setLinkCategory('');
    setLinkIcon('');
    setLinkSortOrder(0);
    setLinkIsActive(true);
  };
  
  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">Footer管理</h1>
        
        <Tabs defaultValue="basic">
          <TabsList className="mb-4">
            <TabsTrigger value="basic">基本设置</TabsTrigger>
            <TabsTrigger value="links">外链管理</TabsTrigger>
          </TabsList>
          
          {/* 基本设置 */}
          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Footer基本设置</CardTitle>
                <CardDescription>设置网站底部的基本信息，如备案号、版权信息等</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="icpNumber">ICP备案号</Label>
                    <Input
                      id="icpNumber"
                      value={icpNumber}
                      onChange={(e) => setIcpNumber(e.target.value)}
                      placeholder="例如：蜀ICP备17032817号-1"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="icpLink">备案号链接</Label>
                    <Input
                      id="icpLink"
                      value={icpLink}
                      onChange={(e) => setIcpLink(e.target.value)}
                      placeholder="例如：https://beian.miit.gov.cn"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="copyright">版权信息</Label>
                    <Input
                      id="copyright"
                      value={copyright}
                      onChange={(e) => setCopyright(e.target.value)}
                      placeholder="例如：© 2023 Synology Inc. 保留所有权利。"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isActive"
                      checked={isActive}
                      onCheckedChange={(checked) => setIsActive(checked as boolean)}
                    />
                    <Label htmlFor="isActive">启用</Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={saveFooter} disabled={loading}>
                  {loading ? '保存中...' : '保存设置'}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* 外链管理 */}
          <TabsContent value="links">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 链接列表 */}
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>外链列表</CardTitle>
                    <CardDescription>管理网站底部的外部链接</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {links.length === 0 ? (
                      <div className="text-center py-4 text-gray-500">
                        暂无外链数据，请添加
                      </div>
                    ) : (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>标题</TableHead>
                            <TableHead>分类</TableHead>
                            <TableHead>排序</TableHead>
                            <TableHead>状态</TableHead>
                            <TableHead>操作</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {links.map((link) => (
                            <TableRow key={link.id}>
                              <TableCell>
                                <div className="font-medium">{link.title}</div>
                                <div className="text-xs text-gray-500 truncate max-w-[200px]">
                                  {link.url}
                                </div>
                              </TableCell>
                              <TableCell>{link.category}</TableCell>
                              <TableCell>{link.sortOrder}</TableCell>
                              <TableCell>
                                {link.isActive ? (
                                  <span className="text-green-500">启用</span>
                                ) : (
                                  <span className="text-gray-500">禁用</span>
                                )}
                              </TableCell>
                              <TableCell>
                                <div className="flex space-x-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => editLink(link)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => deleteLink(link.id)}
                                    disabled={linkLoading}
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
              
              {/* 添加/编辑链接表单 */}
              <div className="md:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {editingLink ? '编辑链接' : '添加链接'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="linkTitle">标题</Label>
                      <Input
                        id="linkTitle"
                        value={linkTitle}
                        onChange={(e) => setLinkTitle(e.target.value)}
                        placeholder="链接标题"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="linkUrl">URL</Label>
                      <Input
                        id="linkUrl"
                        value={linkUrl}
                        onChange={(e) => setLinkUrl(e.target.value)}
                        placeholder="https://example.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="linkCategory">分类</Label>
                      <Input
                        id="linkCategory"
                        value={linkCategory}
                        onChange={(e) => setLinkCategory(e.target.value)}
                        placeholder="例如：社交媒体、合作伙伴"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="linkIcon">图标 (可选)</Label>
                      <Input
                        id="linkIcon"
                        value={linkIcon}
                        onChange={(e) => setLinkIcon(e.target.value)}
                        placeholder="图标名称或URL"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="linkSortOrder">排序</Label>
                      <Input
                        id="linkSortOrder"
                        type="number"
                        value={linkSortOrder}
                        onChange={(e) => setLinkSortOrder(parseInt(e.target.value) || 0)}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="linkIsActive"
                        checked={linkIsActive}
                        onCheckedChange={(checked) => setLinkIsActive(checked as boolean)}
                      />
                      <Label htmlFor="linkIsActive">启用</Label>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={resetLinkForm}
                      disabled={linkLoading}
                    >
                      取消
                    </Button>
                    <Button
                      onClick={saveLink}
                      disabled={linkLoading || !footer?.id}
                    >
                      {linkLoading ? '保存中...' : (
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
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
