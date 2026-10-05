import { MediaItem, TVApp, LiveChannel } from '../types/tv';

export const SAMPLE_VIDEO_STREAMS = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
];

export const HERO_FEATURED_ITEMS: MediaItem[] = [
  {
    id: 'hero-1',
    title: 'Interstellar Horizons: The Outer Limits',
    subtitle: 'A journey across uncharted galaxies and celestial dimensions',
    description: 'When deep space anomaly probes detect strange gravitational ripples near Jupiter, an international crew of astrophysicists embarks on an odyssey beyond the known universe to decipher a message that could rewrite quantum history.',
    posterUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop&q=85',
    rating: '9.2/10',
    ageRating: 'PG-13',
    releaseYear: 2025,
    duration: '2h 44m',
    genre: ['Sci-Fi', 'Adventure', 'Mystery'],
    badges: ['4K Ultra HD', 'Dolby Vision', 'Dolby Atmos', 'IMAX Enhanced'],
    type: 'movie',
    streamUrl: SAMPLE_VIDEO_STREAMS[0],
    featured: true
  },
  {
    id: 'hero-2',
    title: 'Neon Odyssey: Cyber City 2099',
    subtitle: 'Underground resistance rises in the neon-drenched metropolis',
    description: 'In a sprawling megalopolis dominated by synthetic intelligence conglomerates, an ex-detective turned cybernetic mechanic uncovers a classified neural upload protocol threatening human consciousness.',
    posterUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&auto=format&fit=crop&q=85',
    rating: '8.8/10',
    ageRating: 'TV-MA',
    releaseYear: 2025,
    duration: '8 Episodes',
    genre: ['Cyberpunk', 'Action', 'Thriller'],
    badges: ['4K Ultra HD', 'HDR10+', 'Spatial Audio'],
    type: 'show',
    streamUrl: SAMPLE_VIDEO_STREAMS[3],
    featured: true
  },
  {
    id: 'hero-3',
    title: 'The Silent Apex: Alaskan Wilds',
    subtitle: 'Untamed predator sanctuaries in extreme sub-zero terrain',
    description: 'Filmed over three harrowing winters in the Arctic Circle with specialized 8K thermal cine cameras, witness the unseen survival tactics of apex wolves, snow leopards, and grizzly clans facing seasonal transitions.',
    posterUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1920&auto=format&fit=crop&q=85',
    rating: '9.4/10',
    ageRating: 'TV-G',
    releaseYear: 2024,
    duration: '1h 52m',
    genre: ['Documentary', 'Nature', 'Wildlife'],
    badges: ['4K Ultra HD', 'Dolby Vision', 'Dolby Atmos'],
    type: 'movie',
    streamUrl: SAMPLE_VIDEO_STREAMS[1],
    featured: true
  }
];

export const CONTINUE_WATCHING_ITEMS: MediaItem[] = [
  {
    id: 'cw-1',
    title: 'Quantum Velocity',
    subtitle: 'S1:E4 • The Speed of Light',
    description: 'Rival formula experimental pilots test sub-atomic propulsion engines in the Mojave salt flats.',
    posterUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=1600&auto=format&fit=crop&q=80',
    rating: '8.4/10',
    ageRating: 'TV-14',
    releaseYear: 2024,
    duration: '48m remaining',
    genre: ['Action', 'Sci-Fi'],
    badges: ['4K', 'HDR'],
    type: 'show',
    progressPercent: 68,
    streamUrl: SAMPLE_VIDEO_STREAMS[2]
  },
  {
    id: 'cw-2',
    title: 'Echoes of the Mediterranean',
    subtitle: 'S2:E1 • Coastal Legends',
    description: 'An architectural historian explores submerged Roman ports and forgotten citadel sanctuaries.',
    posterUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80',
    rating: '8.9/10',
    ageRating: 'TV-PG',
    releaseYear: 2024,
    duration: '22m remaining',
    genre: ['Documentary', 'History'],
    badges: ['4K', 'HDR10+'],
    type: 'show',
    progressPercent: 42,
    streamUrl: SAMPLE_VIDEO_STREAMS[3]
  },
  {
    id: 'cw-3',
    title: 'Shadows Over Kyoto',
    subtitle: 'Movie • 1h 14m remaining',
    description: 'An undercover inspector unravels a decades-old tea syndicate conspiracy beneath the Gion lanterns.',
    posterUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1600&auto=format&fit=crop&q=80',
    rating: '8.6/10',
    ageRating: 'R',
    releaseYear: 2023,
    duration: '1h 14m remaining',
    genre: ['Crime', 'Noir', 'Drama'],
    badges: ['4K', 'Dolby Atmos'],
    type: 'movie',
    progressPercent: 35,
    streamUrl: SAMPLE_VIDEO_STREAMS[0]
  },
  {
    id: 'cw-4',
    title: 'Apex Altitude: Himalayas',
    subtitle: 'S1:E6 • The Khumbu Crossing',
    description: 'Mountain rescue pilots coordinate extreme evacuation procedures in blizzard conditions.',
    posterUrl: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=80',
    rating: '9.1/10',
    ageRating: 'TV-14',
    releaseYear: 2024,
    duration: '15m remaining',
    genre: ['Adventure', 'Reality'],
    badges: ['4K Ultra HD'],
    type: 'show',
    progressPercent: 82,
    streamUrl: SAMPLE_VIDEO_STREAMS[4]
  }
];

export const INSTALLED_APPS: TVApp[] = [
  {
    id: 'app-youtube',
    name: 'YouTube',
    iconName: 'Youtube',
    accentColor: '#FF0000',
    category: 'Video Streaming',
    description: 'Watch your favorite creators, music videos, live streams, and 4K HDR feeds on TV.',
    installed: true,
    version: '4.22.1',
    size: '84 MB'
  },
  {
    id: 'app-netflix',
    name: 'Netflix',
    iconName: 'Tv',
    accentColor: '#E50914',
    category: 'Movies & Series',
    description: 'Watch TV shows and movies recommended just for you, including award-winning Netflix originals.',
    installed: true,
    version: '8.12.0',
    size: '112 MB'
  },
  {
    id: 'app-disney',
    name: 'Disney+',
    iconName: 'Film',
    accentColor: '#113CCF',
    category: 'Family & Entertainment',
    description: 'Stream Star Wars, Marvel, Pixar, Disney, and National Geographic in 4K Dolby Vision.',
    installed: true,
    version: '3.19.4',
    size: '96 MB'
  },
  {
    id: 'app-prime',
    name: 'Prime Video',
    iconName: 'PlayCircle',
    accentColor: '#00A8E1',
    category: 'Movies & TV',
    description: 'Stream Amazon Originals, blockbuster movies, live sports, and channel subscriptions.',
    installed: true,
    version: '6.4.1',
    size: '104 MB'
  },
  {
    id: 'app-spotify',
    name: 'Spotify',
    iconName: 'Music',
    accentColor: '#1DB954',
    category: 'Music & Audio',
    description: 'Listen to millions of songs, curated playlists, and podcasts right from your TV screen.',
    installed: true,
    version: '2.14.8',
    size: '64 MB'
  },
  {
    id: 'app-weather',
    name: 'AccuWeather TV',
    iconName: 'CloudSun',
    accentColor: '#F05A28',
    category: 'News & Weather',
    description: 'Real-time local satellite radar, 10-day forecast, and severe storm alerts for your big screen.',
    installed: true,
    version: '2.0.3',
    size: '48 MB'
  },
  {
    id: 'app-twitch',
    name: 'Twitch TV',
    iconName: 'Gamepad2',
    accentColor: '#9146FF',
    category: 'Live Gaming',
    description: 'Watch live gaming broadcasts, esports tournaments, creative streams, and IRL channels.',
    installed: true,
    version: '4.8.2',
    size: '72 MB'
  },
  {
    id: 'app-plex',
    name: 'Plex Media',
    iconName: 'Layers',
    accentColor: '#E5A00D',
    category: 'Home Media',
    description: 'Stream your personal video, music, and photo collections seamlessly over local Wi-Fi.',
    installed: true,
    version: '10.5.0',
    size: '88 MB'
  }
];

export const TOP_MOVIES: MediaItem[] = [
  {
    id: 'mov-1',
    title: 'The Martian Sanctuary',
    description: 'After an atmospheric breach on Mars Colony Beta, a botanist and roboticist race against frozen storms to preserve earth botanical seeds.',
    posterUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1600&auto=format&fit=crop&q=80',
    rating: '9.0/10',
    ageRating: 'PG-13',
    releaseYear: 2025,
    duration: '2h 21m',
    genre: ['Sci-Fi', 'Drama'],
    badges: ['4K UHD', 'Dolby Vision', 'Dolby Atmos'],
    type: 'movie',
    trendingRank: 1,
    streamUrl: SAMPLE_VIDEO_STREAMS[0]
  },
  {
    id: 'mov-2',
    title: 'Chronicles of the Deep Trench',
    description: 'A deep-sea submersible discovers a geothermal biome housing biological luminescence never witnessed by humankind.',
    posterUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80',
    rating: '8.7/10',
    ageRating: 'PG',
    releaseYear: 2024,
    duration: '1h 56m',
    genre: ['Adventure', 'Mystery'],
    badges: ['4K UHD', 'HDR10+'],
    type: 'movie',
    trendingRank: 2,
    streamUrl: SAMPLE_VIDEO_STREAMS[1]
  },
  {
    id: 'mov-3',
    title: 'Midnight in Shinjuku',
    description: 'A retired jazz pianist and an elusive private investigator collaborate to locate a lost master vinyl with encrypted frequencies.',
    posterUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1600&auto=format&fit=crop&q=80',
    rating: '8.8/10',
    ageRating: 'R',
    releaseYear: 2024,
    duration: '2h 05m',
    genre: ['Noir', 'Drama', 'Music'],
    badges: ['4K', 'Dolby Atmos'],
    type: 'movie',
    trendingRank: 3,
    streamUrl: SAMPLE_VIDEO_STREAMS[2]
  },
  {
    id: 'mov-4',
    title: 'Aurora Borealis Protocol',
    description: 'Special operations navigators in Tromsø detect clandestine signal jamming targeting polar satellite constellations.',
    posterUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1600&auto=format&fit=crop&q=80',
    rating: '8.5/10',
    ageRating: 'PG-13',
    releaseYear: 2025,
    duration: '2h 12m',
    genre: ['Action', 'Thriller'],
    badges: ['4K UHD', 'Dolby Vision'],
    type: 'movie',
    trendingRank: 4,
    streamUrl: SAMPLE_VIDEO_STREAMS[3]
  },
  {
    id: 'mov-5',
    title: 'The Alpine Descent',
    description: 'Extreme freeride skiers brave an unmapped couloir in the Swiss Alps while racing an impending avalanche wall.',
    posterUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=80',
    rating: '8.9/10',
    ageRating: 'TV-14',
    releaseYear: 2024,
    duration: '1h 48m',
    genre: ['Action', 'Sports'],
    badges: ['4K 60fps', 'HDR'],
    type: 'movie',
    trendingRank: 5,
    streamUrl: SAMPLE_VIDEO_STREAMS[4]
  }
];

export const POPULAR_SERIES: MediaItem[] = [
  {
    id: 'ser-1',
    title: 'Silicon Dynasty',
    description: 'The cutthroat race between three rival semiconductor pioneers to achieve room-temperature quantum computational superiority.',
    posterUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&auto=format&fit=crop&q=80',
    rating: '9.3/10',
    ageRating: 'TV-MA',
    releaseYear: 2025,
    duration: 'Season 2 • 10 Episodes',
    genre: ['Drama', 'Tech', 'Thriller'],
    badges: ['4K UHD', 'Dolby Vision', 'Dolby Atmos'],
    type: 'show',
    streamUrl: SAMPLE_VIDEO_STREAMS[0]
  },
  {
    id: 'ser-2',
    title: 'Pacific Rim Frontiers',
    description: 'Marine biologists and naval salvage teams explore sunken volcanic vents where uncharted oceanic ecosystems thrive.',
    posterUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80',
    rating: '8.9/10',
    ageRating: 'TV-PG',
    releaseYear: 2024,
    duration: 'Season 1 • 6 Episodes',
    genre: ['Documentary', 'Nature'],
    badges: ['4K UHD', 'HDR10+'],
    type: 'show',
    streamUrl: SAMPLE_VIDEO_STREAMS[1]
  },
  {
    id: 'ser-3',
    title: 'Crown of the Highlands',
    description: 'Medieval clan politics and loyalties erupt across 16th century Scotland as sovereign crowns collide.',
    posterUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=1600&auto=format&fit=crop&q=80',
    rating: '8.8/10',
    ageRating: 'TV-MA',
    releaseYear: 2024,
    duration: 'Season 3 • 8 Episodes',
    genre: ['Historical', 'Drama'],
    badges: ['4K', 'Dolby Atmos'],
    type: 'show',
    streamUrl: SAMPLE_VIDEO_STREAMS[2]
  },
  {
    id: 'ser-4',
    title: 'Vanguard: Lunar Outpost',
    description: 'The daily high-stakes operations of the first permanent international lunar orbital refuel station.',
    posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600&auto=format&fit=crop&q=80',
    rating: '9.0/10',
    ageRating: 'TV-14',
    releaseYear: 2025,
    duration: 'Season 1 • 8 Episodes',
    genre: ['Sci-Fi', 'Suspense'],
    badges: ['4K UHD', 'HDR'],
    type: 'show',
    streamUrl: SAMPLE_VIDEO_STREAMS[3]
  }
];

export const LIVE_CHANNELS: LiveChannel[] = [
  {
    id: 'chan-1',
    name: 'NASA TV 4K',
    channelNumber: 101,
    category: 'Space & Science',
    currentProgram: 'ISS Earth Live View & Spacewalk Briefing',
    currentProgramTime: '11:00 AM - 1:00 PM',
    progress: 74,
    nextProgram: 'Artemis IV Lunar Mission Telemetry',
    thumbnail: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&auto=format&fit=crop&q=80',
    logoColor: '#0B3D91',
    streamUrl: SAMPLE_VIDEO_STREAMS[0]
  },
  {
    id: 'chan-2',
    name: 'Red Bull TV Extreme',
    channelNumber: 104,
    category: 'Sports & Action',
    currentProgram: 'Rampage Free-Ride Downhill Finals',
    currentProgramTime: '11:30 AM - 1:30 PM',
    progress: 45,
    nextProgram: 'Cliff Diving World Series Polignano',
    thumbnail: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&auto=format&fit=crop&q=80',
    logoColor: '#CC0000',
    streamUrl: SAMPLE_VIDEO_STREAMS[4]
  },
  {
    id: 'chan-3',
    name: 'Sky Nature World',
    channelNumber: 108,
    category: 'Documentary',
    currentProgram: 'Serengeti Migration in Ultra High-Def',
    currentProgramTime: '12:00 PM - 1:00 PM',
    progress: 30,
    nextProgram: 'Great Barrier Reef Coral Spawning',
    thumbnail: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=600&auto=format&fit=crop&q=80',
    logoColor: '#107C41',
    streamUrl: SAMPLE_VIDEO_STREAMS[1]
  },
  {
    id: 'chan-4',
    name: 'EuroNews Live',
    channelNumber: 112,
    category: 'Global News',
    currentProgram: 'World Economic Forum & Tech Brief',
    currentProgramTime: '12:30 PM - 1:00 PM',
    progress: 88,
    nextProgram: 'European Markets & Climate Summit',
    thumbnail: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?w=600&auto=format&fit=crop&q=80',
    logoColor: '#00529B',
    streamUrl: SAMPLE_VIDEO_STREAMS[2]
  }
];

export const AMBIENT_ARTWORKS = [
  {
    title: 'Glacial Lagoon Twilight',
    location: 'Jökulsárlón, Iceland',
    photographer: 'Snorri Gunnarsson',
    url: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1920&auto=format&fit=crop&q=85'
  },
  {
    title: 'Cosmic Nebula Andromeda Core',
    location: 'Deep Space Hubble Imagery',
    photographer: 'Astrophotography Collective',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop&q=85'
  },
  {
    title: 'Autumn Mist over Mount Fuji',
    location: 'Yamanashi Prefecture, Japan',
    photographer: 'Kenji Takahashi',
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&auto=format&fit=crop&q=85'
  },
  {
    title: 'Golden Hour at the Dolomites',
    location: 'Val di Funes, Italy',
    photographer: 'Marco Bellini',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&auto=format&fit=crop&q=85'
  }
];
