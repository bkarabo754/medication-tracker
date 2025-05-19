import { LandingFeatures } from '@/components/landing/landing-features';
import { LandingFooter } from '@/components/landing/landing-footer';
import { LandingHero } from '@/components/landing/landing-hero';
import { LandingNavbar } from '@/components/landing/landing-navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">
        <LandingHero />
        <LandingFeatures />
      </main>
      <LandingFooter />
    </div>
  );
}
