import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ALL_SERVICES,
  VERIFIED_CLIENTS,
  OFFICIAL_METRICS,
  INDUSTRIES_SERVED,
  TESTIMONIALS_DATA,
  FAQ_DATA,
  CORPORATE_CONTACT,
  VerifiedClient
} from '../data/siteData';
import { ServiceItem, IndustryItem, TestimonialItem, FAQItem } from '../types';

export interface ProjectItem {
  id: string;
  client: string;
  category: string;
  timeline: string;
  headline: string;
  summary: string;
  stats: { label: string; value: string }[];
  deliverables: string[];
}

export interface ProcessItem {
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface AdvantageItem {
  title: string;
  description: string;
}

export interface HeroContent {
  headlineLine1: string;
  headlineLine2: string;
  availabilityText: string;
  availabilityQuarter: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  badges: string[];
}

export interface BrandingContent {
  logoUrl: string;
  companyName: string;
  tagline: string;
}

export interface AboutContent {
  badgeText: string;
  heading: string;
  legalEntity1: string;
  legalEntity2: string;
  narrative1: string;
  narrative2: string;
}

export interface SiteContent {
  branding: BrandingContent;
  hero: HeroContent;
  clients: VerifiedClient[];
  metrics: typeof OFFICIAL_METRICS;
  services: ServiceItem[];
  projects: ProjectItem[];
  process: ProcessItem[];
  advantages: AdvantageItem[];
  testimonials: TestimonialItem[];
  industries: IndustryItem[];
  about: AboutContent;
  contact: typeof CORPORATE_CONTACT;
  faqs: FAQItem[];
}

const DEFAULT_PROJECTS: ProjectItem[] = [
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
      { label: 'Blended Verified ROAS', value: '3.8x' },
      { label: 'Booking Latency', value: '-52%' },
      { label: 'Direct Flight Bookings', value: '+192%' }
    ],
    deliverables: [
      'Architected programmatic inventory search scripts synching ad copy to real-time flight fares',
      'Engineered sub-second Next.js edge landing pages reducing checkout bounce rate by 34%',
      'Automated dynamic creative retargeting across Meta and Google Display Networks'
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

const DEFAULT_PROCESS: ProcessItem[] = [
  {
    number: '01',
    name: 'Discover',
    tagline: 'Understand the business, audience, and commercial objectives.',
    description: 'We audit your technical footprint, query landscape, customer acquisition economics, and competitor moats to identify where market share is being forfeited.',
    deliverables: [
      'Deep Technical SEO & Schema Audit',
      'Paid Media Query Waste Analysis',
      'Customer Journey Friction Mapping',
      'Executive Growth Opportunity Matrix'
    ]
  },
  {
    number: '02',
    name: 'Strategize',
    tagline: 'Develop a data-informed, algorithmic roadmap.',
    description: 'We construct a multi-channel growth architecture—aligning entity-based semantic SEO, automated paid bidding scripts, and conversion funnels to specific ARR milestones.',
    deliverables: [
      '90-Day Execution Blueprint',
      'Semantic Knowledge Graph Schema',
      'Paid Campaign Account Restructuring',
      'Target ROAS & LTV Model'
    ]
  },
  {
    number: '03',
    name: 'Create',
    tagline: 'Build compelling creative and digital experiences.',
    description: 'Our software engineers and creative directors build sub-second Next.js web applications, high-converting ad creative matrices, and interactive 3D spatial experiences.',
    deliverables: [
      'Production Next.js / React Applications',
      'High-Converting Dynamic Ad Creatives',
      'Automated Lead Qualification Flows',
      'Lighthouse 98+ Performance Guarantee'
    ]
  },
  {
    number: '04',
    name: 'Optimize',
    tagline: 'Test, measure, and improve performance continuously.',
    description: 'Growth is compounding. We run bi-weekly multivariate A/B tests, algorithmic bid refinements, negative query scraping, and closed-loop CRM revenue reconciliation.',
    deliverables: [
      'Continuous Multivariate CRO Experiments',
      'Real-Time Executive BI Dashboards',
      'Algorithmic Bid Rebalancing',
      'Deterministic Monthly Attribution Reports'
    ]
  }
];

const DEFAULT_ADVANTAGES: AdvantageItem[] = [
  {
    title: 'Strategy Before Execution',
    description: 'We do not rush into burning budget on ad clicks. Every campaign is preceded by exhaustive keyword intent modeling, schema entity structuring, and audience unit economics.'
  },
  {
    title: 'Creativity Backed by Data',
    description: 'Award-winning visual aesthetics married to deterministic revenue analytics. We design sub-second experiences that convert high-value buyers, not just win design praise.'
  },
  {
    title: 'Zero Retainer Lock-in',
    description: 'We earn our seat at your executive table every 30 days. Transparent performance dashboards, live Slack communication, and shared commercial accountability.'
  },
  {
    title: 'Software-Grade Web Performance',
    description: 'We build with modern Next.js edge-rendering, sub-400ms server response times, and zero layout shift, ensuring every click is met with instant page fidelity.'
  },
  {
    title: 'Continuous Experimentation',
    description: 'Bi-weekly multivariate hypothesis testing across landing pages, ad hooks, and email lifecycle triggers so performance compounds month after month.'
  },
  {
    title: 'Long-Term Compound Growth',
    description: 'We turn paid and organic search traffic into an enduring enterprise asset that appreciates in value over time, lowering blended CAC and insulating against platform algorithm volatility.'
  }
];

const DEFAULT_HERO: HeroContent = {
  headlineLine1: 'WE MAKE BRANDS',
  headlineLine2: 'IMPOSSIBLE TO IGNORE.',
  availabilityText: 'AVAILABLE FOR SELECT PROJECTS',
  availabilityQuarter: 'Q3 / Q4 2026',
  description: 'We combine strategy, creativity, performance marketing, and technology to turn ambitious businesses into category leaders.',
  primaryCtaText: "Let's Build Something Great",
  secondaryCtaText: 'Explore Our Work',
  badges: [
    '14+ Years Proven Growth',
    '110+ Global Clients',
    '3.8x Verified ROAS',
    'Google Certified Partner'
  ]
};

const DEFAULT_BRANDING: BrandingContent = {
  logoUrl: 'https://asearchonline.com/wp-content/uploads/2026/02/asearchLOGO.png',
  companyName: 'ASEARCH ONLINE',
  tagline: '// ONLINE'
};

const DEFAULT_ABOUT: AboutContent = {
  badgeText: '14+ YEARS OF EXCELLENCE',
  heading: 'Where Search Science Meets High-Velocity Engineering',
  legalEntity1: 'ASEARCH ONLINE MEDIA PRIVATE LIMITED',
  legalEntity2: 'ASEARCH ONLINE TECHNOLOGY PRIVATE LIMITED',
  narrative1: 'Operating officially under ASEARCH ONLINE MEDIA PRIVATE LIMITED (Inc. 2017) and ASEARCH ONLINE TECHNOLOGY PRIVATE LIMITED, we are a technology-led digital growth agency built for ambitious category leaders.',
  narrative2: 'With 14+ years of industry leadership and over 110+ global clients worldwide—including Microsoft, Fortis Healthcare, Nokia, HCL, and Yatra—we treat digital growth as a rigorous software discipline. We replace fragmented agency guesswork with AI-driven SEO entity graphs, programmatic bidding pipelines, and sub-second web experiences.'
};

const INITIAL_CONTENT: SiteContent = {
  branding: DEFAULT_BRANDING,
  hero: DEFAULT_HERO,
  clients: VERIFIED_CLIENTS,
  metrics: OFFICIAL_METRICS,
  services: ALL_SERVICES,
  projects: DEFAULT_PROJECTS,
  process: DEFAULT_PROCESS,
  advantages: DEFAULT_ADVANTAGES,
  testimonials: TESTIMONIALS_DATA,
  industries: INDUSTRIES_SERVED,
  about: DEFAULT_ABOUT,
  contact: CORPORATE_CONTACT,
  faqs: FAQ_DATA
};

export interface GitHubConfig {
  token: string;
  owner: string;
  repo: string;
  branch: string;
  filePath: string;
}

interface CMSContextType {
  isAuthenticated: boolean;
  login: (email?: string, password?: string) => boolean;
  logout: () => void;
  isEditMode: boolean;
  setIsEditMode: (mode: boolean) => void;
  toggleEditMode: () => void;
  siteContent: SiteContent;
  updateSection: <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => void;
  resetToDefaults: () => void;
  hasUnsavedChanges: boolean;
  isEditorDrawerOpen: boolean;
  setIsEditorDrawerOpen: (open: boolean) => void;
  isGitHubModalOpen: boolean;
  setIsGitHubModalOpen: (open: boolean) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  githubConfig: GitHubConfig;
  updateGitHubConfig: (config: Partial<GitHubConfig>) => void;
  generateSiteDataCode: () => string;
  activeEditorTab: string;
  setActiveEditorTab: (tab: string) => void;
  openEditorToTab: (tab: string) => void;
}

const CMSContext = createContext<CMSContextType | null>(null);

const STORAGE_KEY = 'asearch_cms_content_v1';
const AUTH_KEY = 'asearch_cms_auth_v1';
const GITHUB_KEY = 'asearch_cms_github_v1';

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeEditorTab, setActiveEditorTab] = useState<string>('hero');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(AUTH_KEY) === 'true';
    }
    return false;
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(AUTH_KEY) === 'true';
    }
    return false;
  });

  const [siteContent, setSiteContent] = useState<SiteContent>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return { ...INITIAL_CONTENT, ...JSON.parse(saved) };
        } catch {
          // fallback to defaults
        }
      }
    }
    return INITIAL_CONTENT;
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem(STORAGE_KEY);
    }
    return false;
  });

  const [isEditorDrawerOpen, setIsEditorDrawerOpen] = useState(false);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [githubConfig, setGithubConfig] = useState<GitHubConfig>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(GITHUB_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {}
      }
    }
    return {
      token: '',
      owner: '',
      repo: '',
      branch: 'main',
      filePath: 'src/data/siteData.ts'
    };
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_KEY, isAuthenticated ? 'true' : 'false');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(GITHUB_KEY, JSON.stringify(githubConfig));
    }
  }, [githubConfig]);

  const login = (email = '', password = ''): boolean => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    const valid =
      cleanEmail === 'akram@asearchonline.com' &&
      cleanPassword === 'akSearch@123#';

    if (valid) {
      setIsAuthenticated(true);
      setIsEditMode(true);
      setIsEditorDrawerOpen(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsEditMode(false);
    setIsEditorDrawerOpen(false);
    setIsGitHubModalOpen(false);
  };

  const toggleEditMode = () => {
    if (isAuthenticated) {
      setIsEditMode(prev => {
        const next = !prev;
        if (!next) {
          setIsEditorDrawerOpen(false);
        } else {
          setIsEditorDrawerOpen(true);
        }
        return next;
      });
    }
  };

  const updateSection = <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => {
    setSiteContent(prev => {
      const updated = { ...prev, [section]: data };
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      }
      return updated;
    });
    setHasUnsavedChanges(true);
  };

  const resetToDefaults = () => {
    setSiteContent(INITIAL_CONTENT);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    setHasUnsavedChanges(false);
  };

  const updateGitHubConfig = (partial: Partial<GitHubConfig>) => {
    setGithubConfig(prev => ({ ...prev, ...partial }));
  };

  const openEditorToTab = (tab: string) => {
    setActiveEditorTab(tab);
    setIsEditorDrawerOpen(true);
  };

  // Generates clean TypeScript code ready to overwrite src/data/siteData.ts
  const generateSiteDataCode = (): string => {
    return `import { ServiceItem, IndustryItem, TestimonialItem, FAQItem } from '../types';

export interface VerifiedClient {
  name: string;
  category: string;
  badge?: string;
}

export const BRANDING_DATA = ${JSON.stringify(siteContent.branding, null, 2)};

export const HERO_DATA = ${JSON.stringify(siteContent.hero, null, 2)};

export const VERIFIED_CLIENTS: VerifiedClient[] = ${JSON.stringify(siteContent.clients, null, 2)};

export const OFFICIAL_METRICS = ${JSON.stringify(siteContent.metrics, null, 2)};

export const ALL_SERVICES: ServiceItem[] = ${JSON.stringify(siteContent.services, null, 2)};

export const PROJECTS_DATA = ${JSON.stringify(siteContent.projects, null, 2)};

export const PROCESS_DATA = ${JSON.stringify(siteContent.process, null, 2)};

export const ADVANTAGES_DATA = ${JSON.stringify(siteContent.advantages, null, 2)};

export const INDUSTRIES_SERVED: IndustryItem[] = ${JSON.stringify(siteContent.industries, null, 2)};

export const TESTIMONIALS_DATA: TestimonialItem[] = ${JSON.stringify(siteContent.testimonials, null, 2)};

export const ABOUT_DATA = ${JSON.stringify(siteContent.about, null, 2)};

export const FAQ_DATA: FAQItem[] = ${JSON.stringify(siteContent.faqs, null, 2)};

export const TECH_ECOSYSTEM = [
  { name: 'Google Ads & SEM', category: 'Advertising' },
  { name: 'Meta Marketing API', category: 'Paid Social' },
  { name: 'Next.js 15 & React', category: 'Frontend' },
  { name: 'Three.js & WebGL', category: '3D Spatial' },
  { name: 'OpenAI & Claude API', category: 'AI Models' },
  { name: 'HubSpot & Salesforce', category: 'CRM & Pipeline' },
  { name: 'Python & FastAPI', category: 'Backend' },
  { name: 'Google BigQuery', category: 'Data Warehouse' },
  { name: 'Shopify Plus & Stripe', category: 'E-Commerce' },
  { name: 'Vercel Edge Network', category: 'Infrastructure' }
];

export const CORPORATE_CONTACT = ${JSON.stringify(siteContent.contact, null, 2)};
`;
  };

  return (
    <CMSContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        isEditMode,
        setIsEditMode,
        toggleEditMode,
        siteContent,
        updateSection,
        resetToDefaults,
        hasUnsavedChanges,
        isEditorDrawerOpen,
        setIsEditorDrawerOpen,
        isGitHubModalOpen,
        setIsGitHubModalOpen,
        isLoginModalOpen,
        setIsLoginModalOpen,
        githubConfig,
        updateGitHubConfig,
        generateSiteDataCode,
        activeEditorTab,
        setActiveEditorTab,
        openEditorToTab
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
