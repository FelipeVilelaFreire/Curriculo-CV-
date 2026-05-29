# Arquitetura Técnica

## 1. Tech Stack Principal
- **Framework Core:** Next.js (com App Router). Ideal para performance, SEO e exportação de UI limpa.
- **Estilização Global:** Tailwind CSS. É proibido usar arquivos CSS isolados (exceto index.css para as globais vitais). Tudo deve ser utilitário para garantir o tema visual.
- **Ícones Mininalistas:** `lucide-react` (não utilize formatações SVG poluídas, puxe direto do Lucide).

## 2. Interface Interativa (React Bits & Framer Motion)
- **UI Oob/Animada:** O projeto deve utilizar componentes da biblioteca **React Bits** (https://reactbits.dev/) para proporcionar uma sensação "Premium" e esteticamente avançada sem precisar codificar matemática do zero no canvas. 
- **Casos de Uso para React Bits:** Utilize Text Animations no Hero (split text ou blur text no nome), Backgrounds Sutis (como Aurora background ou partículas muito sutis que não roubem a atenção da timeline principal), e Animated Cards ou Borders.
- **Framer Motion:** Se React Bits não tiver o componente exato de entrada, use framer-motion para realizar efeitos "Fade In Up" ou "Stagger" em listas e cards da Timeline (revelar conforme dá scroll).

## 3. Internacionalização (i18n)
- A arquitetura do projeto deve ser pensada estruturalmente para i18n (`next-intl` é recomendado).
- Separe os arquivos de texto num dicionário JSON `messages/en.json`, `messages/pt.json`, etc. 
- O botão de toggle de idioma na Nav Bar no design deve realmente refletir a transição do router. Se não codificar o i18n no MVP 1, no mínimo deixe isolado num arquivo de config para escalabilidade.

## 4. Estrutura de Diretórios
- `src/app`: Root Layout com os backgrounds, Page (`page.tsx`) orquestradora que chama os blocos de seção.
- `src/components/ui/`: Onde ficarão os códigos roubados/encapsulados do "React Bits".
- `src/components/layout/`: Nav e Footer.
- `src/components/sections/`: Hero, LanguagesSection, TimelineSection, ProjectsSection, HobbiesSection.
- `public/assets/`: Criar esta pasta, ela guardará as imagens de fallback mencionadas no arquivo `content.md`.
