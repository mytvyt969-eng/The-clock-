export interface PrayerTimeItem {
  id: 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha';
  name: string;
  arabicName?: string;
  adhan: string;
  iqamah: string;
  iconType: 'sunrise' | 'sun' | 'afternoon-sun' | 'sunset' | 'moon';
}

export interface MasjidConfig {
  masjidName: string;
  location: string;
  gregorianDate: string;
  hijriDate: string;
  jummah: {
    adhan: string;
    jamaat: string;
  };
  fajarLimits: {
    start: string;
    end: string;
  };
  solarTimes: {
    sunrise: string;
    sunset: string;
  };
  prayers: PrayerTimeItem[];
  activePrayerId: 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha';
  nextPrayer: {
    id: 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha';
    name: string;
    targetHours: number;
    targetMinutes: number;
    targetSeconds: number;
  };
  tickerAnnouncement: string;
  isLiveTime: boolean;
  soundEnabled: boolean;
  tvFrameMode: 'frame' | 'fullscreen';
}
