import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Zap, Sparkles } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

export const BootLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const { reducedMotion } = useAppStore();

  const bootLogs = [
    "INITIALIZING SYSTEM CORE...",
    "LOADING GRAPHICS PIPELINE & THREE.JS CANVAS...",
    "VERIFYING MAHESWARI PINNETI PROFILE CONTRACTS...",
    "ESTABLISHING API BACKEND HYDRATION...",
    "READY. WELCOME TO THE DIGITAL UNIVERSE."
  ];

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [reducedMotion, onComplete]);

  useEffect(() => {
    const logIndex = Math.min(Math.floor((progress / 100) * bootLogs.length), bootLogs.length - 1);
    setStep(logIndex);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-emerald-400 font-mono select-none px-6"
    >
      <div className="w-full max-w-lg space-y-6">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-emerald-400/80 font-bold">
              MP-UNIVERSE // BOOT_SEQ
            </span>
          </div>
          <div className="flex items-center space-x-1 text-[10px] text-zinc-500">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            <span>SECURE ENCLAVE</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            MAHESWARI PINNETI <Sparkles className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-xs text-emerald-400/70 tracking-wider">
            FRONTEND ENGINEER • REACT • TYPESCRIPT • NODE.JS • THREE.JS
          </div>
        </div>

        <div className="bg-zinc-950/80 border border-emerald-500/20 rounded-xl p-4 space-y-2 h-24 overflow-hidden flex flex-col justify-end text-xs shadow-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center space-x-2 text-zinc-300"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="font-mono text-[11px] leading-tight text-emerald-400">
                {bootLogs[step]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-zinc-400 font-mono">
            <span>CORE_LOAD</span>
            <span className="text-emerald-400 font-bold">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-emerald-500/20">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
