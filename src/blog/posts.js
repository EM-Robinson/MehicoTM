// src/blog/posts.js
import matter from "gray-matter";

// Import all markdown files in /src/posts as raw text
const modules = import.meta.glob("../posts/*.md", {
  eager: true,
  as: "raw",
});

/**
 * Normalize tags from frontmatter to always be an array of strings.
 * Supports:
 * - tags: ["a", "b"]
 * - tags: "a, b, c"
 * - tags: "singleTag"
 */
function normalizeTags(rawTags) {
  if (!rawTags) return [];

  if (Array.isArray(rawTags)) {
    return rawTags.map((t) => String(t).trim()).filter(Boolean);
  }

  // If it's a string: "a, b, c"
  if (typeof rawTags === "string") {
    return rawTags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }

  return [];
}

// Parse all posts at build time
const allPosts = Object.entries(modules)
  .map(([path, rawContent]) => {
    const { data, content } = matter(rawContent);

    const slug = path.split("/").pop().replace(".md", "");

    return {
      slug,
      title: data.title || slug,
      date: data.date || null,
      summary: data.summary || "",
      tags: normalizeTags(data.tags),
      content,
    };
  })
  .sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date) - new Date(a.date);
  });

export function getPosts() {
  return allPosts;
}

export function getPostBySlug(slug) {
  return allPosts.find((post) => post.slug === slug);
}