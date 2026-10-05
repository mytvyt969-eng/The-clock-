import React, { useState, useEffect, useCallback } from 'react';
import {
  Sun,
  Moon,
  CloudSun,
  CloudMoon,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudSnow,
  CloudLightning,
  CloudFog,
  RefreshCw,
} from 'lucide-react';

interface WeatherData {
  temperatureF: number;
  temperatureC: number;
  weatherCode: number;
  isDay: boolean;
  conditionText: string;
  cityName: string;
  lastUpdated: Date;
}

interface WeatherWidgetProps {
  location: string;
  unit?: 'F' | 'C';
  onUnitToggle?: () => void;
}

// Map WMO codes to descriptions and icons
function getWeatherInfo(code: number, isDay: boolean) {
  if (code === 0) {
    return {
      text: isDay ? 'Sunny' : 'Clear',
      icon: isDay ? Sun : Moon,
      color: isDay ? 'text-amber-400' : 'text-indigo-200',
    };
  }
  if (code === 1) {
    return {
      text: isDay ? 'Mainly Clear' : 'Clear Sky',
      icon: isDay ? Sun : Moon,
      color: isDay ? 'text-amber-300' : 'text-indigo-200',
    };
  }
  if (code === 2) {
    return {
      text: 'Partly Cloudy',
      icon: isDay ? CloudSun : CloudMoon,
      color: isDay ? 'text-amber-300' : 'text-blue-200',
    };
  }
  if (code === 3) {
    return {
      text: 'Overcast',
      icon: Cloud,
      color: 'text-slate-300',
    };
  }
  if (code === 45 || code === 48) {
    return {
      text: 'Foggy',
      icon: CloudFog,
      color: 'text-slate-300',
    };
  }
  if (code >= 51 && code <= 55) {
    return {
      text: 'Drizzle',
      icon: CloudDrizzle,
      color: 'text-sky-300',
    };
  }
  if (code === 56 || code === 57 || code === 66 || code === 67) {
    return {
      text: 'Freezing Rain',
      icon: CloudSnow,
      color: 'text-cyan-200',
    };
  }
  if (code >= 61 && code <= 65) {
    return {
      text: 'Rain',
      icon: CloudRain,
      color: 'text-sky-400',
    };
  }
  if (code >= 71 && code <= 77) {
    return {
      text: 'Snow',
      icon: CloudSnow,
      color: 'text-cyan-100',
    };
  }
  if (code >= 80 && code <= 82) {
    return {
      text: 'Showers',
      icon: CloudRain,
      color: 'text-sky-300',
    };
  }
  if (code === 85 || code === 86) {
    return {
      text: 'Snow Showers',
      icon: CloudSnow,
      color: 'text-cyan-100',
    };
  }
  if (code >= 95) {
    return {
      text: 'Thunderstorm',
      icon: CloudLightning,
      color: 'text-yellow-400',
    };
  }
  return {
    text: isDay ? 'Fair' : 'Clear',
    icon: isDay ? Sun : Moon,
    color: 'text-amber-300',
  };
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  location,
  unit = 'F',
  onUnitToggle,
}) => {
  const [weather, setWeather] = useState<WeatherData>({
    temperatureF: 79,
    temperatureC: 26,
    weatherCode: 0,
    isDay: true,
    conditionText: 'Sunny',
    cityName: 'Dallas',
    lastUpdated: new Date(),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherForLocation = useCallback(async (loc: string) => {
    if (!loc || !loc.trim()) return;

    setLoading(true);
    setError(null);

    // Build candidate search queries from location string
    const trimmed = loc.trim();
    const parts = trimmed.split(',').map((s) => s.trim()).filter(Boolean);
    const candidateQueries: string[] = [trimmed];

    if (parts.length > 1) {
      // e.g. "Dallas, Texas"
      candidateQueries.push(`${parts[0]}, ${parts[1]}`);
      // e.g. "Dallas"
      candidateQueries.push(parts[0]);
    }

    try {
      let geoResult: {
        latitude: number;
        longitude: number;
        name: string;
        admin1?: string;
        country?: string;
      } | null = null;

      // Try candidates in order
      for (const query of candidateQueries) {
        try {
          const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
              query
            )}&count=1&language=en&format=json`
          );
          if (geoRes.ok) {
            const data = await geoRes.json();
            if (data.results && data.results.length > 0) {
              geoResult = data.results[0];
              break;
            }
          }
        } catch {
          // Continue to next candidate
        }
      }

      if (!geoResult) {
        // Fallback default coordinates for Dallas if geocode fails
        geoResult = {
          latitude: 32.783,
          longitude: -96.806,
          name: parts[0] || 'Dallas',
        };
      }

      // Fetch current weather from Open-Meteo
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${geoResult.latitude}&longitude=${geoResult.longitude}&current=temperature_2m,weather_code,is_day&temperature_unit=fahrenheit`
      );

      if (!weatherRes.ok) {
        throw new Error(`Weather fetch error: ${weatherRes.status}`);
      }

      const weatherData = await weatherRes.json();
      const current = weatherData.current;

      if (current) {
        const tempF = Math.round(current.temperature_2m);
        const tempC = Math.round(((tempF - 32) * 5) / 9);
        const isDay = current.is_day === 1;
        const code = current.weather_code ?? 0;
        const info = getWeatherInfo(code, isDay);

        setWeather({
          temperatureF: tempF,
          temperatureC: tempC,
          weatherCode: code,
          isDay,
          conditionText: info.text,
          cityName: geoResult.name || parts[0] || 'Local',
          lastUpdated: new Date(),
        });
      }
    } catch (err) {
      console.warn('Weather fetch encountered an issue, using cached data:', err);
      setError('Offline mode');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch whenever the masjid location changes
  useEffect(() => {
    fetchWeatherForLocation(location);

    // Auto-refresh weather every 20 minutes
    const interval = setInterval(() => {
      fetchWeatherForLocation(location);
    }, 20 * 60 * 1000);

    return () => clearInterval(interval);
  }, [location, fetchWeatherForLocation]);

  const weatherInfo = getWeatherInfo(weather.weatherCode, weather.isDay);
  const IconComponent = weatherInfo.icon;
  const currentTemp = unit === 'F' ? weather.temperatureF : weather.temperatureC;

  return (
    <div
      id="masjid-weather-widget"
      onClick={onUnitToggle}
      title={`${weather.cityName}: ${weather.conditionText}, ${currentTemp}°${unit}. Click to toggle °F / °C.`}
      className="flex items-center gap-2.5 cursor-pointer select-none group transition-transform duration-150 hover:scale-105 active:scale-95"
    >
      {/* Weather Icon with ambient glow */}
      <div className="relative flex items-center justify-center">
        <div
          className={`shrink-0 transition-transform duration-300 group-hover:rotate-6 ${weatherInfo.color}`}
        >
          <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)]" />
        </div>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs rounded-full">
            <RefreshCw className="w-3.5 h-3.5 text-white/90 animate-spin" />
          </div>
        )}
      </div>

      {/* Temperature and Condition Description */}
      <div className="text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="block text-[11px] sm:text-xs font-medium text-white/80 leading-none">
            {weather.conditionText}
          </span>
          {error && (
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="Offline preview" />
          )}
        </div>
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className="text-base sm:text-xl font-bold text-white tracking-wide leading-tight">
            {currentTemp}°{unit}
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold text-white/50 group-hover:text-cyan-400 transition-colors">
            {unit === 'F' ? '°C' : '°F'}
          </span>
        </div>
      </div>
    </div>
  );
};
