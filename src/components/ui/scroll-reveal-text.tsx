'use client';

import {
  Children,
  isValidElement,
  ReactNode,
  cloneElement,
  useMemo,
  useRef,
  ReactElement,
} from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

interface ScrollRevealTextProps {
  children: ReactNode;
  className?: string;
  textClassName?: string;
  enableBlur?: boolean;
  baseOpacity?: number;
  blurStrength?: number;
  staggerDelay?: number;
}

/**
 * Splits mixed children (text + React elements like images) into
 * individually-animatable word/element units that reveal on scroll.
 *
 * Pure Framer Motion — no GSAP dependency.
 */
export function ScrollRevealText({
  children,
  className,
  textClassName,
  enableBlur = true,
  baseOpacity = 0.15,
  blurStrength = 4,
  staggerDelay = 0.04,
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '0px 0px -15% 0px' });

  /* ── scroll-linked rotation tilt ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const rotate = useTransform(scrollYProgress, [0, 0.4], [2, 0]);

  /* ── split children into word units ── */
  const units = useMemo(() => flattenToUnits(children), [children]);

  return (
    <motion.div
      ref={containerRef}
      className={cn('my-5', className)}
      style={{ rotate, transformOrigin: '0% 50%' }}
    >
      <p
        className={cn(
          'text-lg md:text-xl leading-relaxed',
          textClassName,
        )}
      >
        {units.map((unit, i) => {
          if (unit.type === 'space') return unit.value;

          const delay = i * staggerDelay;

          return (
            <motion.span
              key={i}
              className={cn(
                'inline-block',
                unit.type === 'element' && 'align-middle',
              )}
              initial={{
                opacity: baseOpacity,
                filter: enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)',
              }}
              animate={
                isInView
                  ? { opacity: 1, filter: 'blur(0px)' }
                  : {
                      opacity: baseOpacity,
                      filter: enableBlur
                        ? `blur(${blurStrength}px)`
                        : 'blur(0px)',
                    }
              }
              transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            >
              {unit.value}
            </motion.span>
          );
        })}
      </p>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
 * Helpers — split React children tree into
 * word / element / space tokens
 * ──────────────────────────────────────────── */

type Unit =
  | { type: 'word'; value: string }
  | { type: 'space'; value: string }
  | { type: 'element'; value: ReactNode };

function flattenToUnits(children: ReactNode): Unit[] {
  const units: Unit[] = [];

  const walk = (node: ReactNode) => {
    if (node == null || typeof node === 'boolean') return;

    if (typeof node === 'string') {
      const parts = node.split(/(\s+)/);
      for (const part of parts) {
        if (/^\s+$/.test(part)) {
          units.push({ type: 'space', value: part });
        } else if (part.length > 0) {
          units.push({ type: 'word', value: part });
        }
      }
      return;
    }

    if (typeof node === 'number') {
      units.push({ type: 'word', value: String(node) });
      return;
    }

    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }

    // React element (images, motion.span wrappers, etc.)
    if (isValidElement(node)) {
      units.push({ type: 'element', value: node });
      return;
    }
  };

  const childArray = Children.toArray(children);
  childArray.forEach(walk);

  return units;
}
