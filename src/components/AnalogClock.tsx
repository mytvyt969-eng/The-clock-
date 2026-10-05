import React, { useMemo } from 'react';

interface AnalogClockProps {
  currentTime: Date;
  isLiveTime: boolean;
  size?: number;
  className?: string;
}

export const AnalogClock: React.FC<AnalogClockProps> = ({
  currentTime,
  isLiveTime,
  size = 180,
  className,
}) => {
  // Calculate angles
  const { hourDeg, minDeg, secDeg, ampm } = useMemo(() => {
    if (!isLiveTime) {
      // In screenshot match mode: hands at ~12:05 PM
      // Hour hand slightly past 12 (approx 12 * 30 + 5 * 0.5 = 2.5 ~ 15 deg)
      // Minute hand at 1 (5 mins = 30 deg)
      return {
        hourDeg: 16,
        minDeg: 30,
        secDeg: 0,
        ampm: 'PM',
      };
    }

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const millis = currentTime.getMilliseconds();

    const secDeg = (seconds + millis / 1000) * 6;
    const minDeg = (minutes + seconds / 60) * 6;
    const hourDeg = ((hours % 12) + minutes / 60 + seconds / 3600) * 30;
    const ampm = hours >= 12 ? 'PM' : 'AM';

    return { hourDeg, minDeg, secDeg, ampm };
  }, [currentTime, isLiveTime]);

  const radius = 86;
  const center = 100;

  // Numbers 1 to 12 positions
  const numbers = [
    { num: 12, angle: 0 },
    { num: 1, angle: 30 },
    { num: 2, angle: 60 },
    { num: 3, angle: 90 },
    { num: 4, angle: 120 },
    { num: 5, angle: 150 },
    { num: 6, angle: 180 },
    { num: 7, angle: 210 },
    { num: 8, angle: 240 },
    { num: 9, angle: 270 },
    { num: 10, angle: 300 },
    { num: 11, angle: 330 },
  ];

  return (
    <div
      id="analog-clock-container"
      className={`relative flex items-center justify-center shrink-0 ${className || ''}`}
      style={!className ? { width: size, height: size } : undefined}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-2xl"
      >
        <defs>
          <filter id="dialShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Dark Ring Bezel */}
        <circle
          cx={center}
          cy={center}
          r={radius + 6}
          fill="#0c172c"
          stroke="#1e293b"
          strokeWidth="1.5"
          filter="url(#dialShadow)"
        />

        {/* White Dial Face */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="1"
        />

        {/* Hour Numbers 1 - 12 (Bold black Arabic numerals) */}
        {numbers.map(({ num, angle }) => {
          const rad = ((angle - 90) * Math.PI) / 180;
          const rPos = radius - 16;
          const x = center + rPos * Math.cos(rad);
          const y = center + rPos * Math.sin(rad);

          return (
            <text
              key={num}
              x={x}
              y={y}
              fill="#0f172a"
              fontSize={num >= 10 ? '13' : '14'}
              fontWeight="700"
              fontFamily="Plus Jakarta Sans, sans-serif"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {num}
            </text>
          );
        })}

        {/* "PM" / "AM" Text Indicator (Centered lower dial) */}
        <text
          x={center}
          y={center + 24}
          fill="#0f172a"
          fontSize="10"
          fontWeight="700"
          fontFamily="Plus Jakarta Sans, sans-serif"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {ampm}
        </text>

        {/* Hour Hand (Black, sleek tapered) */}
        <g transform={`rotate(${hourDeg} ${center} ${center})`}>
          <line
            x1={center}
            y1={center + 8}
            x2={center}
            y2={center - 42}
            stroke="#0f172a"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>

        {/* Minute Hand (Black, longer) */}
        <g transform={`rotate(${minDeg} ${center} ${center})`}>
          <line
            x1={center}
            y1={center + 10}
            x2={center}
            y2={center - 62}
            stroke="#0f172a"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </g>

        {/* Second Hand (Slim black or active tick) */}
        {isLiveTime && (
          <g transform={`rotate(${secDeg} ${center} ${center})`}>
            <line
              x1={center}
              y1={center + 12}
              x2={center}
              y2={center - 68}
              stroke="#0f172a"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>
        )}

        {/* Center Pivot Pin */}
        <circle cx={center} cy={center} r="4.5" fill="#0f172a" />
        <circle cx={center} cy={center} r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
};
