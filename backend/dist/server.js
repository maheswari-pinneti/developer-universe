import express from 'express';
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
// REST API Endpoints
app.get('/api/profile', (_req, res) => {
    res.json({ success: true, data: PROFILE_DATA, timestamp: new Date().toISOString() });
});
app.get('/api/github/repos', async (_req, res) => {
    try {
        const response = await fetch('https://api.github.com/users/maheswari-pinneti/repos?sort=updated&per_page=6', {
            headers: { 'User-Agent': 'NodeJS-Express-Server' }
        });
        if (!response.ok)
            throw new Error('GitHub API rate limited');
        const repos = await response.json();
        const formatted = repos.map((r) => ({
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
    }
    catch {
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
app.post('/api/contact', (req, res, next) => {
    try {
        const validated = contactSchema.parse(req.body);
        console.log('[API BACKEND CONTACT RECORDED]:', validated);
        res.status(201).json({
            success: true,
            message: 'Message delivered successfully to Maheswari Pinneti.',
            timestamp: new Date().toISOString(),
        });
    }
    catch (err) {
        next(err);
    }
});
// Centralized Error Handling Middleware
app.use((err, _req, res, _next) => {
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
