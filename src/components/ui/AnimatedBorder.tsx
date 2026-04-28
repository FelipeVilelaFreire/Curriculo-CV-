"use client";
import { motion } from "framer-motion";

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedBorder({
  children,
  className = "",
}: AnimatedBorderProps) {
  return (
    <div className={`relative rounded-2xl p-[1px] overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(6,182,212,0.9) 60deg, rgba(139,92,246,0.7) 120deg, transparent 180deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative rounded-2xl overflow-hidden">{children}</div>
    </div>
  );
}
