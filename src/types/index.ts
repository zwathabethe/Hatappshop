export interface Hat {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  condition: 'New' | 'Like New' | 'Good' | 'Fair';
  category: 'Baseball Caps' | 'Beanies' | 'Fedoras' | 'Bucket Hats' | 'Sun Hats' | 'Winter Hats';
  brand: string;
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'One Size';
  color: string;
  description: string;
  images: string[];
  seller: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    reviews: number;
  };
  createdAt: string;
  liked: boolean;
}

export interface CartItem extends Hat {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  rating: number;
  reviews: number;
  joined: string;
}