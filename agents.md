# SGA_DESIGN_SYSTEM.md

## Visão geral

Este projeto pertence à **SGA — Santos Games Arena**.

A SGA é uma arena gamer e organizadora de campeonatos presenciais de e-sports. Toda interface desenvolvida neste projeto deve transmitir:

- autenticidade
- profissionalismo
- energia competitiva
- identidade gamer
- atmosfera de arena
- sensação de experiência real
- marca forte e coerente

Este arquivo deve ser consultado antes de criar, refatorar ou alterar qualquer página, seção, componente ou elemento visual do projeto.

O objetivo principal é garantir **coerência visual, consistência de marca e reaproveitamento inteligente de padrões**.

---

## Objetivo do design system

Este design system existe para garantir que:

- o Linktree, a Home, as páginas de campeonato, as páginas de formulário e outras páginas futuras pareçam partes do mesmo ecossistema
- a marca SGA tenha uma linguagem visual consistente
- o front-end não fique com um estilo diferente em cada página
- o time não precise reinventar interface a cada nova entrega
- a identidade visual da SGA seja percebida imediatamente pelo usuário

---

## Essência da marca

A SGA não deve parecer apenas uma lan house.

Ela deve ser percebida como:

- arena gamer
- organizadora de campeonatos
- espaço de experiência presencial
- marca local forte no universo gamer
- referência em e-sports presenciais

Toda interface deve reforçar essa percepção.

---

## Direção visual principal

A linguagem visual da SGA deve combinar estes 5 pilares:

### 1. Autenticidade
A marca deve usar, sempre que possível, **materiais reais produzidos pela própria SGA**:
- fotos reais da arena
- fotos reais dos campeonatos
- fotos reais dos players
- vídeos reais dos eventos
- bastidores reais

### 2. Atmosfera escura e competitiva
A base visual deve ser escura, imersiva e contrastada, transmitindo:
- tensão competitiva
- profissionalismo
- foco
- energia de campeonato

### 3. Acabamento premium
A interface deve parecer moderna, bem acabada e atual:
- cards com aparência glass / liquid glass
- overlays bem resolvidos
- sombras suaves
- bordas discretas
- contraste bem controlado
- visual limpo e forte

### 4. Sensação cinematográfica
A estética deve lembrar:
- after movies
- materiais de campeonato
- produções de e-sports
- identidade de evento real

### 5. Coerência de sistema
A interface deve parecer parte de um sistema unificado, e não peças soltas.

---

## Regra central de identidade

Se houver dúvida entre:

- criar algo novo e visualmente diferente
ou
- manter a coerência com o sistema atual

**priorizar sempre a coerência com o sistema atual**.

A SGA deve evoluir com consistência, não com rupturas aleatórias.

---

## Uso de imagem

## Regra principal
Sempre que possível, usar **imagens reais da SGA** antes de qualquer outra alternativa.

### Prioridade de uso
Ordem de prioridade para imagens:

1. fotos reais da SGA
2. fotos reais dos campeonatos
3. fotos reais dos players
4. fotos reais da arena
5. vídeos/takes reais da arena
6. assets gráficos próprios
7. imagens genéricas apenas se não houver alternativa melhor

### O que a imagem deve comunicar
As imagens usadas devem reforçar uma ou mais destas percepções:
- campeonato real
- players reais
- arena real
- pressão competitiva
- clima gamer
- organização profissional
- comunidade viva

### Tratamento padrão de imagem de fundo
Quando uma imagem real for usada como background:

- aplicar blur leve, médio ou forte, conforme a necessidade
- aplicar overlay escuro por cima para melhorar leitura
- manter o conteúdo principal legível
- evitar excesso de informação visual atrás do texto
- preservar a sensação de profundidade e atmosfera

### Regras de tratamento visual
Tratamento recomendado:
- blur suave a médio
- overlay preto translúcido
- contraste alto entre texto e fundo
- clima cinematográfico
- evitar saturação exagerada

### O que evitar
Evitar:
- banco de imagem genérico como solução padrão
- personagens genéricos sem conexão com a SGA
- fundos claros demais
- imagens artificiais como base principal da marca
- imagens poluídas atrás de textos importantes

---

## Paleta de cores

## Cores principais
Estas são as cores base da identidade visual.

### Fundos
- Preto absoluto: `#050505`
- Preto profundo: `#0A0A0F`
- Preto suave: `#101014`
- Fundo secundário escuro: `#14141A`

### Texto
- Branco principal: `#FFFFFF`
- Branco suave: `#F5F7FA`
- Cinza claro: `#CFCFD6`
- Cinza médio: `#9C9CA8`

### Destaque
- Vermelho principal: `#FF2B2B`
- Vermelho profundo: `#D9192F`
- Vermelho escuro: `#A30000`

### Apoio / ambiente
Usar com moderação:
- azul escuro profundo: `#1D2D5C`
- roxo escuro suave: `#2E235C`
- reflexos claros translúcidos
- brancos translúcidos

## Regras de uso das cores
- CTA principal deve usar vermelho
- Títulos principais devem ser claros sobre fundo escuro
- Texto secundário deve usar cinza claro
- Fundos devem ser escuros
- Cards devem ser escuros ou glass translúcidos
- Cores auxiliares devem aparecer só como apoio, nunca dominar a interface

---

## Tipografia

## Direção tipográfica
A tipografia da SGA deve ser:
- forte
- moderna
- competitiva
- legível
- limpa
- tecnológica

## Estrutura recomendada
### Fonte para UI / interface
Usar uma fonte limpa, legível e moderna para:
- parágrafos
- menus
- formulários
- FAQs
- botões
- campos e labels

Fontes recomendadas:
- `Inter`
- `Sora`
- `Plus Jakarta Sans`

### Fonte para títulos de impacto
Quando houver necessidade de títulos mais marcantes em páginas de campeonato, banners ou hero sections, usar uma fonte forte e display, desde que mantenha boa leitura.

Regra:
- não usar muitas fontes diferentes
- preferir no máximo 2 famílias tipográficas por projeto
- priorizar consistência

## Hierarquia tipográfica
### H1
- maior destaque da página
- forte presença
- objetivo
- direto
- pode usar caixa alta quando fizer sentido

### H2
- títulos de seção
- forte, mas abaixo do H1
- deve ser consistente em todas as seções

### H3
- títulos de cards
- pequenos blocos
- subtítulos internos

### Corpo
- leitura fácil
- line-height confortável
- bom contraste
- sem poluição visual

## Regras de tipografia
- manter coerência entre páginas
- evitar usar muitos pesos diferentes sem necessidade
- evitar mistura excessiva de estilos
- priorizar legibilidade no mobile
- títulos devem ter impacto, mas não podem comprometer clareza

---

## Espaçamento e composição

## Regra geral
A interface deve respirar.

O projeto deve evitar:
- elementos colados demais
- excesso de informação na mesma área
- falta de hierarquia
- seções apertadas
- cards sem respiro

## Diretrizes
- usar espaçamentos consistentes entre seções
- manter margens internas generosas em cards
- preservar legibilidade
- diferenciar claramente blocos emocionais de blocos informativos
- usar respiro para criar sofisticação visual

## Estrutura visual
### Blocos emocionais
Devem ter:
- títulos mais impactantes
- visual mais centralizado quando fizer sentido
- foco em percepção e narrativa

### Blocos informativos
Devem ter:
- leitura mais racional
- alinhamento à esquerda quando necessário
- estrutura mais funcional

---

## Glass / liquid glass

## Regra de uso
A estética glass é parte importante da interface da SGA, mas deve ser usada com critério.

### Cards glass devem ter:
- fundo escuro translúcido
- blur de fundo
- borda fina e sutil
- sombra suave
- cantos arredondados
- aparência premium

### O efeito deve transmitir:
- tecnologia
- sofisticação
- modernidade
- profundidade

### O que evitar
Evitar:
- glass exagerado
- excesso de reflexo
- bordas chamativas demais
- blur excessivo que prejudique leitura
- usar glass em tudo sem hierarquia

---

## Componentes principais

## Botão principal
### Função
É o principal elemento de ação da página.

### Direção visual
- fundo vermelho
- texto claro
- alto contraste
- aparência forte
- cantos arredondados
- hover com leve destaque
- visual claramente clicável

### Exemplos de texto
- Garantir minha vaga
- Quero participar
- Falar no WhatsApp
- Quero encontrar um time

## Botão secundário
### Direção visual
- fundo escuro ou translúcido
- borda discreta
- menor destaque que o botão principal
- texto claro

## Cards
### Direção visual
- premium
- escuros ou glass
- bem espaçados
- com título curto e forte
- texto objetivo
- sem excesso de informação

## Hero section
### Direção
- imagem ou vídeo real da SGA no fundo
- overlay escuro
- título forte
- subtítulo curto
- CTA principal evidente
- se possível, reforço visual com vídeo ou player

## FAQ
### Direção
- limpo
- legível
- fundo escuro ou glass
- fácil de escanear
- sem exagero de efeitos
- foco em clareza

## Formulários
### Direção
- visual consistente com os cards
- fundo escuro
- boa legibilidade
- bordas discretas
- foco visível
- aparência moderna e organizada

---

## Estrutura de páginas

## Regra geral
Cada página deve parecer parte do mesmo ecossistema visual.

## Linktree / hub
### Objetivo
Funcionar como hub principal da marca.

### Deve transmitir
- acesso rápido
- marca forte
- consistência com os campeonatos
- clima gamer real

### Deve conter
- hero curto
- links organizados
- visual premium
- identidade clara
- uso de fotos reais como fundo, quando fizer sentido

## Home
### Objetivo
Ser a página institucional principal da marca.

### Deve transmitir
- autoridade
- escopo da operação
- qualidade da estrutura
- ecossistema completo da SGA

## Página de campeonato
### Objetivo
Converter interesse em participação.

### Deve transmitir
- oportunidade
- intensidade
- profissionalismo
- desejo de participar
- sensação de evento real

## Página de encontrar time
### Objetivo
Ajudar players sem equipe a entrar no campeonato.

### Deve transmitir
- solução
- praticidade
- clareza
- conexão com a comunidade

## Páginas de formulário
### Objetivo
Coletar dados sem quebrar a identidade da marca.

### Devem transmitir
- confiança
- simplicidade
- clareza
- continuidade visual

---

## UX e lógica de navegação

## Regra principal
A interface deve ser bonita, mas também clara e acionável.

O usuário deve entender rapidamente:
- onde está
- o que está vendo
- o que precisa fazer
- qual é o próximo passo

## Prioridades
- escaneabilidade
- clareza
- boa hierarquia
- CTA evidente
- navegação simples
- menor fricção possível

## O que evitar
Evitar:
- fluxos confusos
- excesso de etapas
- muita informação sem hierarquia
- layout que atrapalha a decisão
- página bonita mas pouco funcional

---

## Tom visual e editorial

## A interface da SGA deve parecer:
- profissional
- gamer
- competitiva
- autêntica
- premium
- moderna
- conectada com a comunidade

## O texto e a interface não devem parecer:
- genéricos
- frios demais
- corporativos demais
- desconectados do universo gamer
- exageradamente caricatos

---

## Responsividade

## Regra obrigatória
Toda página deve ser construída com mentalidade **mobile-first**, mas com responsividade real para:
- mobile pequeno
- mobile padrão
- tablet
- notebook
- desktop
- telas maiores

## Boas práticas
- títulos proporcionais
- containers bem dimensionados
- leitura confortável
- botões fáceis de tocar no mobile
- layouts que não pareçam “esticados” no desktop
- espaçamento coerente em todas as resoluções

---

## Reaproveitamento e consistência

Antes de criar algo novo, verificar:
1. Já existe um componente semelhante?
2. Já existe um estilo aprovado para isso?
3. Dá para reaproveitar o padrão?
4. Isso está coerente com as outras páginas?

## Regra
Nunca criar um novo padrão sem necessidade real.

Se já existe:
- card
- botão
- input
- hero
- FAQ
- CTA
- modal

deve-se adaptar a partir do padrão existente, e não inventar outro do zero.

---

## O que evitar no projeto

Evitar:
- cada página com um visual diferente
- excesso de cores
- excesso de fontes
- uso aleatório de efeitos
- interfaces genéricas
- visual “barato”
- excesso de neon sem critério
- uso de imagem sem contexto
- UI sem relação com o restante da marca
- componentes incoerentes entre páginas

---

## Fluxo obrigatório antes de desenvolver qualquer coisa

Antes de criar ou alterar qualquer interface, seguir esta ordem:

1. Entender o objetivo da página
2. Consultar este arquivo
3. Verificar se já existe componente reaproveitável
4. Aplicar a identidade visual da SGA
5. Garantir coerência com páginas existentes
6. Validar legibilidade no mobile
7. Validar clareza de conversão
8. Só então implementar

---

## Missão do front-end neste projeto

O front-end da SGA deve:

- parecer parte de uma marca sólida
- transmitir experiência real
- reforçar a autenticidade dos campeonatos
- valorizar a produção própria da arena
- parecer premium e competitivo
- criar desejo de participação
- manter consistência entre todas as páginas

Toda implementação deve contribuir para isso.

---

## Regra final

Se uma nova ideia visual:
- for bonita
- mas quebrar a coerência com a marca

ela **não deve ser prioridade**.

Na SGA, consistência de sistema vem antes de experimentação aleatória.

A evolução visual deve ser construída com unidade.