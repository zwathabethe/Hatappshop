import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Wishlist } from './components/Wishlist';
import { Notifications } from './components/Notifications';
import { Reviews } from './components/Reviews';
import { hats } from './data/hats';
import { Hat, CartItem } from './types';
import { Filter } from 'lucide-react';

function App() {
  const [products, setProducts] = useState(hats);
  const [selectedProduct, setSelectedProduct] = useState<Hat | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Hat[]>([]);
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'price-drop' as const,
      title: 'Price Drop Alert!',
      message: 'The Classic Newsboy Cap is now 20% off!',
      timestamp: '2 hours ago',
      read: false,
    },
    {
      id: '2',
      type: 'new-item' as const,
      title: 'New Arrival',
      message: 'Check out our new collection of winter beanies!',
      timestamp: '1 day ago',
      read: false,
    },
  ]);
  const [reviews, setReviews] = useState([
    {
      id: '1',
      userId: 'user1',
      userName: 'John Doe',
      userAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      comment: 'Excellent quality and perfect fit!',
      date: '2 days ago',
      helpful: 12,
    },
  ]);

  // Filter and search logic
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(hat => {
      const matchesSearch = hat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           hat.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           hat.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || hat.category === selectedCategory;
      const matchesCondition = selectedCondition === 'All' || hat.condition === selectedCondition;
      const matchesSize = selectedSize === 'All' || hat.size === selectedSize;
      const matchesPrice = hat.price >= priceRange[0] && hat.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesCondition && matchesSize && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        break;
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, selectedCondition, selectedSize, priceRange, sortBy]);

  const handleLike = (id: string) => {
    setProducts(prev => prev.map(hat => 
      hat.id === id ? { ...hat, liked: !hat.liked } : hat
    ));
    
    const hat = products.find(h => h.id === id);
    if (hat) {
      if (hat.liked) {
        setWishlistItems(prev => prev.filter(item => item.id !== id));
      } else {
        setWishlistItems(prev => [...prev, hat]);
      }
    }
  };

  const handleRemoveFromWishlist = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
    setProducts(prev => prev.map(hat => 
      hat.id === id ? { ...hat, liked: false } : hat
    ));
  };

  const handleMarkNotificationAsRead = (id: string) => {
    setNotifications(prev => prev.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleAddReview = (review: Omit<typeof reviews[0], 'id' | 'date' | 'helpful'>) => {
    const newReview = {
      ...review,
      id: Date.now().toString(),
      date: 'Just now',
      helpful: 0,
    };
    setReviews(prev => [newReview, ...prev]);
  };

  const handleAddToCart = (hat: Hat) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === hat.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === hat.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...hat, quantity: 1 }];
    });
  };

  const handleUpdateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearch={setSearchQuery}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onNotificationsClick={() => setIsNotificationsOpen(true)}
        notificationCount={notifications.filter(n => !n.read).length}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="lg:hidden mb-4 flex items-center justify-between">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center space-x-2 bg-white px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <FilterSidebar
              selectedCategory={selectedCategory}
              selectedCondition={selectedCondition}
              selectedSize={selectedSize}
              priceRange={priceRange}
              onCategoryChange={setSelectedCategory}
              onConditionChange={setSelectedCondition}
              onSizeChange={setSelectedSize}
              onPriceRangeChange={setPriceRange}
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {searchQuery ? `Search results for "${searchQuery}"` : 'All Hats'}
              </h1>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'hat' : 'hats'} found
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Filter className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No hats found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((hat) => (
                  <ProductCard
                    key={hat.id}
                    hat={hat}
                    onLike={handleLike}
                    onAddToCart={handleAddToCart}
                    onClick={setSelectedProduct}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      <Wishlist
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistItems}
        onRemove={handleRemoveFromWishlist}
        onLike={handleLike}
        onAddToCart={handleAddToCart}
        onClick={setSelectedProduct}
      />

      <Notifications
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        notifications={notifications}
        onMarkAsRead={handleMarkNotificationAsRead}
        onClearAll={handleClearNotifications}
      />

      {selectedProduct && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProductDetail
            hat={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
            onLike={handleLike}
          />
          <div className="mt-12">
            <Reviews
              productId={selectedProduct.id}
              reviews={reviews}
              onAddReview={handleAddReview}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;