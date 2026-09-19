export interface UserProfile {
  name: string;
  title: string;
  secondaryTitle: string;
  shortIntro: string;
  professionalSummary: string;
  fullBio: string;
  avatarUrl: string;
  location: string;
  experienceYears: string;
  education: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  availability: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  university: string;
  years: string;
  cgpa: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  provider: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Professional' | 'Academic' | 'Hackathon' | 'Technical';
  date: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  authorTitle?: string;
  role?: string;
  company: string;
  linkedInUrl?: string;
}

export interface BlogNoteItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  linkUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  technologies: string[];
  responsibilities: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlight?: boolean;
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'FRONTEND' | 'BACKEND' | 'DATABASE' | 'TESTING' | '3D_CREATIVE' | 'TOOLS' | 'AI_ML';
  level: number;
  context: string;
  relatedIds: string[];
  position?: [number, number, number];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Enterprise' | 'Creative Web' | 'AI / Machine Learning' | 'Open Source' | 'Interactive Game';
  featured?: boolean;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  architecture?: string[];
  highlights: string[];
  caseStudy?: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string;
    features: string[];
    frontendEngineering: string;
    backendIntegration: string;
    myContribution: string;
    challenges: string;
    results: string;
    lessons: string;
    future: string;
  };
}

export interface LeetCodeStats {
  username: string;
  problemsSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: string;
  profileUrl: string;
  topLanguages: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  htmlUrl: string;
  topics: string[];
  isArchived: boolean;
}

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface APIResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
}
