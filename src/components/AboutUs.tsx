import React from 'react';
import { Target, Zap, Cpu, BarChart2, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Sparkles, Award, Globe, Users } from 'lucide-react';
import { OFFICIAL_METRICS, CORPORATE_CONTACT } from '../data/siteData';

interface AboutUsProps {
  onOpenStrategyCall: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenStrategyCall }) => {
  const pillars = [
    {
      icon: Cpu,
      title: 'AI-Integrated Growth Frameworks',
      description: 'We embed predictive machine learning models into every search campaign, content architecture, and customer journey to outpace algorithm shifts before competitors react.',
      badge: 'Machine Learning'
    },
    {
      icon: BarChart2,
      title: 'Data-Backed Deterministic Attribution',
      description: 'We eliminate vanity metrics. Every campaign decision is anchored in verified pipeline generation, blended Customer Acquisition Cost (CAC), and customer Lifetime Value (LTV).',
      badge: 'Revenue Operations'
    },
    {
      icon: Zap,
      title: 'High-Performance Web Engineering',
      description: 'Traffic without conversion is wasted capital. We construct sub-second edge-rendered web platforms and interactive 3D experiences that turn passive interest into transactions.',
      badge: 'Edge Next.js'
    },
    {
      icon: Target,
      title: 'Measurable Commercial Outcomes',
      description: 'We align our engineering and growth sprints directly with your quarterly board goals, scaling predictable revenue while reducing reliance on expensive ad auctions.',
      badge: 'Verified ROI'
    }
  ];

  return (
    <section id="about-us" className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#07080B] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Official Numbers */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT ASEARCH ONLINE</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
              <span>14+ YEARS OF EXCELLENCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.14] text-balance">
              Where Search Science Meets High-Velocity Engineering
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
              Operating officially under <strong className="font-bold text-slate-900 dark:text-[#F5F7FA]">ASEARCH ONLINE MEDIA PRIVATE LIMITED</strong> (Inc. 2017) and <strong className="font-bold text-slate-900 dark:text-[#F5F7FA]">ASEARCH ONLINE TECHNOLOGY PRIVATE LIMITED</strong>, we are a technology-led digital growth agency built for ambitious category leaders.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
              With 14+ years of industry leadership and over 110+ global clients worldwide—including Microsoft, Fortis Healthcare, Nokia, HCL, and Yatra—we treat digital growth as a rigorous software discipline. We replace fragmented agency guesswork with AI-driven SEO entity graphs, programmatic bidding pipelines, and sub-second web experiences.
            </p>

            {/* Official Numbers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {OFFICIAL_METRICS.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 shadow-xs">
                  <div className="text-2xl font-mono font-extrabold text-lime-600 dark:text-[#C6FF4D]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-[#F5F7FA] mt-0.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate Location Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-[#F5F7FA] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D]" />
                <span>Corporate Headquarters & Regional Tech Hubs</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-[#9CA3AF]">
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">New Delhi Corporate Office:</strong>
                  2nd Floor, Enterprise House, D-128-129, Okhla Phase 1, New Delhi - 110020
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">Hyderabad Technology Hub:</strong>
                  D-808, Manjeera Diamonds, Nallagandla, Hyderabad - 500046
                </div>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenStrategyCall}
                className="inline-flex items-center gap-2 text-sm font-bold text-lime-600 dark:text-[#C6FF4D] hover:underline transition-all cursor-pointer group"
              >
                <span>Schedule a Free Strategy Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars Bento Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 shadow-xs hover:border-lime-500 dark:hover:border-[#C6FF4D]/40 transition-all flex flex-col justify-between group text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 flex items-center justify-center text-lime-600 dark:text-[#C6FF4D] group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-[#9CA3AF]">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-[#F5F7FA] leading-snug group-hover:text-lime-600 dark:group-hover:text-[#C6FF4D] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-[#9CA3AF] mt-2.5 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
