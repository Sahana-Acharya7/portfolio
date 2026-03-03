import { Project, Achievement, Skill, Certification } from './types';

export const PROJECTS: Project[] = [
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
    id: 'smart-parking',
    title: 'Smart Parking System',
    category: 'Web / IoT',
    description: 'High-concurrency parking platform that optimized slot allocation efficiency by 45%.',
    longDescription: 'Architected a full-stack solution using React and Node.js to manage real-time parking logistics. Developed a custom QR-based authentication protocol and integrated Twilio for automated SMS alerts. Optimized MySQL queries to handle 1000+ concurrent slot status updates per second.',
    image: '',
    tags: ['React', 'Node.js', 'MySQL', 'TypeScript', 'Twilio', 'Redis'],
    links: {
      github: 'https://github.com/Sahana-Acharya7/smart-parking'
    },
    stats: [
      { label: 'Throughput', value: '1k req/s' },
      { label: 'Efficiency', value: '+45%' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
  id: 'smart-construction-waste-manager',
  title: 'Smart Construction Waste Manager (SCWM)',
  category: 'AI / Computer Vision',
  description: 'AI-powered system for detecting construction waste and analyzing its environmental impact.',
  longDescription: 'Built an end-to-end AI system using YOLOv8 for image-based construction waste detection with confidence scoring. Integrated a FastAPI backend to process scans and leveraged Groq LLMs to generate sustainability and environmental impact insights. Implemented Supabase for persistent storage and scan history tracking, with a React-based frontend for visualization and user interaction.',
  image: '/images/scwm.jpeg',
  tags: [
    'FastAPI',
    'YOLOv8',
    'Supabase',
    'Groq LLM',
    'React',
    'Computer Vision'
  ],
  links: {
    github: 'https://github.com/Sahana-Acharya7/scwm.git' // update if repo name differs
  },
  stats: [
    { label: 'Detection', value: 'Real-time' },
    { label: 'Analysis', value: 'AI-driven' },
    { label: 'Tracking', value: 'Scan history' }
  ]
},
  {
    id: 'campus-lost-found',
    title: 'Campus Lost & Found System',
    category: 'Web / Full Stack',
    description: 'Centralized platform for campus-wide item tracking, reducing recovery time by 60%.',
    longDescription: 'Developed a robust web application using React and Node.js to streamline the lost and found process. Implemented an automated matching algorithm to connect lost reports with found items based on metadata. Integrated a secure notification system and a searchable database with real-time status updates.',
    image: '/images/lostandfound.jpeg',
    tags: ['HTML', 'CSS', 'JavaScript', 'postgres', 'JWT', 'Cloudinary'],
    links: {
      github: 'https://github.com/Sahana-Acharya7/Lost-Found-Management.git'
    },
    stats: [
      { label: 'Recovery Time', value: '-60%' },
      { label: 'Active Users', value: '1.2k' },
      { label: 'Items Found', value: '450+' }
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
