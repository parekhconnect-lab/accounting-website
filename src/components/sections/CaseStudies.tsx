import { useEffect, useRef, useState } from 'react';
import { TrendingDown, Clock, FileCheck, Coins } from 'lucide-react';

const cases = [
  {
    icon: Clock,
    metric: '70%',
    label: 'Faster Monthly Close',
    title: 'Automated Reporting Workflow',
    desc: 'A 50-employee manufacturing firm reduced their month-end closing cycle from 15 days to 4 days through automated reconciliations, integrated accounting software, and standardized report templates.',
    tags: ['Process Automation', 'Manufacturing'],
  },
  {
    icon: FileCheck,
    metric: '100%',
    label: 'GST Compliance Score',
    title: 'End-to-End Compliance Recovery',
    desc: 'A retail chain with 12 locations eliminated all GST penalties and achieved zero-notice status within 6 months by implementing proper invoice matching, reconciled return filing, and proactive input credit tracking.',
    tags: ['GST Compliance', 'Retail'],
  },
  {
    icon: Coins,
    metric: '35%',
    label: 'Tax Savings Identified',
    title: 'Strategic Tax Optimization',
    desc: 'A professional services firm saved over INR 8 lakhs annually through proper expense structuring, timely advance tax planning, and identification of previously missed deductions and exemptions.',
    tags: ['Tax Advisory', 'Professional Services'],
  },
  {
    icon: TrendingDown,
    metric: '50%',
    label: 'Reduction in Accounting Costs',
    title: 'Outsourced Finance Function',
    desc: 'A startup replaced their in-house accounting team with our outsourced model, reducing fixed costs by half while gaining access to senior financial expertise and real-time reporting dashboards.',
    tags: ['Outsourcing', 'Startup'],
  },
];

export default function CaseStudies() {
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
      { threshold: 0.1 }
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
            Real Results
          </span>
          <h2 className="text-h2 mb-4" style={{ color: '#0a1628' }}>
            Impact That Matters
          </h2>
          <p className="text-body mx-auto max-w-2xl" style={{ color: '#64748b' }}>
            Measurable outcomes from real client engagements across industries and business sizes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((item, i) => (
            <div
              key={item.title}
              className="group rounded-lg border p-8 transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: '#e2e8f0',
                backgroundColor: '#ffffff',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease-out ${i * 0.15}s, transform 0.6s ease-out ${i * 0.15}s`,
              }}
            >
              <div className="mb-6 flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'rgba(5,150,105,0.1)' }}
                >
                  <item.icon size={24} style={{ color: '#059669' }} />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold tracking-tight" style={{ color: '#059669' }}>
                    {item.metric}
                  </div>
                  <div className="text-xs font-medium" style={{ color: '#64748b' }}>
                    {item.label}
                  </div>
                </div>
              </div>

              <h3 className="text-h3 mb-3" style={{ color: '#0a1628' }}>
                {item.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: '#64748b' }}>
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: 'rgba(5,150,105,0.1)',
                      color: '#059669',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
