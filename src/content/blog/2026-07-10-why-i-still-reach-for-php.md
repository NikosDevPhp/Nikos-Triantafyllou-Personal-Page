---
title: Why I Still Reach for PHP in 2026
date: 2026-07-10
summary: A quiet defense of a language everyone loves to dunk on — and why it keeps shipping real products.
tags: [php, backend, opinion]
---

Every year someone declares PHP dead, and every year a large chunk of the web
keeps running on it. At some point you have to ask whether the language is the
problem, or whether it's just *unfashionable*.

## The boring case for boring tools

I like tools that are **predictable**. When I open a mature PHP codebase, I
mostly know what I'm going to find:

1. A request comes in
2. A router sends it somewhere
3. Some code does a thing and returns a response

No magic, no fifteen layers of abstraction to trace before I can read the actual
logic. That predictability is worth a *lot* when you're the one carrying the
pager.

## Modern PHP is genuinely nice

If your mental model of PHP is stuck in 2010, it's worth a fresh look:

- Real types, enums, and readonly properties
- First-class attributes for metadata
- A fast, sane package ecosystem via Composer
- Frameworks like Laravel and Symfony that make the common path pleasant

```php
enum Status: string
{
    case Draft = 'draft';
    case Published = 'published';

    public function label(): string
    {
        return ucfirst($this->value);
    }
}
```

That's clean, typed, and honestly a joy to work with.

## It's not about the language

Here's the thing I keep coming back to:

> Users don't care what language your backend is written in. They care that it
> works, that it's fast enough, and that it doesn't lose their data.

PHP does all three, and it lets me ship. That's not nostalgia — it's just
choosing the tool that gets a reliable product in front of people.

Use whatever makes *you* productive. For a lot of what I build, that's still
this scrappy, unglamorous, endlessly practical language.
