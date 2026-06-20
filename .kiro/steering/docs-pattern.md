---
inclusion: fileMatch
fileMatchPattern: "src/content/docs/**"
---

# Documentation Page Pattern

## Page Structure

Every content page in `src/content/docs/` follows this pattern:

1. **Frontmatter** — title, description, optional `draft: true`
2. **Imports** — Starlight components first, then custom components
3. **Intro paragraph** — one-liner explaining what the page covers
4. **Steps / Sections** — numbered or headed sections with CLI commands or Terraform blocks
5. **Verification** — how to confirm the step worked
6. **Next** — link to the next logical page

## Frontmatter

```yaml
---
title: Page Title
description: One-line summary for meta tags and sidebar.
---
```

To hide a page from production builds, add `draft: true`.

## Standard imports block

Every content page should import Tooltip and relevant Starlight components:

```mdx
import { Aside, Steps } from "@astrojs/starlight/components";
import Tooltip from "@/components/Tooltip.astro";
```

## MDX Rules

- **Tables**: Always use HTML `<table>` in MDX — never markdown tables. See `markdown-tables.md`.
- **CardGrid**: Use `<CardGrid>` without `stagger` for uniform card layout. The `stagger` prop offsets cards unevenly.
- Indent code blocks inside Starlight components (e.g. `<Steps>`, `<Tabs>`) by 2 spaces.
- Use fenced code blocks with language identifiers: `bash, `hcl, ```json.
- Ensure a blank line before and after every HTML block (`<table>`, `<Aside>`, etc.).
- Inline code in HTML elements uses `<code>`, not backticks.

## Tooltip usage

Use `<Tooltip term="key" />` for the uppercase form (e.g. AWS, GCP, VPC) or `<Tooltip term="key" label="Display text" />` for custom display. Place tooltips on first occurrence per page section, not on every instance.

## Linking

All internal links must include the base path: `/aws-gcp-interconnect-walkthrough/`.

## Default AWS region

Use `ap-southeast-1` in all examples unless otherwise specified.
