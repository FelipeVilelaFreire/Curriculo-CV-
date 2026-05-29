# Design System: "Premium Dark Glowing Tech"

O CV deve transmitir sensação tátil de software premium, misturado com as iluminações neon da Vercel/Linear em Dark Mode.

## 1. Tema de Base
- O Background da aplicação SEMPRE é Negro/Muito Escuro. Use cores de fundo baseadas em `bg-[#030303]` (Pitch Black suave) ou `bg-slate-950` escurecido. A intenção é ter pouca emissão de luz monitor pra descansar a visão.

## 2. Ambient Glow (As luzes Radiais por trás das coisas)
Nós usamos Radial Gradients desfocados espalhados por trás das seções pra dar a alma Tecnológica (Cyberpunk). 
Para recriar:
- `bg-cyan-500/10 blur-[120px] w-[500px] h-[500px] absolute z-0` espalhado de forma assimétrica.
- Um roxo `bg-purple-600/15` contrastando embaixo do lado oposto.

## 3. O Padrão OBRIGATÓRIO (Glassmorphism)
Proibido o uso de `bg-slate-800` padrão ou cores chapadas para cartões de informação. TODOS os cards do site (Projetos, Experiência, Navbar) DEVERÃO SER translúcidos e imitar vidro temperado negro com brilho nas bordas.
*Regra de Ouro do Tailwind Card:*
```html
<div className="relative overflow-hidden
      bg-white/[0.03] backdrop-blur-xl 
      border border-white/10 
      hover:bg-white/[0.06] hover:border-cyan-500/30 
      transition-colors duration-500 rounded-2xl">
```

## 4. Tipografia
- Focado completamente em contraste brutal. 
- Use *Inter* ou *Geist Sans*.
- Os H1, H2 e itens chaves da timeline em Branco Puro `text-white`. 
- Descrições de parágrafo das experiências não recebem grande ênfase visual (use um `text-zinc-400` suave que afunde a informação até que ela precise ser lida). 

## 5. UI Flourishes (Cerejas do Bolo)
- Os badges (Como o `EU Citizen`) devem parecer joias: Um degradê metálico no texto ou uma borda cintilante que atraia levemente o olho sem distrair dos Projetos e Idiomas falados.
