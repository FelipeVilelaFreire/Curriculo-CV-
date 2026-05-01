"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import GlassCard from "@/components/ui/GlassCard";
import { useLanguage } from "@/lib/LanguageContext";
import { personal } from "@/data/personal";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { t } = useLanguage();

  const contactLinks = [
    {
      id: "linkedin",
      icon: <LinkedInIcon size={24} />,
      label: "LinkedIn",
      value: "felipevilelafreire786721336",
      href: personal.linkedin,
    },
    {
      id: "github",
      icon: <GitHubIcon size={24} />,
      label: "GitHub",
      value: "FelipeVilelaFreire",
      href: personal.github,
    },
    {
      id: "email",
      icon: <Mail size={24} className="text-zinc-600 dark:text-zinc-400" />,
      label: "E-mail",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
  ];

  return (
    <section ref={ref} className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-[0.2em] uppercase mb-4 transition-colors duration-300">
            {t.sections.contact}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">
            {t.sections.contact}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactLinks.map((link, i) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <GlassCard className="h-full transition-all duration-300 group-hover:border-cyan-500/40 group-hover:bg-cyan-50/50 dark:group-hover:bg-white/[0.12] dark:group-hover:border-white/30">
                  <div className="p-6 flex flex-col items-center justify-center text-center gap-3">
                    <div className="p-3 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] transition-colors duration-300 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-white/20 shadow-sm">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-white transition-colors duration-300">
                        {link.label}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 transition-colors duration-300 truncate max-w-full">
                        {link.value}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
