import React from 'react';
import { AlertOctagon, ArrowLeft } from 'lucide-react';
import { SoundFX } from '../../utils/sound';
import { useAppStore } from '../../store/useAppStore';

export const NotFoundPage: React.FC<{ onNavigateHome: () => void }> = ({ onNavigateHome }) => {
  const { soundEnabled } = useAppStore();

  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-16 h-16 rounded-3xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
        <AlertOctagon className="w-8 h-8 animate-pulse" />
      </div>

      <div className="space-y-2">
        <span className="text-xs text-rose-400 font-bold uppercase tracking-widest bg-rose-500/10 border border-rose-500/30 px-3 py-1 rounded-full">
          404 — ROUTE NOT FOUND
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">UNKNOWN COORDINATES</h1>
        <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
          Looks like you've entered an unknown part of the digital engineering universe.
        </p>
      </div>

      <button
        onClick={() => {
          SoundFX.playClick(soundEnabled);
          onNavigateHome();
        }}
        className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-emerald-500/20 flex items-center space-x-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>RETURN TO HOME UNIVERSE</span>
      </button>
    </div>
  );
};
