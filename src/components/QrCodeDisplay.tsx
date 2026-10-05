import React from 'react';

interface QrCodeDisplayProps {
  label?: string;
  subLabel?: string;
  onClick?: () => void;
}

export const QrCodeDisplay: React.FC<QrCodeDisplayProps> = ({
  label = 'Scan for',
  subLabel = 'CMZ App',
  onClick,
}) => {
  return (
    <div
      id="masjid-qr-card"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      title={onClick ? 'Click to open APK & Installation options' : undefined}
      className={`flex flex-col items-center justify-center p-2 sm:p-3 md:p-3.5 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg min-w-0 shrink-0 select-none transition-all ${
        onClick ? 'cursor-pointer hover:border-cyan-400/50 hover:bg-black/50 active:scale-95' : ''
      }`}
    >
      {/* White rounded badge for QR code */}
      <div className="bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-md">
        <svg
          viewBox="0 0 100 100"
          className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18"
          fill="#000000"
        >
          {/* Top-Left Corner Finder Pattern */}
          <rect x="5" y="5" width="28" height="28" fill="#000" rx="3" />
          <rect x="9" y="9" width="20" height="20" fill="#fff" rx="1.5" />
          <rect x="13" y="13" width="12" height="12" fill="#000" rx="1" />

          {/* Top-Right Corner Finder Pattern */}
          <rect x="67" y="5" width="28" height="28" fill="#000" rx="3" />
          <rect x="71" y="9" width="20" height="20" fill="#fff" rx="1.5" />
          <rect x="75" y="13" width="12" height="12" fill="#000" rx="1" />

          {/* Bottom-Left Corner Finder Pattern */}
          <rect x="5" y="67" width="28" height="28" fill="#000" rx="3" />
          <rect x="9" y="71" width="20" height="20" fill="#fff" rx="1.5" />
          <rect x="13" y="75" width="12" height="12" fill="#000" rx="1" />

          {/* Alignment and timing patterns */}
          <rect x="38" y="10" width="5" height="5" />
          <rect x="48" y="10" width="5" height="5" />
          <rect x="58" y="10" width="5" height="5" />
          <rect x="10" y="38" width="5" height="5" />
          <rect x="10" y="48" width="5" height="5" />
          <rect x="10" y="58" width="5" height="5" />

          {/* Data Modules */}
          <rect x="38" y="24" width="5" height="5" />
          <rect x="44" y="28" width="6" height="6" />
          <rect x="54" y="24" width="6" height="5" />
          
          <rect x="42" y="42" width="16" height="16" fill="#000" rx="2" />
          <rect x="46" y="46" width="8" height="8" fill="#fff" />
          
          <rect x="24" y="38" width="5" height="5" />
          <rect x="30" y="44" width="6" height="5" />
          <rect x="24" y="52" width="6" height="6" />
          
          <rect x="68" y="38" width="6" height="5" />
          <rect x="76" y="44" width="5" height="5" />
          <rect x="84" y="38" width="6" height="6" />
          <rect x="70" y="52" width="5" height="5" />
          <rect x="80" y="54" width="6" height="5" />

          <rect x="38" y="68" width="5" height="5" />
          <rect x="48" y="72" width="6" height="5" />
          <rect x="56" y="68" width="5" height="5" />
          <rect x="42" y="82" width="5" height="6" />
          <rect x="52" y="80" width="6" height="6" />

          <rect x="68" y="68" width="6" height="5" />
          <rect x="78" y="72" width="5" height="6" />
          <rect x="86" y="68" width="5" height="5" />
          <rect x="72" y="82" width="5" height="6" />
          <rect x="82" y="80" width="6" height="6" />
        </svg>
      </div>

      {/* Caption Text */}
      <div className="mt-2 text-center text-white select-none">
        <p className="text-[11px] sm:text-[13px] leading-tight font-medium text-white/90">
          {label}
        </p>
        <p className="text-[12px] sm:text-[14px] leading-tight font-bold text-white tracking-wide">
          {subLabel}
        </p>
      </div>
    </div>
  );
};
