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
    description: 'Builds clean systems and fixes what others can’t.',
    strengths: ['Problem solving', 'Logic', 'Debugging'],
    learningStyle: 'Hands-on building',
  },

  DATA: {
    title: 'Data Detective',
    description: 'Finds hidden patterns and turns numbers into answers.',
    strengths: ['Analysis', 'Pattern spotting'],
    learningStyle: 'Learning through data',
  },

  DESIGN: {
    title: 'Visual Thinker',
    description: 'Designs experiences that feel simple and human.',
    strengths: ['Creativity', 'UX thinking'],
    learningStyle: 'Creating & iterating',
  },

  CORE: {
    title: 'Hands-on Engineer',
    description: 'Learns by building, testing, and fixing things.',
    strengths: ['Practical skills', 'Real-world thinking'],
    learningStyle: 'Learning by doing',
  },

  MGMT: {
    title: 'Team Leader',
    description: 'Keeps people aligned and projects moving.',
    strengths: ['Leadership', 'Decision making'],
    learningStyle: 'Collaboration',
  },

  BIZ: {
    title: 'Growth Strategist',
    description: 'Spots opportunities and turns ideas into impact.',
    strengths: ['Vision', 'Strategy'],
    learningStyle: 'Real-world cases',
  },

  SOCIAL: {
    title: 'People Builder',
    description: 'Creates positive impact through teamwork.',
    strengths: ['Empathy', 'Collaboration'],
    learningStyle: 'Learning with people',
  },

  LANG: {
    title: 'Story Crafter',
    description: 'Expresses ideas clearly through words.',
    strengths: ['Communication', 'Storytelling'],
    learningStyle: 'Discussion & expression',
  },

  CYBER: {
    title: 'Cyber Guardian',
    description: 'Thinks ahead to keep systems safe.',
    strengths: ['Security mindset', 'Risk thinking'],
    learningStyle: 'Challenges & simulations',
  },

  IOT: {
    title: 'Tech Tinkerer',
    description: 'Builds smart things using hardware and code.',
    strengths: ['Prototyping', 'Automation'],
    learningStyle: 'Hands-on prototyping',
  },

  WORKAHOLIC: {
    title: 'Deep Thinker',
    description: 'Stays focused and masters tough problems.',
    strengths: ['Focus', 'Consistency'],
    learningStyle: 'Deep study',
  },
};
