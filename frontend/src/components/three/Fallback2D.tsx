import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';
import { SKILL_NODES } from '../../utils/data';

interface Fallback2DProps {
  onSelectNode?: (id: string) => void;
  hoveredNodeId?: string | null;
  onHoverNode?: (id: string | null) => void;
}

export const Fallback2D: React.FC<Fallback2DProps> = ({
  onSelectNode,
  hoveredNodeId,
  onHoverNode,
}) => {
  return (
    <div className="w-full bg-zinc-950/80 border border-emerald-500/20 rounded-3xl p-6 md:p-8 backdrop-blur-md space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center space-x-2">
          <Terminal className="w-5 h-5 text-emerald-400" />
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
            ENGINEERING GRAPH (2D LIGHTWEIGHT ENGINE)
          </span>
        </div>
        <div className="flex items-center space-x-2 text-[10px] font-mono text-zinc-500">
          <span>ACCESSIBLE GRAPH MODE</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {SKILL_NODES.map((node) => {
          const isHovered = hoveredNodeId === node.id;
          return (
            <motion.button
              key={node.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelectNode?.(node.id)}
              onMouseEnter={() => onHoverNode?.(node.id)}
              onMouseLeave={() => onHoverNode?.(null)}
              className={`p-3.5 rounded-2xl border text-left font-mono transition-all flex flex-col justify-between ${
                isHovered
                  ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-lg'
                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-emerald-500/40'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-xs font-bold text-emerald-400">{node.name}</span>
                <Sparkles className={`w-3.5 h-3.5 ${isHovered ? 'text-white' : 'text-zinc-600'}`} />
              </div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">
                {node.category}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
