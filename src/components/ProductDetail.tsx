import React, { useState } from 'react';
import { ArrowLeft, Heart, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { Hat } from '../types';

interface ProductDetailProps {
  hat: Hat;
  onBack: () => void;
  onAddToCart: (hat: Hat) => void;
  onLike: (id: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ hat, onBack, onAddToCart, onLike }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const discountPercentage = hat.originalPrice 
    ? Math.round(((hat.originalPrice - hat.price) / hat.originalPrice) * 100)
    : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to listings</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={hat.images[selectedImageIndex]}
              alt={hat.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {hat.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {hat.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === index ? 'border-emerald-600' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${hat.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">{hat.brand}</span>
              <button
                onClick={() => onLike(hat.id)}
                className={`p-2 rounded-full ${
                  hat.liked ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:text-red-500'
                } transition-all duration-200 hover:scale-110`}
              >
                <Heart className={`h-5 w-5 ${hat.liked ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{hat.title}</h1>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-gray-900">${hat.price}</span>
                {hat.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${hat.originalPrice}</span>
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded text-sm font-semibold">
                      -{discountPercentage}%
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {hat.category}
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {hat.condition}
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Size: {hat.size}
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {hat.color}
              </span>
            </div>
          </div>

          {/* Seller Info */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={hat.seller.avatar}
                alt={hat.seller.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{hat.seller.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">
                    {hat.seller.rating} ({hat.seller.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
            <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 transition-colors">
              View Profile
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => onAddToCart(hat)}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Add to Cart
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <div className="text-center">
              <Shield className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Buyer Protection</p>
            </div>
            <div className="text-center">
              <Truck className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Fast Shipping</p>
            </div>
            <div className="text-center">
              <RotateCcw className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
              <p className="text-xs text-gray-600">Easy Returns</p>
            </div>
          </div>

          {/* Description */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{hat.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};