"use client";
import { useTheme } from "@/lib/ThemeContext";

export default function AuroraBackground() {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cyan — top-left */}
      <div
        className="absolute top-[-120px] left-[-80px] w-[650px] h-[650px] rounded-full blur-[150px] animate-pulse transition-opacity duration-700"
        style={{
          background: isDark
            ? "rgba(6, 182, 212, 0.07)"
            : "rgba(6, 182, 212, 0.12)",
          opacity: isDark ? 1 : 0.5,
        }}
      />
      {/* Purple — bottom-right */}
      <div
        className="absolute bottom-[-100px] right-[-80px] w-[550px] h-[550px] rounded-full blur-[130px] animate-pulse transition-opacity duration-700"
        style={{
          background: isDark
            ? "rgba(139, 92, 246, 0.10)"
            : "rgba(139, 92, 246, 0.08)",
          opacity: isDark ? 1 : 0.4,
          animationDelay: "1.5s",
          animationDuration: "4s",
        }}
      />
      {/* Cyan accent — mid-right */}
      <div
        className="absolute top-[45%] right-[8%] w-[280px] h-[280px] rounded-full blur-[100px] transition-opacity duration-700"
        style={{
          background: "rgba(6, 182, 212, 0.04)",
          opacity: isDark ? 1 : 0.35,
        }}
      />
    </div>
  );
}
