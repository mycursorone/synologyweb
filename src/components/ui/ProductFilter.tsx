'use client';

import { useState, useEffect } from 'react';

interface FilterOptions {
  categories: string[];
  searchTerm: string;
}

interface ProductFilterProps {
  categories: string[];
  selectedFilters: FilterOptions;
  onFilterChange: (newFilters: Partial<FilterOptions>) => void;
}

const ProductFilter = ({
  categories,
  selectedFilters,
  onFilterChange,
}: ProductFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(selectedFilters.searchTerm);

  // 当外部搜索词变化时更新本地状态
  useEffect(() => {
    setSearchInput(selectedFilters.searchTerm);
  }, [selectedFilters.searchTerm]);

  // 处理类别选择
  const handleCategoryChange = (category: string) => {
    const newCategories = selectedFilters.categories.includes(category)
      ? selectedFilters.categories.filter(c => c !== category)
      : [...selectedFilters.categories, category];

    onFilterChange({ categories: newCategories });
  };



  // 处理搜索
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ searchTerm: searchInput });
  };

  // 重置所有筛选条件
  const resetFilters = () => {
    onFilterChange({
      categories: [],
      searchTerm: '',
    });
    setSearchInput('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4 lg:hidden">
        <h3 className="text-lg font-bold">筛选</h3>
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

        {/* 类别筛选 */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3">产品类别</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${category}`}
                  checked={selectedFilters.categories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor={`category-${category}`} className="ml-2 text-gray-700">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>



        {/* 重置筛选按钮 */}
        <button
          onClick={resetFilters}
          className="w-full bg-red-100 hover:bg-red-200 text-red-800 font-medium py-2 px-4 rounded"
        >
          重置所有筛选
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
