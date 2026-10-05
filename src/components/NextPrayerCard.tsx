import React from 'react';
import { AnalogClock } from './AnalogClock';
import { SunriseFajrIcon } from './PrayerIcons';

interface NextPrayerCardProps {
  currentTime: Date;
  isLiveTime: boolean;
  nextPrayerName: string;
  hours: number;
  minutes: number;
  seconds: number;
  onCardClick?: () => void;
}

export const NextPrayerCard: React.FC<NextPrayerCardProps> = ({
  currentTime,
  isLiveTime,
  nextPrayerName,
  hours,
  minutes,
  seconds,
  onCardClick,
}) => {
  const format2 = (val: number) => String(Math.max(0, val)).padStart(2, '0');

  return (
    <div
      id="hero-clock-capsule"
      onClick={onCardClick}
      className="relative flex flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5 rounded-2xl
        bg-[#0c1f42]/85 backdrop-blur-md border border-blue-400/25 shadow-2xl select-none shrink-0 cursor-pointer"
    >
      {/* Left: Analog Clock */}
      <div className="shrink-0 flex items-center justify-center">
        <AnalogClock
          currentTime={currentTime}
          isLiveTime={isLiveTime}
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
        />
      </div>

      {/* Right: Next Prayer & Digital Countdown */}
      <div className="flex flex-col justify-center text-left pl-1 sm:pl-2">
        {/* Header: Golden Sunrise Icon + Next Prayer & Name */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
          <div className="shrink-0">
            <SunriseFajrIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11" color="#FACC15" />
          </div>
          <div>
            <span className="block text-[11px] sm:text-xs md:text-sm font-medium text-slate-300 leading-tight">
              Next Prayer
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide leading-none mt-0.5">
              {nextPrayerName}
            </h2>
          </div>
        </div>

        {/* Digital Countdown Timer: 06 : 43 : 16 */}
        <div className="mt-1 sm:mt-2">
          <div className="flex items-center justify-start gap-1 sm:gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white font-mono tracking-tight leading-none">
            <span className="inline-block w-[1.3em] text-center">{format2(hours)}</span>
            <span className="text-white/80 font-sans pb-1">:</span>
            <span className="inline-block w-[1.3em] text-center">{format2(minutes)}</span>
            <span className="text-white/80 font-sans pb-1">:</span>
            <span className="inline-block w-[1.3em] text-center">{format2(seconds)}</span>
          </div>

          {/* Sub-labels: HOURS | MINUTES | SECONDS */}
          <div className="flex items-center justify-start gap-1 sm:gap-2 mt-1.5 text-slate-300 text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-widest uppercase">
            <span className="inline-block w-[1.3em] text-center">HOURS</span>
            <span className="opacity-0 font-sans">:</span>
            <span className="inline-block w-[1.3em] text-center">MINUTES</span>
            <span className="opacity-0 font-sans">:</span>
            <span className="inline-block w-[1.3em] text-center">SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
