import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { Edit3, GitCommit, RotateCcw, LogOut, CheckCircle2, Sparkles, ExternalLink, Shield, Eye } from 'lucide-react';

export const CMSAdminBar: React.FC = () => {
  const {
    isAuthenticated,
    isEditMode,
    setIsEditMode,
    toggleEditMode,
    setIsEditorDrawerOpen,
    setIsGitHubModalOpen,
    resetToDefaults,
    hasUnsavedChanges,
    logout
  } = useCMS();

  if (!isAuthenticated) return null;

  // When in Website Mode (Clean Preview Mode)
  if (!isEditMode) {
    return (
      <aside
        aria-label="CMS Administration Bar (Website Mode)"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 p-2 sm:px-4 sm:py-2.5 rounded-2xl bg-slate-900/95 dark:bg-[#0D1017]/95 backdrop-blur-2xl border border-slate-700/80 dark:border-white/15 shadow-2xl shadow-black/60 flex items-center gap-3 text-xs select-none animate-in fade-in slide-in-from-bottom-3 duration-200"
      >
        <div className="flex items-center gap-2 px-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-slate-300 font-bold text-[11px] whitespace-nowrap">
            Website Mode (Live View)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsEditMode(true);
              setIsEditorDrawerOpen(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold bg-[#C6FF4D] text-[#07080B] hover:bg-[#d8ff85] transition-all cursor-pointer whitespace-nowrap shadow-sm text-xs"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Switch to Edit Mode</span>
          </button>

          {hasUnsavedChanges && (
            <button
              onClick={() => setIsGitHubModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer whitespace-nowrap text-xs"
            >
              <GitCommit className="w-3.5 h-3.5 text-lime-400" />
              <span>Deploy</span>
            </button>
          )}

          <button
            onClick={logout}
            title="Log out of CMS"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer text-xs"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </aside>
    );
  }

  // When in Edit Mode
  return (
    <aside
      aria-label="CMS Administration Bar (Edit Mode)"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-4xl p-2 sm:p-2.5 rounded-2xl bg-slate-900/95 dark:bg-[#0D1017]/95 backdrop-blur-2xl border border-slate-700/80 dark:border-white/15 shadow-2xl shadow-black/60 flex items-center justify-between gap-2 sm:gap-4 text-xs select-none animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      {/* Left: Mode Switcher & Status */}
      <div className="flex items-center gap-2 px-1">
        <div className="flex items-center p-0.5 rounded-xl bg-slate-800/80 dark:bg-black/60 border border-slate-700 dark:border-white/10">
          <button
            onClick={() => {
              setIsEditMode(true);
              setIsEditorDrawerOpen(true);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-bold text-xs bg-[#C6FF4D] text-[#07080B] shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Mode</span>
          </button>
          <button
            onClick={() => {
              setIsEditMode(false);
              setIsEditorDrawerOpen(false);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-bold text-xs text-slate-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            title="Switch back to Website Mode"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Website Mode</span>
          </button>
        </div>

        {hasUnsavedChanges && (
          <span className="hidden lg:inline px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] border border-amber-500/30 font-mono">
            Unsaved Edits
          </span>
        )}
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
