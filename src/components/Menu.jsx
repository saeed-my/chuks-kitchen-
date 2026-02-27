import { useState } from "react";
import { MEALS, CATEGORIES } from "../data/meals.js";
import { MealCard } from "./Home.jsx";
import "./Menu.css";

export default function Menu({ addToCart, setScreen }) {
  const [activeCat, setActiveCat] = useState("All");
  const [sort, setSort] = useState("popular");

  const allCats = ["All", ...CATEGORIES];
  const filtered = activeCat === "All" ? MEALS : MEALS.filter(m => m.category === activeCat);

  return (
    <div className="menu-page">
      {/* ── MENU HERO ── */}
      <div className="menu-hero">
        <div className="menu-hero-bg">
          <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1400&q=80" alt="food" />
          <div className="menu-hero-overlay" />
        </div>
        <div className="container menu-hero-content">
          <div className="menu-logo">Chuks Kitchen</div>
          <h1>Explore Our Menu</h1>
          <p>Authentic Nigerian meals, made fresh daily by Mr. Chuks</p>
        </div>
      </div>

      <div className="container menu-body">
        {/* ── SIDEBAR ── */}
        <aside className="menu-sidebar">
          <div className="sidebar-section">
            <h4>Menu Categories</h4>
            <ul className="sidebar-cats">
              {allCats.map(cat => (
                <li key={cat}>
                  <button
                    className={`sidebar-cat-btn ${activeCat === cat ? "active" : ""}`}
                    onClick={() => setActiveCat(cat)}
                  >
                    {cat}
                    <span>{cat === "All" ? MEALS.length : MEALS.filter(m => m.category === cat).length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-section">
            <h4>Price Range</h4>
            <div className="price-range">
              <input type="range" min="1000" max="10000" defaultValue="6000" />
              <div className="price-range-labels"><span>₦1,000</span><span>₦10,000</span></div>
            </div>
          </div>
        </aside>

        {/* ── MAIN GRID ── */}
        <main className="menu-main">
          <div className="menu-main-header">
            <div>
              <h2>{activeCat === "All" ? "Popular" : activeCat}</h2>
              <p>{filtered.length} items</p>
            </div>
            <div className="sort-wrap">
              <label>Sort by:</label>
              <select value={sort} onChange={e => setSort(e.target.value)} className="sort-select">
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* popular section label */}
          {activeCat === "All" && (
            <>
              <div className="menu-section-label">🔥 Popular</div>
              <div className="menu-grid">
                {MEALS.slice(0, 3).map((meal, i) => (
                  <MealCard key={meal.id} meal={meal} addToCart={addToCart} setScreen={setScreen} delay={i} />
                ))}
              </div>
              <div className="menu-section-label">⭐ Chef's Specials</div>
              <div className="menu-grid">
                {MEALS.slice(3, 6).map((meal, i) => (
                  <MealCard key={meal.id} meal={meal} addToCart={addToCart} setScreen={setScreen} delay={i} />
                ))}
              </div>
              <div className="menu-section-label">🍲 Swallows &amp; Soups</div>
              <div className="menu-grid">
                {MEALS.filter(m => m.category === "Swallows & Soups").map((meal, i) => (
                  <MealCard key={meal.id} meal={meal} addToCart={addToCart} setScreen={setScreen} delay={i} />
                ))}
              </div>
            </>
          )}
          {activeCat !== "All" && (
            <div className="menu-grid">
              {filtered.map((meal, i) => (
                <MealCard key={meal.id} meal={meal} addToCart={addToCart} setScreen={setScreen} delay={i} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
