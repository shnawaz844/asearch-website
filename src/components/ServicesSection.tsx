import React, { useState } from 'react';
import { ALL_SERVICES } from '../data/siteData';
import { ServiceItem } from '../types';
import { ArrowUpRight, CheckCircle2, ChevronRight, X, Sparkles, Layers, Code2, Globe } from 'lucide-react';

interface ServicesSectionProps {
  onOpenStrategyCall: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenStrategyCall }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [inspectingService, setInspectingService] = useState<ServiceItem | null>(null);

  const categories = [
    'All',
    'Organic Discovery',
    'Performance PPC',
    'Revenue Operations',
    'Conversion Systems',
    'Digital Infrastructure',
    'Spatial Computing',
  ];

  const filteredServices = activeCategory === 'All'
    ? ALL_SERVICES
    : ALL_SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#06080e] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Growth Engineering</span>
              <span aria-hidden="true" className="text-blue-300 dark:text-blue-700">·</span>
              <span>10 Core Frameworks</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Engineered Capabilities for Market Leadership
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              From autonomous AI-driven SEO and algorithmic ad buying to sub-second web platforms and 3D spatial visualizers, we deliver unified systems that eliminate growth bottlenecks.
            </p>
          </div>

          {/* Category Filter Pills (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 hover:bg-slate-50/70 dark:hover:bg-slate-900/90 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group shadow-xs"
            >
              <div>
                {/* Header with Number and Metric */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    {service.number} // {service.category}
                  </span>
                  <span className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60">
                    {service.metricHeadline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* 3 Key Capabilities */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800/70">
                  {service.capabilities.slice(0, 3).map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/70 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                  {service.deliverables.length} Deliverables
                </span>
                <button
                  onClick={() => setInspectingService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>Inspect Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service Inspection Modal */}
        {inspectingService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-7 sm:p-9 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setInspectingService(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close service dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 mb-1.5">
                <span>SERVICE ARCHITECTURE // {inspectingService.number}</span>
                <span aria-hidden="true">·</span>
                <span>{inspectingService.category}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {inspectingService.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {inspectingService.description}
              </p>

              {/* Metric Card */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Expected Growth Outcome
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                    {inspectingService.metricLabel}
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
                  {inspectingService.metricHeadline}
                </div>
              </div>

              {/* All Capabilities */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Scope & Technical Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {inspectingService.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/70 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Technologies */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                    Production Deliverables
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {inspectingService.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">
                    Integrated Stack
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {inspectingService.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setInspectingService(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Close Blueprint
                </button>

                <button
                  onClick={() => {
                    const title = inspectingService.title;
                    setInspectingService(null);
                    onOpenStrategyCall(title);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all cursor-pointer active:scale-[0.98]"
                >
                  <span>Schedule Consultation for {inspectingService.title}</span>
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
