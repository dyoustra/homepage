---
title: "Blog #2: Week of 19 Jan - 25 Jan"
description: "My experience with the past week's work"
date: 2026-01-25
tags: [cs-373-blogs]
---

![Danny Youstra headshot](/assets/headshot.jpg)

### Which concept from this week surprised you, challenged you, or finally “clicked”?

You know, I've rarely actually used Docker before. I'm the kind of person that loves the challenge of trying to get everything working locally and in my local environment, but it was cool to see how Docker can help replicate those environments for others and make them more portable.

### How did the collaborative quizzes help you understand the material - or show you what you still need to work on?

The part I enjoyed most about the collaborative quizzes was talking with the people around me. They weren't super challenging, but it was fun to get to know the people around me and to understand what possible misunderstandings/pitfalls could be.

### Did the programming challenge change how you think about solving problems under pressure?

Maybe not in changing exactly how I thought about it, but as always, its largely about just staying calm and not overthinking things!

#### What perspective did the assigned paper give you on real-world software engineering?

Build systems are an important part of real-world SWE! Sometimes, people's whole jobs are building systems that work (although much more complex) like that makefile we looked at.

#### Was there a moment of discovery, frustration, or teamwork this week that stands out?

I discovered how to properly use the gitlab CLI interface! pretty easy when everything is not just a command but an actual interactive cmd line interface, lit the glab commands!

#### Pick-of-the-week!

My pick of the week is [Inspect AI](https://inspect.aisi.org.uk/), an open-source framework for LLM evals! I'm currently using it to create a matrix of LLM evaluations that vary based on different evaluation sets and model deployment variants!

I've never been able to have a proper look into AI training until using this framework. After providing the eval set and model it will provide a very nice graphical representation of the results log, including test-by-test results, showing the structure of each correctness test, how it was graded, and when some "fuzzy" grading was implemented when the scoring phase was done by an AI. It's fascinating to see, but also to see how tests from seemingly related can produce such different results by model.

You're also able to create your own tests and evaluate them against a suite of models. If you have a commercial application with an AI harness, it's worth checking this framework out and creating some benchmarks for your agent tasks (like specific content generation) to see what the best model is for performance/cost relationship for your application!