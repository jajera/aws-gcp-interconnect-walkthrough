---
inclusion: fileMatch
fileMatchPattern: "src/**/*.{astro,mdx,tsx}"
---

# Astro / Starlight Component Guide

## When to use which

- **Multi-step instructions** → `<Steps>` from `@astrojs/starlight/components`
- **Tabbed alternatives** (e.g. CLI vs Terraform) → `<Tabs>` + `<TabItem>`
- **Callouts** (tip, caution, danger) → `<Aside>`
- **Cards / link grids** → `<CardGrid>` + `<Card>`
- **Glossary term with tooltip** → `<Tooltip term="key" />` from `@/components/Tooltip.astro`
- **Icons** (brand logos) → `unplugin-icons` — import from `~icons/simple-icons/` or `~icons/mdi/`

## Import pattern

```astro
---
import { Steps, Tabs, TabItem, Aside, Card, CardGrid } from '@astrojs/starlight/components';
import Tooltip from '@/components/Tooltip.astro';
---
```

## CardGrid

- Use `<CardGrid>` for uniform card layout.
- Do **NOT** use `<CardGrid stagger>` — it creates uneven/skewed card alignment.

## Aside placement

- Always leave a blank line after `</Aside>` before the next content block.
- `<Aside>` inside `<Steps>` must be indented to match the step's indentation level.

## Custom components

Place reusable components in `src/components/`. Use PascalCase filenames.

## Key gotchas

1. **No markdown tables in MDX** — use HTML `<table>` instead (see `markdown-tables.md`).
2. **No backtick code inside HTML table cells** — use `<code>text</code>`.
3. **No markdown bold/links inside HTML elements** — use `<strong>` and `<a href>`.
4. **Tooltip inside HTML tables** — works fine: `<td><Tooltip term="vpc" /></td>`.
