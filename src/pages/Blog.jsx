import React from "react";

const posts = [
  {
    id: 1,
    title: "Starting the hub",
    date: "2025-12-07",
    summary: "Why I’m building a single place to track my progress across gaming, soccer, Pokémon, art and tech.",
  },
  // add more later
];

function Blog() {
  return (
    <section>
      <h1 className="section-title">Build log / blog</h1>
      <p className="section-subtitle">
        Short entries about what I’m working on, what I’m learning, and what I broke along the way.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        {posts.map((post) => (
          <article key={post.id} style={{ marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              {new Date(post.date).toLocaleDateString()}
            </div>
            <h2 style={{ fontSize: "0.95rem", marginTop: "0.15rem" }}>{post.title}</h2>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                marginTop: "0.2rem",
              }}
            >
              {post.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
