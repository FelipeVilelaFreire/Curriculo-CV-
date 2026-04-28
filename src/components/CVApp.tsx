"use client";
import { ThemeProvider, useTheme } from "@/lib/ThemeContext";
import { LanguageProvider } from "@/lib/LanguageContext";
import AuroraBackground from "@/components/ui/AuroraBackground";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import LanguagesSection from "@/components/sections/LanguagesSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import HobbiesSection from "@/components/sections/HobbiesSection";

function Divider() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="h-px bg-black/[0.06] dark:bg-white/[0.07]" />
    </div>
  );
}

/* Inner component so it can read ThemeContext after the Provider mounts */
function ThemedApp() {
  const { isDark } = useTheme();
  return (
    <div className={isDark ? "dark" : ""}>
      <main className="relative min-h-screen bg-[#f7f7f7] dark:bg-[#030303] transition-colors duration-300">
        <AuroraBackground />
        <Navbar />
        <div className="relative z-10">
          <HeroSection />
          <Divider />
          <LanguagesSection />
          <Divider />
          <TimelineSection />
          <Divider />
          <CertificationsSection />
          <Divider />
          <ProjectsSection />
          <Divider />
          <SkillsSection />
          <Divider />
          <HobbiesSection />
        </div>
      </main>
    </div>
  );
}

export default function CVApp() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ThemedApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
