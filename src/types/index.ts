export interface Profile {
  name: string;
  title: string;
  headline: string;
  tagline: string;
  description1: string;
  description2: string;
  bio: string;
  location: string;
  email: string;
  availability: string;
  resumeUrl: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

