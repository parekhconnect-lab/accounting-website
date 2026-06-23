import { MessageCircle, Mail, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Accounting & Bookkeeping', href: '#services' },
    { label: 'GST Compliance', href: '#services' },
    { label: 'Income Tax Support', href: '#services' },
    { label: 'Financial Reporting', href: '#services' },
    { label: 'Audit Support', href: '#services' },
    { label: 'Payroll Management', href: '#services' },
    { label: 'Process Automation', href: '#services' },
    { label: 'Business Advisory', href: '#services' },
  ],
  industries: [
    { label: 'Jewellery', href: '#services' },
    { label: 'Retail', href: '#services' },
    { label: 'Manufacturing', href: '#services' },
    { label: 'Professional Services', href: '#services' },
    { label: 'Startups', href: '#services' },
    { label: 'Outsourcing Firms', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#why-us' },
    { label: 'Our Process', href: '#process' },
    { label: 'Case Studies', href: '#services' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-midnight pt-20 pb-8" style={{ borderTop: '1px solid #1e293b' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-xl font-bold tracking-tight text-ivory">
              The Ledger Co.
            </h3>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: 'rgba(248,250,252,0.6)' }}>
              Your outsourced finance department. Technology-enabled accounting and business advisory for growing companies.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-emerald"
                style={{ backgroundColor: '#1e293b' }}
              >
                <MessageCircle size={18} style={{ color: '#f8fafc' }} />
              </a>
              <a
                href="mailto:contact@theledgerco.in"
                className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-emerald"
                style={{ backgroundColor: '#1e293b' }}
              >
                <Mail size={18} style={{ color: '#f8fafc' }} />
              </a>
              <a
                href="https://linkedin.com/company/theledgerco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-emerald"
                style={{ backgroundColor: '#1e293b' }}
              >
                <Linkedin size={18} style={{ color: '#f8fafc' }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: '#059669' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-200 hover:text-emerald"
                    style={{ color: 'rgba(248,250,252,0.6)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: '#059669' }}>
              Industries
            </h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-200 hover:text-emerald"
                    style={{ color: 'rgba(248,250,252,0.6)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider" style={{ color: '#059669' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-200 hover:text-emerald"
                    style={{ color: 'rgba(248,250,252,0.6)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row"
          style={{ borderTop: '1px solid #1e293b' }}
        >
          <p className="text-xs" style={{ color: 'rgba(248,250,252,0.4)' }}>
            &copy; {new Date().getFullYear()} The Ledger Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollTo('#')}
              className="text-xs transition-colors duration-200 hover:text-emerald"
              style={{ color: 'rgba(248,250,252,0.4)' }}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollTo('#')}
              className="text-xs transition-colors duration-200 hover:text-emerald"
              style={{ color: 'rgba(248,250,252,0.4)' }}
            >
              Terms of Service
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-emerald"
              style={{ backgroundColor: '#1e293b' }}
            >
              <ArrowUp size={14} style={{ color: '#f8fafc' }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
