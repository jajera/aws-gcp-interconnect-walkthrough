---
inclusion: fileMatch
fileMatchPattern: "**/*.{md,mdx}"
---

# Tables in MDX

## CRITICAL: Use HTML tables in MDX files

Markdown tables (`| col | col |`) **do not render** in `.mdx` files that import custom components (e.g. `Tooltip`, `Checklist`). The MDX parser treats pipe characters as text instead of table syntax.

**Always use HTML `<table>` elements in `.mdx` files.**

### Correct (works in all MDX files)

```html
<table>
  <thead>
    <tr>
      <th>Column A</th>
      <th>Column B</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>value</td><td>value</td></tr>
  </tbody>
</table>
```

### Wrong (breaks when custom components are imported)

```markdown
| Column A | Column B |
| --- | --- |
| value | value |
```

## HTML table rules

- Use `<code>` for inline code in cells, not backticks
- Use `<strong>` for bold, not `**`
- Use `<a href="...">` for links
- Use `&lt;` for literal `<` characters
- Indent table markup for readability in source

## When markdown tables ARE safe

- In plain `.md` files (README.md, AGENTS.md) that don't import components
- These can use standard markdown table syntax with spaced separators: `| --- |`
