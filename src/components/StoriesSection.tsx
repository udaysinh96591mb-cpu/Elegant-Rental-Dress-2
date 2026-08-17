import React, { useState } from 'react';
import { Sparkles, Instagram, Play } from 'lucide-react';
import { STORIES_DATA } from '../data/storiesData';
import { StoryModal } from './StoryModal';
import { INSTAGRAM_URL } from '../utils/helpers';

export const StoriesSection: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number | null>(null);

  return (
    <div className="bg-[#FFFDF9] py-8 sm:py-10 border-b border-[#E7E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Mini Header with Instagram Handle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white">
              <Instagram className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-xs font-bold font-cinzel text-[#1C1917] tracking-wider uppercase">
                Story Highlights
              </span>
              <span className="hidden sm:inline text-xs text-[#78716C] ml-2">
                Tap to watch customer looks & boutique previews
              </span>
            </div>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#854D0E] hover:text-[#B45309] flex items-center gap-1 group"
          >
            <span>@elegant_rentaldress</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        {/* Stories Horizontal Strip */}
        <div className="flex items-center justify-start sm:justify-center gap-5 sm:gap-8 overflow-x-auto pb-2 no-scrollbar">
          {STORIES_DATA.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryIdx(idx)}
              className="flex flex-col items-center gap-2 shrink-0 group focus:outline-none"
            >
              {/* Instagram Story Gradient Ring */}
              <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <div className="p-0.5 rounded-full bg-white">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden relative bg-[#FAF7F2]">
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
                    
                    {/* Play Badge */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-6 h-6 rounded-full bg-white/90 text-[#1C1917] flex items-center justify-center shadow-xs">
                        <Play className="w-3 h-3 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Title */}
              <span className="text-[11px] sm:text-xs font-medium text-[#292524] group-hover:text-[#854D0E] text-center max-w-[76px] truncate transition-colors">
                {story.title}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* Story Fullscreen Player */}
      {activeStoryIdx !== null && (
        <StoryModal
          stories={STORIES_DATA}
          activeStoryIndex={activeStoryIdx}
          onClose={() => setActiveStoryIdx(null)}
        />
      )}
    </div>
  );
};
