import React, { useState, useEffect } from 'react';
import { initialMasjidConfig } from './data/defaultMasjidData';
import { MasjidConfig } from './types/masjid';
import { MosqueBackground } from './components/MosqueBackground';
import { MosqueLogo } from './components/PrayerIcons';
import { JummahCard } from './components/JummahCard';
import { NextPrayerCard } from './components/NextPrayerCard';
import { FajarSolarCards } from './components/FajarSolarCards';
import { PrayerCard } from './components/PrayerCard';
import { MarqueeTicker } from './components/MarqueeTicker';
import { TvFrame } from './components/TvFrame';
import { SettingsModal } from './components/SettingsModal';
import { AndroidTvRemote } from './components/AndroidTvRemote';
import { ApkExportModal } from './components/ApkExportModal';
import { playNotificationChime } from './utils/audioChime';

export default function App() {
  const [config, setConfig] = useState<MasjidConfig>(initialMasjidConfig);
  const [customBgUrl, setCustomBgUrl] = useState<string>('');
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isApkModalOpen, setIsApkModalOpen] = useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(0); // 0 to 4: prayer cards

  // Time tracking state
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Countdown state (in seconds)
  const [countdownSeconds, setCountdownSeconds] = useState<number>(() => {
    return (
      config.nextPrayer.targetHours * 3600 +
      config.nextPrayer.targetMinutes * 60 +
      config.nextPrayer.targetSeconds
    );
  });

  // Ticking effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      if (!config.isLiveTime) {
        // In screenshot match mode, countdown from 06:43:16 second by second
        setCountdownSeconds((prev) =>
          prev > 0 ? prev - 1 : 6 * 3600 + 43 * 60 + 16
        );
      } else {
        // In live mode, calculate remaining time to next prayer
        const targetHours = config.nextPrayer.targetHours;
        const targetMinutes = config.nextPrayer.targetMinutes;
        const targetSeconds = config.nextPrayer.targetSeconds;

        const target = new Date(now);
        target.setHours(targetHours, targetMinutes, targetSeconds, 0);
        if (target.getTime() <= now.getTime()) {
          target.setDate(target.getDate() + 1);
        }

        const diffSeconds = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000));
        setCountdownSeconds(diffSeconds);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [config.isLiveTime, config.nextPrayer]);

  // Derived countdown hours, minutes, seconds
  const remainingHours = Math.floor(countdownSeconds / 3600);
  const remainingMinutes = Math.floor((countdownSeconds % 3600) / 60);
  const remainingSecs = countdownSeconds % 60;

  // Keyboard navigation for Android TV remote (D-pad & action keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSettingsOpen) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % config.prayers.length);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + config.prayers.length) % config.prayers.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = config.prayers[focusedIndex];
        if (selected) {
          setConfig((prev) => ({
            ...prev,
            activePrayerId: selected.id,
            nextPrayer: {
              ...prev.nextPrayer,
              id: selected.id,
              name: selected.name,
            },
          }));
          if (config.soundEnabled) {
            playNotificationChime();
          }
        }
      } else if (e.key.toLowerCase() === 's') {
        setIsSettingsOpen(true);
      } else if (e.key.toLowerCase() === 'a') {
        setIsApkModalOpen(true);
      } else if (e.key.toLowerCase() === 'f') {
        toggleFrameMode();
      } else if (e.key.toLowerCase() === 'm') {
        toggleSound();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex, config.prayers, isSettingsOpen, config.soundEnabled]);

  const handleRemoteNavigate = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (direction === 'left') {
      setFocusedIndex((prev) => (prev - 1 + config.prayers.length) % config.prayers.length);
    } else if (direction === 'right') {
      setFocusedIndex((prev) => (prev + 1) % config.prayers.length);
    }
  };

  const handleRemoteSelect = () => {
    const selected = config.prayers[focusedIndex];
    if (selected) {
      setConfig((prev) => ({
        ...prev,
        activePrayerId: selected.id,
        nextPrayer: {
          ...prev.nextPrayer,
          id: selected.id,
          name: selected.name,
        },
      }));
      if (config.soundEnabled) {
        playNotificationChime();
      }
    }
  };

  const toggleSound = () => {
    setConfig((prev) => {
      const nextSound = !prev.soundEnabled;
      if (nextSound) playNotificationChime();
      return { ...prev, soundEnabled: nextSound };
    });
  };

  const toggleFrameMode = () => {
    setConfig((prev) => ({
      ...prev,
      tvFrameMode: prev.tvFrameMode === 'frame' ? 'fullscreen' : 'frame',
    }));
  };

  const toggleBrowserFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <main
      id="masjid-clock-app-root"
      className="h-screen w-screen bg-[#02050e] text-white flex flex-col justify-center items-center overflow-hidden p-0 select-none"
    >
      <TvFrame isFramed={config.tvFrameMode === 'frame'}>
        {/* Main TV 16:9 Canvas */}
        <div
          id="masjid-tv-screen-canvas"
          className="relative w-full h-full aspect-video flex flex-col justify-between overflow-hidden bg-[#030712] select-none shadow-2xl"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          {/* Mosque Night Landscape Background with Stars, Moon & Lit Grand Mosque */}
          <MosqueBackground customImageUrl={customBgUrl} />

          {/* Top Bar (Mosque Name, Location, Gregorian & Hijri Dates) */}
          <header
            id="masjid-top-bar"
            className="relative z-10 pt-3 sm:pt-4 md:pt-6 px-4 sm:px-6 md:px-10 flex items-start justify-between shrink-0"
          >
            {/* Top-Left: Mosque Emblem & Identity */}
            <div className="flex items-center gap-3 sm:gap-4 drop-shadow-md">
              <div className="text-white shrink-0">
                <MosqueLogo className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-wide leading-tight">
                  {config.masjidName}
                </h1>
                <p className="text-[11px] sm:text-xs md:text-sm font-medium text-slate-300 tracking-wide">
                  {config.location}
                </p>
              </div>
            </div>

            {/* Top-Right: Gregorian Date & Hijri Date */}
            <div className="flex flex-col items-end text-right drop-shadow-md">
              <p className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-wide leading-tight">
                {config.gregorianDate}
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm font-medium text-slate-300 tracking-wide mt-0.5">
                {config.hijriDate}
              </p>
            </div>
          </header>

          {/* Middle Section: Jummah Card | Hero Clock & Countdown Capsule | Fajar Limits & Solar Times */}
          <section
            id="masjid-middle-section"
            className="relative z-10 px-4 sm:px-6 md:px-10 my-auto flex flex-row items-center justify-between gap-3 sm:gap-6 w-full"
          >
            {/* Left: Jummah Card */}
            <JummahCard
              adhan={config.jummah.adhan}
              jamaat={config.jummah.jamaat}
            />

            {/* Center: Hero Glass Capsule (White Analog Clock + Next Prayer Fajr Countdown) */}
            <div className="flex justify-center flex-1 max-w-[640px]">
              <NextPrayerCard
                currentTime={currentTime}
                isLiveTime={config.isLiveTime}
                nextPrayerName={config.nextPrayer.name}
                hours={remainingHours}
                minutes={remainingMinutes}
                seconds={remainingSecs}
                onCardClick={() => setIsSettingsOpen(true)}
              />
            </div>

            {/* Right: Fajar Limits & Solar Times */}
            <FajarSolarCards
              fajarStart={config.fajarLimits.start}
              fajarEnd={config.fajarLimits.end}
              sunrise={config.solarTimes.sunrise}
              sunset={config.solarTimes.sunset}
            />
          </section>

          {/* Bottom Section: Exactly 5 Daily Prayer Cards (Fajr, Dhuhr, Asr, Maghrib, Isha) */}
          <section
            id="masjid-prayer-times-row"
            className="relative z-10 px-4 sm:px-6 md:px-10 pb-3 sm:pb-4 md:pb-5 w-full shrink-0"
          >
            <div className="flex items-stretch gap-2 sm:gap-3.5 md:gap-4 w-full">
              {config.prayers.map((prayer, index) => (
                <PrayerCard
                  key={prayer.id}
                  prayer={prayer}
                  isActive={prayer.id === config.activePrayerId}
                  isFocused={index === focusedIndex}
                  onClick={() => {
                    setFocusedIndex(index);
                    setConfig((prev) => ({
                      ...prev,
                      activePrayerId: prayer.id,
                      nextPrayer: {
                        ...prev.nextPrayer,
                        id: prayer.id,
                        name: prayer.name,
                      },
                    }));
                    if (config.soundEnabled) {
                      playNotificationChime();
                    }
                  }}
                />
              ))}
            </div>
          </section>

          {/* Bottom Ticker / Marquee */}
          <MarqueeTicker announcement={config.tickerAnnouncement} />
        </div>
      </TvFrame>

      {/* Floating Android TV Virtual Remote Controller */}
      <AndroidTvRemote
        onNavigate={handleRemoteNavigate}
        onSelect={handleRemoteSelect}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenApkModal={() => setIsApkModalOpen(true)}
        onToggleFullscreen={toggleBrowserFullscreen}
        onToggleFrameMode={toggleFrameMode}
        isFramed={config.tvFrameMode === 'frame'}
        soundEnabled={config.soundEnabled}
        onToggleSound={toggleSound}
      />

      {/* Settings & Configuration Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onUpdateConfig={(newConfig) => setConfig(newConfig)}
        customBgUrl={customBgUrl}
        onSetCustomBgUrl={(url) => setCustomBgUrl(url)}
        onOpenApkModal={() => setIsApkModalOpen(true)}
      />

      {/* Android TV APK Export & Installation Hub */}
      <ApkExportModal
        isOpen={isApkModalOpen}
        onClose={() => setIsApkModalOpen(false)}
      />
    </main>
  );
}
