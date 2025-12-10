import React, { useMemo, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { getPosts } from "../blog/posts.js";

function Blog() {
  const posts = getPosts();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const activeTag = searchParams.get("tag") || "all";

  // If we're on /devlog and no tag is set yet, default to build-log
  useEffect(() => {
    const isDevlog = location.pathname === "/devlog";

    if (isDevlog && !searchParams.get("tag")) {
      const next = new URLSearchParams(searchParams);
      next.set("tag", "build-log");
      setSearchParams(next);
    }
  }, [location.pathname, searchParams, setSearchParams]);

  // Collect all unique tags from posts
  const allTags = useMemo(() => {
    const tagSet = new Set();
    posts.forEach((post) => {
      (post.tags || []).forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, [posts]);

  const filteredPosts =
    activeTag === "all"
      ? posts
      : posts.filter((post) => post.tags?.includes(activeTag));

  const handleTagClick = (tag) => {
    const next = new URLSearchParams(searchParams);

    if (tag === "all") {
      next.delete("tag");
    } else {
      next.set("tag", tag);
    }

    setSearchParams(next);
  };

  return (
    <section>
      <h1 className="section-title">
        {location.pathname === "/devlog" ? "Devlog" : "Build log / blog"}
      </h1>
      <p className="section-subtitle">
        {location.pathname === "/devlog"
          ? "Posts about what I’m building, shipping, and breaking along the way."
          : "Short entries about what I’m working on, what I’m learning, and what I break along the way."}
      </p>

      {/* Tag filter row */}
      {allTags.length > 0 && (
        <div className="tag-filter-row">
          <button
            type="button"
            className={`tag-filter-button ${
              activeTag === "all" ? "active" : ""
            }`}
            onClick={() => handleTagClick("all")}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`tag-filter-button ${
                activeTag === tag ? "active" : ""
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div style={{ marginTop: "1.5rem" }}>
        {filteredPosts.length === 0 && (
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            No posts for this tag yet. I’ll probably break something here soon.
          </p>
        )}

        {filteredPosts.map((post) => (
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
              <Link to={`/blog/${post.slug}`} className="post-title-link">
                {post.title}
              </Link>
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

            {post.tags && post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="post-tag"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
