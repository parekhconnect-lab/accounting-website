import { useEffect, useRef } from 'react';
import FluidField from '../effects/FluidField';
import { MessageCircle, Calendar } from 'lucide-react';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    const timer = setTimeout(() => {
      el.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: '#0a1628' }}
    >
      <FluidField />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-32">
          <div ref={contentRef} className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-emerald" />
              <span className="text-sm font-medium tracking-wide uppercase" style={{ color: '#059669' }}>
                Your Outsourced Finance Department
              </span>
            </div>

            <h1 className="text-display text-ivory mb-6">
              Accounting, Compliance &amp; Business Advisory for Growing Companies
            </h1>

            <p className="text-body mb-4 max-w-xl" style={{ color: 'rgba(248,250,252,0.8)' }}>
              We help businesses streamline their finances, improve compliance, and make better decisions through technology-enabled accounting solutions.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2" style={{ color: 'rgba(248,250,252,0.6)' }}>
                <div className="h-2 w-2 rounded-full bg-emerald" />
                <span className="text-sm font-medium">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: 'rgba(248,250,252,0.6)' }}>
                <div className="h-2 w-2 rounded-full bg-emerald" />
                <span className="text-sm font-medium">Technology-Driven</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: 'rgba(248,250,252,0.6)' }}>
                <div className="h-2 w-2 rounded-full bg-emerald" />
                <span className="text-sm font-medium">End-to-End Support</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('#contact')} className="btn-primary">
                <Calendar size={18} />
                Book a Consultation
              </button>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle size={18} />
                Talk on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-24"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0a1628)',
        }}
      />
    </section>
  );
}
