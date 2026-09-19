import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Code2, 
  X, 
  FileText
} from 'lucide-react';
import { PROFILE_DATA, SKILL_NODES } from '../../utils/data';
import { useAppStore } from '../../store/useAppStore';
import { CanvasContainer } from '../three/CanvasContainer';
import { DeveloperCoreScene } from '../three/DeveloperCoreScene';
import { SoundFX } from '../../utils/sound';

export const HeroSection: React.FC = () => {
  const { soundEnabled, setResumeModalOpen } = useAppStore();
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const hoveredNode = SKILL_NODES.find((n) => n.id === hoveredNodeId);
  const selectedNode = SKILL_NODES.find((n) => n.id === selectedNodeId);

  const scrollToSection = (id: string) => {
    SoundFX.playClick(soundEnabled);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/30 via-zinc-950 to-black pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-6 space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-emerald-400 tracking-wider font-semibold uppercase">
              AVAILABLE FOR FRONTEND OPPORTUNITIES
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-none">
              MAHESWARI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                PINNETI
              </span>
            </h1>
            <div className="flex items-center space-x-3 text-emerald-400 font-mono text-sm md:text-base tracking-widest uppercase font-bold pt-1">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>{PROFILE_DATA.title}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl font-sans">
              "{PROFILE_DATA.shortIntro}"
            </p>
            <p className="text-zinc-400 text-xs md:text-sm font-mono border-l-2 border-emerald-500/40 pl-4 py-1">
              {PROFILE_DATA.secondaryTitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() => scrollToSection('projects')}
              onMouseEnter={() => SoundFX.playHover(soundEnabled)}
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-mono font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:scale-105"
            >
              <span>VIEW WORK</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('journey')}
              onMouseEnter={() => SoundFX.playHover(soundEnabled)}
              className="flex items-center space-x-2 bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 text-zinc-200 font-mono text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all backdrop-blur-md"
            >
              <span>EXPLORE EXPERIENCE</span>
            </button>

            <button
              onClick={() => setResumeModalOpen(true)}
              onMouseEnter={() => SoundFX.playHover(soundEnabled)}
              className="flex items-center space-x-2 bg-zinc-950/80 hover:bg-zinc-900 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-widest px-5 py-3.5 rounded-full transition-all backdrop-blur-md"
            >
              <FileText className="w-4 h-4" />
              <span>RESUME</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-900 font-mono text-xs"
          >
            <div>
              <span className="text-zinc-500 block uppercase text-[10px]">EXPERIENCE</span>
              <span className="text-white font-bold text-sm">1+ YEARS</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase text-[10px]">LOCATION</span>
              <span className="text-emerald-400 font-bold text-sm">BENGALURU</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase text-[10px]">MAIN FRAMEWORK</span>
              <span className="text-cyan-400 font-bold text-sm">REACT & TS</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-6 relative">
          <CanvasContainer heightClassName="h-[460px] sm:h-[550px] lg:h-[620px]">
            <DeveloperCoreScene
              onHoverNode={(id) => setHoveredNodeId(id)}
              onClickNode={(id) => {
                SoundFX.playClick(soundEnabled);
                setSelectedNodeId(id);
              }}
              hoveredNodeId={hoveredNodeId}
            />
          </CanvasContainer>

          <AnimatePresence>
            {hoveredNode && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 border border-emerald-500/40 p-4 rounded-2xl backdrop-blur-xl pointer-events-none shadow-2xl z-20"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {hoveredNode.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">CLICK TO INSPECT</span>
                </div>
                <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                  "{hoveredNode.context}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedNode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-zinc-950 border border-emerald-500/40 rounded-3xl p-6 md:p-8 max-w-lg w-full space-y-6 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedNodeId(null)}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>DEVELOPER CORE NODE</span>
                </div>
                <h3 className="text-2xl font-mono font-bold text-white">{selectedNode.name}</h3>
                <p className="text-xs font-mono text-zinc-400">Category: {selectedNode.category}</p>
              </div>

              <div className="space-y-3 bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800 text-xs font-mono text-zinc-300">
                <span className="text-emerald-400 font-bold block uppercase tracking-wider">Engineering Context</span>
                <p className="leading-relaxed">"{selectedNode.context}"</p>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <span className="text-zinc-500 uppercase tracking-widest block text-[10px]">
                  Ecosystem Integration Level
                </span>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                    style={{ width: `${selectedNode.level}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-zinc-400 pt-1">
                  <span>Proficiency</span>
                  <span className="text-emerald-400 font-bold">{selectedNode.level}%</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedNodeId(null)}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl transition-colors"
              >
                CLOSE INSPECTION
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
