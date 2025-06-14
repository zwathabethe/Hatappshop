import { Hat } from '../types';

export const hats: Hat[] = [
  {
    id: '1',
    title: 'Traditional Mongolian Deel Hat',
    price: 120,
    originalPrice: 180,
    condition: 'Good',
    category: 'Winter Hats',
    brand: 'Traditional',
    size: 'L',
    color: 'Blue & Gold',
    description: 'Authentic Mongolian deel hat from Ulaanbaatar. Handcrafted by local artisans using traditional techniques. Features intricate embroidery and fox fur trim. A rare find from the steppes of Mongolia.',
    images: [
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80'
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
    title: 'Peruvian Chullo with Alpaca Wool',
    price: 85,
    originalPrice: 120,
    condition: 'New',
    category: 'Winter Hats',
    brand: 'Andean Crafts',
    size: 'One Size',
    color: 'Multicolor',
    description: 'Hand-knitted chullo from the Sacred Valley of Peru. Made from 100% baby alpaca wool by Quechua artisans. Features traditional Andean patterns and ear flaps. Each pattern tells a unique story.',
    images: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80'
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
    title: 'Moroccan Fez Hat',
    price: 95,
    originalPrice: 150,
    condition: 'Good',
    category: 'Fedoras',
    brand: 'Traditional',
    size: 'M',
    color: 'Crimson',
    description: 'Authentic Moroccan fez from the medina of Fes. Handcrafted using traditional methods with natural dyes. Features intricate tassel and detailed embroidery. A piece of North African heritage.',
    images: [
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=600&q=80'
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
    title: 'Vietnamese Non La Hat',
    price: 45,
    originalPrice: 65,
    condition: 'New',
    category: 'Sun Hats',
    brand: 'Traditional',
    size: 'One Size',
    color: 'Natural',
    description: 'Authentic Vietnamese conical hat (Non La) handcrafted in Hoi An. Made from palm leaves using traditional techniques passed down through generations. Features delicate bamboo frame and natural waterproofing.',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80'
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
    title: 'Ecuadorian Panama Hat',
    price: 150,
    originalPrice: 250,
    condition: 'New',
    category: 'Sun Hats',
    brand: 'Montecristi',
    size: 'M',
    color: 'Natural',
    description: 'Genuine Montecristi Panama hat from Ecuador. Hand-woven by master artisans using the finest toquilla straw. Takes over 3 months to create. Features the traditional "superfino" weave pattern.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80'
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
    title: 'Tibetan Nomad Hat',
    price: 110,
    originalPrice: 160,
    condition: 'Good',
    category: 'Winter Hats',
    brand: 'Traditional',
    size: 'L',
    color: 'Brown & Red',
    description: 'Authentic Tibetan nomad hat from the highlands. Made from yak wool and decorated with traditional symbols. Features colorful tassels and protective amulets. A rare piece from the roof of the world.',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80'
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
    title: 'Mexican Charro Sombrero',
    price: 180,
    originalPrice: 250,
    condition: 'New',
    category: 'Sun Hats',
    brand: 'Traditional',
    size: 'L',
    color: 'Black & Silver',
    description: 'Authentic Mexican charro sombrero from Jalisco. Handcrafted by master sombrereros using traditional techniques. Features intricate silver embroidery and genuine horsehair details. A true piece of Mexican heritage.',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80'
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
    title: 'Russian Ushanka',
    price: 95,
    originalPrice: 140,
    condition: 'Good',
    category: 'Winter Hats',
    brand: 'Traditional',
    size: 'M',
    color: 'Brown',
    description: 'Authentic Russian ushanka from Siberia. Made from genuine rabbit fur with leather details. Features the classic ear flaps and Soviet-era military style. A piece of Russian winter heritage.',
    images: [
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=600&q=80'
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
    title: 'Korean Gat',
    price: 200,
    originalPrice: 300,
    condition: 'Good',
    category: 'Fedoras',
    brand: 'Traditional',
    size: 'M',
    color: 'Black',
    description: 'Authentic Korean traditional hat (Gat) from the Joseon period. Made from horsehair and bamboo. Features the distinctive cylindrical shape and delicate weaving. A rare piece of Korean cultural heritage.',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80'
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
    title: 'Scottish Tam O\'Shanter',
    price: 75,
    originalPrice: 110,
    condition: 'New',
    category: 'Winter Hats',
    brand: 'Traditional',
    size: 'One Size',
    color: 'Navy',
    description: 'Authentic Scottish Tam O\'Shanter from the Highlands. Made from premium wool with traditional clan tartan. Features the classic pom-pom and hand-stitched details. A piece of Scottish heritage.',
    images: [
      'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=600&q=80'
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
    title: 'Indonesian Songkok',
    price: 45,
    originalPrice: 65,
    condition: 'New',
    category: 'Fedoras',
    brand: 'Traditional',
    size: 'M',
    color: 'Black',
    description: 'Traditional Indonesian Songkok from Java. Handcrafted using premium velvet and traditional techniques. Features the distinctive shape and cultural significance. A piece of Indonesian heritage.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80'
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
    title: 'Greek Fisherman\'s Cap',
    price: 55,
    originalPrice: 85,
    condition: 'Good',
    category: 'Baseball Caps',
    brand: 'Traditional',
    size: 'M',
    color: 'Navy',
    description: 'Authentic Greek fisherman\'s cap from the Aegean Islands. Made from traditional wool with leather details. Features the classic shape and hand-stitched elements. A piece of Mediterranean maritime heritage.',
    images: [
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=600&q=80'
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