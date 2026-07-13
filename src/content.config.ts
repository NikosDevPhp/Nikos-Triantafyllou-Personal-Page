import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Articles live as Markdown files in src/content/blog/.
// The schema makes frontmatter type-safe: a typo or missing field
// fails the build instead of breaking silently at runtime.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
