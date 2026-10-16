import React from 'react';
import { TESTIMONIALS_DATA } from '../data/siteData';
import { Star, Quote, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenStrategyCall: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenStrategyCall }) => {
  return (
    <section id="testimonials" className="py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#06080e] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Feedback & Impact</span>
            <span aria-hidden="true" className="text-blue-300 dark:text-blue-700">·</span>
            <span>Voices of Satisfaction</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Hear What Our Clients Have to Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Real feedback from marketing leaders and founders who partnered with ASearch Online to accelerate search pipeline and scale revenue.
          </p>
        </div>

        {/* Testimonials 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/50 shadow-xs hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5-Star Row + Sector Tag */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 font-mono">
                    {item.industry}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Highlight Metric */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                    {item.clientName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.clientName}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {item.clientRole} · <span className="text-slate-700 dark:text-slate-300 font-semibold">{item.companyName}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
                    {item.highlightMetric}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                    {item.metricDescription}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Endorsement Strip */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-slate-50/80 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-slate-900/50 border border-blue-200/70 dark:border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-3.5">
            <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
              100% of case outcomes are validated via Google Analytics 4, CRM revenue attribution, and direct client sign-off.
            </span>
          </div>

          <button
            onClick={onOpenStrategyCall}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors whitespace-nowrap cursor-pointer active:scale-[0.98]"
          >
            <span>Schedule Evaluation Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
