import { MasjidConfig } from '../types/masjid';

export const initialMasjidConfig: MasjidConfig = {
  masjidName: 'Jama Masjid KODWATAND, Lalpania',
  location: 'Bokaro, Jharkhand, India',
  gregorianDate: 'Tue, 22 Sep 2026',
  hijriDate: "11 Rabi' al-Thani 1448 AH",
  jummah: {
    adhan: '1:15 PM',
    jamaat: '1:30 PM',
  },
  fajarLimits: {
    start: '4:37 AM',
    end: '6:05 AM',
  },
  solarTimes: {
    sunrise: '6:40 AM',
    sunset: '7:32 PM',
  },
  prayers: [
    {
      id: 'fajr',
      name: 'Fajr',
      arabicName: 'الفجر',
      adhan: '5:47 AM',
      iqamah: '5:55 AM',
      iconType: 'sunrise',
    },
    {
      id: 'dhuhr',
      name: 'Dhuhr',
      arabicName: 'الظهر',
      adhan: '12:15 PM',
      iqamah: '12:30 PM',
      iconType: 'sun',
    },
    {
      id: 'asr',
      name: 'Asr',
      arabicName: 'العصر',
      adhan: '3:30 PM',
      iqamah: '3:45 PM',
      iconType: 'afternoon-sun',
    },
    {
      id: 'maghrib',
      name: 'Maghrib',
      arabicName: 'المغرب',
      adhan: '5:49 PM',
      iqamah: '5:50 PM',
      iconType: 'sunset',
    },
    {
      id: 'isha',
      name: 'Isha',
      arabicName: 'العشاء',
      adhan: '6:50 PM',
      iqamah: '6:55 PM',
      iconType: 'moon',
    },
  ],
  activePrayerId: 'fajr',
  nextPrayer: {
    id: 'fajr',
    name: 'Fajr',
    targetHours: 6,
    targetMinutes: 43,
    targetSeconds: 16,
  },
  tickerAnnouncement:
    'Welcome to Jama Masjid KODWATAND, Lalpania  |  May Allah accept our prayers  |  Stay connected with our community',
  isLiveTime: false,
  soundEnabled: true,
  tvFrameMode: 'fullscreen',
};
