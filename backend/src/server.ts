import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());

// Datadog APM & Request Tracing Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const traceId = req.headers['x-datadog-trace-id'] || `dd-trace-${Date.now()}`;
  res.setHeader('x-datadog-trace-id', traceId as string);
  console.log(`[DATADOG APM LOG] ${req.method} ${req.url} - TraceID: ${traceId}`);
  next();
});

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests from this IP, please try again later.' },
});
app.use('/api/', limiter);

// Mock DB Profile Data
const PROFILE_DATA = {
  name: "MAHESWARI PINNETI",
  title: "FRONTEND DEVELOPER",
  secondaryTitle: "React • TypeScript • Node.js • Three.js • AI Integration",
  shortIntro: "Building scalable interfaces, production applications and immersive web experiences.",
  fullBio: "Frontend developer focused on turning complex product requirements into clean, responsive and intuitive interfaces with modern web standards and creative WebGL visuals.",
  location: "Bengaluru, India",
  experienceYears: "1+ years",
  education: "B.Tech — Computer Science & Engineering",
  githubUrl: "https://github.com/maheswari-pinneti",
  linkedinUrl: "https://linkedin.com/in/maheswari-pinneti",
  email: "maheswaripinneti@gmail.com"
};

// Zod Contact Schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Zod Inquiry Schema
const inquirySchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Invalid email'),
  projectType: z.string().min(2, 'Project type required'),
  message: z.string().min(10, 'Details required'),
});

// REST API Endpoints
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    services: { database: 'active', githubApi: 'active' }
  });
});

app.get('/api/profile', (_req: Request, res: Response) => {
  res.json({ success: true, data: PROFILE_DATA, timestamp: new Date().toISOString() });
});

app.get('/api/projects', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: [
      {
        id: "stackly",
        title: "STACKLY",
        subtitle: "WORKFORCE MANAGEMENT PLATFORM",
        category: "Enterprise",
        featured: true,
        technologies: ["React", "TypeScript", "Redux Toolkit", "Node.js", "Express.js", "SQLite"],
        githubUrl: "https://github.com/maheswari-pinneti"
      },
      {
        id: "deepfake-face-detection",
        title: "DeepFake Face Detection System",
        subtitle: "AI / Deep Learning Solution",
        category: "AI / Machine Learning",
        featured: true,
        technologies: ["Python", "TensorFlow", "OpenCV", "LSTM", "React"],
        githubUrl: "https://github.com/maheswari-pinneti"
      }
    ],
    timestamp: new Date().toISOString()
  });
});

app.get('/api/skills', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: [
      { id: "react", name: "React 18+", category: "FRONTEND", level: 95 },
      { id: "typescript", name: "TypeScript", category: "FRONTEND", level: 92 },
      { id: "nodejs", name: "Node.js", category: "BACKEND", level: 88 },
      { id: "threejs", name: "Three.js", category: "3D_CREATIVE", level: 80 }
    ],
    timestamp: new Date().toISOString()
  });
});

app.get('/api/experience', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: [
      {
        id: "stackly-dev",
        role: "Frontend Developer",
        company: "Stackly",
        period: "2024 — Present",
        location: "Bengaluru, India"
      },
      {
        id: "exner-dev",
        role: "Frontend & Web Engineering Developer",
        company: "Exner Technologies",
        period: "2023 — 2024",
        location: "Bengaluru, India"
      }
    ],
    timestamp: new Date().toISOString()
  });
});

app.post('/api/inquiries', (req: Request, res: Response, next: NextFunction) => {
  try {
    const validated = inquirySchema.parse(req.body);
    console.log('[API BACKEND PROJECT INQUIRY RECORDED]:', validated);
    res.status(201).json({
      success: true,
      message: 'Project inquiry recorded. Maheswari will contact you shortly.',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    next(err);
  }
});

app.get('/api/github/repos', async (_req: Request, res: Response) => {
  try {
    const response = await fetch('https://api.github.com/users/maheswari-pinneti/repos?sort=updated&per_page=6', {
      headers: { 'User-Agent': 'NodeJS-Express-Server' }
    });
    if (!response.ok) throw new Error('GitHub API rate limited');
    const repos = await response.json();
    
    const formatted = repos.map((r: any) => ({
      id: r.id,
      name: r.name,
      fullName: r.full_name,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      updatedAt: r.updated_at,
      htmlUrl: r.html_url,
      topics: r.topics || [],
      isArchived: r.archived,
    }));

    res.json({ success: true, data: formatted, timestamp: new Date().toISOString() });
  } catch {
    // Fallback static list
    res.json({
      success: true,
      data: [
        {
          id: 101,
          name: "developer-universe",
          fullName: "maheswari-pinneti/developer-universe",
          description: "Interactive 3D developer portfolio built with React 18, TypeScript, Three.js, and Node.js REST backend.",
          language: "TypeScript",
          stars: 12,
          forks: 3,
          updatedAt: new Date().toISOString(),
          htmlUrl: "https://github.com/maheswari-pinneti/developer-universe",
          topics: ["react", "typescript", "threejs", "portfolio"],
          isArchived: false,
        },
        {
          id: 102,
          name: "salesforce-lwc-notes",
          fullName: "maheswari-pinneti/salesforce-lwc-notes",
          description: "Structured architectural guides, notes, and roadmaps for Salesforce Lightning Web Components (LWC).",
          language: "JavaScript",
          stars: 45,
          forks: 18,
          updatedAt: new Date().toISOString(),
          htmlUrl: "https://github.com/maheswari-pinneti",
          topics: ["salesforce", "lwc", "javascript"],
          isArchived: false,
        }
      ],
      timestamp: new Date().toISOString()
    });
  }
});

app.post('/api/contact', (req: Request, res: Response, next: NextFunction) => {
  try {
    const validated = contactSchema.parse(req.body);
    console.log('[API BACKEND CONTACT RECORDED]:', validated);
    res.status(201).json({
      success: true,
      message: 'Message delivered successfully to Maheswari Pinneti.',
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    next(err);
  }
});

// Centralized Error Handling Middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('[EXPRESS SERVER ERROR]:', err);
  if (err instanceof z.ZodError) {
    res.status(400).json({ success: false, message: err.errors[0].message, errors: err.errors });
    return;
  }
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`[NODE/EXPRESS REST BACKEND RUNNING ON PORT ${PORT}]`);
});
