import { useState } from "react";
import "./Checkout.css";

// Step 1 — Delivery Details
export function DeliveryDetails({ setScreen, cart }) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <div className="checkout-page">
      <div className="container-sm">
        <CheckoutSteps step={1} />
        <div className="checkout-card">
          <h2>Delivery Details</h2>
          <div className="delivery-address-box">
            <p><strong>Home:</strong> 5 Chintam Nnadi, Victoria Island, Lagos</p>
            <p>Apt 4B, Opposite Mega Plaza</p>
            <button className="change-link">Change Address</button>
          </div>
          <div className="form-group">
            <label className="input-label">Delivery Time</label>
            <select className="input-field">
              <option>ASAP (25-35 min)</option>
              <option>In 1 hour</option>
              <option>Schedule for later</option>
            </select>
          </div>
          <div className="form-group">
            <label className="input-label">Delivery Instructions (Optional)</label>
            <textarea className="input-field" rows={3} placeholder="E.g. leave at the door, buzz intercom..." />
          </div>
          <div className="form-group">
            <label className="input-label">Contact Address</label>
            <input type="tel" className="input-field" placeholder="+234 801 234 5678" />
          </div>
          <div className="checkout-summary-mini">
            <span>Order Total</span>
            <strong>₦{(subtotal + 800).toLocaleString()}</strong>
          </div>
          <button className="btn btn-orange btn-full checkout-next" onClick={() => setScreen("checkout-payment")}>
            Proceed to Delivery →
          </button>
        </div>
      </div>
    </div>
  );
}

// Step 2 — Payment
export function Payment({ setScreen, cart }) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const [method, setMethod] = useState("card");
  return (
    <div className="checkout-page">
      <div className="container-sm">
        <CheckoutSteps step={2} />
        <div className="checkout-card">
          <h2>Payment</h2>
          <div className="pay-methods">
            <label className={`pay-method ${method === "card" ? "active" : ""}`}>
              <input type="radio" name="pay" value="card" checked={method==="card"} onChange={() => setMethod("card")} />
              E-Card
            </label>
            <label className={`pay-method ${method === "bank" ? "active" : ""}`}>
              <input type="radio" name="pay" value="bank" checked={method==="bank"} onChange={() => setMethod("bank")} />
              Bank
            </label>
            <label className={`pay-method ${method === "transfer" ? "active" : ""}`}>
              <input type="radio" name="pay" value="transfer" checked={method==="transfer"} onChange={() => setMethod("transfer")} />
              Transfer
            </label>
          </div>
          {method === "card" && (
            <div className="card-fields">
              <div className="form-group">
                <label className="input-label">Card Number</label>
                <input type="text" className="input-field" placeholder="1234 5678 9012 3456" maxLength={19} />
              </div>
              <div className="card-row">
                <div className="form-group">
                  <label className="input-label">Expiration Date</label>
                  <input type="text" className="input-field" placeholder="MM / YY" />
                </div>
                <div className="form-group">
                  <label className="input-label">CVV</label>
                  <input type="text" className="input-field" placeholder="•••" maxLength={3} />
                </div>
              </div>
              <div className="form-group">
                <label className="input-label">Name on card</label>
                <input type="text" className="input-field" placeholder="Full name as on card" />
              </div>
            </div>
          )}
          <div className="checkout-summary-mini">
            <span>Total to Pay</span>
            <strong>₦{(subtotal + 800).toLocaleString()}</strong>
          </div>
          <button className="btn btn-orange btn-full checkout-next" onClick={() => setScreen("checkout-loading")}>
            Pay ₦{(subtotal + 800).toLocaleString()}
          </button>
          <p className="secure-note">🔒 Secured by Paystack</p>
        </div>
      </div>
    </div>
  );
}

// Step 3 — Card Loading
export function CardLoading({ setScreen }) {
  setTimeout(() => setScreen("checkout-success"), 3000);
  return (
    <div className="checkout-page">
      <div className="container-sm">
        <div className="loading-card">
          <div className="loader-ring" />
          <h3>Processing Payment...</h3>
          <p>Please wait, do not close this page.</p>
        </div>
      </div>
    </div>
  );
}

// Step 4 — Order Confirmed
export function OrderConfirmed({ setScreen }) {
  const orderId = `#${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  return (
    <div className="checkout-page">
      <div className="container-sm">
        <div className="confirmed-card">
          <div className="confirmed-icon">✓</div>
          <h2>Order Placed Successfully!</h2>
          <p>Your delicious meal is being prepared. Head to the meal.</p>
          <div className="order-id-box">
            <p>Order {orderId} Confirmed</p>
          </div>
          <div className="confirmed-btns">
            <button className="btn btn-orange" onClick={() => setScreen("orders")}>Track Order</button>
            <button className="btn btn-white" onClick={() => setScreen("menu")}>Order More Food</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stepper
function CheckoutSteps({ step }) {
  const steps = ["Cart", "Delivery Details", "Payment", "Confirm"];
  return (
    <div className="checkout-steps">
      {steps.map((s, i) => (
        <div key={i} className={`ck-step ${i + 1 <= step ? "done" : ""} ${i + 1 === step ? "active" : ""}`}>
          <div className="ck-step-dot">{i + 1 < step ? "✓" : i + 1}</div>
          <span>{s}</span>
          {i < steps.length - 1 && <div className="ck-step-line" />}
        </div>
      ))}
    </div>
  );
}
