# Instruções Principais para o Claude Code

Você está encarregado de criar a aplicação do zero para um Web CV / Portfólio Internacional de altíssimo nível.
Por favor, leia e absorva TODOS os seguintes arquivos de documentação para entender as especificações antes de começar a gerar código e iniciar o Next.js:

1. `architecture.md` - Define as tecnologias, bibliotecas (incluindo dependência fortíssima em React Bits) e o setup arquitetural.
2. `ui_ux.md` - Define o Design System e o tema "Premium Dark Glowing Tech", ditando os utilitários Tailwind (Glassmorphism e Cores) que devem ser usados em TODO o site.
3. `content.md` - Define a estrutura visual exata (top to bottom), as seções e o conteúdo de texto real, indicando os lugares para os assets via placeholders.

Passos de Execução:
1. Faça o setup do projeto Next.js com App Router e Tailwind CSS (use pacotes padrão atualizados).
2. Instale as dependências de estilização e ícones (`lucide-react`, `framer-motion` e pacotes base para suportar compoentes do UI **React Bits**).
3. Importe e configure as fontes (Inter ou Geist Sans).
4. Construa os blocos do sistema focando na estética. Se houver imagens não encontradas, use divs escuras com um leve border para demarcar os placeholders nomeados em `content.md`. Não pule pedaços, execute as páginas de cima a baixo com zelo.
