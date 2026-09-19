import React from 'react';
import { motion } from 'framer-motion';
import { UserRound, MapPin, GraduationCap, BriefcaseBusiness, CodeXml, Sparkles, Terminal, ArrowRight } from 'lucide-react';
import { PROFILE_DATA } from '../../utils/data';
import { useAppStore } from '../../store/useAppStore';
import { SoundFX } from '../../utils/sound';

export const AboutSection: React.FC = () => {
  const { soundEnabled, setResumeModalOpen } = useAppStore();

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <UserRound className="w-3.5 h-3.5" />
            <span>WHO IS MAHESWARI?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            ENGINEERING PROFILE & PERSPECTIVE
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-2xl">
            Passionate frontend engineer focused on building clean, high-performance web applications and responsive product experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            whileHover={{ y: -4 }}
            className="lg:col-span-7 bg-zinc-950/80 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between space-y-8 shadow-2xl relative"
          >
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-6 gap-4">
                <div className="flex items-center space-x-4">
                  {/* Real Profile Photo Avatar */}
                  <div className="relative group shrink-0">
                    <img
                      src={PROFILE_DATA.avatarUrl}
                      alt={PROFILE_DATA.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-emerald-500/40 shadow-lg group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-950" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg sm:text-xl font-bold text-white">{PROFILE_DATA.name}</h3>
                    <p className="font-mono text-xs text-emerald-400 font-semibold">{PROFILE_DATA.title}</p>
                    <p className="font-mono text-[10px] text-zinc-500">{PROFILE_DATA.secondaryTitle}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full self-start sm:self-center">
                  VERIFIED DEPLOYED
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs text-zinc-300 leading-relaxed">
                <p className="text-white font-medium italic border-l-2 border-emerald-400 pl-3">
                  "{PROFILE_DATA.professionalSummary}"
                </p>
                <p className="text-zinc-400">
                  Specializing in React, TypeScript, Node.js, and Three.js WebGL graphics to bridge the gap between complex software design and intuitive visual user interfaces.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-900 font-mono text-xs">
              <div className="space-y-1">
                <div className="flex items-center space-x-1.5 text-zinc-500 text-[10px] uppercase">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>LOCATION</span>
                </div>
                <span className="text-white font-bold block">{PROFILE_DATA.location}</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-1.5 text-zinc-500 text-[10px] uppercase">
                  <BriefcaseBusiness className="w-3.5 h-3.5 text-cyan-400" />
                  <span>EXPERIENCE</span>
                </div>
                <span className="text-white font-bold block">{PROFILE_DATA.experienceYears}</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-1.5 text-zinc-500 text-[10px] uppercase">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
                  <span>EDUCATION</span>
                </div>
                <span className="text-white font-bold block">{PROFILE_DATA.education}</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="bg-zinc-950/80 border border-zinc-800 hover:border-emerald-500/40 rounded-3xl p-6 backdrop-blur-md space-y-4 transition-all">
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
                <Terminal className="w-4 h-4" />
                <span className="uppercase tracking-widest font-bold">CORE FRONTEND VALUES</span>
              </div>
              <ul className="space-y-3 font-mono text-xs text-zinc-300">
                <li className="flex items-start space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strict Type Safety & Clean React Component Architecture</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>High Performance & Responsive Mobile Layouts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>Production REST API Integration with Node.js & Express</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-950 to-emerald-950/20 border border-emerald-500/20 rounded-3xl p-6 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  COMPLETE RESUME SPEC
                </span>
                <CodeXml className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="font-mono text-xs text-zinc-400">
                Download or inspect the official engineering background resume PDF.
              </p>
              <button
                onClick={() => {
                  SoundFX.playClick(soundEnabled);
                  setResumeModalOpen(true);
                }}
                className="w-full py-3 bg-zinc-900 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>OPEN FULL RESUME</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
