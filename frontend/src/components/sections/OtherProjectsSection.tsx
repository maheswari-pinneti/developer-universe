import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Sparkles, X, ArrowRight } from 'lucide-react';
import { OTHER_PROJECTS } from '../../utils/data';
import type { ProjectItem } from '../../types';
import { useAppStore } from '../../store/useAppStore';
import { SoundFX } from '../../utils/sound';

export const OtherProjectsSection: React.FC = () => {
  const { soundEnabled } = useAppStore();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section className="py-24 px-4 md:px-8 bg-zinc-950/60 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>ADDITIONAL WORK & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            PROJECT ARTIFACTS & EXPERIMENTS
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-xl">
            Interactive digital project artifacts featuring deep learning models, LWC roadmaps, and DSA visualizers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OTHER_PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.id}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                SoundFX.playClick(soundEnabled);
                setSelectedProject(proj);
              }}
              className="bg-zinc-950 border border-zinc-800 hover:border-emerald-500/40 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-xl cursor-pointer group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    ARTIFACT_0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded-full border border-zinc-800">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-xl font-mono font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-900">
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-900 text-zinc-300 text-[10px] font-mono px-2.5 py-1 rounded-lg border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold pt-1">
                  <span>INSPECT ARTIFACT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-zinc-950 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full space-y-6 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 font-bold uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-mono font-bold text-white">{selectedProject.title}</h3>
                <p className="text-xs font-mono text-zinc-400">{selectedProject.subtitle}</p>
              </div>

              <p className="text-xs font-mono text-zinc-300 leading-relaxed bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800">
                "{selectedProject.description}"
              </p>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-widest block">
                  Project Highlights
                </span>
                <div className="space-y-2 text-xs font-mono text-zinc-300">
                  {selectedProject.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-zinc-800">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-mono text-xs px-4 py-2.5 rounded-xl font-bold transition-colors"
                  >
                    <span>VIEW ON GITHUB</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-auto px-5 py-2.5 bg-emerald-500 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
