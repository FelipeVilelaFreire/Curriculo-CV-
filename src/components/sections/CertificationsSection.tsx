"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FileText, X } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { useLanguage } from "@/lib/LanguageContext";
import { toefl } from "@/data/personal";

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

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
            {t.sections.certifications}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <GlassCard>
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                {/* Logo */}
                <div className="flex-shrink-0 w-24 h-9 sm:w-28 sm:h-11 flex items-center justify-center">
                  <img
                    src="/logos/toefl.svg"
                    alt="TOEFL iBT"
                    className="w-full h-full object-contain dark:invert transition-[filter] duration-300"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap mb-0.5">
                    <span className="px-2 py-0.5 rounded-full bg-cyan-100 border border-cyan-300/70 text-cyan-700 dark:bg-cyan-500/15 dark:border-cyan-500/30 dark:text-cyan-400 text-[10px] font-semibold tracking-wide transition-colors duration-300">
                      {toefl.score}
                    </span>
                  </div>
                  <p className="text-zinc-400 dark:text-zinc-500 text-xs transition-colors duration-300">
                    {toefl.issuer}
                  </p>
                </div>

                {/* View PDF */}
                <button
                  onClick={() => setOpen(true)}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium
                    text-cyan-600 border border-cyan-300/50 bg-cyan-50/60
                    hover:bg-cyan-100 hover:border-cyan-400/70
                    dark:text-cyan-300 dark:border-cyan-500/25 dark:bg-cyan-500/[0.08]
                    dark:hover:bg-cyan-500/[0.16] dark:hover:border-cyan-400/40
                    transition-all duration-200"
                >
                  <FileText size={11} />
                  {t.certifications.viewCert}
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/55 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="
                relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden
                bg-white/95 dark:bg-[#0d0d0d]/95
                border border-black/[0.08] dark:border-white/[0.14]
                shadow-[0_24px_80px_rgba(0,0,0,0.22)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.7)]
                backdrop-blur-2xl
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-300/50 dark:bg-cyan-500/15 dark:border-cyan-500/30 flex items-center justify-center transition-colors duration-300">
                    <FileText size={14} className="text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-zinc-900 dark:text-white font-semibold text-sm leading-tight transition-colors duration-300">
                      {toefl.name}
                    </p>
                    <p className="text-zinc-400 dark:text-zinc-500 text-[11px] transition-colors duration-300">
                      {toefl.issuer} · {toefl.score}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-black/[0.05] dark:text-white/40 dark:hover:text-white dark:hover:bg-white/[0.08] transition-all duration-200"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src="/pdf/TOEFL Candidate Details.pdf"
                  title="TOEFL Certificate"
                  className="w-full h-full min-h-[65vh]"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
