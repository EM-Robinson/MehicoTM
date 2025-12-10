import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/gaming", label: "Gaming" },
  { to: "/soccer", label: "Soccer" },
  { to: "/pokemon", label: "Pokémon" },
  { to: "/tech", label: "Tech" },
  { to: "/blog", label: "Blog" },
  { to: "/devlog", label: "Devlog", variant: "devlog" },
];

function NavBar({ currentPath }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo">
          <div className="nav-avatar" />
          <div>
            <div className="nav-title">Elijah Robinson</div>
            <div className="nav-subtitle">
              Tech · Gaming · Soccer · Pokémon
            </div>
          </div>
        </div>
        <div className="nav-links">
          {links.map((link) => {
            const isActive =
              link.to === "/"
                ? currentPath === "/"
                : currentPath.startsWith(link.to);

            const classes = ["nav-link"];
            if (isActive) classes.push("active");
            if (link.variant === "devlog") classes.push("nav-link-devlog");

            return (
              <Link key={link.to} to={link.to} className={classes.join(" ")}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
