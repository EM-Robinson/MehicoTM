import React from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../blog/posts.js";

function Blog() {
  const posts = getPosts();

  return (
    <section>
      <h1 className="section-title">Build log / blog</h1>
      <p className="section-subtitle">
        Short entries about what I’m working on, what I’m learning, and what I
        break along the way. Less polished articles, more “here’s what actually
        happened this week.”
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        {posts.length === 0 && (
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            No posts yet. Once I start shipping more, they’ll show up here.
          </p>
        )}

        {posts.map((post) => (
          <article key={post.slug} style={{ marginBottom: "1.25rem" }}>
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              {post.date
                ? new Date(post.date).toLocaleDateString()
                : "No date"}
            </div>
            <h2
              style={{
                fontSize: "0.95rem",
                marginTop: "0.15rem",
              }}
            >
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            {post.summary && (
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  marginTop: "0.2rem",
                }}
              >
                {post.summary}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;