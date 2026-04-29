# Template Vinext

Starter em `vinext` com `Bun`, `Tailwind CSS v4`, `Vitest`, `shadcn/ui` e estrutura inicial limpa para evoluir produto.

## Stack

- `vinext` como runtime padrão
- `next` preservado como fallback de compatibilidade
- `bun` como package manager
- `tailwindcss v4`
- `shadcn/ui` com conjunto amplo de componentes já adicionado
- `vitest` para testes unitários

## Scripts

```bash
bun run dev
bun run lint
bun run test
bun run build
```

Fallback Next:

```bash
bun run dev:next
bun run build:next
bun run start:next
```

## Estrutura

```text
app/
components/
  shared/
  ui/
lib/
tests/
```

## Observacao

`vinext` ainda e experimental. Este template prioriza velocidade de iteracao e compatibilidade alta, mas nao pressupoe paridade total com `Next.js`.
