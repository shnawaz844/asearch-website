import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Search, Compass, Palette, Rocket, Edit3 } from 'lucide-react';
import { BentoCard } from './ui/BentoCard';
import { useCMS } from '../context/CMSContext';

interface ProcessStep {
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

const STEP_ICONS = [Search, Compass, Palette, Rocket];

export const InteractiveProcess: React.FC = () => {
  const { siteContent, isAuthenticated, openEditorToTab } = useCMS();
  const steps = siteContent.process;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#07080B] relative transition-colors group/process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 text-left relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] mb-3 shadow-xs">
            <span>03 // METHODOLOGY</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
            <span>PROVEN ROADMAP</span>
          </div>
          {isAuthenticated && (
            <button
              onClick={() => openEditorToTab('process')}
              className="ml-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-lime-500/20 text-lime-700 dark:text-[#C6FF4D] border border-lime-500/30 text-[11px] font-mono font-bold hover:bg-lime-500/30 transition-all cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Process</span>
            </button>
          )}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.12]">
            Our Four-Stage Engine
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
            How we partner with category-defining companies to replace guesswork with engineering-grade growth predictability.
          </p>
        </div>

        {/* Step Selector Tabs & Active Step Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const Icon = STEP_ICONS[idx % STEP_ICONS.length] || Sparkles;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-[#11151D] border-lime-500 dark:border-[#C6FF4D] shadow-lg shadow-lime-500/10 dark:shadow-[#C6FF4D]/10'
                      : 'bg-white/60 dark:bg-[#0D1017]/60 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-[#11151D]/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-base font-mono font-extrabold ${isSelected ? 'text-lime-600 dark:text-[#C6FF4D]' : 'text-slate-400 dark:text-[#9CA3AF]'}`}>
                      {step.number}
                    </span>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold transition-colors ${isSelected ? 'text-slate-900 dark:text-[#F5F7FA]' : 'text-slate-600 dark:text-[#9CA3AF]'}`}>
                        {step.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-[#9CA3AF] line-clamp-1 mt-0.5">
                        {step.tagline}
                      </p>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#C6FF4D] text-[#07080B]' : 'bg-slate-100 dark:bg-[#11151D] text-slate-500 dark:text-[#9CA3AF]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="lg:col-span-7">
            {steps[activeStep] && (
              <BentoCard className="p-8 sm:p-10" glowColor="rgba(198, 255, 77, 0.2)">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-6 mb-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D]">
                      STAGE // {steps[activeStep].number}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA] mt-1">
                      {steps[activeStep].name}
                    </h3>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D]">
                    {steps[activeStep].deliverables?.length || 0} Key Outputs
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                  {steps[activeStep].description}
                </p>

                <div className="mt-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA] mb-4">
                    Stage Deliverables & Systems
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {steps[activeStep].deliverables?.map((item, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200/80 dark:border-white/5 flex items-start gap-2.5 text-xs text-slate-800 dark:text-[#F5F7FA]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-[#9CA3AF]">
                    {activeStep + 1} of {steps.length} Sequential Sprints
                  </span>
                  <button
                    onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-600 dark:text-[#C6FF4D] hover:underline cursor-pointer"
                  >
                    <span>Next Sprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </BentoCard>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
