export type ProjectKey = "hobbymap" | "royalprime" | "synrax" | "sonho";

export interface PortfolioProject {
  key: ProjectKey;
  name: string;
  url?: string;
  github?: string;
  status: "live" | "inProgress";
  accent: "hobbymap" | "royalprime" | "synrax" | "sonho";
  stack: readonly string[];
  languages: readonly string[];
  platforms: readonly { label: string; tech: string }[];
  infra: readonly { name: string; role: string }[];
  stackByLayer: readonly { layer: string; items: readonly string[] }[];
}

export const hobbymap: PortfolioProject = {
  key: "hobbymap", name: "HobbyMap", url: "https://hobbymap.com.br", github: "https://github.com/FelipeVilelaFreire/HobbyMap", status: "live", accent: "hobbymap",
  languages: ["PT", "EN", "DE"], stack: ["Next.js", "React Native", "Django", "PostGIS", "TypeScript", "AWS S3"],
  platforms: [{ label: "Web", tech: "Next.js 16" }, { label: "Mobile", tech: "React Native + Expo" }, { label: "Admin", tech: "React + Vite" }, { label: "Backend", tech: "Django REST + PostGIS" }],
  infra: [{ name: "Vercel", role: "Web deployment" }, { name: "Render", role: "API server" }, { name: "Supabase", role: "PostgreSQL and authentication" }, { name: "AWS S3", role: "File storage" }],
  stackByLayer: [{ layer: "Mobile", items: ["React Native", "Expo", "TypeScript"] }, { layer: "Web", items: ["Next.js", "TypeScript"] }, { layer: "Admin", items: ["React", "Vite", "TypeScript"] }, { layer: "Backend", items: ["Django", "DRF", "PostgreSQL", "PostGIS"] }],
};

export const royalprime: PortfolioProject = {
  key: "royalprime", name: "RoyalPrime", github: "https://github.com/FelipeVilelaFreire/Royal-Carnes", status: "inProgress", accent: "royalprime", languages: ["PT"],
  stack: ["React", "React Native", "Django REST", "PostgreSQL", "TypeScript", "Vite"],
  platforms: [{ label: "Client web", tech: "React + Vite" }, { label: "Client mobile", tech: "React Native" }, { label: "Admin", tech: "React + Vite" }, { label: "Backend", tech: "Django REST Framework" }],
  infra: [{ name: "Vercel", role: "Frontend deployment target" }, { name: "Render", role: "Django API deployment target" }, { name: "Supabase", role: "Managed PostgreSQL target" }],
  stackByLayer: [{ layer: "Backend", items: ["Django", "DRF", "PostgreSQL"] }, { layer: "Shared core", items: ["TypeScript", "Contracts", "API clients", "Hooks"] }, { layer: "Client", items: ["React", "React Native", "Vite"] }, { layer: "Admin", items: ["React", "Vite"] }],
};

export const synrax: PortfolioProject = {
  key: "synrax", name: "Synrax", url: "https://www.syraxautomation.com/", github: "https://github.com/FelipeVilelaFreire/Syrax", status: "inProgress", accent: "synrax",
  languages: ["PT", "EN"], stack: ["Next.js", "Django REST", "PostgreSQL", "Webhooks", "WhatsApp API", "TypeScript"],
  platforms: [{ label: "Web", tech: "Next.js" }, { label: "Admin", tech: "React + Vite" }, { label: "Mobile", tech: "React Native + Expo" }, { label: "Backend", tech: "Django REST Framework" }],
  infra: [{ name: "Vercel", role: "Web application" }, { name: "Render", role: "Backend API server" }, { name: "Supabase", role: "PostgreSQL" }, { name: "Meta WhatsApp API", role: "Messaging gateway" }],
  stackByLayer: [{ layer: "Web", items: ["Next.js", "React", "TypeScript"] }, { layer: "Backend", items: ["Django", "DRF", "PostgreSQL", "Webhooks"] }, { layer: "Automation", items: ["Hotmart", "Kiwify", "WhatsApp", "Email"] }, { layer: "Admin", items: ["React", "Vite"] }],
};

export const sonho: PortfolioProject = {
  key: "sonho", name: "Sonho dos Pés", github: "https://github.com/FelipeVilelaFreire/SonhodosPes", status: "live", accent: "sonho", languages: ["PT"],
  stack: ["Vanilla JavaScript", "PWA", "Service Worker", "IndexedDB", "Vercel Serverless", "Google Sheets API"],
  platforms: [{ label: "Store PWA", tech: "HTML5 + CSS3 + Vanilla JavaScript" }, { label: "Offline data", tech: "IndexedDB + Service Worker" }, { label: "Serverless API", tech: "Node.js on Vercel" }, { label: "Operations", tech: "Google Sheets API" }],
  infra: [{ name: "Vercel", role: "PWA and serverless deployment" }, { name: "Google Sheets", role: "Operational product data" }, { name: "IndexedDB", role: "Offline browser storage" }],
  stackByLayer: [{ layer: "PWA", items: ["HTML5", "CSS3", "Vanilla JavaScript"] }, { layer: "Offline", items: ["Service Worker", "IndexedDB", "Web Crypto API"] }, { layer: "API", items: ["Vercel Serverless", "Node.js", "Google Sheets API"] }],
};

export const portfolioProjects = [hobbymap, royalprime, synrax, sonho] as const;

export const prognum = {
  url: null as string | null,
  stack: ["Next.js", "FastAPI", "Python", "TypeScript", "Recharts"],
} as const;

