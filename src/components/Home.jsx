import { MEALS, CATEGORIES } from "../data/meals.js";
import "./Home.css";

const POPULAR_CATS = [
  { label: "Jollof Delights", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=300&q=75" },
  { label: "Swallow & Soups", img: "https://images.unsplash.com/photo-1567364816519-de0e39e00d06?w=300&q=75" },
  { label: "Grills & BBQ", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&q=75" },
  { label: "Sweet Treats", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&q=75" },
  { label: "Jollof Categories", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&q=75" },
  { label: "Jollof Categories", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&q=75" },
];

export default function Home({ setScreen, addToCart }) {
  const chefSpecials = MEALS.slice(0, 6);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/hero.png" alt="Nigerian food spread" />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">The Heart of Nigerian Home Cooking</h1>
          <p className="hero-sub">Homemade with passion, delivered fresh to your door.</p>
          <div className="hero-pills">
            <span>🌿 Freshly Prepared</span>
            <span>🏪 Support Local Business</span>
            <span>🚀 Fast &amp; Reliable Delivery</span>
          </div>
          <div className="hero-btns">
            <button className="btn btn-orange hero-btn-main" onClick={() => setScreen("menu")}>Start Your Order</button>
          </div>
        </div>
      </section>

     {/* SEARCH BAR */}
<section className="section">
  <div className="container">
    <div className="search-wrap">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder="Search for meals, soups, grills..."
        onChange={(e) => console.log(e.target.value)}
      />
      <button className="btn btn-orange search-btn" onClick={() => setScreen("menu")}>Search</button>
    </div>
  </div>
</section>

      {/* CHEF'S SPECIALS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Chef's Specials</h2>
            <button className="see-all" onClick={() => setScreen("menu")}>See all →</button>
          </div>
          <div className="meals-grid">
            {chefSpecials.map((meal, i) => (
              <MealCard key={meal.id} meal={meal} addToCart={addToCart} setScreen={setScreen} delay={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="promo-banner">
        <div className="container promo-inner">
          <div className="promo-text">
            <span className="promo-tag">🎉 New Addition</span>
            <h2>Introducing Our New Menu Additions!</h2>
            <p>Our chefs have crafted new seasonal favourites. Limited portions daily — order early!</p>
            <button className="btn btn-orange" onClick={() => setScreen("menu")}>Explore New Items</button>
          </div>
          <div className="promo-img">
            <img src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&q=80" alt="New menu" />
          </div>
        </div>
      </section>
    </div>
  );
}

export function MealCard({ meal, addToCart, setScreen, delay = 0 }) {
  return (
    <div
      className={`meal-card fade-up anim-delay-${Math.min(delay % 3 + 1, 3)}`}
      onClick={() => setScreen({ name: "meal-detail", meal })}
    >
      <div className="meal-img-wrap">
        <img src={meal.img} alt={meal.name} />
        {meal.tags[0] && <span className="meal-badge">{meal.tags[0]}</span>}
      </div>
      <div className="meal-card-body">
        <p className="meal-category">{meal.category}</p>
        <h4 className="meal-name">{meal.name}</h4>
        <p className="meal-desc">{meal.desc}</p>
        <div className="meal-meta">
          <span className="stars">★★★★★</span>
          <span className="meal-rating-num">{meal.rating}</span>
          <span className="meal-reviews">({meal.reviews})</span>
        </div>
        <div className="meal-card-footer">
          <span className="meal-price">₦{meal.price.toLocaleString()}</span>
          <button
            className="btn btn-orange add-btn"
            onClick={(e) => { e.stopPropagation(); addToCart(meal); }}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
