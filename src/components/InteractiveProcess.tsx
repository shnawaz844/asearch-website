import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Search, Compass, Palette, Rocket } from 'lucide-react';
import { BentoCard } from './ui/BentoCard';

interface ProcessStep {
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: React.ElementType;
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    name: 'Discover',
    tagline: 'Understand the business, audience, and commercial objectives.',
    description: 'We audit your technical footprint, query landscape, customer acquisition economics, and competitor moats to identify where market share is being forfeited.',
    deliverables: ['Deep Technical SEO & Schema Audit', 'Paid Media Query Waste Analysis', 'Customer Journey Friction Mapping', 'Executive Growth Opportunity Matrix'],
    icon: Search
  },
  {
    number: '02',
    name: 'Strategize',
    tagline: 'Develop a data-informed, algorithmic roadmap.',
    description: 'We construct a multi-channel growth architecture—aligning entity-based semantic SEO, automated paid bidding scripts, and conversion funnels to specific ARR milestones.',
    deliverables: ['90-Day Execution Blueprint', 'Semantic Knowledge Graph Schema', 'Paid Campaign Account Restructuring', 'Target ROAS & LTV Model'],
    icon: Compass
  },
  {
    number: '03',
    name: 'Create',
    tagline: 'Build compelling creative and digital experiences.',
    description: 'Our software engineers and creative directors build sub-second Next.js web applications, high-converting ad creative matrices, and interactive 3D spatial experiences.',
    deliverables: ['Production Next.js / React Applications', 'High-Converting Dynamic Ad Creatives', 'Automated Lead Qualification Flows', 'Lighthouse 98+ Performance Guarantee'],
    icon: Palette
  },
  {
    number: '04',
    name: 'Optimize',
    tagline: 'Test, measure, and improve performance continuously.',
    description: 'Growth is compounding. We run bi-weekly multivariate A/B tests, algorithmic bid refinements, negative query scraping, and closed-loop CRM revenue reconciliation.',
    deliverables: ['Continuous Multivariate CRO Experiments', 'Real-Time Executive BI Dashboards', 'Algorithmic Bid Rebalancing', 'Deterministic Monthly Attribution Reports'],
    icon: Rocket
  }
];

export const InteractiveProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#07080B] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] mb-3 shadow-xs">
            <span>03 // METHODOLOGY</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
            <span>PROVEN ROADMAP</span>
          </div>
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
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
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
            <BentoCard className="p-8 sm:p-10" glowColor="rgba(198, 255, 77, 0.2)">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-6 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D]">
                    STAGE // {STEPS[activeStep].number}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F5F7FA] mt-1">
                    {STEPS[activeStep].name}
                  </h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D]">
                  {STEPS[activeStep].deliverables.length} Key Outputs
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                {STEPS[activeStep].description}
              </p>

              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA] mb-4">
                  Stage Deliverables & Systems
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STEPS[activeStep].deliverables.map((item, i) => (
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
                  {activeStep + 1} of 4 Sequential Sprints
                </span>
                <button
                  onClick={() => setActiveStep((activeStep + 1) % STEPS.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-600 dark:text-[#C6FF4D] hover:underline cursor-pointer"
                >
                  <span>Next Sprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};
