import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1329"/>
      <stop offset="50%" stop-color="#111d3d"/>
      <stop offset="100%" stop-color="#070c18"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="50%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>
  <rect width="504" height="504" x="4" y="4" rx="108" fill="none" stroke="url(#goldGrad)" stroke-width="4" opacity="0.4"/>

  <!-- Clock Outer Ring -->
  <circle cx="256" cy="256" r="190" fill="none" stroke="url(#cyanGrad)" stroke-width="8" opacity="0.3"/>
  <circle cx="256" cy="256" r="172" fill="#090f1f" stroke="url(#goldGrad)" stroke-width="6"/>

  <!-- Clock Hour Ticks -->
  <line x1="256" y1="96" x2="256" y2="114" stroke="#fde047" stroke-width="5" stroke-linecap="round"/>
  <line x1="256" y1="398" x2="256" y2="416" stroke="#fde047" stroke-width="5" stroke-linecap="round"/>
  <line x1="96" y1="256" x2="114" y2="256" stroke="#fde047" stroke-width="5" stroke-linecap="round"/>
  <line x1="398" y1="256" x2="416" y2="256" stroke="#fde047" stroke-width="5" stroke-linecap="round"/>

  <!-- Mosque Silhouette / Crescent & Dome Center -->
  <!-- Main Dome -->
  <path d="M 186 320 C 186 215 256 160 256 160 C 256 160 326 215 326 320 Z" fill="url(#goldGrad)" opacity="0.95"/>
  <!-- Minaret Left -->
  <rect x="146" y="220" width="22" height="100" rx="4" fill="#38bdf8" opacity="0.75"/>
  <polygon points="144,220 157,185 170,220" fill="#fde047"/>
  <!-- Minaret Right -->
  <rect x="344" y="220" width="22" height="100" rx="4" fill="#38bdf8" opacity="0.75"/>
  <polygon points="342,220 355,185 368,220" fill="#fde047"/>

  <!-- Crescent Finial on Central Dome -->
  <path d="M 256 128 A 18 18 0 1 1 246 158 A 14 14 0 1 0 256 128 Z" fill="#fef08a"/>

  <!-- Modern Clock Hands -->
  <!-- Hour hand pointing towards 4 o'clock -->
  <line x1="256" y1="256" x2="310" y2="295" stroke="#ffffff" stroke-width="9" stroke-linecap="round"/>
  <!-- Minute hand pointing towards 12 o'clock -->
  <line x1="256" y1="256" x2="256" y2="155" stroke="#38bdf8" stroke-width="7" stroke-linecap="round"/>
  <!-- Central Pin -->
  <circle cx="256" cy="256" r="11" fill="#fde047" stroke="#ffffff" stroke-width="3"/>
</svg>`;

const maskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1329"/>
      <stop offset="50%" stop-color="#111d3d"/>
      <stop offset="100%" stop-color="#070c18"/>
    </linearGradient>
    <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="50%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
    <linearGradient id="cyanGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>

  <!-- Full-bleed background for maskable -->
  <rect width="512" height="512" fill="url(#bgGrad2)"/>

  <!-- Centered safe zone content (within 80% circle, r=204) -->
  <circle cx="256" cy="256" r="160" fill="none" stroke="url(#cyanGrad2)" stroke-width="6" opacity="0.3"/>
  <circle cx="256" cy="256" r="145" fill="#090f1f" stroke="url(#goldGrad2)" stroke-width="5"/>

  <line x1="256" y1="120" x2="256" y2="135" stroke="#fde047" stroke-width="4" stroke-linecap="round"/>
  <line x1="256" y1="377" x2="256" y2="392" stroke="#fde047" stroke-width="4" stroke-linecap="round"/>
  <line x1="120" y1="256" x2="135" y2="256" stroke="#fde047" stroke-width="4" stroke-linecap="round"/>
  <line x1="377" y1="256" x2="392" y2="256" stroke="#fde047" stroke-width="4" stroke-linecap="round"/>

  <!-- Dome -->
  <path d="M 195 310 C 195 220 256 175 256 175 C 256 175 317 220 317 310 Z" fill="url(#goldGrad2)" opacity="0.95"/>
  <rect x="160" y="230" width="18" height="80" rx="3" fill="#38bdf8" opacity="0.75"/>
  <polygon points="158,230 169,200 180,230" fill="#fde047"/>
  <rect x="334" y="230" width="18" height="80" rx="3" fill="#38bdf8" opacity="0.75"/>
  <polygon points="332,230 343,200 354,230" fill="#fde047"/>

  <!-- Crescent -->
  <path d="M 256 148 A 15 15 0 1 1 247 173 A 12 12 0 1 0 256 148 Z" fill="#fef08a"/>

  <!-- Clock Hands -->
  <line x1="256" y1="256" x2="300" y2="290" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
  <line x1="256" y1="256" x2="256" y2="170" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
  <circle cx="256" cy="256" r="9" fill="#fde047" stroke="#ffffff" stroke-width="2.5"/>
</svg>`;

const tvBannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" width="640" height="360">
  <defs>
    <linearGradient id="tvBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1024"/>
      <stop offset="50%" stop-color="#132147"/>
      <stop offset="100%" stop-color="#080c1b"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
  </defs>

  <rect width="640" height="360" fill="url(#tvBg)"/>
  <rect width="632" height="352" x="4" y="4" fill="none" stroke="url(#gold)" stroke-width="3" opacity="0.3"/>

  <!-- Mosque Silhouette -->
  <path d="M 100 240 C 100 160 150 120 150 120 C 150 120 200 160 200 240 Z" fill="url(#gold)" opacity="0.9"/>
  <rect x="70" y="170" width="16" height="70" fill="#38bdf8" opacity="0.75"/>
  <polygon points="68,170 78,140 88,170" fill="#fde047"/>
  <rect x="214" y="170" width="16" height="70" fill="#38bdf8" opacity="0.75"/>
  <polygon points="212,170 222,140 232,170" fill="#fde047"/>
  <path d="M 150 96 A 14 14 0 1 1 142 120 A 11 11 0 1 0 150 96 Z" fill="#fef08a"/>

  <!-- Text -->
  <text x="260" y="170" font-family="Arial, sans-serif" font-weight="bold" font-size="44" fill="#ffffff">MASJID CLOCK</text>
  <text x="260" y="212" font-family="Arial, sans-serif" font-weight="600" font-size="20" fill="#38bdf8" letter-spacing="3">ANDROID TV DISPLAY</text>
  <text x="260" y="244" font-family="Arial, sans-serif" font-size="16" fill="#94a3b8">Prayer Times • Countdown • Live Weather • Hijri</text>
</svg>`;

async function generate() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write SVG files
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgIcon);
  fs.writeFileSync(path.join(publicDir, 'tv-banner.svg'), tvBannerSvg);

  // Generate PNGs with sharp
  await sharp(Buffer.from(svgIcon))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));

  await sharp(Buffer.from(svgIcon))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));

  await sharp(Buffer.from(svgIcon))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));

  await sharp(Buffer.from(tvBannerSvg))
    .resize(320, 180)
    .png()
    .toFile(path.join(publicDir, 'tv-banner.png'));

  // Also 32x32 for favicon
  await sharp(Buffer.from(svgIcon))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  console.log('Successfully generated all PWA & Android TV icons and banner!');
}

generate().catch(console.error);
