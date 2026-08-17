import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, Heart, Share2, Instagram } from 'lucide-react';
import { StoryHighlight } from '../types';
import { getWhatsAppUrl, INSTAGRAM_URL } from '../utils/helpers';

interface StoryModalProps {
  stories: StoryHighlight[];
  activeStoryIndex: number;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  stories,
  activeStoryIndex,
  onClose,
}) => {
  const [currentStoryIdx, setCurrentStoryIdx] = useState(activeStoryIndex);
  const [currentItemIdx, setCurrentItemIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentStory = stories[currentStoryIdx];
  const currentItem = currentStory.items[currentItemIdx];

  // Auto advance timer
  useEffect(() => {
    setProgress(0);
    const duration = 5000; // 5 seconds per story
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentStoryIdx, currentItemIdx]);

  const handleNext = () => {
    if (currentItemIdx < currentStory.items.length - 1) {
      setCurrentItemIdx(currentItemIdx + 1);
    } else if (currentStoryIdx < stories.length - 1) {
      setCurrentStoryIdx(currentStoryIdx + 1);
      setCurrentItemIdx(0);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentItemIdx > 0) {
      setCurrentItemIdx(currentItemIdx - 1);
    } else if (currentStoryIdx > 0) {
      setCurrentStoryIdx(currentStoryIdx - 1);
      setCurrentItemIdx(stories[currentStoryIdx - 1].items.length - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close story"
        className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white bg-black/40 rounded-full"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Nav Chevrons for desktop */}
      {currentStoryIdx > 0 || currentItemIdx > 0 ? (
        <button
          onClick={handlePrev}
          aria-label="Previous story"
          className="hidden sm:flex absolute left-4 lg:left-12 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      ) : null}

      <button
        onClick={handleNext}
        aria-label="Next story"
        className="hidden sm:flex absolute right-4 lg:right-12 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Story Mobile Viewport Container */}
      <div className="relative w-full max-w-md h-[85vh] sm:h-[80vh] max-h-[750px] bg-[#1C1917] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between border border-[#44403C]">
        
        {/* Progress Bars */}
        <div className="absolute top-3 inset-x-3 z-30 flex gap-1">
          {currentStory.items.map((_, idx) => (
            <div
              key={idx}
              className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-white transition-all ease-linear"
                style={{
                  width:
                    idx < currentItemIdx
                      ? '100%'
                      : idx === currentItemIdx
                      ? `${progress}%`
                      : '0%',
                }}
              />
            </div>
          ))}
        </div>

        {/* Top Story User Header */}
        <div className="absolute top-6 inset-x-4 z-30 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border-2 border-[#D4AF37] overflow-hidden">
              <img
                src={currentStory.coverImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold font-cinzel tracking-wider">
                  elegant_rentaldress
                </span>
                <span className="text-[10px] text-white/70">• Jagatpura</span>
              </div>
              <span className="text-[10px] text-[#E5C378] font-medium block">
                {currentStory.title}
              </span>
            </div>
          </div>
        </div>

        {/* Media Background */}
        <div className="relative w-full h-full bg-[#181514]">
          <img
            src={currentItem.mediaUrl}
            alt={currentItem.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

          {/* Tap Navigation Zones (Left 40% = Prev, Right 60% = Next) */}
          <div
            onClick={handlePrev}
            className="absolute inset-y-0 left-0 w-1/3 z-20 cursor-pointer"
          />
          <div
            onClick={handleNext}
            className="absolute inset-y-0 right-0 w-2/3 z-20 cursor-pointer"
          />
        </div>

        {/* Bottom Caption & WhatsApp quick response */}
        <div className="absolute bottom-0 inset-x-0 p-5 z-30 text-white space-y-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          {currentItem.tag && (
            <span className="inline-block bg-[#854D0E] text-[#FAF7F2] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
              {currentItem.tag}
            </span>
          )}

          <p className="text-xs sm:text-sm text-[#FAF7F2] leading-relaxed font-sans">
            {currentItem.caption}
          </p>

          <div className="flex items-center gap-2 pt-1">
            <a
              href={getWhatsAppUrl(`Hi Elegant Rental Dress, I saw your Instagram story highlight "${currentStory.title}" and would like to ask about availability!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-white py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Reply on WhatsApp</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on Instagram"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
