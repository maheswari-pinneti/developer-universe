import type { 
  UserProfile, 
  ExperienceItem, 
  EducationItem,
  CertificationItem,
  AchievementItem,
  ServiceItem,
  TestimonialItem,
  BlogNoteItem,
  LeetCodeStats,
  JourneyMilestone, 
  SkillNode, 
  ProjectItem 
} from '../types';

export const PROFILE_DATA: UserProfile = {
  name: "MAHESWARI PINNETI",
  title: "FRONTEND DEVELOPER",
  secondaryTitle: "React • TypeScript • Node.js • Three.js • AI Integration",
  shortIntro: "Building scalable interfaces, production applications and immersive web experiences.",
  professionalSummary: "Results-driven Frontend Developer with hands-on experience architecting scalable React & TypeScript applications, enterprise workforce platforms, and RESTful APIs. Focused on component modularity, type safety, web performance, and WebGL interactive interfaces.",
  fullBio: "Frontend developer focused on turning complex product requirements into clean, responsive, and accessible interfaces. Specialized in building enterprise dashboards, robust state management architectures, REST API endpoints, and immersive WebGL graphics.",
  avatarUrl: "/maheswari-profile.jpg",
  location: "Bengaluru, India",
  experienceYears: "1+ years",
  education: "B.Tech — Computer Science & Engineering",
  githubUrl: "https://github.com/maheswari-pinneti",
  linkedinUrl: "https://linkedin.com/in/maheswari-pinneti",
  email: "maheswaripinneti@gmail.com",
  availability: "Currently open to Frontend Engineer, Full-Time, Contract, Remote, and Freelance opportunities."
};

export const EDUCATION_DATA: EducationItem = {
  degree: "B.Tech — Computer Science & Engineering",
  field: "Computer Science & Software Engineering",
  institution: "School of Engineering",
  university: "Presidency University",
  years: "2020 — 2024",
  cgpa: "8.4 / 10.0",
  location: "Bengaluru, India",
  highlights: [
    "Graduated with First Class Honors in Computer Science & Engineering.",
    "Specialized in Algorithms, Web Technologies, Database Management Systems, and Machine Learning.",
    "Developed deep learning facial integrity verification model for final year capstone."
  ]
};

export const CURRENTLY_LEARNING = [
  { name: "Advanced Three.js & Custom GLSL Shaders", level: "Active Exploration" },
  { name: "Distributed Micro-Frontend Architecture", level: "Deep Dive" },
  { name: "AI Agent API Integration & Tool Calling", level: "Experimenting" },
  { name: "Web Workers & Parallel Off-Thread Computing", level: "Practicing" }
];

export const ENGINEERING_PRINCIPLES = [
  {
    title: "Strict Type Safety & Contract Design",
    desc: "Leveraging TypeScript interfaces and Zod schemas shared between client and server to catch data mismatches before deployment."
  },
  {
    title: "Modular Reusable Componentry",
    desc: "Designing decoupled, stateless UI primitives wrapped in single-responsibility custom hooks for maximum testability."
  },
  {
    title: "Performance & Render Optimization",
    desc: "Optimizing Web Vitals through memoization, layout stability, asset compression, and adaptive frame loops."
  },
  {
    title: "Accessible & Responsive Standards",
    desc: "Ensuring full ARIA compliance, keyboard navigation shortcuts (Ctrl+K), and responsive grid layouts down to 320px screens."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "stackly-dev",
    role: "Frontend Developer",
    company: "Stackly",
    period: "2024 — Present",
    location: "Bengaluru, India",
    summary: "Key frontend engineer architecting the primary workforce management enterprise suite.",
    technologies: ["React", "TypeScript", "Redux Toolkit", "React Query", "MUI", "Node.js", "Express.js", "SQLite", "Socket.IO", "REST APIs"],
    responsibilities: [
      "Architected modular React 18 & TypeScript frontend interfaces for enterprise workforce suite modules.",
      "Engineered high-throughput real-time performance and attendance analytics dashboards.",
      "Implemented strict Role-Based Access Control (RBAC) client-side permission guards for HR and Employee views.",
      "Integrated backend REST APIs validated with Zod schemas for multi-tenant data sync.",
      "Optimized query caching and background polling intervals using React Query."
    ]
  },
  {
    id: "exner-dev",
    role: "Frontend & Web Engineering Developer",
    company: "Exner Technologies",
    period: "2023 — 2024",
    location: "Bengaluru, India",
    summary: "Developed client web applications, component libraries, and REST API integrations.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs", "Git"],
    responsibilities: [
      "Built responsive customer-facing web applications using React and modern CSS Flexbox/Grid.",
      "Created reusable UI component libraries ensuring cross-browser styling consistency.",
      "Integrated third-party REST endpoints and handled asynchronous data state loading.",
      "Collaborated with UX design teams to translate Figma wireframes into interactive code."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-lwc",
    name: "Salesforce Lightning Web Components (LWC) Architecture",
    provider: "Salesforce / Community Ecosystem",
    date: "2024",
    credentialUrl: "https://github.com/maheswari-pinneti",
    skills: ["Salesforce LWC", "JavaScript ES6+", "Event Communication", "Wire Adapters"]
  },
  {
    id: "cert-react",
    name: "Enterprise React & TypeScript Application Engineering",
    provider: "Advanced Web Standards",
    date: "2024",
    credentialUrl: "https://github.com/maheswari-pinneti",
    skills: ["React 18", "TypeScript", "Redux Toolkit", "Zod", "REST APIs"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "achieve-capstone",
    title: "Capstone Project Honors Distinction",
    category: "Academic",
    date: "2024",
    description: "Awarded top distinction for deep learning face detection architecture using LSTM neural networks."
  },
  {
    id: "achieve-open-source",
    title: "Open Source LWC Community Contributor",
    category: "Technical",
    date: "2024",
    description: "Authored curated LWC architectural roadmaps helping hundreds of developers prepare for certification."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "srv-react",
    title: "React & TypeScript Application Engineering",
    tagline: "Production Web Apps",
    description: "Building production-grade SPA applications with modular components, strict type safety, and custom hooks.",
    deliverables: ["Scalable Component Hierarchy", "Strict Type Interfaces", "State Management (Zustand/Redux)", "Vitest Test Coverage"],
    iconName: "Code2"
  },
  {
    id: "srv-dashboards",
    title: "Enterprise Dashboard & Analytics Systems",
    tagline: "Real-time Metrics",
    description: "Designing high-density data dashboards, analytics charts, and RBAC permission-controlled admin panels.",
    deliverables: ["Role-Based Access Control (RBAC)", "Real-time Socket Feeds", "Dynamic Data Grids", "Responsive Charts"],
    iconName: "LayoutDashboard"
  },
  {
    id: "srv-api",
    title: "REST API Integration & Express Services",
    tagline: "Full-Stack Connectivity",
    description: "Connecting React frontends to Node.js & Express REST APIs with Zod payload validation and error handling.",
    deliverables: ["Zod Schema Validation", "Axios/Fetch Wrappers", "React Query Caching", "Rate Limiting & Helmet Security"],
    iconName: "Server"
  },
  {
    id: "srv-3d",
    title: "Creative WebGL & 3D Web Experiences",
    tagline: "Immersive Web",
    description: "Crafting interactive Three.js and React Three Fiber 3D elements that elevate digital product identity.",
    deliverables: ["Custom 3D Node Scenes", "Particle Field Physics", "Mouse Parallax & Scroll Animations", "Accessible 2D Fallbacks"],
    iconName: "Sparkles"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Maheswari has an exceptional ability to translate complex product requirements into clean, maintainable React components. Her attention to type safety and API contract clarity saved us weeks during integration.",
    author: "Engineering Lead",
    authorTitle: "Stackly Workforce Platform",
    role: "Frontend Engineering Lead",
    company: "Stackly Technologies",
    linkedInUrl: "https://linkedin.com/in/maheswari-pinneti"
  },
  {
    id: "test-2",
    quote: "Her Salesforce LWC architectural notes and frontend expertise demonstrate a deep technical understanding of web standards. Highly dependable and proactive developer.",
    author: "Senior Technical Architect",
    authorTitle: "Enterprise Software Services",
    role: "Architect",
    company: "Exner Technologies",
    linkedInUrl: "https://linkedin.com/in/maheswari-pinneti"
  }
];

export const BLOG_NOTES: BlogNoteItem[] = [
  {
    id: "note-1",
    title: "Eliminating Runtime API Bugs with Shared TypeScript & Zod Schemas",
    category: "Architecture",
    date: "2026",
    readTime: "4 min read",
    summary: "How enforcing strict boundary validation with Zod on Express routes eliminates non-null assertions in React interfaces."
  },
  {
    id: "note-2",
    title: "Building Real-Time Attendance Dashboards with React Query & WebSockets",
    category: "React & WebSockets",
    date: "2026",
    readTime: "5 min read",
    summary: "Combining background query invalidation with Socket.IO event listeners for zero-latency dashboard sync."
  },
  {
    id: "note-3",
    title: "Optimizing Three.js WebGL Performance for Low-Spec Mobile Browsers",
    category: "3D & WebGL",
    date: "2026",
    readTime: "6 min read",
    summary: "Strategies for adaptive DPR scaling, particle reduction, and progressive 2D fallback rendering."
  }
];

export const LEETCODE_STATS: LeetCodeStats = {
  username: "maheswari-pinneti",
  problemsSolved: 145,
  easySolved: 70,
  mediumSolved: 65,
  hardSolved: 10,
  ranking: "Top 25%",
  profileUrl: "https://leetcode.com/maheswari-pinneti",
  topLanguages: ["JavaScript", "TypeScript", "Python", "C++"]
};

export const MILESTONES: JourneyMilestone[] = [
  {
    year: "2020",
    title: "Computer Science Foundation",
    subtitle: "Undergraduate Journey Begins",
    description: "Started core CS curriculum specializing in algorithms, web development fundamentals, database systems, and data structures."
  },
  {
    year: "2024",
    title: "B.Tech — Computer Science",
    subtitle: "Graduated with Honors",
    description: "Completed B.Tech in Computer Science & Engineering with 8.4 CGPA. Built deep learning face detection capstone models."
  },
  {
    year: "2024+",
    title: "Professional Engineering Experience",
    subtitle: "Stackly Frontend Developer",
    description: "Engineered scalable workforce management platforms, role-based dashboards, and REST API frontends in React & TypeScript."
  },
  {
    year: "2026",
    title: "Frontend Developer & Product Engineer",
    subtitle: "Creative Web & Immersive Engineering",
    description: "Building production web applications while crafting WebGL experiences and real-time interactive dashboards."
  },
  {
    year: "NOW",
    title: "Digital Engineering Universe",
    subtitle: "Active Innovation",
    description: "Creating next-generation React & Three.js product interfaces with AI-assisted software architectures."
  }
];

export const SKILL_NODES: SkillNode[] = [
  // Frontend
  { id: "react", name: "React 18+", category: "FRONTEND", level: 95, context: "Primary frontend framework used for production enterprise interfaces, custom hooks, and dynamic rendering.", relatedIds: ["typescript", "redux", "react-query", "mui", "threejs"], position: [-3, 2, 0] },
  { id: "typescript", name: "TypeScript", category: "FRONTEND", level: 92, context: "Used across client and server apps for robust type safety, strict interface contracts, and maintainable software design.", relatedIds: ["react", "nodejs", "zod", "express"], position: [-1.5, 3.5, -1] },
  { id: "javascript", name: "JavaScript (ESNext)", category: "FRONTEND", level: 90, context: "Core language foundation including async execution, event listeners, DOM algorithms, and Web APIs.", relatedIds: ["react", "nodejs"], position: [-4, 0.5, 1] },
  { id: "html-css", name: "HTML5 & CSS3", category: "FRONTEND", level: 92, context: "Semantic HTML markup, modern flexbox/grid CSS layouts, keyframe animations, and custom CSS variables.", relatedIds: ["react", "mui"], position: [-2.5, -1.5, 0.5] },
  { id: "redux", name: "Redux Toolkit", category: "FRONTEND", level: 88, context: "Global application state management for multi-module enterprise systems and synchronized slice stores.", relatedIds: ["react", "typescript"], position: [-1, 1, 1.5] },
  { id: "react-query", name: "React Query", category: "FRONTEND", level: 85, context: "Server state hydration, background polling, cached API queries, and optimistic client updates.", relatedIds: ["react", "rest-api"], position: [-2.8, 3.8, 1] },
  { id: "mui", name: "Material UI (MUI)", category: "FRONTEND", level: 86, context: "Component library customization, design system tokens, themes, and complex data grid tables.", relatedIds: ["react", "html-css"], position: [-4.5, -1, -1] },
  
  // Backend & Database
  { id: "nodejs", name: "Node.js", category: "BACKEND", level: 88, context: "Asynchronous backend runtime environment for REST API servers and microservices.", relatedIds: ["express", "sqlite", "typescript", "rest-api"], position: [2, 2.5, 1] },
  { id: "express", name: "Express.js", category: "BACKEND", level: 88, context: "HTTP routing framework, custom middleware pipelines, authentication headers, and error handlers.", relatedIds: ["nodejs", "sqlite", "zod"], position: [3.5, 1.2, -0.5] },
  { id: "rest-api", name: "REST APIs", category: "BACKEND", level: 90, context: "RESTful architecture standards, JSON serialization, status codes, Zod validation, and rate limiting.", relatedIds: ["express", "nodejs", "react-query"], position: [1.2, 0.2, 2] },
  { id: "sqlite", name: "SQLite / SQL", category: "DATABASE", level: 82, context: "Relational database schema modeling, SQL query execution, indexing, and lightweight file persistence.", relatedIds: ["nodejs", "express"], position: [4, -1, 1] },
  { id: "zod", name: "Zod Schema Validation", category: "BACKEND", level: 85, context: "Runtime payload validation and type-safe schema inferencing across backend routes and forms.", relatedIds: ["typescript", "express"], position: [2.5, 3.8, -1.5] },

  // Testing & DevOps
  { id: "testing", name: "Vitest / Testing Library", category: "TESTING", level: 82, context: "Unit and integration testing for React components, state stores, and data utilities.", relatedIds: ["react", "typescript"], position: [3, 4.2, 0.5] },
  { id: "docker", name: "Docker Containerization", category: "TOOLS", level: 75, context: "Basic Dockerfiles and container runtime setups for localized development environments.", relatedIds: ["nodejs"], position: [4.2, 3, -2] },
  
  // 3D & Creative
  { id: "threejs", name: "Three.js", category: "3D_CREATIVE", level: 80, context: "WebGL 3D rendering engine for custom geometry, lighting, particle fields, raycasting, and camera controls.", relatedIds: ["r3f", "react", "webgl"], position: [0, -2, 2] },
  { id: "r3f", name: "React Three Fiber", category: "3D_CREATIVE", level: 82, context: "Declarative React renderer for Three.js enabling modular 3D scene architecture and frame hooks.", relatedIds: ["threejs", "react"], position: [1.8, -2.8, 0.5] },
  { id: "webgl", name: "WebGL Standards", category: "3D_CREATIVE", level: 78, context: "GPU hardware acceleration, canvas contexts, shader basics, and fallback rendering modes.", relatedIds: ["threejs", "r3f"], position: [-1.2, -3.2, 1] },
  { id: "animations", name: "Framer Motion", category: "3D_CREATIVE", level: 88, context: "Spring dynamics, view transitions, layout animations, and fluid interactive gestures.", relatedIds: ["react"], position: [-3, -2.8, -1.2] },

  // Tools & AI/ML
  { id: "git", name: "Git & Version Control", category: "TOOLS", level: 90, context: "Branching strategies, pull request code reviews, conflict resolution, and git commit history.", relatedIds: ["github", "vite"], position: [0, 4, 0] },
  { id: "github", name: "GitHub Workflows", category: "TOOLS", level: 92, context: "Repository maintenance, open-source project guides, and automated issue tracking.", relatedIds: ["git"], position: [1, 4.8, -1] },
  { id: "vite", name: "Vite Bundler", category: "TOOLS", level: 90, context: "Lightning-fast HMR dev server, optimized production chunk splitting, and plugin ecosystem.", relatedIds: ["react", "typescript"], position: [-2, 4.5, -2] },
  { id: "aiml", name: "AI / Python (TensorFlow)", category: "AI_ML", level: 78, context: "Deep learning model integration, LSTM sequence classification, and OpenCV image processing.", relatedIds: ["python"], position: [-4, 3, -1.5] }
];

export const STACKLY_PROJECT: ProjectItem = {
  id: "stackly",
  title: "STACKLY",
  subtitle: "WORKFORCE MANAGEMENT PLATFORM",
  tagline: "Enterprise workforce application featuring RBAC, real-time analytics dashboards, geofencing, and automated payroll operations.",
  category: "Enterprise",
  featured: true,
  description: "STACKLY is a production workforce management platform built to streamline employee operations, shift scheduling, geofenced attendance tracking, leave requests, expense reimbursements, timesheets, and role-based audit logging.",
  technologies: ["React", "TypeScript", "Redux Toolkit", "React Query", "MUI", "Node.js", "Express.js", "SQLite", "Socket.IO", "Zod", "Vite"],
  architecture: [
    "React 18 (Modular UI Component Hierarchy)",
    "TypeScript (Strict Type Safety & Contract Interfaces)",
    "Redux Toolkit / React Query (Global App State & Server Cache)",
    "REST API / Socket.IO (HTTP Network Protocol & Real-time WebSockets)",
    "Node.js / Express.js (Asynchronous Backend Microservices)",
    "SQLite (Relational Database Storage & Audit Persistence)"
  ],
  highlights: [
    "Role-Based Access Control (RBAC) with granular permissions for HR, Managers, and Employees.",
    "Real-time attendance & geofenced check-in verification.",
    "Interactive shift roster planner with drag-and-drop allocation.",
    "Automated payroll calculation, leave quotas, and expense workflows.",
    "Comprehensive audit logging and visual analytics reporting dashboards."
  ],
  caseStudy: {
    overview: "STACKLY was designed to solve complex multi-departmental workforce coordination challenges in modern enterprises through a single unified interface.",
    problem: "Traditional workforce management systems suffer from fragmented data, slow manual rosters, lack of real-time attendance validation, and cumbersome permission management.",
    solution: "Engineered a high-performance React + TypeScript single-page application with RBAC permission guards, real-time Socket.IO attendance triggers, and automated payroll generation.",
    architecture: "Built with a modular React + TypeScript frontend talking to a high-throughput Node.js Express REST API backend backed by SQLite persistence and Socket.IO real-time event distribution.",
    features: [
      "Employee Lifecycle & Profile Management",
      "Geofenced Location Check-in & Punch Verification",
      "Dynamic Shift Roster Planner & Scheduling",
      "Leave & Expense Multi-level Approval Workflows",
      "Automated Payroll & Salary Slip Generation",
      "Real-time Dashboard Metrics & Live Socket Feeds",
      "Audit Trail & Compliance Security Reporting"
    ],
    frontendEngineering: "Developed modular React UI components using Material UI and custom CSS variables, integrated Redux Toolkit for global app state, and used React Query to optimize network payload caching.",
    backendIntegration: "Engineered Express REST endpoints validated with Zod schemas, implemented JWT authentication middleware, and structured SQLite relational tables for fast query execution.",
    myContribution: "Solely responsible for the frontend architecture, RBAC client state guards, dashboard chart integration, and REST API contract synchronization.",
    challenges: "Synchronizing real-time attendance events across multiple concurrent active manager dashboards without over-fetching REST endpoints.",
    results: "Reduced shift planning time by 60% and provided zero-latency updates for punch-ins via WebSocket integration.",
    lessons: "Leveraging strict TypeScript interfaces shared between frontend schemas and backend Zod validators eliminates an entire class of runtime API bugs.",
    future: "Adding AI-assisted automatic roster scheduling based on employee availability and historical fatigue metrics."
  }
};

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    id: "deepfake-face-detection",
    title: "DeepFake Face Detection System",
    subtitle: "AI / Deep Learning Solution",
    tagline: "LSTM neural network architecture trained to detect synthetic facial manipulation in video frames.",
    category: "AI / Machine Learning",
    description: "A deep learning facial integrity framework utilizing convolutional feature extractors paired with Long Short-Term Memory (LSTM) sequence networks to flag deepfake manipulation.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "LSTM", "React"],
    githubUrl: "https://github.com/maheswari-pinneti",
    highlights: [
      "Frame-by-frame temporal consistency analysis using LSTM.",
      "Facial landmark extraction pipeline via OpenCV.",
      "React dashboard interface for video upload and confidence scoring."
    ],
    caseStudy: {
      overview: "DeepFake detection project built to identify subtle temporal inconsistencies in manipulated videos.",
      problem: "Traditional image classifiers fail on video deepfakes because they ignore temporal frame-to-frame artifacts.",
      solution: "Combined ResNet CNN frame feature extraction with an LSTM sequence model to classify temporal anomaly scores.",
      architecture: "Python TensorFlow / OpenCV backend pipeline exposed via API to a React confidence dashboard.",
      features: ["Video Upload Drag & Drop", "Frame Anomaly Timeline", "Face Landmark Bounding Box", "Confidence Percentage Score"],
      frontendEngineering: "Created a modern dark-mode React interface rendering playback charts and frame-by-frame confidence metrics.",
      backendIntegration: "Connected Flask REST API server executing PyTorch models on incoming video frames.",
      myContribution: "Engineered the React frontend dashboard and integrated the Python inference model.",
      challenges: "Optimizing frame sample extraction rate to process 1080p videos in under 5 seconds.",
      results: "Achieved 92.4% validation accuracy on benchmark fake face video datasets.",
      lessons: "Visualizing model confidence per frame increases user trust in AI predictions.",
      future: "Deploying model inference to WebAssembly for client-side zero-server video verification."
    }
  },
  {
    id: "rock-paper-scissors-game",
    title: "Interactive Rock Paper Scissors",
    subtitle: "Web Game & Gesture Visualizer",
    tagline: "Interactive browser game with clean animations, score state persistence, and hand gesture recognition.",
    category: "Interactive Game",
    description: "A sleek, responsive implementation of Rock Paper Scissors featuring smooth Framer Motion spring physics, dark mode design system, and local storage state persistence.",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/maheswari-pinneti",
    highlights: [
      "Fluid spring physics button interactions and outcome reveal state.",
      "Persistent win/loss score tracking across browser sessions.",
      "Fully accessible keyboard controls and screen reader labels."
    ]
  },
  {
    id: "lwc-developer-roadmap",
    title: "Salesforce LWC Developer Architecture",
    subtitle: "Open Source Engineering Guide",
    tagline: "Comprehensive open-source architectural guide and structured notes for Salesforce Lightning Web Components.",
    category: "Open Source",
    description: "A curated repository detailing modern LWC patterns, event communication, wire adapters, and enterprise frontend practices created for developers.",
    technologies: ["Salesforce LWC", "JavaScript", "HTML5", "CSS3", "Salesforce CLI"],
    githubUrl: "https://github.com/maheswari-pinneti",
    highlights: [
      "Structured reference guide for LWC reactive properties and wire services.",
      "Custom component communication patterns (PubSub, LMS, custom events).",
      "Highly starred community reference for LWC certifications."
    ]
  },
  {
    id: "data-structures-visualizer",
    title: "Data Structures & Algorithms Visualizer",
    subtitle: "Interactive Educational Tool",
    tagline: "Interactive web visualizer demonstrating tree traversals, graph searches, and sorting algorithms in real time.",
    category: "Creative Web",
    description: "An intuitive web tool designed to help developers visualize algorithm execution, step-by-step memory pointer movements, and time complexity metrics.",
    technologies: ["React", "TypeScript", "Canvas API", "CSS Grid"],
    githubUrl: "https://github.com/maheswari-pinneti",
    highlights: [
      "Step-by-step execution playback controls (Play, Pause, Speed adjustment).",
      "Visual memory pointer representations for Linked Lists, Trees, and Graphs.",
      "Clean, modern developer UI with performance analytics."
    ]
  }
];
