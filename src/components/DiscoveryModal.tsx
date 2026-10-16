import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Mail, Globe, User, Phone, Briefcase } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledNotes?: string;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({
  isOpen,
  onClose,
  prefilledNotes = ''
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [domain, setDomain] = useState('');
  const [objective, setObjective] = useState('full-growth');
  const [monthlyBudget, setMonthlyBudget] = useState('$5k - $15k/mo');
  const [notes, setNotes] = useState(prefilledNotes);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledNotes) {
      setNotes(prefilledNotes);
    }
  }, [prefilledNotes]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please provide a valid work email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 dark:bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0D1017] rounded-3xl border border-slate-200 dark:border-white/15 shadow-2xl p-6 sm:p-9 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-[#C6FF4D]/20 border border-[#C6FF4D]/40 rounded-full flex items-center justify-center text-lime-600 dark:text-[#C6FF4D] mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
              Discovery Session Requested
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900 dark:text-white">{name}</span>. An ASearch senior growth architect will review your domain (<span className="font-mono text-lime-600 dark:text-[#C6FF4D]">{domain || 'provided URL'}</span>) and follow up at <span className="font-semibold text-slate-900 dark:text-white">{email}</span> within 2 business hours.
            </p>
            <div className="pt-4">
              <MagneticButton
                onClick={handleReset}
                variant="primary"
                className="text-xs uppercase tracking-wider py-2.5 px-6 font-extrabold"
              >
                Back to Website
              </MagneticButton>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-left">
              <div className="flex items-center justify-between mb-4 pr-8">
                <img
                  src="https://asearchonline.com/wp-content/uploads/2026/02/asearchLOGO.png"
                  alt="ASearch Online"
                  className="h-7 sm:h-8 w-auto max-w-[170px] object-contain"
                />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-lime-500/10 text-lime-600 dark:bg-[#C6FF4D]/15 dark:text-[#C6FF4D] border border-lime-500/20 dark:border-[#C6FF4D]/30">
                  Strategic Consultation
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
                Book Architecture Discovery Call
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] mt-1">
                Meet with our engineering leadership to audit your search pipeline, CAC models, and digital infrastructure.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-xs text-rose-600 dark:text-rose-400">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                    Company Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Acme Technologies"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />
                    <Briefcase className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                    Website URL *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="company.com"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 font-mono"
                    />
                    <Globe className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                  >
                    <option value="full-growth">Full Ecosystem Overhaul (SEO + Paid + Web)</option>
                    <option value="ai-seo">AI Search & Entity SEO Optimization</option>
                    <option value="paid-performance">Predictive Paid PPC & Bid Automation</option>
                    <option value="web-engineering">Next.js Web Engineering & CRO</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                    Target Monthly Growth Budget
                  </label>
                  <select
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                  >
                    <option value="$3k - $5k/mo">$3k - $5k / mo</option>
                    <option value="$5k - $15k/mo">$5k - $15k / mo</option>
                    <option value="$15k - $50k/mo">$15k - $50k / mo</option>
                    <option value="$50k+/mo">$50k+ / mo (Enterprise Scale)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-[#9CA3AF] mb-1">
                  Project Context / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your current search bottlenecks or target KPIs..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-[#9CA3AF]">
                  <ShieldCheck className="w-3.5 h-3.5 text-lime-600 dark:text-[#C6FF4D]" />
                  <span>Strict NDA Protected & Zero Spam Guarantee</span>
                </span>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="text-xs uppercase tracking-wider py-2.5 px-6 font-extrabold"
                >
                  {isSubmitting ? (
                    <span>Scheduling Session...</span>
                  ) : (
                    <>
                      <span>Confirm Discovery Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </MagneticButton>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
