import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Brain
} from 'lucide-react';
import { EDUCATION_DATA, CURRENTLY_LEARNING, CERTIFICATIONS, ACHIEVEMENTS } from '../../utils/data';

export const ComprehensiveAboutSection: React.FC = () => {
  return (
    <section id="about-details" className="py-24 px-4 md:px-8 bg-black relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>BACKGROUND, EDUCATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            ACADEMIC FOUNDATION & CONTINUOUS LEARNING
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-2xl">
            Computer science education, verified certifications, honors distinctions, and active technology explorations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            whileHover={{ y: -4 }}
            className="lg:col-span-7 bg-zinc-950/90 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between space-y-6 shadow-2xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-emerald-400 text-sm">
                    CSE
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-bold text-white">{EDUCATION_DATA.degree}</h3>
                    <p className="font-mono text-xs text-emerald-400">{EDUCATION_DATA.university} • {EDUCATION_DATA.institution}</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  CGPA {EDUCATION_DATA.cgpa}
                </span>
              </div>

              <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                <span>📍 {EDUCATION_DATA.location}</span>
                <span className="text-zinc-300 font-bold">{EDUCATION_DATA.years}</span>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                  ACADEMIC HIGHLIGHTS
                </span>
                <ul className="space-y-2 font-mono text-xs text-zinc-300">
                  {EDUCATION_DATA.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-900 flex items-center justify-between font-mono text-xs text-zinc-500">
              <span>SPECIALIZATION: ALGORITHMS & WEB SYSTEMS</span>
              <span className="text-emerald-400 font-bold">VERIFIED GRADUATE</span>
            </div>
          </motion.div>

          <div className="lg:col-span-5 bg-zinc-950/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 border-b border-zinc-900 pb-3">
                <Brain className="w-4 h-4" />
                <span className="uppercase tracking-widest font-bold">CURRENTLY LEARNING / NOW</span>
              </div>
              <p className="text-xs font-mono text-zinc-400">
                Technologies and software patterns I am actively exploring right now:
              </p>

              <div className="space-y-3 font-mono text-xs">
                {CURRENTLY_LEARNING.map((item, idx) => (
                  <div key={idx} className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-2xl flex items-center justify-between">
                    <span className="text-zinc-200">{item.name}</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-900">
              ACTIVE STUDY & RESEARCH IN 2026
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 border-b border-zinc-900 pb-3">
              <ShieldCheck className="w-4 h-4" />
              <span className="uppercase tracking-widest font-bold">VERIFIED CERTIFICATIONS</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-white text-sm">{cert.name}</h4>
                    <span className="text-emerald-400 font-bold">{cert.date}</span>
                  </div>
                  <p className="text-zinc-400 text-[11px]">{cert.provider}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((s) => (
                      <span key={s} className="bg-zinc-950 text-zinc-300 text-[10px] px-2 py-0.5 rounded border border-zinc-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 border-b border-zinc-900 pb-3">
              <Award className="w-4 h-4" />
              <span className="uppercase tracking-widest font-bold">ACHIEVEMENTS & HONORS</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-white text-sm">{ach.title}</h4>
                    <span className="text-cyan-400 font-bold">{ach.date}</span>
                  </div>
                  <p className="text-zinc-300 text-[11px]">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
