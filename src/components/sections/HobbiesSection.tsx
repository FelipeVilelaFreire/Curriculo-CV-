"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Dumbbell, Music, Heart } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { hobbyTags, volunteerOrg } from "@/data/personal";
import { logos } from "@/assets/logos";

export default function HobbiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative py-16 px-4 pb-28">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-[0.2em] uppercase transition-colors duration-300">
            {t.sections.hobbies}
          </p>
          <p className="text-zinc-400 dark:text-zinc-500 text-xs mt-1.5 transition-colors duration-300">
            {t.sections.hobbiesSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {/* Sport — wide */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="col-span-1 sm:col-span-2 relative overflow-hidden rounded-2xl p-4 sm:p-6
              bg-gradient-to-br from-cyan-50 to-teal-100/70
              border border-cyan-200/60
              dark:from-cyan-950/50 dark:to-teal-900/30
              dark:border-cyan-500/20
              transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-white/70 dark:bg-white/10 border border-cyan-200/60 dark:border-cyan-500/20 flex items-center justify-center mb-4 transition-colors duration-300">
              <Dumbbell size={18} className="text-cyan-600 dark:text-cyan-400" />
            </div>
            <p className="text-zinc-900 dark:text-white font-bold text-base leading-tight mb-1 transition-colors duration-300">
              {t.hobbies.sport.label}
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-4 transition-colors duration-300">
              {t.hobbies.sport.sublabel}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {hobbyTags.sport.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-medium
                    bg-white/60 border border-cyan-200/70 text-cyan-700
                    dark:bg-white/[0.08] dark:border-cyan-500/25 dark:text-cyan-300
                    transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Music */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="col-span-1 relative overflow-hidden rounded-2xl p-4 sm:p-6
              bg-gradient-to-br from-violet-50 to-purple-100/70
              border border-violet-200/60
              dark:from-violet-950/50 dark:to-purple-900/30
              dark:border-violet-500/20
              transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-white/70 dark:bg-white/10 border border-violet-200/60 dark:border-violet-500/20 flex items-center justify-center mb-4 transition-colors duration-300">
              <Music size={18} className="text-violet-600 dark:text-violet-400" />
            </div>
            <p className="text-zinc-900 dark:text-white font-bold text-base leading-tight mb-1 transition-colors duration-300">
              {t.hobbies.music.label}
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-4 transition-colors duration-300">
              {t.hobbies.music.sublabel}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {hobbyTags.music.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-medium
                    bg-white/60 border border-violet-200/70 text-violet-700
                    dark:bg-white/[0.08] dark:border-violet-500/25 dark:text-violet-300
                    transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Volunteering — full width banner */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="print-volunteer col-span-1 sm:col-span-3 relative overflow-hidden rounded-2xl p-4 sm:p-6
              bg-gradient-to-br from-amber-50 to-orange-100/70
              border border-amber-200/60
              dark:from-amber-950/40 dark:to-orange-900/25
              dark:border-amber-500/20
              transition-colors duration-300"
          >
            <div className="flex items-start gap-3 sm:gap-5">
              {/* Jovens da Paz logo or fallback */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-400 dark:bg-transparent border border-amber-400/40 dark:border-amber-500/20 flex items-center justify-center overflow-hidden p-1.5 transition-colors duration-300">
                {logos.jovensdapaz
                  ? <Image src={logos.jovensdapaz} alt="Jovens da Paz" width={48} height={48} className="w-full h-full object-contain" />
                  : <Heart size={18} className="text-amber-600 dark:text-amber-400" />}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-zinc-900 dark:text-white font-bold text-base leading-tight mb-1 transition-colors duration-300">
                  {t.hobbies.volunteer.label}
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-3 transition-colors duration-300">
                  {t.hobbies.volunteer.sublabel}
                </p>

                {/* EJC tag */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {hobbyTags.volunteer.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-medium
                        bg-white/60 border border-amber-200/70 text-amber-700
                        dark:bg-white/[0.08] dark:border-amber-500/25 dark:text-amber-300
                        transition-colors duration-300"
                    >
                      {tag}
                      <span className="text-amber-400 dark:text-amber-600 select-none">·</span>
                      <span className="text-amber-500 dark:text-amber-400">{volunteerOrg}</span>
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-zinc-400 dark:text-zinc-500 text-[11px] leading-relaxed transition-colors duration-300">
                  {t.hobbies.volunteer.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
