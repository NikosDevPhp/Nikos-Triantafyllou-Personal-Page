# Nikos Triantafyllou — Personal Page

A small, hand-built personal page with a **retro-modern** feel: warm paper
palette, grain texture, serif display type, and a terminal-flavoured hero —
all wrapped in a clean, responsive modern layout.

🔗 **Live:** https://nikosdevphp.github.io/Nikos-Triantafyllou-Personal-Page/

## Stack

- Plain **HTML / CSS / JavaScript** — no build step, no dependencies
- Fonts: Fraunces, Space Grotesk, JetBrains Mono (Google Fonts)
- Hosted on **GitHub Pages**

## Files

| File | Purpose |
|------|---------|
| `index.html`   | Home page |
| `articles.html`| Writing — list of all articles |
| `article.html` | Single-article template (reads `?a=<file>.md`) |
| `styles.css`   | All styling, theme variables, responsive rules |
| `script.js`    | Theme toggle, scroll reveals, year stamp |
| `md.js`        | Tiny Markdown + front-matter parser (no dependencies) |
| `blog.js`      | Auto-discovers and renders articles |
| `articles/`    | One Markdown file per article |

## ✍️ Publishing a new article

The blog has **no build step and no index to maintain**. To publish:

1. Add a Markdown file to the `articles/` folder, named with its date:
   `articles/2026-08-01-my-post-title.md`
2. Start it with a small front-matter block:

   ```markdown
   ---
   title: My Post Title
   date: 2026-08-01
   summary: One line that shows up on the Writing page.
   tags: php, notes
   ---

   Your article body in **Markdown** goes here.
   ```
3. Commit and push. That's it — it appears on the Writing page automatically.

Notes:
- The **title comes from front matter**, so you don't need to repeat it as an
  `# Heading` at the top (a leading `# Title` is stripped automatically).
- New files are discovered through the GitHub API. If you ever change which
  branch GitHub Pages serves from, update the `refs` list at the top of
  `blog.js`.
- Supported Markdown: headings, **bold**/*italic*, `inline code`, fenced code
  blocks, links, images, lists, blockquotes, and horizontal rules.

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Notes

This is a **proof-of-concept**. Content in the "Selected Work" section is
placeholder and meant to be replaced with real case studies.
