/**
 * Application-wide constants
 * Following the pattern of centralized configuration
 */

export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME || 'Shivam Chauhan Portfolio',
  url: import.meta.env.VITE_APP_URL || 'https://yourwebsite.com',
} as const;

export const ROUTES = {
  HOME: '/',
  NOT_FOUND: '*',
} as const;

export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  PROJECTS: 'projects',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  CONTACT: 'contact',
} as const;

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

