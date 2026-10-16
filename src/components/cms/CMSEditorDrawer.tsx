import React, { useState, useEffect } from 'react';
import { useCMS } from '../../context/CMSContext';
import {
  X,
  Save,
  RotateCcw,
  Layers,
  Sparkles,
  Image as ImageIcon,
  CheckCircle2,
  FileText,
  Phone,
  Briefcase,
  Users,
  Compass,
  ArrowRight,
  Plus,
  Trash2,
  HelpCircle,
  BarChart3,
  Building2,
  Quote
} from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const CMSEditorDrawer: React.FC = () => {
  const {
    isEditorDrawerOpen,
    setIsEditorDrawerOpen,
    siteContent,
    updateSection,
    setIsGitHubModalOpen,
    activeEditorTab,
    setActiveEditorTab
  } = useCMS();

  const [savedNotification, setSavedNotification] = useState(false);

  // Local state for active editing
  const [heroForm, setHeroForm] = useState(siteContent.hero);
  const [brandingForm, setBrandingForm] = useState(siteContent.branding);
  const [clientsForm, setClientsForm] = useState(siteContent.clients);
  const [metricsForm, setMetricsForm] = useState(siteContent.metrics);
  const [servicesForm, setServicesForm] = useState(siteContent.services);
  const [projectsForm, setProjectsForm] = useState(siteContent.projects);
  const [processForm, setProcessForm] = useState(siteContent.process);
  const [advantagesForm, setAdvantagesForm] = useState(siteContent.advantages);
  const [testimonialsForm, setTestimonialsForm] = useState(siteContent.testimonials);
  const [industriesForm, setIndustriesForm] = useState(siteContent.industries);
  const [aboutForm, setAboutForm] = useState(siteContent.about);
  const [contactForm, setContactForm] = useState(siteContent.contact);
  const [faqsForm, setFaqsForm] = useState(siteContent.faqs);

  // Sync state when drawer opens or siteContent changes
  useEffect(() => {
    if (isEditorDrawerOpen) {
      setHeroForm(siteContent.hero);
      setBrandingForm(siteContent.branding);
      setClientsForm(siteContent.clients);
      setMetricsForm(siteContent.metrics);
      setServicesForm(siteContent.services);
      setProjectsForm(siteContent.projects);
      setProcessForm(siteContent.process);
      setAdvantagesForm(siteContent.advantages);
      setTestimonialsForm(siteContent.testimonials);
      setIndustriesForm(siteContent.industries);
      setAboutForm(siteContent.about);
      setContactForm(siteContent.contact);
      setFaqsForm(siteContent.faqs);
    }
  }, [isEditorDrawerOpen, siteContent]);

  const [selectedServiceIdx, setSelectedServiceIdx] = useState(0);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);
  const [selectedTestimonialIdx, setSelectedTestimonialIdx] = useState(0);
  const [selectedIndustryIdx, setSelectedIndustryIdx] = useState(0);
  const [selectedFaqIdx, setSelectedFaqIdx] = useState(0);

  if (!isEditorDrawerOpen) return null;

  const triggerSaveToast = () => {
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 2400);
  };

  const handleSaveHeroAndBranding = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('hero', heroForm);
    updateSection('branding', brandingForm);
    triggerSaveToast();
  };

  const handleSaveClients = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('clients', clientsForm);
    triggerSaveToast();
  };

  const handleSaveMetrics = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('metrics', metricsForm);
    triggerSaveToast();
  };

  const handleSaveServices = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('services', servicesForm);
    triggerSaveToast();
  };

  const handleSaveProjects = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('projects', projectsForm);
    triggerSaveToast();
  };

  const handleSaveProcess = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('process', processForm);
    triggerSaveToast();
  };

  const handleSaveAdvantages = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('advantages', advantagesForm);
    triggerSaveToast();
  };

  const handleSaveTestimonials = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('testimonials', testimonialsForm);
    triggerSaveToast();
  };

  const handleSaveIndustries = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('industries', industriesForm);
    triggerSaveToast();
  };

  const handleSaveAbout = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('about', aboutForm);
    triggerSaveToast();
  };

  const handleSaveFaqs = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('faqs', faqsForm);
    triggerSaveToast();
  };

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    updateSection('contact', contactForm);
    triggerSaveToast();
  };

  const TABS = [
    { key: 'hero', label: 'Hero & Logo' },
    { key: 'clients', label: 'Clients & Logos' },
    { key: 'metrics', label: 'Numbers & Metrics' },
    { key: 'services', label: '12 Services' },
    { key: 'projects', label: 'Case Studies' },
    { key: 'process', label: 'Process' },
    { key: 'advantages', label: 'Why Us' },
    { key: 'testimonials', label: 'Testimonials' },
    { key: 'industries', label: 'Industries' },
    { key: 'about', label: 'About Us' },
    { key: 'faqs', label: 'FAQs' },
    { key: 'contact', label: 'Contact' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-2xl h-full bg-white dark:bg-[#0D1017] border-l border-slate-200 dark:border-white/10 shadow-2xl flex flex-col text-left">
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between shrink-0 bg-slate-50 dark:bg-[#11151D]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C6FF4D] text-[#07080B] flex items-center justify-center font-bold">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-[#F5F7FA]">
                Visual Section & Image Editor
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-[#9CA3AF]">
                Edit live website copy, metrics, and images in real-time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsEditorDrawerOpen(false);
                setIsGitHubModalOpen(true);
              }}
              className="px-3 py-1.5 rounded-xl bg-lime-500/15 text-lime-700 dark:text-[#C6FF4D] border border-lime-500/30 text-xs font-mono font-bold hover:bg-lime-500/25 transition-all cursor-pointer"
            >
              Push to GitHub & Vercel
            </button>
            <button
              onClick={() => setIsEditorDrawerOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close editor drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section Tabs Bar */}
        <div className="flex items-center gap-1 p-2 bg-slate-100 dark:bg-[#07080B] border-b border-slate-200 dark:border-white/10 overflow-x-auto text-xs font-semibold shrink-0">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveEditorTab(tab.key)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeEditorTab === tab.key
                  ? 'bg-white dark:bg-[#11151D] text-slate-950 dark:text-[#C6FF4D] shadow-xs font-bold'
                  : 'text-slate-600 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Toast Alert */}
        {savedNotification && (
          <div className="mx-5 mt-3 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Changes applied live to the website! Click "Push to GitHub & Vercel" when ready to deploy.</span>
          </div>
        )}

        {/* Tab Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* 1. HERO & BRANDING TAB */}
          {activeEditorTab === 'hero' && (
            <form onSubmit={handleSaveHeroAndBranding} className="space-y-5">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/5 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase text-lime-600 dark:text-[#C6FF4D] flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4" />
                  <span>Brand Logo Image & Identity</span>
                </h4>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                    Company Logo Image URL
                  </label>
                  <input
                    type="url"
                    value={brandingForm.logoUrl}
                    onChange={(e) => setBrandingForm({ ...brandingForm, logoUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white"
                  />
                  <div className="mt-2 flex items-center gap-3">
                    <img
                      src={brandingForm.logoUrl}
                      alt="Logo Preview"
                      className="h-8 w-auto max-w-[160px] object-contain border border-slate-200 dark:border-white/10 p-1 rounded-lg bg-white dark:bg-black/30"
                    />
                    <span className="text-[11px] text-slate-500">Live preview of logo displayed in header, footer, and modals</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={brandingForm.companyName}
                      onChange={(e) => setBrandingForm({ ...brandingForm, companyName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                      Tagline
                    </label>
                    <input
                      type="text"
                      value={brandingForm.tagline}
                      onChange={(e) => setBrandingForm({ ...brandingForm, tagline: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase text-lime-600 dark:text-[#C6FF4D]">
                  Hero Headline & Messaging
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                      Headline Line 1
                    </label>
                    <input
                      type="text"
                      value={heroForm.headlineLine1}
                      onChange={(e) => setHeroForm({ ...heroForm, headlineLine1: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                      Headline Line 2 (Highlight)
                    </label>
                    <input
                      type="text"
                      value={heroForm.headlineLine2}
                      onChange={(e) => setHeroForm({ ...heroForm, headlineLine2: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                    Supporting Hero Description
                  </label>
                  <textarea
                    rows={3}
                    value={heroForm.description}
                    onChange={(e) => setHeroForm({ ...heroForm, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                      Availability Indicator Text
                    </label>
                    <input
                      type="text"
                      value={heroForm.availabilityText}
                      onChange={(e) => setHeroForm({ ...heroForm, availabilityText: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                      Quarter / Booking Window
                    </label>
                    <input
                      type="text"
                      value={heroForm.availabilityQuarter}
                      onChange={(e) => setHeroForm({ ...heroForm, availabilityQuarter: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                      Primary CTA Button
                    </label>
                    <input
                      type="text"
                      value={heroForm.primaryCtaText}
                      onChange={(e) => setHeroForm({ ...heroForm, primaryCtaText: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-[#F5F7FA] mb-1">
                      Secondary CTA Button
                    </label>
                    <input
                      type="text"
                      value={heroForm.secondaryCtaText}
                      onChange={(e) => setHeroForm({ ...heroForm, secondaryCtaText: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save Hero & Branding</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}

          {/* 2. CLIENTS & LOGOS TAB */}
          {activeEditorTab === 'clients' && (
            <form onSubmit={handleSaveClients} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold uppercase text-lime-600 dark:text-[#C6FF4D]">
                  Verified Client Roster (Marquee Strip)
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    setClientsForm([...clientsForm, { name: 'New Client', category: 'Category', badge: 'Verified Partner' }]);
                  }}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-lime-500/10 text-lime-700 dark:text-[#C6FF4D] text-xs font-mono font-bold border border-lime-500/30 hover:bg-lime-500/20 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Client</span>
                </button>
              </div>

              <div className="space-y-3">
                {clientsForm.map((client, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/10 flex items-center gap-3">
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 mb-0.5">Client Name</label>
                        <input
                          type="text"
                          value={client.name}
                          onChange={(e) => {
                            const updated = [...clientsForm];
                            updated[idx].name = e.target.value;
                            setClientsForm(updated);
                          }}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 mb-0.5">Category</label>
                        <input
                          type="text"
                          value={client.category}
                          onChange={(e) => {
                            const updated = [...clientsForm];
                            updated[idx].category = e.target.value;
                            setClientsForm(updated);
                          }}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-slate-500 mb-0.5">Badge (Optional)</label>
                        <input
                          type="text"
                          value={client.badge || ''}
                          onChange={(e) => {
                            const updated = [...clientsForm];
                            updated[idx].badge = e.target.value;
                            setClientsForm(updated);
                          }}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setClientsForm(clientsForm.filter((_, i) => i !== idx));
                      }}
                      className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg cursor-pointer"
                      title="Remove Client"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save Client Roster</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}

          {/* 3. NUMBERS & METRICS TAB */}
          {activeEditorTab === 'metrics' && (
            <form onSubmit={handleSaveMetrics} className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase text-lime-600 dark:text-[#C6FF4D] flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4" />
                <span>Official Track Record Numbers</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {metricsForm.map((metric, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/10 space-y-2">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-500 mb-0.5">Value (e.g. 14+, 110+, 3.8x)</label>
                      <input
                        type="text"
                        value={metric.value}
                        onChange={(e) => {
                          const updated = [...metricsForm];
                          updated[idx].value = e.target.value;
                          setMetricsForm(updated);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-sm font-bold font-mono text-lime-600 dark:text-[#C6FF4D]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-500 mb-0.5">Metric Label</label>
                      <input
                        type="text"
                        value={metric.label}
                        onChange={(e) => {
                          const updated = [...metricsForm];
                          updated[idx].label = e.target.value;
                          setMetricsForm(updated);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-500 mb-0.5">Subtext</label>
                      <input
                        type="text"
                        value={metric.subtext}
                        onChange={(e) => {
                          const updated = [...metricsForm];
                          updated[idx].subtext = e.target.value;
                          setMetricsForm(updated);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs text-slate-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save Official Numbers</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}

          {/* 4. SERVICES TAB */}
          {activeEditorTab === 'services' && (
            <form onSubmit={handleSaveServices} className="space-y-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {servicesForm.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedServiceIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap cursor-pointer ${
                      selectedServiceIdx === idx
                        ? 'bg-lime-500/20 text-lime-700 dark:text-[#C6FF4D] font-bold border border-lime-500/30'
                        : 'bg-slate-100 dark:bg-[#11151D] text-slate-600 dark:text-[#9CA3AF]'
                    }`}
                  >
                    {s.number}. {s.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              {servicesForm[selectedServiceIdx] && (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/5 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold mb-1">Service Title</label>
                      <input
                        type="text"
                        value={servicesForm[selectedServiceIdx].title}
                        onChange={(e) => {
                          const copy = [...servicesForm];
                          copy[selectedServiceIdx].title = e.target.value;
                          setServicesForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Category</label>
                      <select
                        value={servicesForm[selectedServiceIdx].category}
                        onChange={(e) => {
                          const copy = [...servicesForm];
                          copy[selectedServiceIdx].category = e.target.value as any;
                          setServicesForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                      >
                        <option value="Digital Marketing & Strategy">Digital Marketing & Strategy</option>
                        <option value="Technology & Automation Solutions">Technology & Automation Solutions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Tagline</label>
                    <input
                      type="text"
                      value={servicesForm[selectedServiceIdx].tagline}
                      onChange={(e) => {
                        const copy = [...servicesForm];
                        copy[selectedServiceIdx].tagline = e.target.value;
                        setServicesForm(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Full Description</label>
                    <textarea
                      rows={3}
                      value={servicesForm[selectedServiceIdx].description}
                      onChange={(e) => {
                        const copy = [...servicesForm];
                        copy[selectedServiceIdx].description = e.target.value;
                        setServicesForm(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1">Key Metric Headline</label>
                      <input
                        type="text"
                        value={servicesForm[selectedServiceIdx].metricHeadline || ''}
                        onChange={(e) => {
                          const copy = [...servicesForm];
                          copy[selectedServiceIdx].metricHeadline = e.target.value;
                          setServicesForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Metric Description</label>
                      <input
                        type="text"
                        value={servicesForm[selectedServiceIdx].metricLabel || ''}
                        onChange={(e) => {
                          const copy = [...servicesForm];
                          copy[selectedServiceIdx].metricLabel = e.target.value;
                          setServicesForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save All 12 Services</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}

          {/* 5. CASE STUDIES / PROJECTS TAB */}
          {activeEditorTab === 'projects' && (
            <form onSubmit={handleSaveProjects} className="space-y-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {projectsForm.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedProjectIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap cursor-pointer ${
                      selectedProjectIdx === idx
                        ? 'bg-lime-500/20 text-lime-700 dark:text-[#C6FF4D] font-bold border border-lime-500/30'
                        : 'bg-slate-100 dark:bg-[#11151D] text-slate-600 dark:text-[#9CA3AF]'
                    }`}
                  >
                    {p.client}
                  </button>
                ))}
              </div>

              {projectsForm[selectedProjectIdx] && (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/5 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1">Client Name</label>
                      <input
                        type="text"
                        value={projectsForm[selectedProjectIdx].client}
                        onChange={(e) => {
                          const copy = [...projectsForm];
                          copy[selectedProjectIdx].client = e.target.value;
                          setProjectsForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Category / Sector</label>
                      <input
                        type="text"
                        value={projectsForm[selectedProjectIdx].category}
                        onChange={(e) => {
                          const copy = [...projectsForm];
                          copy[selectedProjectIdx].category = e.target.value;
                          setProjectsForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Case Headline</label>
                    <input
                      type="text"
                      value={projectsForm[selectedProjectIdx].headline}
                      onChange={(e) => {
                        const copy = [...projectsForm];
                        copy[selectedProjectIdx].headline = e.target.value;
                        setProjectsForm(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Executive Summary</label>
                    <textarea
                      rows={3}
                      value={projectsForm[selectedProjectIdx].summary}
                      onChange={(e) => {
                        const copy = [...projectsForm];
                        copy[selectedProjectIdx].summary = e.target.value;
                        setProjectsForm(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                    />
                  </div>
                </div>
              )}

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save Case Studies</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}

          {/* 6. PROCESS TAB */}
          {activeEditorTab === 'process' && (
            <form onSubmit={handleSaveProcess} className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase text-lime-600 dark:text-[#C6FF4D]">
                4-Stage Growth Engineering Methodology
              </h4>
              <div className="space-y-3">
                {processForm.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/10 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-lime-600 dark:text-[#C6FF4D]">{step.number}</span>
                      <input
                        type="text"
                        value={step.name}
                        onChange={(e) => {
                          const copy = [...processForm];
                          copy[idx].name = e.target.value;
                          setProcessForm(copy);
                        }}
                        className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-bold"
                      />
                    </div>
                    <input
                      type="text"
                      value={step.tagline}
                      onChange={(e) => {
                        const copy = [...processForm];
                        copy[idx].tagline = e.target.value;
                        setProcessForm(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                    />
                    <textarea
                      rows={2}
                      value={step.description}
                      onChange={(e) => {
                        const copy = [...processForm];
                        copy[idx].description = e.target.value;
                        setProcessForm(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                    />
                  </div>
                ))}
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save Process Methodology</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}

          {/* 7. WHY US / ADVANTAGES TAB */}
          {activeEditorTab === 'advantages' && (
            <form onSubmit={handleSaveAdvantages} className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase text-lime-600 dark:text-[#C6FF4D]">
                6 Core Advantages (Why ASearch)
              </h4>
              <div className="space-y-3">
                {advantagesForm.map((adv, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/10 space-y-2">
                    <input
                      type="text"
                      value={adv.title}
                      onChange={(e) => {
                        const copy = [...advantagesForm];
                        copy[idx].title = e.target.value;
                        setAdvantagesForm(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-bold"
                    />
                    <textarea
                      rows={2}
                      value={adv.description}
                      onChange={(e) => {
                        const copy = [...advantagesForm];
                        copy[idx].description = e.target.value;
                        setAdvantagesForm(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-[#9CA3AF]"
                    />
                  </div>
                ))}
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save Advantages</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}

          {/* 8. TESTIMONIALS TAB */}
          {activeEditorTab === 'testimonials' && (
            <form onSubmit={handleSaveTestimonials} className="space-y-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {testimonialsForm.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTestimonialIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap cursor-pointer ${
                      selectedTestimonialIdx === idx
                        ? 'bg-lime-500/20 text-lime-700 dark:text-[#C6FF4D] font-bold border border-lime-500/30'
                        : 'bg-slate-100 dark:bg-[#11151D] text-slate-600 dark:text-[#9CA3AF]'
                    }`}
                  >
                    {t.companyName}
                  </button>
                ))}
              </div>

              {testimonialsForm[selectedTestimonialIdx] && (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/5 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1">Executive Name</label>
                      <input
                        type="text"
                        value={testimonialsForm[selectedTestimonialIdx].clientName}
                        onChange={(e) => {
                          const copy = [...testimonialsForm];
                          copy[selectedTestimonialIdx].clientName = e.target.value;
                          setTestimonialsForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Executive Role</label>
                      <input
                        type="text"
                        value={testimonialsForm[selectedTestimonialIdx].clientRole}
                        onChange={(e) => {
                          const copy = [...testimonialsForm];
                          copy[selectedTestimonialIdx].clientRole = e.target.value;
                          setTestimonialsForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Executive Quote</label>
                    <textarea
                      rows={3}
                      value={testimonialsForm[selectedTestimonialIdx].quote}
                      onChange={(e) => {
                        const copy = [...testimonialsForm];
                        copy[selectedTestimonialIdx].quote = e.target.value;
                        setTestimonialsForm(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1">Highlight Metric</label>
                      <input
                        type="text"
                        value={testimonialsForm[selectedTestimonialIdx].highlightMetric}
                        onChange={(e) => {
                          const copy = [...testimonialsForm];
                          copy[selectedTestimonialIdx].highlightMetric = e.target.value;
                          setTestimonialsForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Metric Description</label>
                      <input
                        type="text"
                        value={testimonialsForm[selectedTestimonialIdx].metricDescription}
                        onChange={(e) => {
                          const copy = [...testimonialsForm];
                          copy[selectedTestimonialIdx].metricDescription = e.target.value;
                          setTestimonialsForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save Testimonials</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}

          {/* 9. INDUSTRIES TAB */}
          {activeEditorTab === 'industries' && (
            <form onSubmit={handleSaveIndustries} className="space-y-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {industriesForm.map((ind, idx) => (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setSelectedIndustryIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap cursor-pointer ${
                      selectedIndustryIdx === idx
                        ? 'bg-lime-500/20 text-lime-700 dark:text-[#C6FF4D] font-bold border border-lime-500/30'
                        : 'bg-slate-100 dark:bg-[#11151D] text-slate-600 dark:text-[#9CA3AF]'
                    }`}
                  >
                    {ind.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {industriesForm[selectedIndustryIdx] && (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Sector Headline</label>
                    <input
                      type="text"
                      value={industriesForm[selectedIndustryIdx].headline}
                      onChange={(e) => {
                        const copy = [...industriesForm];
                        copy[selectedIndustryIdx].headline = e.target.value;
                        setIndustriesForm(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Sector Description</label>
                    <textarea
                      rows={3}
                      value={industriesForm[selectedIndustryIdx].description}
                      onChange={(e) => {
                        const copy = [...industriesForm];
                        copy[selectedIndustryIdx].description = e.target.value;
                        setIndustriesForm(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1">Expected Impact</label>
                      <input
                        type="text"
                        value={industriesForm[selectedIndustryIdx].expectedImpact}
                        onChange={(e) => {
                          const copy = [...industriesForm];
                          copy[selectedIndustryIdx].expectedImpact = e.target.value;
                          setIndustriesForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">Case Metric Proof</label>
                      <input
                        type="text"
                        value={industriesForm[selectedIndustryIdx].caseMetric}
                        onChange={(e) => {
                          const copy = [...industriesForm];
                          copy[selectedIndustryIdx].caseMetric = e.target.value;
                          setIndustriesForm(copy);
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save Industries Playbook</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}

          {/* 10. ABOUT US TAB */}
          {activeEditorTab === 'about' && (
            <form onSubmit={handleSaveAbout} className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">Section Heading</label>
                  <input
                    type="text"
                    value={aboutForm.heading}
                    onChange={(e) => setAboutForm({ ...aboutForm, heading: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Corporate Narrative Paragraph 1</label>
                  <textarea
                    rows={3}
                    value={aboutForm.narrative1}
                    onChange={(e) => setAboutForm({ ...aboutForm, narrative1: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Corporate Narrative Paragraph 2</label>
                  <textarea
                    rows={3}
                    value={aboutForm.narrative2}
                    onChange={(e) => setAboutForm({ ...aboutForm, narrative2: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                  />
                </div>
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save Corporate Information</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}

          {/* 11. FAQS TAB */}
          {activeEditorTab === 'faqs' && (
            <form onSubmit={handleSaveFaqs} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold uppercase text-lime-600 dark:text-[#C6FF4D] flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" />
                  <span>Frequently Asked Questions (AEO & SEO)</span>
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    setFaqsForm([
                      ...faqsForm,
                      { question: 'New Question?', answer: 'Answer details here...', category: 'General' }
                    ]);
                  }}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-lime-500/10 text-lime-700 dark:text-[#C6FF4D] text-xs font-mono font-bold border border-lime-500/30 hover:bg-lime-500/20 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add FAQ</span>
                </button>
              </div>

              <div className="space-y-3">
                {faqsForm.map((faq, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/10 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => {
                          const copy = [...faqsForm];
                          copy[idx].question = e.target.value;
                          setFaqsForm(copy);
                        }}
                        className="flex-1 px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-bold"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFaqsForm(faqsForm.filter((_, i) => i !== idx));
                        }}
                        className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-lg cursor-pointer"
                        title="Remove FAQ"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <textarea
                      rows={2}
                      value={faq.answer}
                      onChange={(e) => {
                        const copy = [...faqsForm];
                        copy[idx].answer = e.target.value;
                        setFaqsForm(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                    />
                  </div>
                ))}
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save FAQs</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}

          {/* 12. CONTACT TAB */}
          {activeEditorTab === 'contact' && (
            <form onSubmit={handleSaveContact} className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#11151D] border border-slate-200 dark:border-white/5 space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase text-lime-600 dark:text-[#C6FF4D] flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  <span>Corporate Contact Numbers & Emails</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Direct Line / WhatsApp</label>
                    <input
                      type="text"
                      value={contactForm.phones[0]?.number || ''}
                      onChange={(e) => {
                        const copy = { ...contactForm };
                        copy.phones[0].number = e.target.value;
                        setContactForm(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Delhi PBX Number</label>
                    <input
                      type="text"
                      value={contactForm.phones[1]?.number || ''}
                      onChange={(e) => {
                        const copy = { ...contactForm };
                        if (!copy.phones[1]) copy.phones[1] = { label: 'Delhi Corporate PBX', number: '', raw: '' };
                        copy.phones[1].number = e.target.value;
                        setContactForm(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1">General Inquiries Email</label>
                    <input
                      type="text"
                      value={contactForm.emails[0]?.address || ''}
                      onChange={(e) => {
                        const copy = { ...contactForm };
                        copy.emails[0].address = e.target.value;
                        setContactForm(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Leadership / Partnerships Email</label>
                    <input
                      type="text"
                      value={contactForm.emails[1]?.address || ''}
                      onChange={(e) => {
                        const copy = { ...contactForm };
                        if (!copy.emails[1]) copy.emails[1] = { label: 'Leadership', address: '' };
                        copy.emails[1].address = e.target.value;
                        setContactForm(copy);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">New Delhi Corporate Office Address</label>
                  <textarea
                    rows={2}
                    value={contactForm.locations[0]?.address || ''}
                    onChange={(e) => {
                      const copy = { ...contactForm };
                      copy.locations[0].address = e.target.value;
                      setContactForm(copy);
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Hyderabad Regional Tech Hub Address</label>
                  <textarea
                    rows={2}
                    value={contactForm.locations[1]?.address || ''}
                    onChange={(e) => {
                      const copy = { ...contactForm };
                      copy.locations[1].address = e.target.value;
                      setContactForm(copy);
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#07080B] border border-slate-200 dark:border-white/10 text-xs"
                  />
                </div>
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full py-2.5 text-xs font-extrabold uppercase">
                <span>Save Contact Details</span>
                <Save className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
