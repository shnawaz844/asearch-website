import React from 'react';
import { Mail, Phone, MapPin, Globe, ArrowUpRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

interface FooterProps {
  onOpenStrategyCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStrategyCall }) => {
  return (
    <footer className="border-t border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#07080B] transition-colors">
      {/* Pre-Footer Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-200/90 dark:border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-slate-100/70 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 shadow-xl">
          <div className="max-w-2xl text-left">
            <div className="text-xs font-mono font-bold tracking-wider uppercase text-lime-600 dark:text-[#C6FF4D] mb-2">
              Transform Your Growth Trajectory
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight">
              Ready to replace guesswork with engineering-grade search ecosystems?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
              Schedule your complimentary discovery session with an ASearch growth architect. We will audit your current search bottlenecks and present an actionable 90-day growth roadmap.
            </p>
          </div>

          <div className="shrink-0">
            <MagneticButton
              href="mailto:akram@asearchonline.com?subject=Strategic%20Consultation%20Inquiry%20-%20ASearch%20Online"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="text-xs uppercase tracking-wider py-3.5 px-7 font-extrabold cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Regional Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
          {/* Brand & Corporate Entity */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-flex items-center gap-3 group" aria-label="ASearch Online Home">
              <img
                src="https://asearchonline.com/wp-content/uploads/2026/02/asearchLOGO.png"
                alt="ASearch Online"
                className="h-11 sm:h-12 w-auto max-w-[240px] object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('footer-brand-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div id="footer-brand-fallback" className="hidden items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#C6FF4D] text-[#07080B] flex items-center justify-center font-extrabold text-base shadow-lg shadow-[#C6FF4D]/20">
                  A
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA]">
                    ASEARCH
                  </span>
                  <span className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D] tracking-widest">
                    // ONLINE
                  </span>
                </div>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] max-w-sm leading-relaxed">
              Operating as <strong className="text-slate-900 dark:text-[#F5F7FA]">ASEARCH ONLINE MEDIA PRIVATE LIMITED</strong> and <strong className="text-slate-900 dark:text-[#F5F7FA]">ASEARCH ONLINE TECHNOLOGY PRIVATE LIMITED</strong>. 14+ years of engineering-grade digital marketing, AISEO, and high-performance web systems.
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-slate-500 dark:text-[#9CA3AF]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-lime-600 dark:text-[#C6FF4D] shrink-0 mt-0.5" />
                <span>Delhi: Enterprise House, D-128-129, Okhla Phase 1 · Hyderabad: Manjeera Diamonds, Nallagandla</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-lime-600 dark:text-[#C6FF4D] shrink-0" />
                <a href="tel:+919573194350" className="hover:underline text-lime-600 dark:text-[#C6FF4D]">
                  +91-9217571022
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-lime-600 dark:text-[#C6FF4D] shrink-0" />
                <a href="mailto:akram@asearchonline.com" className="hover:underline text-lime-600 dark:text-[#C6FF4D]">
                  akram@asearchonline.com
                </a>
              </div>
            </div>
          </div>

          {/* Column: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA]">
              Growth Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-[#9CA3AF]">
              <li><a href="#services" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">AI-Driven SEO (AISEO)</a></li>
              <li><a href="#services" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">Paid Media & PPC</a></li>
              <li><a href="#services" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">Marketing Automation</a></li>
              <li><a href="#services" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">Conversion Rate Optimization</a></li>
              <li><a href="#services" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">Web & Next.js Development</a></li>
              <li><a href="#services" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">AR & VR Immersive 3D</a></li>
            </ul>
          </div>

          {/* Column: Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA]">
              Industries
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-[#9CA3AF]">
              <li><a href="#industries" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">IT & B2B SaaS</a></li>
              <li><a href="#industries" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">eCommerce & Retail</a></li>
              <li><a href="#industries" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">Hospitality & Travel</a></li>
              <li><a href="#industries" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">Healthcare & Biotech</a></li>
              <li><a href="#industries" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">Education & EdTech</a></li>
              <li><a href="#industries" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">Power & Energy</a></li>
            </ul>
          </div>

          {/* Column: Technology & Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA]">
              Navigation & Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-[#9CA3AF]">
              <li><a href="#about" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">Why ASearch Online</a></li>
              <li><a href="#spatial-lab" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">3D Spatial Lab (Three.js)</a></li>
              <li><a href="#growth-simulator" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">ROI & Search Simulator</a></li>
              <li><a href="#insights" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">Architecture Scanner</a></li>
              <li><a href="#contact" className="hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors">Direct Inquiry</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Unboxed text metadata */}
        <div className="mt-12 pt-6 border-t border-slate-200/90 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-[#9CA3AF]">
          <div>
            &copy; {new Date().getFullYear()} ASEARCH ONLINE MEDIA PRIVATE LIMITED. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:underline">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:underline">Terms of Service</a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:underline">Enterprise SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
