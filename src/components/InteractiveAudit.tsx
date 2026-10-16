import React, { useState } from 'react';
import { AuditPillar } from '../types';
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  RefreshCw,
  Copy,
  Check,
  Bot,
  Globe,
  Zap,
  Code2,
  Cpu
} from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

interface InteractiveAuditProps {
  onRequestAuditReview: (domain: string, score: number) => void;
}

interface AEOMetric {
  platform: string;
  score: number;
  readiness: 'High Citation' | 'Moderate Citation' | 'Critical Optimization';
  description: string;
  insight: string;
}

export const InteractiveAudit: React.FC<InteractiveAuditProps> = ({ onRequestAuditReview }) => {
  const [activeTab, setActiveTab] = useState<'aeo' | 'seo'>('aeo');
  const [domain, setDomain] = useState('example.com');
  const [targetFocus, setTargetFocus] = useState('ai-answer-engine');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanComplete, setScanComplete] = useState(true);
  const [copiedSchema, setCopiedSchema] = useState(false);

  const presetDomains = [
    { label: 'Microsoft', url: 'microsoft.com' },
    { label: 'Fortis Healthcare', url: 'fortishealthcare.com' },
    { label: 'Yatra Travel', url: 'yatra.com' },
    { label: 'FinTech App', url: 'paywise.io' }
  ];

  const scanSteps = [
    'Crawling semantic entities & Schema.org JSON-LD nodes...',
    'Evaluating SearchGPT & Perplexity AI citation likelihood...',
    'Profiling Google AI Overviews & Gemini extractability...',
    'Benchmarking Core Web Vitals (LCP, INP, CLS) & crawl budget...',
    'Synthesizing Answer Engine Optimization (AEO) roadmap...'
  ];

  const aeoMetrics: AEOMetric[] = [
    {
      platform: 'Perplexity AI Engine',
      score: 88,
      readiness: 'High Citation',
      description: 'Fact-extraction consistency & source citation index across informational query spaces.',
      insight: 'High entity disambiguation index. Entity graph provides concise factual consensus signals.'
    },
    {
      platform: 'Google AI Overviews & Gemini SGE',
      score: 82,
      readiness: 'High Citation',
      description: 'Eligibility for AI Snapshot placement above standard blue organic links.',
      insight: 'Strong authoritativeness (E-E-A-T). Recommend adding explicit Definition blocks under H2 tags.'
    },
    {
      platform: 'SearchGPT & ChatGPT Search',
      score: 79,
      readiness: 'Moderate Citation',
      description: 'Markdown structure clarity, crawl accessibility via OAI-SearchBot, and citation relevance.',
      insight: 'Ensure robots.txt explicitly allows OAI-SearchBot and PerplexityBot without rate-limit throttling.'
    },
    {
      platform: 'Claude & Knowledge Graph Density',
      score: 85,
      readiness: 'High Citation',
      description: 'Multi-hop entity relationships and Wikidata/Wikipedia disambiguation coverage.',
      insight: 'Clean nested Schema.org Organization and Product models ensure unambiguous entity recognition.'
    }
  ];

  const seoPillars: AuditPillar[] = [
    {
      id: 'llm-entity',
      title: 'AEO Entity Knowledge Graph (Schema.org)',
      score: 84,
      status: 'optimal',
      details: 'Evaluates structured JSON-LD entity graph coverage and explicit Wikidata disambiguation nodes for LLMs.',
      recommendation: 'Deploy unified Schema.org/ProfessionalService with nested FAQPage and Service catalogs.'
    },
    {
      id: 'web-vitals',
      title: 'Core Web Vitals & Mobile INP Latency',
      score: 74,
      status: 'warning',
      details: 'Interaction to Next Paint (INP) must stay under 200ms to preserve organic ranking equity in Google algorithms.',
      recommendation: 'Offload third-party tracking scripts to Web Workers; leverage Next.js edge stream caching.'
    },
    {
      id: 'content-direct',
      title: 'Direct Answer Extractability (AEO Snipability)',
      score: 91,
      status: 'optimal',
      details: 'Measures how cleanly AI models and voice assistants can extract 40-to-60-word answers directly from content.',
      recommendation: 'Maintain lead sentence answers followed by structured bullet points in all informational hubs.'
    },
    {
      id: 'crawl-canonical',
      title: 'Crawl Budget & Canonical URL Consolidation',
      score: 78,
      status: 'warning',
      details: 'Search bot crawler path efficiency, sitemap partitioning, and prevention of duplicate faceted URL dilution.',
      recommendation: 'Consolidate canonical headers and configure XML sitemaps partitioned by business priority.'
    }
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
          setIsScanning(false);
          setScanComplete(true);
          return prev;
        }
      });
    }, 500);
  };

  const handleCopySchema = () => {
    const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '') || 'yourbrand.com';
    const schemaCode = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://${cleanDomain}/#organization",
      "name": "${cleanDomain.split('.')[0].toUpperCase()}",
      "url": "https://${cleanDomain}/",
      "sameAs": [
        "https://www.wikidata.org/wiki/Special:EntityData",
        "https://www.linkedin.com/company/${cleanDomain.split('.')[0]}"
      ],
      "knowsAbout": [
        "Search Engine Optimization",
        "Answer Engine Optimization",
        "AI Search Retrieval"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://${cleanDomain}/#website",
      "url": "https://${cleanDomain}/",
      "name": "${cleanDomain.split('.')[0].toUpperCase()}",
      "publisher": { "@id": "https://${cleanDomain}/#organization" }
    }
  ]
}`;
    navigator.clipboard.writeText(schemaCode);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2200);
  };

  return (
    <section id="insights" className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#07080B] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] mb-3 shadow-xs">
            <Bot className="w-3.5 h-3.5" />
            <span>08 // INTELLIGENCE LAB</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
            <span>SEO & AEO READY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.12]">
            SEO & Answer Engine Optimization (AEO) Diagnostic Lab
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
            Search is no longer just ten blue links. We benchmark your digital presence for both organic Google algorithms and generative AI answer engines—including SearchGPT, Perplexity AI, Google AI Overviews, and Gemini.
          </p>
        </div>

        {/* Feature Container Card */}
        <div className="p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11151D] shadow-xl max-w-5xl mx-auto text-left space-y-7">
          {/* Dual Category Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/10">
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-[#0D1017] rounded-2xl border border-slate-200 dark:border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab('aeo')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'aeo'
                    ? 'bg-[#C6FF4D] text-[#07080B] shadow-sm'
                    : 'text-slate-600 dark:text-[#9CA3AF] hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>AEO & AI Search Readiness</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('seo')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'seo'
                    ? 'bg-[#C6FF4D] text-[#07080B] shadow-sm'
                    : 'text-slate-600 dark:text-[#9CA3AF] hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>Technical & Organic SEO</span>
              </button>
            </div>

            {/* Quick Test Presets */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-mono text-slate-400 dark:text-[#9CA3AF] mr-1">Presets:</span>
              {presetDomains.map((preset) => (
                <button
                  key={preset.url}
                  type="button"
                  onClick={() => setDomain(preset.url)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                    domain === preset.url
                      ? 'bg-lime-500/15 border-lime-500/40 text-lime-700 dark:text-[#C6FF4D]'
                      : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-[#9CA3AF] hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Scan Form */}
          <form onSubmit={handleStartScan} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
              <div className="md:col-span-7">
                <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1.5">
                  Target Domain or URL to Profile
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. yourcompany.com"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 font-mono"
                  />
                  <Globe className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="md:col-span-5">
                <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1.5">
                  Primary Evaluation Focus
                </label>
                <select
                  value={targetFocus}
                  onChange={(e) => setTargetFocus(e.target.value)}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 cursor-pointer"
                >
                  <option value="ai-answer-engine">AEO: SearchGPT & Perplexity Citations</option>
                  <option value="google-sge">AEO: Google AI Overviews & Gemini SGE</option>
                  <option value="schema-graph">SEO: Semantic Entity Schema.org Graph</option>
                  <option value="web-vitals">SEO: INP & Core Web Vitals Latency</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <span className="text-xs text-slate-500 dark:text-[#9CA3AF] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-lime-600 dark:text-[#C6FF4D]" />
                <span>Non-invasive passive entity analysis. Checks real-time knowledge graph vectors.</span>
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
                    <span>Analyzing Entities & LLM Vectors...</span>
                  </>
                ) : (
                  <>
                    <span>Run SEO & AEO Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </MagneticButton>
            </div>
          </form>

          {/* Scanning Progress Bar */}
          {isScanning && (
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-[#9CA3AF]">
                <span>{scanSteps[scanStep]}</span>
                <span>{Math.round(((scanStep + 1) / scanSteps.length) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-lime-500 dark:bg-[#C6FF4D] transition-all duration-400 ease-out"
                  style={{ width: `${((scanStep + 1) / scanSteps.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Results View */}
          {scanComplete && (
            <div className="pt-4 border-t border-slate-100 dark:border-white/10 space-y-6">
              {/* Scorecard Header */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-lime-600 dark:text-[#C6FF4D] font-bold">
                    <span>LIVE AUDIT FOR // {domain}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-[#F5F7FA] mt-0.5">
                    {activeTab === 'aeo' ? 'Answer Engine Optimization (AEO) Index' : 'Technical & Semantic SEO Score'}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-[#9CA3AF] mt-1 max-w-lg">
                    {activeTab === 'aeo'
                      ? 'High probability of inclusion in Google AI Overviews, SearchGPT, and Perplexity citation syntheses.'
                      : 'Robust crawlability with opportunities to eliminate Core Web Vitals latency and canonical ambiguity.'}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-mono font-extrabold text-lime-600 dark:text-[#C6FF4D] tabular-nums">
                      {activeTab === 'aeo' ? '86/100' : '82/100'}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-[#9CA3AF] uppercase">
                      Top 8% Benchmark
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 1 Content: AEO Platform Breakdown */}
              {activeTab === 'aeo' ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aeoMetrics.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200/90 dark:border-white/5 space-y-2.5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-bold text-sm text-slate-900 dark:text-[#F5F7FA]">
                            {item.platform}
                          </span>
                          <span className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D] px-2 py-0.5 rounded bg-lime-500/10 dark:bg-[#C6FF4D]/10 border border-lime-500/20 dark:border-[#C6FF4D]/25">
                            {item.score}/100
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                          {item.description}
                        </p>
                        <div className="text-[11px] font-mono text-slate-700 dark:text-slate-300 pt-1 border-t border-slate-200/60 dark:border-white/5 flex items-start gap-1.5">
                          <span className="text-lime-600 dark:text-[#C6FF4D] font-bold">✦</span>
                          <span>{item.insight}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive AEO JSON-LD Schema Generator & Exporter */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-lime-400" />
                        <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                          Generated Schema.org JSON-LD Knowledge Graph for {domain}
                        </h5>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopySchema}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-lime-400 border border-lime-400/30 transition-all cursor-pointer"
                      >
                        {copiedSchema ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-lime-400" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy AEO Schema</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-[11px] font-mono bg-black/60 p-4 rounded-xl text-slate-300 overflow-x-auto leading-relaxed max-h-44">
{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://${domain.replace(/^https?:\/\//, '')}/#organization",
      "name": "${domain.replace(/^https?:\/\//, '').split('.')[0].toUpperCase()}",
      "url": "https://${domain.replace(/^https?:\/\//, '')}/",
      "sameAs": ["https://www.wikidata.org/wiki/Special:EntityData"],
      "knowsAbout": ["Artificial Intelligence", "Answer Engine Optimization", "Entity Modeling"]
    }
  ]
}`}
                    </pre>
                    <p className="text-[11px] text-slate-400">
                      Inject this structured data graph into your document <code className="text-lime-300">&lt;head&gt;</code> to maximize AI citation retrieval.
                    </p>
                  </div>
                </div>
              ) : (
                /* Tab 2 Content: SEO & Core Web Vitals Breakdown */
                <div className="space-y-3">
                  {seoPillars.map((pillar) => (
                    <div
                      key={pillar.id}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200/90 dark:border-white/5 text-xs space-y-2"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          {pillar.status === 'optimal' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                          )}
                          <span className="font-bold text-slate-900 dark:text-[#F5F7FA] text-sm">
                            {pillar.title}
                          </span>
                        </div>
                        <span className="font-mono font-bold text-slate-800 dark:text-[#C6FF4D] tabular-nums px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                          {pillar.score}/100
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-[#9CA3AF] pl-6 leading-relaxed">
                        {pillar.details}
                      </p>
                      <div className="pl-6 pt-1 text-lime-600 dark:text-[#C6FF4D] font-medium font-mono text-[11px] flex items-center gap-1.5">
                        <span className="font-bold">Recommendation:</span>
                        <span>{pillar.recommendation}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Consultation Intake CTA */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-100/70 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-[#F5F7FA]">
                    Ready to deploy an enterprise SEO & AEO roadmap for {domain}?
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-[#9CA3AF] mt-0.5">
                    Our senior search architects will conduct a complete entity audit and present tailored recommendations for SearchGPT and Google.
                  </p>
                </div>
                <MagneticButton
                  onClick={() => onRequestAuditReview(domain, activeTab === 'aeo' ? 86 : 82)}
                  variant="primary"
                  className="text-xs uppercase tracking-wider py-2.5 px-6 font-extrabold"
                >
                  <span>Book Architecture Review</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
