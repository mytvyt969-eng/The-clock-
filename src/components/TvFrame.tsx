import React from 'react';

interface TvFrameProps {
  children: React.ReactNode;
  isFramed: boolean;
}

export const TvFrame: React.FC<TvFrameProps> = ({ children, isFramed }) => {
  if (!isFramed) {
    // Pure fullscreen landscape TV display for digital signage & direct Android TV deployment
    return (
      <div className="w-full h-full max-w-[calc(100vh*16/9)] max-h-[calc(100vw*9/16)] aspect-video relative overflow-hidden flex items-center justify-center mx-auto shadow-2xl">
        {children}
      </div>
    );
  }

  // TV Showcase view matching physical TV in 16:9 landscape
  return (
    <div className="relative w-full h-full max-w-[calc(100vh*16/9)] max-h-[calc(100vw*9/16)] aspect-video mx-auto flex flex-col items-center justify-center p-1 sm:p-2">
      {/* Outer TV Bezel Housing */}
      <div className="relative w-full h-full bg-[#0a0d12] rounded-lg p-[4px] sm:p-[6px] md:p-[8px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-slate-800/80 flex flex-col overflow-hidden">
        {/* Screen Area (16:9 inner canvas) */}
        <div className="relative w-full flex-1 overflow-hidden rounded-[4px] bg-black">
          {children}
        </div>

        {/* Bottom Bezel with subtle Brand Logo */}
        <div className="relative w-full h-3.5 sm:h-4 bg-[#0a0d12] flex items-center justify-center shrink-0">
          <span className="text-[8px] sm:text-[9px] tracking-[0.2em] font-semibold text-slate-500 uppercase select-none">
            ANDROID TV • LANDSCAPE
          </span>
          {/* Power / Standby LED */}
          <div className="absolute right-3 sm:right-5 bottom-0.5 w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
        </div>
      </div>
    </div>
  );
};

