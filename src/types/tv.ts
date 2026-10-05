export type TVTab = 'for-you' | 'movies' | 'shows' | 'apps' | 'live' | 'library';

export interface MediaItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  rating: string; // e.g. "8.9/10"
  ageRating: string; // e.g. "PG-13", "TV-MA"
  releaseYear: number;
  duration: string; // e.g. "2h 18m" or "3 Seasons"
  genre: string[];
  badges: string[]; // ["4K", "HDR10+", "Dolby Atmos", "Dolby Vision"]
  type: 'movie' | 'show' | 'live';
  streamUrl?: string;
  progressPercent?: number; // for Continue Watching
  trendingRank?: number;
  featured?: boolean;
}

export interface TVApp {
  id: string;
  name: string;
  iconName: string;
  accentColor: string;
  category: string;
  description: string;
  installed: boolean;
  version?: string;
  size?: string;
}

export interface LiveChannel {
  id: string;
  name: string;
  channelNumber: number;
  category: string;
  currentProgram: string;
  currentProgramTime: string;
  progress: number;
  nextProgram: string;
  thumbnail: string;
  logoColor: string;
  streamUrl?: string;
}

export type FocusZone = 
  | 'TOP_TABS'
  | 'TOP_ACTIONS'
  | 'HERO_BUTTONS'
  | 'ROW_CONTINUE'
  | 'ROW_APPS'
  | 'ROW_MOVIES'
  | 'ROW_SHOWS'
  | 'ROW_LIVE'
  | 'ROW_GENRE'
  | 'PLAYER'
  | 'APP_VIEW'
  | 'SETTINGS'
  | 'SEARCH';

export interface FocusLocation {
  zone: FocusZone;
  rowIndex: number;
  colIndex: number;
}

export interface TVSettingsState {
  resolution: '4K UHD (3840x2160) 60Hz' | '1080p FHD 60Hz';
  audioOutput: 'Dolby Atmos (Pass-through)' | 'Stereo (PCM)';
  ambientTimeoutMinutes: number;
  soundEffects: boolean;
  developerOptions: boolean;
  networkName: string;
  ipAddress: string;
  osVersion: string;
}
