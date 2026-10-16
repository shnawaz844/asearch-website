import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { Spotlight } from './ui/Spotlight';
import { HeroScene3D } from './HeroScene3D';
import { ThemeMode } from '../types';

import { useCMS } from '../context/CMSContext';
import { Edit3 } from 'lucide-react';

interface HeroProps {
  theme: ThemeMode;
  onOpenContact: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onOpenContact, onExploreWork }) => {
  const { siteContent, isAuthenticated, setIsEditorDrawerOpen } = useCMS();
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[95vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-between bg-slate-50 dark:bg-[#07080B] transition-colors group/hero">
      {/* 3D Starfield & Edge Matrix Canvas covering complete hero section */}
      <HeroScene3D theme={theme} />

      {/* Aceternity Spotlight Effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 z-0" fill="#C6FF4D" />
      <Spotlight className="top-10 left-full md:-top-10 md:left-2/3 z-0" fill="#8B5CF6" />

      {/* Atmospheric Background Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-lime-500/10 dark:from-[#8B5CF6]/15 dark:via-[#4D7CFE]/10 dark:to-[#C6FF4D]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Content with Crystal-Clear Backdrop */}
          <div className="lg:col-span-7">
            <div className="relative backdrop-blur-2xl bg-white/85 dark:bg-[#07080B]/65 border border-slate-200/90 dark:border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl shadow-slate-900/5 dark:shadow-black/80 space-y-5 sm:space-y-6 text-left">
              {/* Client Edit Quick Trigger */}
              {isAuthenticated && (
                <button
                  onClick={() => setIsEditorDrawerOpen(true)}
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-lime-500/20 text-lime-700 dark:text-[#C6FF4D] border border-lime-500/30 text-[11px] font-mono font-bold hover:bg-lime-500/30 transition-all cursor-pointer z-20"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Hero</span>
                </button>
              )}

              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-slate-800 dark:text-[#F5F7FA] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-lime-500 dark:bg-[#C6FF4D] animate-ping" />
                <span className="text-lime-600 dark:text-[#C6FF4D] font-bold">{hero.availabilityText}</span>
                <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
                <span className="text-slate-500 dark:text-[#9CA3AF]">{hero.availabilityQuarter}</span>
              </div>

              {/* Master Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] sm:leading-[0.98] text-balance">
                <span className="block text-slate-900 dark:text-[#F5F7FA]">{hero.headlineLine1}</span>
                <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-lime-600 via-slate-900 to-indigo-600 dark:from-[#C6FF4D] dark:via-[#F5F7FA] dark:to-[#C6FF4D] animate-shimmer">
                  {hero.headlineLine2}
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-[#9CA3AF] max-w-2xl leading-relaxed">
                {hero.description}
              </p>

              {/* Master Prompt CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <MagneticButton
                  onClick={onOpenContact}
                  variant="primary"
                  className="text-xs sm:text-sm uppercase tracking-wider font-extrabold py-3 px-5 sm:px-7"
                >
                  <span>{hero.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>

                <MagneticButton
                  onClick={onExploreWork}
                  variant="secondary"
                  className="text-xs sm:text-sm uppercase tracking-wider font-bold py-3 px-5 sm:px-6"
                >
                  <span>{hero.secondaryCtaText}</span>
                </MagneticButton>
              </div>

              {/* Proof Badges with Official Company Numbers */}
              <div className="pt-3 flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs text-slate-600 dark:text-[#9CA3AF] font-mono border-t border-slate-200/90 dark:border-white/10">
                {hero.badges.map((badge, idx) => (
                  <span key={idx} className="flex items-center gap-1.5">
                    <span className="text-lime-600 dark:text-[#C6FF4D]">✦</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{badge}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pure 3D Edge Matrix Area WITHOUT Any Boundary or Text */}
          <div className="lg:col-span-5 h-[300px] sm:h-[440px] lg:h-[580px] flex items-center justify-center relative pointer-events-none">
            {/* The 3D Edge Matrix in HeroScene3D renders directly here with no card border, box, or text overlays */}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator
      <div className="pt-4 sm:pt-6 pb-2 flex justify-center items-center relative z-10">
        <a
          href="#services"
          className="flex flex-col items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-[#9CA3AF] hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors"
        >
          <span>Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-lime-600 dark:text-[#C6FF4D]" />
        </a>
      </div> */}
    </section>
  );
};
