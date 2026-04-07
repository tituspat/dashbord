export type ProjectCategory = "Product" | "Business / Strategy" | "Technical";

export type ImpactMetric = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  name: string;
  title: string;
  intro: string;
  availability: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  stats: ImpactMetric[];
};

export type Capability = {
  title: string;
  summary: string;
  points: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  previewHook: string;
  previewImpact: ImpactMetric[];
  previewRole: string;
  coverStyle?: string;
  tools?: string[];
  impactHighlights?: string[];
  documentLabel?: string;
  problem: string;
  contextRole: string;
  solution: string[];
  impactMetrics: ImpactMetric[];
  keyLearnings: string[];
  prdUrl?: string;
  featured: boolean;
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  lane: string;
  impact: string;
};

export type SkillGroup = {
  category: string;
  summary: string;
  items: string[];
};

export type ResumeInfo = {
  note: string;
  viewUrl?: string;
  downloadUrl?: string;
};

export type ContactInfo = {
  email: string;
  linkedInUrl: string;
  location: string;
};

export type SiteContent = {
  hero: HeroContent;
  capabilities: Capability[];
  projects: Project[];
  experiences: Experience[];
  skillGroups: SkillGroup[];
  resume: ResumeInfo;
  contact: ContactInfo;
};
