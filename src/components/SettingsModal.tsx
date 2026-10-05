import React, { useState } from 'react';
import { X, Sliders, Clock, MapPin, Volume2, VolumeX, Image as ImageIcon, RotateCcw, Download } from 'lucide-react';
import { MasjidConfig } from '../types/masjid';
import { initialMasjidConfig } from '../data/defaultMasjidData';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: MasjidConfig;
  onUpdateConfig: (newConfig: MasjidConfig) => void;
  customBgUrl: string;
  onSetCustomBgUrl: (url: string) => void;
  onOpenApkModal?: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
  customBgUrl,
  onSetCustomBgUrl,
  onOpenApkModal,
}) => {
  const [localConfig, setLocalConfig] = useState<MasjidConfig>(config);
  const [bgInput, setBgInput] = useState<string>(customBgUrl);

  if (!isOpen) return null;

  const handlePrayerChange = (
    index: number,
    field: 'adhan' | 'iqamah',
    value: string
  ) => {
    const updatedPrayers = [...localConfig.prayers];
    updatedPrayers[index] = {
      ...updatedPrayers[index],
      [field]: value,
    };
    setLocalConfig({ ...localConfig, prayers: updatedPrayers });
  };

  const handleSave = () => {
    onUpdateConfig(localConfig);
    onSetCustomBgUrl(bgInput);
    onClose();
  };

  const handleResetToScreenshot = () => {
    setLocalConfig(initialMasjidConfig);
    setBgInput('');
    onSetCustomBgUrl('');
    onUpdateConfig(initialMasjidConfig);
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setBgInput(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      id="masjid-settings-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
    >
      <div
        id="masjid-settings-dialog"
        className="w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-white font-sans"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white tracking-wide">
              Masjid Clock Settings & Preferences
            </h2>
          </div>
          <button
            id="close-settings-button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
          {/* APK & Android TV Install Banner */}
          {onOpenApkModal && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/70 to-slate-900 border border-emerald-500/40 flex items-center justify-between gap-3 shadow-md">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  Android TV Application (.APK)
                </span>
                <p className="text-xs text-slate-300 mt-0.5">
                  Package this app as an installable Android APK or install directly to your TV.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenApkModal();
                }}
                className="px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-1.5 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                Get APK
              </button>
            </div>
          )}

          {/* Section: Display & Time Mode */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-4 h-4" /> Clock & Display Mode
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Time Mode
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setLocalConfig({ ...localConfig, isLiveTime: false })}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      !localConfig.isLiveTime
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Screenshot Match Mode
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocalConfig({ ...localConfig, isLiveTime: true })}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                      localConfig.isLiveTime
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Live Real-Time
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Screenshot mode locks times to the reference values (12:05 PM clock & 06:43:16 countdown).
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Active Highlighted Prayer
                </label>
                <select
                  value={localConfig.activePrayerId}
                  onChange={(e) =>
                    setLocalConfig({
                      ...localConfig,
                      activePrayerId: e.target.value as any,
                      nextPrayer: {
                        ...localConfig.nextPrayer,
                        id: e.target.value as any,
                        name:
                          localConfig.prayers.find((p) => p.id === e.target.value)?.name ||
                          'Fajr',
                      },
                    })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs font-medium focus:outline-none focus:border-cyan-400"
                >
                  {localConfig.prayers.map((prayer) => (
                    <option key={prayer.id} value={prayer.id}>
                      {prayer.name} (Active in screenshot: Fajr)
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-400 mt-1">
                  Active prayer gets the bright cyan neon border & glow.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Masjid Identification & Top Bar */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Masjid & Header Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Mosque Name
                </label>
                <input
                  type="text"
                  value={localConfig.masjidName}
                  onChange={(e) =>
                    setLocalConfig({ ...localConfig, masjidName: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Location / City
                </label>
                <input
                  type="text"
                  value={localConfig.location}
                  onChange={(e) =>
                    setLocalConfig({ ...localConfig, location: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Gregorian Date
                </label>
                <input
                  type="text"
                  value={localConfig.gregorianDate}
                  onChange={(e) =>
                    setLocalConfig({ ...localConfig, gregorianDate: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Hijri Date
                </label>
                <input
                  type="text"
                  value={localConfig.hijriDate}
                  onChange={(e) =>
                    setLocalConfig({ ...localConfig, hijriDate: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Section: Jummah, Fajar Limits & Solar Times */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-4 h-4" /> Jummah, Fajar Limits & Solar Times
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Jummah */}
              <div className="space-y-2 bg-slate-900/60 p-3 rounded-lg border border-slate-700/40">
                <span className="text-xs font-bold text-white block">Jummah</span>
                <div>
                  <label className="block text-[11px] text-slate-400">Adhan</label>
                  <input
                    type="text"
                    value={localConfig.jummah.adhan}
                    onChange={(e) =>
                      setLocalConfig({
                        ...localConfig,
                        jummah: { ...localConfig.jummah, adhan: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400">Jamaat</label>
                  <input
                    type="text"
                    value={localConfig.jummah.jamaat}
                    onChange={(e) =>
                      setLocalConfig({
                        ...localConfig,
                        jummah: { ...localConfig.jummah, jamaat: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white text-xs"
                  />
                </div>
              </div>

              {/* Fajar Limits */}
              <div className="space-y-2 bg-slate-900/60 p-3 rounded-lg border border-slate-700/40">
                <span className="text-xs font-bold text-white block">Fajar Limits</span>
                <div>
                  <label className="block text-[11px] text-slate-400">Fajar Start</label>
                  <input
                    type="text"
                    value={localConfig.fajarLimits.start}
                    onChange={(e) =>
                      setLocalConfig({
                        ...localConfig,
                        fajarLimits: { ...localConfig.fajarLimits, start: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400">Fajar End</label>
                  <input
                    type="text"
                    value={localConfig.fajarLimits.end}
                    onChange={(e) =>
                      setLocalConfig({
                        ...localConfig,
                        fajarLimits: { ...localConfig.fajarLimits, end: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white text-xs"
                  />
                </div>
              </div>

              {/* Solar Times */}
              <div className="space-y-2 bg-slate-900/60 p-3 rounded-lg border border-slate-700/40">
                <span className="text-xs font-bold text-white block">Solar Times</span>
                <div>
                  <label className="block text-[11px] text-slate-400">Sunrise</label>
                  <input
                    type="text"
                    value={localConfig.solarTimes.sunrise}
                    onChange={(e) =>
                      setLocalConfig({
                        ...localConfig,
                        solarTimes: { ...localConfig.solarTimes, sunrise: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400">Sunset</label>
                  <input
                    type="text"
                    value={localConfig.solarTimes.sunset}
                    onChange={(e) =>
                      setLocalConfig({
                        ...localConfig,
                        solarTimes: { ...localConfig.solarTimes, sunset: e.target.value },
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-white text-xs"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section: 5 Prayer Times */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-4 h-4" /> 5 Daily Prayer Times (Adhan & Iqamah)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {localConfig.prayers.map((prayer, index) => (
                <div
                  key={prayer.id}
                  className={`p-3 rounded-lg border ${
                    prayer.id === localConfig.activePrayerId
                      ? 'bg-cyan-950/40 border-cyan-400/60'
                      : 'bg-slate-900/60 border-slate-700/40'
                  }`}
                >
                  <span className="block font-bold text-white text-xs mb-2">
                    {prayer.name}
                  </span>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-[10px] text-slate-400">Adhan</label>
                      <input
                        type="text"
                        value={prayer.adhan}
                        onChange={(e) => handlePrayerChange(index, 'adhan', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400">Iqamah</label>
                      <input
                        type="text"
                        value={prayer.iqamah}
                        onChange={(e) => handlePrayerChange(index, 'iqamah', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white text-xs font-semibold"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Marquee Ticker */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Volume2 className="w-4 h-4" /> Bottom Announcement Ticker
            </h3>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Announcement Text (use | to separate segments)
              </label>
              <input
                type="text"
                value={localConfig.tickerAnnouncement}
                onChange={(e) =>
                  setLocalConfig({ ...localConfig, tickerAnnouncement: e.target.value })
                }
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Section: Custom Background & Sound */}
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-4">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <ImageIcon className="w-4 h-4" /> Custom Background Image & Audio
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Custom Background Image URL or Upload
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="https://... (or leave empty for vector night mosque scene)"
                  value={bgInput}
                  onChange={(e) => setBgInput(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
                <label className="cursor-pointer px-3 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors">
                  <span>Browse</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="block text-xs font-semibold text-slate-200">
                  Adhan Sound & Beep Notifications
                </span>
                <span className="block text-[11px] text-slate-400">
                  Audio alerts before and at prayer times
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  setLocalConfig({ ...localConfig, soundEnabled: !localConfig.soundEnabled })
                }
                className={`p-2 rounded-lg transition-colors ${
                  localConfig.soundEnabled
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {localConfig.soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/60">
          <button
            type="button"
            onClick={handleResetToScreenshot}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Screenshot
          </button>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
