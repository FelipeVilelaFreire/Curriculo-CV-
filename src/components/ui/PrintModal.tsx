"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileDown, Loader } from "lucide-react";
import { useLanguage, type Locale, messages } from "@/lib/LanguageContext";
import { personal } from "@/data/personal";
import dynamic from "next/dynamic";

const LANG_OPTIONS: { code: Locale; label: string; native: string }[] = [
  { code: "pt", label: "PT", native: "Português" },
  { code: "en", label: "EN", native: "English"   },
  { code: "de", label: "DE", native: "Deutsch"   },
  { code: "es", label: "ES", native: "Español"   },
];

export default function PrintModal({ onClose }: { onClose: () => void }) {
  const { locale } = useLanguage();
  const [selected, setSelected] = useState<Locale>(locale);
  const [loading, setLoading]   = useState(false);
  const [mounted, setMounted]   = useState(false);
  useEffect(() => setMounted(true), []);

  async function handleGenerate() {
    setLoading(true);
    try {
      const { pdf } = await import("@react-pdf/renderer");
      const { default: CVDocument } = await import("@/components/pdf/CVDocument");
      const React = await import("react");

      const photoUrl = `${window.location.origin}${personal.photo}`;
      const blob = await pdf(
        React.createElement(CVDocument, { t: messages[selected], photoUrl })
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const a   = document.createElement("a");
      a.href     = url;
      a.download = `Felipe_Vilela_Freire_CV_${selected.toUpperCase()}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      onClose();
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/55 backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="
            relative z-10 w-full max-w-sm rounded-2xl overflow-hidden
            bg-white/97 dark:bg-[#0d0d0d]/97
            border border-black/[0.08] dark:border-white/[0.14]
            shadow-[0_24px_80px_rgba(0,0,0,0.22)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.7)]
            backdrop-blur-2xl
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.06] dark:border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-50 border border-cyan-300/50 dark:bg-cyan-500/15 dark:border-cyan-500/30 flex items-center justify-center transition-colors duration-300">
                <FileDown size={13} className="text-cyan-600 dark:text-cyan-400" />
              </div>
              <p className="text-zinc-900 dark:text-white font-semibold text-sm transition-colors duration-300">
                Idioma do PDF
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-black/[0.05] dark:text-white/40 dark:hover:text-white dark:hover:bg-white/[0.08] transition-all duration-200"
            >
              <X size={15} />
            </button>
          </div>

          {/* Language grid */}
          <div className="p-5 grid grid-cols-2 gap-2.5">
            {LANG_OPTIONS.map(({ code, label, native }) => {
              const active = selected === code;
              return (
                <button
                  key={code}
                  onClick={() => setSelected(code)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all duration-200 ${
                    active
                      ? "border-cyan-400/70 bg-cyan-50 dark:bg-cyan-500/[0.12] dark:border-cyan-500/45"
                      : "border-zinc-200 bg-zinc-50 hover:border-zinc-300 hover:bg-white dark:border-white/[0.10] dark:bg-white/[0.03] dark:hover:border-white/[0.20] dark:hover:bg-white/[0.06]"
                  }`}
                >
                  <div>
                    <p className={`text-xs font-bold tracking-widest transition-colors duration-200 ${
                      active ? "text-cyan-700 dark:text-cyan-300" : "text-zinc-500 dark:text-zinc-400"
                    }`}>
                      {label}
                    </p>
                    <p className={`text-[11px] mt-0.5 transition-colors duration-200 ${
                      active ? "text-cyan-600 dark:text-cyan-400" : "text-zinc-400 dark:text-zinc-500"
                    }`}>
                      {native}
                    </p>
                  </div>
                  {active && (
                    <div className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Generate button */}
          <div className="px-5 pb-5">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="
                w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm transition-all duration-300
                bg-cyan-50 border border-cyan-300/70 text-cyan-700
                hover:bg-cyan-100 hover:border-cyan-400/70
                dark:bg-cyan-500/[0.10] dark:border-cyan-500/30 dark:text-cyan-400
                dark:hover:bg-cyan-500/[0.18] dark:hover:border-cyan-500/50
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {loading
                ? <><Loader size={14} className="animate-spin" /> Gerando…</>
                : <><FileDown size={14} /> Gerar PDF</>
              }
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
