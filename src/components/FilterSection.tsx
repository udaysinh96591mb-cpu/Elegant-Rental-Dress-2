import React from 'react';
import { Filter, Search, RotateCcw, Sparkles } from 'lucide-react';
import { FilterState, BudgetRange } from '../types';

interface FilterSectionProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalResults: number;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults
}) => {
  const occasions = [
    'All Occasions',
    'Wedding',
    'Bridal',
    'Reception',
    'Engagement',
    'Party',
    'Festive',
    'Haldi / Mehendi',
    'Sangeet'
  ];

  const styles = [
    'All Styles',
    'Lehenga',
    'Gown',
    'Party Wear',
    'Designer Dress',
    'Indo-Western',
    'Anarkali'
  ];

  const budgetOptions: { label: string; value: BudgetRange }[] = [
    { label: 'All Budgets', value: 'all' },
    { label: 'Under ₹3,000', value: 'under3000' },
    { label: '₹3,000 – ₹5,000', value: '3000-5000' },
    { label: '₹5,000 – ₹10,000', value: '5000-10000' }
  ];

  const colors = [
    'All Colors',
    'Red',
    'Pink',
    'Green',
    'Black',
    'Blue',
    'Gold',
    'Yellow',
    'Wine',
    'White',
    'Purple'
  ];

  const hasActiveFilters =
    filters.occasion !== 'All Occasions' ||
    filters.style !== 'All Styles' ||
    filters.budget !== 'all' ||
    filters.color !== 'All Colors' ||
    filters.searchQuery.trim() !== '';

  return (
    <div className="bg-[#FFFDF9] rounded-2xl border border-[#E7E0D8] p-5 sm:p-8 shadow-sm mb-10">
      
      {/* Header with Title & Reset */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E0D8]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#854D0E] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Rental Finder</span>
          </div>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917] uppercase">
            FIND YOUR PERFECT OUTFIT
          </h3>
          <p className="text-xs text-[#78716C]">
            Filter by occasion, silhouette, budget and color to find your match.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#854D0E] hover:text-[#B45309] bg-[#FDF2F4] px-3 py-1.5 rounded-full transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}

          <div className="text-xs font-semibold bg-[#FAF7F2] border border-[#E7E0D8] px-3.5 py-1.5 rounded-full text-[#44403C]">
            <span>{totalResults}</span> Outfits Found
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="py-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by outfit name, code (e.g. ERD-BL01), fabric, or zardozi work..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7E0D8] focus:border-[#D4AF37] focus:bg-white text-xs sm:text-sm text-[#1C1917] placeholder:text-[#A8A29E] transition-all outline-none"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: '' })}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#A8A29E] hover:text-[#1C1917]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Filter Categories Grid */}
      <div className="space-y-4 pt-2">
        {/* Occasions */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-[#78716C] mb-2">
            Select Occasion:
          </label>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {occasions.map((occ) => {
              const isSelected = filters.occasion === occ;
              return (
                <button
                  key={occ}
                  onClick={() => onFilterChange({ occasion: occ })}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                    isSelected
                      ? 'bg-[#1C1917] text-[#FAF7F2] border-[#1C1917] shadow-xs'
                      : 'bg-[#FAF7F2] text-[#44403C] border-[#E7E0D8] hover:border-[#D4AF37]'
                  }`}
                >
                  {occ}
                </button>
              );
            })}
          </div>
        </div>

        {/* Style */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-[#78716C] mb-2">
            Select Style / Silhouette:
          </label>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {styles.map((style) => {
              const isSelected = filters.style === style;
              return (
                <button
                  key={style}
                  onClick={() => onFilterChange({ style })}
                  className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                    isSelected
                      ? 'bg-[#854D0E] text-white border-[#854D0E] shadow-xs'
                      : 'bg-[#FAF7F2] text-[#44403C] border-[#E7E0D8] hover:border-[#D4AF37]'
                  }`}
                >
                  {style}
                </button>
              );
            })}
          </div>
        </div>

        {/* Budget & Colors Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Budget */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#78716C] mb-2">
              Select Budget (3 Days Rental):
            </label>
            <div className="flex flex-wrap gap-1.5">
              {budgetOptions.map((b) => {
                const isSelected = filters.budget === b.value;
                return (
                  <button
                    key={b.value}
                    onClick={() => onFilterChange({ budget: b.value })}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                      isSelected
                        ? 'bg-[#25D366] text-white border-[#25D366] font-bold shadow-xs'
                        : 'bg-[#FAF7F2] text-[#44403C] border-[#E7E0D8] hover:border-[#D4AF37]'
                    }`}
                  >
                    {b.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color Palette Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#78716C] mb-2">
              Filter by Color:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {colors.map((c) => {
                const isSelected = filters.color === c;
                return (
                  <button
                    key={c}
                    onClick={() => onFilterChange({ color: c })}
                    className={`text-xs px-2.5 py-1.5 rounded-lg border font-medium transition-all ${
                      isSelected
                        ? 'bg-[#D4AF37] text-[#1C1917] font-bold border-[#D4AF37]'
                        : 'bg-[#FAF7F2] text-[#44403C] border-[#E7E0D8] hover:border-[#D4AF37]'
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
