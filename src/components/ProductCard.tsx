import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Hat } from '../types';

interface ProductCardProps {
  hat: Hat;
  onLike: (id: string) => void;
  onAddToCart: (hat: Hat) => void;
  onClick: (hat: Hat) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ hat, onLike, onAddToCart, onClick }) => {
  const discountPercentage = hat.originalPrice 
    ? Math.round(((hat.originalPrice - hat.price) / hat.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="relative" onClick={() => onClick(hat)}>
        <img
          src={hat.images[0]}
          alt={hat.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLike(hat.id);
          }}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            hat.liked ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:text-red-500'
          } shadow-md transition-all duration-200 hover:scale-110`}
        >
          <Heart className={`h-4 w-4 ${hat.liked ? 'fill-current' : ''}`} />
        </button>
        
        {hat.originalPrice && (
          <div className="absolute top-2 left-2 bg-emerald-600 text-white px-2 py-1 rounded text-xs font-semibold">
            -{discountPercentage}%
          </div>
        )}

        <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-xs font-medium text-gray-700">
          {hat.condition}
        </div>
      </div>

      <div className="p-4" onClick={() => onClick(hat)}>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-xs text-gray-500">{hat.brand}</span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500">{hat.category}</span>
        </div>

        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{hat.title}</h3>
        
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-gray-900">${hat.price}</span>
          {hat.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${hat.originalPrice}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <img
              src={hat.seller.avatar}
              alt={hat.seller.name}
              className="w-6 h-6 rounded-full"
            />
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <span className="text-xs text-gray-600">{hat.seller.rating}</span>
            </div>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(hat);
            }}
            className="bg-emerald-600 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};