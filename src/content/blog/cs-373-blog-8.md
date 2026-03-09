---
title: "Blog #8: Week of 2 Mar - 8 Mar"
description: "My experience with the past week's work"
date: 2026-03-08
tags: [cs-373-blogs]
---

![Danny Youstra headshot](/assets/headshot.jpg)

## On the Exam

Exam was pretty straightforward. 31 questions in 30 minutes is a bit of a squeeze, but I think I did well. I just reviewed all of the questions from the previous quizzes and was able to do well.

## On the Lectures

A lot of what we've covered in the past week's lectures were concepts used a lot in Swift, including function defaults, keywords, unpacking, tuples, and dictionaries. It was nice to see how these concepts are used in a different language and how they can be used to solve problems.

## On the Programming Problem

Simple enough! Sometimes It's difficult on Kattis to see what's going on when your solution is timing out. It can be helpful in these situations to imagine the adversarial case, with the largest input size, which should be provided in the problem statement, and manually write it to see if your solution can handle it. I will just manually write it (or generate it for a very large input size) and then run in a local python interpreter to see if my solution is correct, without having to worry about timing out. That way I can also trace through the execution of my program.

## Pick of the week

My pick of the week is [Claude Code's frontend design skill](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md). It's an available, first-party skill for Claude Code that allows you to design frontend UI/UX components and code them out in HTML, CSS, and JavaScript. After installing and enabling the skill, Claude Code will generate web and other UI designs that feel truly designed, not just defaulting to generic styling and patterns.

Another pick of the week is [Astro](https://astro.build/), a static site builder that allows you to build websites with a modern, component-based approach. It's a great way to build websites that are fast, secure, and easy to maintain. I actually built this blog with Astro! Astro differs itself by rendering components on the server side, rather than the client side, which is a more traditional approach. It then sends lightweight HTML files to the client, which are then rendered into the DOM by the browser. This is a great way to build websites that are fast, secure, and easy to maintain. Perhaps not the best choice for your IDB project, but for other projects, particularly JS compute heavy websites, it's a great choice.
