'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { Logo } from '@/components/ui/logo';
import { Instagram } from 'lucide-react';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'О нас', href: '#about' },
  { label: 'Направления', href: '#directions' },
  { label: 'События', href: '#events' },
  { label: 'Команда', href: '#team' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showOutline, setShowOutline] = useState(false);

  const { scrollY } = useScroll();
  const SCROLL_THRESHOLD = 200;

  // Shrinking pill: full-width → narrow on scroll
  const maxWidthValue = useTransform(scrollY, [0, SCROLL_THRESHOLD], [1280, 820]);
  const blurValue = useTransform(scrollY, [0, SCROLL_THRESHOLD], [8, 16]);

  const springMaxWidth = useSpring(maxWidthValue, {
    damping: 20,
    stiffness: 100,
    mass: 0.5,
  });

  const springBlur = useSpring(blurValue, {
    damping: 25,
    stiffness: 120,
  });

  useEffect(() => {
    const updateOnScroll = () => {
      setHasScrolled(window.scrollY > 0);
      setShowOutline(springMaxWidth.get() <= 750);
    };

    updateOnScroll();
    window.addEventListener('scroll', updateOnScroll, { passive: true });

    const unsubscribe = springMaxWidth.on('change', () => {
      setShowOutline(springMaxWidth.get() <= 750);
    });

    return () => {
      window.removeEventListener('scroll', updateOnScroll);
      unsubscribe();
    };
  }, [springMaxWidth]);

  return (
    <>
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 w-full px-4 py-3 mx-auto">
        <motion.nav
          className="pointer-events-auto flex w-full items-center justify-between gap-2 rounded-full px-4 py-1.5 sm:pr-2.5 mx-auto overflow-hidden"
          style={{
            width: '100%',
            maxWidth: springMaxWidth,
            backgroundColor: 'rgba(14, 23, 51, 0.9)',
            backdropFilter: `blur(${springBlur}px)`,
            outline: showOutline
              ? '1px solid rgba(200, 182, 255, 0.1)'
              : 'none',
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo size="sm" />
          </motion.a>

          {/* Desktop Nav — animated links */}
          <ul className="hidden lg:flex items-center gap-0.5 text-sm flex-shrink min-w-0">
            {navLinks.map((link) => (
              <li key={link.href} className="group relative">
                <motion.a
                  href={link.href}
                  className="flex items-center px-2.5 py-2 text-white/60 hover:text-white transition-colors duration-200 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative inline-flex overflow-hidden">
                    <div className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                      {link.label}
                    </div>
                    <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-white transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      {link.label}
                    </div>
                  </span>
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Right side: CTA */}
          <div className="hidden lg:flex items-center flex-shrink-0 ml-auto">
            <motion.a
              href="https://www.instagram.com/devine_aitu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full bg-devine-lavender/10 text-devine-lavender border border-devine-lavender/20 hover:bg-devine-lavender/20 hover:border-devine-lavender/40 hover:shadow-[0_0_20px_rgba(200,182,255,0.15)] transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Instagram className="w-3.5 h-3.5" />
              Стать девайнеркой
              <span className="text-xs">→</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-white/80"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[2px] bg-white/80"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[2px] bg-white/80"
            />
          </button>
        </motion.nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 bg-devine-navy/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col items-center gap-2 pt-8 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full text-center py-3 text-lg text-white/80 hover:text-white border-b border-white/[0.06] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://www.instagram.com/devine_aitu"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4 inline-flex items-center gap-2 px-8 py-3 text-base font-medium rounded-full bg-devine-lavender/15 text-devine-lavender border border-devine-lavender/30"
              >
                Стать девайнеркой →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
