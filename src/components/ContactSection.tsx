import React, { useState } from 'react';
import { FAQ_DATA } from '../data/siteData';
import { Mail, Phone, MapPin, Globe, CheckCircle2, Send, ChevronDown, ChevronUp, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [serviceRequired, setServiceRequired] = useState('AI-Driven SEO');
  const [budget, setBudget] = useState('$5k - $15k / month');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#07080B] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>10 // ENGAGEMENT</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
            <span>STRATEGY INTAKE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.12]">
            Start a Conversation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
            Tell us about your current digital performance bottlenecks. Our senior technical architects will analyze your domain and present an actionable 90-day growth framework.
          </p>
        </div>

        {/* 2-Column Contact Form & Official Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Consultation Form */}
          <div className="lg:col-span-7 p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11151D] shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#C6FF4D]/20 border border-[#C6FF4D]/40 rounded-full flex items-center justify-center text-lime-600 dark:text-[#C6FF4D] mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
                  Strategy Session Scheduled
                </h3>
                <p className="text-sm text-slate-600 dark:text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900 dark:text-white">{name}</span>. Our growth engineering team at ASearch Online will review your company requirements and contact you at <span className="font-semibold text-lime-600 dark:text-[#C6FF4D]">{email}</span> within 2 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
                  <span className="text-xs font-bold text-slate-900 dark:text-[#F5F7FA] uppercase tracking-wider font-mono">
                    Direct Inquiry Specification
                  </span>
                  <span className="text-xs text-lime-600 dark:text-[#C6FF4D] font-mono">
                    Complimentary Architecture Audit
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-xs text-rose-600 dark:text-rose-400">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                      Company & Domain *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp (acme.com)"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                      Primary Service Focus
                    </label>
                    <select
                      value={serviceRequired}
                      onChange={(e) => setServiceRequired(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    >
                      <option value="AI-Driven SEO">AI-Driven SEO (AISEO)</option>
                      <option value="Paid Media">Paid Media & Programmatic PPC</option>
                      <option value="Marketing Automation">Marketing Automation</option>
                      <option value="Conversion Optimization">Conversion Rate Optimization (CRO)</option>
                      <option value="Web Engineering">Next.js Web Engineering</option>
                      <option value="Custom Software">Custom Software & CRM</option>
                      <option value="AR/VR Spatial">AR & VR Immersive 3D</option>
                      <option value="Full Growth Ecosystem">Full Growth Ecosystem (All-in-One)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                      Monthly Marketing Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    >
                      <option value="$3k - $5k / month">$3k - $5k / month</option>
                      <option value="$5k - $15k / month">$5k - $15k / month</option>
                      <option value="$15k - $50k / month">$15k - $50k / month</option>
                      <option value="$50k+ / month">$50k+ / month (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                    Your Current Growth Bottleneck or Goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you are trying to achieve (e.g. increase organic rankings in SearchGPT, scale Google Ads ROAS, rebuild website for speed)..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-[#9CA3AF]">
                    <ShieldCheck className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D]" />
                    <span>Protected by Mutual NDA</span>
                  </div>

                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    className="text-xs uppercase tracking-wider py-2.5 px-6 font-extrabold"
                  >
                    {isSubmitting ? (
                      <span>Scheduling...</span>
                    ) : (
                      <>
                        <span>Submit Strategy Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Official Agency Contact Credentials & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-[#F5F7FA]">
                Official Agency Credentials
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-[#F5F7FA]">
                      Corporate & Regional Offices
                    </div>
                    <div className="text-slate-600 dark:text-[#9CA3AF] mt-1 space-y-1">
                      <div><strong className="text-slate-800 dark:text-slate-200">New Delhi:</strong> 2nd Floor, Enterprise House, D-128-129, Okhla Phase 1, New Delhi - 110020</div>
                      <div><strong className="text-slate-800 dark:text-slate-200">Hyderabad Hub:</strong> D-808, Manjeera Diamonds, Nallagandla, Hyderabad - 500046</div>
                      <div><strong className="text-slate-800 dark:text-slate-200">Registered Entity:</strong> ASEARCH ONLINE MEDIA PRIVATE LIMITED (East Delhi)</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-[#F5F7FA]">
                      Direct Telephone & WhatsApp
                    </div>
                    <div className="text-lime-600 dark:text-[#C6FF4D] mt-1 space-y-0.5 font-mono">
                      <div><a href="tel:+919573194350" className="hover:underline">+91-9573194350 (Direct / WhatsApp)</a></div>
                      <div><a href="tel:+911140513772" className="hover:underline">+91-11-40513772 (Delhi PBX)</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-[#F5F7FA]">
                      Official Email Inquiries
                    </div>
                    <div className="text-lime-600 dark:text-[#C6FF4D] mt-1 space-y-0.5 font-mono">
                      <div><a href="mailto:info@asearchonline.com" className="hover:underline">info@asearchonline.com</a></div>
                      <div><a href="mailto:akram@asearchonline.com" className="hover:underline">akram@asearchonline.com</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-[#F5F7FA]">
                      Operational Hours & SLA
                    </div>
                    <div className="text-slate-600 dark:text-[#9CA3AF] mt-0.5">
                      Monday to Friday: 09:00 - 19:00 IST<br />
                      Emergency client incident support: 24/7
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/10">
                <div className="text-xs font-semibold text-slate-700 dark:text-[#9CA3AF]">
                  Global Client Timezone Support:
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-[#9CA3AF] mt-2 font-mono">
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-[#07080B] border border-slate-200 dark:border-white/5">India (IST)</span>
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-[#07080B] border border-slate-200 dark:border-white/5">North America (EST/PST)</span>
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-[#07080B] border border-slate-200 dark:border-white/5">Europe (GMT/CET)</span>
                  <span className="px-2 py-1 rounded bg-slate-100 dark:bg-[#07080B] border border-slate-200 dark:border-white/5">Middle East (GST)</span>
                </div>
              </div>
            </div>

            {/* Quick Fact Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-tr from-[#11151D] to-[#1A1F2C] border border-[#C6FF4D]/30 text-white shadow-xl space-y-2">
              <div className="text-xs font-bold font-mono uppercase tracking-wider text-[#C6FF4D]">
                Guaranteed Pre-Call Audit
              </div>
              <p className="text-xs leading-relaxed text-[#9CA3AF]">
                Before your strategy call, our engineering team runs an automated scan on your web properties to uncover crawl waste, negative query leakage, and citation opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="mt-20 pt-16 border-t border-slate-200/90 dark:border-white/10">
          <div className="max-w-3xl mb-10 text-left">
            <div className="text-xs font-mono font-bold tracking-wider uppercase text-lime-600 dark:text-[#C6FF4D] mb-1.5">
              11 // KNOWLEDGE BASE
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="max-w-4xl space-y-3">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11151D] overflow-hidden transition-colors shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-white/5"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-[#F5F7FA]">
                      {faq.question}
                    </span>
                    <span className="shrink-0 p-1 text-slate-400">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D]" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed border-t border-slate-100 dark:border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
