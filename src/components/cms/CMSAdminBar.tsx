import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { Edit3, GitCommit, RotateCcw, LogOut, CheckCircle2, Sparkles, ExternalLink, Shield } from 'lucide-react';

export const CMSAdminBar: React.FC = () => {
  const {
    isAuthenticated,
    isEditMode,
    toggleEditMode,
    setIsEditorDrawerOpen,
    setIsGitHubModalOpen,
    resetToDefaults,
    hasUnsavedChanges,
    logout
  } = useCMS();

  if (!isAuthenticated) return null;

  return (
    <aside
      aria-label="CMS Administration Bar"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-4xl p-2 sm:p-2.5 rounded-2xl bg-slate-900/95 dark:bg-[#0D1017]/95 backdrop-blur-2xl border border-slate-700/80 dark:border-white/15 shadow-2xl shadow-black/60 flex items-center justify-between gap-2 sm:gap-4 text-xs select-none animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      {/* Left Status Badge */}
      <div className="flex items-center gap-2 px-2.5 py-1">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
        </span>
        <div className="hidden sm:block text-left">
          <div className="font-mono font-bold text-white uppercase text-[11px] tracking-wider flex items-center gap-1.5">
            <span>Client Live CMS</span>
            {hasUnsavedChanges && (
              <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] border border-amber-500/30 font-normal">
                Unsaved Edits
              </span>
            )}
          </div>
          <div className="text-[10px] text-slate-400 font-sans">
            Ready to push to GitHub & Vercel
          </div>
        </div>
      </div>

      {/* Middle Action Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Open Visual Section Drawer */}
        <button
          onClick={() => setIsEditorDrawerOpen(true)}
          className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl font-bold bg-[#C6FF4D] text-[#07080B] hover:bg-[#d8ff85] transition-all shadow-md cursor-pointer whitespace-nowrap"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>Edit Sections & Images</span>
        </button>

        {/* Push to GitHub & Vercel */}
        <button
          onClick={() => setIsGitHubModalOpen(true)}
          className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer whitespace-nowrap"
        >
          <GitCommit className="w-3.5 h-3.5 text-lime-400" />
          <span>Push to GitHub & Vercel</span>
        </button>

        {/* Reset to Defaults */}
        {hasUnsavedChanges && (
          <button
            onClick={() => {
              if (window.confirm('Reset all edited content and images back to default website content?')) {
                resetToDefaults();
              }
            }}
            title="Reset to Original Defaults"
            className="hidden md:flex items-center gap-1 px-2.5 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="text-[11px]">Reset</span>
          </button>
        )}
      </div>

      {/* Right User Controls */}
      <div className="flex items-center gap-1.5 border-l border-white/10 pl-2">
        <button
          onClick={logout}
          title="Log out of CMS"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer text-[11px]"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </aside>
  );
};
