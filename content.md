# Estrutura do Conteúdo e Placeholders (Top to Bottom)

A página terá formato Single Page e as referências aos *Assets/Images* vão em divs placeholders que deverão ter larguras e alturas devidamente configuradas usando o tailwind (placeholder style: `bg-white/5 border-dashed border border-white/20 animate-pulse flex items-center justify-center`).

### 1. Floating Navigation (Topbar)
- Texto Esquerda: "Curriculum Vitae (CV)"
- Controles Direita: Idiomas (EN, DE, PT, ES) e Botão Outlined (borda Neon Ciano, hover background levemente transparente) dizendo "Download PDF".

### 2. Hero Section (Apresentação Inicial)
- **[IMAGE 1 - Foto Perfil]**: Círculo no topo. Div Placeholder (`w-32 h-32 rounded-full`).
- **Título Hero:** "FELIPE VILELA FREIRE" (Usar grande peso tipográfico, de preferência alguma Text Animation do React Bits).
- **Subtítulo:** "Fullstack Developer | Information Systems Student". Perto disso, um Badge de altíssima qualidade dizendo "🇪🇺 EU Citizen".
- **Ações:** Fila horizontal pequena logo abaixo do texto com ícones SVG brancos finos: LinkedIn logo, GitHub logo.

### 3. Spoken Languages Section 
- Destaque Internacional: Deve estar logo abaixo do Hero. Elementos compactos em horizontal ou grid pequeno.
- Textos:
  - Alemão (A1.1) (Este deve ter um sublinhado ou contorno neon para atrair atenção de recrutadores DACH).
  - Inglês (Fluent)
  - Espanhol (Advanced)
  - Português (Native)

### 4. Experience & Education Timeline
- Uma linha contínua luminosa (`w-1 bg-cyan-400/50`) caindo no lado esquerdo com "bolinhas de node" em cada entrada. Para cada entrada, haverá um Glassmorphism Card do lado direito.
- **Nó Topo (Presente):** "Prognum". Sub: "Front-end Intern (July 2025 - Present)". Div Placeholder **[IMAGE 4 - Prognum Logo/Código]** em cantinho do card.
- **Nó Meio:** "Universidade Federal Fluminense (UFF)". Sub: "Information Systems". Div Placeholder **[IMAGE 3 - UFF Logo]**.
- **Nó Base:** "Colégio Santo Inácio". Sub: "Formação Básica". Div Placeholder **[IMAGE 2 - Escola Logo]**.

### 5. Projects Showcase
- **HobbyMap (Projeto Principal):** Card gigantesco e luxuoso ocupando todo Width do Container. Grande `div` de Placeholder reservada para **[IMAGE 5 - View HobbyMap Mockup]**. Abaixo do mockup, textos detalhando "Next.js, Django, Supabase arquitetura Headless" e um grandioso botão iluminado "View Live App".
- **Grid de Projetos Secundários:** Lado a lado abaixo do HobbyMap.
  - Card *Sonho dos Pés:* Texto ("Internal Pricing Dashboard"). Placeholder **[IMAGE 6 - Sonho dos Pes Logo]**.
  - Card *GitHub Experiments:* Link para acessar o github com menções de algoritmos.

### 6. Technical Skills
- Nuvem elegante de "Pills" ou "Badges" flutuando (sem caixas brutais) dizendo: React, Next.js, TypeScript, Django, Tailwind CSS, Supabase, Git, Framer Motion.

### 7. Beyond the Code (Hobbies)
- Para quebrar a rigidez do código. Um grid lateral irregular ou mansonry.
- Divs Placeholders **[IMAGE 7 - Hobby 1]** e **[IMAGE 8 - Hobby 2]**. No fundo ou no hover dessas imagens deve revelar "Esporte/Música - Soft Skills development".
