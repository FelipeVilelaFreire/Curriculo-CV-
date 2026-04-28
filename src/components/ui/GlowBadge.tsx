interface GlowBadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "purple" | "gold";
  className?: string;
}

/* Light and dark variants per color */
const variants = {
  cyan: "border-cyan-400/60 text-cyan-700 bg-cyan-50 dark:border-cyan-500/40 dark:text-cyan-300 dark:bg-cyan-500/10 dark:shadow-[0_0_16px_rgba(6,182,212,0.18)]",
  purple:
    "border-purple-400/60 text-purple-700 bg-purple-50 dark:border-purple-500/40 dark:text-purple-300 dark:bg-purple-500/10 dark:shadow-[0_0_16px_rgba(139,92,246,0.18)]",
  gold: "border-yellow-400/60 text-yellow-700 bg-yellow-50 dark:border-yellow-500/40 dark:text-yellow-200 dark:bg-yellow-500/10 dark:shadow-[0_0_16px_rgba(234,179,8,0.18)]",
};

export default function GlowBadge({
  children,
  variant = "cyan",
  className = "",
}: GlowBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
