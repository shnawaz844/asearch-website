import React, { useState } from 'react';
import { INDUSTRIES_SERVED } from '../data/siteData';
import { IndustryItem } from '../types';
import { Cpu, ShoppingBag, Compass, Zap, GraduationCap, Smartphone, HeartHandshake, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

interface IndustriesSectionProps {
  onOpenStrategyCall: (industryName?: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu,
  ShoppingBag,
  Compass,
  Zap,
  GraduationCap,
  Smartphone,
  HeartHandshake,
  ShieldCheck,
};

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenStrategyCall }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES_SERVED[0]);

  const ActiveIcon = ICON_MAP[selectedIndustry.iconName] || Cpu;

  return (
    <section id="industries" className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#07080B] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // VERTICALS</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
            <span>8 SPECIALIZED SECTORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.14]">
            Industries We Scale
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
            Every market operates under unique regulatory pressures, buyer journeys, and search intent. We deploy pre-tested growth architectures tailored to your sector's exact commercial dynamics.
          </p>
        </div>

        {/* Desktop Split & Mobile Stack Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 8 Industry Selector Tabs */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {INDUSTRIES_SERVED.map((ind) => {
              const Icon = ICON_MAP[ind.iconName] || Cpu;
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-[#11151D] border-lime-500 dark:border-[#C6FF4D] shadow-md scale-[1.01]'
                      : 'bg-white/70 dark:bg-[#0D1017]/60 border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-[#11151D]/60 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#C6FF4D] text-[#07080B] shadow-xs'
                          : 'bg-slate-100 dark:bg-[#07080B] text-slate-600 dark:text-[#9CA3AF]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#F5F7FA]">
                      {ind.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D]">
                    {ind.expectedImpact.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Industry Deep Dive Card */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11151D] shadow-xl flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-white/10 pb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 flex items-center justify-center text-lime-600 dark:text-[#C6FF4D] shadow-xs">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-[#9CA3AF]">
                      Sector Blueprint
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
                      {selectedIndustry.name}
                    </h3>
                  </div>
                </div>

                <div className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 text-xs font-bold text-lime-600 dark:text-[#C6FF4D] font-mono">
                  {selectedIndustry.expectedImpact}
                </div>
              </div>

              {/* Subhead and Description */}
              <div className="mt-6 space-y-2.5">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#F5F7FA]">
                  {selectedIndustry.headline}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                  {selectedIndustry.description}
                </p>
              </div>

              {/* Specific Growth Framework Actions */}
              <div className="mt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA] mb-3">
                  Sector-Specific Growth Infrastructure
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedIndustry.growthFramework.map((action, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200/70 dark:border-white/5 text-xs text-slate-700 dark:text-[#9CA3AF]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D] shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Case Example Strip */}
              <div className="mt-6 p-4.5 rounded-2xl bg-slate-100/70 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10">
                <div className="text-[11px] font-bold uppercase text-slate-500 dark:text-[#9CA3AF]">
                  Verified Outcome In Production
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-[#F5F7FA] mt-1">
                  {selectedIndustry.caseMetric}
                </div>
              </div>
            </div>

            {/* Bottom Consultation CTA */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-[#9CA3AF]">
                Tailored benchmark consultation for {selectedIndustry.name}
              </span>
              <MagneticButton
                onClick={() => onOpenStrategyCall(`Industry Consultation: ${selectedIndustry.name}`)}
                variant="primary"
                className="text-xs uppercase tracking-wider py-2.5 px-5"
              >
                <span>Request {selectedIndustry.name} Plan</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
