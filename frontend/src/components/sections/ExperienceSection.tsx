import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Code } from 'lucide-react';
import { EXPERIENCES } from '../../utils/data';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>ENGINEERING EXPERIENCE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            PROFESSIONAL IMPACT & RESPONSIBILITIES
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-2xl">
            Detailed breakdown of production engineering work, workforce platform development, and frontend architecture.
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-950/80 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-8 shadow-2xl relative"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
                <div>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-2xl font-bold font-mono text-white">{exp.role}</h3>
                    <span className="text-emerald-400 font-mono text-lg font-semibold">@ {exp.company}</span>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mt-1">{exp.location}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs px-3 py-1 rounded-full font-bold">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-sm font-mono text-zinc-300 leading-relaxed">
                "{exp.summary}"
              </p>

              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Engineering Responsibilities & Contributions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs text-zinc-300">
                  {exp.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="bg-zinc-900/60 border border-zinc-800 p-3.5 rounded-xl flex items-start space-x-3"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900 space-y-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                  TECHNOLOGY STACK UTILIZED
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-mono px-3 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
