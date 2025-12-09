import React from "react";

function Pokemon() {
  return (
    <section>
      <h1 className="section-title">Pokémon 🃏</h1>
      <p className="section-subtitle">
        A grown adult with a binder full of cardboard dragons. I open packs, try not to go broke,
        and I’m building a few tools to track my collection like an actual investment portfolio.
      </p>

      <div style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
        <p>What I’m collecting:</p>
        <ul style={{ marginTop: "0.5rem", marginLeft: "1.25rem", listStyle: "disc" }}>
          <li>Scarlet & Violet era sets with art that hits</li>
          <li>Full arts and alt arts (painfully expensive)</li>
          <li>Cards worth grading with PSA</li>
          <li>Whatever shiny thing the internet told me to buy</li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
        <p>Coming soon:</p>
        <ul style={{ marginTop: "0.5rem", marginLeft: "1.25rem", listStyle: "disc" }}>
          <li>Pack opening clips + binder updates</li>
          <li>Template for tracking pulls and value over time</li>
          <li>Collection dashboard experiment (web app)</li>
          <li>Grading predictions vs reality</li>
          <li>Art projects inspired by favorite cards</li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
        <p>Future project: a simple tool where you scan a card, log condition, track estimated value,
        and it charts how the market moves. Basically, stalking Pokémon prices like stocks.</p>
      </div>
    </section>
  );
}

export default Pokemon;