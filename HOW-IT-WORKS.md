# Personal Blog - How It Works

## Quick Start

```bash
npm install          # Install dependencies
npm run dev          # Start local server at localhost:4321
```

## Publishing Workflow

**The entire workflow is: write markdown, commit, push. That's it.**

```bash
# Create a new post
npm run new "My Post Title"

# Edit it
# src/content/blog/my-post-title.md

# When ready, set draft: false in frontmatter

# Deploy
git add .
git commit -m "new post"
git push
```

Vercel automatically rebuilds on every push to main.

---

## Project Structure

```
src/
├── content/
│   └── blog/           # YOUR POSTS GO HERE (.md files)
│       └── hello-world.md
├── content.config.ts   # Defines post schema (title, date, tags, etc.)
├── layouts/
│   ├── Base.astro      # Site wrapper (nav, styles)
│   └── Post.astro      # Blog post template
└── pages/
    ├── index.astro     # Homepage (shows 5 recent posts)
    └── blog/
        ├── index.astro # Blog listing page
        └── [id].astro  # Dynamic route for each post
```

---

## Writing Posts

### Frontmatter Schema

Every post needs this at the top:

```yaml
---
title: My Post Title        # Required
description: A brief desc   # Optional, shows in blog listing
date: 2025-01-18           # Required, YYYY-MM-DD
tags: [javascript, web]    # Optional
draft: true                # Optional, hides from listings
---
```

### Using the Helper Script

```bash
npm run new "My Amazing Post"
# Creates: src/content/blog/my-amazing-post.md
```

Posts are created as drafts. Set `draft: false` to publish.

### Manual Creation

Just create any `.md` file in `src/content/blog/`:

```bash
touch src/content/blog/my-post.md
```

The filename becomes the URL slug: `my-post.md` → `/blog/my-post`

---

## How the Pipeline Works

```
┌─────────────────────────────────────────────────────────────┐
│                    YOUR WORKFLOW                            │
│                                                             │
│   1. Add/edit .md file in src/content/blog/                 │
│   2. git commit && git push                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    VERCEL (automatic)                       │
│                                                             │
│   1. Detects push to main branch                            │
│   2. Runs `npm run build` (astro build)                     │
│   3. Deploys static files to CDN                            │
│   4. Live in ~30 seconds                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    BUILD PROCESS                            │
│                                                             │
│   Astro reads src/content/blog/*.md                         │
│         ↓                                                   │
│   Validates frontmatter against schema                      │
│         ↓                                                   │
│   Generates static HTML for each post                       │
│         ↓                                                   │
│   Outputs to dist/ folder                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Initial Deployment Setup

### 1. Create Git Repository

```bash
git init
git add .
git commit -m "initial commit"
```

### 2. Push to GitHub

```bash
gh repo create my-blog --public --source=. --push
# or manually create repo and push
```

### 3. Connect to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel auto-detects Astro - just click Deploy
4. Get your URL (e.g., `my-blog.vercel.app`)

### 4. Update Site URL

Edit `astro.config.mjs`:
```js
site: 'https://my-blog.vercel.app',
```

---

## Key Files Explained

| File | Purpose |
|------|---------|
| `src/content.config.ts` | Defines what fields posts can have |
| `src/pages/blog/[id].astro` | Renders individual posts |
| `src/layouts/Post.astro` | Post page styling/structure |
| `astro.config.mjs` | Astro + Vercel configuration |

---

## Customization

### Change Styles

Edit `src/layouts/Base.astro` - all CSS is in the `<style>` block at the bottom.

### Add New Pages

Create `.astro` files in `src/pages/`. File path = URL path:
- `src/pages/about.astro` → `/about`
- `src/pages/projects/index.astro` → `/projects`

### Add Fields to Posts

Edit `src/content.config.ts` to add new frontmatter fields:

```ts
schema: z.object({
  title: z.string(),
  // add new fields here
  featured: z.boolean().default(false),
}),
```

---

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run new "Title"` | Create new draft post |
