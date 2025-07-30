'use client'

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import GalaxyBackground from '@/components/galaxy-background';
import AnimatedBalloons from '@/components/animated-balloons';
import BirthdayMessage from '@/components/birthday-message';
import AnimatedCake from '@/components/animated-cake';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (!isMounted) return;
  
    const sequence = [
      () => setStep(1), // Show balloons
      () => setStep(2), // Show birthday message
      () => setStep(3)  // Show cake
    ];
  
    const timers = sequence.map((action, index) => 
      setTimeout(action, 500 + index * 1500)
    );
  
    return () => timers.forEach(clearTimeout);
  }, [isMounted]);

  return (
    <div className={cn(
      'flex min-h-screen w-full flex-col items-center justify-center p-4 overflow-hidden relative transition-opacity duration-1000',
      isMounted ? 'opacity-100' : 'opacity-0'
    )}>
      <GalaxyBackground />
      
      <div className="z-10 flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
        <div className={cn(
          "transition-opacity duration-1000",
          step >= 2 ? "opacity-100" : "opacity-0"
        )}>
          <BirthdayMessage />
        </div>
        <div className={cn(
          "transition-opacity duration-1000",
           step >= 3 ? "opacity-100" : "opacity-0"
        )}>
          <AnimatedCake />
        </div>
      </div>
      
      <div className={cn(
        "absolute inset-0 z-0 transition-opacity duration-1000",
        step >= 1 ? "opacity-100" : "opacity-0"
      )}>
        <AnimatedBalloons />
      </div>

    </div>
  );
}
