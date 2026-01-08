import { Dimension } from 'src/common/enum/dimensions.enum';

export interface LanguageLove {
  language: string;
  tagline: string;
  reason: string;
}

export const DIMENSION_TO_LANGUAGE: Record<Dimension, LanguageLove> = {
  TECH: {
    language: 'Python',
    tagline: 'Fall in love with Python 🐍',
    reason: 'It lets you build fast and think freely',
  },

  DATA: {
    language: 'Python',
    tagline: 'Fall in love with Python 📊',
    reason: 'Perfect for analysis, patterns, and insights',
  },

  CORE: {
    language: 'C',
    tagline: 'Fall in love with C ⚙️',
    reason: 'Helps you understand how systems really work',
  },

  IOT: {
    language: 'Embedded C',
    tagline: 'Fall in love with Embedded C 🔌',
    reason: 'The heart of hardware and smart devices',
  },

  CYBER: {
    language: 'Python',
    tagline: 'Fall in love with Python 🛡️',
    reason: 'Powerful for security tools and automation',
  },

  DESIGN: {
    language: 'JavaScript',
    tagline: 'Fall in love with JavaScript ✨',
    reason: 'Brings ideas to life on the web',
  },

  MGMT: {
    language: 'Python',
    tagline: 'Fall in love with Python 🚀',
    reason: 'Great for automation and decision-making tools',
  },

  BIZ: {
    language: 'JavaScript',
    tagline: 'Fall in love with JavaScript 💡',
    reason: 'Perfect for building MVPs and startups',
  },

  SOCIAL: {
    language: 'Python',
    tagline: 'Fall in love with Python 🤝',
    reason: 'Easy to learn and powerful to apply',
  },

  LANG: {
    language: 'JavaScript',
    tagline: 'Fall in love with JavaScript 🗣️',
    reason: 'Helps you express ideas through interfaces',
  },

  WORKAHOLIC: {
    language: 'Python',
    tagline: 'Fall in love with Python 🔥',
    reason: 'Lets you stay in deep focus and build fast',
  },
};
