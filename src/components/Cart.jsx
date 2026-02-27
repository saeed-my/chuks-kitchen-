import "./Cart.css";

export default function Cart({ cart, removeFromCart, updateQty, setScreen }) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = 800;
  const discount = 0;
  const total = subtotal + delivery - discount;

  if (cart.length === 0) return (
    <div className="cart-page">
      <div className="container-sm">
        <div className="cart-empty">
          <div className="empty-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Add some delicious meals from our menu to get started.</p>
          <button className="btn btn-orange" onClick={() => setScreen("menu")}>Browse Menu</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="cart-page">
      <div className="container">
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart-layout">
          {/* Items */}
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item fade-up">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-cat">{item.category}</p>
                  <p className="cart-item-price">₦{item.price.toLocaleString()}</p>
                </div>
                <div className="cart-item-right">
                  <div className="qty-ctrl">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <p className="cart-item-total">₦{(item.price * item.qty).toLocaleString()}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary — matches Figma "Order Summary" panel */}
          <div className="order-summary-card">
            <h3>Order Summary</h3>
            <div className="promo-row">
              <input className="input-field" placeholder="Enter Promo Code" />
              <button className="btn btn-orange">Apply</button>
            </div>
            <div className="summary-lines">
              <div className="summary-line"><span>Subtotal</span><span>₦{subtotal.toLocaleString()}</span></div>
              <div className="summary-line"><span>Delivery Fee</span><span>₦{delivery.toLocaleString()}</span></div>
              <div className="summary-line"><span>Discount</span><span style={{color:"var(--green)"}}>-₦{discount}</span></div>
              <div className="summary-line"><span>VAT</span><span>₦{Math.round(subtotal * 0.075).toLocaleString()}</span></div>
              <div className="summary-divider" />
              <div className="summary-line summary-total">
                <span>Total</span>
                <span>₦{(total + Math.round(subtotal * 0.075)).toLocaleString()}</span>
              </div>
            </div>
            <div className="special-instructions">
              <label className="input-label">Special Instructions for Restaurant</label>
              <textarea className="input-field" rows={3} placeholder="E.g. no salt, extra spicy, food to say my condolences, thank you carry." />
            </div>
            <button className="btn btn-orange btn-full proceed-btn" onClick={() => setScreen("checkout-delivery")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
