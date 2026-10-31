import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const LogoIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 38,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-xs transition-transform duration-300 group-hover:scale-105 ${className}`}
    >
      <defs>
        {/* Main Badge Gradient - Warm Golden Amber */}
        <linearGradient id="logoBadgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        {/* Soft Shadow Filter */}
        <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#f59e0b" floodOpacity="0.3" />
        </filter>

        {/* Gloss highlight */}
        <linearGradient id="glossHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Rounded Squircle Container */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="12"
        fill="url(#logoBadgeGradient)"
        filter="url(#badgeShadow)"
      />
      {/* Top Gloss Curve */}
      <rect x="3" y="3" width="42" height="20" rx="10" fill="url(#glossHighlight)" />

      {/* Modern Pot Lid Handle (Silver/White knob) */}
      <ellipse cx="24" cy="14" rx="3.5" ry="2" fill="#ffffff" />
      <rect x="22.5" y="15" width="3" height="2" rx="0.5" fill="#fecdd3" />

      {/* Pot Lid Dome */}
      <path
        d="M13 20 C13 17.5 17.5 16 24 16 C30.5 16 35 17.5 35 20 Z"
        fill="#ffffff"
        opacity="0.95"
      />

      {/* Pot Main Body (Dutch Oven / Slow Cooker vessel) */}
      <path
        d="M12 21 C12 21 13 32 14.5 34 C16 36 19 37 24 37 C29 37 32 36 33.5 34 C35 32 36 21 36 21 Z"
        fill="#ffffff"
      />

      {/* Inside Liquid / Food Line (Warm Amber/Coral Depth) */}
      <ellipse cx="24" cy="22" rx="9" ry="2" fill="#ffe4e6" />

      {/* Ergonomic Pot Side Handles */}
      <path
        d="M12 23 C9.5 23 9.5 27 12 27"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M36 23 C38.5 23 38.5 27 36 27"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Thermal Science Steam Curves (Graceful rising steam) */}
      <path
        d="M19 12 C18 9 21 8 20 5"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M24 11 C23 7.5 26.5 6.5 25 3.5"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M29 12 C28 9 31 8 30 5"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />

      {/* Health / Nutrition Accent Star / Ember Dot */}
      <circle cx="24" cy="28" r="1.5" fill="#f59e0b" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const titleSizes = {
    sm: 'text-xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Brand Icon Emblem */}
      <LogoIcon size={iconSizes[size]} />

      {/* Brand Wordmark & Tagline */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1">
          <span className={`${titleSizes[size]} font-black tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors leading-none`}>
            recipe<span className="text-amber-500">pots</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-amber-500 self-center -mb-0.5"></span>
        </div>
        {showTagline && (
          <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase hidden sm:block mt-0.5">
            One-Pot &amp; Slow Cooker Journal
          </span>
        )}
      </div>
    </div>
  );
};
