import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Home, 
  User, 
  Briefcase, 
  Cpu, 
  FolderGit2, 
  FlaskConical, 
  Mail, 
  X, 
  CornerDownLeft 
} from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

export const CommandCenter: React.FC = () => {
  const { commandCenterOpen, setCommandCenterOpen, setResumeModalOpen } = useAppStore();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = [
    { id: 'home', label: 'Navigate to Home', section: 'hero', icon: Home },
    { id: 'about', label: 'Navigate to About', section: 'about', icon: User },
    { id: 'experience', label: 'Navigate to Experience', section: 'experience', icon: Briefcase },
    { id: 'skills', label: 'Navigate to Skills Constellation', section: 'skills', icon: Cpu },
    { id: 'projects', label: 'Navigate to Projects & Stackly', section: 'projects', icon: FolderGit2 },
    { id: 'lab', label: 'Navigate to The Lab Experiments', section: 'lab', icon: FlaskConical },
    { id: 'contact', label: 'Navigate to Contact Form', section: 'contact', icon: Mail },
    { id: 'resume', label: 'Open Full Resume Overlay', action: 'resume', icon: Briefcase },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.id.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandCenterOpen(!commandCenterOpen);
      } else if (e.key === 'Escape' && commandCenterOpen) {
        setCommandCenterOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandCenterOpen, setCommandCenterOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const executeCommand = (cmd: typeof commands[0]) => {
    setCommandCenterOpen(false);
    if (cmd.action === 'resume') {
      setResumeModalOpen(true);
    } else if (cmd.section) {
      const el = document.getElementById(cmd.section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleKeyDownInMenu = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
    } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
      e.preventDefault();
      executeCommand(filteredCommands[selectedIndex]);
    }
  };

  return (
    <AnimatePresence>
      {commandCenterOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setCommandCenterOpen(false)} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-zinc-950 border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            <div className="flex items-center px-4 py-3 border-b border-zinc-800 space-x-3 bg-zinc-900/50">
              <Terminal className="w-5 h-5 text-emerald-400 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search section (e.g. /projects, /resume)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDownInMenu}
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono"
              />
              <button
                onClick={() => setCommandCenterOpen(false)}
                className="p-1 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="p-4 text-center text-xs text-zinc-500 font-mono">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      onClick={() => executeCommand(cmd)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-mono transition-all ${
                        isSelected
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'text-zinc-300 hover:bg-zinc-900 hover:text-white border border-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-zinc-500'}`} />
                        <span>{cmd.label}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[10px] text-zinc-500">
                        <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 font-mono">
                          /{cmd.id}
                        </span>
                        {isSelected && <CornerDownLeft className="w-3 h-3 text-emerald-400" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            <div className="px-4 py-2 bg-zinc-900/60 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <div className="flex items-center space-x-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
              <span className="text-emerald-400/80">CTRL + K</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
