import React from "react";

function Gaming() {
  return (
    <section>
      <h1 className="section-title">Gaming 🎮</h1>
      <p className="section-subtitle">
        Apex, EA FC 26, shooters, sports titles, and whatever else I’m testing.
        This page will collect clips, notes, and tools I build to get better.
      </p>

      <div style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
        <p>Coming soon:</p>
        <ul style={{ marginTop: "0.5rem", marginLeft: "1.25rem", listStyle: "disc" }}>
          <li>Public controller settings & sensitivities</li>
          <li>Apex & EA FC improvement tracker templates</li>
          <li>Links to short-form clips + playlists</li>
          <li>Eventually: a tiny “rank progress” dashboard</li>
        </ul>
      </div>
    </section>
  );
}

export default Gaming;
