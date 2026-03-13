'use client';

import { cn } from '@/lib/utils';
import { Sparkle } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {/* Logo circle — placeholder for SVG. Replace with actual SVG later */}
      <div
        className={cn(
          sizes[size],
          'rounded-full flex items-center justify-center relative',
          'bg-devine-navy border border-devine-lavender/20'
        )}
      >
        <span className="text-white font-bold text-xs tracking-tight">D</span>
        {/* Small butterfly + star above "i" — placeholder */}
        <span className="absolute -top-1 -right-1 w-3 h-3 text-white/80" >🦋</span>
        <Sparkle className="absolute -top-2 right-0.5 w-2 h-2 text-devine-gold" strokeWidth={2} />
      </div>
      <span
        className={cn(
          textSizes[size],
          'font-display font-semibold tracking-wide text-white'
        )}
      >
        Devine
      </span>
    </div>
  );
}
