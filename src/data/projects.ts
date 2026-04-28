export const hobbymap = {
  url:       "https://hobbymap.com.br",
  languages: ["PT", "EN", "DE"],
  stack: ["Next.js", "React Native", "Django", "PostGIS", "TypeScript", "AWS S3"],
  platforms: [
    { label: "Mobile",  tech: "React Native + Expo" },
    { label: "Web",     tech: "Next.js 16"          },
    { label: "Admin",   tech: "React + Vite"        },
    { label: "API",     tech: "Django + PostGIS"    },
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
