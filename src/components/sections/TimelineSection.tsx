"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { logos } from "@/assets/logos";
import { companies, timelineItems } from "@/data/personal";

type ItemKey = keyof typeof companies;

function LogoImage({ itemKey, alt }: { itemKey: ItemKey; alt: string }) {
  const [error, setError] = useState(false);
  const logo = logos[itemKey];

  if (!logo || error) {
    return (
      <span className="text-4xl font-black select-none text-zinc-200 dark:text-white/[0.09] transition-colors duration-300">
        {alt.charAt(0)}
      </span>
    );
  }
  return (
    <Image
      src={logo}
      alt={alt}
      width={40}
      height={40}
      className="w-full h-full object-contain"
      style={{ background: "transparent" }}
      onError={() => setError(true)}
    />
  );
}

export default function TimelineSection() {
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
          className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-[0.2em] uppercase mb-12 transition-colors duration-300"
        >
          {t.sections.experience}
        </motion.p>

        <div className="relative">
          {/* Glowing vertical line — centred on the 14 px node */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
            className="absolute left-[7px] top-0 bottom-0 w-px origin-top"
            style={{
              background:
                "linear-gradient(to bottom, rgba(6,182,212,0.8) 0%, rgba(6,182,212,0.3) 60%, transparent 100%)",
            }}
          />

          <div className="space-y-12">
            {timelineItems.map(({ key, current }, i) => {
              const item = t.timeline.items[key];

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                  className="relative flex items-start gap-4 sm:gap-7"
                >
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0 w-[14px] mt-[22px]">
                    <div
                      className={`w-[14px] h-[14px] rounded-full border-2 transition-colors duration-300 ${
                        current
                          ? "bg-cyan-400 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.7)] dark:shadow-[0_0_18px_rgba(6,182,212,0.8)]"
                          : "bg-white dark:bg-[#030303] border-zinc-300 dark:border-white/30"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    {/* Header: logo + company info */}
                    <div className="flex items-center gap-5 mb-4">

                      {/* Logo flutuando */}
                      <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-xl dark:bg-white/[0.8] transition-colors duration-300 p-1.5 sm:p-2">
                        <LogoImage itemKey={key} alt={companies[key]} />
                      </div>

                      {/* Company + role + period */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5 mb-1">
                          <h3 className="text-zinc-900 dark:text-white font-bold text-lg leading-tight tracking-tight transition-colors duration-300">
                            {companies[key]}
                          </h3>
                          {current && (
                            <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 border border-cyan-300/70 text-cyan-700 dark:bg-cyan-500/15 dark:border-cyan-500/30 dark:text-cyan-400 text-[10px] font-semibold tracking-wide transition-colors duration-300">
                              {t.timeline.present}
                            </span>
                          )}
                        </div>
                        <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wide transition-colors duration-300">
                          {item.role}
                        </p>
                        <p className="text-zinc-400 dark:text-zinc-500 text-xs mt-1 tracking-wide transition-colors duration-300">
                          {item.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-7 pl-0 sm:pl-[76px] transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
