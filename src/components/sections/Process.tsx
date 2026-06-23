import { useEffect, useRef, useState } from 'react';
import { Phone, Search, Settings, CalendarCheck, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Discovery Call',
    desc: 'We understand your business model, current challenges, and goals. This free consultation helps us assess your needs and recommend the right engagement.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Financial Review',
    desc: 'We conduct a comprehensive review of your existing books, processes, compliance status, and software setup to identify gaps and opportunities.',
  },
  {
    icon: Settings,
    number: '03',
    title: 'System Setup',
    desc: 'We configure your accounting software, set up automated workflows, establish reporting templates, and create a tailored process document.',
  },
  {
    icon: CalendarCheck,
    number: '04',
    title: 'Monthly Management',
    desc: 'Regular bookkeeping, GST filing, payroll processing, reconciliation, and management reporting delivered on a predictable schedule.',
  },
  {
    icon: MessageSquare,
    number: '05',
    title: 'Ongoing Advisory',
    desc: 'Quarterly business reviews, tax planning sessions, growth advisory, and proactive compliance updates to keep you ahead.',
  },
];

export default function Process() {
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
    <section ref={sectionRef} id="process" className="section-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wide"
            style={{ color: '#059669' }}
          >
            How We Work
          </span>
          <h2 className="text-h2 mb-4" style={{ color: '#0a1628' }}>
            Our Proven 5-Step Process
          </h2>
          <p className="text-body mx-auto max-w-2xl" style={{ color: '#64748b' }}>
            A structured approach that ensures consistency, transparency, and measurable results from day one.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute left-0 right-0 top-16 h-px"
              style={{ backgroundColor: '#e2e8f0' }}
            />
            {/* Active line */}
            <div
              className="absolute left-0 top-16 h-px transition-all duration-1000"
              style={{
                backgroundColor: '#059669',
                width: visible ? '100%' : '0%',
                boxShadow: '0 0 8px rgba(5,150,105,0.4)',
              }}
            />

            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.6s ease-out ${i * 0.15}s, transform 0.6s ease-out ${i * 0.15}s`,
                  }}
                >
                  <div
                    className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2"
                    style={{
                      borderColor: '#059669',
                      backgroundColor: '#ffffff',
                      boxShadow: '0 0 0 4px #f8fafc',
                    }}
                  >
                    <step.icon size={20} style={{ color: '#059669' }} />
                  </div>

                  <span
                    className="mb-2 text-xs font-bold tracking-wider"
                    style={{ color: '#059669' }}
                  >
                    STEP {step.number}
                  </span>
                  <h3
                    className="text-h3 mb-2 text-base font-semibold"
                    style={{ color: '#0a1628' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 h-full w-px"
              style={{ backgroundColor: '#e2e8f0' }}
            />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative flex gap-6"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.5s ease-out ${i * 0.12}s, transform 0.5s ease-out ${i * 0.12}s`,
                  }}
                >
                  <div
                    className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2"
                    style={{
                      borderColor: '#059669',
                      backgroundColor: '#ffffff',
                    }}
                  >
                    <step.icon size={20} style={{ color: '#059669' }} />
                  </div>

                  <div className="flex-1 pb-2">
                    <span
                      className="mb-1 inline-block text-xs font-bold tracking-wider"
                      style={{ color: '#059669' }}
                    >
                      STEP {step.number}
                    </span>
                    <h3
                      className="text-base font-semibold tracking-tight"
                      style={{ color: '#0a1628' }}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: '#64748b' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
