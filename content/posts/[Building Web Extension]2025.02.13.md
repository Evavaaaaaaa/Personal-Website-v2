+++
title = "Building Web Extension[2025.02.13]"
description = "Doing what I do"
date = 2025-02-13T23:52:00+08:00
draft = false
in_search_index=true
[taxonomies]
tags = ["BuildTools"]
[extra]
keywords = "web extension"
toc = true
+++

# What I Did Today

I used Cursor to build a web extension that allows an embedded ChatGPT (via iframe) to appear while reading articles online. The idea is to have AI support right there with you—without switching tabs or context.

---

## Why This?

At work, I often need to read research papers and double-check whether the information is still up to date. That means bouncing between the article, ChatGPT, Google, and sometimes multiple sources just to verify a single claim.

It gets tiring—and more importantly, it slows me down.

So I wanted to create a small tool that reduces this back-and-forth friction and helps me stay focused while boosting efficiency. Think of it like having a research assistant sitting next to you as you read.

---

## What Still Needs Fixing

Right now, I'm using the ChatGPT API to fetch responses inside the extension. But something’s not quite right.

Even though the extension seems to work, my ChatGPT API dashboard shows **zero usage**. So either:
- The requests aren’t going through properly,
- Or I’ve misconfigured something in the headers/auth,
- Or maybe I'm not using the right endpoint.

I’ll need to debug that next.

---

More to come once I sort out the API issue. But it’s been fun so far :)