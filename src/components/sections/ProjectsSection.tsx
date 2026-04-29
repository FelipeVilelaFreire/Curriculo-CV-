"use client";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, X, Smartphone, Globe, LayoutDashboard, Server, Package, Bot } from "lucide-react";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { useLanguage } from "@/lib/LanguageContext";
import { hobbymap, prognum, sonho } from "@/data/projects";
import { personal } from "@/data/personal";
import { logos } from "@/assets/logos";

const PLATFORM_ICONS = [Smartphone, Globe, LayoutDashboard, Server] as const;

function Tag({ children }: { children: string }) {
  return (
    <span className="px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-600 dark:bg-white/[0.06] dark:border-white/[0.15] dark:text-zinc-200 text-xs transition-colors duration-300">
      {children}
    </span>
  );
}

function SmallTag({ children }: { children: string }) {
  return (
    <span className="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-500 dark:bg-white/[0.05] dark:border-white/[0.13] dark:text-zinc-400 text-[10px] transition-colors duration-300">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-400 dark:text-zinc-500 mb-3 transition-colors duration-300">
      {children}
    </p>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <section ref={ref} className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-[0.2em] uppercase mb-8 transition-colors duration-300"
          >
            {t.sections.projects}
          </motion.p>

          {/* ── HobbyMap featured ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mb-6"
          >
            <GlassCard className="p-0 overflow-hidden dark:border-[#C63FE8]/[0.22] dark:shadow-[0_0_48px_rgba(198,63,232,0.10)]">
              {/* Top gradient banner */}
              <div className="relative w-full h-28 sm:h-40 overflow-hidden bg-gradient-to-br from-[#C63FE8]/[0.10] via-[#C63FE8]/[0.05] to-purple-700/[0.07] dark:from-[#C63FE8]/[0.28] dark:via-[#C63FE8]/[0.14] dark:to-purple-900/[0.30]">
                <div className="absolute inset-0 hidden dark:block" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(198,63,232,0.12) 0%, transparent 70%)" }} />
                <div className="absolute inset-0 flex items-center justify-center gap-8 opacity-20 dark:opacity-45">
                  {hobbymap.platforms.map(({ label }) => (
                    <span key={label} className="text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-600 dark:text-white">
                      {label}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 left-8">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-white/40">
                    hobbymap.com.br
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-[#C63FE8] text-2xl font-bold tracking-tight">
                    HobbyMap
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 border border-cyan-300/70 text-cyan-700 dark:bg-cyan-500/10 dark:border-cyan-500/30 dark:text-cyan-400 text-xs transition-colors duration-300">
                    {t.projects.featured}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-100 border border-violet-300/70 text-violet-700 dark:bg-violet-500/10 dark:border-violet-500/30 dark:text-violet-400 text-xs transition-colors duration-300">
                    {t.projects.personal}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                </div>

                <p className="text-zinc-500 dark:text-zinc-300 text-sm leading-relaxed max-w-2xl mb-5 transition-colors duration-300">
                  {t.projects.hobbymap.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {hobbymap.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}
                </div>

                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold
                    bg-orange-50 border border-orange-300/80 text-orange-700
                    dark:bg-orange-500/[0.07] dark:border-orange-500/[0.30] dark:text-orange-300
                    transition-colors duration-300">
                    <Bot size={11} />
                    {t.projects.builtWith} {hobbymap.builtWith}
                  </span>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={hobbymap.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300
                      bg-cyan-50 border border-cyan-300/70 text-cyan-700
                      hover:bg-cyan-100 hover:border-cyan-400/70
                      dark:bg-cyan-500/[0.10] dark:border-cyan-500/30 dark:text-cyan-400
                      dark:hover:bg-cyan-500/[0.18] dark:hover:border-cyan-500/50
                    "
                  >
                    <ExternalLink size={14} />
                    {t.projects.hobbymap.cta}
                  </a>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300
                      border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50
                      dark:border-white/[0.12] dark:text-zinc-400 dark:hover:border-white/[0.22] dark:hover:bg-white/[0.05]"
                  >
                    {t.projects.viewDetails}
                  </button>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* ── Secondary grid ── */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Prognum */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              <GlassCard className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 dark:bg-white/90 dark:border-white/20 flex items-center justify-center flex-shrink-0 overflow-hidden p-1 transition-colors duration-300">
                    {logos.prognum
                      ? <Image src={logos.prognum} alt="Prognum" width={40} height={40} className="w-full h-full object-contain" />
                      : <LayoutDashboard size={16} className="text-blue-600 dark:text-blue-400" />}
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 border border-amber-300/50 text-amber-700 dark:bg-amber-500/10 dark:border-amber-500/25 dark:text-amber-400 text-[10px] font-semibold transition-colors duration-300">
                    {t.projects.professional}
                  </span>
                </div>
                <h3 className="text-zinc-900 dark:text-white font-semibold mb-2 transition-colors duration-300">
                  Prognum
                </h3>
                <p className="text-zinc-500 dark:text-zinc-300 text-sm leading-relaxed flex-1 transition-colors duration-300">
                  {t.projects.prognum.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {prognum.stack.map((tech) => <SmallTag key={tech}>{tech}</SmallTag>)}
                </div>
              </GlassCard>
            </motion.div>

            {/* Sonho dos Pés */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.38 }}
            >
              <GlassCard className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 dark:bg-white/90 dark:border-white/20 flex items-center justify-center flex-shrink-0 overflow-hidden p-1 transition-colors duration-300">
                    {logos.sonhodospes
                      ? <Image src={logos.sonhodospes} alt="Sonho dos Pés" width={40} height={40} className="w-full h-full object-contain" />
                      : <LayoutDashboard size={16} className="text-zinc-500 dark:text-zinc-400" />}
                  </div>
                  <a
                    href={sonho.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-zinc-300 dark:text-white/25 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>
                <h3 className="text-zinc-900 dark:text-white font-semibold mb-2 transition-colors duration-300">
                  Sonho dos Pés
                </h3>
                <p className="text-zinc-500 dark:text-zinc-300 text-sm leading-relaxed flex-1 transition-colors duration-300">
                  {t.projects.sonho.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {sonho.stack.map((tech) => <SmallTag key={tech}>{tech}</SmallTag>)}
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* ── GitHub ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.46 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center gap-5">
                <div className="flex-shrink-0 p-2.5 rounded-xl bg-zinc-100 border border-zinc-200 dark:bg-white/[0.04] dark:border-white/10 transition-colors duration-300">
                  <GitHubIcon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-zinc-900 dark:text-white font-semibold mb-1 transition-colors duration-300">
                    GitHub Experiments
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-300 text-sm leading-relaxed transition-colors duration-300">
                    {t.projects.github.description}
                  </p>
                </div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <ArrowUpRight size={16} className="text-zinc-300 dark:text-white/25 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200" />
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ── HobbyMap Modal — portaled above navbar ── */}
      {mounted && createPortal(
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/55 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="
                relative z-10 w-full max-w-2xl max-h-[88vh] flex flex-col
                rounded-2xl overflow-hidden
                bg-white/97 dark:bg-[#0d0d0d]/97
                border border-black/[0.08] dark:border-white/[0.14]
                shadow-[0_24px_80px_rgba(0,0,0,0.22)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.7)]
                backdrop-blur-2xl
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-black/[0.06] dark:border-white/[0.08] flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-zinc-900 dark:text-white font-bold text-base leading-tight transition-colors duration-300">
                      HobbyMap
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                      <span className="text-zinc-300 dark:text-zinc-600">·</span>
                      <a
                        href={hobbymap.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:underline transition-colors duration-200"
                      >
                        hobbymap.com.br ↗
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-black/[0.05] dark:text-white/40 dark:hover:text-white dark:hover:bg-white/[0.08] transition-all duration-200"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Body — scrollable */}
              <div className="overflow-y-auto flex-1 px-4 sm:px-6 py-4 sm:py-6 space-y-5 sm:space-y-6">

                {/* What is it */}
                <div>
                  <SectionLabel>{t.projects.hobbymap.modal.whatIs}</SectionLabel>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed transition-colors duration-300">
                    {t.projects.hobbymap.modalDescription}
                  </p>
                </div>

                {/* Languages */}
                <div>
                  <SectionLabel>{t.projects.hobbymap.modal.languages}</SectionLabel>
                  <div className="flex gap-2">
                    {hobbymap.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1 rounded-lg text-xs font-bold tracking-widest
                          bg-zinc-100 border border-zinc-200 text-zinc-600
                          dark:bg-white/[0.06] dark:border-white/[0.15] dark:text-zinc-300
                          transition-colors duration-300"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div>
                  <SectionLabel>{t.projects.hobbymap.modal.platforms}</SectionLabel>
                  <div className="grid grid-cols-2 gap-2.5">
                    {hobbymap.platforms.map(({ label, tech }, i) => {
                      const Icon = PLATFORM_ICONS[i];
                      return (
                        <div
                          key={label}
                          className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 dark:bg-white/[0.04] dark:border-white/[0.10] transition-colors duration-300"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 dark:bg-white/[0.08] dark:border-white/[0.15] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                            <Icon size={14} className="text-zinc-500 dark:text-zinc-400" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-zinc-900 dark:text-white text-xs font-semibold leading-tight transition-colors duration-300">{label}</p>
                            <p className="text-zinc-400 dark:text-zinc-500 text-[10px] mt-0.5 transition-colors duration-300">{tech}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Architecture */}
                <div>
                  <SectionLabel>{t.projects.hobbymap.modal.architecture}</SectionLabel>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-200/60 dark:bg-white/[0.04] dark:border-white/[0.10] transition-colors duration-300">
                    <Package size={16} className="text-[#C63FE8] flex-shrink-0 mt-0.5" />
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed transition-colors duration-300">
                      {t.projects.hobbymap.modal.archDesc}
                    </p>
                  </div>
                </div>

                {/* Infrastructure */}
                <div>
                  <SectionLabel>{t.projects.hobbymap.modal.infra}</SectionLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {hobbymap.infra.map(({ name, role }) => (
                      <div
                        key={name}
                        className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 dark:bg-white/[0.04] dark:border-white/[0.10] transition-colors duration-300"
                      >
                        <div className="min-w-0">
                          <p className="text-zinc-900 dark:text-white text-xs font-semibold leading-tight transition-colors duration-300">{name}</p>
                          <p className="text-zinc-400 dark:text-zinc-500 text-[10px] mt-0.5 transition-colors duration-300">{role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack by layer */}
                <div>
                  <SectionLabel>{t.projects.hobbymap.modal.stack}</SectionLabel>
                  <div className="space-y-2.5">
                    {hobbymap.stackByLayer.map(({ layer, items }) => (
                      <div key={layer} className="flex items-start gap-3">
                        <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 w-14 flex-shrink-0 pt-0.5 transition-colors duration-300">
                          {layer}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => <SmallTag key={item}>{item}</SmallTag>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                <a
                  href={hobbymap.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm transition-all duration-300
                    bg-cyan-50 border border-cyan-300/70 text-cyan-700
                    hover:bg-cyan-100 hover:border-cyan-400/70
                    dark:bg-cyan-500/[0.10] dark:border-cyan-500/30 dark:text-cyan-400
                    dark:hover:bg-cyan-500/[0.18] dark:hover:border-cyan-500/50
                  "
                >
                  <ExternalLink size={14} />
                  {t.projects.hobbymap.cta}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </>
  );
}
