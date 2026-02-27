import "./MealDetail.css";

export default function MealDetail({ meal, addToCart, setScreen }) {
  if (!meal) { setScreen("menu"); return null; }

  return (
    <div className="meal-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => setScreen("menu")}>← Back to Menu</button>

        <div className="meal-detail-grid">
          {/* Image */}
          <div className="detail-img-wrap">
            <img src={meal.img} alt={meal.name} />
            {meal.tags[0] && <span className="detail-badge">{meal.tags[0]}</span>}
          </div>

          {/* Info */}
          <div className="detail-info">
            <p className="detail-category">{meal.category}</p>
            <h1 className="detail-name">{meal.name}</h1>
            <div className="detail-rating">
              <span className="stars">★★★★★</span>
              <span>{meal.rating}</span>
              <span className="detail-reviews">({meal.reviews} reviews)</span>
            </div>
            <p className="detail-desc">{meal.desc}</p>

            <div className="detail-chips">
              <span>⏱ {meal.prepTime}</span>
              <span>🔥 Fresh daily</span>
              <span>📦 Packed hot</span>
            </div>

            <div className="detail-price-row">
              <span className="detail-price">₦{meal.price.toLocaleString()}</span>
            </div>

            <div className="detail-extras">
              <h4>Special Instructions</h4>
              <textarea
                className="input-field special-note"
                placeholder="E.g. no salt, extra spicy, food to say my condolences, thank you carry."
                rows={3}
              />
            </div>

            <div className="detail-actions">
              <button className="btn btn-orange btn-full detail-add" onClick={() => { addToCart(meal); setScreen("cart"); }}>
                Add to Cart — ₦{meal.price.toLocaleString()}
              </button>
              <button className="btn btn-white detail-back" onClick={() => setScreen("cart")}>
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
