import { Dimension } from 'src/common/enum/dimensions.enum';

export interface Persona {
  title: string;
  description: string;
  strengths: string[];
  learningStyle: string;
}

export const PERSONA_MAP: Record<Dimension, Persona> = {
  TECH: {
    title: 'The System Builder',
    description:
      'You love building reliable systems, writing logic, and making things work end-to-end.',
    strengths: [
      'Problem solving',
      'Logical thinking',
      'Debugging',
      'System design',
    ],
    learningStyle: 'Hands-on coding and experimentation',
  },

  DATA: {
    title: 'The Insight Seeker',
    description:
      'You enjoy analyzing patterns, numbers, and extracting meaning from chaos.',
    strengths: [
      'Analytical thinking',
      'Pattern recognition',
      'Research mindset',
    ],
    learningStyle: 'Learning through analysis and observation',
  },

  DESIGN: {
    title: 'The Experience Creator',
    description:
      'You focus on aesthetics, emotions, and how people experience products.',
    strengths: ['Creativity', 'Visual thinking', 'User empathy'],
    learningStyle: 'Learning by creating and iterating visuals',
  },

  CORE: {
    title: 'The Practical Engineer',
    description:
      'You understand how physical systems work and enjoy hands-on problem solving.',
    strengths: ['Mechanical reasoning', 'Real-world application'],
    learningStyle: 'Learning by building and testing physically',
  },

  MGMT: {
    title: 'The Team Driver',
    description:
      'You naturally take charge, coordinate people, and move ideas forward.',
    strengths: ['Leadership', 'Communication', 'Decision making'],
    learningStyle: 'Learning through collaboration and execution',
  },

  BIZ: {
    title: 'The Strategic Thinker',
    description:
      'You think about growth, strategy, and how ideas turn into impact.',
    strengths: ['Strategic thinking', 'Negotiation', 'Vision'],
    learningStyle: 'Learning through case studies and real-world problems',
  },

  SOCIAL: {
    title: 'The Community Anchor',
    description: 'You care about people, inclusion, and collective progress.',
    strengths: ['Empathy', 'Teamwork', 'Social awareness'],
    learningStyle: 'Learning through interaction and service',
  },

  LANG: {
    title: 'The Cultural Communicator',
    description:
      'You express ideas beautifully through language, culture, and storytelling.',
    strengths: ['Communication', 'Storytelling', 'Cultural awareness'],
    learningStyle: 'Learning through discussion and expression',
  },

  CYBER: {
    title: 'The Digital Defender',
    description:
      'You enjoy securing systems and thinking one step ahead of threats.',
    strengths: ['Security mindset', 'Risk analysis'],
    learningStyle: 'Learning through simulations and challenges',
  },

  IOT: {
    title: 'The Smart Builder',
    description:
      'You enjoy connecting hardware and software to build intelligent systems.',
    strengths: ['Hardware-software integration', 'Automation'],
    learningStyle: 'Learning by prototyping',
  },

  WORKAHOLIC: {
    title: 'The Research Mind',
    description: 'You are deeply focused and driven to master complex topics.',
    strengths: ['Focus', 'Persistence'],
    learningStyle: 'Learning through deep study',
  },
};
