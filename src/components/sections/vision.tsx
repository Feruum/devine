'use client';

import { motion } from 'motion/react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { Heart, Sparkles, Bird, PawPrint } from 'lucide-react';

export function VisionSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-devine-dark overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-devine-purple/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-devine-lavender/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top badge */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-devine-purple/10 text-devine-purple text-sm font-medium border border-devine-purple/20">
              <Heart className="w-4 h-4 text-devine-lavender" /> Наше видение
            </span>
          </div>
        </ScrollReveal>

        {/* Big headline */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-center text-white mb-16 leading-tight">
            Что нас ведёт вперёд
          </h2>
        </ScrollReveal>

        {/* Text blocks with emojis and floating elements */}
        <div className="space-y-12">
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {/* Floating emoji */}
              <motion.div
                className="absolute -left-8 top-0 hidden lg:block"
                animate={{ y: [-5, 10, -5], rotate: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-8 h-8 text-devine-gold/60" />
              </motion.div>
              <p className="text-xl sm:text-2xl text-white/80 leading-relaxed text-center max-w-3xl mx-auto">
                Мы раздвигаем границы того, что возможно для девушек в AITU, создавая
                пространство, где каждая идея превращается в реальность <Sparkles className="inline w-4 h-4 text-devine-gold" />
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] p-8 sm:p-10">
              <motion.div
                className="absolute -right-4 -top-4"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Bird className="w-10 h-10 text-devine-lavender/60" />
              </motion.div>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                <Bird className="inline w-5 h-5 text-devine-lavender mr-1" /> Наша команда топовых талантов сочетает креативность, заботу и силу,
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] p-8 sm:p-10">
              <motion.div
                className="absolute -left-4 -bottom-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <PawPrint className="w-8 h-8 text-devine-gold/40" />
              </motion.div>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                <PawPrint className="inline w-5 h-5 text-devine-gold mr-1" /> Мы сочетаем академическую поддержку, социальные события и направление
                «Женщины в IT» — чтобы каждая могла найти свой путь и стать частью чего-то
                настоящего.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Shimmer ticker */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center">
            <TextShimmer
              as="p"
              duration={3}
              spread={3}
              className="text-lg font-medium"
            >
              ✶ Поддержка ✶ Рост ✶ Вдохновение ✶ Сестринство ✶ Сила
            </TextShimmer>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
