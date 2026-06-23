import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Mail, Linkedin, Send, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <section ref={sectionRef} id="contact" className="section-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wide"
            style={{ color: '#059669' }}
          >
            Get In Touch
          </span>
          <h2 className="text-h2 mb-4" style={{ color: '#0a1628' }}>
            Ready to Streamline Your Finances?
          </h2>
          <p className="text-body mx-auto max-w-2xl" style={{ color: '#64748b' }}>
            Book a free consultation or reach out on WhatsApp. We typically respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div
            className="lg:col-span-2"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <div className="mb-8">
              <h3 className="text-h3 mb-4" style={{ color: '#0a1628' }}>
                Contact Information
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                Whether you need a one-time consultation or a full-service accounting partnership, we\'re here to help.
              </p>
            </div>

            <div className="mb-8 space-y-5">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border p-4 transition-all duration-200 hover:border-emerald hover:shadow-sm"
                style={{ borderColor: '#e2e8f0', backgroundColor: '#ffffff' }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(5,150,105,0.1)' }}
                >
                  <MessageCircle size={22} style={{ color: '#059669' }} />
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: '#0a1628' }}>
                    WhatsApp
                  </div>
                  <div className="text-sm" style={{ color: '#64748b' }}>
                    Click to chat
                  </div>
                </div>
              </a>

              <a
                href="mailto:contact@theledgerco.in"
                className="flex items-center gap-4 rounded-lg border p-4 transition-all duration-200 hover:border-emerald hover:shadow-sm"
                style={{ borderColor: '#e2e8f0', backgroundColor: '#ffffff' }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(5,150,105,0.1)' }}
                >
                  <Mail size={22} style={{ color: '#059669' }} />
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: '#0a1628' }}>
                    Email
                  </div>
                  <div className="text-sm" style={{ color: '#64748b' }}>
                    contact@theledgerco.in
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/company/theledgerco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border p-4 transition-all duration-200 hover:border-emerald hover:shadow-sm"
                style={{ borderColor: '#e2e8f0', backgroundColor: '#ffffff' }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(5,150,105,0.1)' }}
                >
                  <Linkedin size={22} style={{ color: '#059669' }} />
                </div>
                <div>
                  <div className="text-sm font-medium" style={{ color: '#0a1628' }}>
                    LinkedIn
                  </div>
                  <div className="text-sm" style={{ color: '#64748b' }}>
                    Follow for updates
                  </div>
                </div>
              </a>
            </div>

            <div className="rounded-lg border p-6" style={{ borderColor: '#e2e8f0', backgroundColor: '#f8fafc' }}>
              <div className="mb-3 flex items-center gap-2">
                <MapPin size={16} style={{ color: '#059669' }} />
                <span className="text-sm font-semibold" style={{ color: '#0a1628' }}>
                  Serving Clients Across India
                </span>
              </div>
              <p className="text-sm" style={{ color: '#64748b' }}>
                Remote-first engagement model with virtual meetings and digital document handling. Available for on-site visits in select cities.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-xl border p-8 lg:col-span-3"
            style={{
              borderColor: '#e2e8f0',
              backgroundColor: '#ffffff',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s',
            }}
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(5,150,105,0.1)' }}>
                  <CheckCircle size={32} style={{ color: '#059669' }} />
                </div>
                <h3 className="text-h3 mb-2" style={{ color: '#0a1628' }}>
                  Thank You!
                </h3>
                <p className="text-body" style={{ color: '#64748b' }}>
                  We\'ve received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-h3 mb-6" style={{ color: '#0a1628' }}>
                  Book a Free Consultation
                </h3>

                <div className="mb-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: '#0a1628' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-emerald"
                      style={{ borderColor: '#e2e8f0', color: '#0a1628' }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: '#0a1628' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-emerald"
                      style={{ borderColor: '#e2e8f0', color: '#0a1628' }}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: '#0a1628' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-emerald"
                      style={{ borderColor: '#e2e8f0', color: '#0a1628' }}
                      placeholder="+91 99999 99999"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: '#0a1628' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-emerald"
                      style={{ borderColor: '#e2e8f0', color: '#0a1628' }}
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium" style={{ color: '#0a1628' }}>
                    Service Interested In
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-emerald"
                    style={{ borderColor: '#e2e8f0', color: '#0a1628', backgroundColor: '#ffffff' }}
                  >
                    <option value="">Select a service</option>
                    <option value="accounting">Accounting & Bookkeeping</option>
                    <option value="gst">GST Compliance</option>
                    <option value="tax">Income Tax Support</option>
                    <option value="reporting">Financial Reporting</option>
                    <option value="audit">Audit Support</option>
                    <option value="payroll">Payroll Management</option>
                    <option value="automation">Process Automation</option>
                    <option value="software">Accounting Software Setup</option>
                    <option value="advisory">Business Advisory</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium" style={{ color: '#0a1628' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-emerald"
                    style={{ borderColor: '#e2e8f0', color: '#0a1628', resize: 'vertical' }}
                    placeholder="Tell us about your business and what you need help with..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center md:w-auto">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
