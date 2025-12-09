# Elijah Hub — Personal Brand & Niche Hub

A small React site that acts as my **personal hub** for everything I’m into right now:

- 🎮 Gaming (Apex, EA FC, shooters, sports titles)
- ⚽ Soccer (adult leagues, pickup, 5Ks, training)
- 🃏 Pokémon (collecting, binders, potential tools)
- 💻 Tech & Tools (React, automation, dashboards, scripts)
- 🎨 Art experiments (Procreate, doodles, concepts) — coming soon

The goal is to have one place I own that links out to content, tools, experiments, and build-in-public logs across all these niches.

---

## ✨ Features

- **Custom link-in-bio style homepage** with my own design and copy  
- Dedicated pages for:
  - `/gaming`
  - `/soccer`
  - `/pokemon`
  - `/tech`
  - `/blog`
- Simple, modern **dark theme** with a gamer/tech vibe  
- Written in plain **React + React Router** with minimal dependencies  
- Easy to extend over time with:
  - blog posts
  - project sections
  - links to tools, dashboards, templates
  - embedded content

---

## 🧰 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) (build tooling / dev server)
- [React Router](https://reactrouter.com/) for client-side routing
- Plain CSS for styling (`src/styles.css`)

---

## 📂 Project Structure

```text
src/
  main.jsx          # React entry / Router wrapper
  App.jsx           # Defines routes & layout shell
  styles.css        # Global styles (dark theme, layout, cards)

  components/
    Layout.jsx      # Shared layout with navbar + footer
    NavBar.jsx      # Top navigation bar with links
    NicheCard.jsx   # Reusable card used on the home page

  pages/
    Home.jsx        # Main hub / landing page
    Gaming.jsx      # Gaming niche page
    Soccer.jsx      # Soccer niche page
    Pokemon.jsx     # Pokémon niche page
    Tech.jsx        # Tech & tools niche page
    Blog.jsx        # Simple blog / build log stub
