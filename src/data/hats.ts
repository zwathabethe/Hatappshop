import { Hat } from '../types';

export const hats: Hat[] = [
  {
    id: '1',
    title: 'Vintage Leather Baseball Cap',
    price: 45,
    originalPrice: 89,
    condition: 'Good',
    category: 'Baseball Caps',
    brand: 'Heritage Co.',
    size: 'L',
    color: 'Brown',
    description: 'Beautiful vintage leather baseball cap with adjustable strap. Perfect for casual wear with a classic, timeless look.',
    images: [
      'https://images.pexels.com/photos/8839900/pexels-photo-8839900.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller1',
      name: 'Emma Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.8,
      reviews: 127
    },
    createdAt: '2024-01-15',
    liked: false
  },
  {
    id: '2',
    title: 'Artisanal Hand-Knitted Beanie',
    price: 65,
    originalPrice: 95,
    condition: 'New',
    category: 'Beanies',
    brand: 'Nordic Knits',
    size: 'One Size',
    color: 'Forest Green',
    description: 'Hand-knitted beanie using premium merino wool. Features a unique Nordic pattern and is incredibly warm and soft. Each piece is one-of-a-kind.',
    images: [
      'https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8839900/pexels-photo-8839900.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller2',
      name: 'Marcus Wilson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.9,
      reviews: 89
    },
    createdAt: '2024-01-12',
    liked: true
  },
  {
    id: '3',
    title: 'Designer Fedora Hat',
    price: 120,
    originalPrice: 180,
    condition: 'New',
    category: 'Fedoras',
    brand: 'Milano',
    size: 'M',
    color: 'Black',
    description: 'Elegant designer fedora made from premium felt. Perfect for formal occasions or adding sophistication to casual wear.',
    images: [
      'https://images.pexels.com/photos/8839900/pexels-photo-8839900.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller3',
      name: 'Sophia Chen',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5.0,
      reviews: 203
    },
    createdAt: '2024-01-10',
    liked: false
  },
  {
    id: '4',
    title: 'Sustainable Bamboo Bucket Hat',
    price: 35,
    condition: 'New',
    category: 'Bucket Hats',
    brand: 'EcoStyle',
    size: 'L',
    color: 'Khaki',
    description: 'Eco-friendly bucket hat made from sustainable bamboo fabric. Features UPF 50+ sun protection and is machine washable.',
    images: [
      'https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller4',
      name: 'David Park',
      avatar: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.6,
      reviews: 67
    },
    createdAt: '2024-01-08',
    liked: true
  },
  {
    id: '5',
    title: 'Artistic Hand-Painted Sun Hat',
    price: 85,
    originalPrice: 120,
    condition: 'New',
    category: 'Sun Hats',
    brand: 'Artisan Collective',
    size: 'M',
    color: 'Multicolor',
    description: 'Unique hand-painted sun hat featuring original artwork. Each hat is a wearable piece of art, perfect for making a statement.',
    images: [
      'https://images.pexels.com/photos/8839900/pexels-photo-8839900.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller5',
      name: 'Isabella Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.7,
      reviews: 154
    },
    createdAt: '2024-01-05',
    liked: false
  },
  {
    id: '6',
    title: 'Vintage Military Cap',
    price: 65,
    condition: 'Good',
    category: 'Baseball Caps',
    brand: 'Army Surplus',
    size: 'L',
    color: 'Olive Green',
    description: 'Authentic vintage military cap with unique character. Perfect for collectors or those who love military-inspired fashion.',
    images: [
      'https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller6',
      name: 'James Thompson',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.5,
      reviews: 92
    },
    createdAt: '2024-01-03',
    liked: false
  },
  {
    id: '7',
    title: 'Limited Edition Artist Collaboration Cap',
    price: 95,
    originalPrice: 150,
    condition: 'New',
    category: 'Baseball Caps',
    brand: 'Street Art Collective',
    size: 'M',
    color: 'Black & Gold',
    description: 'Exclusive collaboration with renowned street artist. Features unique embroidery and limited edition numbering. Only 100 pieces made.',
    images: [
      'https://images.pexels.com/photos/8839900/pexels-photo-8839900.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller7',
      name: 'Alex Turner',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.9,
      reviews: 45
    },
    createdAt: '2024-01-20',
    liked: true
  },
  {
    id: '8',
    title: 'Handcrafted Felt Cloche Hat',
    price: 145,
    originalPrice: 195,
    condition: 'New',
    category: 'Winter Hats',
    brand: 'Artisan Millinery',
    size: 'M',
    color: 'Burgundy',
    description: 'Exquisitely crafted felt cloche hat with vintage-inspired details. Made by master milliners using traditional techniques.',
    images: [
      'https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller8',
      name: 'Victoria Clark',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.8,
      reviews: 78
    },
    createdAt: '2024-01-18',
    liked: false
  },
  {
    id: '9',
    title: 'Sustainable Straw Panama Hat',
    price: 75,
    originalPrice: 110,
    condition: 'New',
    category: 'Sun Hats',
    brand: 'EcoLux',
    size: 'L',
    color: 'Natural',
    description: 'Hand-woven Panama hat made from sustainable toquilla straw. Features a modern twist on a classic design with a leather band.',
    images: [
      'https://images.pexels.com/photos/8839900/pexels-photo-8839900.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller9',
      name: 'Carlos Mendez',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.7,
      reviews: 156
    },
    createdAt: '2024-01-16',
    liked: true
  },
  {
    id: '10',
    title: 'Tech-Enhanced Smart Beanie',
    price: 89,
    originalPrice: 129,
    condition: 'New',
    category: 'Beanies',
    brand: 'TechWear',
    size: 'One Size',
    color: 'Charcoal',
    description: 'Innovative smart beanie with built-in Bluetooth speakers and touch controls. Made from premium merino wool with conductive thread technology.',
    images: [
      'https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller10',
      name: 'Ryan Cooper',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.6,
      reviews: 203
    },
    createdAt: '2024-01-14',
    liked: false
  },
  {
    id: '11',
    title: 'Vintage-inspired Newsboy Cap',
    price: 55,
    originalPrice: 85,
    condition: 'New',
    category: 'Winter Hats',
    brand: 'Heritage Collection',
    size: 'M',
    color: 'Tweed',
    description: 'Classic newsboy cap made from premium tweed fabric. Features a timeless design with modern comfort and durability.',
    images: [
      'https://images.pexels.com/photos/8839900/pexels-photo-8839900.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller11',
      name: 'Michael Brown',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.9,
      reviews: 112
    },
    createdAt: '2024-01-12',
    liked: true
  },
  {
    id: '12',
    title: 'Artistic Embroidered Bucket Hat',
    price: 45,
    originalPrice: 65,
    condition: 'New',
    category: 'Bucket Hats',
    brand: 'Urban Art',
    size: 'One Size',
    color: 'Denim',
    description: 'Hand-embroidered bucket hat featuring unique street art designs. Made from upcycled denim with sustainable practices.',
    images: [
      'https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    seller: {
      id: 'seller12',
      name: 'Sarah Anderson',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.7,
      reviews: 89
    },
    createdAt: '2024-01-10',
    liked: false
  }
];

export const categories = [
  'All',
  'Baseball Caps',
  'Beanies',
  'Fedoras',
  'Bucket Hats',
  'Sun Hats',
  'Winter Hats'
];

export const conditions = ['All', 'New', 'Like New', 'Good', 'Fair'];
export const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL', 'One Size'];