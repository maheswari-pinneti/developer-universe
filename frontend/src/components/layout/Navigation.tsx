import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  FileText, 
  Command
} from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { PROFILE_DATA } from '../../utils/data';
import { SoundFX } from '../../utils/sound';

export const Navigation: React.FC = () => {
  const { 
    activeSection, 
    setActiveSection, 
    soundEnabled, 
    toggleSound, 
    setResumeModalOpen, 
    setCommandCenterOpen,
    webglSupported
  } = useAppStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'journey', label: 'JOURNEY' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'lab', label: 'LAB' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 250;

      sections.forEach((sec) => {
        if (sec) {
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    SoundFX.playClick(soundEnabled);
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 pointer-events-none transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            onMouseEnter={() => SoundFX.playHover(soundEnabled)}
            className="pointer-events-auto flex items-center space-x-3 bg-zinc-950/80 hover:bg-zinc-900 border border-emerald-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all shadow-lg group"
          >
            <img
              src={PROFILE_DATA.avatarUrl}
              alt="Maheswari Pinneti"
              className="w-7 h-7 rounded-full object-cover border border-emerald-400 group-hover:scale-105 transition-transform"
            />
            <span className="font-mono text-xs text-zinc-200 font-medium tracking-wider group-hover:text-emerald-400 transition-colors">
              MAHESWARI
            </span>
            {!webglSupported && (
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] px-1.5 py-0.5 rounded font-mono">
                2D MODE
              </span>
            )}
          </button>

          <nav className={`pointer-events-auto hidden lg:flex items-center space-x-1 px-4 py-1.5 rounded-full border transition-all duration-300 backdrop-blur-md shadow-xl ${
            scrolled ? 'bg-zinc-950/90 border-emerald-500/30' : 'bg-zinc-950/60 border-zinc-800'
          }`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  onMouseEnter={() => SoundFX.playHover(soundEnabled)}
                  className={`relative px-3 py-1 text-[11px] font-mono tracking-widest rounded-full transition-all ${
                    isActive ? 'text-emerald-400 font-bold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/30 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pointer-events-auto flex items-center space-x-2">
            <button
              onClick={() => {
                SoundFX.playClick(soundEnabled);
                setCommandCenterOpen(true);
              }}
              onMouseEnter={() => SoundFX.playHover(soundEnabled)}
              title="Command Center (CTRL + K)"
              className="hidden sm:flex items-center space-x-1.5 bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 text-zinc-300 px-3 py-1.5 rounded-full text-xs font-mono backdrop-blur-md transition-all shadow-md"
            >
              <Command className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] text-zinc-400">CTRL+K</span>
            </button>

            <button
              onClick={() => {
                SoundFX.playClick(soundEnabled);
                setResumeModalOpen(true);
              }}
              onMouseEnter={() => SoundFX.playHover(soundEnabled)}
              className="flex items-center space-x-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-mono font-medium backdrop-blur-md transition-all shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">RESUME</span>
            </button>

            <button
              onClick={() => {
                SoundFX.playClick(!soundEnabled);
                toggleSound();
              }}
              onMouseEnter={() => SoundFX.playHover(soundEnabled)}
              title={soundEnabled ? "Mute Web Audio" : "Enable Web Audio"}
              className="p-2 bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 rounded-full backdrop-blur-md transition-all shadow-md"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                SoundFX.playClick(soundEnabled);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 bg-zinc-950/80 border border-zinc-800 text-zinc-300 rounded-full backdrop-blur-md"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-30 p-4 lg:hidden"
          >
            <div className="bg-zinc-950/95 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-xl space-y-4 shadow-2xl">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`px-4 py-3 rounded-xl font-mono text-xs text-left transition-all ${
                      activeSection === link.id
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold'
                        : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-900'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div className="flex space-x-3 font-mono text-xs">
                  <a
                    href="https://github.com/maheswari-pinneti"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-emerald-400 font-bold"
                  >
                    GITHUB
                  </a>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeModalOpen(true);
                  }}
                  className="px-4 py-2 bg-emerald-500 text-black font-mono text-xs font-bold rounded-xl"
                >
                  VIEW RESUME
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
