"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import BlurText from "@/components/ui/BlurText";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { useLanguage } from "@/lib/LanguageContext";
import { personal } from "@/data/personal";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-200px)] flex flex-col items-center justify-center pt-20 sm:pt-28 pb-6 px-4">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mb-6 sm:mb-9"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-black/10 dark:border-white/10 transition-colors duration-300">
            <Image
              src="/assets/fotos/felipevilelafreire.jfif"
              alt="Felipe Vilela Freire"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
              unoptimized
            />
          </div>
          <div className="absolute inset-[-5px] sm:inset-[-6px] rounded-full border border-cyan-400/30 dark:border-cyan-400/20 animate-pulse transition-colors duration-300" />
          <div className="absolute inset-[-10px] sm:inset-[-12px] rounded-full border border-cyan-400/[0.10] dark:border-cyan-400/[0.07] transition-colors duration-300" />
        </motion.div>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight leading-none mb-2">
          <BlurText
            text={personal.name}
            delay={0.2}
            className="text-zinc-900 dark:text-white"
          />
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.55 }}
          className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-lg md:text-xl font-light tracking-wide mt-6 sm:mt-10 transition-colors duration-300"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Info strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.55 }}
          className="mt-4 mb-8"
        >
          <div className="flex flex-col rounded-2xl border border-black/[0.08] dark:border-white/[0.16] bg-white/70 dark:bg-white/[0.07] backdrop-blur-sm shadow-sm dark:shadow-none transition-colors duration-300">
            {/* Row 1 — info strip */}
            <div className="flex flex-wrap items-center justify-center">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5">
                <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-500 dark:bg-white/[0.12] dark:border-white/[0.20] dark:text-white/65 transition-colors duration-300">BR</span>
                <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-colors duration-300">{t.hero.nationality}</span>
              </div>
              <div className="w-px h-5 bg-black/[0.08] dark:bg-white/[0.18]" />
              <div className="px-3 sm:px-4 py-2.5">
                <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-colors duration-300">{t.hero.age}</span>
              </div>
              <div className="w-px h-5 bg-black/[0.08] dark:bg-white/[0.18]" />
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5">
                <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-500 dark:bg-white/[0.12] dark:border-white/[0.20] dark:text-white/65 transition-colors duration-300">EU</span>
                <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-colors duration-300">{t.hero.citizenship}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-black/[0.06] dark:bg-white/[0.08] mx-3" />

            {/* Row 2 — email */}
            <div className="flex items-center justify-center gap-2 px-4 py-2">
              <Mail size={11} className="text-zinc-400 dark:text-zinc-500 flex-shrink-0 transition-colors duration-300" />
              <span className="text-xs text-zinc-500 dark:text-zinc-400 tracking-wide transition-colors duration-300">
                {personal.email}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              p-3 rounded-xl transition-all duration-300
              bg-black/[0.04] border border-black/[0.08]
              hover:border-cyan-500/40 hover:bg-cyan-50
              dark:bg-white/[0.18] dark:border-white/[0.22]
              dark:hover:bg-white/[0.28] dark:hover:border-white/35
            "
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              p-3 rounded-xl transition-all duration-300
              bg-black/[0.04] border border-black/[0.08] text-zinc-500
              hover:text-zinc-900 hover:border-cyan-500/40 hover:bg-cyan-50
              dark:bg-white/[0.12] dark:border-white/[0.18] dark:text-white/80
              dark:hover:bg-white/[0.20] dark:hover:border-white/30 dark:hover:text-white
            "
          >
            <GitHubIcon size={18} />
          </a>
        </motion.div>
      </div>

      {/* Fade-to-section gradient hint */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#f7f7f7]/60 dark:to-[#030303]/60 pointer-events-none transition-colors duration-300" />
    </section>
  );
}
