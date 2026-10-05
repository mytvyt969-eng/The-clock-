import React from 'react';

// Top-Left Mosque Emblem and Jummah Card Icon (pure white)
export const MosqueLogo: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base step */}
    <rect x="12" y="86" width="76" height="5" rx="1.5" />
    <rect x="18" y="81" width="64" height="5" rx="1" />

    {/* Central building body */}
    <rect x="25" y="44" width="50" height="37" />

    {/* 3 Arched doors */}
    <path d="M 33,81 L 33,62 Q 38,55 43,62 L 43,81 Z" fill="#081734" />
    <path d="M 46,81 L 46,56 Q 50,49 54,56 L 54,81 Z" fill="#081734" />
    <path d="M 57,81 L 57,62 Q 62,55 67,62 L 67,81 Z" fill="#081734" />

    {/* Main central grand dome */}
    <path d="M 33,44 C 33,26 44,18 50,14 C 56,18 67,26 67,44 Z" />
    {/* Dome crescent finial */}
    <line x1="50" y1="14" x2="50" y2="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="50" cy="6" r="2" />

    {/* Left flank dome */}
    <path d="M 23,49 C 23,38 29,32 33,30 C 37,32 43,38 43,49 Z" opacity="0.95" />
    {/* Right flank dome */}
    <path d="M 57,49 C 57,38 63,32 67,30 C 71,32 77,38 77,49 Z" opacity="0.95" />

    {/* Left Minaret */}
    <rect x="14" y="32" width="6.5" height="49" />
    <polygon points="12,32 22.5,32 20,24 14.5,24" />
    <rect x="15" y="24" width="4.5" height="5" />
    <polygon points="14,24 20.5,24 17.2,14" />
    <line x1="17.2" y1="14" x2="17.2" y2="9" stroke="currentColor" strokeWidth="1.5" />

    {/* Right Minaret */}
    <rect x="79.5" y="32" width="6.5" height="49" />
    <polygon points="77.5,32 88,32 85.5,24 80,24" />
    <rect x="80.5" y="24" width="4.5" height="5" />
    <polygon points="79.5,24 86,24 82.8,14" />
    <line x1="82.8" y1="14" x2="82.8" y2="9" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Sunrise / Fajr Rising Sun with Horizon and Rays
export const SunriseFajrIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-7 h-7',
  color = '#FACC15',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Semi-circle rising sun */}
    <path d="M 15,30 A 9,9 0 0,1 33,30 Z" fill={color} />
    {/* Horizon line */}
    <line x1="8" y1="32" x2="40" y2="32" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="13" y1="36" x2="35" y2="36" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Rays */}
    <line x1="24" y1="14" x2="24" y2="8" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="16" y1="18" x2="12" y2="14" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="32" y1="18" x2="36" y2="14" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="11" y1="26" x2="6" y2="25" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="37" y1="26" x2="42" y2="25" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Full Golden Sun with Rays (for Fajar Limits & Dhuhr)
export const FullSunIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-8 h-8',
  color = '#FACC15',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="8" fill={color} />
    {/* Cardinal rays */}
    <line x1="24" y1="7" x2="24" y2="12" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="24" y1="36" x2="24" y2="41" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="7" y1="24" x2="12" y2="24" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="36" y1="24" x2="41" y2="24" stroke={color} strokeWidth="3" strokeLinecap="round" />
    {/* Diagonal rays */}
    <line x1="12" y1="12" x2="15.5" y2="15.5" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="32.5" y1="32.5" x2="36" y2="36" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="12" y1="36" x2="15.5" y2="32.5" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="32.5" y1="15.5" x2="36" y2="12" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Dhuhr Sun
export const DhuhrSunIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <FullSunIcon className={className} color="#FACC15" />
);

// Asr Afternoon Sun
export const AsrSunIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <FullSunIcon className={className} color="#FBBF24" />
);

// Maghrib Sunset (Orange / Coral red sun over horizon with rays)
export const MaghribSunsetIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sun sinking */}
    <path d="M 16,30 A 8,8 0 0,1 32,30 Z" fill="#FB923C" />
    {/* Horizon line */}
    <line x1="8" y1="32" x2="40" y2="32" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
    <line x1="13" y1="36" x2="35" y2="36" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
    {/* Rays */}
    <line x1="24" y1="15" x2="24" y2="9" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
    <line x1="17" y1="19" x2="13" y2="15" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
    <line x1="31" y1="19" x2="35" y2="15" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
    <line x1="11" y1="27" x2="6" y2="26" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
    <line x1="37" y1="27" x2="42" y2="26" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Isha Golden Crescent Moon (Vibrant gold crescent matching screenshot)
export const IshaMoonIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 31,10 A 15,15 0 1,0 35,33 A 16,16 0 0,1 31,10 Z"
      fill="#FACC15"
    />
  </svg>
);

// Sunrise Icon for Solar times card
export const SolarSunriseIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 16,29 A 8,8 0 0,1 32,29 Z" fill="#FACC15" />
    <line x1="9" y1="31" x2="39" y2="31" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" />
    <line x1="14" y1="35" x2="34" y2="35" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round" />
    {/* Upward arrow indicator for sunrise */}
    <line x1="24" y1="15" x2="24" y2="8" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" />
    <line x1="16" y1="18" x2="12" y2="14" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" />
    <line x1="32" y1="18" x2="36" y2="14" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Sunset Icon for Solar times card (Orange/red)
export const SolarSunsetIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 16,29 A 8,8 0 0,1 32,29 Z" fill="#FB923C" />
    <line x1="9" y1="31" x2="39" y2="31" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" />
    <line x1="14" y1="35" x2="34" y2="35" stroke="#FB923C" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="24" y1="15" x2="24" y2="8" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" />
    <line x1="16" y1="18" x2="12" y2="14" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" />
    <line x1="32" y1="18" x2="36" y2="14" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" />
  </svg>
);
