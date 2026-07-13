---
title: Hello World — Why I Finally Started Writing
date: 2026-06-02
summary: A short note on why I'm keeping a little corner of the web to think out loud in.
tags: [meta, writing]
---

I've meant to keep a writing habit for *years*. Every developer says this, and
most of us never do. So consider this the first small commit against that
intention.

## Why bother?

Writing forces me to actually **finish a thought**. It's easy to half-understand
something and move on — but the moment you try to explain it to someone else,
the gaps show up fast.

A few things I want to write about here:

- Small back-end patterns that quietly make systems easier to live with
- The unglamorous parts of software — logging, migrations, boring tests
- Notes-to-self I'll want to find again in six months

> The best code is the code you can still understand at 2am during an incident.

## How this works

There's no fancy CMS behind this page. Each article is just a Markdown file in
the repo. To publish a new one, I drop a file like
`2026-08-01-some-title.md` into `src/content/blog/` — and it shows up here
automatically.

```bash
# publishing a new post is literally this
git add src/content/blog/2026-08-01-some-title.md
git commit -m "New post"
git push
```

Simple, durable, and it'll outlive whatever framework is trendy this year.

That's it for the first one. More soon.
