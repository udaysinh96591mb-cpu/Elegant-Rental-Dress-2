import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { StoriesSection } from './components/StoriesSection';
import { BrowseCategories } from './components/BrowseCategories';
import { HowItWorks } from './components/HowItWorks';
import { FeaturedCollection } from './components/FeaturedCollection';
import { RentalCalculator } from './components/RentalCalculator';
import { InstagramGallery } from './components/InstagramGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { OfferBanner } from './components/OfferBanner';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AppointmentModal } from './components/AppointmentModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SpinWheelModal } from './components/SpinWheelModal';
import { StyleQuizModal } from './components/StyleQuizModal';
import { MoodboardDrawer } from './components/MoodboardDrawer';
import { LiveBookingTicker } from './components/LiveBookingTicker';
import { FloatingEngagementHub } from './components/FloatingEngagementHub';
import { Outfit } from './types';
import { OUTFITS } from './data/outfitsData';

export default function App() {
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isMoodboardOpen, setIsMoodboardOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [savedOutfitIds, setSavedOutfitIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('erd_saved_outfits');
      return saved ? JSON.parse(saved) : ['erd-01', 'erd-03'];
    } catch {
      return ['erd-01', 'erd-03'];
    }
  });

  const handleToggleSave = (id: string) => {
    setSavedOutfitIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('erd_saved_outfits', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1917]">
      {/* Header */}
      <Header
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onSelectCategory={handleSelectCategory}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenSpinWheel={() => setIsSpinWheelOpen(true)}
        onOpenMoodboard={() => setIsMoodboardOpen(true)}
        savedCount={savedOutfitIds.length}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Full-Screen Cinematic Fashion Hero with Dynamic Looks Switcher */}
        <Hero
          onExploreClick={scrollToCollection}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenSpinWheel={() => setIsSpinWheelOpen(true)}
        />

        {/* Minimal Gold Trust Bar */}
        <TrustBar />

        {/* Instagram Profile Story Highlights */}
        <StoriesSection />

        {/* Browse by Collection Category Cards */}
        <BrowseCategories onSelectCategory={handleSelectCategory} />

        {/* How Rental Works (3 Steps) */}
        <HowItWorks onOpenAppointment={() => setIsAppointmentOpen(true)} />

        {/* Featured Rental Collection Grid with Filters & Details */}
        <FeaturedCollection
          onQuickView={(outfit) => setSelectedOutfit(outfit)}
          savedOutfitIds={savedOutfitIds}
          onToggleSave={handleToggleSave}
          activeCategory={activeCategory}
          onCategoryChange={(cat) => setActiveCategory(cat)}
        />

        {/* Rent vs Buy Interactive Savings Calculator */}
        <RentalCalculator />

        {/* The Elegant Look Instagram Gallery */}
        <InstagramGallery />

        {/* Customer Reviews & Testimonials */}
        <ReviewsSection />

        {/* Why Choose ERD (6 Core Pillars) */}
        <WhyChooseUs onDiscoverMore={scrollToCollection} />

        {/* The Elegant Experience / Editorial Story */}
        <AboutSection />

        {/* Promotional Wedding Offer Banner */}
        <OfferBanner onExploreClick={scrollToCollection} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Store Location & Appointment Scheduling Form */}
        <ContactSection onOpenAppointment={() => setIsAppointmentOpen(true)} />
      </main>

      {/* Final CTA Banner & Luxury Footer */}
      <Footer
        onExploreClick={scrollToCollection}
        onSelectCategory={handleSelectCategory}
      />

      {/* Floating Engagement Hub (Spin Wheel, Style Matcher, Moodboard) */}
      <FloatingEngagementHub
        onOpenSpinWheel={() => setIsSpinWheelOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenMoodboard={() => setIsMoodboardOpen(true)}
        savedCount={savedOutfitIds.length}
      />

      {/* Live Social Proof / Booking Ticker */}
      <LiveBookingTicker onSelectOutfit={(outfit) => setSelectedOutfit(outfit)} />

      {/* Mobile Sticky Android App-like Navigation Bar */}
      <MobileStickyBar
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onExploreClick={scrollToCollection}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenMoodboard={() => setIsMoodboardOpen(true)}
        savedCount={savedOutfitIds.length}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        outfit={selectedOutfit}
        onClose={() => setSelectedOutfit(null)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        isSaved={selectedOutfit ? savedOutfitIds.includes(selectedOutfit.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* Showroom Trial Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      {/* Interactive Spin the Lucky Wheel Modal */}
      <SpinWheelModal
        isOpen={isSpinWheelOpen}
        onClose={() => setIsSpinWheelOpen(false)}
      />

      {/* Interactive AI Wedding Stylist Quiz Modal */}
      <StyleQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectOutfit={(outfit) => setSelectedOutfit(outfit)}
      />

      {/* Interactive Bridal Moodboard & Wishlist Drawer */}
      <MoodboardDrawer
        isOpen={isMoodboardOpen}
        onClose={() => setIsMoodboardOpen(false)}
        savedOutfitIds={savedOutfitIds}
        onToggleSave={handleToggleSave}
        onSelectOutfit={(outfit) => setSelectedOutfit(outfit)}
        onExploreMore={scrollToCollection}
      />
    </div>
  );
}

