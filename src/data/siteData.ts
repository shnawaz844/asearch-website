import { ServiceItem, IndustryItem, TestimonialItem, FAQItem } from '../types';

export interface VerifiedClient {
  name: string;
  category: string;
  badge?: string;
}

export const VERIFIED_CLIENTS: VerifiedClient[] = [
  { name: 'Microsoft', category: 'Technology', badge: 'Enterprise Cloud' },
  { name: 'Fortis Healthcare', category: 'Healthcare', badge: 'High-Intent Patient Care' },
  { name: 'Nokia', category: 'Telecommunications', badge: 'Global Infrastructure' },
  { name: 'HCL', category: 'Enterprise IT', badge: 'Software & Technology' },
  { name: 'Yatra', category: 'Travel & Tourism', badge: 'Direct Flight & Hotel Search' },
  { name: 'MakeMyTrip', category: 'Online Travel', badge: 'High-Volume Booking' },
  { name: 'Isango!', category: 'Tours & Experiences', badge: 'UK & Global Experiences' },
  { name: 'Aamo', category: 'Digital Retail', badge: 'eCommerce Scaling' },
  { name: 'Apec', category: 'Corporate Services', badge: 'Industrial Solutions' },
  { name: 'Google Partner', category: 'Official Certification', badge: 'Google Certified Partner' }
];

export const OFFICIAL_METRICS = [
  {
    value: '14+',
    label: 'Years of Digital Excellence',
    subtext: 'Pioneering search & growth since 2012'
  },
  {
    value: '110+',
    label: 'Global Clients Worldwide',
    subtext: 'Across US, UK, India, UAE & APAC'
  },
  {
    value: '3.8x',
    label: 'Average Verified ROAS',
    subtext: 'Across paid search & programmatic media'
  },
  {
    value: '+284%',
    label: 'Average Organic Growth',
    subtext: 'Powered by AISEO & knowledge graphs'
  }
];

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'ai-seo',
    number: '01',
    title: 'AI-Driven SEO & AEO (Answer Engine Optimization)',
    category: 'Digital Marketing & Strategy',
    tagline: 'Semantic entity graphs, LLM citation retrieval (SearchGPT, Perplexity, Gemini), and organic dominance.',
    description: 'We engineer search dominance through predictive semantic entity modeling, programmatic JSON-LD architectures, and AI Overviews / SearchGPT citation optimization. We transform search traffic from vanity clicks into high-intent inbound pipeline.',
    capabilities: [
      'Semantic Keyword Strategy & Search Intent Modeling',
      'LLM Retrieval & Citation Engineering (SearchGPT, Google SGE, Perplexity)',
      'Automated Technical SEO Audits & Core Web Vitals Optimization',
      'High-Authority Digital PR & Ethical Backlink Architecture',
      'Programmatic Schema.org Knowledge Graph Integration',
      'Mobile SEO, App Store Optimization (ASO) & Video SEO'
    ],
    deliverables: [
      'Comprehensive Technical Audit & Remediation Roadmap',
      'Programmatic Knowledge Graph & Schema Deployment',
      'AI Citation Tracker & SERP Feature Monitor',
      'Monthly High-Authority Backlink Portfolios'
    ],
    technologies: ['Google Search Console', 'Ahrefs Enterprise', 'Schema.org JSON-LD', 'Semrush API', 'OpenAI Embeddings'],
    metricHeadline: '+284%',
    metricLabel: 'Average 6-Month Organic Traffic & Lead Expansion'
  },
  {
    id: 'paid-media',
    number: '02',
    title: 'Paid Media & Programmatic Advertising',
    category: 'Digital Marketing & Strategy',
    tagline: 'Algorithmic bidding across Google, Meta, TikTok, and LinkedIn to maximize ROAS.',
    description: 'Stop burning ad budget on low-intent clicks. Our machine-learning media buying frameworks dynamically allocate capital to top-performing audience cohorts, automate negative keyword scrubbing, and scale profitable acquisition across search, social, and programmatic display.',
    capabilities: [
      'Google Ads & Microsoft Bing Search Engine Marketing (SEM)',
      'Meta (Facebook & Instagram) Predictive Scaling & Dynamic Creative Ads',
      'High-Value B2B LinkedIn & Account-Based Marketing (ABM)',
      'High-Engagement TikTok Video Ad Scaling & YouTube Campaigns',
      'Algorithmic Real-Time Bid Optimization & Negative Query Scraping',
      'Multi-Touch Conversion API (CAPI) & Offline Conversion Import (OCI)'
    ],
    deliverables: [
      'Custom Multi-Channel Ad Account Restructuring',
      'Daily AI Bid & Budget Rebalancing Script Suite',
      'Dynamic Creative Matrix & Ad Variation Sets',
      'Live Profitability & ROAS Dashboard'
    ],
    technologies: ['Google Ads API', 'Meta Conversions API', 'LinkedIn Campaign Manager', 'TikTok for Business', 'Triple Whale'],
    metricHeadline: '3.8x',
    metricLabel: 'Average Return on Ad Spend (ROAS)'
  },
  {
    id: 'cro',
    number: '03',
    title: 'Conversion Rate Optimization (CRO)',
    category: 'Digital Marketing & Strategy',
    tagline: 'Heatmap analysis, user session recordings, and scientific multivariate A/B testing.',
    description: 'Getting traffic is only half the battle. Our CRO team analyzes microscopic friction points in your funnel using session analytics and user psychology to re-engineer landing pages and checkout flows that convert visitors into revenue.',
    capabilities: [
      'Full-Funnel Heatmap, Scroll-Depth & Session Recording Audits',
      'Scientific A/B & Multivariate Hypothesis Testing Harnesses',
      'High-Impact UX/UI Friction Elimination & Mobile Streamlining',
      'Dynamic Value Proposition & Micro-Copy Experimentation',
      'Checkout Flow & High-Ticket Form Optimization',
      'Exit-Intent & Micro-Conversion Rescue Mechanisms'
    ],
    deliverables: [
      'Deep CRO Friction Audit with Priority Impact Matrix',
      'Bi-Weekly Multivariate Experiment Deployments',
      'High-Converting Wireframes & Component Redesigns',
      'Statistical Significance & Lift Verification Reports'
    ],
    technologies: ['Hotjar', 'Microsoft Clarity', 'VWO', 'Google Analytics 4', 'FullStory'],
    metricHeadline: '+42%',
    metricLabel: 'Average Checkout & Lead Capture Rate Increase'
  },
  {
    id: 'social-media',
    number: '04',
    title: 'Social Media Growth & Community Activation',
    category: 'Digital Marketing & Strategy',
    tagline: 'Omni-channel audience intelligence, influencer syndication, and viral engagement.',
    description: 'We connect social attention directly with commercial intent. From viral short-form video production to strategic influencer partnerships, we build loyal digital communities that advocate for your brand and drive recurring sales.',
    capabilities: [
      'Multi-Platform Organic & Paid Synergy (LinkedIn, Instagram, YouTube, X, TikTok)',
      'High-Authority Key Opinion Leader (KOL) & Influencer Collaborations',
      'Automated Community Management & Instant Lead Response Bots',
      'Short-Form Video Production (Reels, TikTok, YouTube Shorts)',
      'Brand Social Listening, Sentiment Analysis & Trend Interception',
      'Employee Advocacy & Executive Thought Leadership Programs'
    ],
    deliverables: [
      'Monthly Content Calendar & Production Asset Matrix',
      'Vetted Influencer Outreach & Contract Management',
      'Automated DM Lead Generation Funnels',
      'Comprehensive Social Engagement & Reach Reports'
    ],
    technologies: ['Brandwatch', 'Sprout Social', 'CapCut Pro', 'ManyChat', 'LinkedIn Sales Navigator'],
    metricHeadline: '5.2M+',
    metricLabel: 'Organic Social Impressions Generated Monthly'
  },
  {
    id: 'brand-strategy',
    number: '05',
    title: 'Brand Strategy & Creative Design',
    category: 'Digital Marketing & Strategy',
    tagline: 'Distinctive visual identities, commercial messaging frameworks, and UI design systems.',
    description: 'In crowded markets, visual distinction is your ultimate moat. We forge cohesive brand systems, compelling positioning narratives, and modular design components that elevate perceived value and instill consumer trust.',
    capabilities: [
      'Brand Architecture, Core Positioning & Messaging Hierarchies',
      'Modern Logo Design, Typography Pairings & Color Systems',
      'Comprehensive Multi-Device UI/UX Design Systems (Figma)',
      'Commercial Pitch Decks & Digital Launch Collateral',
      'Custom Iconography, 3D Assets & Vector Illustration Sets',
      'Complete Brand Guidelines & Digital Asset Styleguides'
    ],
    deliverables: [
      'Master Brand Book & Vector Identity Assets',
      'Production-Ready Figma Design System & Tokens',
      'Marketing Collateral & Digital Advertising Kits',
      'Website Design Prototypes with Micro-Interactions'
    ],
    technologies: ['Figma', 'Adobe Creative Cloud', 'Design Tokens', 'Storybook', 'Spline 3D'],
    metricHeadline: '+88%',
    metricLabel: 'Increase in Perceived Brand Trust & Premium Pricing Power'
  },
  {
    id: 'b2b-marketing',
    number: '06',
    title: 'B2B Digital Marketing & ABX',
    category: 'Digital Marketing & Strategy',
    tagline: 'Account-Based Experience (ABX), buying-group orchestration, and intent data.',
    description: 'Shift from generic lead gen to Account-Based Experience. We orchestrate targeted multi-touch campaigns for buying groups in enterprise accounts, using intent signals to close 6- and 7-figure deals faster.',
    capabilities: [
      'Account-Based Experience (ABX) & Buying Group Orchestration',
      'First-Party & Third-Party Intent Signal Activation (Bombora, 6sense)',
      'High-Value LinkedIn InMail & Retargeting Cadences',
      'Executive Whitepaper & Technical Deep-Dive Authority Assets',
      'Sales-Marketing Alignment (SLA) & CRM Lead Scoring',
      'Enterprise Pipeline Velocity Acceleration'
    ],
    deliverables: [
      'Target Account Tier List & Buying Committee Mapping',
      'Personalized Content Hubs for Tier-1 Accounts',
      'Multi-Touch Attribution Dashboard for Enterprise Deals',
      'Executive Briefing Packs & Pitch Assets'
    ],
    technologies: ['LinkedIn Campaign Manager', 'HubSpot Enterprise', '6sense', 'Salesforce CRM', 'Clearbit'],
    metricHeadline: '4.8x',
    metricLabel: 'Enterprise Pipeline Expansion'
  },
  {
    id: 'ecommerce-growth',
    number: '07',
    title: 'eCommerce Growth & Scaling',
    category: 'Digital Marketing & Strategy',
    tagline: 'Full-funnel catalog advertising, merchant feed SEO, and customer retention.',
    description: 'Bridge the gap between ad spend and bottom-line profit. We optimize your shopping feeds, automate high-intent retargeting, and build post-purchase retention cadences that multiply customer lifetime value.',
    capabilities: [
      'Google Shopping & Performance Max Feed Optimization',
      'Meta Dynamic Product Ads with Real-Time Stock Sync',
      'Klaviyo Automated Post-Purchase & Win-Back Cadences',
      'Amazon Sponsored Ads & Marketplace Optimization',
      'Average Order Value (AOV) & Bundling Optimization',
      'Customer Retention, VIP Tiers & Subscription Lifecycles'
    ],
    deliverables: [
      'Clean Merchant Center Feed with Automated Rule Enhancements',
      'Full-Funnel Paid Social & Search Campaign Matrix',
      'Lifecycle Email Automations (Browse, Cart, Post-Purchase)',
      'Profitability & Contribution Margin Dashboard'
    ],
    technologies: ['Shopify Plus', 'Google Merchant Center', 'Meta Commerce Manager', 'Klaviyo', 'Triple Whale'],
    metricHeadline: '+180%',
    metricLabel: 'Monthly Revenue Growth for Scale-Ups'
  },
  {
    id: 'marketing-automation',
    number: '08',
    title: 'Marketing Automation & Workflows',
    category: 'Technology & Automation Solutions',
    tagline: 'AI-powered email workflows, dynamic send-time triggers, and predictive lead scoring.',
    description: 'Turn cold inquiries into closed-won accounts automatically. We architect intelligent multi-channel nurture flows that react in real-time to user behavioral signals, delivering personalized content that accelerates sales cycles.',
    capabilities: [
      'AI-Powered Email Marketing Automation & Dynamic Copy Adaptation',
      'Intelligent Send-Time Optimization (STO) & Behavioral Triggers',
      'Predictive Inbound Lead Scoring & Real-Time Sales Alerts',
      'Multi-Channel SMS & WhatsApp Business API Automations',
      'Automated Customer Re-engagement & Win-Back Cadences',
      'Two-Way CRM Synchronization & Pipeline Stage Handshakes'
    ],
    deliverables: [
      'Custom Behavioral Lifecycle Automation Workflows',
      'Dynamic Email & Message Template Library',
      'Automated Lead Qualification & Grading System',
      'Sales SLA Real-Time Notification Webhooks'
    ],
    technologies: ['Klaviyo', 'HubSpot Marketing Hub', 'ActiveCampaign', 'Make.com / Zapier', 'Twilio'],
    metricHeadline: '+165%',
    metricLabel: 'Lift in Email-Attributed Recurring Revenue'
  },
  {
    id: 'web-development',
    number: '09',
    title: 'Web Experience & Platform Development',
    category: 'Technology & Automation Solutions',
    tagline: 'Next.js, React, and headless architectures engineered for sub-second page loads.',
    description: 'We construct lightning-fast, visually captivating digital storefronts and corporate platforms that deliver 99+ Core Web Vitals scores, seamless mobile fluidity, and instant client-side interactions.',
    capabilities: [
      'Modern Next.js / React Edge-Rendered Web Applications',
      'Headless CMS Integrations (Sanity, Strapi, Contentful)',
      'Sub-500ms Time-to-First-Byte (TTFB) & Zero Layout Shift (CLS)',
      'Enterprise Headless Shopify & Custom E-Commerce Engines',
      'Interactive 3D / WebGL Product Visualizers that Boost Dwell Time',
      'Continuous Deployment, Auto-Scaling & Global CDN Caching'
    ],
    deliverables: [
      'Complete Production Next.js / TypeScript Codebase',
      'Tailwind CSS High-Fidelity Responsive Component Library',
      'Lighthouse 98+ Guaranteed Performance Score',
      'Full CI/CD Pipeline & Zero-Downtime Deployment Setup'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel / AWS CloudFront', 'Three.js'],
    metricHeadline: '< 0.4s',
    metricLabel: 'P95 Core Web Vitals Load & Paint Latency'
  },
  {
    id: 'custom-software',
    number: '10',
    title: 'Custom Software & Enterprise CRM',
    category: 'Technology & Automation Solutions',
    tagline: 'Bespoke enterprise applications, secure REST/GraphQL APIs, and custom CRM systems.',
    description: 'When off-the-shelf software falls short, ASearch Online engineers robust, proprietary software platforms tailored to your operational workflows, including custom portals, middleware pipelines, and scalable microservices.',
    capabilities: [
      'Custom Enterprise Software Architecture & Cloud Infrastructure',
      'Secure High-Throughput REST & GraphQL API Engineering',
      'Bespoke CRM Systems, Client Portals & Partner Dashboards',
      'Legacy System Modernization & Seamless Database Migrations',
      'Automated Quality Assurance, Unit Testing & Security Audits',
      'Role-Based Access Control (RBAC) & Enterprise SOC2 Compliance'
    ],
    deliverables: [
      'Architectural Blueprint & Data Entity Relationship Diagram',
      'Production API Endpoints with OpenAPI Documentation',
      'Custom Administrative Backoffice & Role Management',
      'Containerized Docker & Kubernetes Deployment Configurations'
    ],
    technologies: ['Node.js', 'Python / FastAPI', 'PostgreSQL', 'Docker', 'GraphQL', 'Salesforce API'],
    metricHeadline: '99.99%',
    metricLabel: 'Guaranteed System Uptime & Operational Reliability'
  },
  {
    id: 'ar-vr',
    number: '11',
    title: 'AR & VR Immersive Solutions',
    category: 'Technology & Automation Solutions',
    tagline: 'Interactive 3D web configurations, virtual showrooms, and augmented reality demos.',
    description: 'Differentiate your brand with next-generation spatial computing. We develop browser-based 3D visualizers, augmented reality product placements, and virtual spaces that captivate customers and multiply buyer confidence.',
    capabilities: [
      'Zero-Plugin WebGL & WebXR Interactive Product Viewers',
      'Photorealistic 3D Model Optimization & PBR Texture Baking',
      'Web-Based Augmented Reality (WebAR) Real-Scale Floor Placement',
      'Interactive Virtual Showrooms & Architectural Walkthroughs',
      'Spatial E-Commerce 360-Degree Customization Engines',
      'Cross-Platform Compatibility Across Desktop, iOS & Android'
    ],
    deliverables: [
      'Ultra-Lightweight 3D WebGL Embed Modules',
      'Interactive Material & Finish Swatch Systems',
      'WebAR Quick-Look Assets (USDZ & GLB)',
      '3D Dwell Time & Interaction Analytics Integration'
    ],
    technologies: ['Three.js', 'WebGL 2.0', 'Blender', 'WebXR API', 'glTF / USDZ'],
    metricHeadline: '3.1x',
    metricLabel: 'Increase in On-Site Visitor Dwell Time'
  },
  {
    id: 'analytics-data',
    number: '12',
    title: 'Analytics & Data Engineering',
    category: 'Technology & Automation Solutions',
    tagline: 'Cross-channel attribution, predictive LTV models, and real-time business intelligence.',
    description: 'Empower your leadership with real-time clarity. We consolidate fragmented marketing data into a single source of truth, building predictive forecasting models that clarify exact marketing ROI and customer lifetime value.',
    capabilities: [
      'Server-Side Google Analytics 4 (GA4) & Tag Manager Deployment',
      'Multi-Touch Attribution Modeling (First-Click, Linear, Algorithmic)',
      'Customer Lifetime Value (LTV) & Cohort Retention Modeling',
      'BigQuery & Snowflake Centralized Data Warehousing',
      'Automated Executive BI Dashboards (Looker Studio, Tableau)',
      'Customer Data Platform (CDP) Sync & Data Hygiene Protocols'
    ],
    deliverables: [
      'Server-Side GTM & GA4 Infrastructure Setup',
      'Centralized Data Warehouse Schema & ETL Pipelines',
      'Interactive Executive ROI & Pipeline Dashboards',
      'Predictive Customer Churn & Expansion Models'
    ],
    technologies: ['Google BigQuery', 'Looker Studio', 'Segment CDP', 'dbt', 'Python Pandas', 'GA4'],
    metricHeadline: '100%',
    metricLabel: 'Deterministic Multi-Channel Revenue Attribution'
  }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'tech-saas',
    name: 'Information Technology & SaaS',
    iconName: 'Cpu',
    headline: 'Scaling Enterprise Pipeline & Reducing Sales Cycle Friction',
    description: 'We help B2B software companies capture high-intent buyers searching for alternative solutions, optimize demo conversion funnels, and dominate category search queries.',
    growthFramework: [
      'Category Entity Dominance in SearchGPT & Google SGE',
      'High-Intent Competitor Interception Paid Campaigns',
      'Sub-2-Minute Automated Inbound Demo Booking',
      'Predictive Account-Based Marketing (ABM) on LinkedIn'
    ],
    expectedImpact: '4.8x Pipeline Multiplier',
    caseMetric: '$4.8M incremental ARR generated for Cloud Infrastructure client'
  },
  {
    id: 'ecommerce-retail',
    name: 'eCommerce & Modern Retail',
    iconName: 'ShoppingBag',
    headline: 'High-Volume Dynamic Bidding & Seamless Mobile Checkout',
    description: 'Transform your storefront into an automated revenue engine with programmatic product feed SEO, real-time ROAS optimization, and high-framerate mobile performance.',
    growthFramework: [
      'Automated Merchant Feed Optimization for Google Shopping',
      'Meta Dynamic Product Ads with Real-Time Inventory Sync',
      'Sub-400ms Headless Next.js Storefront Redesign',
      'Automated Cart Abandonment & VIP Customer Win-Back'
    ],
    expectedImpact: '3.4x Verified ROAS',
    caseMetric: '+180% surge in monthly transacting customers within 90 days'
  },
  {
    id: 'hospitality-travel',
    name: 'Hospitality & Luxury Travel',
    iconName: 'Compass',
    headline: 'Direct Booking Engine Optimization & High-Value Guest Capture',
    description: 'Bypass hefty OTA commissions. We capture affluent travelers directly through immersive 3D destination experiences, localized search supremacy, and high-converting booking flows.',
    growthFramework: [
      'Hyper-Local Multi-Language SEO for Luxury Resorts',
      'Interactive 3D Virtual Suite Tours Powered by WebGL',
      'Precision Geo-Fenced PPC for High-Net-Worth Travelers',
      'Automated Post-Stay VIP Loyalty & Referral Loops'
    ],
    expectedImpact: '-35% OTA Commission Loss',
    caseMetric: 'Direct bookings grew from 22% to 64% of total reservations'
  },
  {
    id: 'healthcare-fintech',
    name: 'Healthcare & Medical Systems',
    iconName: 'ShieldCheck',
    headline: 'High-Intent Patient Acquisition & Medical Authority Architecture',
    description: 'In healthcare, patient trust and immediate access dictate success. We deploy compliant local and specialty medical SEO, high-intent appointment booking funnels, and authority medical content.',
    growthFramework: [
      'Specialist & Procedure Keyword Clustering with E-E-A-T Compliance',
      'Sub-Minute Online Consultation & Appointment Booking Flows',
      'Geo-Targeted Emergency & Urgent Care Paid Search Campaigns',
      'Verified Patient Review & Doctor Credibility Syndication'
    ],
    expectedImpact: '+284% Patient Bookings',
    caseMetric: 'Fortis Healthcare specialty patient inbound grew by 284%'
  },
  {
    id: 'power-energy',
    name: 'Power & Energy Solutions',
    iconName: 'Zap',
    headline: 'Industrial B2B Procurement Lead Generation & Sustainability Proof',
    description: 'Connect with commercial enterprise decision-makers, government procurement leads, and industrial utility buyers through authority-driven technical SEO and B2B paid media.',
    growthFramework: [
      'Technical Whitepaper Authority SEO & Semantic White Papers',
      'Targeted Energy Procurement Account Advertising',
      'Interactive Commercial ROI & Carbon Savings Calculator',
      'Automated Lead Qualification & Engineering Hand-off'
    ],
    expectedImpact: '+220% Commercial Inquiries',
    caseMetric: 'Secured 3 tier-1 municipal utility contracts via targeted search capture'
  },
  {
    id: 'education-edtech',
    name: 'Education & EdTech',
    iconName: 'GraduationCap',
    headline: 'Student Enrollment Scaling & Course Acquisition Economics',
    description: 'Scale enrollment volumes while controlling acquisition costs through intent-based search campaigns, dynamic course landing pages, and automated student onboarding.',
    growthFramework: [
      'Curriculum Keyword Cluster SEO & Accreditation Trust Signals',
      'High-Intent Career Search Google Ads with Daily Bidding Scripts',
      'Interactive Tuition ROI & Career Outcome Visualizer',
      'Multi-Touch WhatsApp & Email Student Engagement Cadences'
    ],
    expectedImpact: '-44% Cost Per Enrollment',
    caseMetric: '12,000+ certified student enrollments scaled in two consecutive semesters'
  },
  {
    id: 'consumer-electronics',
    name: 'Consumer Electronics & Hardware',
    iconName: 'Smartphone',
    headline: 'Pre-Order Launches, Review Amplification & Retail Momentum',
    description: 'Generate massive product drop demand through viral short-form video campaigns, 3D interactive feature breakdowns, and automated pre-order funnel optimization.',
    growthFramework: [
      'Interactive 3D Exploded-View Product Teasers on Next.js',
      'KOL Tech Reviewer Partnerships & YouTube Video SEO',
      'Global Launch Retargeting Funnels Across Meta & TikTok',
      'Dynamic Pre-Order Waitlist Systems with Referral Bonuses'
    ],
    expectedImpact: '6.2x Pre-Order Velocity',
    caseMetric: 'Sold out 25,000 initial production units in under 72 hours'
  },
  {
    id: 'non-profit',
    name: 'Non-Profit (NGO) & Associations',
    iconName: 'HeartHandshake',
    headline: 'Donor Acquisition Scaling & Google Ad Grants Mastery',
    description: 'Maximize donor contributions and philanthropic awareness. We optimize the $10,000/mo Google Ad Grant program, build emotional storytelling funnels, and streamline recurring giving.',
    growthFramework: [
      'Complete Google Ad Grants Optimization & Quality Score Maximization',
      'Frictionless 1-Click Monthly Recurring Donor Form Redesign',
      'Documentary-Style Social Video Storytelling with Instant Action Links',
      'Automated Impact Reports & Donor Appreciation Journeys'
    ],
    expectedImpact: '$120k/yr Max Grants Capture',
    caseMetric: 'Scaled recurring monthly donor base by +310% over 12 months'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Deepak Taneja',
    clientRole: 'Enterprise Technology Director',
    companyName: 'Microsoft',
    industry: 'Information Technology & Cloud',
    rating: 5,
    quote: 'The ASearch team demonstrated exceptional technical agility, creativity, and commitment. Their strategic execution, performance engineering, and seamless communication made them an invaluable partner in scaling our digital initiatives.',
    highlightMetric: '100%',
    metricDescription: 'Strategic Delivery & Seamless Agility'
  },
  {
    id: 'test-2',
    clientName: 'Madhusmita Behera',
    clientRole: 'Head of Digital Marketing',
    companyName: 'Fortis Healthcare',
    industry: 'Healthcare & Medical Systems',
    rating: 5,
    quote: 'ASearch revolutionized our patient acquisition strategy. Their data-driven organic search framework, technical SEO audits, and conversion engineering delivered extraordinary improvements in patient trust, inquiry quality, and confirmed appointment volume.',
    highlightMetric: '+284%',
    metricDescription: 'Specialty Patient Inbound Expansion'
  },
  {
    id: 'test-3',
    clientName: 'Sanjay Krishnan',
    clientRole: 'Global Digital Growth Lead',
    companyName: 'HCL Technologies',
    industry: 'Enterprise Software & IT',
    rating: 5,
    quote: 'Working with ASearch transformed how we target high-value B2B enterprise procurement leads. Their account-based marketing workflows and search entity modeling generated over $4.8M in verified qualified pipeline.',
    highlightMetric: '$4.8M+',
    metricDescription: 'Verified Enterprise Pipeline Generated'
  },
  {
    id: 'test-4',
    clientName: 'Vikram Batra',
    clientRole: 'VP of Performance Marketing',
    companyName: 'Yatra Online',
    industry: 'Travel & Hospitality',
    rating: 5,
    quote: 'ASearch Online proved that ad spend does not have to be a black box. Their predictive bidding models and programmatic search campaigns drove our blended ROAS to 3.8x while cutting customer acquisition latency in half.',
    highlightMetric: '3.8x',
    metricDescription: 'Verified Blended ROAS Achieved'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How does ASearch Online differ from traditional digital marketing agencies?',
    answer: 'Unlike traditional agencies that rely on manual guesswork, fragmented freelancers, and vanity metrics, ASearch Online is a technology-led growth agency with 14+ years of proven delivery. We combine software engineering, machine-learning bid scripts, programmatic SEO entity graphs, and custom Next.js web platforms to deliver deterministic, revenue-backed outcomes for over 110+ clients worldwide.',
    category: 'General'
  },
  {
    question: 'What is AI-Driven SEO (AISEO) and how does it prepare us for SearchGPT & Google AI Overviews?',
    answer: 'Modern search engines and AI answer engines (Perplexity, SearchGPT, Gemini, Google SGE) no longer rely on simple keyword density. They synthesize information through semantic knowledge graphs and authoritative entity relationships. We construct programmatic Schema.org markup, semantic topic networks, and verified citations so your brand is consistently cited as the primary answer source.',
    category: 'SEO'
  },
  {
    question: 'What verified results has ASearch Online achieved for enterprise clients?',
    answer: 'We have partnered with category giants including Microsoft, Fortis Healthcare, Nokia, HCL, Yatra, and MakeMyTrip. Our engagements routinely deliver 3.8x average ROAS, +284% organic search visibility expansion, and multi-million dollar incremental sales pipeline.',
    category: 'Results'
  },
  {
    question: 'What is the process for scheduling a Free Strategy Call?',
    answer: 'Simply click "Book Free Strategy Call" or fill out our direct inquiry form. An ASearch senior growth architect will conduct a complimentary pre-call audit of your domain, identifying your core traffic leakage points, paid media waste, and architectural bottlenecks, presenting a prioritized 90-day roadmap on the call.',
    category: 'Engagement'
  },
  {
    question: 'Where are ASearch Online corporate offices located?',
    answer: 'ASearch Online operates under ASEARCH ONLINE MEDIA PRIVATE LIMITED and ASEARCH ONLINE TECHNOLOGY PRIVATE LIMITED. Our New Delhi corporate office is located at 2nd Floor, Enterprise House, D-128-129, Okhla Phase 1, New Delhi 110020, with regional offices in Hyderabad (D-808, Manjeera Diamonds, Nallagandla) and East Delhi (Pandav Nagar Complex). Call us directly at +91-9573194350 or +91-11-40513772.',
    category: 'Company'
  }
];

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

export const CORPORATE_CONTACT = {
  registeredName: 'ASEARCH ONLINE MEDIA PRIVATE LIMITED',
  incorporationDate: 'July 13, 2017',
  yearsActive: '14+ Years of Industry Leadership',
  phones: [
    { label: 'Direct Line / WhatsApp', number: '+91-9573194350', raw: '+919573194350' },
    { label: 'Delhi Corporate PBX', number: '+91-11-40513772', raw: '+911140513772' }
  ],
  emails: [
    { label: 'General & Client Inquiries', address: 'info@asearchonline.com' },
    { label: 'Leadership / Strategic Partnerships', address: 'akram@asearchonline.com' }
  ],
  locations: [
    {
      city: 'New Delhi (Corporate Office)',
      address: '2nd Floor, Enterprise House, D-128-129, Okhla Phase 1',
      landmark: 'Near Crown Plaza & Okhla Phase 1 Police Station',
      pincode: 'New Delhi, 110020, India'
    },
    {
      city: 'Hyderabad (Regional Technology Hub)',
      address: 'D-808, Manjeera Diamonds, Nallagandla',
      landmark: 'Gachibowli Tech Corridor',
      pincode: 'Hyderabad, Telangana - 500046, India'
    },
    {
      city: 'Registered Corporate Entity',
      address: 'NO. D-370-371, Ganesh Nagar, Pandav Nagar Complex',
      landmark: 'East Delhi',
      pincode: 'Delhi, 110092, India'
    }
  ]
};
