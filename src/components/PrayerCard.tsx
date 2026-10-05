import React from 'react';
import { PrayerTimeItem } from '../types/masjid';
import {
  SunriseFajrIcon,
  DhuhrSunIcon,
  AsrSunIcon,
  MaghribSunsetIcon,
  IshaMoonIcon,
} from './PrayerIcons';

interface PrayerCardProps {
  prayer: PrayerTimeItem;
  isActive: boolean;
  isFocused?: boolean;
  onClick?: () => void;
}

export const PrayerCard: React.FC<PrayerCardProps> = ({
  prayer,
  isActive,
  isFocused = false,
  onClick,
}) => {
  // Render corresponding icon matching screenshot
  const renderIcon = () => {
    switch (prayer.iconType) {
      case 'sunrise':
        return <SunriseFajrIcon className="w-6 h-6 sm:w-7 sm:h-7" color="#FACC15" />;
      case 'sun':
        return <DhuhrSunIcon className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'afternoon-sun':
        return <AsrSunIcon className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'sunset':
        return <MaghribSunsetIcon className="w-6 h-6 sm:w-7 sm:h-7" />;
      case 'moon':
        return <IshaMoonIcon className="w-6 h-6 sm:w-7 sm:h-7" />;
      default:
        return <SunriseFajrIcon className="w-6 h-6 sm:w-7 sm:h-7" color="#FACC15" />;
    }
  };

  return (
    <div
      id={`prayer-card-${prayer.id}`}
      onClick={onClick}
      tabIndex={0}
      className={`relative flex-1 min-w-0 p-3 sm:p-4 md:p-5 rounded-2xl cursor-pointer transition-all duration-300 select-none
        ${
          isActive
            ? 'bg-[#0e2a58]/95 backdrop-blur-xl border-2 border-cyan-400 shadow-[0_0_28px_rgba(56,189,248,0.55),inset_0_0_14px_rgba(56,189,248,0.2)]'
            : 'bg-[#0c1f42]/85 backdrop-blur-md border border-blue-400/25 shadow-xl hover:border-blue-400/40'
        }
        ${isFocused ? 'ring-4 ring-cyan-300 ring-offset-2 ring-offset-[#020713] scale-[1.02]' : ''}
      `}
    >
      {/* Top Row: Icon + Prayer Name */}
      <div className="flex items-center gap-2 sm:gap-2.5 mb-2.5 sm:mb-3">
        <div className="shrink-0">{renderIcon()}</div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-wide truncate">
          {prayer.name}
        </h3>
      </div>

      {/* Adhan Row */}
      <div className="mb-2 sm:mb-2.5">
        <span className="block text-[10px] sm:text-xs font-medium text-slate-300 leading-tight">
          Adhan
        </span>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight leading-none mt-0.5">
          {prayer.adhan}
        </p>
      </div>

      {/* Iqamah Row */}
      <div>
        <span className="block text-[10px] sm:text-xs font-medium text-slate-300 leading-tight">
          Iqamah
        </span>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight leading-none mt-0.5">
          {prayer.iqamah}
        </p>
      </div>
    </div>
  );
};
