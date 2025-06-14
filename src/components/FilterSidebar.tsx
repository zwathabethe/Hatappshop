import React from 'react';
import { categories, conditions, sizes } from '../data/hats';

interface FilterSidebarProps {
  selectedCategory: string;
  selectedCondition: string;
  selectedSize: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onConditionChange: (condition: string) => void;
  onSizeChange: (size: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  selectedCondition,
  selectedSize,
  priceRange,
  onCategoryChange,
  onConditionChange,
  onSizeChange,
  onPriceRangeChange,
  isOpen,
  onClose
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white shadow-lg lg:shadow-none
        transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:w-64 lg:bg-transparent
      `}>
        <div className="p-6 lg:p-0">
          <div className="flex items-center justify-between lg:hidden mb-6">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => onCategoryChange(e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Condition Filter */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Condition</h3>
              <div className="space-y-2">
                {conditions.map((condition) => (
                  <label key={condition} className="flex items-center">
                    <input
                      type="radio"
                      name="condition"
                      value={condition}
                      checked={selectedCondition === condition}
                      onChange={(e) => onConditionChange(e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
              <div className="space-y-2">
                {sizes.map((size) => (
                  <label key={size} className="flex items-center">
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={(e) => onSizeChange(e.target.value)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => onPriceRangeChange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value) || 1000])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};