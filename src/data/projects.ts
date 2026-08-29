export const synrax = {
  url:       "https://www.syraxautomation.com/",
  github:    "https://github.com/FelipeVilelaFreire/Syrax",
  builtWith: "Codex",
  languages: ["PT", "EN"],
  stack: ["Next.js 16", "Three.js", "Django REST", "PostgreSQL", "Meta WhatsApp API", "Webhooks", "Tailwind CSS"],
  platforms: [
    { label: "Web",        tech: "Next.js 16 + Three.js Glass Flow" },
    { label: "Backend",    tech: "Django REST Framework" },
    { label: "Automation", tech: "Meta WhatsApp Cloud API & Webhooks" },
    { label: "Admin",      tech: "React + Vite" },
  ],
  infra: [
    { name: "Vercel",           role: "Web Application & Landing Page" },
    { name: "Render",           role: "Backend API Server" },
    { name: "PostgreSQL",       role: "Relational Database" },
    { name: "Meta WhatsApp API", role: "Messaging & Webhook Gateway" },
  ],
  stackByLayer: [
    { layer: "UI / Design System", items: ["GlassFlow Design System", "Three.js", "Tailwind CSS", "TypeScript"] },
    { layer: "Web App",          items: ["Next.js 16", "React 19", "Shared-Core DTOs"] },
    { layer: "Backend API",      items: ["Django REST Framework", "PostgreSQL", "Async Webhooks"] },
    { layer: "Automations",       items: ["Meta WhatsApp Cloud API", "Hotmart & Kiwify Webhooks", "AI Guidance Engine"] },
  ],
} as const;

export const hobbymap = {
  url:       "https://hobbymap.com.br",
  builtWith: "Claude Code",
  languages: ["PT", "EN", "DE"],
  stack: ["Next.js", "React Native", "Django", "PostGIS", "TypeScript", "AWS S3"],
  platforms: [
    { label: "Web",     tech: "Next.js 16"          },
    { label: "Mobile",  tech: "React Native + Expo" },
    { label: "Admin",   tech: "React + Vite"        },
    { label: "Backend", tech: "Django REST + PostGIS" },
  ],
  infra: [
    { name: "Vercel",   role: "Frontend Deploy" },
    { name: "Render",   role: "API Server"       },
    { name: "Supabase", role: "Database & Auth"  },
    { name: "AWS S3",   role: "File Storage"     },
  ],
  stackByLayer: [
    { layer: "Mobile",  items: ["React Native", "Expo", "TypeScript"]     },
    { layer: "Web",     items: ["Next.js 16", "TypeScript"]                },
    { layer: "Admin",   items: ["React", "Vite", "TypeScript"]            },
    { layer: "Backend", items: ["Django", "DRF", "PostgreSQL", "PostGIS"] },
  ],
} as const;

export const lipenet = {
  github: "https://github.com/FelipeVilelaFreire/LipeNet",
  stack:  [] as string[],
} as const;

export const prognum = {
  url:   null as string | null,
  stack: ["Next.js", "FastAPI", "Python", "TypeScript", "Recharts"],
} as const;

export const sonho = {
  url:    null as string | null,
  github: "https://github.com/FelipeVilelaFreire/SonhodosPes",
  stack:  ["Vanilla JS", "PWA", "Service Worker", "IndexedDB", "Vercel Serverless", "Google Sheets API"],
} as const;

