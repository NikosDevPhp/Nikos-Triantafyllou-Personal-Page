// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages project site: served from https://<user>.github.io/<repo>/
export default defineConfig({
  site: "https://nikosdevphp.github.io",
  base: "/Nikos-Triantafyllou-Personal-Page",
  markdown: {
    // battle-tested Shiki highlighter replaces the old hand-rolled md.js
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
