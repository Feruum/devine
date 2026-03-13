'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'motion/react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GlowCard } from '@/components/ui/glow-card';
import {
  Heart, Paperclip, Film, Orbit, Flower,
  Crown, Gem, Clapperboard, Star, Flower2,
  ChevronLeft, ChevronRight,
} from 'lucide-react';
import type { ReactNode } from 'react';

const team: { name: string; role: string; emoji: ReactNode; bio: string; accent: string; placeholder: ReactNode }[] = [
  {
    name: 'Арафат',
    role: 'Президент',
    emoji: <Heart className="w-5 h-5" />,
    bio: 'Строгость и забота в одном флаконе. Говорит прямо, думает по-новому, управляет командой с уважением и любовью. Настоящая wise queen.',
    accent: '#C8B6FF',
    placeholder: <Crown className="w-12 h-12" />,
  },
  {
    name: 'Альбина',
    role: 'Вице-президент',
    emoji: <Paperclip className="w-5 h-5" />,
    bio: 'Воплощение дисциплины и доброты. Порядок — её второе имя. А 70 % знакомых уверены, что Моля — её сестра',
    accent: '#F4D8A8',
    placeholder: <Gem className="w-12 h-12" />,
  },
  {
    name: 'Райхан',
    role: 'Контент-мейкер',
    emoji: <Film className="w-5 h-5" />,
    bio: 'Появляется редко, но когда приходит — зажигает харизмой и юмором. Творческая душа коллектива и яркая энергия.',
    accent: '#9D6EFF',
    placeholder: <Clapperboard className="w-12 h-12" />,
  },
  {
    name: 'Бота',
    role: 'Хаос в самом милом виде',
    emoji: <Orbit className="w-5 h-5" />,
    bio: 'Смешная, милая и непредсказуемая. Никогда не угадаешь, какую шутку она выкинет следующей.',
    accent: '#C8B6FF',
    placeholder: <Star className="w-12 h-12" />,
  },
  {
    name: 'Моля',
    role: 'HR, ивент-менеджер, финансовый менеджер и дизайнер',
    emoji: <Flower className="w-5 h-5" />,
    bio: 'Мастер multitasking. Успевает всё, делает всё красиво и с любовью.',
    accent: '#F4D8A8',
    placeholder: <Flower2 className="w-12 h-12" />,
  },
];

const SWIPE_THRESHOLD = 50;
const AUTO_PLAY_INTERVAL = 5000;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    zIndex: 0,
  }),
};

export function TeamSection() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const paginate = useCallback(
    (dir: number) => {
      setActiveIndex(([prev]) => {
        const next = (prev + dir + team.length) % team.length;
        return [next, dir];
      });
    },
    [],
  );

  // Auto-play
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => paginate(1), AUTO_PLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, paginate]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
  };

  const goTo = (idx: number) => {
    setActiveIndex(([prev]) => [idx, idx > prev ? 1 : -1]);
  };

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
            Пять невероятных девушек, объединённых одной идеей{' '}
            <span className="inline w-5 h-5 text-devine-lavender" >🦋</span>
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main carousel area */}
          <div className="relative max-w-sm mx-auto h-[540px] sm:h-[520px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.25 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <TeamCard member={team[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:translate-x-0 lg:-translate-x-16 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.12] hover:border-devine-lavender/30 transition-all duration-300"
            aria-label="Previous member"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-0 lg:translate-x-16 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.12] hover:border-devine-lavender/30 transition-all duration-300"
            aria-label="Next member"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {team.map((member, i) => (
            <button
              key={member.name}
              onClick={() => goTo(i)}
              aria-label={`Go to ${member.name}`}
              className="relative p-1"
            >
              <motion.div
                className="w-2.5 h-2.5 rounded-full"
                animate={{
                  scale: i === activeIndex ? 1 : 0.75,
                  backgroundColor: i === activeIndex ? member.accent : 'rgba(255,255,255,0.2)',
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              />
              {i === activeIndex && (
                <motion.div
                  layoutId="team-dot-ring"
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: member.accent }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Name ticker under dots */}
        <div className="mt-4 text-center h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium text-white/50"
            >
              {team[activeIndex].name} · {team[activeIndex].role}
            </motion.p>
          </AnimatePresence>
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
      hoverScale={1}
    >
      <div className="p-6 sm:p-8 flex flex-col h-full">
        {/* Photo placeholder — replace with real photos later */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-devine-navy to-devine-dark border border-white/[0.06]">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl" style={{ color: member.accent }}>
              {member.placeholder}
            </span>
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
          <span className="text-lg" style={{ color: member.accent }}>
            {member.emoji}
          </span>
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
        />
      </div>
    </GlowCard>
  );
}
