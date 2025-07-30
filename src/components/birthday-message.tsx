import React from 'react';
import { cn } from '@/lib/utils';

const LiquidText = () => (
  <svg viewBox="0 0 400 150" className="w-full h-auto max-w-md -my-8 md:-my-12" role="img" aria-label="Faizan">
    <defs>
      <linearGradient id="galaxy-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
      </linearGradient>

      <filter id="liquid-morph">
        <feTurbulence type="fractalNoise" baseFrequency="0.02 0.05" numOctaves="2" seed="2" result="turbulence">
          <animate 
            attributeName="baseFrequency" 
            dur="15s" 
            values="0.02 0.05; 0.03 0.04; 0.025 0.06; 0.02 0.05" 
            repeatCount="indefinite" />
        </feTurbulence>
        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="0" xChannelSelector="R" yChannelSelector="G">
            <animate
                attributeName="scale"
                values="0;50;25;35;20;30;25"
                dur="2s"
                fill="freeze"
                begin="0.2s"
            />
        </feDisplacementMap>
      </filter>
    </defs>

    <text
      x="50%"
      y="50%"
      dy=".35em"
      textAnchor="middle"
      className="font-headline font-black tracking-tighter"
      fontSize="90"
      fill="url(#galaxy-grad)"
      style={{ filter: 'url(#liquid-morph)' }}
    >
      Faizan
    </text>
  </svg>
);


const BirthdayMessage = () => {
  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-headline tracking-tight text-center">
        <span className="block">Happy Birthday</span>
        <LiquidText />
        <span className="block">mama</span>
      </h1>
    </div>
  );
};

export default BirthdayMessage;
