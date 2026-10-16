import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X, ExternalLink, Sparkles, Building2, ShieldCheck } from 'lucide-react';
import { BentoCard } from './ui/BentoCard';

interface Project {
  id: string;
  client: string;
  category: 'Enterprise Tech' | 'Healthcare' | 'Travel & E-Commerce' | 'B2B Enterprise';
  timeline: string;
  headline: string;
  summary: string;
  stats: { label: string; value: string }[];
  deliverables: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'microsoft',
    client: 'Microsoft',
    category: 'Enterprise Tech',
    timeline: 'Multi-Quarter Strategic Initiative',
    headline: 'High-Velocity Digital Agility & Performance Scaling',
    summary: 'Partnered with Microsoft leadership to engineer rapid digital initiatives, high-agility technical execution, and robust search visibility across complex product ecosystems.',
    stats: [
      { label: 'Strategic Agility', value: '100%' },
      { label: 'Technical Uptime', value: '99.99%' },
      { label: 'Global Delivery Sprints', value: 'Sub-48h' }
    ],
    deliverables: [
      'Deployed enterprise performance architecture and high-velocity digital campaigns',
      'Engineered cross-functional technical agility and strategic communication workflows',
      'Delivered seamless creative and performance alignment for enterprise cloud initiatives'
    ]
  },
  {
    id: 'fortis',
    client: 'Fortis Healthcare',
    category: 'Healthcare',
    timeline: '6-Month Search Supremacy',
    headline: '+284% Specialty Patient Bookings Lift & E-E-A-T Authority',
    summary: 'Restructured medical specialty search hierarchies with semantic entity knowledge graphs, patient-centric appointment funnels, and verified credibility architectures.',
    stats: [
      { label: 'Patient Inbound Lift', value: '+284%' },
      { label: 'Appointment Friction', value: '-46%' },
      { label: 'Verified Specialties', value: '42' }
    ],
    deliverables: [
      'Deployed programmatic MedicalEntity and Physician Schema.org JSON-LD across hospital network',
      'Engineered high-intent urgent and specialty care search capture with sub-minute appointment booking',
      'Automated patient review syndication and local hospital trust signals across 25+ regional centers'
    ]
  },
  {
    id: 'yatra-mmt',
    client: 'Yatra & MakeMyTrip Ecosystem',
    category: 'Travel & E-Commerce',
    timeline: 'Algorithmic Bidding Overhaul',
    headline: '3.8x Blended ROAS & Rapid Travel Booking Conversion',
    summary: 'Re-architected direct-to-consumer travel and flight booking campaigns with automated predictive bidding, dynamic inventory query scripts, and high-framerate mobile performance.',
    stats: [
      { label: 'Verified Blended ROAS', value: '3.8x' },
      { label: 'Booking Completion', value: '+38%' },
      { label: 'Negative Query Scrubbing', value: '24/7' }
    ],
    deliverables: [
      'Implemented real-time travel search campaign restructuring with dynamic inventory bidding',
      'Server-side Conversion API (CAPI) with offline margin tracking and automated budget shifting',
      'Engineered sub-400ms mobile landing page micro-experiences for instant route reservations'
    ]
  },
  {
    id: 'hcl',
    client: 'HCL Technologies',
    category: 'B2B Enterprise',
    timeline: 'Account-Based Pipeline Scale',
    headline: '$4.8M Inbound Enterprise Pipeline via Search Supremacy',
    summary: 'Engineered authority entity clusters targeted specifically at enterprise software evaluation queries and buying committees, orchestrating multi-touch LinkedIn and search pipelines.',
    stats: [
      { label: 'Enterprise Pipeline', value: '$4.8M' },
      { label: 'High-Intent RFP Capture', value: '+190%' },
      { label: 'Sales Cycle Velocity', value: '-35%' }
    ],
    deliverables: [
      'Built authoritative B2B solution hubs and semantic entity networks for enterprise IT migrations',
      'Integrated real-time CRM webhook routing delivering high-value inbound RFPs to reps in < 90 seconds',
      'Account-Based Experience (ABX) campaign execution targeting Global 2000 procurement teams'
    ]
  }
];

interface FeaturedWorkProps {
  onOpenContact: (projectContext?: string) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenContact }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'Enterprise Tech', 'Healthcare', 'Travel & E-Commerce', 'B2B Enterprise'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 sm:py-28 border-t border-slate-200/90 dark:border-white/10 bg-slate-100/60 dark:bg-[#0D1017] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#11151D] border border-slate-200 dark:border-white/10 text-xs font-mono font-medium text-lime-600 dark:text-[#C6FF4D] mb-3 shadow-xs">
              <span>02 // VERIFIED CLIENT TRANSFORMATIONS</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-white/20">·</span>
              <span>110+ GLOBAL PARTNERSHIPS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA] leading-[1.12]">
              Case Studies in Velocity & Scale
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
              Real outcomes delivered for category leaders including Microsoft, Fortis Healthcare, Nokia, HCL, and Yatra.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white dark:bg-[#11151D] rounded-2xl border border-slate-200 dark:border-white/10 shrink-0 shadow-xs">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === f
                    ? 'bg-[#C6FF4D] text-[#07080B] shadow-sm'
                    : 'text-slate-600 dark:text-[#9CA3AF] hover:text-slate-950 dark:hover:text-[#F5F7FA]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project) => (
            <BentoCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:border-lime-500/60 dark:hover:border-[#C6FF4D]/40 transition-all duration-300"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-[#F5F7FA] border border-slate-200 dark:border-white/10">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 dark:text-[#9CA3AF]">
                      {project.timeline}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-[#9CA3AF] group-hover:bg-[#C6FF4D] group-hover:text-[#07080B] transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Client Name & Headline */}
                <div className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D] uppercase tracking-wider mb-1">
                  {project.client}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-[#F5F7FA] tracking-tight leading-snug group-hover:text-lime-600 dark:group-hover:text-[#C6FF4D] transition-colors">
                  {project.headline}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>

              {/* Quantified Outcomes Metrics Strip */}
              <div className="mt-8 pt-6 border-t border-slate-200/90 dark:border-white/10 grid grid-cols-3 gap-2 sm:gap-3">
                {project.stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-base sm:text-xl font-extrabold font-mono text-slate-900 dark:text-[#F5F7FA] tracking-tight group-hover:text-lime-600 dark:group-hover:text-[#C6FF4D] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500 dark:text-[#9CA3AF] font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 dark:bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#0D1017] rounded-3xl border border-slate-200 dark:border-white/15 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-lime-600 dark:text-[#C6FF4D] uppercase tracking-wider">
                    {selectedProject.client}
                  </span>
                  <span className="text-xs font-mono text-slate-400">·</span>
                  <span className="text-xs font-mono text-slate-400 dark:text-[#9CA3AF]">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F5F7FA]">
                  {selectedProject.headline}
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Quantified Metrics Box */}
              <div className="p-5 rounded-2xl bg-slate-100/80 dark:bg-[#11151D] border border-slate-200 dark:border-white/10 grid grid-cols-3 gap-4">
                {selectedProject.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-lime-600 dark:text-[#C6FF4D]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-[#9CA3AF] mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Deliverables */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-[#F5F7FA] mb-3">
                  Strategic & Engineering Deployments
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF]">
                      <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-[#C6FF4D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500 dark:text-[#9CA3AF] font-mono">
                  Google Certified Partner Verified
                </span>
                <button
                  onClick={() => {
                    const ctx = `Inquiry regarding ${selectedProject.client} case study results (${selectedProject.headline})`;
                    setSelectedProject(null);
                    onOpenContact(ctx);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#C6FF4D] hover:bg-[#b5f23d] text-[#07080B] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Replicate These Results</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
