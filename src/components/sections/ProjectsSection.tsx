"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, LayoutDashboard, Package, Server, Smartphone, X } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { useLanguage } from "@/lib/LanguageContext";
import { hobbymap, portfolioProjects, type PortfolioProject, type ProjectKey } from "@/data/projects";

const PLATFORM_ICONS = [Globe, Smartphone, LayoutDashboard, Server] as const;

function Tag({ children }: { children: string }) {
  return <span className="px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-600 dark:bg-white/[0.06] dark:border-white/[0.15] dark:text-zinc-200 text-xs transition-colors duration-300">{children}</span>;
}

function SmallTag({ children }: { children: string }) {
  return <span className="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-500 dark:bg-white/[0.05] dark:border-white/[0.13] dark:text-zinc-400 text-[10px] transition-colors duration-300">{children}</span>;
}

function SectionLabel({ children }: { children: string }) {
  return <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-400 dark:text-zinc-500 mb-3 transition-colors duration-300">{children}</p>;
}

function ProjectCard({ project, featured, onOpen }: { project: PortfolioProject; featured?: boolean; onOpen: () => void }) {
  const { t } = useLanguage();
  const copy = t.projects[project.key];
  const visibleStack = featured ? project.stack : project.stack.slice(0, 4);

  return (
    <GlassCard className={`h-full flex flex-col ${featured ? "p-0 overflow-hidden" : "p-6"}`}>
      {featured && (
        <div className="relative w-full h-28 sm:h-40 overflow-hidden bg-gradient-to-br from-violet-500/[0.16] via-cyan-500/[0.10] to-blue-600/[0.10] dark:from-violet-500/[0.30] dark:via-cyan-500/[0.16] dark:to-blue-900/[0.30]">
          <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-30 dark:opacity-50">
            {project.platforms.map(({ label }) => <span key={label} className="text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-600 dark:text-white">{label}</span>)}
          </div>
          <span className="absolute bottom-4 left-6 text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-white/40">{hobbymap.url?.replace("https://", "")}</span>
        </div>
      )}

      <div className={featured ? "p-5 sm:p-8 flex flex-col flex-1" : "flex flex-col flex-1"}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h3 className={`${featured ? "text-2xl" : "text-lg"} text-zinc-900 dark:text-white font-bold tracking-tight transition-colors duration-300`}>{project.name}</h3>
          {featured && <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 border border-cyan-300/70 text-cyan-700 dark:bg-cyan-500/10 dark:border-cyan-500/30 dark:text-cyan-400 text-xs transition-colors duration-300">{t.projects.featured}</span>}
          <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-300/70 text-zinc-600 dark:bg-white/[0.06] dark:border-white/[0.15] dark:text-zinc-300 text-[10px] font-semibold transition-colors duration-300">{project.status === "live" ? (t.projects.status?.live ?? "Live") : (t.projects.status?.inProgress ?? "In development")}</span>
        </div>
        <p className="text-zinc-500 dark:text-zinc-300 text-sm leading-relaxed flex-1 transition-colors duration-300">{copy.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-5">{visibleStack.map((tech) => featured ? <Tag key={tech}>{tech}</Tag> : <SmallTag key={tech}>{tech}</SmallTag>)}</div>
        <div className="flex items-center gap-3 flex-wrap mt-5">
          <button onClick={onOpen} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/[0.12] dark:text-zinc-300 dark:hover:border-white/[0.22] dark:hover:bg-white/[0.05]">
            {t.projects.viewDetails}
            <ArrowUpRight size={14} />
          </button>
          {(project.url || project.github) && (
            <a href={project.url ?? project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors duration-300">
              <ExternalLink size={14} />
              {copy.cta ?? t.projects.viewDetails}
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

function ProjectDetailsModal({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  const { t } = useLanguage();
  const copy = t.projects[project.key];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-label={`${project.name} ${t.projects.detailsLabel ?? t.projects.viewDetails}`}>
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={onClose} className="absolute inset-0 bg-black/55 backdrop-blur-md" aria-label={t.projects.closeDetails ?? t.projects.viewDetails} />
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3 }} className="relative z-10 w-full max-w-2xl max-h-[88vh] flex flex-col rounded-2xl overflow-hidden bg-white/97 dark:bg-[#0d0d0d]/97 border border-black/[0.08] dark:border-white/[0.14] shadow-[0_24px_80px_rgba(0,0,0,0.22)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-black/[0.06] dark:border-white/[0.08] flex-shrink-0">
          <div>
            <p className="text-zinc-900 dark:text-white font-bold text-base leading-tight transition-colors duration-300">{project.name}</p>
            {copy.subtitle && <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1 transition-colors duration-300">{copy.subtitle}</p>}
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-black/[0.05] dark:text-white/40 dark:hover:text-white dark:hover:bg-white/[0.08] transition-all duration-200" aria-label={t.projects.closeDetails ?? t.projects.viewDetails}><X size={16} /></button>
        </div>

        <div className="overflow-y-auto flex-1 px-4 sm:px-6 py-4 sm:py-6 space-y-5 sm:space-y-6">
          <div><SectionLabel>{copy.modal?.whatIs ?? t.projects.viewDetails}</SectionLabel><p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed transition-colors duration-300">{copy.modalDescription ?? copy.description}</p></div>
          {(copy.highlights?.length ?? 0) > 0 && <div>
            <SectionLabel>{copy.modal?.contributions ?? t.projects.viewDetails}</SectionLabel>
            <ul className="space-y-2">{copy.highlights?.map((highlight) => <li key={highlight} className="flex gap-3 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500 flex-shrink-0" />{highlight}</li>)}</ul>
          </div>}
          {copy.modal?.archDesc && <div><SectionLabel>{copy.modal.architecture ?? t.projects.viewDetails}</SectionLabel><div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-200/60 dark:bg-white/[0.04] dark:border-white/[0.10] transition-colors duration-300"><Package size={16} className="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" /><p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">{copy.modal.archDesc}</p></div></div>}
          <div>
            <SectionLabel>{copy.modal?.platforms ?? t.projects.viewDetails}</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">{project.platforms.map(({ label, tech }, index) => { const Icon = PLATFORM_ICONS[index] ?? Server; return <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 dark:bg-white/[0.04] dark:border-white/[0.10]"><div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 dark:bg-white/[0.08] dark:border-white/[0.15] flex items-center justify-center flex-shrink-0"><Icon size={14} className="text-zinc-500 dark:text-zinc-400" /></div><div><p className="text-zinc-900 dark:text-white text-xs font-semibold">{label}</p><p className="text-zinc-400 dark:text-zinc-500 text-[10px] mt-0.5">{tech}</p></div></div>; })}</div>
          </div>
          <div>
            <SectionLabel>{copy.modal?.infra ?? t.projects.viewDetails}</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">{project.infra.map(({ name, role }) => <div key={name} className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 dark:bg-white/[0.04] dark:border-white/[0.10]"><p className="text-zinc-900 dark:text-white text-xs font-semibold">{name}</p><p className="text-zinc-400 dark:text-zinc-500 text-[10px] mt-0.5">{role}</p></div>)}</div>
          </div>
          <div>
            <SectionLabel>{copy.modal?.stack ?? t.projects.viewDetails}</SectionLabel>
            <div className="space-y-2.5">{project.stackByLayer.map(({ layer, items }) => <div key={layer} className="flex items-start gap-3"><span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 w-20 flex-shrink-0 pt-0.5">{layer}</span><div className="flex flex-wrap gap-1.5">{items.map((item) => <SmallTag key={item}>{item}</SmallTag>)}</div></div>)}</div>
          </div>
        </div>

        {(project.url || project.github) && <div className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-t border-black/[0.06] dark:border-white/[0.08]"><a href={project.url ?? project.github} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 bg-cyan-50 border border-cyan-300/70 text-cyan-700 hover:bg-cyan-100 dark:bg-cyan-500/[0.10] dark:border-cyan-500/30 dark:text-cyan-400 dark:hover:bg-cyan-500/[0.18]"><ExternalLink size={14} />{copy.cta ?? t.projects.viewDetails}</a></div>}
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const selectedProject = portfolioProjects.find((project) => project.key === activeProject);

  return <>
    <section ref={ref} className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-[0.2em] uppercase mb-3 transition-colors duration-300">{t.sections.projects}</motion.p>
        {t.projects.intro && <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.05 }} className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl mb-8">{t.projects.intro}</motion.p>}
        <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mb-5"><ProjectCard project={hobbymap} featured onOpen={() => setActiveProject("hobbymap")} /></motion.div>
        <div className="grid md:grid-cols-3 gap-4">{portfolioProjects.filter((project) => project.key !== "hobbymap").map((project, index) => <motion.div key={project.key} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.18 + index * 0.08 }}><ProjectCard project={project} onOpen={() => setActiveProject(project.key)} /></motion.div>)}</div>
      </div>
    </section>
    {mounted && createPortal(<AnimatePresence>{selectedProject && <ProjectDetailsModal project={selectedProject} onClose={() => setActiveProject(null)} />}</AnimatePresence>, document.body)}
  </>;
}
