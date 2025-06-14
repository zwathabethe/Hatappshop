import React, { useState } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X, ShoppingCart, Bell, Plus } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  cartCount: number;
  onCartClick: () => void;
  onWishlistClick: () => void;
  onNotificationsClick: () => void;
  notificationCount: number;
  onSellClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSearch,
  cartCount,
  onCartClick,
  onWishlistClick,
  onNotificationsClick,
  notificationCount,
  onSellClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Real-time search
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-emerald-600">HatMarket</h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for hats..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </form>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            {/* Sell Button */}
            <button
              onClick={onSellClick}
              className="hidden md:flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Sell</span>
            </button>

            {/* Mobile Sell Button */}
            <button
              onClick={onSellClick}
              className="md:hidden bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
            </button>

            <button
              onClick={onWishlistClick}
              className="p-2 text-gray-600 hover:text-gray-900 relative"
            >
              <Heart className="h-6 w-6" />
            </button>

            <button
              onClick={onNotificationsClick}
              className="p-2 text-gray-600 hover:text-gray-900 relative"
            >
              <Bell className="h-6 w-6" />
              {notificationCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {notificationCount}
                </span>
              )}
            </button>

            <button
              onClick={onCartClick}
              className="p-2 text-gray-600 hover:text-gray-900 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm">Profile</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for hats..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </form>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 pt-4">
            <div className="space-y-3">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors">
                <Heart className="h-5 w-5" />
                <span>Liked Items</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};