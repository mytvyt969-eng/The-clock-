import React from 'react';
import { FullSunIcon, SolarSunriseIcon, SolarSunsetIcon } from './PrayerIcons';

interface FajarSolarCardsProps {
  fajarStart: string;
  fajarEnd: string;
  sunrise: string;
  sunset: string;
}

export const FajarSolarCards: React.FC<FajarSolarCardsProps> = ({
  fajarStart,
  fajarEnd,
  sunrise,
  sunset,
}) => {
  return (
    <div
      id="fajar-solar-cards-container"
      className="flex flex-col gap-2.5 sm:gap-3 flex-1 max-w-[320px] select-none"
    >
      {/* Top Card: Fajar Start / Fajar End */}
      <div
        id="fajar-limits-card"
        className="p-3 sm:p-3.5 md:p-4 rounded-2xl bg-[#0c1f42]/85 backdrop-blur-md border border-blue-400/25 shadow-2xl flex flex-col justify-between"
      >
        {/* Top Centered Golden Sun Icon */}
        <div className="flex justify-center mb-1">
          <FullSunIcon className="w-6 h-6 sm:w-7 sm:h-7" color="#FACC15" />
        </div>

        {/* Two Columns: Fajar Start & Fajar End */}
        <div className="grid grid-cols-2 divide-x divide-blue-400/20 text-center">
          <div className="pr-2">
            <span className="block text-[11px] sm:text-xs font-medium text-slate-300">
              Fajar Start
            </span>
            <p className="text-sm sm:text-lg md:text-xl font-bold text-white tracking-tight mt-0.5">
              {fajarStart}
            </p>
          </div>
          <div className="pl-2">
            <span className="block text-[11px] sm:text-xs font-medium text-slate-300">
              Fajar End
            </span>
            <p className="text-sm sm:text-lg md:text-xl font-bold text-white tracking-tight mt-0.5">
              {fajarEnd}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Card: Sunrise / Sunset */}
      <div
        id="solar-times-card"
        className="p-2.5 sm:p-3 md:p-3.5 rounded-2xl bg-[#0c1f42]/85 backdrop-blur-md border border-blue-400/25 shadow-2xl grid grid-cols-2 divide-x divide-blue-400/20"
      >
        {/* Sunrise Column */}
        <div className="flex items-center justify-center gap-2 pr-2">
          <div className="shrink-0">
            <SolarSunriseIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] sm:text-[11px] font-medium text-slate-300 leading-tight">
              Sunrise
            </span>
            <p className="text-xs sm:text-sm md:text-base font-bold text-white tracking-tight mt-0.5 leading-none">
              {sunrise}
            </p>
          </div>
        </div>

        {/* Sunset Column */}
        <div className="flex items-center justify-center gap-2 pl-2">
          <div className="shrink-0">
            <SolarSunsetIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] sm:text-[11px] font-medium text-slate-300 leading-tight">
              Sunset
            </span>
            <p className="text-xs sm:text-sm md:text-base font-bold text-white tracking-tight mt-0.5 leading-none">
              {sunset}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
