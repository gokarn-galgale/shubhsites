import React from 'react';
import { Scroll } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-stone-950/95 border-b border-stone-800 shadow-2xl backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Flag */}
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-10 group cursor-pointer">
                {/* Pole */}
                <div className="absolute left-0 h-full w-1 bg-stone-400 rounded-full"></div>
                {/* Flag */}
                <div className="absolute left-1 top-0 w-12 h-8 origin-left animate-wave-slow">
                    <svg viewBox="0 0 100 60" className="w-full h-full drop-shadow-lg filter">
                        <path d="M0,0 L100,30 L0,60 Z" fill="#ea580c" /> {/* Saffron Triangle */}
                    </svg>
                </div>
            </div>
            <span className="hidden md:block font-heading text-xl text-amber-500 tracking-wide mt-1">
              शिवकालीन स्वराज्य
            </span>
          </div>

          {/* Center: Monogram */}
          <div className="flex flex-col items-center justify-center">
            <div className="font-royal text-2xl md:text-3xl text-amber-500 tracking-[0.2em]">
              रा <span className="text-stone-500 text-xl">&</span> प्रि
            </div>
          </div>

          {/* Right: RSVP CTA */}
          <a 
            href="#rsvp"
            className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 border border-amber-700/50 rounded text-amber-500 text-sm font-heading tracking-widest transition-colors"
          >
            <Scroll className="w-4 h-4" />
            <span>उपस्थिती</span>
          </a>
        </div>
      </div>
      
      {/* Decorative border bottom */}
      <div className="h-1 w-full bg-gradient-to-r from-stone-950 via-amber-700 to-stone-950"></div>
    </header>
  );
};