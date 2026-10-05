import React, { useState } from 'react';
import {
  X,
  Download,
  Tv,
  ExternalLink,
  Copy,
  Check,
  Smartphone,
  HelpCircle,
  Sparkles,
  AlertTriangle,
  FileCode,
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface ApkExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApkExportModal: React.FC<ApkExportModalProps> = ({ isOpen, onClose }) => {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedManifest, setCopiedManifest] = useState(false);
  const { isInstallable, install } = usePWAInstall();

  if (!isOpen) return null;

  // Derive the live app URL
  const currentUrl =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://ais-pre-4g4uaikzvr76jalio25lrg-667546164841.asia-southeast1.run.app';
  const pwaBuilderUrl = `https://www.pwabuilder.com?siteUrl=${encodeURIComponent(currentUrl)}`;

  const manifestJsonString = JSON.stringify(
    {
      name: 'Masjid Clock - Android TV',
      short_name: 'MasjidClock',
      description: 'Android TV Masjid Clock & Prayer Times Display',
      theme_color: '#06080d',
      background_color: '#06080d',
      display: 'standalone',
      orientation: 'landscape',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: `${currentUrl}/pwa-192x192.png`,
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: `${currentUrl}/pwa-512x512.png`,
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: `${currentUrl}/pwa-maskable-512x512.png`,
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: `${currentUrl}/tv-banner.png`,
          sizes: '320x180',
          type: 'image/png',
          purpose: 'any',
        },
      ],
    },
    null,
    2,
  );

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const handleCopyManifest = () => {
    navigator.clipboard.writeText(manifestJsonString);
    setCopiedManifest(true);
    setTimeout(() => setCopiedManifest(false), 2500);
  };

  return (
    <div
      id="apk-export-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="apk-export-modal-container"
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 border-b border-slate-800 bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 shadow-md">
              <Download className="w-5 h-5 font-bold" />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-bold text-white tracking-wide flex items-center gap-2">
                Android TV APK & Installation
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  Solutions
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Fix the PWABuilder error or install directly on Android TV
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-5">
          {/* Explanation Alert for the PWABuilder Screenshot Error */}
          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/50 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1.5">
                <h3 className="text-sm font-bold text-amber-300">
                  Why PWABuilder showed "Missing Name / Create a manifest":
                </h3>
                <p className="text-amber-100/85 leading-relaxed">
                  The temporary <code>ais-dev-...</code> URL is protected behind Google AI Studio's secure development container. External bots (like PWABuilder's scanner) receive a security cookie verification prompt, preventing them from reading the manifest file automatically.
                </p>
                <p className="text-amber-200/90 font-medium pt-1">
                  Choose one of the 3 quick fixes below to get your APK or install on your TV:
                </p>
              </div>
            </div>
          </div>

          {/* Fix 1: Quick Fix in PWABuilder UI (20 Seconds) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center border border-cyan-500/30">
                  1
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  Fix Inside PWABuilder (20 Seconds)
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                Quickest
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              On the PWABuilder page from your screenshot, you can complete the manifest right in their interface:
            </p>

            <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 mb-3">
              <li>
                Click on <strong>"Create a web app manifest"</strong> (the red exclamation row on your screen).
              </li>
              <li>
                In the form that pops up, enter:
                <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-4 font-mono text-[11px] text-cyan-300">
                  <div>Name: <span className="text-white">Masjid Clock</span></div>
                  <div>Short Name: <span className="text-white">MasjidClock</span></div>
                  <div className="sm:col-span-2">Description: <span className="text-white">Android TV Masjid Clock</span></div>
                </div>
              </li>
              <li>
                Click <strong>"Generate" / "Done"</strong>. The red errors turn green!
              </li>
              <li>
                Click the top button <strong>"Package for Stores"</strong> &rarr; select <strong>Android (APK)</strong> &rarr; click <strong>Download APK</strong>!
              </li>
            </ol>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={pwaBuilderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Open PWABuilder
              </a>

              <button
                onClick={handleCopyManifest}
                className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Copy manifest JSON to paste if asked"
              >
                {copiedManifest ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <FileCode className="w-3.5 h-3.5" />}
                {copiedManifest ? 'Manifest Copied!' : 'Copy Manifest JSON'}
              </button>
            </div>
          </div>

          {/* Fix 2: Direct Android TV Install (Zero APK needed, Works Instantly) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center border border-emerald-500/30">
                  2
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  Direct Install on Android TV (Recommended)
                  <Tv className="w-3.5 h-3.5 text-emerald-400" />
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                Easiest for TV
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              You do not even need to build or sideload an APK file! Android TV browsers allow installing web apps directly to the TV home screen:
            </p>

            <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 mb-3">
              <li>
                On your Android TV, open Google Play Store and install <strong>TV Bro</strong> or <strong>Downloader</strong> (free).
              </li>
              <li>
                Type this app URL into TV Bro:
                <div className="flex items-center gap-2 my-1.5 pl-4">
                  <input
                    type="text"
                    readOnly
                    value={currentUrl}
                    className="flex-1 bg-black/50 px-2.5 py-1.5 rounded text-[11px] text-cyan-300 font-mono select-all focus:outline-none truncate border border-slate-800"
                  />
                  <button
                    onClick={handleCopyUrl}
                    className="px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1 transition-colors shrink-0"
                  >
                    {copiedUrl ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    {copiedUrl ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </li>
              <li>
                In TV Bro menu, click <strong>"Add to Home Screen"</strong> or <strong>"Install App"</strong>.
              </li>
              <li>
                The <strong>Masjid Clock</strong> banner icon is added to your Android TV apps grid and launches full-screen landscape!
              </li>
            </ol>
          </div>

          {/* Fix 3: Export to GitHub / Free Public Hosting (100% Green on PWABuilder) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold flex items-center justify-center border border-purple-500/30">
                3
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Export to GitHub or Public URL
              </h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              If you want an official APK for Google Play or commercial distribution:
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-300 list-disc list-inside bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <li>
                In AI Studio top-right menu, click <strong>Settings &rarr; Export to GitHub</strong> (or Download ZIP).
              </li>
              <li>
                Deploy to Vercel, Netlify, or GitHub Pages (free, 1 click).
              </li>
              <li>
                Paste your public domain into PWABuilder — all scores will be 100% green with automatic APK generation!
              </li>
            </ul>
          </div>

          {/* Direct browser install prompt if available on mobile/desktop */}
          {isInstallable && (
            <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs text-emerald-200 font-medium">
                  Install this clock app directly on your current device browser:
                </span>
              </div>
              <button
                onClick={() => install()}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shrink-0"
              >
                Install Now
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3 sm:py-4 border-t border-slate-800 bg-slate-950/60 shrink-0">
          <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            Runs offline once installed via service worker precache.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

