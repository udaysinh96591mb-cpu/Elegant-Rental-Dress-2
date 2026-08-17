import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, SlidersHorizontal } from 'lucide-react';
import { Outfit, FilterState } from '../types';
import { ProductCard } from './ProductCard';
import { FilterSection } from './FilterSection';
import { OUTFITS } from '../data/outfitsData';

interface FeaturedCollectionProps {
  onQuickView: (outfit: Outfit) => void;
  savedOutfitIds: string[];
  onToggleSave: (id: string) => void;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  onQuickView,
  savedOutfitIds,
  onToggleSave,
  activeCategory,
  onCategoryChange
}) => {
  const [internalTab, setInternalTab] = useState<'all' | 'bridal' | 'gown' | 'party' | 'engagement' | 'wedding_guest'>('all');
  const activeTab = (activeCategory as any) || internalTab;

  const handleTabSelect = (tabId: string) => {
    setInternalTab(tabId as any);
    if (onCategoryChange) {
      onCategoryChange(tabId);
    }
  };

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    occasion: 'All Occasions',
    style: 'All Styles',
    budget: 'all',
    color: 'All Colors',
    searchQuery: '',
    sortBy: 'featured'
  });

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters({
      occasion: 'All Occasions',
      style: 'All Styles',
      budget: 'all',
      color: 'All Colors',
      searchQuery: '',
      sortBy: 'featured'
    });
    handleTabSelect('all');
  };

  // Filter outfits
  const filteredOutfits = OUTFITS.filter((outfit) => {
    // Category tab filter
    if (activeTab !== 'all' && outfit.category !== activeTab) {
      return false;
    }

    // Occasion filter
    if (
      filters.occasion !== 'All Occasions' &&
      !outfit.occasion.includes(filters.occasion as any)
    ) {
      return false;
    }

    // Style filter
    if (filters.style !== 'All Styles' && outfit.style !== filters.style) {
      return false;
    }

    // Budget filter
    if (filters.budget === 'under3000' && outfit.rentalPrice >= 3000) return false;
    if (filters.budget === '3000-5000' && (outfit.rentalPrice < 3000 || outfit.rentalPrice > 5000)) return false;
    if (filters.budget === '5000-10000' && (outfit.rentalPrice < 5000 || outfit.rentalPrice > 10000)) return false;
    if (filters.budget === 'above10000' && outfit.rentalPrice < 10000) return false;

    // Color filter
    if (filters.color !== 'All Colors' && outfit.primaryColor !== filters.color) {
      return false;
    }

    // Search query
    if (filters.searchQuery.trim() !== '') {
      const q = filters.searchQuery.toLowerCase();
      const matchName = outfit.name.toLowerCase().includes(q);
      const matchCode = outfit.code.toLowerCase().includes(q);
      const matchFabric = outfit.fabric.toLowerCase().includes(q);
      const matchWork = outfit.workDetails.toLowerCase().includes(q);
      const matchOccasion = outfit.occasion.some((o) => o.toLowerCase().includes(q));
      if (!matchName && !matchCode && !matchFabric && !matchWork && !matchOccasion) {
        return false;
      }
    }

    return true;
  });

  // Sort
  const sortedOutfits = [...filteredOutfits].sort((a, b) => {
    if (filters.sortBy === 'price-low') return a.rentalPrice - b.rentalPrice;
    if (filters.sortBy === 'price-high') return b.rentalPrice - a.rentalPrice;
    if (filters.sortBy === 'rating') return b.rating - a.rating;
    if (filters.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const categoriesTabs = [
    { id: 'all', label: 'All Outfits' },
    { id: 'bridal', label: 'Bridal Lehengas' },
    { id: 'gown', label: 'Designer Gowns' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'party', label: 'Party Wear' },
    { id: 'wedding_guest', label: 'Wedding Guest' }
  ];

  return (
    <section id="collection" className="py-16 sm:py-24 bg-[#1C1917] text-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#322B28] border border-[#D4AF37]/40 text-[#E5C378] text-[11px] font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Handpicked Jaipur Atelier Pieces</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] uppercase mb-3">
            FEATURED RENTAL COLLECTION
          </h2>
          <p className="text-sm sm:text-base text-[#A8A29E] font-cormorant text-lg sm:text-xl">
            Rent showstopping designer bridal lehengas, glamorous gowns & festive couture for 3 to 7 days.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* Category Tabs & Quick Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Horizontal category tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categoriesTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id)}
                  className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#C59E3F] text-[#1C1917] font-bold shadow-md'
                      : 'bg-[#292524] text-[#D6D3D1] hover:text-white hover:bg-[#322B28] border border-[#44403C]/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Filter toggle & Sort dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                showFilters
                  ? 'bg-[#E5C378] text-[#1C1917] border-[#E5C378]'
                  : 'bg-[#292524] text-[#E7E0D8] border-[#44403C] hover:border-[#D4AF37]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{showFilters ? 'Hide Filters' : 'Refine Filters'}</span>
            </button>

            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange({ sortBy: e.target.value as any })}
              className="bg-[#292524] border border-[#44403C] text-[#FAF7F2] text-xs rounded-full px-3 py-2 outline-none focus:border-[#D4AF37]"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">New Arrivals</option>
            </select>
          </div>
        </div>

        {/* Collapsible Filter Panel */}
        {showFilters && (
          <div className="text-[#1C1917] animate-fadeIn mb-8">
            <FilterSection
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              totalResults={sortedOutfits.length}
            />
          </div>
        )}

        {/* Product Cards Grid: 2 columns on mobile (Android standard) and up to 4 on desktop */}
        {sortedOutfits.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
            {sortedOutfits.map((outfit) => (
              <ProductCard
                key={outfit.id}
                outfit={outfit}
                onQuickView={onQuickView}
                isSaved={savedOutfitIds.includes(outfit.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#292524]/60 rounded-2xl border border-[#44403C] p-8">
            <p className="text-base text-[#D6D3D1] mb-4">
              No outfits match your exact filter criteria.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-[#1C1917] text-xs font-bold uppercase tracking-wider hover:bg-[#E5C378] transition-colors"
            >
              View All Outfits
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
