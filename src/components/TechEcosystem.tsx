import React from 'react';
import { TECH_ECOSYSTEM } from '../data/siteData';
import { Layers, Cpu, ShieldCheck } from 'lucide-react';

export const TechEcosystem: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-200/90 dark:border-white/10 bg-slate-100/60 dark:bg-[#0D1017] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-lime-600 dark:text-[#C6FF4D] mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>09 // ECOSYSTEM</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
            <span>ENTERPRISE TOOLING</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
            Integrated With The World's Leading Marketing & Engineering Stacks
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF]">
            We deploy battle-tested frameworks to guarantee maximum uptime, sub-second speed, and seamless automated revenue reconciliation.
          </p>
        </div>

        {/* Integration Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {TECH_ECOSYSTEM.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-2xl bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 shadow-xs flex flex-col items-center justify-center text-center transition-all hover:border-lime-500 dark:hover:border-[#C6FF4D]/40 hover:scale-[1.02]"
            >
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#F5F7FA]">
                {tech.name}
              </span>
              <span className="text-[11px] font-medium text-lime-600 dark:text-[#C6FF4D] mt-1 font-mono">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
