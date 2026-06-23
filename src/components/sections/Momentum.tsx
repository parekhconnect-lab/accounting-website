import { useEffect, useRef, useState } from 'react';

const phrases = [
  'Streamlined Reporting',
  'Seamless Compliance',
  'Adaptive Growth',
  'Strategic Advisory',
  'Streamlined Reporting',
  'Seamless Compliance',
  'Adaptive Growth',
  'Strategic Advisory',
];

export default function Momentum() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = -rect.top / (rect.height - vh);
      const clamped = Math.max(0, Math.min(1, raw));
      setProgress(clamped);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: '200vh', backgroundColor: '#0a1628' }}
    >
      <div
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden"
        style={{ perspective: '800px' }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10,22,40,0.6) 100%)',
          }}
        />

        <div
          className="relative w-full"
          style={{
            transform: `rotateX(${10 + progress * 5}deg) rotateY(${-5 + progress * 10}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Top ribbon */}
          <div className="mb-4 overflow-hidden">
            <div
              className="flex whitespace-nowrap will-change-transform"
              style={{
                transform: `translateX(${-progress * 60}%)`,
              }}
            >
              {[...phrases, ...phrases].map((phrase, i) => (
                <span
                  key={`top-${i}`}
                  className="mx-8 inline-block text-5xl font-extrabold tracking-tight md:text-7xl"
                  style={{
                    color: i % 2 === 0 ? 'rgba(248,250,252,0.15)' : 'rgba(5,150,105,0.35)',
                    WebkitTextStroke: i % 2 === 0 ? '1px rgba(248,250,252,0.2)' : 'none',
                  }}
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>

          {/* Center label */}
          <div className="relative z-10 flex flex-col items-center py-8">
            <span
              className="mb-2 text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#059669' }}
            >
              Our Promise
            </span>
            <h2 className="text-h1 text-center text-ivory">
              Built for Momentum
            </h2>
          </div>

          {/* Bottom ribbon */}
          <div className="mt-4 overflow-hidden">
            <div
              className="flex whitespace-nowrap will-change-transform"
              style={{
                transform: `translateX(${progress * 60 - 40}%)`,
              }}
            >
              {[...phrases, ...phrases].map((phrase, i) => (
                <span
                  key={`bottom-${i}`}
                  className="mx-8 inline-block text-5xl font-extrabold tracking-tight md:text-7xl"
                  style={{
                    color: i % 2 !== 0 ? 'rgba(248,250,252,0.15)' : 'rgba(5,150,105,0.35)',
                    WebkitTextStroke: i % 2 !== 0 ? '1px rgba(248,250,252,0.2)' : 'none',
                  }}
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
