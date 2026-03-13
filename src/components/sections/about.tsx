'use client';

import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #0F1F3D 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Photo placeholder */}
          <ScrollReveal direction="left" distance={60}>
            <div className="relative">
              {/* Main photo placeholder — replace with real photo of calm girl, long hair, eyes closed */}
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-devine-sky via-devine-lavender/20 to-devine-sky shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl block mb-4">🧘‍♀️</span>
                    <p className="text-devine-navy/40 text-sm px-8">
                      {/* TODO: Replace with real photo — calm, long hair, eyes closed */}
                      Фото: девушка, гармония, спокойствие
                    </p>
                  </div>
                </div>
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-devine-navy/10 via-transparent to-transparent" />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-devine-lavender/20 rounded-2xl blur-xl animate-float" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-devine-gold/20 rounded-full blur-lg animate-float-delayed" />
            </div>
          </ScrollReveal>

          {/* Right: Text content */}
          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-devine-lavender/10 text-devine-lavender text-xs font-medium border border-devine-lavender/20">
                  О нас
                </span>
              </div>
              <p className="text-devine-navy/60 text-sm font-medium tracking-wide uppercase">
                Наша миссия • Наше видение
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-devine-navy leading-tight">
                Мы посвящаем себя тому, чтобы каждая девушка в AITU могла{' '}
                <span className="text-devine-purple">исцелиться</span>, вырасти и{' '}
                <span className="text-devine-lavender">расцвести</span> через поддержку,
                сообщество и женскую силу.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg text-devine-navy/60 leading-relaxed">
                Мы создаём пространство, где наука встречается с заботой, а амбиции — с
                сестринской любовью. Академическая помощь, социальные события и направление
                «Женщины в IT» — всё для того, чтобы ты чувствовала себя уверенной и
                вдохновлённой.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <a
                href="#directions"
                className="inline-flex items-center gap-2 text-devine-purple font-semibold hover:gap-3 transition-all duration-300 group"
              >
                Узнать больше
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap gap-8 pt-6 border-t border-devine-navy/10">
                <div>
                  <div className="text-3xl font-bold text-devine-navy">200+</div>
                  <div className="text-sm text-devine-navy/50">Счастливых девайнерок</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-devine-navy">150+</div>
                  <div className="text-sm text-devine-navy/50">Проведённых событий</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
