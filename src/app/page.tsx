import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { MediaShowcase } from '@/components/sections/MediaShowcase';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Reviews } from '@/components/sections/Reviews';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full min-h-screen">
        <Hero />
        <Features />
        <MediaShowcase />
        <HowItWorks />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}