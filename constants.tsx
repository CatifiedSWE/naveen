
import { Project, CapabilityGroup } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Aether OS',
    description: 'A minimal spatial computing interface exploring depth and transparency in desktop environments.',
    tech: ['Next.js', 'Framer Motion', 'Three.js'],
    link: '#'
  },
  {
    id: '02',
    title: 'Lumina Dashboard',
    description: 'Real-time telemetry visualization for autonomous drone swarms using low-latency websocket protocols.',
    tech: ['React', 'D3.js', 'Go'],
    link: '#'
  },
  {
    id: '03',
    title: 'Prism Engine',
    description: 'A design-system-as-a-service platform focused on color theory and generative accessible palettes.',
    tech: ['TypeScript', 'Tailwind', 'Python'],
    link: '#'
  }
];

export const CAPABILITIES: CapabilityGroup[] = [
  {
    category: 'Frontend',
    skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Canvas API']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'AWS / Vercel']
  },
  {
    category: 'Philosophy',
    skills: ['System Design', 'Visual Identity', 'Human-Centric UX', 'High Performance']
  }
];

export const PHILOSOPHY = [
  "Clarity over complexity.",
  "Motion as a functional layer.",
  "Human-centric by default.",
  "Performance is a design feature."
];
