"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { personal, toefl } from "@/data/personal";

export type Locale = "en" | "pt" | "de" | "es";

/* ─── Shape do dicionário ─────────────────────────────────────────────────── */
export interface Messages {
  nav: { title: string; downloadPDF: string };
  hero: {
    subtitle: string;
    nationality: string;
    age: string;
    citizenship: string;
  };
  sections: {
    languages: string;
    experience: string;
    certifications: string;
    projects: string;
    skills: string;
    hobbies: string;
    hobbiesSubtitle: string;
  };
  certifications: {
    viewCert: string;
  };
  langs: Record<
    "german" | "english" | "spanish" | "portuguese",
    { name: string; level: string; note: string }
  >;
  timeline: {
    present: string;
    items: {
      prognum: { role: string; period: string; description: string };
      uff:     { role: string; period: string; description: string };
      escola:       { role: string; period: string; description: string };
      santo_inacio: { role: string; period: string; description: string };
    };
  };
  projects: {
    featured:     string;
    professional: string;
    personal:     string;
    viewDetails:  string;
    builtWith:    string;
    hobbymap: {
      description:      string;
      modalDescription: string;
      cta:              string;
      modal: {
        whatIs:       string;
        platforms:    string;
        architecture: string;
        archDesc:     string;
        infra:        string;
        stack:        string;
        languages:    string;
      };
    };
    prognum: { description: string };
    sonho:   { description: string };
    github:  { description: string };
  };
  hobbies: {
    sport:     { label: string; sublabel: string };
    music:     { label: string; sublabel: string };
    volunteer: { label: string; sublabel: string; description: string };
  };
}

/* ─── Dicionários ─────────────────────────────────────────────────────────── */
export const messages: Record<Locale, Messages> = {
  en: {
    nav: { title: "Curriculum Vitae (CV)", downloadPDF: "Download PDF" },
    hero: {
      subtitle: "Fullstack Developer · Information Systems Student",
      nationality: "Brazilian",
      age: `${personal.age} years old`,
      citizenship: "EU Citizenship",
    },
    sections: {
      languages:       "Spoken Languages",
      experience:      "Experience & Education",
      certifications:  "Licenses & Certifications",
      projects:        "Projects",
      skills:          "Technical Skills",
      hobbies:         "Beyond the Code",
      hobbiesSubtitle: "Soft skills development through life",
    },
    certifications: {
      viewCert: "View Certificate",
    },
    langs: {
      german:     { name: "Deutsch",   level: "—",     note: "" },
      english:    { name: "English",   level: "B2",    note: "TOEFL 78/120" },
      spanish:    { name: "Español",   level: "A1",    note: "" },
      portuguese: { name: "Português", level: "Native", note: "" },
    },
    timeline: {
      present: "Present",
      items: {
        prognum: {
          role:        "Front-end Intern",
          period:      "August 2025 — Present",
          description: "Front-end development in React + TypeScript for enterprise financial software, with internal API consumption and Python scripts for data extraction and processing.",
        },
        uff: {
          role:        "Information Systems",
          period:      "2023.2 — 2027.2",
          description: "Bachelor's degree in Information Systems at one of Brazil's leading public research universities.",
        },
        escola: {
          role:        "Primary Education · 1st to 6th grade",
          period:      "2011 — 2016",
          description: "Primary school education at Colégio São Bento with a strong academic foundation.",
        },
        santo_inacio: {
          role:        "Middle & High School · 7th grade to graduation",
          period:      "2017 — 2022",
          description: "Middle and high school education with strong academic and disciplinary foundation.",
        },
      },
    },
    projects: {
      featured:     "Featured",
      professional: "Professional",
      personal:     "Personal",
      viewDetails:  "Details",
      builtWith:    "Built with",
      hobbymap: {
        description:      "SaaS platform for instructors and venues to showcase their services — and for people to discover and practice hobbies near home.",
        modalDescription: "HobbyMap tackles the fragmentation of independent instruction. Instructors get a professional public profile, smart scheduling, and a training library to prescribe workouts and study plans. Students book sessions (in-person or remote), track their progress, and submit video for remote coaching. Venues register their spaces and list the benefit plans they accept (Wellhub, TotalPass, ClassPass) — so users can filter and find exactly where to train with their plan. Think Airbnb discovery + gym CRM + Strava progress tracking — all in one platform. The /explore page is the front door: search by activity, location, and benefit plan.",
        cta:              "Explore the Platform",
        modal: {
          whatIs:       "What is it",
          platforms:    "Platforms",
          architecture: "Architecture",
          archDesc:     "Monorepo with @hobbymap/shared-core — a shared logic package (types, hooks, constants) consumed by both mobile and web. \"Logic Once, Render Twice.\"",
          infra:        "Infrastructure",
          stack:        "Tech Stack",
          languages:    "Available Languages",
        },
      },
      prognum: {
        description: "Frontend improvements to the company's web app for real estate credit simulation and proposal tracking — and an internal pipeline metrics dashboard (C6, Inter). FastAPI backend pulls data via SSH from Firebird and SQL Server, runs ETL into a local Parquet warehouse, and serves KPIs, a phase funnel with drop-off drill-down, and monthly trends.",
      },
      sonho: {
        description: "Mobile-first PWA for internal use in a shoe store — built from scratch with Vanilla JS, HTML5, and CSS3, no frameworks. Sellers check prices, stock, and location in real time from their phones, including offline, with instant search, QR code scanning, Google Lens integration, and Google Sheets sync via Vercel Serverless.",
      },
      github: {
        description: "Open-source algorithms, data structures and utility libraries. Exploring CS fundamentals through practice.",
      },
    },
    hobbies: {
      sport:     { label: "Sport",        sublabel: "Physical discipline & resilience" },
      music:     { label: "Music",        sublabel: "Creativity & pattern recognition" },
      volunteer: { label: "Volunteering", sublabel: "Leadership & social impact", description: "Volunteer at the Encontro de Jovens com Cristo (EJC), organized by Igreja Nossa Senhora da Paz — Ipanema, Rio de Janeiro." },
    },
  },

  pt: {
    nav: { title: "Currículo Vitae (CV)", downloadPDF: "Baixar PDF" },
    hero: {
      subtitle: "Desenvolvedor Fullstack · Estudante de Sistemas de Informação",
      nationality: "Brasileiro",
      age: `${personal.age} anos`,
      citizenship: "Cidadania Europeia",
    },
    sections: {
      languages:       "Idiomas Falados",
      experience:      "Experiência & Formação",
      certifications:  "Licenças & Certificados",
      projects:        "Projetos",
      skills:          "Habilidades Técnicas",
      hobbies:         "Além do Código",
      hobbiesSubtitle: "Desenvolvimento de soft skills através da vida",
    },
    certifications: {
      viewCert: "Ver Certificado",
    },
    langs: {
      german:     { name: "Alemão",    level: "—",      note: "" },
      english:    { name: "Inglês",    level: "B2",     note: "TOEFL 78/120" },
      spanish:    { name: "Espanhol",  level: "A1",     note: "" },
      portuguese: { name: "Português", level: "Nativo", note: "" },
    },
    timeline: {
      present: "Presente",
      items: {
        prognum: {
          role:        "Estagiário Front-end",
          period:      "Agosto 2025 — Presente",
          description: "Desenvolvimento front-end em React + TypeScript para software financeiro empresarial, com consumo de APIs internas e scripts Python para extração e processamento de dados.",
        },
        uff: {
          role:        "Sistemas de Informação",
          period:      "2023.2 — 2027.2",
          description: "Bacharelado em Sistemas de Informação na UFF, uma das principais universidades públicas de pesquisa do Brasil.",
        },
        escola: {
          role:        "Ensino Fundamental · 1° ao 6° ano",
          period:      "2011 — 2016",
          description: "Ensino fundamental no Colégio São Bento com sólida base acadêmica.",
        },
        santo_inacio: {
          role:        "Ensino Fundamental e Médio · 7° ano ao 3°",
          period:      "2017 — 2022",
          description: "Ensino fundamental II e médio com forte base acadêmica e disciplinar.",
        },
      },
    },
    projects: {
      featured:     "Destaque",
      professional: "Profissional",
      personal:     "Pessoal",
      viewDetails:  "Detalhes",
      builtWith:    "Feito com",
      hobbymap: {
        description:      "SaaS para instrutores e estabelecimentos divulgarem seus serviços — e para pessoas descobrirem e praticarem hobbies perto de casa.",
        modalDescription: "O HobbyMap resolve a fragmentação do ensino autônomo. Instrutores ganham perfil profissional público, agenda inteligente e uma biblioteca de treinos para prescrever exercícios e planos de estudo. Alunos agendam aulas (presenciais ou online), acompanham sua evolução e enviam vídeos para correção remota. Estabelecimentos cadastram seus espaços e os planos aceitos (Wellhub, TotalPass, ClassPass) — para que usuários filtrem e encontrem exatamente onde praticar com seu plano de benefício. Pense na descoberta do Airbnb + CRM de academia + tracking do Strava — tudo em um só lugar. A página /explore é a porta de entrada: busque por atividade, localização e plano de benefício.",
        cta:              "Explorar a Plataforma",
        modal: {
          whatIs:       "O que é",
          platforms:    "Plataformas",
          architecture: "Arquitetura",
          archDesc:     "Monorepo com @hobbymap/shared-core — pacote de lógica compartilhada (types, hooks, constantes) consumido pelo mobile e web. \"Logic Once, Render Twice.\"",
          infra:        "Infraestrutura",
          stack:        "Stack Completa",
          languages:    "Idiomas Disponíveis",
        },
      },
      prognum: {
        description: "Aprimoramento no frontend web da empresa para simulação e consulta de proposta de crédito imobiliário — e dashboard interno de métricas do pipeline (C6, Inter). Backend em FastAPI coleta dados via SSH de bancos Firebird e SQL Server, faz ETL para Parquet local e expõe KPIs, funil por fase com drill-down de abandono e evolução mensal.",
      },
      sonho: {
        description: "PWA mobile-first para uso interno em loja de calçados — construído do zero com Vanilla JS, HTML5 e CSS3, sem frameworks. Vendedores consultam preços, estoque e localização em tempo real pelo celular, inclusive offline, com busca instantânea, leitura de QR Code, Google Lens integrado e sync com Google Sheets via Vercel Serverless.",
      },
      github: {
        description: "Algoritmos open-source, estruturas de dados e bibliotecas utilitárias. Fundamentos de CC na prática.",
      },
    },
    hobbies: {
      sport:     { label: "Esporte",      sublabel: "Disciplina física & resiliência" },
      music:     { label: "Música",       sublabel: "Criatividade & reconhecimento de padrões" },
      volunteer: { label: "Voluntariado", sublabel: "Liderança & impacto social", description: "Voluntário no Encontro de Jovens com Cristo (EJC), realizado pela Igreja Nossa Senhora da Paz — Ipanema, Rio de Janeiro." },
    },
  },

  de: {
    nav: { title: "Lebenslauf (CV)", downloadPDF: "PDF Herunterladen" },
    hero: {
      subtitle: "Fullstack-Entwickler · Informatikstudent",
      nationality: "Brasilianer",
      age: `${personal.age} Jahre alt`,
      citizenship: "EU-Staatsbürgerschaft",
    },
    sections: {
      languages:       "Gesprochene Sprachen",
      experience:      "Erfahrung & Ausbildung",
      certifications:  "Lizenzen & Zertifikate",
      projects:        "Projekte",
      skills:          "Technische Fähigkeiten",
      hobbies:         "Jenseits des Codes",
      hobbiesSubtitle: "Soft-Skills-Entwicklung durch das Leben",
    },
    certifications: {
      viewCert: "Zertifikat ansehen",
    },
    langs: {
      german:     { name: "Deutsch",       level: "—",           note: "" },
      english:    { name: "Englisch",      level: "B2",          note: "TOEFL 78/120" },
      spanish:    { name: "Spanisch",      level: "A1",          note: "" },
      portuguese: { name: "Portugiesisch", level: "Muttersprache", note: "" },
    },
    timeline: {
      present: "Aktuell",
      items: {
        prognum: {
          role:        "Front-end Praktikant",
          period:      "August 2025 — Heute",
          description: "Frontend-Entwicklung in React + TypeScript für Finanz-Unternehmenssoftware, mit internem API-Konsum und Python-Skripten zur Datenextraktion und -verarbeitung.",
        },
        uff: {
          role:        "Informationssysteme",
          period:      "2023.2 — 2027.2",
          description: "Bachelor-Studium in Informationssystemen an der UFF, einer der führenden öffentlichen Forschungsuniversitäten Brasiliens.",
        },
        escola: {
          role:        "Grundschule · 1. bis 6. Klasse",
          period:      "2011 — 2016",
          description: "Grundschulbildung am Colégio São Bento mit solider akademischer Grundlage.",
        },
        santo_inacio: {
          role:        "Mittel- und Oberschule · 7. Klasse bis Abitur",
          period:      "2017 — 2022",
          description: "Weiterführende Schule und Abitur mit starker akademischer und disziplinärer Grundlage.",
        },
      },
    },
    projects: {
      featured:     "Empfohlen",
      professional: "Beruflich",
      personal:     "Persönlich",
      viewDetails:  "Details",
      builtWith:    "Gebaut mit",
      hobbymap: {
        description:      "SaaS-Plattform für Trainer und Sportstätten, um ihre Dienste anzubieten — und für Menschen, Hobbys in der Nähe zu entdecken und auszuüben.",
        modalDescription: "HobbyMap löst die Fragmentierung des unabhängigen Unterrichts. Trainer erhalten ein öffentliches Profil, intelligente Terminplanung und eine Trainingsbibliothek für Workouts und Lernpläne. Schüler buchen Einheiten (vor Ort oder online), verfolgen ihren Fortschritt und senden Videos zur Fernkorrektur. Sportstätten registrieren ihre Räume und die akzeptierten Benefit-Pläne (Wellhub, TotalPass, ClassPass) — damit Nutzer filtern und genau herausfinden, wo sie mit ihrem Plan trainieren können. Denk an Airbnbs Entdeckung + Gym-CRM + Stravas Fortschritts-Tracking — alles in einem. Die /explore-Seite ist der Einstieg: suche nach Aktivität, Standort und Benefit-Plan.",
        cta:              "Plattform erkunden",
        modal: {
          whatIs:       "Was ist es",
          platforms:    "Plattformen",
          architecture: "Architektur",
          archDesc:     "Monorepo mit @hobbymap/shared-core — gemeinsames Logikpaket (Types, Hooks, Konstanten) für Mobile und Web. \"Logic Once, Render Twice.\"",
          infra:        "Infrastruktur",
          stack:        "Tech-Stack",
          languages:    "Verfügbare Sprachen",
        },
      },
      prognum: {
        description: "Verbesserungen am Frontend der Unternehmenswebapp für Immobilienkredit-Simulationen und Angebotsverfolgung — sowie ein internes Pipeline-Metriken-Dashboard (C6, Inter). FastAPI-Backend holt Daten per SSH aus Firebird- und SQL-Server-Datenbanken, führt ETL in ein Parquet-Warehouse durch und liefert KPIs, Phasentrichter mit Abbruch-Drill-down und Monatsverläufe.",
      },
      sonho: {
        description: "Mobile-First-PWA für den internen Einsatz in einem Schuhgeschäft — von Grund auf mit Vanilla JS, HTML5 und CSS3 entwickelt, ohne Frameworks. Verkäufer rufen Preise, Lagerbestand und Standorte in Echtzeit vom Handy ab, auch offline — mit Sofortsuche, QR-Code-Scan, Google-Lens-Integration und Google-Sheets-Sync über Vercel Serverless.",
      },
      github: {
        description: "Open-Source-Algorithmen, Datenstrukturen und Hilfsbibliotheken. Erkundung von Informatikgrundlagen.",
      },
    },
    hobbies: {
      sport:     { label: "Sport",    sublabel: "Körperliche Disziplin & Resilienz" },
      music:     { label: "Musik",    sublabel: "Kreativität & Mustererkennung" },
      volunteer: { label: "Ehrenamt", sublabel: "Führung & sozialer Einfluss", description: "Ehrenamtlich beim Encontro de Jovens com Cristo (EJC), veranstaltet von der Igreja Nossa Senhora da Paz — Ipanema, Rio de Janeiro." },
    },
  },

  es: {
    nav: { title: "Currículum Vitae (CV)", downloadPDF: "Descargar PDF" },
    hero: {
      subtitle: "Desarrollador Fullstack · Estudiante de Sistemas de Información",
      nationality: "Brasileño",
      age: `${personal.age} años`,
      citizenship: "Ciudadanía Europea",
    },
    sections: {
      languages:       "Idiomas Hablados",
      experience:      "Experiencia & Educación",
      certifications:  "Licencias & Certificaciones",
      projects:        "Proyectos",
      skills:          "Habilidades Técnicas",
      hobbies:         "Más Allá del Código",
      hobbiesSubtitle: "Desarrollo de soft skills a través de la vida",
    },
    certifications: {
      viewCert: "Ver Certificado",
    },
    langs: {
      german:     { name: "Alemán",    level: "—",      note: "" },
      english:    { name: "Inglés",    level: "B2",     note: "TOEFL 78/120" },
      spanish:    { name: "Español",   level: "A1",     note: "" },
      portuguese: { name: "Portugués", level: "Nativo", note: "" },
    },
    timeline: {
      present: "Presente",
      items: {
        prognum: {
          role:        "Pasante Front-end",
          period:      "Agosto 2025 — Presente",
          description: "Desarrollo front-end en React + TypeScript para software financiero empresarial, con consumo de APIs internas y scripts Python para extracción y procesamiento de datos.",
        },
        uff: {
          role:        "Sistemas de Información",
          period:      "2023.2 — 2027.2",
          description: "Licenciatura en Sistemas de Información en la UFF, una de las principales universidades públicas de investigación de Brasil.",
        },
        escola: {
          role:        "Educación Primaria · 1° a 6° grado",
          period:      "2011 — 2016",
          description: "Educación primaria en el Colégio São Bento con sólida base académica.",
        },
        santo_inacio: {
          role:        "Secundaria y Bachillerato · 7° grado hasta graduación",
          period:      "2017 — 2022",
          description: "Educación secundaria y bachillerato con fuerte base académica y disciplinaria.",
        },
      },
    },
    projects: {
      featured:     "Destacado",
      professional: "Profesional",
      personal:     "Personal",
      viewDetails:  "Detalles",
      builtWith:    "Construido con",
      hobbymap: {
        description:      "SaaS para instructores y espacios que divulgan sus servicios — y para que las personas descubran y practiquen hobbies cerca de casa.",
        modalDescription: "HobbyMap resuelve la fragmentación de la instrucción independiente. Los instructores obtienen un perfil profesional público, agenda inteligente y una biblioteca de entrenamientos para prescribir ejercicios y planes de estudio. Los alumnos reservan clases (presenciales u online), siguen su evolución y envían videos para corrección remota. Los establecimientos registran sus espacios y los planes aceptados (Wellhub, TotalPass, ClassPass) — para que los usuarios filtren y encuentren exactamente dónde entrenar con su plan. Piensa en el descubrimiento de Airbnb + CRM de gimnasio + tracking de Strava — todo en uno. La página /explore es la puerta de entrada: busca por actividad, ubicación y plan de beneficio.",
        cta:              "Explorar la Plataforma",
        modal: {
          whatIs:       "Qué es",
          platforms:    "Plataformas",
          architecture: "Arquitectura",
          archDesc:     "Monorepo con @hobbymap/shared-core — paquete de lógica compartida (types, hooks, constantes) para mobile y web. \"Logic Once, Render Twice.\"",
          infra:        "Infraestructura",
          stack:        "Stack Completo",
          languages:    "Idiomas Disponibles",
        },
      },
      prognum: {
        description: "Mejoras en el frontend web de la empresa para simulación y consulta de propuestas de crédito hipotecario — y dashboard interno de métricas del pipeline (C6, Inter). Backend FastAPI extrae datos vía SSH de Firebird y SQL Server, ejecuta ETL a Parquet local y expone KPIs, embudo por fase con drill-down de abandono y evolución mensual.",
      },
      sonho: {
        description: "PWA mobile-first para uso interno en una tienda de calzado — construida desde cero con Vanilla JS, HTML5 y CSS3, sin frameworks. Los vendedores consultan precios, stock y ubicación en tiempo real desde el móvil, incluso offline, con búsqueda instantánea, lectura de QR, Google Lens integrado y sync con Google Sheets vía Vercel Serverless.",
      },
      github: {
        description: "Algoritmos open-source, estructuras de datos y bibliotecas utilitarias. Fundamentos de CS en la práctica.",
      },
    },
    hobbies: {
      sport:     { label: "Deporte",      sublabel: "Disciplina física & resiliencia" },
      music:     { label: "Música",       sublabel: "Creatividad & reconocimiento de patrones" },
      volunteer: { label: "Voluntariado", sublabel: "Liderazgo & impacto social", description: "Voluntario en el Encuentro de Jóvenes con Cristo (EJC), organizado por la Iglesia Nossa Senhora da Paz — Ipanema, Río de Janeiro." },
    },
  },
};

/* ─── Context ─────────────────────────────────────────────────────────────── */
interface LangCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Messages;
}

const LanguageContext = createContext<LangCtx>({
  locale: "en",
  setLocale: () => {},
  t: messages.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: messages[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
