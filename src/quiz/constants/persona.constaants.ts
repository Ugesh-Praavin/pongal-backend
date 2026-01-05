import { Dimension } from 'src/common/enum/dimensions.enum';

export interface Persona {
  title: string;
  description: string;
  strengths: string[];
  learningStyle: string;
}

export const PERSONA_MAP: Record<Dimension, Persona> = {
  TECH: {
    title: 'Cool Engineer',
    description: 'Builds things that just work.',
    strengths: ['Logic', 'Systems'],
    learningStyle: 'By building',
  },

  DATA: {
    title: 'Data Ninja',
    description: 'Finds meaning in numbers.',
    strengths: ['Analysis', 'Patterns'],
    learningStyle: 'By analyzing',
  },

  DESIGN: {
    title: 'Design Wizard',
    description: 'Makes things look and feel right.',
    strengths: ['Creativity', 'UX'],
    learningStyle: 'By creating',
  },

  CORE: {
    title: 'Hands-On Pro',
    description: 'Learns by doing, not watching.',
    strengths: ['Practical skills'],
    learningStyle: 'By doing',
  },

  MGMT: {
    title: 'Team Captain',
    description: 'Keeps the team moving.',
    strengths: ['Leadership'],
    learningStyle: 'By leading',
  },

  BIZ: {
    title: 'Idea Hustler',
    description: 'Turns ideas into impact.',
    strengths: ['Strategy'],
    learningStyle: 'By real cases',
  },

  SOCIAL: {
    title: 'People Person',
    description: 'Builds impact through people.',
    strengths: ['Empathy'],
    learningStyle: 'By interacting',
  },

  LANG: {
    title: 'Word Master',
    description: 'Speaks ideas clearly.',
    strengths: ['Communication'],
    learningStyle: 'By expression',
  },

  CYBER: {
    title: 'Cyber Shield',
    description: 'Keeps systems safe.',
    strengths: ['Security thinking'],
    learningStyle: 'By challenges',
  },

  IOT: {
    title: 'Tech Tinkerer',
    description: 'Builds smart things.',
    strengths: ['Prototyping'],
    learningStyle: 'By prototyping',
  },

  WORKAHOLIC: {
    title: 'Deep Focus',
    description: 'Locked in. No distractions.',
    strengths: ['Focus'],
    learningStyle: 'By deep work',
  },
};
