import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { ArrowUpRight, TrendingUp, CheckCircle, ExternalLink, X } from 'lucide-react';

const caseStudies: CaseStudy[] = [
  {
    id: 'novastream',
    client: 'Novastream Financial',
    category: 'Fintech',
    timeline: '5-Month Deployment',
    headline: '+284% Organic Search Volume, -42% Blended CAC',
    summary: 'Restructured high-stakes commercial banking queries with semantic entity graphs, displacing legacy aggregators and scaling qualified lead volume across tier-1 markets.',
    metrics: [
      { label: 'Organic Search Lift', value: '+284%', change: '5-month horizon' },
      { label: 'Customer Acquisition Cost', value: '-42%', change: 'Blended reduction' },
      { label: 'SERP Feature Dominance', value: '46', change: 'Featured Snippets & PAA' }
    ],
    architectureHighlights: [
      'Deployed programmatic JSON-LD FinancialProduct schema across 1,200 loan product pages',
      'Automated negative keyword script saving $24k/mo in unqualified consumer traffic',
      'Migrated legacy WordPress infrastructure to edge-rendered Next.js with sub-350ms TTFB'
    ]
  },
  {
    id: 'pulseware',
    client: 'Pulseware Cloud Infrastructure',
    category: 'B2B SaaS',
    timeline: '6-Month Deployment',
    headline: '$4.8M Inbound Enterprise Pipeline via AI Search Dominance',
    summary: 'Engineered authority entity clusters targeted specifically at LLM search models (SearchGPT, Google AI Overviews, Perplexity), capturing decision-maker evaluation queries.',
    metrics: [
      { label: 'Pipeline Generated', value: '$4.8M', change: 'Closed-loop attribution' },
      { label: 'AI Overview Citations', value: '78%', change: 'Target category queries' },
      { label: 'Demo Booking Velocity', value: '+165%', change: 'Inbound conversion rate' }
    ],
    architectureHighlights: [
      'Synthesized deep technical benchmarking reports establishing verified entity authority',
      'Integrated real-time CRM webhook routing delivering inbound leads to reps in < 90 seconds',
      'Rebuilt marketing site with Three.js interactive cluster diagrams increasing dwell time +210%'
    ]
  },
  {
    id: 'veloce',
    client: 'Veloce Luxury Mobility',
    category: 'E-Commerce',
    timeline: '4-Month Deployment',
    headline: '3.8x Blended ROAS & 100% Core Web Vitals Pass Rate',
    summary: 'Re-architected direct-to-consumer search campaigns with automated predictive bidding and an ultra-minimalist, high-framerate e-commerce storefront.',
    metrics: [
      { label: 'Paid Search ROAS', value: '3.8x', change: 'Up from 1.6x baseline' },
      { label: 'Mobile Conversion Rate', value: '4.2%', change: '+1.8% absolute gain' },
      { label: 'Lighthouse Performance', value: '99', change: 'Sub-400ms mobile LCP' }
    ],
    architectureHighlights: [
      'Implemented Google Ads Conversion API with server-side offline profit tracking',
      'Zero-layout-shift (CLS: 0.00) architectural redesign with instant client-side transitions',
      'Interactive 3D configurator built in WebGL driving 3x higher cart completion rates'
    ]
  }
];

export const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Fintech' | 'B2B SaaS' | 'E-Commerce'>('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeCategory);

  return (
    <section id="case-studies" className="py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#06080e] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 mb-3">
              <span>Verified Case Outcomes</span>
              <span aria-hidden="true" className="text-blue-300 dark:text-blue-700">·</span>
              <span>Enterprise Proof</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Quantified Impact & Proven Transformation
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Every engagement is measured by bottom-line revenue contributions, customer acquisition efficiency, and verified search authority.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-lg shrink-0">
            {(['All', 'Fintech', 'B2B SaaS', 'E-Commerce'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
            >
              <div>
                {/* Clean unboxed metadata with dot separators */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{study.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.timeline}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{study.client}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {study.headline}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {study.summary}
                </p>

                {/* Primary Metric Pillows */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 gap-3">
                  {study.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  {study.architectureHighlights.length} Core Deployments
                </span>
                <button
                  onClick={() => setSelectedStudy(study)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Inspect Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Deep Dive Inspector */}
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                <span className="font-semibold text-blue-600 dark:text-blue-400">{selectedStudy.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedStudy.timeline}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedStudy.client}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                {selectedStudy.headline}
              </h3>

              <p className="mt-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedStudy.summary}
              </p>

              {/* All 3 Metrics */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedStudy.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">
                      {m.label}
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500">
                      {m.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Architecture Highlights */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Deployed Architecture & Tactics
                </h4>
                <div className="space-y-2.5">
                  {selectedStudy.architectureHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
