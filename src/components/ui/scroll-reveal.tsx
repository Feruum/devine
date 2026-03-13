'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView, type Variant, type Transition } from 'motion/react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variants?: { hidden: Variant; visible: Variant };
  transition?: Transition;
  once?: boolean;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

const directionMap: Record<string, { x?: number; y?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
};

export function ScrollReveal({
  children,
  className,
  variants,
  transition,
  once = true,
  delay = 0,
  direction = 'up',
  distance = 40,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '0px 0px -80px 0px' });

  const dirOffset = directionMap[direction];
  const defaultVariants = {
    hidden: {
      opacity: 0,
      filter: 'blur(4px)',
      ...(dirOffset.x ? { x: dirOffset.x * distance } : {}),
      ...(dirOffset.y ? { y: dirOffset.y * distance } : {}),
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants || defaultVariants}
      transition={transition || { duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
