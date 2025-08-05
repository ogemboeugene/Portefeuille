import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const PERSONAL_INFO = {
  name: 'Eugine Brian Ogembo',
  title: 'Full Stack Developer | Mobile & Web',
  tagline: 'Building scalable web applications with modern technologies to drive digital transformation.',
  location: 'Nairobi, Kenya',
  languages: ['English (Fluent)', 'Swahili (Native)'],
  summary: '3+ years building robust full-stack solutions, specialized in React/Next.js and Node.js. Strong backend experience with REST APIs, PostgreSQL, OAuth2/JWT, and CI/CD pipelines.',
  email: 'brianeugene851@gmail.com',
  phone: '+254 798 925 396',
  github: 'github.com/ogemboeugene',
  portfolio: 'euginebrain.tech',
  linkedin: 'linkedin.com/in/eugenebrian-b91419279',
  image: '/src/assets/DSC_2400.JPG'
};

export const CONTACT_INFO = [
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone}`
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: PERSONAL_INFO.location,
    href: '#'
  }
];

export const SKILLS = {
  frontend: [
    'React.js', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 
    'JavaScript (ES6+)', 'SEO Optimization', 'Responsive Design'
  ],
  backend: [
    'Node.js', 'Express.js', 'PostgreSQL', 'Oracle', 'REST APIs', 
    'Microservices', 'JWT', 'OAuth2', 'Payment Integrations'
  ],
  devops: [
    'Docker', 'GitHub', 'CI/CD', 'Performance Optimization', 
    'Jest', 'Cypress', 'Technical Documentation'
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: 'Soko Beauty',
    description: 'AI-powered beauty mobile platform using Flutter, Firebase, facial recognition, and appointment booking system with real-time chat and personalized beauty recommendations.',
    technologies: ['Flutter', 'Firebase', 'AI/ML', 'Dart', 'Cloud Functions', 'TensorFlow'],
    features: [
      'AI facial recognition for skin analysis',
      'Personalized beauty product recommendations',
      'Appointment booking with beauty professionals',
      'Real-time chat support system',
      'Payment gateway integration',
      'User reviews and ratings system'
    ],
    github: 'https://github.com/ogemboeugene/soko-beauty',
    demo: 'https://soko-beauty-demo.com',
    image: '/src/assets/sokobeauty.webp',
    status: 'Live',
    category: 'Mobile App'
  },
  {
    id: 2,
    title: 'ShopOkoa',
    description: 'Scalable Django + React e-commerce platform designed for the African market with comprehensive payment gateway, inventory management, and multi-vendor support.',
    technologies: ['Django', 'React', 'PostgreSQL', 'Docker', 'Redis', 'Celery'],
    features: [
      'Multi-vendor marketplace architecture',
      'Advanced inventory management system',
      'Multiple payment gateways (M-Pesa, PayPal)',
      'Real-time order tracking system',
      'Docker-based deployment pipeline',
      'Admin dashboard with analytics'
    ],
    github: 'https://github.com/ogemboeugene/shopokoa',
    demo: 'https://shopokoa-demo.com',
    image: '/src/assets/shopokoa.png',
    status: 'Live',
    category: 'E-commerce'
  },
  {
    id: 3,
    title: 'MamaPesa',
    description: 'Revolutionary fintech mobile application for seamless money transfers, bill payments, and micro-lending services targeting the African market with M-Pesa integration.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express.js', 'M-Pesa API', 'JWT'],
    features: [
      'Instant money transfers across East Africa',
      'Bill payment automation (utilities, school fees)',
      'Micro-lending with AI credit scoring',
      'M-Pesa and mobile money integration',
      'Transaction history and analytics',
      'Multi-language support (English, Swahili)'
    ],
    github: 'https://github.com/ogemboeugene/mamapesa',
    demo: 'https://mamapesa-demo.com',
    image: '/src/assets/MamaPesa.webp',
    status: 'In Development',
    category: 'Fintech'
  },
  {
    id: 4,
    title: 'Drassy App',
    description: 'Fashion-forward mobile application connecting users with local tailors and designers, featuring custom clothing orders, virtual try-on, and fashion marketplace.',
    technologies: ['Flutter', 'Firebase', 'Stripe', 'AR Kit', 'Cloud Storage', 'FCM'],
    features: [
      'Virtual try-on using AR technology',
      'Custom clothing design and ordering',
      'Local tailor and designer marketplace',
      'Fabric selection and customization',
      'Order tracking and delivery system',
      'Social sharing and fashion community'
    ],
    github: 'https://github.com/ogemboeugene/drassy-app',
    demo: 'https://drassy-demo.com',
    image: '/src/assets/drassy.webp',
    status: 'Beta',
    category: 'Fashion Tech'
  },
  {
    id: 5,
    title: 'DevPortfolio Builder',
    description: 'Modern portfolio builder for developers with drag-and-drop interface, multiple themes, and one-click deployment to various hosting platforms.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'TailwindCSS', 'Vercel API', 'Supabase'],
    features: [
      'Drag-and-drop portfolio builder',
      'Multiple professional themes',
      'One-click deployment (Vercel, Netlify)',
      'Custom domain support',
      'Analytics and visitor tracking',
      'SEO optimization tools'
    ],
    github: 'https://github.com/ogemboeugene/dev-portfolio-builder',
    demo: 'https://dev-portfolio-builder.com',
    image: '/src/assets/devportfoliobuilder.webp',
    status: 'Planning',
    category: 'Developer Tools'
  },
  {
    id: 6,
    title: 'HealthFin',
    description: 'Healthcare financing platform connecting patients with affordable healthcare options, payment plans, and insurance integration for accessible medical services.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'REST APIs', 'JWT'],
    features: [
      'Healthcare payment plan management',
      'Insurance claim processing',
      'Provider network integration',
      'Patient billing automation',
      'Medical record management',
      'Payment gateway integration'
    ],
    github: 'https://github.com/ogemboeugene/healthfin',
    demo: 'https://healthfin-demo.com',
    image: '/src/assets/healthfin.webp',
    status: 'Live',
    category: 'HealthTech'
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    company: 'Dukatech Solutions',
    role: 'Full Stack Developer',
    period: '2025–Present',
    description: 'Leading development of scalable web applications using modern tech stack.',
    achievements: [
      'Developed and deployed 5+ production applications',
      'Improved application performance by 40%',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    id: 2,
    company: 'TechSavvy Analytics',
    role: 'Data Analytics Intern',
    period: '2024',
    description: 'Analyzed large datasets and created interactive dashboards for business insights.',
    achievements: [
      'Built interactive dashboards using Python and Tableau',
      'Processed and analyzed datasets with 1M+ records',
      'Created automated reporting systems',
      'Collaborated with cross-functional teams on data-driven decisions'
    ]
  },
  {
    id: 3,
    company: 'Shamiri Institute',
    role: 'Technical Mentor',
    period: '2023–2024',
    description: 'Mentored students in web development and programming fundamentals.',
    achievements: [
      'Mentored 20+ students in full-stack development',
      'Developed curriculum for React and Node.js courses',
      'Organized coding bootcamps and workshops',
      'Achieved 85% student completion rate'
    ]
  },
  {
    id: 4,
    company: 'ALX Africa',
    role: 'Software Engineering Fellow',
    period: '2023–2024',
    description: 'Intensive software engineering program focusing on full-stack development.',
    achievements: [
      'Completed 12-month intensive coding program',
      'Built multiple full-stack applications',
      'Collaborated on team projects using Agile methodology',
      'Graduated with distinction'
    ]
  }
];

export const CERTIFICATIONS = [
  {
    name: 'ALX Software Engineering',
    issuer: 'ALX Africa',
    year: '2024',
    credentialId: 'ALX-SE-2024-001'
  },
  {
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    year: '2024',
    credentialId: 'AZ-900'
  },
  {
    name: 'Google Data Analytics',
    issuer: 'Google',
    year: '2023',
    credentialId: 'GDA-2023-001'
  },
  {
    name: 'GitHub Foundations',
    issuer: 'GitHub',
    year: '2024',
    credentialId: 'GH-FOUND-2024'
  },
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2023',
    credentialId: 'RWD-2023-001'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Developer at TechCorp',
    content: 'Eugene is an exceptional developer with a keen eye for detail. His ability to solve complex problems and deliver high-quality solutions consistently impressed our team.',
    avatar: '/src/assets/profile.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Project Manager at StartupXYZ',
    content: 'Working with Eugene was a fantastic experience. He delivered our project on time and exceeded our expectations with his technical expertise and communication skills.',
    avatar: '/src/assets/profile.jpg'
  },
  {
    id: 3,
    name: 'Dr. Jane Doe',
    role: 'Technical Lead at Innovation Labs',
    content: 'Eugene demonstrates exceptional problem-solving skills and a deep understanding of modern web technologies. His contributions to our projects were invaluable.',
    avatar: '/src/assets/profile.jpg'
  }
];

export const TECH_EVENTS = [
  {
    id: 1,
    name: '.NET Meetup Nairobi',
    date: 'August 2025',
    role: 'Speaker',
    description: 'Presented on building APIs with .NET and FastAPI integration patterns.',
    topics: ['API Development', '.NET Core', 'FastAPI', 'Microservices']
  },
  {
    id: 2,
    name: "Africa's Talking Developer Day",
    date: '2024',
    role: 'Attendee',
    description: 'Explored SMS/USSD integration for fintech applications in Africa.',
    topics: ['SMS APIs', 'USSD', 'Fintech', 'Mobile Integration']
  },
  {
    id: 3,
    name: 'GDG Nairobi DevFest',
    date: '2024',
    role: 'Participant',
    description: 'Learned about Firebase, Generative AI, and Flutter development.',
    topics: ['Firebase', 'GenAI', 'Flutter', 'Mobile Development']
  },
  {
    id: 4,
    name: 'iHub AI Hackathon',
    date: '2023',
    role: 'Finalist',
    description: 'Developed logistics route optimization solution using machine learning.',
    topics: ['Machine Learning', 'Route Optimization', 'Logistics', 'AI']
  },
  {
    id: 5,
    name: 'iHub Dev Meetup',
    date: '2023',
    role: 'Attendee',
    description: 'Explored backend performance optimization and latency patterns.',
    topics: ['Backend Optimization', 'Performance', 'System Design']
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'Learn how to design and implement robust REST APIs that can handle high traffic and maintain performance.',
    date: '2024-07-15',
    readTime: '8 min read',
    tags: ['Node.js', 'API Design', 'Performance']
  },
  {
    id: 2,
    title: 'React Performance Optimization: A Complete Guide',
    excerpt: 'Discover advanced techniques to optimize React applications for better user experience and faster load times.',
    date: '2024-06-20',
    readTime: '12 min read',
    tags: ['React', 'Performance', 'Optimization']
  },
  {
    id: 3,
    title: 'Docker for Full-Stack Developers',
    excerpt: 'A comprehensive guide to containerizing your applications and setting up efficient development workflows.',
    date: '2024-05-10',
    readTime: '10 min read',
    tags: ['Docker', 'DevOps', 'Containers']
  }
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/ogemboeugene',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/eugenebrian-b91419279',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/euginebriano',
    icon: 'twitter'
  },
  {
    name: 'Email',
    url: 'mailto:brianeugene851@gmail.com',
    icon: 'email'
  },
  {
    name: 'Portfolio Source',
    url: 'https://github.com/ogemboeugene/portfolio',
    icon: 'github'
  }
];

export const EDUCATION = {
  degree: 'BSc Information Technology',
  institution: 'Kenyatta University',
  period: 'Graduating June 2025',
  coursework: [
    'Software Engineering',
    'Web Technologies',
    'Database Systems',
    'System Design',
    'Data Structures & Algorithms',
    'Computer Networks'
  ]
};
