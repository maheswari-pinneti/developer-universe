import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, RefreshCcw, Sparkles } from 'lucide-react';
import { fetchGitHubRepos } from '../../services/api';

export const GitHubSection: React.FC = () => {
  const { data: repos, isLoading, isError, refetch } = useQuery({
    queryKey: ['githubRepos'],
    queryFn: fetchGitHubRepos,
    staleTime: 1000 * 60 * 10,
  });

  return (
    <section id="github" className="py-24 px-4 md:px-8 bg-zinc-950/60 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OPEN SOURCE / GITHUB INTEGRATION</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              LIVE GITHUB WORK & REPOSITORIES
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-xl">
              Real-time API synchronization with my official GitHub profile (@maheswari-pinneti).
            </p>
          </div>

          <a
            href="https://github.com/maheswari-pinneti"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-mono text-xs px-4 py-2.5 rounded-xl font-bold transition-colors shrink-0"
          >
            <span>FOLLOW @MAHESWARI-PINNETI</span>
          </a>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 h-48 animate-pulse" />
            ))}
          </div>
        ) : isError ? (
          <div className="bg-zinc-950 border border-amber-500/30 p-6 rounded-3xl text-center space-y-4 font-mono text-xs">
            <p className="text-amber-400">Live API is temporarily rate-limited or offline.</p>
            <button
              onClick={() => refetch()}
              className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-white rounded-xl inline-flex items-center space-x-2"
            >
              <RefreshCcw className="w-4 h-4" />
              <span>RETRY SYNC</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos?.map((repo) => (
              <motion.div
                key={repo.id}
                whileHover={{ y: -4 }}
                className="bg-zinc-950 border border-zinc-800 hover:border-emerald-500/40 rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-xl relative group transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-emerald-400 flex items-center space-x-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{repo.name}</span>
                    </span>
                    <a
                      href={repo.htmlUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-zinc-500 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs font-mono text-zinc-300 leading-relaxed">
                    {repo.description || 'Open-source software repository.'}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-900 font-mono text-xs text-zinc-400">
                  <div className="flex items-center space-x-4">
                    {repo.language && (
                      <span className="flex items-center space-x-1.5 text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>{repo.language}</span>
                      </span>
                    )}
                    <span className="flex items-center space-x-1 text-zinc-400">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-zinc-400">
                      <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{repo.forks}</span>
                    </span>
                  </div>

                  <span className="text-[10px] text-zinc-500 uppercase">
                    UPDATED {new Date(repo.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
