import { useEffect, useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? '#f8fafc' : 'transparent',
          boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold tracking-tight"
            style={{ color: scrolled ? '#0a1628' : '#f8fafc' }}
          >
            The Ledger Co.
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative text-sm font-medium tracking-tight transition-colors duration-200 hover:opacity-70"
                style={{ color: scrolled ? '#1e293b' : '#f8fafc' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 hover:w-full"
                  style={{ backgroundColor: scrolled ? '#059669' : '#f8fafc' }}
                />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary"
              style={{ padding: '10px 24px', fontSize: '14px' }}
            >
              Book a Call
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: scrolled ? '#0a1628' : '#f8fafc' }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-midnight pt-20">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-lg font-medium text-ivory transition-opacity hover:opacity-70"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo('#contact')} className="btn-primary mt-4">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </>
  );
}
