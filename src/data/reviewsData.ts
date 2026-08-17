import { Review, GalleryItem } from '../types';

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    name: 'Pooja Sharma',
    location: 'Jagatpura, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: '2 weeks ago',
    review: 'Rented the Royal Red Heritage Lehenga for my wedding day. Honestly nobody could believe it was rented! The fitting was tailored to perfection, freshly dry-cleaned, and the WhatsApp booking was so smooth. Saved over ₹80,000!',
    outfitWorn: 'Royal Red Heritage Bridal Lehenga',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Neha Rathore',
    location: 'Vaishali Nagar, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: '1 month ago',
    review: 'Found this gem on Instagram (@elegant_rentaldress) and visited their showroom at Khatushyam Plaza, Jagatpura. The trial was so comfortable and the staff helped me choose the perfect pastel lehenga for my engagement.',
    outfitWorn: 'Pastel Blush Pink Engagement Lehenga',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Ananya Jain',
    location: 'Malviya Nagar, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: '3 weeks ago',
    review: 'The Stardust Black Gown was an absolute showstopper at my cousin’s cocktail night. Security deposit was refunded immediately upon return with zero hassle. Will definitely rent again!',
    outfitWorn: 'Stardust Black Embellished Cocktail Gown',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Simran Choudhary',
    location: 'Mansarovar, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'Last month',
    review: 'Super clean, premium quality outfits and extremely affordable rental prices. Why buy an outfit for ₹60,000 just to wear once when you can rent designer pieces for ₹3,000?',
    outfitWorn: 'Champagne Gold Foil & Sequin Lehenga',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Ritu Khandelwal',
    location: 'Raja Park, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: '2 months ago',
    review: 'Emerald velvet lehenga was super royal! Great fabric, no heavy wear tear, pristine condition. The owner is very polite and helpful. 10/10 recommendation for all Jaipur brides!',
    outfitWorn: 'Emerald Velvet Designer Bridal Lehenga',
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Heritage Bridal Look in Jaipur',
    category: 'bridal',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
    likes: 428,
    comments: 34,
    instagramUrl: 'https://www.instagram.com/elegant_rentaldress/',
    alt: 'Bridal Lehenga on rent in Jaipur'
  },
  {
    id: 'gal-2',
    title: 'Pastel Floral Engagement Twirl',
    category: 'bridal',
    imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop',
    likes: 512,
    comments: 48,
    instagramUrl: 'https://www.instagram.com/elegant_rentaldress/',
    alt: 'Engagement Lehenga on rent Jagatpura'
  },
  {
    id: 'gal-3',
    title: 'Midnight Black Cocktail Gown Shoot',
    category: 'gown',
    imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop',
    likes: 389,
    comments: 26,
    instagramUrl: 'https://www.instagram.com/elegant_rentaldress/',
    alt: 'Designer Reception Gown rental'
  },
  {
    id: 'gal-5',
    title: 'Royal Blue Editorial Campaign',
    category: 'models',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    likes: 341,
    comments: 19,
    instagramUrl: 'https://www.instagram.com/elegant_rentaldress/',
    alt: 'Fashion Model photoshoot Jaipur rental dress'
  },
  {
    id: 'gal-6',
    title: 'Real Bride Pooja on her Wedding Day',
    category: 'clients',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    likes: 890,
    comments: 92,
    instagramUrl: 'https://www.instagram.com/elegant_rentaldress/',
    alt: 'Happy bride wearing rented designer lehenga'
  },
  {
    id: 'gal-7',
    title: 'Golden Shimmer Sangeet Look',
    category: 'clients',
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop',
    likes: 415,
    comments: 31,
    instagramUrl: 'https://www.instagram.com/elegant_rentaldress/',
    alt: 'Gold Sequin Lehenga for Sangeet'
  },
  {
    id: 'gal-8',
    title: 'Festive Haldi Indo-Western Set',
    category: 'models',
    imageUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=800&auto=format&fit=crop',
    likes: 367,
    comments: 22,
    instagramUrl: 'https://www.instagram.com/elegant_rentaldress/',
    alt: 'Haldi outfit on rent in Jaipur'
  }
];
