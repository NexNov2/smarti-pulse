

# Landing Page: Smarti Supply — Follow-up de Pedidos Automatizado

Uma landing page de alta conversão, single page com scroll, em português brasileiro, para o produto Smarti Supply.

## Design System
- Paleta: azul escuro (#1B2A4A), rosa/magenta (#E8306E) para CTAs, fundos alternados branco e cinza (#F5F7FA), dark (#0F1A2E) para header/footer
- Tipografia: Inter (Google Fonts), hierarquia clara de H1 a body
- Botões CTA: rosa com ícone WhatsApp, todos direcionam para link do WhatsApp com mensagem pré-definida
- Ícones: Lucide React exclusivamente
- **Regra global obrigatória**: nenhuma copy usa travessão em lugar nenhum

## Seções (13 no total)

1. **Header fixo** — Logo Smarti + botão WhatsApp, fundo escuro com backdrop blur

2. **Hero** 
   - Grid 2 colunas (desktop) / 1 coluna (mobile)
   - Coluna esquerda: badge, H1, parágrafo, CTA primário, selos de setores, linha de badges
   - Coluna direita (dashboard visual): **hidden em mobile** (`hidden md:block`)
   - **CTA visível sem scroll em viewport 375px** — ajustar padding-top e espaçamento para caber
   - **Sem animação de entrada** — carrega visível imediatamente
   - **CTA primário**: "Falar com especialista agora"

3. **Barra de impacto** 
   - Fundo gradiente rosa→azul
   - **Layout desktop**: flex horizontal, número à esquerda, descrição à direita
   - **Layout mobile**: flex vertical (empilhado)
   - Métrica destaque: "De 2 dias → 30 min"

4. **Problema** 
   - Fundo cinza (#F5F7FA)
   - Estatística PwC + H2
   - 4 cards com ícones Lucide em círculos coloridos
   - **CTA centralizado abaixo dos cards**: "Resolver isso agora"

5. **Solução (Como funciona)** 
   - Fundo branco
   - H2 + subtítulo
   - Timeline vertical com 5 etapas
   - **Etapa 4 (Portal do fornecedor)**: após descrição, box de destaque com estilo visual diferenciado
     - Fundo: rosa claro (#E8306E/5)
     - Borda: rosa (#E8306E/20)
     - Padding e border-radius arredondados
     - Texto explicativo destacando o diferencial
   - **CTA**: "Quero ver como funciona"

6. **Resultados / KPIs** 
   - Fundo cinza (#F5F7FA)
   - Métrica hero "0% retrabalho"
   - 3 cards de apoio

7. **Vídeo** 
   - Fundo branco
   - H2 + descrição
   - Thumbnail clicável (card com fundo escuro, ícone Play centralizado)
   - Abre YouTube em nova aba
   - **CTA**: "Falar com especialista"

8. **Diferenciais** 
   - Fundo cinza (#F5F7FA)
   - Grid 2x2 com 4 cards (agnóstico, integração bidirecional, comunicação automática, onboarding)

9. **Cases** 
   - Fundo branco
   - 2 cards lado a lado (papel/celulose + farmacêutica)
   - Cada card tem bloco "Antes" e "Depois"
   - **Bloco "Antes"**: ícone AlertTriangle em vermelho
   - **Bloco "Depois"**: ícone CheckCircle em verde
   - Quote com borda lateral rosa

10. **Implementação** 
    - Fundo cinza (#F5F7FA)
    - Stepper 5 etapas com números em círculos
    - Horizontal em desktop, vertical em mobile
    - Nota de prazo abaixo

11. **FAQ** 
    - Fundo branco
    - 3 perguntas com Accordion do shadcn/ui

12. **CTA Final** 
    - Fundo escuro (#0F1A2E), texto branco
    - H2 + subtítulo
    - **CTA primário**: "Falar com especialista agora"
    - **Texto confirmação**: "Resposta em até 2 horas em horário comercial"
    - **CTA secundário**: link de e-mail alternativo

13. **Footer** 
    - Fundo escuro (#0F1A2E)
    - Logo, tagline, copyright, selos

## Elementos Globais
- Botão flutuante WhatsApp (canto inferior direito) com animação de pulso
- Animações de scroll com IntersectionObserver (fade-in + translate nos cards, sequencial na timeline)
  - **Exceção**: hero não anima (carrega visível)
- Meta tags de SEO configuradas
- Atributos data-tracking em todos os CTAs
- Placeholders para GTM e Meta Pixel no HTML
- Layout 100% responsivo (mobile 375px, tablet 768px, desktop 1280px)
- **CTA Distribution**: Hero, Seção 4, Seção 5, Seção 7, Seção 12

## Notas Técnicas
- Single page sem roteamento adicional
- Logo `smarti-logo-branca.webp` copiada para o projeto
- Sem backend necessário
- SVG inline do logo WhatsApp nos botões CTA
- Validação: todas as copies testadas para garantir ausência de travessão

