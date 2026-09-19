import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';
import { SKILL_NODES } from '../../utils/data';
import { CanvasContainer } from '../three/CanvasContainer';
import { SkillConstellationScene } from '../three/SkillConstellationScene';
import { Fallback2D } from '../three/Fallback2D';
import { useAppStore } from '../../store/useAppStore';

export const SkillsSection: React.FC = () => {
  const { webglSupported } = useAppStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const categories = ['ALL', 'FRONTEND', 'BACKEND', '3D_CREATIVE', 'TOOLS'];
  const hoveredNode = SKILL_NODES.find((n) => n.id === hoveredNodeId);

  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-zinc-950/80 relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
              <Cpu className="w-3.5 h-3.5" />
              <span>ENGINEERING CONSTELLATION</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              3D INTERACTIVE SKILL NETWORK
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-xl">
              Hover over nodes in the interactive 3D universe to inspect skill ecosystems and interconnected dependencies.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {webglSupported ? (
            <CanvasContainer heightClassName="h-[500px] md:h-[650px]">
              <SkillConstellationScene
                onHoverNode={(id) => setHoveredNodeId(id)}
                hoveredNodeId={hoveredNodeId}
                selectedCategory={selectedCategory}
              />
            </CanvasContainer>
          ) : (
            <Fallback2D
              onHoverNode={(id) => setHoveredNodeId(id)}
              hoveredNodeId={hoveredNodeId}
            />
          )}

          {hoveredNode && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-4 left-4 right-4 bg-zinc-950/95 border border-emerald-500/40 p-5 rounded-2xl backdrop-blur-xl shadow-2xl space-y-2 pointer-events-none"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-sm font-bold text-white">{hoveredNode.name}</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full uppercase">
                  {hoveredNode.category}
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-300">
                "{hoveredNode.context}"
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
