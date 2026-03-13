'use client';

import { motion } from 'motion/react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GlowCard } from '@/components/ui/glow-card';
import { BookOpen, PartyPopper, Laptop, GraduationCap, Tent, Rocket, Sparkles } from 'lucide-react';

import type { ReactNode } from 'react';

const directions: { icon: ReactNode; bottomIcon: ReactNode; title: string; description: string; details: string; color: string }[] = [
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: 'Академическая поддержка',
    description: 'Лекции, менторство, помощь с учёбой',
    details:
      'Мы помогаем друг другу учиться, разбираться в сложных темах и готовиться к экзаменам. Менторство от старших курсов и совместные study sessions.',
    color: '#C8B6FF',
    bottomIcon: <GraduationCap className="w-6 h-6" />,
  },
  {
    icon: <PartyPopper className="w-7 h-7" />,
    title: 'Социальные события',
    description: 'Пикники, благотворительные ярмарки, вечеринки',
    details:
      'Вечеринки, пикники, благотворительные ярмарки и уютные посиделки. Мы создаём моменты, которые ты будешь вспоминать с улыбкой.',
    color: '#F4D8A8',
    bottomIcon: <Tent className="w-6 h-6" />,
  },
  {
    icon: <Laptop className="w-7 h-7" />,
    title: 'Женщины в IT',
    description: 'Хакатоны, гостевые лекции, карьерный рост',
    details:
      'Хакатоны, гостевые лекции от женщин в tech, карьерное менторство. Мы вдохновляем девушек строить карьеру в IT и не бояться больших целей.',
    color: '#9D6EFF',
    bottomIcon: <Rocket className="w-6 h-6" />,
  },
];

export function DirectionsSection() {
  return (
    <section
      id="directions"
      className="relative py-24 sm:py-32 bg-devine-dark overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-devine-purple/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center text-white mb-4">
            Три пути, которые мы открываем для тебя
          </h2>
          <p className="text-center text-white/40 text-lg mb-16 max-w-2xl mx-auto">
            Каждое направление — это возможность вырасти, найти себя и стать сильнее <Sparkles className="inline w-4 h-4 text-devine-gold" />
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {directions.map((dir, i) => (
            <ScrollReveal key={dir.title} delay={i * 0.15}>
              <GlowCard
                className="h-full"
                glowColor={`${dir.color}15`}
              >
                <div className="p-8 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${dir.color}15`, color: dir.color }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {dir.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{dir.title}</h3>
                  <p className="text-sm font-medium mb-4" style={{ color: dir.color }}>
                    {dir.description}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed flex-grow">
                    {dir.details}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06]" style={{ color: dir.color }}>
                    {dir.bottomIcon}
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
