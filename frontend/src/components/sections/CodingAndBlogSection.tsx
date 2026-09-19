import React from 'react';
import { Code2, ExternalLink, Trophy, Terminal } from 'lucide-react';
import { LEETCODE_STATS, BLOG_NOTES } from '../../utils/data';

export const CodingAndBlogSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-zinc-950/60 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <Terminal className="w-3.5 h-3.5" />
            <span>ALGORITHMS, LEETCODE & NOTES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            PROBLEM SOLVING & ENGINEERING NOTES
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-xl">
            Verified competitive programming stats, LeetCode profile data, and technical engineering articles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-mono text-xs">
          <div className="lg:col-span-5 bg-zinc-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <span className="font-bold text-white uppercase text-sm">LEETCODE PROFILE</span>
                </div>
                <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] px-2.5 py-0.5 rounded-full font-bold">
                  {LEETCODE_STATS.ranking}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl text-center">
                  <span className="text-zinc-500 block text-[10px] uppercase">TOTAL SOLVED</span>
                  <span className="text-2xl font-bold text-emerald-400">{LEETCODE_STATS.problemsSolved}+</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl text-center">
                  <span className="text-zinc-500 block text-[10px] uppercase">MEDIUM / HARD</span>
                  <span className="text-2xl font-bold text-cyan-400">{LEETCODE_STATS.mediumSolved + LEETCODE_STATS.hardSolved}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">
                  PRIMARY LANGUAGE SOLVERS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {LEETCODE_STATS.topLanguages.map((lang) => (
                    <span key={lang} className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] px-3 py-1 rounded-lg">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={LEETCODE_STATS.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-emerald-400 text-center font-bold uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center space-x-2"
            >
              <span>VIEW LEETCODE PROFILE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <span className="font-bold text-emerald-400 uppercase tracking-widest text-xs flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                ENGINEERING NOTES & ARTICLES
              </span>
              <span className="text-[10px] text-zinc-500">PUBLISHED THOUGHTS</span>
            </div>

            <div className="space-y-3">
              {BLOG_NOTES.map((note) => (
                <div
                  key={note.id}
                  className="bg-zinc-950 border border-zinc-800 hover:border-emerald-500/40 p-5 rounded-2xl space-y-2 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 text-[10px] font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 uppercase">
                      {note.category}
                    </span>
                    <span className="text-zinc-500 text-[10px]">{note.readTime}</span>
                  </div>

                  <h3 className="font-bold text-white text-sm hover:text-emerald-400 transition-colors cursor-pointer">
                    {note.title}
                  </h3>
                  <p className="text-zinc-400 text-[11px] leading-relaxed">
                    {note.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
