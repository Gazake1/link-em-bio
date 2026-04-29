# Home Arena Vermelha Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the Arena Vermelha identity to the home page and show the Corujao shortcut as maintenance.

**Architecture:** Use global theme tokens for the new black/red visual system, update the shared shell background, and restyle only the existing home layout. Keep `/corujao` available as a route while the home card is disabled and labeled as maintenance.

**Tech Stack:** Next 16 App Router, React 19, TypeScript, Tailwind CSS v4, Vitest, shadcn/ui primitives.

---

## Workspace Note

Do not create a new worktree for this execution. The current repository root has a pre-existing dirty/staged transition where `react/` is no longer a committed gitlink and the app files are staged/uncommitted. A fresh worktree from `HEAD` would not contain the complete app needed for verification. Execute in `/root/projetos/sg/link-tree/react` and do not revert unrelated user changes.

## File Structure

- Modify `tests/linktree-links.test.ts`: add a test for the home-visible shortcut list with Corujao in maintenance.
- Modify `lib/linktree-links.ts`: export `homeLinktreeLinks` with Corujao included as disabled maintenance.
- Modify `app/globals.css`: update theme tokens to the Arena Vermelha palette.
- Modify `components/shared/site-shell.tsx`: update only visual background layers.
- Modify `app/page.tsx`: use `homeLinktreeLinks` and restyle existing header/cards/footer without changing layout order.

## Task 1: Home Shortcut Data

**Files:**
- Modify: `tests/linktree-links.test.ts`
- Modify: `lib/linktree-links.ts`

- [ ] **Step 1: Write the failing test**

Add this import and test to `tests/linktree-links.test.ts`:

```ts
import { homeLinktreeLinks, linktreeLinks } from "../lib/linktree-links";

it("shows the Corujao shortcut on the home page as maintenance", () => {
  expect(homeLinktreeLinks.map((item) => item.title)).toEqual([
    "Corujão",
    "Suporte",
    "Twitch",
    "CS Prime",
    "VCT Ribeirão",
    "Lan House",
    "Aniversário",
    "Mix",
    "SGA",
    "YouTube",
  ]);

  expect(homeLinktreeLinks[0]).toMatchObject({
    title: "Corujão",
    href: "/corujao",
    disabled: true,
    disabledLabel: "Manutenção",
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `bun run test -- tests/linktree-links.test.ts`

Expected: fail because `homeLinktreeLinks` does not include `Corujao` as maintenance yet.

- [ ] **Step 3: Write minimal implementation**

Add `disabledLabel?: string` to `LinktreeLink`, mark the `Corujao` entry as disabled with `disabledLabel: "Manutencao"`, and export the home list with Corujao included:

```ts
export const homeLinktreeLinks = linktreeLinks;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `bun run test -- tests/linktree-links.test.ts`

Expected: pass.

## Task 2: Arena Vermelha Global Identity

**Files:**
- Modify: `app/globals.css`
- Modify: `components/shared/site-shell.tsx`

- [ ] **Step 1: Update global tokens**

Replace the `:root` and `.dark` token values with a black/red/warm-neutral palette. Keep the same variable names so shadcn/ui and Tailwind utilities continue to work.

- [ ] **Step 2: Update shell background**

In `components/shared/site-shell.tsx`, keep the same wrapper structure and replace only the visual classes for background gradients, texture and top light line.

- [ ] **Step 3: Verify syntax**

Run: `bun run lint`

Expected: no lint errors from edited files.

## Task 3: Home Visual Restyle

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Use the home-visible link list**

Change the import from `linktreeLinks` to both `homeLinktreeLinks` and `linktreeLinks` if the `LinkCard` prop type still needs the full array type.

Render `homeLinktreeLinks.map(...)` instead of `linktreeLinks.map(...)`.

- [ ] **Step 2: Restyle existing components**

Preserve this order and structure:

1. `SiteShell`
2. `main`
3. outer `section`
4. `header`
5. `Separator`
6. grid of cards
7. `footer`

Change only visual classes: card backgrounds, borders, shadows, hover states, badges, icon circles, image overlays, header surface and footer border/text. Make cards slightly smaller by reducing card padding, image aspect height and grid gap. Render disabled card photos in grayscale.

- [ ] **Step 3: Verify focused behavior**

Run: `bun run test -- tests/linktree-links.test.ts`

Expected: pass.

## Task 4: Full Verification

**Files:**
- No new files.

- [ ] **Step 1: Run unit tests**

Run: `bun run test`

Expected: all tests pass.

- [ ] **Step 2: Run lint**

Run: `bun run lint`

Expected: no lint errors.

- [ ] **Step 3: Run build**

Run: `bun run build`

Expected: production build completes. If the build fails because of environment or pre-existing project state, capture the exact error.
