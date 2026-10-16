export type ThemeMode = 'light' | 'dark';

export type ThreeSceneMode = 'orbit' | 'helix' | 'matrix';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  metricHeadline: string;
  metricLabel: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  headline: string;
  description: string;
  growthFramework: string[];
  expectedImpact: string;
  caseMetric: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  industry: string;
  rating: number;
  quote: string;
  highlightMetric: string;
  metricDescription: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  timeline: string;
  headline: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  architectureHighlights: string[];
}

export interface AuditPillar {
  id: string;
  title: string;
  score: number;
  status: 'optimal' | 'warning' | 'critical';
  details: string;
  recommendation: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface SimulationParams {
  monthlyVisits: number;
  conversionRate: number;
  dealValue: number;
  horizonMonths: number;
}
