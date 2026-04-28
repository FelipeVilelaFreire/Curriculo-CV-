"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { useLanguage } from "@/lib/LanguageContext";

export default function LanguagesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const items = [
    // { key: "german" as const, code: "DE" }, // sem certificação por enquanto
    { key: "english" as const,    code: "EN" },
    { key: "portuguese" as const, code: "PT" },
    { key: "spanish" as const,    code: "ES" },
  ] as const;

  return (
    <section ref={ref} className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-[0.2em] uppercase mb-8 transition-colors duration-300"
          >
            {t.sections.languages}
          </motion.p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 items-stretch">
            {items.map(({ key, code }, i) => {
              const lang = t.langs[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full min-h-[150px] sm:min-h-[200px]"
                >
                  <GlassCard className="h-full">
                    <div className="p-3 sm:p-6 text-center flex flex-col items-center justify-center gap-1.5 sm:gap-2 h-full">
                      <div className="inline-flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-zinc-100 border border-zinc-200 dark:bg-white/[0.10] dark:border-white/[0.20] transition-colors duration-300">
                        <span className="text-sm font-bold tracking-widest text-zinc-600 dark:text-white/85 transition-colors duration-300">
                          {code}
                        </span>
                      </div>
                      <div className="text-zinc-900 dark:text-white font-semibold text-sm transition-colors duration-300">
                        {lang.name}
                      </div>
                      <div className="text-zinc-500 dark:text-zinc-300 text-xs font-medium transition-colors duration-300">
                        {lang.level}
                      </div>
                      {lang.note && (
                        <span className="text-zinc-400 dark:text-zinc-400 text-[10px] transition-colors duration-300">
                          {lang.note}
                        </span>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
    </section>
  );
}
