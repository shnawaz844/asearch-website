import React from 'react';
import { BentoCard } from './ui/BentoCard';
import { Target, Zap, Cpu, BarChart2, CheckCircle2, ShieldCheck, Sparkles, Scale, RefreshCw, LineChart } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Target,
    title: 'Strategy Before Execution',
    description: 'We do not rush into burning budget on ad clicks. Every campaign is preceded by exhaustive keyword intent modeling, schema entity structuring, and audience unit economics.'
  },
  {
    icon: BarChart2,
    title: 'Creativity Backed by Data',
    description: 'Award-winning visual aesthetics married to deterministic revenue analytics. We design sub-second experiences that convert high-value buyers, not just win design praise.'
  },
  {
    icon: ShieldCheck,
    title: 'Zero Retainer Lock-in',
    description: 'We earn our seat at your executive table every 30 days. Transparent performance dashboards, live Slack communication, and shared commercial accountability.'
  },
  {
    icon: Zap,
    title: 'Software-Grade Web Performance',
    description: 'We build with modern Next.js edge-rendering, sub-400ms server response times, and zero layout shift, ensuring every click is met with instant page fidelity.'
  },
  {
    icon: RefreshCw,
    title: 'Continuous Experimentation',
    description: 'Bi-weekly multivariate hypothesis testing across landing pages, ad hooks, and email lifecycle triggers so performance compounds month after month.'
  },
  {
    icon: LineChart,
    title: 'Long-Term Compound Growth',
    description: 'We turn paid and organic search traffic into an enduring enterprise asset that appreciates in value over time, lowering blended CAC and insulating against platform algorithm volatility.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-100/60 dark:bg-[#0D1017] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] mb-3 shadow-xs">
            <span>04 // ADVANTAGE</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
            <span>WHY ASEARCH ONLINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.12]">
            Built for Ambitious Category Leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
            We are not a traditional marketing vendor. We are an embedded engineering and performance growth partner.
          </p>
        </div>

        {/* 6 Advantages Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <BentoCard
                key={i}
                className="p-8"
                glowColor={i % 2 === 0 ? 'rgba(198, 255, 77, 0.12)' : 'rgba(139, 92, 246, 0.12)'}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 flex items-center justify-center text-lime-600 dark:text-[#C6FF4D] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-[#F5F7FA] group-hover:text-lime-600 dark:group-hover:text-[#C6FF4D] transition-colors">
                    {adv.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-xs text-lime-600 dark:text-[#C6FF4D] font-mono">
                  <span>✦ PRINCIPLE 0{i + 1}</span>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
