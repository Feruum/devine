'use client';

import { motion } from 'motion/react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GlowCard } from '@/components/ui/glow-card';

const team = [
  {
    name: 'Арафат',
    role: 'Президент',
    emoji: '🤍',
    bio: 'Строгость и забота в одном флаконе. Говорит прямо, думает по-новому, управляет командой с уважением и любовью. Настоящая wise queen.',
    accent: '#C8B6FF',
    placeholder: '👑',
  },
  {
    name: 'Альбина',
    role: 'Вице-президент',
    emoji: '🖇️',
    bio: 'Воплощение дисциплины и доброты. Порядок — её второе имя. А 70 % знакомых уверены, что Моля — её сестра 🫂',
    accent: '#F4D8A8',
    placeholder: '💎',
  },
  {
    name: 'Райхан',
    role: 'Контент-мейкер',
    emoji: '🎞️',
    bio: 'Появляется редко, но когда приходит — зажигает харизмой и юмором. Творческая душа коллектива и яркая энергия.',
    accent: '#9D6EFF',
    placeholder: '🎬',
  },
  {
    name: 'Бота',
    role: 'Хаос в самом милом виде',
    emoji: '🌀',
    bio: 'Смешная, милая и непредсказуемая. Никогда не угадаешь, какую шутку она выкинет следующей.',
    accent: '#C8B6FF',
    placeholder: '🌟',
  },
  {
    name: 'Моля',
    role: 'HR, ивент-менеджер, финансовый менеджер и дизайнер',
    emoji: '🌷',
    bio: 'Мастер multitasking. Успевает всё, делает всё красиво и с любовью.',
    accent: '#F4D8A8',
    placeholder: '🌺',
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-24 sm:py-32 bg-devine-dark overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-devine-lavender/5 rounded-full blur-[180px]" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-devine-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-center text-white mb-4">
            Познакомься с теми, кто создаёт Devine
          </h2>
          <p className="text-center text-white/40 text-lg mb-16 max-w-xl mx-auto">
            Пять невероятных девушек, объединённых одной идеей 🦋
          </p>
        </ScrollReveal>

        {/* First row: 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {team.slice(0, 3).map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <TeamCard member={member} />
            </ScrollReveal>
          ))}
        </div>

        {/* Second row: 2 cards, centered */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {team.slice(3).map((member, i) => (
            <ScrollReveal key={member.name} delay={(i + 3) * 0.1}>
              <TeamCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: (typeof team)[number] }) {
  return (
    <GlowCard
      className="h-full"
      glowColor={`${member.accent}12`}
    >
      <div className="p-6 sm:p-8 flex flex-col h-full">
        {/* Photo placeholder — replace with real photos later */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-devine-navy to-devine-dark border border-white/[0.06]">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl">{member.placeholder}</span>
          </div>
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(135deg, ${member.accent}40, transparent)`,
            }}
          />
          {/* TODO: Replace with <Image src="/team/name.jpg" /> */}
        </div>

        {/* Info */}
        <div className="flex items-start gap-2 mb-3">
          <span className="text-lg">{member.emoji}</span>
          <div>
            <h3 className="text-lg font-bold text-white">{member.name}</h3>
            <p className="text-sm font-medium" style={{ color: member.accent }}>
              {member.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-white/50 text-sm leading-relaxed flex-grow">
          {member.bio}
        </p>

        {/* Decorative bottom */}
        <motion.div
          className="mt-4 h-[2px] rounded-full"
          style={{ backgroundColor: `${member.accent}30` }}
          whileHover={{ scaleX: 1.1 }}
        />
      </div>
    </GlowCard>
  );
}
