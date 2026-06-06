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

## Open Graph / Link Previews

- OG image lives at `public/og-image.png`
- Meta tags are set in `astro.config.mjs` under `head[]`
- Both `og:image` and `twitter:image` must point to the full URL including base path
- Update `og:image:alt` to describe the actual image content

## Sidebar Management

- Sidebar is defined in `astro.config.mjs` under `sidebar[]`
- Only published pages (no `draft: true`) should be in the sidebar
- Use `slug` for auto-title from frontmatter
- Use `collapsed: true` for optional sections (e.g. Troubleshooting)
- Use `collapsed: false` for core walkthrough flow sections

## New Page Checklist

When adding a new content page:
1. Create the `.mdx` file in the appropriate `src/content/docs/` subdirectory
2. Add frontmatter with `title` and `description`
3. Import Tooltip and any needed Starlight components
4. Use HTML `<table>` for any tables (never markdown tables)
5. Use `<Tooltip>` for key terms on first occurrence
6. Add internal links with the full base path
7. Add the slug to `astro.config.mjs` sidebar when ready to publish
