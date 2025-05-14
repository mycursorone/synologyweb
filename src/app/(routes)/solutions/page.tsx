'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SolutionCard from '@/components/ui/SolutionCard';

// 解决方案数据类型
interface Solution {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  industry: string;
}

// 行业类型
const industries = [
  { id: 'all', name: '全部' },
  { id: '企业', name: '企业' },
  { id: '安防', name: '安防' },
  { id: '家庭', name: '家庭' },
  { id: '中小企业', name: '中小企业' },
  { id: '教育', name: '教育' },
  { id: '医疗', name: '医疗' }
];

export default function SolutionsPage() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [filteredSolutions, setFilteredSolutions] = useState<Solution[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 获取所有解决方案
  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/solutions');

        if (!response.ok) {
          throw new Error('获取解决方案数据失败');
        }

        const data = await response.json();
        setSolutions(data);
        setFilteredSolutions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '未知错误');
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, []);

  // 处理行业筛选
  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry);

    if (industry === 'all') {
      setFilteredSolutions(solutions);
    } else {
      const filtered = solutions.filter(solution => solution.industry === industry);
      setFilteredSolutions(filtered);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 顶部横幅 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-3xl font-bold mb-4">美步解决方案</h1>
        <p className="text-xl mb-6">
          针对不同行业和场景的综合解决方案，满足您的各种需求
        </p>
        <p className="text-lg">
          探索我们为企业、家庭和专业用户打造的全方位解决方案，助力您的数字化转型。
        </p>
      </div>

      {/* 行业筛选器 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">按行业筛选</h2>
        <div className="flex flex-wrap gap-2">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => handleIndustryChange(industry.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedIndustry === industry.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>
      </div>

      {/* 解决方案列表 */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      ) : filteredSolutions.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-900 mb-2">没有找到匹配的解决方案</h3>
          <p className="text-gray-600 mb-4">请尝试选择其他行业类别。</p>
          <button
            onClick={() => handleIndustryChange('all')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            查看所有解决方案
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution) => (
            <SolutionCard
              key={solution.id}
              id={solution.id}
              title={solution.title}
              description={solution.description}
              imageUrl={solution.imageUrl}
              slug={solution.slug}
              industry={solution.industry}
            />
          ))}
        </div>
      )}
    </div>
  );
}
