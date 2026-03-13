import type {
  Project,
  SkillCategory,
  NavItem,
  ContactLink,
  StatItem,
  SpokenLanguage,
} from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { href: '#about',     label: { en: 'About',     es: 'Sobre mí'    } },
  { href: '#skills',    label: { en: 'Skills',    es: 'Habilidades' } },
  { href: '#projects',  label: { en: 'Projects',  es: 'Proyectos'   } },
  { href: '#education', label: { en: 'Education', es: 'Educación'   } },
  { href: '#contact',   label: { en: 'Contact',   es: 'Contacto'    } },
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    icon: '🤖',
    title: { en: 'Paez Investments IA', es: 'Paez Investments IA' },
    description: {
      en: 'Autonomous AI-powered inventory management system designed for the restaurant industry. Applies machine learning to real-world business optimization and market expansion decisions.',
      es: 'Sistema autónomo de gestión de inventario con IA para la industria restaurantera. Aplica machine learning a la optimización empresarial y decisiones de expansión de mercado.',
    },
    tags: ['Python', 'PyTorch', 'AWS', 'AI'],
    highlight: {
      en: 'AI applied to real-world restaurant inventory & market expansion',
      es: 'IA aplicada a inventario real de restaurantes y expansión de mercado',
    },
  },
  {
    id: 2,
    icon: '🛡️',
    title: { en: 'Malign Code Detection v2', es: 'Detección de Código Malicioso v2' },
    description: {
      en: 'Security-focused service using historical analysis and strategy design patterns to identify SQL injection attempts. Built with explainable, structured scoring outputs.',
      es: 'Servicio enfocado en seguridad que usa análisis histórico y patrones de diseño estratégico para identificar intentos de inyección SQL. Con salidas de puntuación estructuradas.',
    },
    tags: ['Python', 'Strategy Pattern', 'Security', 'ML'],
    highlight: {
      en: 'Security-first mindset with sophisticated algorithmic detection logic',
      es: 'Mentalidad de seguridad primero con lógica de detección algorítmica sofisticada',
    },
  },
  {
    id: 3,
    icon: '⚙️',
    title: { en: 'Custom C# Validation Framework', es: 'Framework de Validación C# Personalizado' },
    description: {
      en: 'A modular, thread-safe validation ecosystem built with interchangeable strategy rules. Demonstrates deep understanding of framework design and high-level C# engineering.',
      es: 'Un ecosistema de validación modular y thread-safe construido con reglas de estrategia intercambiables. Demuestra comprensión profunda del diseño de frameworks.',
    },
    tags: ['C# / .NET', 'SOLID', 'Strategy Pattern', 'Architecture'],
    highlight: {
      en: 'Proves deep framework design skills and high-level C# engineering',
      es: 'Demuestra habilidades profundas en diseño de frameworks e ingeniería C#',
    },
  },
  {
    id: 4,
    icon: '🏠',
    title: { en: 'AI Virtual Home Assistant', es: 'Asistente Virtual IA para el Hogar' },
    description: {
      en: 'A functional AI assistant leveraging OpenRouter LLM APIs for intelligent task automation. Real-world integration with Generative AI and multi-API orchestration.',
      es: 'Un asistente de IA funcional que aprovecha las APIs LLM de OpenRouter para automatización inteligente de tareas. Integración real con IA Generativa.',
    },
    tags: ['Python', 'LLM APIs', 'OpenRouter', 'GenAI'],
    highlight: {
      en: 'Real-world Generative AI integration and LLM API orchestration',
      es: 'Integración real con IA Generativa y orquestación de APIs LLM',
    },
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: { en: 'Languages', es: 'Lenguajes' },
    skills: ['Python', 'C# / .NET', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 'ai',
    title: { en: 'AI / Machine Learning', es: 'IA / Machine Learning' },
    skills: ['PyTorch', 'Neural Networks', 'LLM APIs', 'OpenRouter', 'Probability & Stats'],
  },
  {
    id: 'frontend',
    title: { en: 'Frontend', es: 'Frontend' },
    skills: ['React', 'React Native', 'Vite', 'HTML / CSS'],
  },
  {
    id: 'backend',
    title: { en: 'Backend & Data', es: 'Backend y Datos' },
    skills: ['REST APIs', 'Relational DBs', 'NoSQL', 'Backend Services'],
  },
  {
    id: 'cloud',
    title: { en: 'Cloud · AWS', es: 'Cloud · AWS' },
    skills: ['S3', 'EC2', 'RDS', 'Rekognition', 'IAM'],
  },
  {
    id: 'architecture',
    title: { en: 'Architecture & Tools', es: 'Arquitectura y Herramientas' },
    skills: ['Clean Architecture', 'DDD', 'SOLID', 'Git / GitHub', 'JetBrains'],
  },
]

export const STATS: StatItem[] = [
  { value: '4+', label: { en: 'Featured Projects', es: 'Proyectos Destacados' } },
  { value: '3',  label: { en: 'Languages Spoken',  es: 'Idiomas'             } },
  { value: 'AWS', label: { en: 'Cloud Platform',   es: 'Plataforma Cloud'    } },
  { value: 'AI',  label: { en: 'Core Focus',       es: 'Enfoque Principal'   } },
]

export const SPOKEN_LANGUAGES: SpokenLanguage[] = [
  { flag: '🇨🇴', name: 'Español', cert: 'Native' },
  { flag: '🇬🇧', name: 'English', cert: 'IELTS'  },
  { flag: '🇫🇷', name: 'Français', cert: 'DELF'  },
]

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: '✉️',
    label: 'Email',
    display: 'juanespg03@gmail.com',
    href: 'mailto:juanespg03@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    display: 'juan-esteban-paez-gil',
    href: 'https://www.linkedin.com/in/juan-esteban-paez-gil-595988273/',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    display: 'github.com/juanespaez',
    href: 'https://github.com/juanespaez',
  },
]
