import { Dimension } from 'src/common/enum/dimensions.enum';

export interface Persona {
  title: string;
  description: string;
  strengths: string[];
  learningStyle: string;
}

export const PERSONA_MAP: Record<Dimension, Persona> = {
  TECH: {
    title: 'System Builder',
    description:
      'You enjoy building things that work reliably, solving problems with logic, and making systems run smoothly.',

    strengths: [
      'Problem solving',
      'Logical thinking',
      'Debugging',
      'System design',
    ],
    learningStyle: 'Hands-on coding and experimentation',
  },

  DATA: {
    title: 'Insight Seeker',
    description:
      'You love finding patterns in data, understanding why things happen, and turning information into clarity.',

    strengths: [
      'Analytical thinking',
      'Pattern recognition',
      'Research mindset',
    ],
    learningStyle: 'Learning through analysis and observation',
  },

  DESIGN: {
    title: 'Experience Creator',
    description:
      'You care about how things look, feel, and connect emotionally with people.',

    strengths: ['Creativity', 'Visual thinking', 'User empathy'],
    learningStyle: 'Learning by creating and iterating visuals',
  },

  CORE: {
    title: 'Practical Engineer',
    description:
      'You like understanding how things work in the real world and solving hands-on problems.',
    strengths: ['Mechanical reasoning', 'Real-world application'],
    learningStyle: 'Learning by building and testing physically',
  },

  MGMT: {
    title: 'Team Driver',
    description:
      'You naturally lead, coordinate people, and keep teams moving toward the goal.',

    strengths: ['Leadership', 'Communication', 'Decision making'],
    learningStyle: 'Learning through collaboration and execution',
  },

  BIZ: {
    title: 'Strategic Thinker',
    description:
      'You think ahead, spot opportunities, and enjoy turning ideas into impact.',

    strengths: ['Strategic thinking', 'Negotiation', 'Vision'],
    learningStyle: 'Learning through case studies and real-world problems',
  },

  SOCIAL: {
    title: 'Community Anchor',
    description:
      'You care about people, teamwork, and creating positive change around you.',

    strengths: ['Empathy', 'Teamwork', 'Social awareness'],
    learningStyle: 'Learning through interaction and service',
  },

  LANG: {
    title: 'Cultural Communicator',
    description:
      'You express ideas clearly through language, culture, and storytelling.',

    strengths: ['Communication', 'Storytelling', 'Cultural awareness'],
    learningStyle: 'Learning through discussion and expression',
  },

  CYBER: {
    title: 'Digital Defender',
    description:
      'You enjoy protecting systems, thinking ahead of risks, and keeping things secure.',

    strengths: ['Security mindset', 'Risk analysis'],
    learningStyle: 'Learning through simulations and challenges',
  },

  IOT: {
    title: 'Smart Builder',
    description:
      'You enjoy combining hardware and software to create intelligent solutions.',

    strengths: ['Hardware-software integration', 'Automation'],
    learningStyle: 'Learning by prototyping',
  },

  WORKAHOLIC: {
    title: 'Deep Focused Mind',
    description:
      'You are highly focused, disciplined, and driven to master complex subjects.',

    strengths: ['Focus', 'Persistence'],
    learningStyle: 'Learning through deep study',
  },
};
