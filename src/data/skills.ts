export type SkillColor = "cyan" | "purple" | "green" | "white" | "orange" | "yellow" | "amber" | "sky" | "indigo";

export interface SkillItem  { name: string; color: SkillColor }
export interface SkillGroup { label: string; skills: SkillItem[] }

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "AI Tools",
    skills: [
      { name: "Claude Code", color: "orange" },
      { name: "Antigravity", color: "sky"    },
      { name: "Gemini CLI",  color: "indigo" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React",         color: "cyan"   },
      { name: "Next.js",       color: "white"  },
      { name: "React Native",  color: "cyan"   },
      { name: "TypeScript",    color: "cyan"   },
      { name: "Tailwind CSS",  color: "cyan"   },
      { name: "Framer Motion", color: "purple" },
      { name: "Recharts",      color: "purple" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Python",    color: "yellow" },
      { name: "FastAPI",   color: "green"  },
      { name: "Django",    color: "green"  },
      { name: "REST APIs", color: "white"  },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "PostgreSQL", color: "cyan"  },
      { name: "PostGIS",    color: "cyan"  },
      { name: "Supabase",   color: "green" },
    ],
  },
  {
    label: "Infra & Tools",
    skills: [
      { name: "Git",    color: "orange" },
      { name: "AWS S3", color: "orange" },
      { name: "Vercel", color: "white"  },
      { name: "Expo",   color: "white"  },
    ],
  },
  {
    label: "IAs",
    skills: [
      { name: "ChatGPT", color: "white"  },
      { name: "Claude",  color: "orange" },
      { name: "Gemini",  color: "sky"    },
      { name: "Copilot", color: "purple" },
      { name: "Grok",    color: "white"  },
    ],
  },
];
