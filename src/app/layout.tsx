import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Devine Club | AITU',
  description:
    'Devine Club — клуб поддержки, роста и вдохновения для девушек AITU. Mindfulness, Sisterhood, Women in IT.',
  keywords: [
    'Devine Club',
    'AITU',
    'Women in IT',
    'девушки в IT',
    'клуб поддержки',
    'сестринство',
    'Астана',
    'Казахстан',
  ],
  openGraph: {
    title: 'Devine Club | AITU',
    description:
      'Поддержка, рост и вдохновение для девушек AITU. Присоединяйся к Devine!',
    url: 'https://devine-club.vercel.app',
    siteName: 'Devine Club',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devine Club | AITU',
    description:
      'Поддержка, рост и вдохновение для девушек AITU. Присоединяйся к Devine!',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
