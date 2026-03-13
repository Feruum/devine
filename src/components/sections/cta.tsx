'use client';

import { motion } from 'motion/react';
import { Bird, Sparkles, Heart, PawPrint } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F1F3D 0%, #E8F0FF 30%, #F0F4FF 70%, #FFFFFF 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-devine-lavender/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-devine-gold/10 rounded-full blur-[80px] animate-float" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Floating emojis */}
        <motion.div
          className="absolute top-16 left-[10%] hidden sm:block text-devine-lavender/60"
          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Bird className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute bottom-16 right-[10%] hidden sm:block text-devine-gold/60"
          animate={{ y: [8, -12, 8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-devine-navy mb-6 leading-tight">
            Готова стать частью семьи?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg sm:text-xl text-devine-navy/60 mb-10 leading-relaxed">
            Присоединяйся к Devine — пространству, где ты можешь быть собой, расти и вдохновлять других <Heart className="inline w-4 h-4 text-devine-lavender" />
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a
            href="https://www.instagram.com/devine_aitu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 40px rgba(200, 182, 255, 0.35)',
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-5 text-lg sm:text-xl font-bold rounded-full bg-devine-navy text-white shadow-2xl shadow-devine-navy/25 hover:bg-devine-navy/90 transition-colors duration-300"
            >
              Присоединяйся к Devine прямо сейчас <PawPrint className="inline w-5 h-5" />
            </motion.button>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
