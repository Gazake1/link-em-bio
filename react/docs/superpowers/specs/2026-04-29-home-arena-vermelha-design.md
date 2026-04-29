# Home Arena Vermelha Design

## Contexto

O projeto usa Next 16 App Router com Tailwind CSS v4. O arquivo `AGENTS.md` exige consultar a documentacao local em `node_modules/next/dist/docs/` antes de escrever codigo. Para esta mudanca foram consultados os guias locais de App Router, CSS, imagens, fontes e acessibilidade.

## Escopo

- Aplicar uma nova identidade visual na home `/` com a direcao escolhida `Arena Vermelha`.
- Usar a abordagem de tokens globais, mesmo com possivel impacto visual temporario em `/corujao`, conforme confirmacao do usuario.
- Remover temporariamente o atalho `Corujao` da home `/`.
- Preservar a rota `/corujao` e seus arquivos sem edicao funcional nesta etapa.
- Preservar a disposicao dos elementos da home: header, separador, grade de cards e footer.

## Direcao Visual

A identidade deve reforcar a Santos Games Arena como uma arena gamer competitiva e institucional. A base visual sera preto profundo, vermelho como acento principal, textura sutil de arena e superficies escuras com bordas quentes.

Elementos visuais previstos:

- Fundo global mais dramatico com gradientes radiais vermelhos e textura discreta.
- Tokens globais alinhados a preto, vermelho e neutros quentes.
- Header da home com glass escuro mais definido, brilho vermelho controlado e logo com melhor presenca.
- Cards mantendo a mesma grade, mas com bordas vermelhas sutis, sombras mais esportivas, hover com elevacao discreta e tratamento de imagem mais contrastado.
- Badges e icones usando vermelho como principal acento.
- Footer preservado, apenas com contraste e borda coerentes com a nova identidade.

## Remocao Temporaria Do Corujao

O card `Corujao` deve deixar de aparecer na home. A implementacao pode filtrar o item na renderizacao da home ou removelo da lista compartilhada, desde que testes existentes continuem coerentes e a rota `/corujao` permaneca intacta.

Preferencia tecnica: filtrar na home para evitar alterar dados compartilhados usados por testes ou por outras rotas.

## Acessibilidade

- Preservar headings existentes e labels de links.
- Manter contraste adequado entre textos e fundos escuros.
- Nao depender apenas de cor para estado `Em breve`; o texto do badge continua visivel.
- Preservar `alt` da logo e imagens decorativas com `alt=""`.

## Testes E Verificacao

Depois da implementacao:

- Executar testes unitarios existentes.
- Executar lint.
- Executar build, se o ambiente permitir.

## Fora De Escopo

- Criar novo layout para a home.
- Alterar conteudo textual dos links, exceto a ausencia temporaria do Corujao.
- Alterar comportamento ou conteudo da pagina `/corujao`.
- Adicionar novas imagens ou dependencias externas.
