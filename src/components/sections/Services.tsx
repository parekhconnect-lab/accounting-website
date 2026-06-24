import { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  FileText,
  Calculator,
  BarChart3,
  ClipboardCheck,
  Monitor,
  Lightbulb,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Accounting',
    desc: 'Accurate day-to-day recording of financial transactions, ledger maintenance, and monthly reconciliation. We ensure your books are always audit-ready and compliant.',
  },
  {
    icon: FileText,
    title: 'GST Compliance',
    desc: 'Complete GST registration, monthly/quarterly return filing (GSTR-1, GSTR-3B, GSTR-9), reconciliation, and compliance advisory to avoid penalties and optimize input credits.',
  },
  {
    icon: Calculator,
    title: 'Income Tax Support',
    desc: 'Strategic tax planning, return filing (ITR) for businesses and individuals, TDS compliance, advance tax calculations, and representation during assessments.',
  },
  {
    icon: BarChart3,
    title: 'Financial Reporting',
    desc: 'Timely preparation of balance sheets, P&L statements, cash flow reports, and customized dashboards that give you a clear picture of your financial health.',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit Support',
    desc: 'Comprehensive audit preparation, documentation, and liaison with auditors. We streamline the statutory, internal, and tax audit processes for smoother approvals.',
  },
  {
    icon: Monitor,
    title: 'Accounting Software Setup',
    desc: 'Expert implementation of Tally, Zoho Books, QuickBooks, and custom ERP solutions. We configure, migrate data, train your team, and provide ongoing support.',
  },
  {
    icon: Lightbulb,
    title: 'Business Advisory',
    desc: 'Strategic financial guidance for fundraising, valuation, mergers, business restructuring, and growth planning from a business owner\'s perspective.',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wide"
            style={{ color: '#059669' }}
          >
            What We Offer
          </span>
          <h2 className="text-h2 mb-4" style={{ color: '#0a1628' }}>
            Services Designed for Growing Businesses
          </h2>
          <p className="text-body mx-auto max-w-2xl" style={{ color: '#64748b' }}>
            From day-to-day bookkeeping to strategic advisory, we provide comprehensive financial support tailored to your business needs.
          </p>
        </div>

        <div className="space-y-3">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={service.title}
                className="overflow-hidden rounded-lg border transition-all duration-300"
                style={{
                  borderColor: isOpen ? '#059669' : '#e2e8f0',
                  backgroundColor: isOpen ? '#ffffff' : '#f8fafc',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.5s ease-out ${i * 0.05}s, transform 0.5s ease-out ${i * 0.05}s, border-color 0.3s, background-color 0.3s`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left md:px-8"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300"
                      style={{ backgroundColor: isOpen ? 'rgba(5,150,105,0.1)' : '#f1f5f9' }}
                    >
                      <service.icon
                        size={20}
                        style={{ color: isOpen ? '#059669' : '#64748b' }}
                        className="transition-colors duration-300"
                      />
                    </div>
                    <span
                      className="text-base font-semibold tracking-tight md:text-lg"
                      style={{ color: '#0a1628' }}
                    >
                      {service.title}
                    </span>
                  </div>
                  <ChevronRight
                    size={20}
                    className="transition-transform duration-300"
                    style={{
                      color: '#64748b',
                      transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
                    }}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5 md:px-8">
                    <div
                      className="mb-3 h-px w-full"
                      style={{ backgroundColor: '#e2e8f0' }}
                    />
                    <div className="flex items-start gap-4">
                      <div
                        className="mt-1 h-full w-1 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: '#059669', minHeight: '40px' }}
                      />
                      <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
