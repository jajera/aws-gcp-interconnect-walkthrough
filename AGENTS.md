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

- `docs-pattern.md` — page structure, frontmatter, MDX indentation rules
- `astro-components.md` — which component to use when
- `glossary.md` — alphabetical order for `src/data/glossary.ts`
- `markdown-tables.md` — spaced separator rows required
- `project-conventions.md` — commit messages, draft workflow, site config

## Sibling repos

- [s3-files-workloads](https://github.com/jajera/s3-files-workloads) — pattern reference for Astro Starlight structure, components, and CI
- [aws-eks-walkthrough](https://github.com/jajera/aws-eks-walkthrough) — sibling repo (Starlight layout and CI patterns)
