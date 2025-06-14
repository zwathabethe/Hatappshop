import React from 'react';
import { Hat } from '../types';
import { ProductCard } from './ProductCard';
import { X } from 'lucide-react';

interface WishlistProps {
  items: Hat[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: string) => void;
  onLike: (id: string) => void;
  onAddToCart: (hat: Hat) => void;
  onClick: (hat: Hat) => void;
}

export const Wishlist: React.FC<WishlistProps> = ({
  items,
  isOpen,
  onClose,
  onRemove,
  onLike,
  onAddToCart,
  onClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Wishlist</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Your wishlist is empty</p>
              <p className="text-sm text-gray-400 mt-2">
                Save items you like by clicking the heart icon
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((hat) => (
                <div key={hat.id} className="relative">
                  <ProductCard
                    hat={hat}
                    onLike={onLike}
                    onAddToCart={onAddToCart}
                    onClick={onClick}
                  />
                  <button
                    onClick={() => onRemove(hat.id)}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 