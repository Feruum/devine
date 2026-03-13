'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
}

export function GlowCard({
  children,
  className,
  glowColor = 'rgba(200, 182, 255, 0.08)',
  hoverScale = 1.02,
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative rounded-2xl',
        'bg-devine-navy/80 border border-white/[0.06]',
        'transition-colors duration-300',
        'hover:border-devine-lavender/20',
        className
      )}
      whileHover={{ scale: hoverScale, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Glow overlay on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
