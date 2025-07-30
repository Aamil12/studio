import React from 'react';

const AnimatedCake = () => {
  return (
    <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
      <svg width="200" height="220" viewBox="0 0 200 220" data-ai-hint="birthday cake">
        <defs>
          <linearGradient id="cake-icing" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.8)" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
          <linearGradient id="cake-body" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4A77A" />
            <stop offset="100%" stopColor="#A47449" />
          </linearGradient>
        </defs>

        {/* Plate */}
        <ellipse cx="100" cy="210" rx="90" ry="10" fill="hsl(var(--accent) / 0.5)" />

        {/* Cake Layer 2 */}
        <rect x="30" y="150" width="140" height="50" rx="5" fill="url(#cake-body)" />
        <rect x="30" y="145" width="140" height="15" rx="5" fill="url(#cake-icing)" />

        {/* Cake Layer 1 */}
        <rect x="20" y="90" width="160" height="60" rx="5" fill="url(#cake-body)" />
        <rect x="20" y="85" width="160" height="20" rx="5" fill="url(#cake-icing)" />

        {/* Candles */}
        <g transform="translate(60, 45)">
          <rect x="0" y="0" width="10" height="40" fill="hsl(var(--accent))" />
          <path d="M5, -15 Q 0 -5, 5 0 Q 10 -5, 5 -15" fill="hsl(var(--primary))" className="animate-flicker" />
        </g>
        <g transform="translate(100, 25)">
          <rect x="0" y="0" width="10" height="60" fill="hsl(var(--accent))" />
          <path d="M5, -15 Q 0 -5, 5 0 Q 10 -5, 5 -15" fill="hsl(var(--primary))" className="animate-flicker" style={{animationDelay: '0.3s'}} />
        </g>
        <g transform="translate(140, 45)">
          <rect x="0" y="0" width="10" height="40" fill="hsl(var(--accent))" />
          <path d="M5, -15 Q 0 -5, 5 0 Q 10 -5, 5 -15" fill="hsl(var(--primary))" className="animate-flicker" style={{animationDelay: '0.6s'}} />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedCake;
