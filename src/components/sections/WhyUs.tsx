import { useEffect, useRef, useState } from 'react';
import {
  Eye,
  Workflow,
  MonitorSmartphone,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react';

const reasons = [
  {
    icon: Eye,
    title: 'Business Owner Perspective',
    desc: 'We don\'t just crunch numbers. We understand the operational challenges of running a business because we\'ve built and managed companies ourselves. Our advice is practical, not theoretical.',
  },
  {
    icon: Workflow,
    title: 'Process-Oriented Approach',
    desc: 'Every engagement follows a structured methodology. From discovery to monthly management, our processes are designed to deliver consistent, reliable results with full transparency.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Technology Integration',
    desc: 'We implement the right accounting software, automate repetitive tasks, and build digital workflows that reduce manual work by up to 70% while improving accuracy and compliance.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Service',
    desc: 'No two businesses are alike. We tailor our engagement model, reporting cadence, and advisory depth to match your specific industry, growth stage, and financial complexity.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    desc: 'Whether you\'re a startup with 5 employees or an SME with 500, our services scale with you. Start with bookkeeping and grow into a full virtual CFO relationship.',
  },
];

export default function WhyUs() {
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
    <section ref={sectionRef} id="why-us" className="section-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wide"
            style={{ color: '#059669' }}
          >
            Why Choose The Ledger Co.
          </span>
          <h2 className="text-h2 text-ivory mb-4">
            More Than Just an Accounting Firm
          </h2>
          <p className="text-body mx-auto max-w-2xl" style={{ color: 'rgba(248,250,252,0.7)' }}>
            We combine entrepreneurial thinking with financial expertise to deliver real business impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="group rounded-lg border p-8 transition-all duration-300 hover:border-emerald"
              style={{
                borderColor: '#1e293b',
                backgroundColor: 'rgba(30,41,59,0.3)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease-out ${i * 0.1}s, transform 0.6s ease-out ${i * 0.1}s, border-color 0.3s`,
              }}
            >
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ backgroundColor: 'rgba(5,150,105,0.15)' }}
              >
                <reason.icon size={24} style={{ color: '#059669' }} />
              </div>
              <h3 className="text-h3 text-ivory mb-3">{reason.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(248,250,252,0.65)' }}>
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
