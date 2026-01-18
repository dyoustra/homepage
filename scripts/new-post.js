#!/usr/bin/env node
import { writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const title = process.argv[2];
if (!title) {
  console.error('Usage: npm run new "My Post Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const date = new Date().toISOString().split('T')[0];
const filepath = join(process.cwd(), 'src/content/blog', `${slug}.md`);

if (existsSync(filepath)) {
  console.error(`File already exists: ${filepath}`);
  process.exit(1);
}

const content = `---
title: ${title}
description:
date: ${date}
tags: []
draft: true
---

Write your content here...
`;

writeFileSync(filepath, content);
console.log(`Created: src/content/blog/${slug}.md`);
console.log('Set draft: false when ready to publish');
