# UI System — Project Index

## Routes

| Route | File | Content |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Overview — hero + interactive showcase |
| `/components` | `src/app/components/page.tsx` | Component catalog |
| `/colors` | `src/app/colors/page.tsx` | Color system — palette, semantic, glass, status |
| `/typography` | `src/app/typography/page.tsx` | Font families, size scale, usage |
| `/layout` | `src/app/layout/page.tsx` | Spacing, radius, shadows, panels |
| `/motion` | `src/app/motion/page.tsx` | Easing curves, duration scale, principles |

## Components

### Layout (`src/components/`)

| File | Purpose |
|------|---------|
| `app-shell.tsx` | Root layout shell — sidebar + top nav + content area |
| `sidebar.tsx` | Left sidebar navigation (desktop floating + mobile Sheet) |
| `floating-top-nav.tsx` | Centered top nav pill (System/Components/Tokens/Playground) |
| `right-drawer.tsx` | Inspector drawer — tokens, palette, easing visualizer |
| `hero-section.tsx` | Landing hero with headline, CTAs, scroll indicator |
| `interactive-controls.tsx` | Interactive component showcase section |

### UI Primitives (`src/components/ui/`)

Badge, Button, Input, Separator, Sheet, Switch, Tabs

## Design Tokens

- **All tokens:** `src/styles/tokens.css`
- **Tailwind theme overrides:** `src/app/globals.css` (`@theme inline` block)
- **OKLch theme colors:** `src/app/globals.css` (`:root` / `.dark` blocks)

## Key Files

- `src/app/layout.tsx` — Root layout, font loading, dark mode class
- `src/lib/utils.ts` — `cn()` helper (clsx + twMerge)
- `components.json` — shadcn/ui config (new-york style, stone base)
