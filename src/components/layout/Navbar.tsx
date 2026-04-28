"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Sun, Moon } from "lucide-react";
import { useLanguage, type Locale } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import PrintModal from "@/components/ui/PrintModal";

const LANGS: { code: Locale; flag: string }[] = [
  { code: "en", flag: "🇬🇧" },
  { code: "de", flag: "🇩🇪" },
  { code: "pt", flag: "🇧🇷" },
  { code: "es", flag: "🇪🇸" },
];

const HINT_KEY = "cv_lang_hint_seen";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [printOpen, setPrintOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem(HINT_KEY)) setShowHint(true);
  }, []);

  function handleSetLocale(code: Locale) {
    setLocale(code);
    if (showHint) {
      setShowHint(false);
      localStorage.setItem(HINT_KEY, "1");
    }
  }

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? "w-[calc(100%-2rem)] max-w-5xl"
          : "w-[calc(100%-4rem)] max-w-4xl"
      }`}
    >
      <div
        className="
          relative overflow-hidden rounded-2xl px-4 sm:px-7 py-3 sm:py-4
          flex items-center justify-between
          /* Light */ bg-white/85 border border-black/[0.10] shadow-[0_4px_30px_rgba(0,0,0,0.08)]
          /* Dark  */ dark:bg-white/[0.06] dark:border-white/[0.13] dark:shadow-[0_4px_40px_rgba(0,0,0,0.5)]
          backdrop-blur-2xl transition-colors duration-300
        "
      >
        {/* Inner sheen */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.04] via-transparent to-purple-500/[0.03] rounded-2xl pointer-events-none" />

        {/* Title + locale badge */}
        <div className="relative flex items-center gap-2.5">
          <span className="hidden sm:block text-sm font-semibold tracking-[0.15em] uppercase text-zinc-700 dark:text-white/75 transition-colors duration-300">
            {t.nav.title}
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-md bg-black/[0.05] dark:bg-white/[0.10] border border-black/[0.07] dark:border-white/[0.18] text-zinc-500 dark:text-white/55 transition-colors duration-300">
            {locale.toUpperCase()}
          </span>
        </div>

        <div className="relative flex items-center gap-3">
          {/* Language switcher — ícone + códigos ISO */}
          <motion.div
            animate={showHint ? {
              scale:     [1, 1.03, 1, 1.03, 1],
              boxShadow: [
                "0 0 0px rgba(6,182,212,0)",
                "0 0 14px rgba(6,182,212,0.28)",
                "0 0 0px rgba(6,182,212,0)",
                "0 0 14px rgba(6,182,212,0.28)",
                "0 0 0px rgba(6,182,212,0)",
              ],
            } : {}}
            transition={{ duration: 2.4, ease: "easeInOut", delay: 1.2 }}
            onAnimationComplete={() => {
              if (showHint) {
                setShowHint(false);
                localStorage.setItem(HINT_KEY, "1");
              }
            }}
            className="flex items-center gap-1.5 bg-black/[0.04] dark:bg-white/[0.08] rounded-xl px-2 py-1 transition-colors duration-300"
          >
            {LANGS.map(({ code }) => (
              <button
                key={code}
                onClick={() => handleSetLocale(code)}
                className={`px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 ${
                  locale === code
                    ? "bg-white dark:bg-white/[0.22] text-zinc-900 dark:text-white shadow-sm"
                    : "text-zinc-400 dark:text-white/65 hover:text-zinc-700 dark:hover:text-white/90 hover:bg-white/60 dark:hover:bg-white/[0.12]"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </motion.div>

          <div className="w-px h-5 bg-black/10 dark:bg-white/10 transition-colors duration-300" />

          {/* Theme toggle — Sun (light) / Moon (dark) */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="
              p-2.5 rounded-xl transition-all duration-300
              border border-black/[0.08] text-zinc-500 bg-transparent
              hover:bg-black/[0.05] hover:text-zinc-800
              dark:border-white/10 dark:text-white/50
              dark:hover:bg-white/[0.07] dark:hover:text-white
            "
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <div className="w-px h-5 bg-black/10 dark:bg-white/10 transition-colors duration-300" />

          {/* Download PDF — temporariamente desativado */}
          {/* <button
            onClick={() => setPrintOpen(true)}
            className="
              flex items-center gap-2 px-3 sm:px-5 py-2 rounded-xl text-xs font-semibold transition-all duration-300
              border border-cyan-500/50 text-cyan-600
              hover:bg-cyan-500/8 hover:border-cyan-500/70 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
              dark:border-cyan-500/45 dark:text-cyan-400
              dark:hover:bg-cyan-500/10 dark:hover:border-cyan-400/65 dark:hover:shadow-[0_0_26px_rgba(6,182,212,0.22)]
            "
          >
            <Download size={13} />
            <span className="hidden sm:inline">{t.nav.downloadPDF}</span>
          </button> */}
        </div>
      </div>
    </nav>
  );
}
