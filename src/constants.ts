import { Project, Achievement, Skill, Certification, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'Web / Full Stack',
    description: 'Interactive terminal-themed portfolio website showcasing projects, skills, research, and achievements with a modern, responsive design.',
    longDescription: 'Built a full-featured portfolio website with a sleek terminal-inspired UI. Features dynamic project showcases with detailed case studies, interactive skills visualization, certifications gallery, educational background, and achievement highlights. Integrated responsive design for all devices and optimized performance with Vite. Includes smooth navigation, project filtering by category, and direct links to GitHub repositories and live demos.',
    image: '/images/portfolio.jpeg',
    imageFit: 'contain',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
    links: {
      github: 'https://github.com/Sahana-Acharya7/portfolio',
      demo: 'https://sahanaacharya-portfolio.vercel.app/'
    },
    stats: [
      { label: 'Theme', value: 'Terminal UI' },
      { label: 'Performance', value: 'Optimized' },
      { label: 'Responsive', value: '100%' }
    ]
  },
  {
    id: 'smart-pantry',
    title: 'Smart Pantry Management',
    category: 'Mobile / AI',
    description: 'AI-driven inventory systecm that reduced food waste by 30% through predictive expiry modeling.',
    longDescription: 'Engineered a cross-platform mobile application using Flutter and Firebase. Implemented a custom LSTM-based prediction model for food shelf-life estimation. Designed a real-time synchronization layer for shared pantries, handling concurrent updates for 500+ active users.',
    image: '/images/smartpantry.jpeg',
    imageFit: 'contain',
    tags: ['Flutter', 'Firebase', 'TensorFlow Lite', 'Dart', 'NoSQL'],
    links: {
      github: 'https://github.com/Sahana-Acharya7/Smart-Pantry-Manager-App.git'
    },
    stats: [
      { label: 'Latency', value: '<100ms' },
      { label: 'Accuracy', value: '94%' },
      { label: 'Users', value: '500+' }
    ]
  },
  {
    id: 'govchat',
    title: 'GovChat',
    category: 'Web / AI',
    description: 'AI-enabled e-governance portal for rural Karnataka bridging citizens and government departments with multilingual conversational support.',
    longDescription: 'Built a full-stack AI-enabled e-governance portal bridging citizens and government departments for rural Karnataka. Implemented a RAG-based conversational AI with multilingual support for Kannada and English. Designed a three-pipeline architecture handling citizen interaction, government administration, and AI-driven routing across role-based user flows.',
    image: '/images/Govchat.jpeg',
    imageFit: 'contain',
    tags: ['React.js', 'Next.js', 'Django REST Framework', 'PostgreSQL', 'Flutter', 'OpenStreetMap', 'Leaflet.js', 'Vision Transformer', 'Ollama', 'RAG', 'MCP', 'AI4Bharat', 'TTS', 'MinIO', 'Docker'],
    links: {
      github: 'https://github.com/Sahana-Acharya7/GovChat'
    },
    stats: [
      { label: 'Languages', value: 'Kannada + English' },
      { label: 'Pipelines', value: '3-tier Architecture' },
      { label: 'Coverage', value: 'Rural KA' }
    ]
  },
  {
  id: 'smart-construction-waste-manager',
  title: 'Smart Construction Waste Manager (SCWM)',
  category: 'AI / Computer Vision',
  description: 'AI-powered waste detection system with an integrated second-hand marketplace enabling creative reuse of materials like tiles for mosaic arts and e-waste for innovative projects.',
  longDescription: 'Built an end-to-end AI system using YOLOv8 for image-based construction waste detection with confidence scoring. Integrated a FastAPI backend to process scans and leveraged Groq LLMs to generate sustainability and environmental impact insights. Implemented Supabase for persistent storage and scan history tracking, with a React-based frontend for visualization and user interaction. Created a second-hand marketplace platform enabling users to list detected waste materials for creative reuse—tiles for mosaic art projects, e-waste for innovative fabrication, and other construction materials—reducing landfill waste while fostering a community of makers and artists.',
  image: '/images/scwm.jpeg',
  tags: [
    'FastAPI',
    'YOLOv8',
    'Supabase',
    'Groq LLM',
    'React',
    'Computer Vision',
    'Marketplace'
  ],
  links: {
    github: 'https://github.com/Sahana-Acharya7/scwm.git' // update if repo name differs
  },
  stats: [
    { label: 'Detection', value: 'Real-time' },
    { label: 'Analysis', value: 'AI-driven' },
    { label: 'Marketplace', value: 'Creative Reuse' }
  ]
},
  {
    id: 'campus-lost-found',
    title: 'Lost & Found Management System',
    category: 'Web / Full Stack',
    description: 'Secure web-based platform with role-based access control, ownership verification, and admin-mediated claim processing for lost and found items.',
    longDescription: 'Built a comprehensive web application enabling users to report lost or found items with detailed metadata, categories, and locations. Implemented a two-step ownership verification system using security questions and claim evidence. Designed role-based dashboards for users (report tracking, claim submission) and administrators (claim review, action history, statistics). Features secure authentication, automated status updates, and comprehensive claim management with admin remarks and approval workflows.',
    image: '/images/lostandfound.jpeg',
    tags: ['Python', 'Flask', 'PostgreSQL', 'SQLite', 'HTML5', 'CSS3', 'Werkzeug', 'Psycopg2', 'RBAC'],
    links: {
      github: 'https://github.com/Sahana-Acharya7/Lost-Found-Management.git'
    },
    stats: [
      { label: 'Authentication', value: 'Secure' },
      { label: 'Access Control', value: 'Role-Based' },
      { label: 'Verification', value: '2-Step' }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'IEEE CSITSS Publication',
    date: '2025',
    description: 'Authored and presented "Optimizing Food Supply Chains via AI-Driven Pantry Systems" at IEEE CSITSS. Awarded "Best Paper" in the AI track.',
    icon: 'Award'
  },
  {
    id: '2',
    title: 'National level Paper Presentation Finalist',
    date: '2024',
    description: 'Participated in the National level paper presentation competition.',
    icon: 'Trophy'
  },

];

export const EDUCATION: Education[] = [
  {
    id: 'rvce-ise',
    period: '2024 – Present',
    program: 'B.E. Information Science & Engineering',
    institution: 'RV College of Engineering',
    location: 'Bangalore',
    score: 'Current CGPA: 8.14 (as of 4th semester)'
  },
  {
    id: 'jss-diploma-cse',
    period: '2021 – 2024',
    program: 'Diploma in Computer Science and Engineering',
    institution: 'JSS Polytechnic for Women',
    location: 'Mysore',
    score: 'Final CGPA: 9.8 (Distinction)'
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'Java', level: 85, category: 'language' },
  { name: 'C', level: 80, category: 'language' },
  { name: 'Python', level: 85, category: 'language' },
  { name: 'JavaScript', level: 90, category: 'language' },
  { name: 'SQL', level: 85, category: 'language' },
  
  // Web / Mobile
  { name: 'HTML', level: 95, category: 'web_mobile' },
  { name: 'CSS', level: 90, category: 'web_mobile' },
  { name: 'React', level: 90, category: 'web_mobile' },
  { name: 'Node.js', level: 85, category: 'web_mobile' },
  { name: 'Flutter', level: 80, category: 'web_mobile' },
  
  // Databases
  { name: 'MySQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'Firebase', level: 85, category: 'database' },
  
  // Tools & Platforms
  { name: 'Git', level: 90, category: 'tool_platform' },
  { name: 'GitHub', level: 90, category: 'tool_platform' },
  { name: 'Docker', level: 65, category: 'tool_platform' },
  { name: 'AWS', level: 60, category: 'tool_platform' },
  { name: 'Google Cloud', level: 60, category: 'tool_platform' },
  
  // Core Areas
  { name: 'OS', level: 85, category: 'core_area' },
  { name: 'DBMS', level: 90, category: 'core_area' },
  { name: 'Cloud Computing', level: 80, category: 'core_area' },
  { name: 'DevOps', level: 70, category: 'core_area' },

  // Languages Known
  { name: 'English', level: 95, category: 'other' },
  { name: 'Kannada', level: 100, category: 'other' },
  { name: 'Hindi', level: 85, category: 'other' }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cyber-sentinel',
    title: 'Cyber Sentinel: SecureWeb Frameworks & Apps Integration',
    issuer: 'RV College of Engineering (CESD)',
    date: 'Sep 2024',
    image: '/certifications/cybersentinel.jpeg',
    link: '#',
    description: 'Skill lab training on powering enterprise excellence with secure web frameworks and application integration.'
  },
  {
    id: 'csitss-2025-paper',
    title: 'Paper Presentation: SmartPantry Manager',
    issuer: 'IEEE CSITSS-2025',
    date: 'Nov 2025',
    image: '/certifications/ieee.jpeg',
    link: '#',
    description: 'Presented "SmartPantry Manager: An Intelligent System for Grocery Management and Food Waste Reduction" at the 9th IEEE International Conference.'
  },
  {
    id: 'power-bi-decisions',
    title: 'Data Driven Decisions with Power BI',
    issuer: 'RV College of Engineering (CESD)',
    date: 'Apr 2025',
    image: '/certifications/powerbi.jpeg',
    link: '#',
    description: 'Skill lab training focused on leveraging Power BI for data-driven decision making and business intelligence.'
  },
  {
    id: 'sandbox-2025',
    title: 'Sandbox 2025: Cybersecurity Hackathon',
    issuer: 'Dayananda Sagar College of Engineering',
    date: 'Mar 2025',
    image: '/certifications/sandbox.jpeg',
    link: 'https://verification.givemycertificate.com/v/f1758f6c-2475-4426-b450-',
    description: 'Participation in a high-intensity cybersecurity hackathon, solving complex security challenges and problem-solving.'
  },
  {
    id: 'tech-tank-2025-r1',
    title: 'Tech Tank 2025: Round 1 Participation',
    issuer: 'RVCE ACM & GDG RVCE',
    date: 'Apr 2025',
    image: '/certifications/techtank1.jpeg',
    link: '#',
    description: 'Acknowledged for contribution in Round 1 of Tech Tank 2025, a Shark Tank-inspired 12-hour hackathon.'
  },
  {
    id: 'tech-tank-2025-r2',
    title: 'Tech Tank 2025: Round 2 Participation',
    issuer: 'RVCE ACM & GDG RVCE',
    date: 'Apr 2025',
    image: '/certifications/techtank2.jpeg',
    link: '#',
    description: 'Recognized for active participation and dedicated engagement in Round 2 of the Tech Tank 2025 hackathon.'
  },
  {
    id: 'technotut-fullstack',
    title: 'Full Stack Development Internship',
    issuer: 'TechnoTut Solutions LLP',
    date: 'May 2024',
    image: '/certifications/technotut.jpeg',
    link: 'http://www.technotutsolutions.com',
    description: 'Successfully completed a 4-month intensive Full Stack Development internship (Jan - May 2024), gaining hands-on experience in building end-to-end web applications.'
  },
  {
    id: 'jss-polytechnic-2023',
    title: 'National Level Technical Paper Presentation',
    issuer: 'JSS Polytechnic, Mysuru',
    date: 'May 2023',
    image: '/certifications/Nationaltechnicalpaper.jpeg',
    link: '#',
    description: 'Participated in the National Level Technical Paper Presentation on "Emerging Technologies in the Engineering field - 2023" held on 24th May 2023.'
  }
];
