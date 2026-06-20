---
inclusion: fileMatch
fileMatchPattern: "src/data/glossary*"
---

# Glossary Conventions

## File structure

- Glossary lives in `src/data/glossary.ts`
- Type: `Record<string, string>` — key is the term slug, value is the definition
- Keep entries in **alphabetical order** by key
- Keys use lowercase kebab-case (e.g. `dx-gateway`, `vpc-peering`)

## Definition style

- Start with the expanded form / full name (e.g. "Virtual Private Cloud — ...")
- Keep definitions to one or two sentences max
- Include relevant constraints or versions when applicable
- Reference CLI commands or APIs if the term maps to a specific namespace

## Usage in pages

```mdx
import Tooltip from "@/components/Tooltip.astro";

<!-- Uppercase display (default) -->

<Tooltip term="aws" />

<!-- Custom display text -->

<Tooltip term="gcp" label="Google Cloud" />

<!-- Inside HTML table cells -->

<td>
  <Tooltip term="terraform" />
</td>
```

## When to add a new term

Add a glossary entry when:

- A term appears on multiple pages
- The term has a specific meaning in this context (e.g. "transport" means something specific to GCP Cross-Cloud Interconnect)
- First-time readers might not know the abbreviation
