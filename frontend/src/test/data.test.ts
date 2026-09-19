import { describe, it, expect } from 'vitest';
import { SKILL_NODES, STACKLY_PROJECT, OTHER_PROJECTS } from '../utils/data';

describe('Portfolio Static Data & Schema Integrity', () => {
  it('contains valid skill nodes with required engineering context', () => {
    expect(SKILL_NODES.length).toBeGreaterThan(10);
    SKILL_NODES.forEach((node) => {
      expect(node.id).toBeDefined();
      expect(node.name).not.toBe('');
      expect(node.context).not.toBe('');
      expect(node.level).toBeGreaterThan(0);
    });
  });

  it('contains complete centerpiece Stackly project specifications', () => {
    expect(STACKLY_PROJECT.id).toBe('stackly');
    expect(STACKLY_PROJECT.title).toBe('STACKLY');
    expect(STACKLY_PROJECT.caseStudy).toBeDefined();
    expect(STACKLY_PROJECT.caseStudy?.features.length).toBeGreaterThan(4);
  });

  it('contains valid additional project artifacts', () => {
    expect(OTHER_PROJECTS.length).toBeGreaterThan(0);
    OTHER_PROJECTS.forEach((proj) => {
      expect(proj.title).toBeDefined();
      expect(proj.technologies.length).toBeGreaterThan(0);
    });
  });
});
