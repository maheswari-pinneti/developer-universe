import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { z } from 'zod';
import { sendContactForm } from '../../services/api';
import { PROFILE_DATA } from '../../utils/data';
import { useAppStore } from '../../store/useAppStore';
import { SoundFX } from '../../utils/sound';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const ContactSection: React.FC = () => {
  const { soundEnabled } = useAppStore();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    SoundFX.playClick(soundEnabled);
    setErrors({});
    setStatusMessage(null);

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const formattedErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) formattedErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(formattedErrors);
      return;
    }

    setSubmitting(true);
    const result = await sendContactForm(formData);
    setSubmitting(false);

    if (result.success) {
      SoundFX.playSuccess(soundEnabled);
      setStatusMessage({ type: 'success', text: 'Message sent successfully! I will respond promptly.' });
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      setStatusMessage({ type: 'error', text: result.message });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-zinc-950/80 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S BUILD SOMETHING</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            START A CONVERSATION
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-xl">
            Have a product idea, freelance project, or frontend opportunity? Drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-6 shadow-xl">
              <div className="space-y-2">
                <h3 className="font-mono text-xl font-bold text-white">Direct Channels</h3>
                <p className="font-mono text-xs text-zinc-400">
                  Feel free to connect via email or official professional networks.
                </p>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="flex items-center space-x-3 p-3.5 bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 rounded-2xl text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{PROFILE_DATA.email}</span>
                </a>

                <div className="flex items-center space-x-3 p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-2xl text-zinc-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PROFILE_DATA.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex space-x-3 font-mono text-xs font-bold">
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-xl flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>GITHUB</span>
                </a>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-xl flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-zinc-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-6 shadow-2xl font-mono text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-zinc-400 uppercase tracking-widest text-[10px]">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-emerald-400 rounded-xl p-3 text-white placeholder-zinc-600 focus:outline-none transition-colors"
                  />
                  {errors.name && <p className="text-rose-400 text-[10px]">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-400 uppercase tracking-widest text-[10px]">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-emerald-400 rounded-xl p-3 text-white placeholder-zinc-600 focus:outline-none transition-colors"
                  />
                  {errors.email && <p className="text-rose-400 text-[10px]">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-zinc-400 uppercase tracking-widest text-[10px]">
                  COMPANY / ORGANIZATION (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-emerald-400 rounded-xl p-3 text-white placeholder-zinc-600 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-zinc-400 uppercase tracking-widest text-[10px]">
                  MESSAGE *
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-emerald-400 rounded-xl p-3 text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                />
                {errors.message && <p className="text-rose-400 text-[10px]">{errors.message}</p>}
              </div>

              {statusMessage && (
                <div
                  className={`p-4 rounded-xl border flex items-center space-x-3 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300'
                      : 'bg-rose-950/40 border-rose-500/50 text-rose-300'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2"
              >
                {submitting ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
