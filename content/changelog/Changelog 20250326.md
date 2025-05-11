+++
title = "Website Changelog[2025.03.26]"
description = "Creating a TOC"
date = 2025-03-26T11:10:00+08:00
draft = false
in_search_index=true
[taxonomies]
tags = ["changelog"]
[extra]
keywords = "网站，网站搭建"
toc = true
path = "changelog0326"
+++

When writing book notes on my blog, I wanted every post to include a **Table of Contents (TOC)** that:

- Stays **sticky on the left** as a sidebar on desktop
- Appears **inline at the top** on mobile
- Uses Zola’s **built-in [`page.toc`](https://www.getzola.org/documentation/content/table-of-contents/) system** — not `{{ toc }}` in Markdown

---

## What I Wanted

- Auto TOC from Markdown headings (`##`, `###`)
- Sticky sidebar layout on desktop
- Inline TOC above the article on mobile
- Clean layout with no macro hassle

---

## What Didn't Work

At first, I tried:

```md
{{ toc }}
```

But this showed up as **plain text** — Zola doesn’t process Tera templates in Markdown unless `render = true`, which still isn’t reliable across themes.

---

## What I Did Instead

Fixed the issue by **not using `{{ toc }}` at all** and switching to Zola’s official `page.toc` system — and **edited layout file** directly.

---

## What I Changed (Files + Code)

### 1. File Edited: `templates/post.html`

I added this TOC block **twice** in `post.html`:

#### Sticky Sidebar TOC (Desktop only)

```jinja
<aside class="post-toc toc-desktop">
  <nav class="toc">
    <h2> Table of Content</h2>
    <ul>
      {% for h1 in page.toc %}
      <li>
        <a href="{{ h1.permalink | safe }}">{{ h1.title }}</a>
        {% if h1.children %}
        <ul>
          {% for h2 in h1.children %}
          <li><a href="{{ h2.permalink | safe }}">{{ h2.title }}</a></li>
          {% endfor %}
        </ul>
        {% endif %}
      </li>
      {% endfor %}
    </ul>
  </nav>
</aside>
```

#### Inline TOC (Mobile only)

Placed inside the article content:

```jinja
<div class="toc-mobile">
  <nav class="toc"> ...same structure as above... </nav>
</div>
```

---

### 2. SCSS Styling

In CSS or SCSS, I added:

```scss
/* Layout responsiveness */
.post-layout {
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.post-toc {
  width: 250px;
  position: sticky;
  top: 2rem;
  height: calc(100vh - 4rem);
  overflow-y: auto;
}

/* Show/hide TOC sections */
.toc-desktop {
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
}

.toc-mobile {
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 1.5rem;
  }
}
```
## Is this necessary?
I added a TOC because my “Book to Quote” page had become overwhelming — too long to scroll through easily. But it also made me question whether a blog post is the right format for something so dense. Is there a better way to present book notes?

Just pasting all my highlights feels unstructured and hard to follow. It’s more like an archive than a readable piece. So I’m starting to ask myself:

*What am I really trying to preserve by posting these notes?*

Is it memory? Searchability? Inspiration for future writing? Once I’m clear on that, the format can follow.