import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { ENGINEERING_PRINCIPLES } from '../../utils/data';

export const EngineeringPrinciplesSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <Code className="w-3.5 h-3.5" />
            <span>HOW I WORK & CODE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            ENGINEERING PRINCIPLES
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-xl">
            Foundational software engineering principles guiding component design, performance, and contract safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          {ENGINEERING_PRINCIPLES.map((principle, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-zinc-950 border border-zinc-800 hover:border-emerald-500/40 rounded-3xl p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                  <span className="text-emerald-400 font-bold text-sm">0{idx + 1}</span>
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="font-bold text-white text-sm leading-snug">{principle.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-[11px]">
                  {principle.desc}
                </p>
              </div>

              <div className="pt-2 text-[10px] text-emerald-400/80 font-bold flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>ENFORCED IN CODEBASE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
