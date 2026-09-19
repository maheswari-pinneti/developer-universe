import type { GitHubRepo, UserProfile, ProjectItem, ExperienceItem, SkillNode, ContactPayload } from '../types';
import { PROFILE_DATA, EXPERIENCES, SKILL_NODES, STACKLY_PROJECT, OTHER_PROJECTS } from '../utils/data';

const API_BASE = '/api';

export async function fetchProfile(): Promise<UserProfile> {
  try {
    const res = await fetch(`${API_BASE}/profile`);
    if (!res.ok) throw new Error('API server unavailable');
    const json = await res.json();
    return json.data;
  } catch {
    return PROFILE_DATA;
  }
}

export async function fetchExperiences(): Promise<ExperienceItem[]> {
  try {
    const res = await fetch(`${API_BASE}/experience`);
    if (!res.ok) throw new Error('API server unavailable');
    const json = await res.json();
    return json.data;
  } catch {
    return EXPERIENCES;
  }
}

export async function fetchSkills(): Promise<SkillNode[]> {
  try {
    const res = await fetch(`${API_BASE}/skills`);
    if (!res.ok) throw new Error('API server unavailable');
    const json = await res.json();
    return json.data;
  } catch {
    return SKILL_NODES;
  }
}

export async function fetchProjects(): Promise<{ main: ProjectItem; others: ProjectItem[] }> {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error('API server unavailable');
    const json = await res.json();
    return json.data;
  } catch {
    return {
      main: STACKLY_PROJECT,
      others: OTHER_PROJECTS,
    };
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`${API_BASE}/github/repos`);
    if (!res.ok) throw new Error('API server unavailable');
    const json = await res.json();
    return json.data;
  } catch {
    return [
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
        topics: ["react", "typescript", "threejs", "portfolio", "webgl"],
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
        topics: ["salesforce", "lwc", "javascript", "architecture"],
        isArchived: false,
      }
    ];
  }
}

export async function sendContactForm(payload: ContactPayload): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to submit form');
    return { success: true, message: json.message || 'Message sent successfully!' };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Message couldn\'t be sent. Please try again.';
    return { success: false, message: errorMsg };
  }
}
