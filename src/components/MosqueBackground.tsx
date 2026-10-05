import React from 'react';

interface MosqueBackgroundProps {
  customImageUrl?: string;
  overlayOpacity?: number;
}

export const MosqueBackground: React.FC<MosqueBackgroundProps> = ({
  customImageUrl,
  overlayOpacity = 0.15,
}) => {
  if (customImageUrl) {
    return (
      <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
        <img
          src={customImageUrl}
          alt="Mosque at Night"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-slate-950/40"
          style={{ opacity: overlayOpacity }}
        />
      </div>
    );
  }

  // Exact vector reproduction of the night sky mosque landscape from the reference design:
  // Midnight starry sky, soft glowing moon with craters, moonlit grand mosque architecture with glowing golden arches, palm trees silhouettes, and warm walkway lanterns
  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none bg-[#030712]">
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Night Sky Gradient */}
          <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#020612" />
            <stop offset="35%" stopColor="#040e24" />
            <stop offset="65%" stopColor="#081a3d" />
            <stop offset="85%" stopColor="#0b2452" />
            <stop offset="100%" stopColor="#040c1e" />
          </linearGradient>

          {/* Moon Glow Filter & Gradient */}
          <radialGradient id="moonHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="30%" stopColor="#dbeafe" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#93c5fd" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="moonFace" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </radialGradient>

          {/* Warm Golden Glow for Mosque Windows & Doors */}
          <radialGradient id="archGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
            <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0.4" />
          </radialGradient>

          <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="30%" stopColor="#fef08a" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </radialGradient>

          {/* Palace / Mosque Marble Moonlit Tone */}
          <linearGradient id="palaceMarble" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          <linearGradient id="domeShade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="40%" stopColor="#f8fafc" />
            <stop offset="80%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#081836" />
            <stop offset="100%" stopColor="#020713" />
          </linearGradient>
        </defs>

        {/* 1. Sky Background */}
        <rect width="1920" height="1080" fill="url(#nightSky)" />

        {/* 2. Twinkling Stars */}
        <g fill="#ffffff">
          <circle cx="120" cy="80" r="1.5" opacity="0.8" />
          <circle cx="280" cy="140" r="1.2" opacity="0.6" />
          <circle cx="450" cy="95" r="2" opacity="0.9" />
          <circle cx="520" cy="180" r="1.5" opacity="0.5" />
          <circle cx="700" cy="70" r="1.8" opacity="0.75" />
          <circle cx="840" cy="130" r="1.2" opacity="0.6" />
          <circle cx="980" cy="85" r="1.6" opacity="0.8" />
          <circle cx="1120" cy="160" r="1.4" opacity="0.7" />
          <circle cx="1320" cy="90" r="2.2" opacity="0.95" />
          <circle cx="1450" cy="170" r="1.3" opacity="0.65" />
          <circle cx="1600" cy="110" r="1.7" opacity="0.8" />
          <circle cx="1780" cy="150" r="1.5" opacity="0.7" />
          <circle cx="200" cy="220" r="1.2" opacity="0.5" />
          <circle cx="390" cy="260" r="1.6" opacity="0.7" />
          <circle cx="890" cy="240" r="1.4" opacity="0.6" />
          <circle cx="1050" cy="220" r="1.8" opacity="0.8" />
          <circle cx="1520" cy="250" r="1.5" opacity="0.65" />
          <circle cx="1700" cy="230" r="1.3" opacity="0.55" />
          <circle cx="1840" cy="75" r="2" opacity="0.85" />
        </g>

        {/* 3. Glowing Moon with Craters (Positioned at top center-right matching screenshot) */}
        <g transform="translate(1240, 145)">
          {/* Moon outer halo bloom */}
          <circle cx="0" cy="0" r="110" fill="url(#moonHalo)" />
          {/* Moon body */}
          <circle cx="0" cy="0" r="46" fill="url(#moonFace)" />
          {/* Craters */}
          <ellipse cx="-12" cy="-14" rx="7" ry="6" fill="#94a3b8" opacity="0.38" />
          <ellipse cx="14" cy="-8" rx="9" ry="8" fill="#94a3b8" opacity="0.32" />
          <ellipse cx="-6" cy="15" rx="11" ry="9" fill="#94a3b8" opacity="0.35" />
          <ellipse cx="18" cy="16" rx="6" ry="5" fill="#94a3b8" opacity="0.30" />
          <ellipse cx="2" cy="-2" rx="5" ry="4" fill="#94a3b8" opacity="0.25" />
        </g>

        {/* 4. Distant Horizon Atmospheric Fog / Glow */}
        <ellipse cx="960" cy="620" rx="800" ry="140" fill="#3b82f6" opacity="0.12" />

        {/* 5. Grand Mosque / Palace Architecture (Moonlit silhouette in the horizon) */}
        <g opacity="0.95">
          {/* Central Palace Base Structure */}
          <rect x="730" y="550" width="460" height="150" fill="url(#palaceMarble)" />

          {/* Stepped Base / Terrace */}
          <rect x="680" y="660" width="560" height="40" fill="#cbd5e1" />
          <rect x="620" y="690" width="680" height="25" fill="#94a3b8" />

          {/* Central Grand Onion Dome */}
          <path
            d="M 880,550 C 880,470 930,420 960,400 C 990,420 1040,470 1040,550 Z"
            fill="url(#domeShade)"
          />
          {/* Spire & Crescent Finial */}
          <line x1="960" y1="400" x2="960" y2="350" stroke="#f8fafc" strokeWidth="4" />
          <circle cx="960" cy="345" r="4.5" fill="#f8fafc" />

          {/* Flanking Secondary Domes */}
          {/* Left Mid Dome */}
          <path
            d="M 800,550 C 800,490 835,460 855,445 C 875,460 910,490 910,550 Z"
            fill="url(#domeShade)"
          />
          <line x1="855" y1="445" x2="855" y2="415" stroke="#f8fafc" strokeWidth="3" />

          {/* Right Mid Dome */}
          <path
            d="M 1010,550 C 1010,490 1045,460 1065,445 C 1085,460 1120,490 1120,550 Z"
            fill="url(#domeShade)"
          />
          <line x1="1065" y1="445" x2="1065" y2="415" stroke="#f8fafc" strokeWidth="3" />

          {/* Left Outer Small Dome */}
          <path
            d="M 740,560 C 740,520 765,495 780,485 C 795,495 820,520 820,560 Z"
            fill="url(#domeShade)"
          />
          <line x1="780" y1="485" x2="780" y2="460" stroke="#f8fafc" strokeWidth="2.5" />

          {/* Right Outer Small Dome */}
          <path
            d="M 1100,560 C 1100,520 1125,495 1140,485 C 1155,495 1180,520 1180,560 Z"
            fill="url(#domeShade)"
          />
          <line x1="1140" y1="485" x2="1140" y2="460" stroke="#f8fafc" strokeWidth="2.5" />

          {/* Tall Slender Minarets */}
          {/* Left Inner Minaret */}
          <rect x="670" y="440" width="22" height="230" fill="url(#palaceMarble)" />
          <polygon points="665,440 697,440 691,425 671,425" fill="#f8fafc" />
          <polygon points="668,425 694,425 681,390" fill="#f8fafc" />
          <line x1="681" y1="390" x2="681" y2="365" stroke="#f8fafc" strokeWidth="2" />

          {/* Left Outer Minaret */}
          <rect x="500" y="410" width="28" height="260" fill="url(#palaceMarble)" />
          <polygon points="494,410 534,410 527,390 501,390" fill="#f8fafc" />
          <polygon points="498,390 530,390 514,350" fill="#f8fafc" />
          <line x1="514" y1="350" x2="514" y2="320" stroke="#f8fafc" strokeWidth="2.5" />

          {/* Right Inner Minaret */}
          <rect x="1228" y="440" width="22" height="230" fill="url(#palaceMarble)" />
          <polygon points="1223,440 1255,440 1249,425 1229,425" fill="#f8fafc" />
          <polygon points="1226,425 1252,425 1239,390" fill="#f8fafc" />
          <line x1="1239" y1="390" x2="1239" y2="365" stroke="#f8fafc" strokeWidth="2" />

          {/* Right Outer Minaret */}
          <rect x="1392" y="410" width="28" height="260" fill="url(#palaceMarble)" />
          <polygon points="1386,410 1426,410 1419,390 1393,390" fill="#f8fafc" />
          <polygon points="1390,390 1422,390 1406,350" fill="#f8fafc" />
          <line x1="1406" y1="350" x2="1406" y2="320" stroke="#f8fafc" strokeWidth="2.5" />

          {/* Golden Lit Archways / Entrance Doors */}
          {/* Main Center Gateway */}
          <path
            d="M 932,660 L 932,605 C 932,580 988,580 988,605 L 988,660 Z"
            fill="url(#archGlow)"
          />
          {/* Side Arched Windows */}
          <path
            d="M 865,650 L 865,615 C 865,600 895,600 895,615 L 895,650 Z"
            fill="url(#archGlow)"
            opacity="0.85"
          />
          <path
            d="M 1025,650 L 1025,615 C 1025,600 1055,600 1055,615 L 1055,650 Z"
            fill="url(#archGlow)"
            opacity="0.85"
          />
          <path
            d="M 790,650 L 790,622 C 790,610 814,610 814,622 L 814,650 Z"
            fill="url(#archGlow)"
            opacity="0.75"
          />
          <path
            d="M 1106,650 L 1106,622 C 1106,610 1130,610 1130,622 L 1130,650 Z"
            fill="url(#archGlow)"
            opacity="0.75"
          />
        </g>

        {/* 6. Palm Trees & Lush Trees Silhouette Framing Foreground & Sides */}
        {/* Left Palm Trees & Foliage */}
        <g fill="#020817">
          {/* Foliage canopy bushes */}
          <circle cx="150" cy="620" r="140" opacity="0.9" />
          <circle cx="280" cy="640" r="120" opacity="0.95" />
          <circle cx="420" cy="670" r="110" opacity="0.95" />

          {/* Palm Trees Trunk & Fronds Left */}
          <path d="M 330,680 Q 320,550 300,480" stroke="#040d22" strokeWidth="9" fill="none" strokeLinecap="round" />
          {/* Palm Fronds */}
          <path d="M 300,480 Q 230,460 180,500" stroke="#040d22" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 300,480 Q 250,420 210,430" stroke="#040d22" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 300,480 Q 300,390 320,410" stroke="#040d22" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 300,480 Q 360,420 380,450" stroke="#040d22" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 300,480 Q 370,470 390,520" stroke="#040d22" strokeWidth="5" fill="none" strokeLinecap="round" />

          {/* Palm Tree 2 Left */}
          <path d="M 640,680 Q 645,580 635,510" stroke="#040d22" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M 635,510 Q 570,490 530,520" stroke="#040d22" strokeWidth="4.5" fill="none" />
          <path d="M 635,510 Q 590,450 560,470" stroke="#040d22" strokeWidth="4.5" fill="none" />
          <path d="M 635,510 Q 640,430 660,450" stroke="#040d22" strokeWidth="4.5" fill="none" />
          <path d="M 635,510 Q 690,460 710,500" stroke="#040d22" strokeWidth="4.5" fill="none" />

          {/* Right Palm Trees & Foliage */}
          <circle cx="1780" cy="620" r="150" opacity="0.9" />
          <circle cx="1640" cy="640" r="130" opacity="0.95" />
          <circle cx="1500" cy="670" r="110" opacity="0.95" />

          {/* Palm Tree Right */}
          <path d="M 1280,680 Q 1275,580 1285,510" stroke="#040d22" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M 1285,510 Q 1230,480 1200,510" stroke="#040d22" strokeWidth="4.5" fill="none" />
          <path d="M 1285,510 Q 1270,440 1260,460" stroke="#040d22" strokeWidth="4.5" fill="none" />
          <path d="M 1285,510 Q 1310,430 1330,460" stroke="#040d22" strokeWidth="4.5" fill="none" />
          <path d="M 1285,510 Q 1350,480 1370,520" stroke="#040d22" strokeWidth="4.5" fill="none" />

          {/* Palm Tree Far Right */}
          <path d="M 1580,680 Q 1590,560 1610,490" stroke="#040d22" strokeWidth="9" fill="none" strokeLinecap="round" />
          <path d="M 1610,490 Q 1540,470 1500,500" stroke="#040d22" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 1610,490 Q 1570,420 1530,440" stroke="#040d22" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 1610,490 Q 1630,400 1650,420" stroke="#040d22" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 1610,490 Q 1670,430 1700,460" stroke="#040d22" strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>

        {/* 7. Walkway Golden Street Lantern Lights (Glowing orbs in the garden walkway) */}
        <g>
          <circle cx="600" cy="680" r="18" fill="url(#lanternGlow)" />
          <circle cx="600" cy="680" r="3" fill="#ffffff" />
          <circle cx="730" cy="690" r="16" fill="url(#lanternGlow)" />
          <circle cx="730" cy="690" r="2.5" fill="#ffffff" />
          <circle cx="1190" cy="690" r="16" fill="url(#lanternGlow)" />
          <circle cx="1190" cy="690" r="2.5" fill="#ffffff" />
          <circle cx="1320" cy="680" r="18" fill="url(#lanternGlow)" />
          <circle cx="1320" cy="680" r="3" fill="#ffffff" />
        </g>

        {/* 8. Ground Dark Horizon Floor */}
        <rect x="0" y="700" width="1920" height="380" fill="url(#groundGrad)" />
      </svg>
    </div>
  );
};
