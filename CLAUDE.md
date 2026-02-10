# UI System

Design system reference — glass morphism, spring easing, semantic tokens.
This is the canonical source for design patterns used across all projects.

## Stack

- Next.js 15.5 + React 19.1 + TypeScript
- Tailwind CSS v4 + PostCSS
- shadcn/ui (new-york style, stone base)
- Framer Motion 12
- Lucide React icons

## Commands

```bash
pnpm dev          # Dev server (Turbopack) on :3000
pnpm build        # Production build
pnpm lint         # ESLint
```

## Structure

```
src/app/           # Routes (/, /components, /colors, /typography, /layout, /motion)
src/components/    # Layout + feature components
src/components/ui/ # shadcn/ui primitives (Button, Switch, Tabs, Input, Badge, Sheet)
src/styles/        # tokens.css — ALL design tokens as CSS custom properties
src/lib/           # utils.ts (cn helper)
```

## Design Tokens (src/styles/tokens.css)

- **Palette:** `--neutral-1` (darkest) through `--neutral-10` (white)
- **Motion:** `--ease-spring` (interactive), `--ease-panel` (panels), `--ease-switch` (toggle)
- **Glass:** `--surface-glass`, `--glass-blur: 20px`, `--glass-saturate: 180%`
- **Spacing:** `--panel-inset: 10px`, `--sidebar-width: 220px`, `--sidebar-collapsed-width: 60px`
- **Radius:** `--radius-xs` (6px) through `--radius-pill` (9999px)
- **Typography:** `--font-display` (EB Garamond), `--font-body` (DM Sans), `--font-code` (JetBrains Mono)
- **Timing:** `--duration-enter: 300ms`, `--duration-exit: 210ms`, `--duration-hover: 200ms`

## Key Patterns

- **Glass morphism:** `backdrop-filter: blur(20px) saturate(180%)` + `rgba(17,17,17,0.85)` bg
- **Spring easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for all interactive elements
- **Exit faster:** exit = 70% of enter duration (210ms vs 300ms)
- **Edge handle:** sidebar collapse via edge-hover pill, not explicit button
- **OKLch colors:** perceptually uniform color space for theme tokens

## Documentation Pages

| Route | Content |
|-------|---------|
| `/` | Overview — hero + interactive component showcase |
| `/components` | Component catalog with variant counts |
| `/colors` | Full color system — palette, semantic, glass, status |
| `/typography` | Font families, size scale, usage guidelines |
| `/layout` | Spacing, radius, shadows, panel dimensions |
| `/motion` | Easing curves, duration scale, principles |

## Gotchas

- `overflow-hidden` on sidebar aside clips children — absolute elements must stay within bounds
- Tailwind v4 uses `@theme inline` block in globals.css, NOT tailwind.config.ts
- Fonts loaded via `next/font/google` with CSS variable injection in layout.tsx
- Group hover needs `group/{name}` naming for nested groups (e.g. `group/sidebar`)
- OKLch values in globals.css, hex values in tokens.css — both valid, don't mix in same context
