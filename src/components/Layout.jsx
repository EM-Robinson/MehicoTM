import React from "react";
import NavBar from "./NavBar.jsx";

function Layout({ children, currentPath }) {
  return (
    <>
      <NavBar currentPath={currentPath} />
      <main className="main-container">{children}</main>
      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Elijah — leveling up everything.</span>
          <div className="footer-links">
            {/* Replace with your real links */}
            <a className="footer-link" href="https://github.com/EM-Robinson" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="footer-link" href="https://www.youtube.com/@xMEHICOx" target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a className="footer-link" href="https://www.tiktok.com/@elijahr_" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a className="footer-link" href="mailto:EM.Robinson109@gmail.com">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;