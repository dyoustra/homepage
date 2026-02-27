---
title: "Blog #7: Week of 23 Feb - 1 Mar"
description: "My experience with the past week's work"
date: 2026-02-27
tags: [cs-373-blogs]
---

![Danny Youstra headshot](/assets/headshot.jpg)

### On the Cache exercise

I thought the exercise this week was simple enough. The idea of a simple dictionary cache is fairly simple, it was more just a test of whether we understood the syntax and behavior of decorator functions and classes.

I had never really been properly introduced to Python decorators before, so this has actually been pretty interesting for me. Weird to think that types that are visually declared as classes can be changed in runtime to be a different type (functions) through deorators, even as a strongly typed language. It was initially unintuitive from a compiler perspective, as the token scanning should determine the initial, concrete type that doesn't vary for that identifier.

However, even if Python were statically typed, these decorators could still work. It has nothing to do with the dynamic nature of the type of the class, as the type of that function, "initially" a class, actually was always a function throughout the program's lifetime as soon as that identifier is mentioned. But hard to wrap your head around!

### On the problem

These problems, particularly last week's "Massive Card Game," are a good way to help yourself get ready for the type of quick, small-scope problem solving that's required to get through LeetCode-style technical programming interviews. I think the platform, Kattis, can be a little frusturating and outdated at times, but the problems are helpful, especially for learning how to solve in Python without the use of intellisense, AI, or autocorrect.

### Pick of the week

It's important to keep up with what's going on in the rapidly moving world of AI. This week, development is not technical but geopolitical, as the U.S. Department of War is attempting to coerce Anthropic to provide full, unrestricted use access to its frontier models. Dario Amodei, Anthropic's CEO, is resisting, coming to a head *today* which the U.S. has set as a deadline for Anthropic to capitulate or face government intervention, either in the form of a company-wide blacklist for security technology, or coercion into compliance.

The New York Times covers the story up to today well: https://www.nytimes.com/2026/02/27/us/politics/anthropic-military-ai.html

For a more technical discussion, see the comments on HackerNews: https://news.ycombinator.com/item?id=47173121

And a relevant pledge of solidarity from OpenAI and Google employees (the other two Frontier AI labs): https://notdivided.org/
