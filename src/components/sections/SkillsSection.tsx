"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { SKILL_GROUPS } from "@/data/skills";

/* Light + dark variant for each color */
const colorVariant: Record<string, string> = {
  cyan:
    "border-cyan-300/80 text-cyan-700 bg-cyan-50 hover:bg-cyan-100 hover:border-cyan-400/90 " +
    "dark:border-cyan-500/30 dark:text-cyan-300 dark:bg-cyan-500/[0.05] dark:hover:bg-cyan-500/[0.10] dark:hover:border-cyan-400/50 dark:hover:shadow-[0_0_22px_rgba(6,182,212,0.15)]",
  purple:
    "border-purple-300/80 text-purple-700 bg-purple-50 hover:bg-purple-100 hover:border-purple-400/90 " +
    "dark:border-purple-500/30 dark:text-purple-300 dark:bg-purple-500/[0.05] dark:hover:bg-purple-500/[0.10] dark:hover:border-purple-400/50",
  green:
    "border-emerald-300/80 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 hover:border-emerald-400/90 " +
    "dark:border-emerald-500/30 dark:text-emerald-300 dark:bg-emerald-500/[0.05] dark:hover:bg-emerald-500/[0.10] dark:hover:border-emerald-400/50",
  white:
    "border-zinc-200 text-zinc-600 bg-zinc-50 hover:bg-zinc-100 hover:border-zinc-300 " +
    "dark:border-white/20 dark:text-white/65 dark:bg-white/[0.03] dark:hover:bg-white/[0.07] dark:hover:border-white/30",
  orange:
    "border-orange-300/80 text-orange-700 bg-orange-50 hover:bg-orange-100 hover:border-orange-400/90 " +
    "dark:border-orange-500/30 dark:text-orange-300 dark:bg-orange-500/[0.05] dark:hover:bg-orange-500/[0.10] dark:hover:border-orange-400/50",
  yellow:
    "border-yellow-300/80 text-yellow-700 bg-yellow-50 hover:bg-yellow-100 hover:border-yellow-400/90 " +
    "dark:border-yellow-500/30 dark:text-yellow-300 dark:bg-yellow-500/[0.05] dark:hover:bg-yellow-500/[0.10] dark:hover:border-yellow-400/50",
  amber:
    "border-amber-400/80 text-amber-700 bg-amber-50 hover:bg-amber-100 hover:border-amber-500/90 " +
    "dark:border-amber-500/35 dark:text-amber-300 dark:bg-amber-500/[0.07] dark:hover:bg-amber-500/[0.13] dark:hover:border-amber-400/55 dark:hover:shadow-[0_0_22px_rgba(245,158,11,0.22)]",
  sky:
    "border-sky-300/80 text-sky-700 bg-sky-50 hover:bg-sky-100 hover:border-sky-400/90 " +
    "dark:border-sky-500/35 dark:text-sky-200 dark:bg-sky-500/[0.07] dark:hover:bg-sky-500/[0.12] dark:hover:border-sky-400/50 dark:hover:shadow-[0_0_22px_rgba(14,165,233,0.18)]",
  indigo:
    "border-indigo-300/80 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 hover:border-indigo-400/90 " +
    "dark:border-indigo-500/35 dark:text-indigo-300 dark:bg-indigo-500/[0.07] dark:hover:bg-indigo-500/[0.13] dark:hover:border-indigo-400/55 dark:hover:shadow-[0_0_22px_rgba(99,102,241,0.18)]",
};

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-[0.2em] uppercase mb-8 transition-colors duration-300"
        >
          {t.sections.skills}
        </motion.p>

        <div className="space-y-5">
          {SKILL_GROUPS.map((group, gi) => {
            const baseDelay = gi * 0.1;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + baseDelay }}
              >
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-zinc-400 dark:text-zinc-500 mb-2.5 transition-colors duration-300">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.35, delay: 0.15 + baseDelay + i * 0.04 }}
                      className={`px-3.5 py-1.5 rounded-xl border text-sm font-medium cursor-default transition-all duration-300 ${
                        colorVariant[skill.color]
                      }`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
