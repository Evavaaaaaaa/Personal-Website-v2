+++
title = "HTML templates explained"
description = "Notes on HTML basic structure, key rules and many more"
date = 2025-03-16T21:59:00Z
draft = false

[taxonomies]
tags = ["Notes"]
[extra]
keywords = "website, git"
toc = true
+++


1. **HTML Basic Structure** - Think of it like nesting boxes:
```html
<div>           <!-- Big box starts -->
    <p>         <!-- Smaller box inside starts -->
        Text    <!-- Content goes here -->
    </p>        <!-- Smaller box ends -->
</div>          <!-- Big box ends -->
```

2. **Key Rules**:

- Every opening tag `<tag>` needs a closing tag `</tag>`

- Tags must be closed in reverse order of opening

- Indent nested elements for readability

3. **Common Elements**:
```html
<!-- Container elements -->
<div>    <!-- Generic container -->
<section><!-- Semantic section -->
<nav>    <!-- Navigation container -->

<!-- Text elements -->
<h1>     <!-- Main heading -->
<p>      <!-- Paragraph -->
<span>   <!-- Inline text -->

<!-- Links -->
<a href="url">Link text</a>

<!-- Lists -->
<ul>     <!-- Unordered list -->
    <li> <!-- List item -->
```

4. **Template Logic** in Zola:
```html
<!-- If statement -->
{% if condition %}
    <div>Show this if true</div>
{% endif %}

<!-- Variables -->
{{ variable_name }}

<!-- Loops -->
{% for item in items %}
    <div>{{ item }}</div>
{% endfor %}
```

5. **Real Example Breakdown**:
```html
<nav class="post-navigation">     <!-- Navigation container starts -->
    
    {% if page.lower %}          <!-- If previous post exists -->
        <a href="{{ page.lower.permalink }}" class="prev-post">  <!-- Link starts -->
            <span class="nav-label">← Previous</span>            <!-- Label starts and ends -->
            <span class="post-title">{{ page.lower.title }}</span><!-- Title starts and ends -->
        </a>                      <!-- Link ends -->
    {% endif %}                   <!-- End if statement -->
    
</nav>                           <!-- Navigation container ends -->
```

6. **Common Mistakes to Avoid**:
```html
<!-- ❌ Wrong: Tags not properly nested -->
<div><span></div></span>

<!-- ✅ Correct: Proper nesting -->
<div><span></span></div>

<!-- ❌ Wrong: Missing closing tag -->
<div>
    <p>Text
</div>

<!-- ✅ Correct: All tags closed -->
<div>
    <p>Text</p>
</div>
```

7. **Standard Semantic Containers** (Built-in meaningful names):
```html
<header>  <!-- Page/section header -->
<nav>     <!-- Navigation -->
<main>    <!-- Main content -->
<article> <!-- Complete, self-contained content -->
<section> <!-- Thematic grouping -->
<aside>   <!-- Sidebar/supplementary content -->
<footer>  <!-- Page/section footer -->
```

8. **Custom Container Naming** (Using classes/IDs):
```html
<!-- Common naming patterns -->
<div class="container">      <!-- Main wrapper -->
<div class="content">       <!-- Content area -->
<div class="sidebar">       <!-- Side content -->
<div class="post">         <!-- Blog post -->
<div class="post-header">  <!-- Post header -->
<div class="post-content"> <!-- Post content -->
<div class="post-footer">  <!-- Post footer -->
```

10. **Naming Conventions**:
```html
<!-- Component-based naming -->
<div class="card">
    <div class="card-header">
    <div class="card-body">
    <div class="card-footer">

<!-- Feature-based naming -->
<div class="search-box">
    <div class="search-input">
    <div class="search-results">

<!-- Layout-based naming -->
<div class="grid">
    <div class="grid-item">
<div class="flex-container">
    <div class="flex-item">
```
<!-- ✅ Good: Clear hierarchy -->
<article class="post">
    <header class="post-header">
    <div class="post-content">
    <footer class="post-footer">

<!-- ❌ Bad: Unclear/generic names -->
<div class="box1">
<div class="content1">
<div class="stuff">

<!-- ✅ Good: Descriptive names -->
<div class="featured-products">
<div class="user-profile">
<div class="comment-section">


Key Rules:

1. Use descriptive, meaningful names

2. Be consistent with your naming pattern

3. Use hyphens for multi-word classes

4. Consider using naming methodologies like BEM

5. Keep names relevant to content/function