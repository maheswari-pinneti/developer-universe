import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Briefcase, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, PROFILE_DATA } from '../../utils/data';
import { useAppStore } from '../../store/useAppStore';
import { SoundFX } from '../../utils/sound';

export const ServicesAndOpportunitiesSection: React.FC = () => {
  const { soundEnabled } = useAppStore();

  const scrollToContact = () => {
    SoundFX.playClick(soundEnabled);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-zinc-950/80 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>SERVICES & OPPORTUNITIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            WHAT I CAN BUILD FOR YOU
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-xl">
            Specialized frontend engineering services, contract dashboard development, and availability status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((srv) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -4 }}
              className="bg-zinc-950 border border-zinc-800 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                  <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">
                    {srv.tagline}
                  </span>
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-xl font-mono font-bold text-white">{srv.title}</h3>
                <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-zinc-900 font-mono text-xs">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">
                  DELIVERABLES
                </span>
                <div className="grid grid-cols-2 gap-2 text-zinc-300">
                  {srv.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center space-x-1.5 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/40 rounded-3xl p-8 sm:p-10 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl font-mono">
            <div className="inline-flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CURRENT AVAILABILITY STATUS</span>
            </div>
            <h3 className="text-2xl font-bold text-white">OPEN TO FRONTEND ROLES & FREELANCE CONTRACTS</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              "{PROFILE_DATA.availability}"
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] text-zinc-400 pt-2">
              <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">Full-Time Frontend Engineer</span>
              <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">Freelance React / WebGL Projects</span>
              <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">Remote / Hybrid (Bengaluru)</span>
            </div>
          </div>

          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-emerald-500/20 shrink-0 flex items-center space-x-2"
          >
            <span>DISCUSS AN OPPORTUNITY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6 pt-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="uppercase tracking-widest font-bold">RECOMMENDATIONS & FEEDBACK</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-zinc-950 border border-zinc-800 p-6 rounded-3xl space-y-4">
                <p className="text-zinc-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-zinc-900 pt-3 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-[10px] text-emerald-400">{t.authorTitle} • {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
