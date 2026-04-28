interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverable = true,
}: GlassCardProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl transition-colors duration-300",
        /* Light: clean white card */
        "bg-white/90 backdrop-blur-sm border border-black/[0.07] shadow-[0_2px_20px_rgba(0,0,0,0.05)]",
        /* Dark: glassmorphism */
        "dark:bg-white/[0.07] dark:backdrop-blur-xl dark:border-white/[0.18] dark:shadow-none",
        hoverable
          ? "hover:border-cyan-500/40 hover:shadow-[0_4px_24px_rgba(0,0,0,0.10)] dark:hover:bg-white/[0.11] dark:hover:border-cyan-500/50 dark:hover:shadow-none"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
