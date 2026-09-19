import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import { PROFILE_DATA, EXPERIENCES, SKILL_NODES } from '../../utils/data';
import { useAppStore } from '../../store/useAppStore';
import { SoundFX } from '../../utils/sound';

export const ResumeModal: React.FC = () => {
  const { resumeModalOpen, setResumeModalOpen, soundEnabled } = useAppStore();

  if (!resumeModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-zinc-950 border border-emerald-500/40 rounded-3xl p-6 sm:p-10 max-w-4xl w-full my-8 space-y-8 shadow-2xl relative font-mono"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">
                MAHESWARI PINNETI // RESUME SPECIFICATION
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  SoundFX.playClick(soundEnabled);
                  window.print();
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-xl text-xs font-bold transition-all"
              >
                <Download className="w-4 h-4" />
                <span>PRINT / DOWNLOAD PDF</span>
              </button>

              <button
                onClick={() => setResumeModalOpen(false)}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2 text-xs leading-relaxed">
            <div className="space-y-2 border-b border-zinc-900 pb-6">
              <h1 className="text-3xl font-bold text-white tracking-tight">{PROFILE_DATA.name}</h1>
              <p className="text-emerald-400 text-sm font-bold">{PROFILE_DATA.title}</p>
              <p className="text-zinc-400 text-xs">{PROFILE_DATA.secondaryTitle}</p>
              <div className="flex flex-wrap gap-4 text-zinc-400 pt-2 text-[11px]">
                <span>📍 {PROFILE_DATA.location}</span>
                <span>📧 {PROFILE_DATA.email}</span>
                <span>🔗 github.com/maheswari-pinneti</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-emerald-400 uppercase font-bold text-sm tracking-widest">01 — PROFESSIONAL PROFILE</h3>
              <p className="text-zinc-300">{PROFILE_DATA.fullBio}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-emerald-400 uppercase font-bold text-sm tracking-widest">02 — WORK EXPERIENCE</h3>
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-white text-sm">{exp.role} @ {exp.company}</span>
                    <span className="text-emerald-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 text-zinc-300">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-emerald-400">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-emerald-400 uppercase font-bold text-sm tracking-widest">03 — TECHNICAL SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {SKILL_NODES.map((sk) => (
                  <span key={sk.id} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-xl">
                    {sk.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-emerald-400 uppercase font-bold text-sm tracking-widest">04 — EDUCATION</h3>
              <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl flex justify-between items-center text-white">
                <div>
                  <div className="font-bold">{PROFILE_DATA.education}</div>
                  <div className="text-zinc-400 text-[11px]">Computer Science & Engineering</div>
                </div>
                <span className="text-emerald-400 font-bold">2020 — 2024</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
