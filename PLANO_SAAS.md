# Construção do Frontend do SaaS (MeuCV)

> **Nota:** Como você teve problemas ao trocar de workspace, eu escrevi todo o código necessário para a nova Landing Page e a estrutura do Frontend. Você pode copiar esses códigos e colar lá na pasta `meucv/frontend/src/app/`.

---

## 1. A Nova Estrutura de Pastas
Dentro de `meucv/frontend/src/app/`, você vai organizar as rotas assim:
- `page.tsx` (Esta é a Landing Page, que vende o seu produto)
- `editor/page.tsx` (Esta é a página de Edição do usuário, a experiência WYSIWYG)
- `[username]/page.tsx` (Esta é a rota dinâmica pública do currículo de cada usuário)

---

## 2. A Landing Page Premium (`src/app/page.tsx`)
Substitua o conteúdo atual do seu `page.tsx` por este código. Ele reutiliza o `AuroraBackground` e o `BlurText` que já temos, criando uma vitrine maravilhosa e chamativa para a plataforma:

```tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import AuroraBackground from "@/components/ui/AuroraBackground";
import BlurText from "@/components/ui/BlurText";
import { ThemeProvider, useTheme } from "@/lib/ThemeContext";

function LandingContent() {
  const { isDark } = useTheme();
  
  return (
    <div className={isDark ? "dark" : ""}>
      <main className="relative min-h-screen bg-[#f7f7f7] dark:bg-[#030303] transition-colors duration-300 flex flex-col items-center justify-center overflow-hidden">
        <AuroraBackground />
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
          {/* Tag de destaque */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100/50 dark:bg-cyan-500/10 border border-cyan-300/50 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-8 backdrop-blur-sm shadow-sm"
          >
            <Sparkles size={16} className="text-cyan-500" />
            <span>O futuro dos portfólios profissionais</span>
          </motion.div>

          {/* Título com Blur */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            <BlurText 
              text="O seu currículo," 
              delay={0.1} 
              className="text-zinc-900 dark:text-white"
            />
            <br />
            <BlurText 
              text="agora dinâmico." 
              delay={0.3} 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
            />
          </h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-zinc-500 dark:text-zinc-400 text-lg sm:text-xl font-light tracking-wide mb-12 max-w-2xl"
          >
            Crie um portfólio premium em minutos. Tradução automática via IA, links personalizados e design impecável. Você edita exatamente o que você vê.
          </motion.p>

          {/* Botão de Ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link 
              href="/editor" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              Começar a Criar
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default function LandingPage() {
  return (
    <ThemeProvider>
      <LandingContent />
    </ThemeProvider>
  );
}
```

---

## 3. O Modo de Edição WYSIWYG (`src/app/editor/page.tsx`)
Crie a pasta `editor` dentro de `app/` e cole este código. No futuro, nós passaremos uma flag `isEditMode={true}` para os componentes ficarem clicáveis.

```tsx
import CVApp from "@/components/CVApp";

export default function EditorPage() {
  return (
    <>
      {/* Barra superior temporária só para mostrar que está no modo editor */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-cyan-600 text-white text-center py-2 text-sm font-bold shadow-md">
        Modo de Edição (Clique nos textos para alterar)
      </div>
      
      {/* No futuro, alteraremos o CVApp para aceitar a prop isEditMode */}
      <div className="pt-8">
        <CVApp />
      </div>
    </>
  );
}
```

---

## 4. A Rota Pública (`src/app/[username]/page.tsx`)
Quando alguém acessar `meucv.com.br/felipe`, essa é a página que vai abrir. Crie a pasta `[username]` dentro de `app/` e cole:

```tsx
import CVApp from "@/components/CVApp";

export default function PublicProfilePage({ params }: { params: { username: string } }) {
  // O next.js injeta o username na variável params.username
  // No futuro, faremos um fetch no backend aqui: get_user(params.username)
  
  return (
    <CVApp />
  );
}
```

---

### Próximos Passos
1. Copie esses códigos para as pastas corretas dentro de `meucv/frontend`.
2. Para evitar que o chat feche quando você for pro outro projeto, você pode manter as duas janelas abertas:
   - Uma tela do VS Code na pasta `Curriculo-CV-` (onde nós continuamos conversando).
   - Uma tela do VS Code na pasta `meucv` (onde você cola o código e roda os comandos).
