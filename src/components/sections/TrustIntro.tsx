import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Shield, Cpu } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    stat: '10+',
    label: 'Years Experience',
    desc: 'Deep expertise across accounting systems, business operations, and software implementation.',
  },
  {
    icon: Shield,
    stat: '100%',
    label: 'Compliance Focus',
    desc: 'Proactive GST, Income Tax, and regulatory compliance management for peace of mind.',
  },
  {
    icon: Cpu,
    stat: 'Tech',
    label: 'First Approach',
    desc: 'Process automation, accounting software setup, and digital workflows that save time.',
  },
];

export default function TrustIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wide"
            style={{ color: '#059669' }}
          >
            Why Businesses Trust Us
          </span>
          <h2
            className="text-h2 mx-auto mb-6 max-w-3xl"
            style={{ color: '#0a1628' }}
          >
            Accounting, Compliance &amp; Business Advisory for Growing Companies
          </h2>
          <p className="text-body mx-auto max-w-2xl" style={{ color: '#64748b' }}>
            We combine 10+ years of hands-on experience with a technology-first approach to deliver end-to-end financial support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className="group rounded-lg border p-8 transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: '#e2e8f0',
                backgroundColor: '#ffffff',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease-out ${i * 0.15}s, transform 0.6s ease-out ${i * 0.15}s`,
              }}
            >
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg transition-colors duration-300"
                style={{ backgroundColor: 'rgba(5,150,105,0.1)' }}
              >
                <item.icon size={28} style={{ color: '#059669' }} />
              </div>
              <div className="mb-2 text-4xl font-extrabold tracking-tight" style={{ color: '#0a1628' }}>
                {item.stat}
              </div>
              <h3 className="text-h3 mb-3" style={{ color: '#0a1628' }}>
                {item.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
