import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Gaming from "./pages/Gaming.jsx";
import Soccer from "./pages/Soccer.jsx";
import Pokemon from "./pages/Pokemon.jsx";
import Tech from "./pages/Tech.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="app-root">
      <Layout currentPath={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/soccer" element={<Soccer />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;