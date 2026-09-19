import React, { useState } from 'react';
import { Code2, Play, Copy, Check, Terminal } from 'lucide-react';
import { CODE_SNIPPETS } from '../../utils/codeSnippets';
import { SoundFX } from '../../utils/sound';
import { useAppStore } from '../../store/useAppStore';

export const CodeWindowSection: React.FC = () => {
  const { soundEnabled } = useAppStore();
  const [activeTab, setActiveTab] = useState<'react' | 'typescript' | 'node' | 'api'>('react');
  const [copied, setCopied] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [execLogs, setExecLogs] = useState<string[]>([]);

  const currentSnippet = CODE_SNIPPETS[activeTab];

  const handleCopy = () => {
    SoundFX.playClick(soundEnabled);
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunExecution = () => {
    SoundFX.playClick(soundEnabled);
    setExecuting(true);
    setExecLogs(['> INITIALIZING RUNTIME PARSER...', `> LOADING ${currentSnippet.title}...`]);

    setTimeout(() => {
      setExecLogs((prev) => [...prev, '> VERIFYING STRICT TYPESAFE COMPILATION... SUCCESS.']);
    }, 400);

    setTimeout(() => {
      setExecLogs((prev) => [...prev, '> EXECUTED WITH 0 ERRORS (0.04ms).']);
      setExecuting(false);
    }, 800);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <Code2 className="w-3.5 h-3.5" />
            <span>INTERACTIVE CODE WINDOW</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            PRODUCTION CODE SNIPPETS
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-xl">
            Switch between React components, TypeScript contracts, Express routers, and API endpoints.
          </p>
        </div>

        <div className="bg-zinc-950 border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between bg-zinc-900/80 px-4 py-3 border-b border-zinc-800 gap-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-zinc-500 ml-2">{currentSnippet.title}</span>
            </div>

            <div className="flex items-center space-x-1 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
              {(['react', 'typescript', 'node', 'api'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    SoundFX.playClick(soundEnabled);
                    setActiveTab(tab);
                    setExecLogs([]);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs tracking-wider transition-all uppercase ${
                    activeTab === tab
                      ? 'bg-emerald-500 text-black font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleRunExecution}
                disabled={executing}
                className="flex items-center space-x-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-3 py-1.5 rounded-xl transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-emerald-400" />
                <span>{executing ? 'RUNNING...' : 'EXECUTE'}</span>
              </button>

              <button
                onClick={handleCopy}
                className="p-1.5 text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-800 rounded-xl transition-colors"
                title="Copy snippet"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-6 bg-black/90 text-zinc-300 overflow-x-auto min-h-[300px]">
            <pre className="leading-relaxed">
              <code>{currentSnippet.code}</code>
            </pre>
          </div>

          {execLogs.length > 0 && (
            <div className="bg-zinc-950 border-t border-zinc-800 p-4 space-y-1 text-emerald-400 text-[11px]">
              <div className="flex items-center space-x-2 text-zinc-500 border-b border-zinc-900 pb-2 mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>TERMINAL EXECUTION LOG</span>
              </div>
              {execLogs.map((log, i) => (
                <div key={i}>{log}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
