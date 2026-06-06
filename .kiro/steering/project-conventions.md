# Project Conventions

## Commit Messages

Follow Conventional Commits format:
- `feat:` — new functionality
- `fix:` — bug fix
- `docs:` — documentation only
- `chore:` — maintenance tasks

## Draft / Publish Workflow

1. New pages start with `draft: true` in frontmatter.
2. Draft pages are visible in `npm run dev` but excluded from `npm run build`.
3. Do **not** add a draft page's slug to `astro.config.mjs` sidebar — it breaks the build.
4. To publish: remove `draft: true`, then add the slug to the sidebar in `astro.config.mjs`.

## Content Source

The content for this documentation site comes from the Terraform project at:
`~/workspace/jajera/tf-aws-interconnect-demo`

## Tech Stack

- Astro + @astrojs/starlight + starlight-theme-vintage
- unplugin-icons for brand icons (mdi, simple-icons)
- Node 22 (.nvmrc)
- GitHub Actions: deploy to GitHub Pages on push to main

## Site Config

- `site: 'https://jajera.github.io'`
- `base: '/aws-gcp-interconnect-walkthrough'`
- All internal links must include the base path
