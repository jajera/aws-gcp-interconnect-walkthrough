---
inclusion: fileMatch
fileMatchPattern: "src/**/*.{astro,mdx,tsx}"
---

# Astro / Starlight Component Guide

## When to use which

| Need | Component |
| --- | --- |
| Multi-step instructions | `<Steps>` from `@astrojs/starlight/components` |
| Tabbed alternatives (e.g. CLI vs Terraform) | `<Tabs>` + `<TabItem>` |
| Callouts (tip, caution, danger) | `<Aside>` |
| Cards / link grids | `<CardGrid>` + `<Card>` |
| Icons (brand logos) | `unplugin-icons` — import from `~icons/simple-icons/` or `~icons/mdi/` |

## Import pattern

```astro
---
import { Steps, Tabs, TabItem } from '@astrojs/starlight/components';
---
```

## Custom components

Place reusable components in `src/components/`. Use PascalCase filenames.
