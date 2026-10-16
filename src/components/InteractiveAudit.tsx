import React, { useState } from 'react';
import { AuditPillar } from '../types';
import { Search, Activity, CheckCircle, AlertTriangle, ArrowRight, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

interface InteractiveAuditProps {
  onRequestAuditReview: (domain: string, score: number) => void;
}

export const InteractiveAudit: React.FC<InteractiveAuditProps> = ({ onRequestAuditReview }) => {
  const [domain, setDomain] = useState('');
  const [bottleneck, setBottleneck] = useState('ai-citation');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  const [pillars, setPillars] = useState<AuditPillar[]>([]);
  const [overallScore, setOverallScore] = useState(0);

  const scanSteps = [
    'Crawling semantic entities & schema markup...',
    'Analyzing Google SGE & SearchGPT citation likelihood...',
    'Profiling Core Web Vitals & hydration delay...',
    'Evaluating paid search negative match coverage...',
    'Generating 90-day search architecture roadmap...'
  ];

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;

    setIsScanning(true);
    setScanComplete(false);
    setScanStep(0);

    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev < scanSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          finishScan();
          return prev;
        }
      });
    }, 600);
  };

  const finishScan = () => {
    const results: AuditPillar[] = [
      {
        id: 'llm-entity',
        title: 'LLM Entity & AI Search Citations',
        score: bottleneck === 'ai-citation' ? 54 : 78,
        status: bottleneck === 'ai-citation' ? 'warning' : 'optimal',
        details: 'Entity relationships lack deep JSON-LD Knowledge Graph nodes. Missing structured entity hooks for SearchGPT and Gemini extraction.',
        recommendation: 'Deploy programmatic Schema.org/Dataset graph with explicit Wikipedia/Wikidata disambiguation nodes.'
      },
      {
        id: 'web-vitals',
        title: 'Core Web Vitals & INP Latency',
        score: 64,
        status: 'warning',
        details: 'Interaction to Next Paint (INP) exceeds 240ms on mobile product templates due to heavy third-party script hydration.',
        recommendation: 'Offload non-critical telemetry to Web Workers; transition to modern Next.js edge stream rendering.'
      },
      {
        id: 'paid-waste',
        title: 'Paid Search Negative Filter Efficiency',
        score: bottleneck === 'paid-cac' ? 48 : 72,
        status: bottleneck === 'paid-cac' ? 'critical' : 'warning',
        details: 'Broad match query expansion without automated real-time negative keyword scrapers is draining ~28% of current PPC budget.',
        recommendation: 'Implement ASearch algorithmic negative keyword automation to block zero-intent search variants.'
      },
      {
        id: 'intent-funnel',
        title: 'Conversion Funnel Friction',
        score: 82,
        status: 'optimal',
        details: 'Primary value proposition is clear, but form submission requires 6 unnecessary fields before discovery booking.',
        recommendation: 'Implement 2-stage progressive profiling with sub-2-minute automated scheduling.'
      },
      {
        id: 'crawl-budget',
        title: 'Crawl Budget & Index Coverage',
        score: 69,
        status: 'warning',
        details: 'Approximately 34% of indexed URLs return soft 404s or parameter duplicates, diluting search engine crawler focus.',
        recommendation: 'Consolidate canonical directives and implement dynamic XML sitemaps partitioned by page priority.'
      }
    ];

    const avg = Math.round(results.reduce((acc, p) => acc + p.score, 0) / results.length);
    setPillars(results);
    setOverallScore(avg);
    setIsScanning(false);
    setScanComplete(true);
  };

  return (
    <section id="insights" className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#07080B] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 // DIAGNOSTIC SCANNER</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
            <span>TECHNICAL HEALTH CHECK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.12]">
            Search Architecture & Velocity Scanner
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
            Run an instant diagnostic assessment of your website to uncover indexing bottlenecks, Core Web Vitals friction, and AI search readiness.
          </p>
        </div>

        {/* Input Form */}
        <div className="p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11151D] shadow-xl max-w-4xl mx-auto">
          <form onSubmit={handleStartScan} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-7">
                <label className="block text-xs font-medium text-slate-700 dark:text-[#F5F7FA] mb-1.5">
                  Target Domain or Applet URL
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="example.com or yourcompany.io"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 font-mono"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="md:col-span-5">
                <label className="block text-xs font-medium text-slate-700 dark:text-[#F5F7FA] mb-1.5">
                  Primary Growth Bottleneck
                </label>
                <select
                  value={bottleneck}
                  onChange={(e) => setBottleneck(e.target.value)}
                  className="w-full px-3 py-3 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                >
                  <option value="ai-citation">AI Search & LLM Citations</option>
                  <option value="paid-cac">High CAC & Wasted Ad Spend</option>
                  <option value="seo-ranking">Organic Search Stagnation</option>
                  <option value="web-performance">Slow Page Experience / INP</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-500 dark:text-[#9CA3AF]">
                Non-invasive passive diagnostic analysis. Zero code injection required.
              </span>
              <MagneticButton
                type="submit"
                disabled={isScanning || !domain.trim()}
                variant="primary"
                className="text-xs uppercase tracking-wider py-2.5 px-6 font-extrabold"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Analyzing Infrastructure...</span>
                  </>
                ) : (
                  <>
                    <span>Run Diagnostic Scan</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </MagneticButton>
            </div>
          </form>

          {/* Scanning Progress State */}
          {isScanning && (
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-[#9CA3AF]">
                <span>{scanSteps[scanStep]}</span>
                <span>{Math.round(((scanStep + 1) / scanSteps.length) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-lime-500 dark:bg-[#C6FF4D] transition-all duration-500 ease-out"
                  style={{ width: `${((scanStep + 1) / scanSteps.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Scan Results View */}
          {scanComplete && (
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 space-y-6">
              {/* Score Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10">
                <div>
                  <span className="text-xs font-mono uppercase text-slate-500 dark:text-[#9CA3AF]">
                    DIAGNOSTIC SCORECARD FOR {domain}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-[#F5F7FA] mt-0.5">
                    Search Readiness Index
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-extrabold text-lime-600 dark:text-[#C6FF4D] font-mono tabular-nums">
                    {overallScore}/100
                  </div>
                  <div className="text-xs text-slate-500 dark:text-[#9CA3AF] max-w-[130px]">
                    Moderate Optimization Potential
                  </div>
                </div>
              </div>

              {/* Pillars Breakdown */}
              <div className="space-y-3">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.id}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200/80 dark:border-white/5 text-xs space-y-2"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        {pillar.status === 'optimal' ? (
                          <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                        )}
                        <span className="font-bold text-slate-900 dark:text-[#F5F7FA] text-sm">
                          {pillar.title}
                        </span>
                      </div>
                      <span className="font-mono font-semibold text-slate-700 dark:text-[#C6FF4D] tabular-nums">
                        {pillar.score}/100
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-[#9CA3AF] pl-6 leading-relaxed">
                      {pillar.details}
                    </p>
                    <div className="pl-6 pt-1 text-lime-600 dark:text-[#C6FF4D] font-medium font-mono text-[11px]">
                      Recommendation: {pillar.recommendation}
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultation CTA */}
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-[#F5F7FA]">
                    Need a dedicated engineering overhaul for {domain}?
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-[#9CA3AF] mt-0.5">
                    Our technical strategists will review this scan with your engineering team.
                  </p>
                </div>
                <MagneticButton
                  onClick={() => onRequestAuditReview(domain, overallScore)}
                  variant="primary"
                  className="text-xs uppercase tracking-wider py-2 px-5 font-bold"
                >
                  Review Audit With Strategist
                </MagneticButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
