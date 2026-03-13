'use client';

import { motion } from 'motion/react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GlowCard } from '@/components/ui/glow-card';

const events = [
  {
    title: 'Study Session: Алгоритмы и структуры данных',
    date: 'Скоро',
    type: 'Академическая поддержка',
    emoji: '📖',
    accent: '#C8B6FF',
  },
  {
    title: 'Весенний пикник Devine',
    date: 'Скоро',
    type: 'Социальное событие',
    emoji: '🌸',
    accent: '#F4D8A8',
  },
  {
    title: 'Women in Tech: Гостевая лекция',
    date: 'Скоро',
    type: 'Женщины в IT',
    emoji: '💻',
    accent: '#9D6EFF',
  },
];

export function EventsSection() {
  return (
    <section
      id="events"
      className="relative py-24 sm:py-32 bg-devine-dark overflow-hidden"
    >
      {/* Separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-devine-lavender/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center text-white mb-4">
            Предстоящие события
          </h2>
          <p className="text-center text-white/40 text-lg mb-16 max-w-xl mx-auto">
            Следи за нашим расписанием — впереди много интересного 🗓️
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.15}>
              <GlowCard
                className="h-full"
                glowColor={`${event.accent}12`}
              >
                <div className="p-6 sm:p-8 flex flex-col h-full">
                  {/* Date badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        color: event.accent,
                        borderColor: `${event.accent}30`,
                        backgroundColor: `${event.accent}10`,
                      }}
                    >
                      {event.type}
                    </span>
                    <span className="text-white/30 text-sm font-medium">{event.date}</span>
                  </div>

                  {/* Icon */}
                  <motion.span
                    className="text-4xl mb-4 block"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {event.emoji}
                  </motion.span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-4 flex-grow">
                    {event.title}
                  </h3>

                  {/* CTA */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-sm font-medium text-white/40 group-hover:text-white/60 transition-colors">
                      Подробности скоро →
                    </span>
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
