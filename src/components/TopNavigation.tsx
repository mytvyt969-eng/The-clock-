import { useState, useEffect } from 'react';
import { Search, Settings, Wifi, Moon, Tv2, User } from 'lucide-react';
import { TVTab } from '../types/tv';

interface TopNavigationProps {
  activeTab: TVTab;
  onTabChange: (tab: TVTab) => void;
  isFocused: boolean;
  focusedItemIndex: number; // 0: Search, 1: For You, 2: Movies, 3: Shows, 4: Apps, 5: Live, 6: Library, 7: Ambient, 8: Settings
  onOpenSearch: () => void;
  onOpenSettings: () => void;
  onToggleAmbient: () => void;
  onToggleRemote: () => void;
  showRemote: boolean;
}

export function TopNavigation({
  activeTab,
  onTabChange,
  isFocused,
  focusedItemIndex,
  onOpenSearch,
  onOpenSettings,
  onToggleAmbient,
  onToggleRemote,
  showRemote,
}: TopNavigationProps) {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const tabs: { id: TVTab; label: string; tabIndex: number }[] = [
    { id: 'for-you', label: 'For You', tabIndex: 1 },
    { id: 'movies', label: 'Movies', tabIndex: 2 },
    { id: 'shows', label: 'Shows', tabIndex: 3 },
    { id: 'apps', label: 'Apps', tabIndex: 4 },
    { id: 'live', label: 'Live TV', tabIndex: 5 },
    { id: 'library', label: 'Library', tabIndex: 6 },
  ];

  return (
    <header className="relative z-30 flex items-center justify-between px-10 py-5 select-none bg-gradient-to-b from-black/80 via-black/40 to-transparent">
      {/* Left: Google TV Branding + Search */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 pr-2">
          {/* Google 4-color dots badge */}
          <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
            <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
            <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
            <span className="w-2 h-2 rounded-full bg-[#34A853]" />
            <span className="text-xs font-semibold tracking-wider text-white/90 pl-1 uppercase font-mono">TV OS</span>
          </div>
        </div>

        {/* Search button (Voice / Text) */}
        <button
          id="tv-nav-search-btn"
          onClick={onOpenSearch}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
            isFocused && focusedItemIndex === 0
              ? 'bg-white text-black ring-4 ring-white/40 scale-105 shadow-lg shadow-white/20'
              : 'bg-white/15 text-white/90 hover:bg-white/25 hover:text-white border border-white/10'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
          <span className="text-[10px] bg-black/30 px-1.5 py-0.5 rounded text-white/70 font-mono">/</span>
        </button>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1">
          {tabs.map((tab) => {
            const isTabActive = activeTab === tab.id;
            const isTabFocused = isFocused && focusedItemIndex === tab.tabIndex;

            return (
              <button
                key={tab.id}
                id={`tv-tab-${tab.id}`}
                onClick={() => onTabChange(tab.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isTabFocused
                    ? 'bg-white text-black ring-4 ring-white/40 scale-105 shadow-md shadow-white/20'
                    : isTabActive
                    ? 'text-white font-semibold bg-white/20 border border-white/20'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
                {isTabActive && !isTabFocused && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-blue-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Right: Quick Controls, System Status & Remote Toggle */}
      <div className="flex items-center gap-4">
        {/* Ambient Mode Quick Trigger */}
        <button
          id="tv-nav-ambient-btn"
          onClick={onToggleAmbient}
          title="Ambient Mode (Screensaver)"
          className={`p-2.5 rounded-full transition-all duration-200 cursor-pointer ${
            isFocused && focusedItemIndex === 7
              ? 'bg-white text-black ring-4 ring-white/40 scale-105'
              : 'text-white/80 hover:text-white hover:bg-white/15 bg-white/10 border border-white/10'
          }`}
        >
          <Moon className="w-4 h-4" />
        </button>

        {/* Remote Controller Toggle Button */}
        <button
          id="tv-nav-remote-btn"
          onClick={onToggleRemote}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
            showRemote
              ? 'bg-blue-600 text-white ring-2 ring-blue-400 shadow-lg shadow-blue-500/25'
              : 'bg-white/15 text-white/90 hover:bg-white/25 border border-white/15'
          }`}
          title="Toggle Virtual TV Remote Control"
        >
          <Tv2 className="w-3.5 h-3.5 text-white" />
          <span>Remote</span>
        </button>

        {/* System Indicators: Wi-Fi, Time, Profile, Settings */}
        <div className="flex items-center gap-3 pl-2 border-l border-white/15">
          <div className="flex items-center gap-1.5 text-white/80" title="Wi-Fi 6 Connected (Home_5GHz)">
            <Wifi className="w-4 h-4 text-emerald-400" />
          </div>

          <span className="text-sm font-semibold tracking-wide text-white/90 font-mono">
            {timeString || '12:00 PM'}
          </span>

          <button
            id="tv-nav-settings-btn"
            onClick={onOpenSettings}
            title="Android TV Settings"
            className={`p-2 rounded-full transition-all duration-200 cursor-pointer ${
              isFocused && focusedItemIndex === 8
                ? 'bg-white text-black ring-4 ring-white/40 scale-105'
                : 'text-white/80 hover:text-white hover:bg-white/15 bg-white/10 border border-white/10'
            }`}
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* User Account Avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white/20 shadow-inner">
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
