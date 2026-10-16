import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import {
  X,
  GitCommit,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Download,
  Key,
  ExternalLink,
  RefreshCw,
  Eye,
  EyeOff,
  Code2,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const GitHubDeployModal: React.FC = () => {
  const {
    isGitHubModalOpen,
    setIsGitHubModalOpen,
    githubConfig,
    updateGitHubConfig,
    generateSiteDataCode
  } = useCMS();

  const [showToken, setShowToken] = useState(false);
  const [testingConnection, setTestingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const [pushing, setPushing] = useState(false);
  const [pushResult, setPushResult] = useState<{
    success: boolean;
    message: string;
    commitUrl?: string;
    commitSha?: string;
  } | null>(null);

  const [showCodePreview, setShowCodePreview] = useState(false);

  if (!isGitHubModalOpen) return null;

  const handleTestConnection = async () => {
    if (!githubConfig.token.trim() || !githubConfig.owner.trim() || !githubConfig.repo.trim()) {
      setConnectionStatus({
        success: false,
        message: 'Please provide GitHub Token, Repository Owner, and Repository Name.'
      });
      return;
    }

    setTestingConnection(true);
    setConnectionStatus(null);

    try {
      const res = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}`, {
        headers: {
          Authorization: `Bearer ${githubConfig.token.trim()}`,
          Accept: 'application/vnd.github+json'
        }
      });

      if (res.ok) {
        const data = await res.json();
        setConnectionStatus({
          success: true,
          message: `Connected successfully to ${data.full_name} (${data.default_branch} branch). Push permissions verified.`
        });
      } else {
        const err = await res.json().catch(() => ({}));
        setConnectionStatus({
          success: false,
          message: err.message || `Failed to connect (Status: ${res.status}). Verify your repository name and Personal Access Token permissions.`
        });
      }
    } catch (e: any) {
      setConnectionStatus({
        success: false,
        message: e?.message || 'Network error connecting to api.github.com'
      });
    } finally {
      setTestingConnection(false);
    }
  };

  const handlePushToGitHub = async () => {
    if (!githubConfig.token.trim() || !githubConfig.owner.trim() || !githubConfig.repo.trim()) {
      setPushResult({
        success: false,
        message: 'Please fill in GitHub Personal Access Token, Owner, and Repo.'
      });
      return;
    }

    setPushing(true);
    setPushResult(null);

    try {
      const updatedCode = generateSiteDataCode();
      const path = githubConfig.filePath || 'src/data/siteData.ts';
      const branch = githubConfig.branch || 'main';

      // 1. Get current file SHA on branch
      let currentSha = '';
      const getFileRes = await fetch(
        `https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/${path}?ref=${branch}`,
        {
          headers: {
            Authorization: `Bearer ${githubConfig.token.trim()}`,
            Accept: 'application/vnd.github+json'
          }
        }
      );

      if (getFileRes.ok) {
        const fileData = await getFileRes.json();
        currentSha = fileData.sha;
      }

      // 2. Base64 encode code with UTF-8 support
      const base64Content = btoa(unescape(encodeURIComponent(updatedCode)));

      // 3. Commit file via GitHub Contents API
      const putRes = await fetch(
        `https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/${path}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${githubConfig.token.trim()}`,
            Accept: 'application/vnd.github+json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: `feat(cms): update website content & sections via ASearch Live CMS [skip ci]`,
            content: base64Content,
            sha: currentSha || undefined,
            branch: branch
          })
        }
      );

      if (putRes.ok) {
        const commitData = await putRes.json();
        setPushResult({
          success: true,
          message: `Successfully pushed commit to branch '${branch}'! Because your GitHub repo is connected to Vercel, a new production deployment has been automatically triggered.`,
          commitUrl: commitData.commit?.html_url,
          commitSha: commitData.commit?.sha?.slice(0, 7)
        });
      } else {
        const errorData = await putRes.json().catch(() => ({}));
        setPushResult({
          success: false,
          message: errorData.message || `Push failed with status ${putRes.status}. Check your branch write permissions.`
        });
      }
    } catch (e: any) {
      setPushResult({
        success: false,
        message: e?.message || 'Error occurred while pushing to GitHub.'
      });
    } finally {
      setPushing(false);
    }
  };

  const handleDownloadBackup = () => {
    const code = generateSiteDataCode();
    const blob = new Blob([code], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'siteData.ts';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 dark:bg-black/90 backdrop-blur-md animate-fade-in text-left">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0D1017] rounded-3xl border border-slate-200 dark:border-white/15 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto space-y-6">
        <button
          onClick={() => setIsGitHubModalOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pr-8">
          <div className="w-10 h-10 rounded-xl bg-lime-500/15 border border-lime-500/30 flex items-center justify-center text-lime-600 dark:text-[#C6FF4D]">
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
              Push to GitHub & Auto-Deploy to Vercel
            </h3>
            <p className="text-xs text-slate-500 dark:text-[#9CA3AF]">
              Commits changes directly to your repository; Vercel triggers instant live production deploy on push
            </p>
          </div>
        </div>

        {/* Status Toast */}
        {pushResult && (
          <div
            className={`p-4 rounded-2xl border text-xs space-y-2 ${
              pushResult.success
                ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
                : 'bg-rose-500/15 border-rose-500/30 text-rose-800 dark:text-rose-300'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-sm">
              {pushResult.success ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Deployment Triggered Successfully!</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-5 h-5 text-rose-500" />
                  <span>Push Failed</span>
                </>
              )}
            </div>
            <p className="leading-relaxed">{pushResult.message}</p>
            {pushResult.commitUrl && (
              <div className="pt-1 flex items-center gap-3">
                <a
                  href={pushResult.commitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono underline flex items-center gap-1 font-bold"
                >
                  <span>View Commit ({pushResult.commitSha}) on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* How It Works Banner */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/5 text-xs text-slate-600 dark:text-[#9CA3AF] space-y-1.5 font-mono">
          <div className="text-lime-600 dark:text-[#C6FF4D] font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>Automated CI/CD Workflow</span>
          </div>
          <div className="text-[11px] leading-relaxed">
            1. Changes in ASearch CMS are packaged into <code className="text-slate-800 dark:text-white">src/data/siteData.ts</code>.<br />
            2. Pushed via GitHub REST API to your branch (<code className="text-slate-800 dark:text-white">{githubConfig.branch || 'main'}</code>).<br />
            3. Vercel automatically detects the push and publishes a new production build live.
          </div>
        </div>

        {/* GitHub Repository Config Fields */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-[#F5F7FA]">
                GitHub Personal Access Token (PAT)
              </label>
              <a
                href="https://github.com/settings/tokens"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-mono text-lime-600 dark:text-[#C6FF4D] hover:underline flex items-center gap-1"
              >
                <span>Create Token (repo scope)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="relative">
              <input
                type={showToken ? 'text' : 'password'}
                placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                value={githubConfig.token}
                onChange={(e) => updateGitHubConfig({ token: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white pr-10"
              />
              <button
                type="button"
                onClick={() => setShowToken(!showToken)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
              >
                {showToken ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                Repository Owner (User or Org)
              </label>
              <input
                type="text"
                placeholder="e.g. asearch-media or your-username"
                value={githubConfig.owner}
                onChange={(e) => updateGitHubConfig({ owner: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                Repository Name
              </label>
              <input
                type="text"
                placeholder="e.g. asearchonline-web"
                value={githubConfig.repo}
                onChange={(e) => updateGitHubConfig({ repo: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                Branch (Connected to Vercel)
              </label>
              <input
                type="text"
                placeholder="main"
                value={githubConfig.branch}
                onChange={(e) => updateGitHubConfig({ branch: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                Target File Path
              </label>
              <input
                type="text"
                value={githubConfig.filePath}
                onChange={(e) => updateGitHubConfig({ filePath: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Connection Test Status */}
          {connectionStatus && (
            <div
              className={`p-3 rounded-xl border text-xs ${
                connectionStatus.success
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-400'
              }`}
            >
              {connectionStatus.message}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleTestConnection}
              disabled={testingConnection}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-[#F5F7FA] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              {testingConnection ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Testing Connection...</span>
                </>
              ) : (
                <>
                  <Key className="w-3.5 h-3.5" />
                  <span>Test Connection</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowCodePreview(!showCodePreview)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-[#9CA3AF] hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 ml-auto"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{showCodePreview ? 'Hide Code' : 'Preview Generated Code'}</span>
            </button>
          </div>

          {/* Code Preview Drawer */}
          {showCodePreview && (
            <div className="p-3 bg-slate-900 rounded-xl text-slate-300 font-mono text-[11px] max-h-48 overflow-y-auto">
              <pre>{generateSiteDataCode()}</pre>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleDownloadBackup}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span>Download siteData.ts Backup</span>
          </button>

          <MagneticButton
            type="button"
            onClick={handlePushToGitHub}
            disabled={pushing}
            variant="primary"
            className="py-3 px-6 text-xs uppercase tracking-wider font-extrabold"
          >
            {pushing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Pushing Commit to GitHub...</span>
              </>
            ) : (
              <>
                <GitCommit className="w-4 h-4" />
                <span>Push to GitHub & Deploy Live</span>
              </>
            )}
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};
