'use client';

import { motion } from 'motion/react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Sparkles, Flower2, Heart, PawPrint, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F6F2EA 0%, #FAF8F3 40%, #FFFFFF 100%)',
      }}
    >
      {/* Decorative ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-devine-lavender/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-devine-sky/40 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-devine-gold/10 rounded-full blur-[80px] animate-float-slow" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-[15%] opacity-40"
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="w-7 h-7 text-devine-navy/50" >🦋</span>
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-[20%] opacity-30"
          animate={{ y: [5, -15, 5], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Sparkles className="w-6 h-6 text-devine-gold/60" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-[25%] opacity-25"
          animate={{ y: [-5, 12, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <Flower2 className="w-5 h-5 text-devine-lavender/50" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-[15%] opacity-30"
          animate={{ y: [8, -8, 8], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <Heart className="w-6 h-6 text-devine-lavender/40" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-devine-lavender/20 text-devine-navy/70 text-sm font-medium mb-8 shadow-sm"
        >
          <Heart className="w-4 h-4 text-devine-lavender" /> Mindfulness & Sisterhood
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold text-devine-navy tracking-tight mb-4"
        >
          Devine Club
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-xl sm:text-2xl text-devine-navy/70 font-medium mb-8"
        >
          Поддержка, рост и вдохновение для девушек AITU
        </motion.p>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="max-w-2xl mx-auto space-y-4 mb-10"
        >
          <p className="text-base sm:text-lg text-devine-navy/60 leading-relaxed">
            Пауза. Вдох. И ты уже дома. Здесь тебя ждёт та самая сестринская,
            безопасная и uplifting атмосфера, где каждая девушка расцветает.
          </p>
          <p className="text-sm sm:text-base text-devine-navy/50 leading-relaxed">
            Мы начали эту идею ещё в начале учебного года. Теперь она здесь — Devine.
            Клуб поддержки, роста и невероятных личностей. Добро пожаловать домой <PawPrint className="inline w-4 h-4 text-devine-navy/50" />
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <a
            href="https://www.instagram.com/devine_aitu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(200, 182, 255, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-lg font-semibold rounded-full bg-devine-navy text-white shadow-xl shadow-devine-navy/20 hover:bg-devine-navy/90 transition-colors duration-300"
            >
              Присоединяйся к Devine
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 text-devine-navy/50"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-devine-navy/80">200+</span>
            <span className="text-sm">девайнерок</span>
          </div>
          <div className="w-px h-8 bg-devine-navy/10" />
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-bold text-devine-navy/80">150+</span>
            <span className="text-sm">моментов вместе</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient transition to dark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-devine-white pointer-events-none" />
    </section>
  );
}
