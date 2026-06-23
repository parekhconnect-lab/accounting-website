import { useEffect, useRef, useState } from 'react';
import {
  Gem,
  Store,
  Factory,
  Briefcase,
  Rocket,
  Globe,
} from 'lucide-react';

const industries = [
  {
    icon: Gem,
    name: 'Jewellery',
    desc: 'Inventory valuation, hallmarking compliance, GST on precious metals, and specialized reporting for jewellery manufacturers and retailers.',
  },
  {
    icon: Store,
    name: 'Retail',
    desc: 'Multi-location accounting, POS integration, inventory management, e-commerce reconciliation, and seasonal cash flow planning.',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    desc: 'Cost accounting, BOM tracking, job work compliance, excise and GST implications, and production efficiency reporting.',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    desc: 'Project-based accounting, retainer management, time-tracking integration, and partner compensation structures.',
  },
  {
    icon: Rocket,
    name: 'Startups',
    desc: 'Founder-friendly accounting, ESOP structuring, investor reporting, burn rate analysis, and fundraising readiness.',
  },
  {
    icon: Globe,
    name: 'Outsourcing Firms',
    desc: 'Multi-currency accounting, international tax compliance, transfer pricing documentation, and client billing automation.',
  },
];

export default function Industries() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wide"
            style={{ color: '#059669' }}
          >
            Who We Serve
          </span>
          <h2 className="text-h2 text-ivory mb-4">
            Industries We Understand
          </h2>
          <p className="text-body mx-auto max-w-2xl" style={{ color: 'rgba(248,250,252,0.7)' }}>
            Deep domain expertise across diverse sectors, built through hands-on work with real businesses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <div
              key={industry.name}
              className="group rounded-lg border p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: '#1e293b',
                backgroundColor: 'rgba(30,41,59,0.3)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease-out ${i * 0.1}s, transform 0.6s ease-out ${i * 0.1}s`,
              }}
            >
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg"
                style={{ backgroundColor: 'rgba(5,150,105,0.15)' }}
              >
                <industry.icon size={28} style={{ color: '#059669' }} />
              </div>
              <h3 className="text-h3 text-ivory mb-3">{industry.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(248,250,252,0.6)' }}>
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
