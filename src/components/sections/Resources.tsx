import { useEffect, useRef, useState } from 'react';
import { FileText, Download, ArrowRight } from 'lucide-react';

const resources = [
  {
    title: 'GST Annual Return Filing Checklist',
    desc: 'A comprehensive checklist covering all documents, reconciliations, and validations needed for GSTR-9 and GSTR-9C filing.',
    type: 'Checklist',
    date: 'Updated June 2026',
  },
  {
    title: 'Income Tax Deductions Guide for FY 2025-26',
    desc: 'Maximize your tax savings with this detailed guide covering Section 80C, 80D, 80E, home loan benefits, and commonly missed deductions.',
    type: 'Guide',
    date: 'Updated April 2026',
  },
  {
    title: 'Monthly Accounting Closing Process',
    desc: 'A step-by-step SOP for month-end closing including reconciliation, adjustment entries, and management report generation.',
    type: 'SOP',
    date: 'Updated May 2026',
  },
  {
    title: 'Startup Funding Readiness Checklist',
    desc: 'Essential financial preparations before approaching investors including cap table, projections, due diligence documents, and compliance status.',
    type: 'Checklist',
    date: 'Updated March 2026',
  },
  {
    title: 'Tally to Zoho Books Migration Guide',
    desc: 'A practical handbook for migrating your accounting data including data mapping, chart of accounts setup, and validation procedures.',
    type: 'Guide',
    date: 'Updated February 2026',
  },
  {
    title: 'Q2 2026 Tax & Regulatory Updates',
    desc: 'Summary of key changes in GST rates, income tax provisions, MCA compliance requirements, and deadlines for the quarter.',
    type: 'Update',
    date: 'Published June 2026',
  },
];

export default function Resources() {
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
    <section ref={sectionRef} id="resources" className="section-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wide"
            style={{ color: '#059669' }}
          >
            Free Resources
          </span>
          <h2 className="text-h2 text-ivory mb-4">
            Knowledge Hub
          </h2>
          <p className="text-body mx-auto max-w-2xl" style={{ color: 'rgba(248,250,252,0.7)' }}>
            Practical guides, checklists, and regulatory updates to help you stay informed and compliant.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, i) => (
            <div
              key={resource.title}
              className="group flex flex-col rounded-lg border p-6 transition-all duration-300 hover:border-emerald"
              style={{
                borderColor: '#1e293b',
                backgroundColor: 'rgba(30,41,59,0.3)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease-out ${i * 0.08}s, transform 0.5s ease-out ${i * 0.08}s, border-color 0.3s`,
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'rgba(5,150,105,0.15)' }}
                >
                  <FileText size={20} style={{ color: '#059669' }} />
                </div>
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: 'rgba(5,150,105,0.15)', color: '#059669' }}
                >
                  {resource.type}
                </span>
              </div>

              <h3 className="mb-2 text-base font-semibold tracking-tight text-ivory">
                {resource.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed" style={{ color: 'rgba(248,250,252,0.6)' }}>
                {resource.desc}
              </p>

              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #1e293b' }}>
                <span className="text-xs" style={{ color: 'rgba(248,250,252,0.4)' }}>
                  {resource.date}
                </span>
                <button
                  className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:opacity-70"
                  style={{ color: '#059669' }}
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Download size={14} />
                  Request
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-emerald-outline"
          >
            Subscribe to Updates
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
