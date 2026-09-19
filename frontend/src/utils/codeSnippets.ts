export const CODE_SNIPPETS = {
  react: {
    language: 'tsx',
    title: 'WorkforceDashboard.tsx',
    code: `import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEmployeeStats } from '../api/workforce';

export const WorkforceDashboard: React.FC = () => {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['employeeStats'],
    queryFn: fetchEmployeeStats,
    refetchInterval: 15000,
  });

  const activeMetrics = useMemo(() => {
    if (!stats) return { active: 0, percentage: '0%' };
    return {
      active: stats.activeCount,
      percentage: \`\${((stats.activeCount / stats.totalCount) * 100).toFixed(1)}%\`
    };
  }, [stats]);

  if (isLoading) return <div className="animate-pulse bg-emerald-950/20 h-40 rounded-xl" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-zinc-950/80 border border-emerald-500/20 rounded-2xl backdrop-blur-md">
      <div className="flex flex-col">
        <span className="text-xs text-emerald-400/70 uppercase tracking-widest">Active Staff</span>
        <span className="text-3xl font-mono text-emerald-400 font-bold">{activeMetrics.active}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-zinc-400 uppercase tracking-widest">Attendance Rate</span>
        <span className="text-3xl font-mono text-cyan-400 font-bold">{activeMetrics.percentage}</span>
      </div>
    </div>
  );
};`
  },
  typescript: {
    language: 'typescript',
    title: 'types/rbac.ts',
    code: `export type UserRole = 'SUPER_ADMIN' | 'HR_MANAGER' | 'TEAM_LEAD' | 'EMPLOYEE';

export interface PermissionGate {
  module: 'ATTENDANCE' | 'ROSTER' | 'PAYROLL' | 'AUDIT_LOGS';
  action: 'READ' | 'WRITE' | 'APPROVE' | 'DELETE';
}

export type RolePermissionMap = Record<UserRole, PermissionGate[]>;

export function hasPermission(role: UserRole, gate: PermissionGate, permissions: RolePermissionMap): boolean {
  const allowedGates = permissions[role] || [];
  return allowedGates.some(
    (p) => p.module === gate.module && p.action === gate.action
  );
}`
  },
  node: {
    language: 'typescript',
    title: 'server/routes/contact.ts',
    code: `import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const contactRouter = Router();

contactRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validated = contactSchema.parse(req.body);
    // Process contact submission logic...
    res.status(201).json({
      success: true,
      message: 'Message delivered to Maheswari Pinneti',
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    next(err);
  }
});`
  },
  api: {
    language: 'json',
    title: 'GET /api/projects/stackly',
    code: `{
  "success": true,
  "data": {
    "id": "stackly",
    "title": "STACKLY",
    "category": "Enterprise Workforce Management",
    "stack": ["React", "TypeScript", "Redux", "Express", "SQLite"],
    "metrics": {
      "activeUsers": 1250,
      "shiftLatencyMs": 14,
      "rbacGuardCoverage": "100%"
    },
    "status": "PRODUCTION"
  },
  "timestamp": "2026-09-19T13:42:00.000Z"
}`
  }
};
