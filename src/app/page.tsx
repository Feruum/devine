import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { MissionStatement } from '@/components/sections/mission';
import { AboutSection } from '@/components/sections/about';
import { VisionSection } from '@/components/sections/vision';
import { DirectionsSection } from '@/components/sections/directions';
import { TeamSection } from '@/components/sections/team';
import { EventsSection } from '@/components/sections/events';
import { CTASection } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MissionStatement />
        <AboutSection />
        <VisionSection />
        <DirectionsSection />
        <TeamSection />
        <EventsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
