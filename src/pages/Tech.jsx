import React from "react";

function Tech() {
  return (
    <section>
      <h1 className="section-title">Tech & Tools 💻</h1>
      <p className="section-subtitle">
        The part of my brain that goes “what if I built a tool for this?” I write automation,
        build tiny web apps, hack together dashboards, and experiment with ways to bring data
        into the hobbies I love.
      </p>

      <div style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
        <p>Stuff I use a lot:</p>
        <ul style={{ marginTop: "0.5rem", marginLeft: "1.25rem", listStyle: "disc" }}>
          <li>React + Vite + Tailwind (sometimes)</li>
          <li>PowerShell for automation and scripting</li>
          <li>Azure for runbooks and cloud tooling</li>
          <li>GitHub Actions for deployments</li>
          <li>Cosmos DB / NoSQL experiments</li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
        <p>Projects I want to ship:</p>
        <ul style={{ marginTop: "0.5rem", marginLeft: "1.25rem", listStyle: "disc" }}>
          <li>Adult league stats dashboard (season view)</li>
          <li>Apex/FC rank progress tracker</li>
          <li>Pokémon collection inventory tool</li>
          <li>Template packs for automation and runbooks</li>
          <li>Digital planners for gaming training</li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
        <p>Build philosophy:
          Small tools > big ideas.
          I’d rather ship 10 tiny things that actually get used than chase one massive launch.
          Follow the curiosity. Ship the experiment.
        </p>
      </div>
    </section>
  );
}

export default Tech;
