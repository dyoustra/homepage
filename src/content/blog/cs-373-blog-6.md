---
title: "Blog #6: Week of 16 Feb - 22 Feb"
description: "My experience with the past week's work"
date: 2026-02-22
tags: [cs-373-blogs]
---

![Danny Youstra headshot](/assets/headshot.jpg)

### On the Exercise

The "range" implementation was a nice challenge to do in class. It's not a complete implementation, but from the fundamentals we implemented it's easy to see how we would extend it to include stuff like a custom step-size and backward ranging.

### On the Lectures

I'd say the lecture content was good to fill in some gaps in my knowledge of Python closure syntax and memory behavior this past week. Although as much as I enjoyed the content, I haven't enjoyed being yelled and cursed at as a member of the class during the lecture, particularly this past Wednesday. That was a moment of frustration that stands out that I hope gets better this coming week.

### On the Paper

I'm enjoying being introduced to the fundamentals of system design, especially tracing back to it's roots and history. This past paper helped put to words what I try to emphasize internally when creating and ordering my code and files.

### Pick of the week

Git is a much deeper source control tool than we give it credit for. One thing that's become much more popular in the past year is Git Worktrees, used in place of creating manual cloned copies of a repository to allow local work on multiple different checkouts of the same project, without interfering with eachother.

It's become super popular in use alongside Claude Code and other AI dev harnesses, which can all iterate on their own project thread/branch without having to worry about other parallel AI agents making modifications to their edits.

How do they work? You can imagine them as just manual clones of the same project into a different directory. But they actually share most of their data with the main repository clone, including history, commits, trees, and all other repository metadata. Metadata *specific* to the worktree is stored in .git/worktrees, where it shows which specific commit/branch is checked out, the `index` staging area, as well as the working directory itself. Meanwhile, from a filesystem perspective, all of this information looks like a regular, manual git clone. This is achieved through git-managed symbolic links that point back to the original repository. Actual current files are truly cloned, but the rest is symbolically linked.

For more on cool git features, check out this interesting blog post I found on HackerNews: https://nesbitt.io/2026/02/05/git-magic-files.html.