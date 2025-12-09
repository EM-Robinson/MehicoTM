import React from "react";

function Soccer() {
  return (
    <section>
      <h1 className="section-title">Soccer ⚽</h1>
      <p className="section-subtitle">
        Adult league merchant energy. I play remote engineer by day and full-time Sunday league striker by night.
        This page will collect match stats, training logs, clips, and eventually a tiny dashboard to track everything.
      </p>

      <div style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
        <p>I’m currently focused on:</p>
        <ul style={{ marginTop: "0.5rem", marginLeft: "1.25rem", listStyle: "disc" }}>
          <li>Building match fitness after injury</li>
          <li>Balancing soccer with 5K training (pray for my hamstrings)</li>
          <li>Tracking goals, assists, minutes and performance ratings</li>
          <li>Learning to play smarter, not just faster</li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
        <p>Coming soon:</p>
        <ul style={{ marginTop: "0.5rem", marginLeft: "1.25rem", listStyle: "disc" }}>
          <li>Weekly match recaps (wins, losses, chaos)</li>
          <li>A public “season dashboard” as a web app</li>
          <li>Training drills I actually use</li>
          <li>Miles, distances and pace tracking</li>
          <li>Video clips (highlights & hilarious mistakes)</li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
        <p>Long term idea: I want to build a small tool for adult league players to track stats like pros.
        Every Sunday is a Champions League final. Let’s treat it that way.</p>
      </div>
    </section>
  );
}

export default Soccer;
