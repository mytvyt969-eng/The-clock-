import React, { useState } from 'react';
import {
  Tv,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Settings,
  Maximize2,
  Volume2,
  VolumeX,
  RotateCcw,
  Minimize2,
  Download,
} from 'lucide-react';

interface AndroidTvRemoteProps {
  onNavigate: (direction: 'up' | 'down' | 'left' | 'right') => void;
  onSelect: () => void;
  onOpenSettings: () => void;
  onOpenApkModal: () => void;
  onToggleFullscreen: () => void;
  onToggleFrameMode: () => void;
  isFramed: boolean;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const AndroidTvRemote: React.FC<AndroidTvRemoteProps> = ({
  onNavigate,
  onSelect,
  onOpenSettings,
  onOpenApkModal,
  onToggleFullscreen,
  onToggleFrameMode,
  isFramed,
  soundEnabled,
  onToggleSound,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-3 right-3 z-40 flex items-center gap-2 select-none font-sans">
      {!isOpen ? (
        <>
          {/* Quick APK / Install button */}
          <button
            id="quick-apk-button"
            onClick={onOpenApkModal}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-emerald-500/95 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-xl border border-emerald-400/50 backdrop-blur-md transition-all active:scale-95"
            title="Download APK / Install on Android TV"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get APK</span>
          </button>

          {/* Open TV Remote */}
          <button
            id="toggle-remote-button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900/90 text-white border border-slate-700/80 shadow-2xl hover:bg-slate-800 transition-all group backdrop-blur-md"
            title="Virtual Android TV Remote"
          >
            <Tv className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold">Remote</span>
          </button>
        </>
      ) : (
        <div
          id="virtual-android-tv-remote"
          className="w-56 bg-slate-950/95 border border-slate-700/80 rounded-3xl p-4 shadow-2xl backdrop-blur-xl flex flex-col items-center animate-fadeIn"
        >
          {/* Remote Top Bar */}
          <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <Tv className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-bold text-slate-300 tracking-wider">
                ANDROID TV
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* D-PAD Circle */}
          <div className="relative w-36 h-36 rounded-full bg-slate-900 border border-slate-700 shadow-inner flex items-center justify-center my-2">
            {/* UP */}
            <button
              onClick={() => onNavigate('up')}
              className="absolute top-1.5 p-2 text-slate-300 hover:text-cyan-400 active:scale-95 transition-all"
              title="Up"
            >
              <ChevronUp className="w-5 h-5" />
            </button>

            {/* DOWN */}
            <button
              onClick={() => onNavigate('down')}
              className="absolute bottom-1.5 p-2 text-slate-300 hover:text-cyan-400 active:scale-95 transition-all"
              title="Down"
            >
              <ChevronDown className="w-5 h-5" />
            </button>

            {/* LEFT */}
            <button
              onClick={() => onNavigate('left')}
              className="absolute left-1.5 p-2 text-slate-300 hover:text-cyan-400 active:scale-95 transition-all"
              title="Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* RIGHT */}
            <button
              onClick={() => onNavigate('right')}
              className="absolute right-1.5 p-2 text-slate-300 hover:text-cyan-400 active:scale-95 transition-all"
              title="Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* CENTER OK BUTTON */}
            <button
              onClick={onSelect}
              className="w-14 h-14 rounded-full bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white font-bold text-xs shadow-md border border-slate-600/60 active:scale-90 transition-all flex items-center justify-center"
            >
              OK
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div className="w-full grid grid-cols-5 gap-1 mt-3 pt-2 border-t border-slate-800/80">
            {/* Settings */}
            <button
              onClick={onOpenSettings}
              className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Settings (or Press 'S')"
            >
              <Settings className="w-4 h-4 text-cyan-400 mb-0.5" />
              <span className="text-[8px] font-medium">Config</span>
            </button>

            {/* APK / Install */}
            <button
              onClick={onOpenApkModal}
              className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 hover:text-white transition-colors border border-emerald-500/30"
              title="Download APK / Install on Android TV"
            >
              <Download className="w-4 h-4 text-emerald-400 mb-0.5" />
              <span className="text-[8px] font-bold">APK</span>
            </button>

            {/* Toggle TV Frame Bezel */}
            <button
              onClick={onToggleFrameMode}
              className={`flex flex-col items-center justify-center p-1.5 rounded-xl transition-colors ${
                isFramed
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
              title="Toggle TV Bezel / Full"
            >
              <Tv className="w-4 h-4 mb-0.5" />
              <span className="text-[8px] font-medium">{isFramed ? 'TV' : 'Screen'}</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={onToggleSound}
              className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-emerald-400 mb-0.5" />
              ) : (
                <VolumeX className="w-4 h-4 text-rose-400 mb-0.5" />
              )}
              <span className="text-[8px] font-medium">Audio</span>
            </button>

            {/* Fullscreen */}
            <button
              onClick={onToggleFullscreen}
              className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Fullscreen (or F11)"
            >
              <Maximize2 className="w-4 h-4 text-amber-400 mb-0.5" />
              <span className="text-[8px] font-medium">Expand</span>
            </button>
          </div>

          <div className="mt-2 text-center text-[10px] text-slate-400">
            Tip: Use keyboard arrow keys & enter
          </div>
        </div>
      )}
    </div>
  );
};
