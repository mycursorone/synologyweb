'use client';

import { useState, useEffect } from 'react';
import { FilterCategory, FilterOption } from '@/types/product';

interface FilterOptions {
  categoryIds: string[];
  tagIds: string[];
  searchTerm: string;
}

interface ProductFilterProps {
  filterCategories: FilterCategory[];
  selectedFilters: FilterOptions;
  onFilterChange: (newFilters: Partial<FilterOptions>) => void;
  isLoading?: boolean;
}

const ProductFilter = ({
  filterCategories,
  selectedFilters,
  onFilterChange,
  isLoading = false,
}: ProductFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(selectedFilters.searchTerm);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  // 初始化展开状态
  useEffect(() => {
    const initialExpandedState: Record<string, boolean> = {};
    filterCategories.forEach(category => {
      initialExpandedState[category.id] = true; // 默认展开所有分类
    });
    setExpandedCategories(initialExpandedState);
  }, [filterCategories]);

  // 当外部搜索词变化时更新本地状态
  useEffect(() => {
    setSearchInput(selectedFilters.searchTerm);
  }, [selectedFilters.searchTerm]);

  // 处理标签选择
  const handleTagChange = (tagId: string) => {
    const newTagIds = selectedFilters.tagIds.includes(tagId)
      ? selectedFilters.tagIds.filter(id => id !== tagId)
      : [...selectedFilters.tagIds, tagId];

    onFilterChange({ tagIds: newTagIds });
  };

  // 处理分类展开/折叠
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // 处理搜索
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ searchTerm: searchInput });
  };

  // 重置所有筛选条件
  const resetFilters = () => {
    onFilterChange({
      categoryIds: [],
      tagIds: [],
      searchTerm: '',
    });
    setSearchInput('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4 lg:hidden">
        <h3 className="text-lg font-bold">产品筛选</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-gray-700"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        {/* 搜索框 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">搜索</h3>
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="搜索产品..."
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* 筛选分类 */}
            {filterCategories.map((category) => (
              <div key={category.id} className="mb-6 border-b pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer mb-3"
                  onClick={() => toggleCategory(category.id)}
                >
                  <h3 className="text-lg font-bold">{category.name}</h3>
                  <svg
                    className={`w-5 h-5 transition-transform ${expandedCategories[category.id] ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {expandedCategories[category.id] && (
                  <div className="space-y-2 grid grid-cols-2">
                    {category.options.map((option) => (
                      <div key={option.id} className="flex items-center col-span-1">
                        <input
                          type="checkbox"
                          id={`tag-${option.id}`}
                          checked={selectedFilters.tagIds.includes(option.id)}
                          onChange={() => handleTagChange(option.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`tag-${option.id}`} className="ml-2 text-gray-700 text-sm">
                          {option.name}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* 重置筛选按钮 */}
        <button
          onClick={resetFilters}
          className="w-full bg-red-100 hover:bg-red-200 text-red-800 font-medium py-2 px-4 rounded"
          disabled={isLoading}
        >
          重置所有筛选
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
