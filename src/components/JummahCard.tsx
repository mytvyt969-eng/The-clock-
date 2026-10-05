import React from 'react';
import { MosqueLogo } from './PrayerIcons';

interface JummahCardProps {
  adhan: string;
  jamaat: string;
}

export const JummahCard: React.FC<JummahCardProps> = ({ adhan, jamaat }) => {
  return (
    <div
      id="jummah-card"
      className="relative flex-1 max-w-[280px] p-3.5 sm:p-4 md:p-5 rounded-2xl bg-[#0c1f42]/85 backdrop-blur-md border border-blue-400/25 shadow-2xl flex flex-col justify-between select-none"
    >
      {/* Header: Mosque Icon + Jummah */}
      <div className="flex items-center gap-2.5 pb-2.5 border-b border-blue-400/20">
        <div className="text-white shrink-0">
          <MosqueLogo className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide">
          Jummah
        </h2>
      </div>

      {/* Times: Adhan & Jamaat in 2 columns */}
      <div className="grid grid-cols-2 gap-2 pt-3">
        {/* Adhan */}
        <div className="text-center sm:text-left">
          <span className="block text-[11px] sm:text-xs font-medium text-slate-300">
            Adhan
          </span>
          <p className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight mt-0.5">
            {adhan}
          </p>
        </div>

        {/* Jamaat */}
        <div className="text-center sm:text-right">
          <span className="block text-[11px] sm:text-xs font-medium text-slate-300">
            Jamaat
          </span>
          <p className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight mt-0.5">
            {jamaat}
          </p>
        </div>
      </div>
    </div>
  );
};
