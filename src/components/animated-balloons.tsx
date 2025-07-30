import React from 'react';
import { cn } from '@/lib/utils';

const Balloon = ({ color, style }: { color: string; style: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 100 125" 
    className="absolute bottom-0 w-20 h-25 md:w-28 md:h-35 animate-float-up" 
    style={style}
    aria-hidden="true"
    data-ai-hint="balloon"
  >
    <defs>
      <radialGradient id={`grad-${color.replace('#', '')}`} cx="30%" cy="30%" r="70%">
        <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.4 }} />
        <stop offset="100%" style={{ stopColor: color, stopOpacity: 1 }} />
      </radialGradient>
    </defs>
    <path 
      d="M50,10 C10,10 10,60 50,100 C90,60 90,10 50,10 Z" 
      fill={`url(#grad-${color.replace('#', '')})`} 
    />
    <path 
      d="M45,100 C40,110 60,110 55,100 Z" 
      fill={color} 
    />
    <path 
      d="M50,100 v 20" 
      stroke={color}
      strokeWidth="1" 
    />
  </svg>
);

const AnimatedBalloons = () => {
  const balloons = [
    { color: 'hsl(var(--primary))', left: '10%', animationDuration: '12s', animationDelay: '0s' },
    { color: 'hsl(var(--accent))', left: '25%', animationDuration: '10s', animationDelay: '2s' },
    { color: 'hsl(var(--primary))', left: '40%', animationDuration: '15s', animationDelay: '1s' },
    { color: '#FF6B6B', left: '60%', animationDuration: '11s', animationDelay: '4s' },
    { color: 'hsl(var(--accent))', left: '75%', animationDuration: '13s', animationDelay: '0.5s' },
    { color: '#4ECDC4', left: '90%', animationDuration: '9s', animationDelay: '3s' },
  ];

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      {balloons.map((b, i) => (
        <Balloon key={i} color={b.color} style={{ left: b.left, animationDuration: b.animationDuration, animationDelay: b.animationDelay }} />
      ))}
    </div>
  );
};

export default AnimatedBalloons;
