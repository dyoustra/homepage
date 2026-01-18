# Personal Blog

My personal blog! Built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

## Features

- **Browse by tag** - Click any tag to find related posts
- **RSS feed** - Subscribe at `/rss.xml` for updates
- **Dark mode** - Follows your system preference
- **Fast** - Static HTML, no JavaScript required

## Stack

- **Astro 5** - Static site generator with content collections
- **Vercel** - Hosting with automatic deployments on push
- **Markdown** - Posts written in `.md` with YAML frontmatter

## How It Works

Posts live in `src/content/blog/` as markdown files. Astro's content collections validate frontmatter and generate static HTML at build time. Vercel watches the repo and redeploys on every push to main.

```
src/content/blog/*.md  →  astro build  →  static HTML  →  Vercel CDN
```

See [HOW-IT-WORKS.md](./HOW-IT-WORKS.md) for technical documentation.
