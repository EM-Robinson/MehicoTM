import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPostBySlug } from "../blog/posts.js";

function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section>
        <h1 className="section-title">Post not found</h1>
        <p className="section-subtitle">
          Either this post doesn’t exist yet or I broke something. Both are possible.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <Link to="/blog" style={{ fontSize: "0.85rem", color: "var(--accent)" }}>
            ← Back to blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div style={{ marginBottom: "0.75rem" }}>
        <Link to="/blog" style={{ fontSize: "0.8rem", color: "var(--accent)" }}>
          ← Back to blog
        </Link>
      </div>

      <h1 className="section-title">{post.title}</h1>
      {post.date && (
        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            marginTop: "0.2rem",
          }}
        >
          {new Date(post.date).toLocaleDateString()}
        </div>
      )}

      {post.summary && (
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            marginTop: "0.6rem",
          }}
        >
          {post.summary}
        </p>
      )}

      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "0.9rem",
          lineHeight: 1.6,
        }}
        className="blog-post-content"
      >
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </section>
  );
}

export default BlogPost;