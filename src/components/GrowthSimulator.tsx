import React, { useState, useId } from 'react';
import { SimulationParams } from '../types';
import { TrendingUp, ArrowRight, DollarSign, Users, Target, Calendar, Sparkles, ShieldCheck } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

interface GrowthSimulatorProps {
  onApplyProjection: (projectionSummary: string) => void;
}

export const GrowthSimulator: React.FC<GrowthSimulatorProps> = ({ onApplyProjection }) => {
  const [params, setParams] = useState<SimulationParams>({
    monthlyVisits: 35000,
    conversionRate: 1.8,
    dealValue: 1200,
    horizonMonths: 6,
  });

  const visitsId = useId();
  const conversionId = useId();
  const dealValueId = useId();

  // Calculation models
  const currentMonthlyConversions = Math.round(params.monthlyVisits * (params.conversionRate / 100));
  const currentMonthlyRevenue = currentMonthlyConversions * params.dealValue;

  const trafficMultiplier = params.horizonMonths === 3 ? 1.6 : params.horizonMonths === 6 ? 2.4 : 3.8;
  const croMultiplier = params.horizonMonths === 3 ? 1.3 : params.horizonMonths === 6 ? 1.55 : 1.9;

  const projectedMonthlyVisits = Math.round(params.monthlyVisits * trafficMultiplier);
  const projectedConversionRate = Number((params.conversionRate * croMultiplier).toFixed(2));
  const projectedMonthlyConversions = Math.round(projectedMonthlyVisits * (projectedConversionRate / 100));
  const projectedMonthlyRevenue = projectedMonthlyConversions * params.dealValue;

  const incrementalMonthlyRevenue = projectedMonthlyRevenue - currentMonthlyRevenue;
  const cacReductionPercent = params.horizonMonths === 3 ? 24 : params.horizonMonths === 6 ? 38 : 52;
  const totalHorizonNetGain = incrementalMonthlyRevenue * (params.horizonMonths * 0.75);

  const handleApply = () => {
    const summary = `${params.horizonMonths}M Horizon: ${params.monthlyVisits.toLocaleString()} visits -> ${projectedMonthlyVisits.toLocaleString()} visits ($${incrementalMonthlyRevenue.toLocaleString()}/mo incremental revenue projected)`;
    onApplyProjection(summary);
  };

  return (
    <section id="growth-simulator" className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-[#07080B] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 // SIMULATOR</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
            <span>DETERMINISTIC FORECASTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.12]">
            Search Pipeline & Revenue ROI Simulator
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
            Adjust your current digital search and conversion baseline to forecast projected pipeline velocity, traffic multiples, and net incremental revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-5 p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11151D] shadow-xl space-y-6 sm:space-y-7">
            <h3 className="text-lg font-bold text-slate-900 dark:text-[#F5F7FA] flex items-center gap-2">
              <Target className="w-5 h-5 text-lime-600 dark:text-[#C6FF4D]" />
              <span>Current Performance Baseline</span>
            </h3>

            {/* Slider 1: Monthly Traffic */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor={visitsId} className="font-semibold text-slate-700 dark:text-[#F5F7FA]">
                  Monthly Search Visits
                </label>
                <span className="font-mono font-bold text-slate-900 dark:text-[#C6FF4D] tabular-nums px-2 py-0.5 rounded bg-slate-100 dark:bg-[#07080B] border border-slate-200 dark:border-white/10">
                  {params.monthlyVisits.toLocaleString()}
                </span>
              </div>
              <input
                id={visitsId}
                type="range"
                min={5000}
                max={250000}
                step={5000}
                value={params.monthlyVisits}
                onChange={(e) => setParams({ ...params, monthlyVisits: Number(e.target.value) })}
                className="w-full accent-lime-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 dark:text-[#9CA3AF] font-mono">
                <span>5,000</span>
                <span>250,000+</span>
              </div>
            </div>

            {/* Slider 2: Conversion Rate */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor={conversionId} className="font-semibold text-slate-700 dark:text-[#F5F7FA]">
                  Current Conversion Rate
                </label>
                <span className="font-mono font-bold text-slate-900 dark:text-[#C6FF4D] tabular-nums px-2 py-0.5 rounded bg-slate-100 dark:bg-[#07080B] border border-slate-200 dark:border-white/10">
                  {params.conversionRate.toFixed(1)}%
                </span>
              </div>
              <input
                id={conversionId}
                type="range"
                min={0.5}
                max={5.0}
                step={0.1}
                value={params.conversionRate}
                onChange={(e) => setParams({ ...params, conversionRate: Number(e.target.value) })}
                className="w-full accent-lime-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 dark:text-[#9CA3AF] font-mono">
                <span>0.5%</span>
                <span>5.0%</span>
              </div>
            </div>

            {/* Slider 3: Deal Value */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <label htmlFor={dealValueId} className="font-semibold text-slate-700 dark:text-[#F5F7FA]">
                  Avg. Deal Size / Contract Value
                </label>
                <span className="font-mono font-bold text-slate-900 dark:text-[#C6FF4D] tabular-nums px-2 py-0.5 rounded bg-slate-100 dark:bg-[#07080B] border border-slate-200 dark:border-white/10">
                  ${params.dealValue.toLocaleString()}
                </span>
              </div>
              <input
                id={dealValueId}
                type="range"
                min={100}
                max={10000}
                step={100}
                value={params.dealValue}
                onChange={(e) => setParams({ ...params, dealValue: Number(e.target.value) })}
                className="w-full accent-lime-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 dark:text-[#9CA3AF] font-mono">
                <span>$100</span>
                <span>$10,000+</span>
              </div>
            </div>

            {/* Target Horizon Segmented Tabs */}
            <div className="pt-2">
              <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-2">
                Optimization Horizon
              </label>
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-100 dark:bg-[#0D1017] rounded-2xl border border-slate-200 dark:border-white/10">
                {[3, 6, 12].map((months) => (
                  <button
                    key={months}
                    onClick={() => setParams({ ...params, horizonMonths: months })}
                    className={`py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                      params.horizonMonths === months
                        ? 'bg-[#C6FF4D] text-[#07080B] shadow-sm font-extrabold'
                        : 'text-slate-600 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {months} Months
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Projection Card */}
          <div className="lg:col-span-7 p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11151D] shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-white/10 pb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-[#9CA3AF]">
                    ASearch Online Model Output
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
                    Projected Pipeline Impact ({params.horizonMonths}M)
                  </h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D]">
                  {trafficMultiplier}x Traffic Multiple
                </div>
              </div>

              {/* Big Stat Hero Callout */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono uppercase text-slate-500 dark:text-[#9CA3AF]">
                    Projected Incremental Monthly ARR
                  </div>
                  <div className="text-3xl sm:text-4xl font-mono font-extrabold text-lime-600 dark:text-[#C6FF4D] mt-1">
                    +${incrementalMonthlyRevenue.toLocaleString()}
                    <span className="text-sm font-sans font-normal text-slate-500 dark:text-[#9CA3AF]">/mo</span>
                  </div>
                </div>
                <div className="text-left sm:text-right border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-white/10 pt-3 sm:pt-0 sm:pl-6">
                  <div className="text-xs font-mono uppercase text-slate-500 dark:text-[#9CA3AF]">
                    Est. Horizon Cumulative Run-Rate
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-slate-900 dark:text-[#F5F7FA] mt-0.5">
                    +${Math.round(totalHorizonNetGain).toLocaleString()}
                  </div>
                </div>
              </div>

              {/* 3 Metric Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200/80 dark:border-white/5">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-[#9CA3AF] uppercase">
                    Scaled Monthly Traffic
                  </div>
                  <div className="text-lg font-mono font-bold text-slate-900 dark:text-[#F5F7FA] mt-1">
                    {projectedMonthlyVisits.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-lime-600 dark:text-[#C6FF4D] mt-0.5 font-mono">
                    +{Math.round((trafficMultiplier - 1) * 100)}% Organic Growth
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200/80 dark:border-white/5">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-[#9CA3AF] uppercase">
                    Optimized Conversion Rate
                  </div>
                  <div className="text-lg font-mono font-bold text-slate-900 dark:text-[#F5F7FA] mt-1">
                    {projectedConversionRate}%
                  </div>
                  <div className="text-[11px] text-lime-600 dark:text-[#C6FF4D] mt-0.5 font-mono">
                    +{Math.round((croMultiplier - 1) * 100)}% CRO Uplift
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0D1017] border border-slate-200/80 dark:border-white/5">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-[#9CA3AF] uppercase">
                    Blended CAC Efficiency
                  </div>
                  <div className="text-lg font-mono font-bold text-slate-900 dark:text-[#F5F7FA] mt-1">
                    -{cacReductionPercent}%
                  </div>
                  <div className="text-[11px] text-lime-600 dark:text-[#C6FF4D] mt-0.5 font-mono">
                    Direct Search Equity
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-[#9CA3AF]">
                Ready to review the underlying channel architecture?
              </span>
              <MagneticButton
                onClick={handleApply}
                variant="primary"
                className="text-xs uppercase tracking-wider py-2.5 px-6 font-extrabold"
              >
                <span>Lock in Growth Model</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
