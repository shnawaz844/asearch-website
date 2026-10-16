import React, { useState } from 'react';
import { ALL_SERVICES } from '../data/siteData';
import { ServiceItem } from '../types';
import { BentoCard } from './ui/BentoCard';
import { ArrowUpRight, CheckCircle2, X, Sparkles, TrendingUp, Search, Share2, Palette, Code2, Workflow, DollarSign, BarChart3, Layers, Compass, Edit3 } from 'lucide-react';
import { useCMS } from '../context/CMSContext';

interface ServicesBentoProps {
  onOpenContact: (serviceTitle?: string) => void;
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'ai-seo': Search,
  'paid-media': TrendingUp,
  'cro': BarChart3,
  'social-media': Share2,
  'brand-strategy': Palette,
  'b2b-marketing': Layers,
  'ecommerce-growth': DollarSign,
  'marketing-automation': Workflow,
  'web-development': Code2,
  'custom-software': Code2,
  'ar-vr': Sparkles,
  'analytics-data': BarChart3,
};

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenContact }) => {
  const { siteContent, isAuthenticated, openEditorToTab } = useCMS();
  const services = siteContent.services || ALL_SERVICES;

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All Capabilities');

  const categories = [
    'All Capabilities',
    'Digital Marketing & Strategy',
    'Technology & Automation Solutions'
  ];

  const displayedServices = activeCategory === 'All Capabilities'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#07080B] relative overflow-hidden transition-colors group/services">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-96 h-96 bg-purple-500/10 dark:bg-[#8B5CF6]/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute -bottom-40 left-0 w-96 h-96 bg-lime-500/10 dark:bg-[#C6FF4D]/8 blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] mb-3 shadow-xs">
              <span>01 // OFFICIAL SERVICES & CAPABILITIES</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
              <span>12 CORE GROWTH DISCIPLINES</span>
            </div>
            {isAuthenticated && (
              <button
                onClick={() => openEditorToTab('services')}
                className="ml-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-lime-500/20 text-lime-700 dark:text-[#C6FF4D] border border-lime-500/30 text-[11px] font-mono font-bold hover:bg-lime-500/30 transition-all cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit 12 Services</span>
              </button>
            )}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.12]">
              Engineering Market Dominance
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
              We deploy full-lifecycle growth systems spanning predictive search, algorithmic media buying, marketing automation, and custom web infrastructure.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white dark:bg-[#11151D] rounded-2xl border border-slate-200 dark:border-white/10 shrink-0 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#C6FF4D] text-[#07080B] shadow-sm'
                    : 'text-slate-600 dark:text-[#9CA3AF] hover:text-slate-950 dark:hover:text-[#F5F7FA]'
                }`}
              >
                {cat === 'Technology & Automation Solutions' ? 'Technology & Automation' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] || Sparkles;
            const isLarge = index === 0 || index === 7;

            return (
              <BentoCard
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`cursor-pointer ${
                  isLarge ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
                glowColor={index % 2 === 0 ? 'rgba(198, 255, 77, 0.15)' : 'rgba(139, 92, 246, 0.15)'}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 flex items-center justify-center text-lime-600 dark:text-[#C6FF4D] group-hover:scale-110 group-hover:bg-[#C6FF4D] group-hover:text-[#07080B] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10">
                      {service.metricHeadline}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-slate-500 dark:text-[#9CA3AF] uppercase tracking-wider">
                    {service.number} // {service.category}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-[#F5F7FA] mt-1 group-hover:text-lime-600 dark:group-hover:text-[#C6FF4D] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 dark:border-white/10">
                    {service.capabilities.slice(0, isLarge ? 3 : 2).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-[#9CA3AF]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-600 dark:text-[#C6FF4D] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-[#9CA3AF]">
                    {service.deliverables.length} Key Deliverables
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-600 dark:text-[#C6FF4D] group-hover:translate-x-1 transition-transform">
                    <span>Inspect Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </div>

        {/* Detailed Modal Inspection */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-xl animate-in fade-in duration-150">
            <div className="relative w-full max-w-2xl bg-white dark:bg-[#0D1017] rounded-3xl border border-slate-200 dark:border-white/15 p-7 sm:p-9 max-h-[90vh] overflow-y-auto shadow-2xl text-left">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-500 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-[#F5F7FA] hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D] mb-1">
                SYSTEM BLUEPRINT // {selectedService.number} — {selectedService.category}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
                {selectedService.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                {selectedService.description}
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-[#9CA3AF]">
                    Expected Commercial Outcome
                  </div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-[#F5F7FA] mt-0.5">
                    {selectedService.metricLabel}
                  </div>
                </div>
                <div className="text-3xl font-mono font-extrabold text-lime-600 dark:text-[#C6FF4D]">
                  {selectedService.metricHeadline}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA] mb-3">
                  Scope & Architectural Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-[#9CA3AF]">
                      <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-xs font-bold uppercase text-slate-500 dark:text-[#9CA3AF] mb-2">
                    Key Deliverables
                  </h5>
                  <ul className="space-y-1 text-xs text-slate-800 dark:text-[#F5F7FA]">
                    {selectedService.deliverables.map(d => (
                      <li key={d} className="flex items-center gap-1.5">
                        <span className="text-lime-600 dark:text-[#C6FF4D]">✦</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-slate-500 dark:text-[#9CA3AF] mb-2">
                    Technologies & APIs
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedService.technologies.map(t => (
                      <span key={t} className="px-2 py-1 rounded bg-slate-100 dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-[11px] font-mono text-lime-600 dark:text-[#C6FF4D]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenContact(`Service Inquiry: ${title}`);
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#C6FF4D] text-[#07080B] hover:bg-[#d4ff6e] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Build with {selectedService.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
