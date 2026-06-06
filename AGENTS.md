# Agent Context

Astro Starlight documentation site for AWS-GCP interconnect, organized as CLI-first walkthroughs and Terraform examples based on [tf-aws-interconnect-demo](https://github.com/jajera/tf-aws-interconnect-demo).

## What this repo is

`aws-gcp-interconnect-walkthrough` contains hands-on, copy-paste CLI walkthroughs and Terraform documentation for setting up AWS-GCP interconnect using the `tf-aws-interconnect-demo` project.

Content will be sourced from: `~/workspace/jajera/tf-aws-interconnect-demo`

## Tech stack

- Astro + `@astrojs/starlight` + `starlight-theme-vintage`
- `unplugin-icons` for brand icons (mdi, simple-icons)
- Node 22 (`.nvmrc`)
- GitHub Actions: deploy to GitHub Pages on push to `main`

## Site config

- `site: 'https://jajera.github.io'`
- `base: '/aws-gcp-interconnect-walkthrough'`
- All internal links must include the base path, e.g. `/aws-gcp-interconnect-walkthrough/setup/`

## Site structure

```
src/content/docs/
  index.mdx              # Introduction
src/components/          # Reusable Astro components
src/data/                # Glossary terms, shared data
src/styles/              # Theme overrides
```

## Draft/publish workflow

1. New pages are created with `draft: true` in frontmatter.
2. Draft pages are visible in `npm run dev` but excluded from `npm run build`.
3. Do not add a draft page's slug to `astro.config.mjs` sidebar — it will break the build.
4. To publish: remove `draft: true`, then add the slug to the sidebar in `astro.config.mjs`.

## Conventions

Follow `.kiro/steering/` for detailed guidance:

- `docs-pattern.md` — page structure, frontmatter, MDX rules, Tooltip usage
- `astro-components.md` — which component to use when, CardGrid pitfalls, Aside placement
- `glossary.md` — alphabetical order, definition style, usage in pages
- `markdown-tables.md` — **CRITICAL: use HTML tables in MDX, never markdown tables**
- `project-conventions.md` — commit messages, draft workflow, site config, OG tags, new page checklist

## Critical MDX rules (read first)

1. **Tables**: Never use markdown table syntax in `.mdx` files. Use HTML `<table>` elements. MDX breaks pipe-based tables when custom components are imported.
2. **CardGrid**: Do not use `<CardGrid stagger>` — it creates skewed/offset cards. Use `<CardGrid>` without props.
3. **Inline code in HTML**: Use `<code>text</code>`, not backticks, inside HTML table cells or elements.
4. **Blank lines**: Always leave a blank line after closing tags (`</Aside>`, `</table>`) before the next content block.
5. **Tooltip**: Import from `@/components/Tooltip.astro`. Use on first occurrence of a term per section.

## Sibling repos

- [s3-files-workloads](https://github.com/jajera/s3-files-workloads) — pattern reference for Astro Starlight structure, components, and CI
- [aws-eks-walkthrough](https://github.com/jajera/aws-eks-walkthrough) — sibling repo (Starlight layout and CI patterns)
