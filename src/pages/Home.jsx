import React from "react";
import { Link } from "react-router-dom";
import NicheCard from "../components/NicheCard.jsx";
import { getPosts } from "../blog/posts.js";

function Home() {
  const posts = getPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div>
          <div className="hero-kicker">Remote dev · creator in progress</div>
          <h1 className="hero-title">
            Hey, I’m <span className="hero-gradient">Elijah</span> — 
            I turn gaming, soccer, Pokémon, and code into projects.
          </h1>
          <p className="hero-body">
            I’m a remote engineer who plays adult league soccer, grinds Apex and EA FC,
            collects Pokémon, and builds tools + art around the things I love.
            This site is my hub for experiments, links, and build-in-public logs.
          </p>
          <div className="hero-tags">
            <span className="tag highlight">⚽ Adult league striker</span>
            <span className="tag">🎮 Apex / EA FC</span>
            <span className="tag">🃏 Pokémon collector</span>
            <span className="tag">💻 Automation & React</span>
          </div>
          <div className="hero-cta">
            <Link to="/blog">
              <button className="btn-primary">Read the journey</button>
            </Link>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-ghost">
                Follow the clips <span>↗</span>
              </button>
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <div className="hero-card-title">What lives here?</div>
          <p className="hero-card-body">
            A single place to track my progress, ship tiny tools, share templates,
            and link out to whatever I’m experimenting with across gaming, soccer,
            Pokémon, art and tech.
          </p>
          <div className="hero-pill-row">
            <span className="hero-pill">Build-in-public logs</span>
            <span className="hero-pill">Digital tools & templates</span>
            <span className="hero-pill">Stats dashboards (soon)</span>
            <span className="hero-pill">Art experiments</span>
          </div>
        </aside>
      </section>

      <section>
        <div className="section-title-row">
          <h2 className="section-title">Niches I’m exploring</h2>
          <p className="section-subtitle">
            Click into any lane to see what I’m building there.
          </p>
        </div>
        <div className="niche-grid">
          <NicheCard
            to="/gaming"
            emoji="🎮"
            title="Gaming"
            body="Apex, EA FC 26, loadouts, controller settings, clips, and tools I’m building to get better without no-lifing the game."
            meta="Grinding rank slowly but surely."
          />
          <NicheCard
            to="/soccer"
            emoji="⚽"
            title="Soccer"
            body="Adult league stats, 5K crossover training, drills, and eventually a small web app to track performances like a pro."
            meta="Sunday league merchant energy."
          />
          <NicheCard
            to="/pokemon"
            emoji="🃏"
            title="Pokémon"
            body="Collection logs, pack openings, grading plans, and experiments with trackers to make collecting feel like a portfolio."
            meta="Trying not to go broke on booster boxes."
          />
          <NicheCard
            to="/tech"
            emoji="💻"
            title="Tech & Tools"
            body="React apps, PowerShell & Azure automation, dashboards, and micro-tools that bring all these hobbies together."
            meta="Where the code and chaos lives."
          />
        </div>
      </section>

            <section style={{ marginTop: "2.25rem" }}>
        <div className="section-title-row">
          <h2 className="section-title">Featured: devlog</h2>
          <p className="section-subtitle">
            Posts about building this hub, shipping ideas, and breaking things on purpose.
          </p>
        </div>

        <div className="featured-devlog-card">
          <p className="featured-devlog-text">
            If you just want the “what I’m actually building” side of things,
            the devlog collects posts about coding, shipping, design tweaks,
            experiments, and all the behind-the-scenes stuff.
          </p>
          <Link to="/devlog">
            <button className="btn-primary" style={{ marginTop: "0.9rem" }}>
              View devlog posts →
            </button>
          </Link>
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section style={{ marginTop: "2.5rem" }}>
          <div className="section-title-row">
            <h2 className="section-title">Recent writing</h2>
            <p className="section-subtitle">
              Fresh posts from the build log.
            </p>
          </div>

          <div className="recent-posts">
            {recentPosts.map((post) => (
              <article key={post.slug} className="recent-post-card">
                <div className="recent-post-meta">
                  {post.date
                    ? new Date(post.date).toLocaleDateString()
                    : "No date"}
                </div>
                <h3 className="recent-post-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.summary && (
                  <p className="recent-post-summary">
                    {post.summary}
                  </p>
                )}

                {post.tags && post.tags.length > 0 && (
                  <div className="post-tags">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="post-tag post-tag-link"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          <div style={{ marginTop: "0.75rem" }}>
            <Link
              to="/blog"
              style={{ fontSize: "0.8rem", color: "var(--accent)" }}
            >
              View all posts →
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

export default Home;