# Nikos Triantafyllou — Personal Page

A small personal site with a **retro-modern** feel — warm paper palette, grain
texture, serif display type, and a terminal-flavoured hero — built with
[Astro](https://astro.build) and hosted on GitHub Pages.

🔗 **Live:** https://nikosdevphp.github.io/Nikos-Triantafyllou-Personal-Page/

## Tech

- **Astro** static site generator (no runtime framework shipped)
- **Markdown** articles via Astro Content Collections (remark + Shiki highlighting)
- **TypeScript** for the little bits of interactivity
- Fonts: Fraunces, Space Grotesk, JetBrains Mono (Google Fonts)

## Project layout

```
astro.config.mjs            # site + base path config
src/
  layouts/Base.astro        # shared <head>, nav, footer, theme + menu scripts
  styles/global.css         # all styling (retro-modern theme, light/dark)
  content.config.ts         # blog collection schema (type-safe frontmatter)
  content/blog/             # ← articles live here, one Markdown file each
  pages/
    index.astro             # home
    writing/index.astro     # article list
    writing/[...slug].astro  # single article
.github/workflows/deploy.yml # builds + deploys to GitHub Pages on push
```

## Develop locally

```bash
npm install
npm run dev       # http://localhost:4321  (hot reload)
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## ✍️ Publishing a new article

1. Add a Markdown file to `src/content/blog/`, named with its date:
   `src/content/blog/2026-08-01-my-post-title.md`
2. Start it with frontmatter (the schema is enforced at build time):

   ```markdown
   ---
   title: My Post Title
   date: 2026-08-01
   summary: One line shown on the Writing page.
   tags: [php, notes]
   ---

   Your article body in **Markdown**. Fenced code blocks get real syntax
   highlighting automatically.
   ```
3. Commit and push. The GitHub Action rebuilds and redeploys — the post appears
   on the Writing page. No index to maintain.

Notes:
- The **title comes from frontmatter**; no need to repeat it as an `# H1`.
- The URL slug is the filename with the date prefix stripped
  (`2026-08-01-my-post-title.md` → `/writing/my-post-title/`).

## Deployment

Pushing to the deploy branch triggers `.github/workflows/deploy.yml`, which builds
the site and publishes it to GitHub Pages. In the repository, Pages must be set to
**Settings → Pages → Source: GitHub Actions** (one-time).
