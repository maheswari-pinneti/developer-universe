import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';
import { MILESTONES } from '../../utils/data';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 md:px-8 bg-zinc-950/60 relative overflow-hidden border-t border-b border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <Compass className="w-3.5 h-3.5" />
            <span>ENGINEERING JOURNEY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            MILESTONES & GROWTH
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-xl">
            Chronological progression from Computer Science foundation to production software development.
          </p>
        </div>

        <div className="relative border-l-2 border-emerald-500/30 ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
          {MILESTONES.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-zinc-950 border-2 border-emerald-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              <div className="bg-zinc-950/90 border border-zinc-800 group-hover:border-emerald-500/40 p-6 rounded-2xl backdrop-blur-md space-y-3 transition-all max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-900 pb-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xl font-bold text-emerald-400">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                      // {item.subtitle}
                    </span>
                  </div>
                  {item.year === 'NOW' && (
                    <span className="inline-flex items-center space-x-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                      <Sparkles className="w-3 h-3" />
                      <span>ACTIVE</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-mono font-bold text-white">{item.title}</h3>
                <p className="text-xs font-mono text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
