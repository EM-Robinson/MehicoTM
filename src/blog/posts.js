import matter from "gray-matter";

// Import all markdown files in /src/posts as raw text
const modules = import.meta.glob("../posts/*.md", {
  eager: true,
  as: "raw",
});

/**
 * Parse all posts at build time.
 */
const allPosts = Object.entries(modules)
  .map(([path, rawContent]) => {
    const { data, content } = matter(rawContent);

    // path e.g. "../posts/why-i-built-this-hub.md"
    const slug = path.split("/").pop().replace(".md", "");

    return {
      slug,
      ...data, // title, date, summary, etc.
      content,
    };
  })
  .sort((a, b) => {
    // Newest first
    return new Date(b.date) - new Date(a.date);
  });

export function getPosts() {
  return allPosts;
}

export function getPostBySlug(slug) {
  return allPosts.find((post) => post.slug === slug);
}
