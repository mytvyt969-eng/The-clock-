import React from 'react';
import { Volume2 } from 'lucide-react';

interface MarqueeTickerProps {
  announcement: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ announcement }) => {
  // Split announcements if pipe separated, or display directly
  const segments = announcement
    .split('|')
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div
      id="bottom-announcement-ticker"
      className="w-full bg-[#020612]/90 backdrop-blur-md border-t border-blue-500/20 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 flex items-center gap-3 sm:gap-4 select-none shrink-0"
    >
      {/* Sound / Speaker Icon */}
      <div className="shrink-0 flex items-center justify-center text-white">
        <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>

      {/* Thin vertical separator */}
      <div className="w-[1px] h-5 bg-white/20 shrink-0" />

      {/* Marquee Text Segments */}
      <div className="flex-1 overflow-hidden relative">
        <div className="flex items-center gap-6 sm:gap-8 whitespace-nowrap text-white/95 text-xs sm:text-sm md:text-base font-medium tracking-wide">
          {segments.map((seg, idx) => (
            <React.Fragment key={idx}>
              <span>{seg}</span>
              {idx < segments.length - 1 && (
                <span className="text-white/40 font-light">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
