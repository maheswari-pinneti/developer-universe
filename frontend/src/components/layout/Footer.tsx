import React from 'react';
import { ArrowUp, Cpu, Mail, ShieldCheck } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { SoundFX } from '../../utils/sound';

export const Footer: React.FC = () => {
  const { soundEnabled } = useAppStore();

  const scrollToTop = () => {
    SoundFX.playClick(soundEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-zinc-900 py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
              MP
            </div>
            <span className="font-mono text-sm font-bold text-white tracking-widest">
              MAHESWARI PINNETI
            </span>
          </div>
          <p className="text-xs font-mono text-zinc-400">
            Frontend Developer • React • TypeScript • Node.js • Three.js
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-2 text-[10px] font-mono text-emerald-400/70 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>STRICT TYPESAFE SYSTEM • PRODUCTION READY</span>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>Built with React 18, TypeScript, Three.js & Express</span>
          </div>
          <span className="text-[11px] font-mono text-zinc-600">
            © 2026 Maheswari Pinneti. All rights reserved.
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/maheswari-pinneti"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => SoundFX.playHover(soundEnabled)}
            className="p-2.5 bg-zinc-950 border border-zinc-800 hover:border-emerald-500/40 rounded-xl text-zinc-400 hover:text-emerald-400 transition-colors font-mono text-xs font-bold"
            title="GitHub Profile"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/maheswari-pinneti"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => SoundFX.playHover(soundEnabled)}
            className="p-2.5 bg-zinc-950 border border-zinc-800 hover:border-emerald-500/40 rounded-xl text-zinc-400 hover:text-emerald-400 transition-colors font-mono text-xs font-bold"
            title="LinkedIn Profile"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:maheswaripinneti@gmail.com"
            onMouseEnter={() => SoundFX.playHover(soundEnabled)}
            className="p-2.5 bg-zinc-950 border border-zinc-800 hover:border-emerald-500/40 rounded-xl text-zinc-400 hover:text-emerald-400 transition-colors"
            title="Email Direct"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => SoundFX.playHover(soundEnabled)}
            className="p-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-400 transition-all ml-2"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
