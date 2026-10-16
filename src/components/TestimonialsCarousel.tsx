import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/siteData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { BentoCard } from './ui/BentoCard';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#07080B] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] mb-3 shadow-xs">
              <span>05 // TESTIMONIALS</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
              <span>VOICES OF SATISFACTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.12]">
              Verified Client Outcomes
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
              Direct feedback from commercial leaders and founders who scaled with ASearch Online.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-[#F5F7FA] hover:border-lime-500 dark:hover:border-[#C6FF4D] hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors cursor-pointer shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-slate-500 dark:text-[#9CA3AF] px-2">
              0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-[#F5F7FA] hover:border-lime-500 dark:hover:border-[#C6FF4D] hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors cursor-pointer shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Hero Card */}
        <BentoCard className="p-8 sm:p-12" glowColor="rgba(198, 255, 77, 0.18)">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-1.5">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 dark:fill-[#C6FF4D] dark:text-[#C6FF4D]" />
              ))}
            </div>
            <div className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D] px-3 py-1 rounded-full bg-slate-100 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10">
              {current.industry}
            </div>
          </div>

          <p className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA] leading-relaxed text-balance">
            "{current.quote}"
          </p>

          <div className="mt-10 pt-8 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 via-blue-500 to-lime-400 flex items-center justify-center text-slate-950 font-extrabold text-sm shadow-md">
                {current.clientName.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="text-base font-bold text-slate-900 dark:text-[#F5F7FA]">
                  {current.clientName}
                </div>
                <div className="text-xs text-slate-500 dark:text-[#9CA3AF]">
                  {current.clientRole} · <span className="text-lime-600 dark:text-[#C6FF4D] font-semibold">{current.companyName}</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-3xl sm:text-4xl font-mono font-extrabold text-lime-600 dark:text-[#C6FF4D]">
                {current.highlightMetric}
              </div>
              <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-[#9CA3AF] mt-0.5">
                {current.metricDescription}
              </div>
            </div>
          </div>
        </BentoCard>

        {/* 3 Supporting Testimonial Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'bg-white dark:bg-[#11151D] border-lime-500 dark:border-[#C6FF4D] shadow-md'
                  : 'bg-white/60 dark:bg-[#0D1017]/60 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              <div className="text-xs font-mono text-lime-600 dark:text-[#C6FF4D] font-bold mb-2">
                {item.companyName}
              </div>
              <p className="text-xs text-slate-600 dark:text-[#9CA3AF] line-clamp-3 leading-relaxed">
                "{item.quote}"
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-800 dark:text-[#F5F7FA]">{item.clientName}</span>
                <span className="text-lime-600 dark:text-[#C6FF4D] font-bold">{item.highlightMetric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
