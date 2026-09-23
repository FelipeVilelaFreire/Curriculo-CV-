"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { personal, toefl } from "@/data/personal";

export type Locale = "en" | "pt" | "de" | "es";

type ProjectCaseMessages = {
  subtitle?: string;
  description: string;
  modalDescription?: string;
  cta?: string;
  highlights?: string[];
  modal?: {
    whatIs?: string;
    contributions?: string;
    platforms?: string;
    architecture?: string;
    archDesc?: string;
    infra?: string;
    stack?: string;
    languages?: string;
  };
};

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
    contact: string;
  };
  certifications: {
    viewCert: string;
    open: string;
  };
  langs: Record<
    "german" | "english" | "spanish" | "portuguese",
    { name: string; level: string; note: string }
  >;
  timeline: {
    present: string;
    items: {
      hka: { role: string; period: string; description: string };
      prognum: { role: string; period: string; description: string };
      uff:     { role: string; period: string; description: string };
      escola:       { role: string; period: string; description: string };
      santo_inacio: { role: string; period: string; description: string };
    };
  };
  projects: {
    featured: string;
    professional: string;
    personal: string;
    viewDetails: string;
    builtWith?: string;
    detailsLabel?: string;
    closeDetails?: string;
    intro?: string;
    githubLabel: string;
    status?: { live: string; inProgress: string };
    hobbymap: ProjectCaseMessages;
    royalprime: ProjectCaseMessages;
    synrax: ProjectCaseMessages;
    sonho: ProjectCaseMessages;
    prognum: { description: string };
    github: { description: string };
  };
  hobbies: {
    sport:     { label: string; sublabel: string; tags: string[] };
    music:     { label: string; sublabel: string; tags: string[] };
    volunteer: { label: string; sublabel: string; description: string; tags: string[]; org: string };
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
      contact:         "Get in Touch",
    },
    certifications: {
      viewCert: "View Certificate",
      open: "Open",
    },
    langs: {
      german:     { name: "Deutsch",   level: "A1",    note: "" },
      english:    { name: "English",   level: "B2",    note: "TOEFL 78/120" },
      spanish:    { name: "Español",   level: "A1",    note: "" },
      portuguese: { name: "Português", level: "Native", note: "" },
    },
    timeline: {
      present: "Present",
      items: {
        hka: {
          role:        "Exchange student · Information Systems",
          period:      "September 2026 — Present",
          description: "Academic exchange in Information Systems at Hochschule Karlsruhe, complementing my degree at UFF.",
        },
        prognum: {
          role:        "Front-end Intern",
          period:      "August 2025 — August 2026",
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
      featured: "Featured",
      professional: "Professional",
      personal: "Personal",
      viewDetails: "View case study",
      detailsLabel: "case study",
      closeDetails: "Close project details",
      githubLabel: "GitHub",
      intro: "Selected products that demonstrate how I approach real workflows across frontend, backend, data, and operations.",
      status: { live: "Live", inProgress: "In development" },
      hobbymap: {
        subtitle: "Multi-platform activity discovery and provider management product",
        description: "A product for discovering activities and helping providers, instructors, and venues manage their digital presence and operations.",
        modalDescription: "HobbyMap connects people who want to practice with instructors and venues that offer activities. The product combines public discovery, provider management, and account flows across web, mobile, and admin surfaces.",
        cta: "Explore the platform",
        highlights: ["Built the product across Next.js web, React Native mobile, and a React administrative interface.", "Structured shared client logic for contracts, API services, hooks, validation, localization, and view models.", "Developed provider-management foundations, including protected routes, profile and agenda flows, and web/mobile parity."],
        modal: { whatIs: "Product context", contributions: "My contribution", platforms: "Product surfaces", architecture: "Architecture", archDesc: "Django is the source of truth for persistence, authorization, and validation. A shared-core package centralizes client contracts and flow logic so web and mobile render the same product behavior.", infra: "Infrastructure", stack: "Stack by layer" },
      },
      royalprime: {
        subtitle: "E-commerce, subscriptions, and operations platform",
        description: "An e-commerce product that brings catalog, subscriptions, checkout, orders, inventory, delivery, and administrative operations into one platform.",
        modalDescription: "RoyalPrime is being developed as a backend-first commerce platform. Its goal is to support the full operational lifecycle, from product selection and recurring boxes to order status, stock, delivery, and administrative work.",
        cta: "Project repository",
        highlights: ["Designed a backend-first flow where Django owns commercial rules, persistence, authorization, and API contracts.", "Created shared contracts, API clients, hooks, mappers, and view models used by client web, mobile, and admin interfaces.", "Worked on catalog, subscription, checkout, inventory, and order-status flows with a clear separation between domain logic and rendering."],
        modal: { whatIs: "Product context", contributions: "My contribution", platforms: "Product surfaces", architecture: "Architecture", archDesc: "The architecture separates backend business rules, shared-core contracts and flow logic, declarative configuration, and render-only interfaces. This makes the same operational behavior reusable across client web, mobile, and admin surfaces.", infra: "Deployment targets", stack: "Stack by layer" },
      },
      synrax: {
        subtitle: "B2B revenue-recovery and operations SaaS",
        description: "A SaaS platform that turns checkout and payment events into prioritized recovery workflows for digital businesses.",
        modalDescription: "Synrax receives checkout and payment events from platforms such as Hotmart and Kiwify, turns them into operational leads, and gives teams the context needed to follow up through controlled WhatsApp and email workflows.",
        cta: "Access the platform",
        highlights: ["Implemented webhook-driven foundations for checkout and payment events, including idempotent lead creation and updates.", "Structured operational flows for lead lifecycle, prioritization, messaging attempts, metrics, and audit history.", "Built the product around Django REST, shared contracts and view models, responsive web, admin, and mobile mirror surfaces."],
        modal: { whatIs: "Product context", contributions: "My contribution", platforms: "Product surfaces", architecture: "Backend and event architecture", archDesc: "An event-driven Django REST backend receives provider webhooks, creates or updates operational leads, and keeps lifecycle, permissions, automation attempts, metrics, and audit history in the product backend.", infra: "Infrastructure and gateways", stack: "Stack by layer" },
      },
      sonho: {
        subtitle: "Offline-first retail operations PWA",
        description: "An internal PWA that lets store teams look up price, stock, size, and product location from a phone, including when connectivity is unreliable.",
        modalDescription: "Sonho dos Pés is an operational retail tool built for the sales floor. It keeps essential product information available locally, while serverless APIs synchronize product and store data with Google Sheets.",
        cta: "View repository",
        highlights: ["Built an offline-first PWA with IndexedDB and a Service Worker so product information remains available during connectivity failures.", "Implemented multi-term search, five-digit SKU lookup, stock-by-size visualization, barcode support, and product-location updates.", "Connected Vercel serverless functions to Google Sheets for product data, store locations, attendance queue, and prize-draw operations."],
        modal: { whatIs: "Product context", contributions: "My contribution", platforms: "Product surfaces", architecture: "Offline architecture", archDesc: "The browser stores searchable product data in IndexedDB and uses a Service Worker for cached application assets. Serverless endpoints read and update the operational spreadsheet when a connection is available.", infra: "Infrastructure", stack: "Stack by layer" },
      },
      prognum: { description: "Frontend development for enterprise financial software, including React and TypeScript interfaces, internal API consumption, and Python data-processing scripts." },
      github: { description: "Open-source algorithms, data structures, and utility libraries." },
    },
    hobbies: {
      sport:     { label: "Sport",        sublabel: "Physical discipline & resilience", tags: ["Soccer", "Surfing", "Volleyball", "Footvolley"] },
      music:     { label: "Music",        sublabel: "Creativity & pattern recognition", tags: ["Cavaquinho", "Acoustic Guitar"] },
      volunteer: { label: "Volunteering", sublabel: "Leadership & social impact", description: "Volunteer at the Encontro de Jovens com Cristo (EJC), organized by Igreja Nossa Senhora da Paz — Ipanema, Rio de Janeiro.", tags: ["EJC – Youth Encounter with Christ"], org: "Youth of Peace" },
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
      contact:         "Entre em Contato",
    },
    certifications: {
      viewCert: "Ver Certificado",
      open: "Abrir",
    },
    langs: {
      german:     { name: "Alemão",    level: "A1",     note: "" },
      english:    { name: "Inglês",    level: "B2",     note: "TOEFL 78/120" },
      spanish:    { name: "Espanhol",  level: "A1",     note: "" },
      portuguese: { name: "Português", level: "Nativo", note: "" },
    },
    timeline: {
      present: "Presente",
      items: {
        hka: {
          role:        "Intercâmbio acadêmico · Sistemas de Informação",
          period:      "Setembro 2026 — Presente",
          description: "Intercâmbio acadêmico em Sistemas de Informação na Hochschule Karlsruhe, complementando a formação na UFF.",
        },
        prognum: {
          role:        "Estagiário Front-end",
          period:      "Agosto 2025 — Agosto 2026",
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
      githubLabel: "GitHub",
      builtWith:    "Feito com",
      synrax: {
        subtitle:         "Plataforma SaaS de Recuperação de Receita & Automação",
        description:      "Plataforma SaaS B2B desenvolvida para automatizar fluxos de recuperação de clientes e aumentar a retenção de receita através de comunicação inteligente e automação de vendas.",
        modalDescription: "O Synrax (syraxautomation.com) processa webhooks de eventos de checkout e pagamento de plataformas digitais como Hotmart e Kiwify, transformando dados em leads operacionais de recuperação. Desenvolvido com um Design System autoral Glass Flow com elementos 3D em Three.js, ele calcula a prioridade do lead em tempo real, dispara fluxos automatizados via Meta WhatsApp Cloud API e disponibiliza uma fila com suporte a IA assistida para conversão de vendas.",
        cta:              "Acessar Plataforma",
        modal: {
          whatIs:       "O que é",
          platforms:    "Módulos Principais",
          architecture: "Arquitetura Backend & Eventos",
          archDesc:     "Backend orientada a eventos em Django REST que recebe webhooks assíncronos, calcula prioridade em tempo real e dispara pipelines de mensagens no Meta WhatsApp.",
          infra:        "Infraestrutura & Gateways",
          stack:        "Stack & Design System",
          languages:    "Idiomas Disponíveis",
        },
      },
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
      royalprime: {
        subtitle: "E-commerce, assinaturas e operação",
        description: "Produto de e-commerce que reúne catálogo, assinaturas, checkout, pedidos, estoque, entregas e operação administrativa.",
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
      sport:     { label: "Esporte",      sublabel: "Disciplina física & resiliência", tags: ["Futebol", "Surf", "Vôlei", "Futevôlei"] },
      music:     { label: "Música",       sublabel: "Criatividade & reconhecimento de padrões", tags: ["Cavaquinho", "Violão"] },
      volunteer: { label: "Voluntariado", sublabel: "Liderança & impacto social", description: "Voluntário no Encontro de Jovens com Cristo (EJC), realizado pela Igreja Nossa Senhora da Paz — Ipanema, Rio de Janeiro.", tags: ["EJC – Encontro de Jovens com Cristo"], org: "Jovens da Paz" },
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
      contact:         "Kontakt",
    },
    certifications: {
      viewCert: "Zertifikat ansehen",
      open: "Öffnen",
    },
    langs: {
      german:     { name: "Deutsch",       level: "A1",          note: "" },
      english:    { name: "Englisch",      level: "B2",          note: "TOEFL 78/120" },
      spanish:    { name: "Spanisch",      level: "A1",          note: "" },
      portuguese: { name: "Portugiesisch", level: "Muttersprache", note: "" },
    },
    timeline: {
      present: "Aktuell",
      items: {
        hka: {
          role:        "Austauschstudent · Informationssysteme",
          period:      "September 2026 — Aktuell",
          description: "Akademischer Austausch in Informationssystemen an der Hochschule Karlsruhe als Ergänzung zum Studium an der UFF.",
        },
        prognum: {
          role:        "Front-end Praktikant",
          period:      "August 2025 — August 2026",
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
      githubLabel: "GitHub",
      builtWith:    "Gebaut mit",
      synrax: {
        subtitle:         "SaaS-Plattform für Umsatzzurückgewinnung & Automatisierung",
        description:      "B2B-SaaS-Plattform zur Automatisierung von Kundenrückgewinnungs-Workflows und zur Verbesserung der Umsatzerhaltung durch intelligente Kommunikation.",
        modalDescription: "Synrax (syraxautomation.com) verarbeitet Checkout- und Zahlungsevent-Webhooks von Plattformen wie Hotmart und Kiwify und wandelt Rohverkaufsdaten in operative Rückgewinnungs-Leads um. Mit einem maßgeschneiderten Glass Flow Design System mit Three.js 3D-Grafiken berechnet das System die operative Priorität in Echtzeit und führt WhatsApp-Cloud-API-Workflows aus.",
        cta:              "Website öffnen",
        modal: {
          whatIs:       "Was ist es",
          platforms:    "Kernmodule",
          architecture: "Backend- & Event-Architektur",
          archDesc:     "Ereignisgesteuertes Django-REST-Backend, das asynchrone Webhooks empfängt, Lead-Scoring in Echtzeit berechnet und mehrstufige WhatsApp-Nachrichten-Pipelines auslöst.",
          infra:        "Infrastruktur & Gateways",
          stack:        "Tech-Stack & Design System",
          languages:    "Verfügbare Sprachen",
        },
      },
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
      royalprime: {
        subtitle: "E-Commerce, Abonnements und Betrieb",
        description: "E-Commerce-Produkt für Katalog, Abonnements, Checkout, Bestellungen, Lagerbestand, Lieferung und Administration.",
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
      sport:     { label: "Sport",    sublabel: "Körperliche Disziplin & Resilienz", tags: ["Fußball", "Surfen", "Volleyball", "Footvolley"] },
      music:     { label: "Musik",    sublabel: "Kreativität & Mustererkennung", tags: ["Cavaquinho", "Akustikgitarre"] },
      volunteer: { label: "Ehrenamt", sublabel: "Führung & sozialer Einfluss", description: "Ehrenamtlich beim Encontro de Jovens mit Cristo (EJC), veranstaltet von der Igreja Nossa Senhora da Paz — Ipanema, Rio de Janeiro.", tags: ["EJC – Jugendbegegnung mit Christus"], org: "Jugend des Friedens" },
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
      contact:         "Contacto",
    },
    certifications: {
      viewCert: "Ver Certificado",
      open: "Abrir",
    },
    langs: {
      german:     { name: "Alemán",    level: "A1",     note: "" },
      english:    { name: "Inglés",    level: "B2",     note: "TOEFL 78/120" },
      spanish:    { name: "Español",   level: "A1",     note: "" },
      portuguese: { name: "Portugués", level: "Nativo", note: "" },
    },
    timeline: {
      present: "Presente",
      items: {
        hka: {
          role:        "Estudiante de intercambio · Sistemas de Información",
          period:      "Septiembre 2026 — Presente",
          description: "Intercambio académico en Sistemas de Información en la Hochschule Karlsruhe, complementando la carrera en la UFF.",
        },
        prognum: {
          role:        "Pasante Front-end",
          period:      "Agosto 2025 — Agosto 2026",
          description: "Desarrollo front-end en React + TypeScript para software financiero empresarial, con consumo de APIs internas y scripts Python para extracción y procesamiento de dados.",
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
      githubLabel: "GitHub",
      builtWith:    "Construido con",
      synrax: {
        subtitle:         "Plataforma SaaS de Recuperación de Ingresos y Automatización",
        description:      "Plataforma SaaS B2B diseñada para automatizar flujos de recuperación de clientes y mejorar la retención de ingresos mediante comunicación inteligente y automatización.",
        modalDescription: "Synrax (syraxautomation.com) procesa webhooks de eventos de pago de plataformas como Hotmart y Kiwify, transformando datos en leads operativos de recuperación. Con un Design System Glass Flow exclusivo y gráficos 3D en Three.js, calcula la prioridad de leads en tiempo real y ejecuta flujos automatizados via Meta WhatsApp Cloud API.",
        cta:              "Acceder al Sitio",
        modal: {
          whatIs:       "Qué es",
          platforms:    "Módulos Principales",
          architecture: "Arquitectura Backend & Eventos",
          archDesc:     "Backend guiado por eventos en Django REST que recibe webhooks asíncronos, calcula scoring de leads en tiempo real y dispara pipelines de mensajes en múltiples etapas.",
          infra:        "Infraestructura & Gateways",
          stack:        "Stack & Design System",
          languages:    "Idiomas Disponibles",
        },
      },
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
      royalprime: {
        subtitle: "Comercio electrónico, suscripciones y operaciones",
        description: "Producto de comercio electrónico que reúne catálogo, suscripciones, checkout, pedidos, inventario, entregas y operaciones administrativas.",
      },
      prognum: {
        description: "Mejoras en el frontend web de la empresa para simulación y consulta de propuestas de crédito hipotecario — y dashboard interno de métricas del pipeline (C6, Inter). Backend FastAPI extrae datos vía SSH de Firebird y SQL Server, ejecuta ETL a Parquet local y expõe KPIs, embudo por fase con drill-down de abandono y evolución mensual.",
      },
      sonho: {
        description: "PWA mobile-first para uso interno en una tienda de calzado — construida desde cero con Vanilla JS, HTML5 y CSS3, sin frameworks. Los vendedores consultan precios, stock y ubicación en tiempo real desde el móvil, incluso offline, con búsqueda instantánea, lectura de QR, Google Lens integrado y sync con Google Sheets vía Vercel Serverless.",
      },
      github: {
        description: "Algoritmos open-source, estructuras de dados y bibliotecas utilitarias. Fundamentos de CS en la práctica.",
      },
    },
    hobbies: {
      sport:     { label: "Deporte",      sublabel: "Disciplina física & resiliencia", tags: ["Fútbol", "Surf", "Voleibol", "Futevóley"] },
      music:     { label: "Música",       sublabel: "Creatividad & reconocimiento de patrones", tags: ["Cavaquinho", "Guitarra Acústica"] },
      volunteer: { label: "Voluntariado", sublabel: "Liderazgo & impacto social", description: "Voluntario en el Encuentro de Jóvenes con Cristo (EJC), organizado por la Iglesia Nossa Senhora da Paz — Ipanema, Río de Janeiro.", tags: ["EJC – Encuentro de Jóvenes con Cristo"], org: "Jóvenes de la Paz" },
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
  const [locale, setLocale] = useState<Locale>("en");
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: messages[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
