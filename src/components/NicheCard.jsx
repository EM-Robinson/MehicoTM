import React from "react";
import { Link } from "react-router-dom";

function NicheCard({ to, emoji, title, body, meta }) {
  return (
    <Link to={to} className="niche-card">
      <div className="niche-header">
        <div className="niche-title">
          {title}
        </div>
        <div className="niche-emoji">{emoji}</div>
      </div>
      <p className="niche-body">{body}</p>
      {meta && <div className="niche-meta">{meta}</div>}
      <div className="niche-link">View more →</div>
    </Link>
  );
}

export default NicheCard;