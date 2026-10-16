import React from 'react';
import { cn } from '../../lib/utils';
import { useCMS } from '../../context/CMSContext';
import { Edit3 } from 'lucide-react';

interface MarqueeProps {
  className?: string;
}

const CAPABILITIES = [
  'AI-DRIVEN SEO',
  'ANSWER ENGINE OPTIMIZATION (AEO)',
  'PAID MEDIA & PROGRAMMATIC ADS',
  'CONVERSION RATE OPTIMIZATION',
  'MARKETING AUTOMATION',
  'WEB EXPERIENCE & PLATFORM DEV',
  'B2B DIGITAL MARKETING & ABX',
  'ECOMMERCE GROWTH',
  'ANALYTICS & DATA ENGINEERING',
  'SOCIAL MEDIA GROWTH & ACTIVATION'
];

export const Marquee: React.FC<MarqueeProps> = ({ className }) => {
  const { siteContent, isAuthenticated, openEditorToTab } = useCMS();
  const clients = siteContent.clients || [];

  return (
    <div className={cn('relative w-full overflow-hidden border-y border-slate-200/90 dark:border-white/10 bg-slate-100/70 dark:bg-[#0D1017]/80 backdrop-blur-md select-none transition-colors group/marquee', className)}>
      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 dark:from-[#07080B] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 dark:from-[#07080B] to-transparent z-10" />

      {/* Client Quick Edit Badge */}
      {isAuthenticated && (
        <button
          onClick={() => openEditorToTab('clients')}
          className="absolute top-2 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-lime-500/20 text-lime-700 dark:text-[#C6FF4D] border border-lime-500/30 text-[10px] font-mono font-bold hover:bg-lime-500/30 transition-all cursor-pointer shadow-md"
        >
          <Edit3 className="w-3 h-3" />
          <span>Edit Clients</span>
        </button>
      )}

      {/* Row 1: Official Client Brand Strip */}
      <div className="py-3.5 border-b border-slate-200/60 dark:border-white/5 flex items-center overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 whitespace-nowrap">
          {clients.concat(clients).map((client, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-12">
              <span className="text-xs sm:text-sm font-mono font-extrabold tracking-[0.22em] uppercase text-slate-800 dark:text-[#F5F7FA] hover:text-lime-600 dark:hover:text-[#C6FF4D] transition-colors cursor-default flex items-center gap-2">
                <span>{client.name}</span>
                {client.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-lime-500/10 text-lime-600 dark:bg-[#C6FF4D]/15 dark:text-[#C6FF4D] font-normal tracking-normal border border-lime-500/20 dark:border-[#C6FF4D]/30">
                    {client.badge}
                  </span>
                )}
              </span>
              <span className="text-lime-600 dark:text-[#C6FF4D] font-mono text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Official Capabilities Strip in Reverse Direction */}
      <div className="py-3 flex items-center overflow-hidden bg-white/40 dark:bg-black/20">
        <div className="animate-marquee-reverse flex items-center gap-8 sm:gap-10 whitespace-nowrap">
          {CAPABILITIES.concat(CAPABILITIES).map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-10">
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.18em] text-slate-500 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-[#F5F7FA] transition-colors cursor-default">
                {item}
              </span>
              <span className="text-indigo-500 dark:text-[#8B5CF6] font-mono text-[10px]">●</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
