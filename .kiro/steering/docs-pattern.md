---
inclusion: fileMatch
fileMatchPattern: "src/content/docs/**"
---

# Documentation Page Pattern

## Page Structure

Every content page in `src/content/docs/` follows this pattern:

1. **Frontmatter** — title, description, optional `draft: true`
2. **Intro paragraph** — one-liner explaining what the page covers
3. **Steps / Sections** — numbered or headed sections with CLI commands or Terraform blocks
4. **Verification** — how to confirm the step worked
5. **Next** — link to the next logical page

## Frontmatter

```yaml
---
title: Page Title
description: One-line summary for meta tags and sidebar.
---
```

To hide a page from production builds, add `draft: true`.

## MDX Rules

- Indent code blocks inside Starlight components (e.g. `<Steps>`, `<Tabs>`) by 2 spaces.
- Use fenced code blocks with language identifiers: ```bash, ```hcl, ```json.
- Prefer `<Code>` component for long or annotated snippets.

## Linking

All internal links must include the base path: `/aws-gcp-interconnect-walkthrough/`.

## Default AWS region

Use `ap-southeast-1` in all examples unless otherwise specified.
