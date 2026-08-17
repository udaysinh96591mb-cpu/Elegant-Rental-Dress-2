export type OutfitCategory = 'bridal' | 'gown' | 'party' | 'engagement' | 'wedding_guest';

export type OutfitOccasion = 'Wedding' | 'Bridal' | 'Reception' | 'Engagement' | 'Party' | 'Festive' | 'Cocktail' | 'Sangeet' | 'Haldi / Mehendi';

export type OutfitStyle = 'Lehenga' | 'Gown' | 'Party Wear' | 'Designer Dress' | 'Anarkali' | 'Indo-Western';

export type BudgetRange = 'all' | 'under3000' | '3000-5000' | '5000-10000' | 'above10000';

export interface Outfit {
  id: string;
  name: string;
  code: string;
  category: OutfitCategory;
  occasion: OutfitOccasion[];
  style: OutfitStyle;
  rentalPrice: number;
  originalPrice: number;
  duration: string; // e.g. "3 Days"
  sizes: string[];
  colors: string[];
  primaryColor: string;
  images: string[];
  fabric: string;
  workDetails: string;
  description: string;
  inclusions: string[];
  featured?: boolean;
  isNew?: boolean;
  trending?: boolean;
  rating: number;
  reviewCount: number;
  depositAmount: number;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  review: string;
  outfitWorn: string;
  outfitImage?: string;
  verified: boolean;
}

export interface StoryHighlight {
  id: string;
  title: string;
  coverImage: string;
  items: {
    id: string;
    type: 'image' | 'video';
    mediaUrl: string;
    caption: string;
    tag?: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'gown' | 'models' | 'clients';
  imageUrl: string;
  likes: number;
  comments: number;
  instagramUrl: string;
  alt: string;
}

export interface FilterState {
  occasion: string;
  style: string;
  budget: BudgetRange;
  color: string;
  searchQuery: string;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
}
