import Navigation from '../components/Navigation';
import Hero from '../components/sections/Hero';
import TrustIntro from '../components/sections/TrustIntro';
import Momentum from '../components/sections/Momentum';
import Services from '../components/sections/Services';
import WhyUs from '../components/sections/WhyUs';
import Process from '../components/sections/Process';
import Industries from '../components/sections/Industries';
import CaseStudies from '../components/sections/CaseStudies';
import Resources from '../components/sections/Resources';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import { useLenis } from '../hooks/useLenis';

export default function Home() {
  useLenis();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TrustIntro />
        <Momentum />
        <Services />
        <WhyUs />
        <Process />
        <Industries />
        <CaseStudies />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
