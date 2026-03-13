'use client';

import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import Image from 'next/image';

import { ScrollRevealText } from '@/components/ui/scroll-reveal-text';

export function MissionStatement() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-devine-dark">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-devine-purple/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-devine-lavender/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-devine-purple/10 border border-devine-purple/20 rounded-full px-6 py-2 mb-6">
            <span className="w-4 h-4 text-devine-lavender" >🦋</span>
            <span className="text-devine-lavender text-sm font-medium">Наше видение</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Что нас ведёт вперёд
          </h2>
        </motion.div>

        {/* Mission text with inline images */}
        <ScrollRevealText
          className="mb-8"
          textClassName="text-white/70 text-[clamp(1.25rem,3vw,2.25rem)]! leading-snug text-center"
          baseOpacity={0.15}
          enableBlur={true}
          blurStrength={3}
        >
          Мы раздвигаем границы того, что возможно для девушек в AITU, создавая{' '}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block align-middle mx-1 relative"
          >
            <span className="relative inline-block w-16 h-10 md:w-22 md:h-14 overflow-hidden rounded-full border border-white/10">
              <Image src="/landing/devine-1.jpg" alt="Devine community" fill className="object-cover" />
            </span>
          </motion.span>{' '}
          пространство, где каждая идея превращается в реальность.{' '}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block align-middle mx-1 relative"
          >
            <span className="relative inline-block w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-lg md:rounded-2xl border border-white/10">
              <Image src="/landing/devine-2.jpg" alt="Sisterhood" fill className="object-cover" />
            </span>
          </motion.span>{' '}
          <motion.span
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-block align-middle mx-1 relative"
          >
            <span className="relative inline-block w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-lg md:rounded-2xl border border-white/10">
              <Image src="/landing/devine-3.jpg" alt="Together" fill className="object-cover" />
            </span>
          </motion.span>{' '}
          Наша команда топовых талантов сочетает креативность, заботу и силу,{' '}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block align-middle mx-1 relative"
          >
            <span className="relative inline-block w-16 h-10 md:w-22 md:h-14 overflow-hidden rounded-full border border-white/10">
              <Image src="/landing/devine-4.jpg" alt="Creativity" fill className="object-cover" />
            </span>
          </motion.span>{' '}
          чтобы дарить опыт, который вдохновляет и наполняет.{' '}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block align-middle mx-1 relative"
          >
            <span className="relative inline-block w-16 h-10 md:w-22 md:h-14 overflow-hidden rounded-full border border-white/10">
              <Image src="/landing/devine-5.jpg" alt="Growth" fill className="object-cover" />
            </span>
          </motion.span>{' '}
          Мы сочетаем академическую поддержку, социальные события и направление «Женщины в IT» —{' '}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block align-middle mx-1 relative"
          >
            <span className="relative inline-block w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full border border-white/10">
              <Image src="/landing/devine-6.jpg" alt="Women in IT" fill className="object-cover" />
            </span>
          </motion.span>{' '}
          чтобы каждая могла найти свой путь и стать частью чего-то настоящего.{' '}
          <Heart className="inline w-5 h-5 md:w-6 md:h-6 text-devine-lavender" />
        </ScrollRevealText>
      </div>
    </section>
  );
}
