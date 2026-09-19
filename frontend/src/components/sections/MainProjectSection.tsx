import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  X
} from 'lucide-react';
import { STACKLY_PROJECT } from '../../utils/data';
import { useAppStore } from '../../store/useAppStore';
import { SoundFX } from '../../utils/sound';

export const MainProjectSection: React.FC = () => {
  const { soundEnabled } = useAppStore();
  const [activeArchLayer, setActiveArchLayer] = useState<number | null>(null);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  const archLayers = [
    { name: 'React 18', type: 'Frontend UI Components', desc: 'Component-based application interface, modular dashboard views, and dynamic forms.' },
    { name: 'TypeScript', type: 'Contract Layer', desc: 'Strict interface contracts and type definitions eliminating runtime API data bugs.' },
    { name: 'Redux / Query', type: 'State & Data Cache', desc: 'Client application state slices with optimistic UI updates and background query refetching.' },
    { name: 'REST API & Sockets', type: 'Network Protocol', desc: 'HTTP REST communication and real-time Socket.IO WebSocket channels for punch-ins.' },
    { name: 'Node.js & Express', type: 'Backend Service', desc: 'Asynchronous route middleware, Zod payload validation, and JWT session handling.' },
    { name: 'SQLite', type: 'Persistence DB', desc: 'Relational data tables for staff records, shifts, attendance logs, and audit trails.' }
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FLAGSHIP PROJECT CENTERPIECE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            STACKLY — WORKFORCE MANAGEMENT
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-2xl">
            Enterprise workforce application featuring RBAC, real-time analytics dashboards, geofencing, leave quotas, and automated payroll operations.
          </p>
        </div>

        <div className="bg-zinc-950/90 border border-emerald-500/40 rounded-3xl p-6 sm:p-10 backdrop-blur-xl space-y-10 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-900 pb-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-mono font-bold text-white tracking-tight">STACKLY</span>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono px-3 py-1 rounded-full font-bold">
                  PRODUCTION SYSTEM
                </span>
              </div>
              <p className="text-zinc-300 font-mono text-xs max-w-2xl leading-relaxed">
                "{STACKLY_PROJECT.tagline}"
              </p>
            </div>

            <button
              onClick={() => {
                SoundFX.playClick(soundEnabled);
                setCaseStudyOpen(true);
              }}
              className="flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-2xl transition-all shadow-lg shadow-emerald-500/20 shrink-0"
            >
              <span>EXPLORE CASE STUDY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Key Implemented Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs text-zinc-300">
              {STACKLY_PROJECT.highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl flex items-start space-x-3 hover:border-emerald-500/30 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-4 border-t border-zinc-900">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4" />
                STACKLY ARCHITECTURE & DATA FLOW
              </h3>
              <span className="text-[10px] font-mono text-zinc-500">HOVER LAYERS TO INSPECT</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {archLayers.map((layer, idx) => {
                const isHovered = activeArchLayer === idx;
                return (
                  <motion.div
                    key={layer.name}
                    onMouseEnter={() => {
                      SoundFX.playHover(soundEnabled);
                      setActiveArchLayer(idx);
                    }}
                    onMouseLeave={() => setActiveArchLayer(null)}
                    whileHover={{ y: -4 }}
                    className={`p-4 rounded-2xl border font-mono transition-all cursor-pointer relative ${
                      isHovered
                        ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg'
                        : 'bg-zinc-900/70 border-zinc-800 text-zinc-300'
                    }`}
                  >
                    <div className="text-[10px] text-zinc-500 font-bold mb-1">0{idx + 1}</div>
                    <div className="text-sm font-bold text-emerald-400">{layer.name}</div>
                    <div className="text-[10px] text-zinc-400 mt-1">{layer.type}</div>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {activeArchLayer !== null ? (
                <motion.div
                  key={activeArchLayer}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-2xl font-mono text-xs text-emerald-300 flex items-start space-x-3"
                >
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">{archLayers[activeArchLayer].name}</span>:{" "}
                    {archLayers[activeArchLayer].desc}
                  </div>
                </motion.div>
              ) : (
                <div className="p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl font-mono text-xs text-zinc-500 text-center">
                  Hover over any architecture node above to reveal its data pipeline role.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {caseStudyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-950 border border-emerald-500/40 rounded-3xl p-6 sm:p-10 max-w-4xl w-full my-8 space-y-8 shadow-2xl relative"
            >
              <button
                onClick={() => setCaseStudyOpen(false)}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 border-b border-zinc-800 pb-6">
                <span className="text-xs font-mono text-emerald-400 font-bold tracking-widest uppercase">
                  PROJECT CASE STUDY // 10-SECTION BREAKDOWN
                </span>
                <h2 className="text-3xl font-mono font-bold text-white">STACKLY — WORKFORCE SUITE</h2>
                <p className="text-xs font-mono text-zinc-400">
                  Architectural, frontend, and backend engineering review.
                </p>
              </div>

              <div className="space-y-8 font-mono text-xs leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                <div className="space-y-2">
                  <h4 className="text-emerald-400 font-bold uppercase text-sm">01 — Overview</h4>
                  <p className="text-zinc-300">{STACKLY_PROJECT.caseStudy?.overview}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-emerald-400 font-bold uppercase text-sm">02 — Problem</h4>
                  <p className="text-zinc-300">{STACKLY_PROJECT.caseStudy?.problem}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-emerald-400 font-bold uppercase text-sm">03 — Architecture</h4>
                  <p className="text-zinc-300">{STACKLY_PROJECT.caseStudy?.architecture}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-emerald-400 font-bold uppercase text-sm">04 — Core Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300">
                    {STACKLY_PROJECT.caseStudy?.features.map((f, idx) => (
                      <div key={idx} className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl">
                        • {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-emerald-400 font-bold uppercase text-sm">05 — Frontend Engineering</h4>
                  <p className="text-zinc-300">{STACKLY_PROJECT.caseStudy?.frontendEngineering}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-emerald-400 font-bold uppercase text-sm">06 — Backend Integration</h4>
                  <p className="text-zinc-300">{STACKLY_PROJECT.caseStudy?.backendIntegration}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-emerald-400 font-bold uppercase text-sm">07 — Engineering Challenges</h4>
                  <p className="text-zinc-300">{STACKLY_PROJECT.caseStudy?.challenges}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-emerald-400 font-bold uppercase text-sm">08 — Quantifiable Results</h4>
                  <p className="text-zinc-300">{STACKLY_PROJECT.caseStudy?.results}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-emerald-400 font-bold uppercase text-sm">09 — Lessons Learned</h4>
                  <p className="text-zinc-300">{STACKLY_PROJECT.caseStudy?.lessons}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-emerald-400 font-bold uppercase text-sm">10 — Future Improvements</h4>
                  <p className="text-zinc-300">{STACKLY_PROJECT.caseStudy?.future}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex justify-end">
                <button
                  onClick={() => setCaseStudyOpen(false)}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl transition-colors"
                >
                  CLOSE CASE STUDY
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
