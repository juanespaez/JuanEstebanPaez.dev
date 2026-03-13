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
    icon: '🏀',
    title: {
      en: 'NBA Player Performance Clustering',
      es: 'Clustering de Rendimiento de Jugadores NBA'
    },
    description: {
      en: 'An end-to-end data pipeline that extracts NBA Synergy stats via API, cleans and normalizes metrics using Pandas, and applies K-Means clustering. Features rigorous model validation using Elbow and Silhouette methods.',
      es: 'Un pipeline de datos completo que extrae estadísticas de la NBA vía API, limpia y normaliza métricas con Pandas y aplica clustering K-Means. Incluye validación de modelos mediante los métodos de Elbow y Silhouette.',
    },
    tags: ['Python', 'Pandas', 'Scikit-Learn', 'K-Means', 'API'],
    highlight: {
      en: 'Identified 3 optimal player profiles through unsupervised learning and statistical validation',
      es: 'Identificación de 3 perfiles de jugadores óptimos mediante aprendizaje no supervisado y validación estadística',
    },
    githubUrl: 'https://github.com/juanespaez/API-extraction-with-cleaning-and-clustering'
  },
  {
    id: 2,
    icon: '🆔', // Icono sugerido para identificación biométrica
    title: {
      en: 'Facial Login & Attendance System',
      es: 'Sistema de Login Facial y Registro de Asistencia'
    },
    description: {
      en: 'A facial detection interface that manages user registration and biometric authentication. It leverages Computer Vision algorithms to verify identities against a database for automated attendance tracking.',
      es: 'Interfaz de detección facial que gestiona el registro de usuarios y la autenticación biométrica. Utiliza algoritmos de Visión Artificial para verificar identidades y automatizar el control de asistencia.',
    },
    tags: ['Python', 'Computer Vision', 'OpenCV', 'Biometrics'],
    highlight: {
      en: 'Seamless biometric authentication flow with real-time face verification',
      es: 'Flujo de autenticación biométrica fluido con verificación facial en tiempo real',
    },
    githubUrl: 'https://github.com/juanespaez/Facial_login-with-interface-and-registration-of-attendance-spanish-'
  },
  {
    id: 3,
    icon: '❤️',
    title: {
      en: 'Heart Disease Prediction via Ensemble Learning',
      es: 'Predicción de Enfermedades Cardíacas mediante Aprendizaje de Ensamble'
    },
    description: {
      en: 'A high-performance predictive system integrating XGBoost, Stacking classifiers, and Neural Networks. Features a custom GUI to process clinical variables and deliver real-time cardiovascular risk assessments.',
      es: 'Sistema predictivo de alto rendimiento que integra XGBoost, clasificadores Stacking y Redes Neuronales. Incluye una interfaz gráfica para procesar variables clínicas y entregar evaluaciones de riesgo en tiempo real.',
    },
    tags: ['Python', 'Machine Learning', 'XGBoost', 'Neural Networks', 'GUI'],
    highlight: {
      en: 'Advanced ensemble modeling and deep learning integration for clinical diagnostics',
      es: 'Modelado avanzado de ensamble e integración de deep learning para diagnóstico clínico',
    },
    githubUrl: 'https://github.com/juanespaez/DataMiningWithModelOnline'
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
    githubUrl: 'https://github.com/juanespaez/Virtual_assistent'
  },
  {
    id: 5,
    icon: '🔌', // Icono de conexión/enchufe para representar una API
    title: {
      en: 'NoSQL CRUD API with Layered Architecture',
      es: 'API CRUD NoSQL con Arquitectura en Capas'
    },
    description: {
      en: 'A robust Node.js & MongoDB API structured into Controller, Service, and Repository layers. Includes containerized database deployment via Docker and specialized role-based access control (RBAC) for database security.',
      es: 'API robusta de Node.js y MongoDB estructurada en capas de Controlador, Servicio y Repositorio. Incluye despliegue de base de datos en contenedores Docker y control de acceso basado en roles (RBAC).',
    },
    tags: ['Node.js', 'MongoDB', 'Docker', 'Express', 'Architecture'],
    highlight: {
      en: 'Clean architecture implementation with automated container orchestration and secure DB user provisioning',
      es: 'Implementación de arquitectura limpia con orquestación de contenedores y provisión segura de usuarios',
    },
    githubUrl: 'https://github.com/juanespaez/tadb_202420_NoSQL_API'
  },
  {
    id: 6,
    icon: '🐘', // El elefante de PostgreSQL
    title: {
      en: 'SQL Relational API & Advanced DB Security',
      es: 'API Relacional SQL y Seguridad Avanzada de DB'
    },
    description: {
      en: 'A high-availability REST API built with Node.js and PostgreSQL. Features a comprehensive security layer using fine-grained PostgreSQL privileges (ACLs), default schema grants, and routine execution permissions for robust data isolation.',
      es: 'API REST de alta disponibilidad construida con Node.js y PostgreSQL. Incluye una capa de seguridad integral mediante privilegios detallados (ACLs), permisos de esquema por defecto y ejecución de rutinas.',
    },
    tags: ['Node.js', 'PostgreSQL', 'Docker', 'PL/pgSQL', 'Database Security'],
    highlight: {
      en: 'Expert-level database administration with automated default privileges and secure routine management',
      es: 'Administración de base de datos nivel experto con privilegios automáticos y gestión segura de rutinas',
    },
    githubUrl: 'https://github.com/juanespaez/tadb_202420_SQL_API'
  },
  {
    id: 7,
    icon: '🎨', // Un paleta de colores para diseño UI/UX
    title: {
      en: 'Modern Responsive Landing Page',
      es: 'Landing Page Moderna y Responsiva'
    },
    description: {
      en: 'A high-performance landing page developed with React and Vite. It features a polished UI using shadcn/ui components and Tailwind CSS, ensuring a fully responsive experience and optimized build times with TypeScript.',
      es: 'Página de aterrizaje de alto rendimiento desarrollada con React y Vite. Presenta una interfaz pulida usando componentes de shadcn/ui y Tailwind CSS, garantizando una experiencia responsiva y tiempos de compilación optimizados.',
    },
    tags: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'shadcn/ui'],
    highlight: {
      en: 'Clean UI/UX design with modular component architecture and type-safe development',
      es: 'Diseño UI/UX limpio con arquitectura de componentes modulares y desarrollo tipado',
    },
    githubUrl: 'https://github.com/juanespaez/LandingPage'
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  // ... (Languages, AI, Frontend se mantienen igual)
  {
    id: 'backend',
    title: { en: 'Backend & Data', es: 'Backend y Datos' },
    skills: ['REST APIs', 'PostgreSQL', 'MongoDB', 'Flask', 'FastAPI', 'Node.js'],
  },
  {
    id: 'cloud',
    title: { en: 'Cloud · AWS', es: 'Cloud · AWS' },
    skills: ['S3', 'EC2', 'RDS', 'IAM'],
  },
  {
    id: 'data_eng', // Nueva categoría para Databricks y Azure
    title: { en: 'Data Engineering', es: 'Ingeniería de Datos' },
    skills: ['Databricks', 'Azure Database', 'Docker', 'ETL Pipelines'],
  },
  {
    id: 'architecture',
    title: { en: 'Architecture & Tools', es: 'Arquitectura y Herramientas' },
    skills: ['Clean Architecture', 'DDD', 'SOLID', 'Git / GitHub', 'JetBrains'],
  },
  {
    id: 'devops_dataops',
    title: { en: 'DevOps & Data Engineering', es: 'DevOps e Ingeniería de Datos' },
    skills: [
      'Databricks (ETLs)',
      'Azure Data Factory',
      'Docker & Docker Compose',
      'Prefect / Orion', // Orion es el motor de Prefect para orquestación de flujos
      'Grafana (Monitoring)',
      'YAML Configuration'
    ],
  },
]

export const STATS: StatItem[] = [
  { value: '6+', label: { en: 'Featured Projects', es: 'Proyectos Destacados' } },
  { value: '3',  label: { en: 'Languages Spoken',  es: 'Idiomas'             } },
  { value: 'AWS', label: { en: 'Cloud Platform',   es: 'Plataforma Cloud'    } },
  { value: 'Machine Learning',  label: { en: 'Core Focus',       es: 'Enfoque Principal'   } },
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
