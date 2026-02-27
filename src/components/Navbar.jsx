import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ screen, setScreen, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (s) => { setScreen(s); setMenuOpen(false); };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-logo" onClick={() => navigate("home")}>
          <span className="logo-text">Chuks Kitchen</span>
        </div>

        {/* Desktop links */}
        <ul className="navbar-links">
          <li><button className={`nav-link ${screen === "home" ? "active" : ""}`} onClick={() => navigate("home")}>Home</button></li>
          <li><button className={`nav-link ${screen === "menu" ? "active" : ""}`} onClick={() => navigate("menu")}>Explore</button></li>
          <li><button className={`nav-link ${screen === "orders" ? "active" : ""}`} onClick={() => navigate("orders")}>My Orders</button></li>
          <li><button className={`nav-link ${screen === "register" ? "active" : ""}`} onClick={() => navigate("register")}>Account</button></li>
        </ul>

        <div className="navbar-actions">
          {cartCount > 0 && (
            <button className="cart-nav-btn" onClick={() => navigate("cart")}>
              🛒 <span className="cart-count">{cartCount}</span>
            </button>
          )}
          <button className="btn btn-orange" onClick={() => navigate("login")}>Login</button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(p => !p)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => navigate("home")}>Home</button>
          <button onClick={() => navigate("menu")}>Explore</button>
          <button onClick={() => navigate("orders")}>My Orders</button>
          <button onClick={() => navigate("register")}>Account</button>
          {cartCount > 0 && (
            <button onClick={() => navigate("cart")}>🛒 Cart ({cartCount})</button>
          )}
          <button className="mobile-login-btn" onClick={() => navigate("login")}>Login</button>
        </div>
      )}
    </nav>
  );
}