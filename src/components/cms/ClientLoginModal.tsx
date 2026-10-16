import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import { Lock, X, CheckCircle2, Shield, ArrowRight, KeyRound, Sparkles } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const ClientLoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, login, isAuthenticated } = useCMS();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (success) {
      setIsLoginModalOpen(false);
    } else {
      setError('Invalid credentials. Please verify your email and password.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 dark:bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-white dark:bg-[#0D1017] rounded-3xl border border-slate-200 dark:border-white/15 shadow-2xl p-6 sm:p-8 text-left">
        <button
          onClick={() => setIsLoginModalOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-lime-500/15 border border-lime-500/30 flex items-center justify-center text-lime-600 dark:text-[#C6FF4D]">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
              Client & Admin Portal
            </h3>
            <p className="text-xs text-slate-500 dark:text-[#9CA3AF]">
              Log in to edit content, images & deploy to Vercel
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-xs text-rose-600 dark:text-rose-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1.5">
              Client Administrator Email
            </label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1.5">
              Portal Passcode / Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 font-mono"
            />
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/5 text-[11px] text-slate-500 dark:text-[#9CA3AF] space-y-1 font-mono">
            <div className="flex items-center gap-1.5 text-lime-600 dark:text-[#C6FF4D] font-bold">
              <Shield className="w-3.5 h-3.5" />
              <span>Client Privileges Included:</span>
            </div>
            <div>• Real-time inline editing for all sections & images</div>
            <div>• Direct GitHub commit & automatic Vercel live deploy</div>
          </div>

          <div className="pt-2">
            <MagneticButton
              type="submit"
              variant="primary"
              className="w-full py-3 text-xs uppercase tracking-wider font-extrabold cursor-pointer"
            >
              <span>Authenticate & Enter CMS</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </form>
      </div>
    </div>
  );
};
