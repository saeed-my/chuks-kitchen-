import "./Orders.css";

const MOCK_ORDERS = [
  { id: "CK-7821", date: "27 Feb 2026", items: ["Jollof Rice & Fried Chicken", "Egusi Soup & Eba"], total: 8300, status: "Delivered" },
  { id: "CK-7654", date: "20 Feb 2026", items: ["Suya Skewers", "Pounded Yam & Oha Soup"], total: 7700, status: "Delivered" },
  { id: "CK-7401", date: "14 Feb 2026", items: ["Grilled Tilapia"], total: 5500, status: "Delivered" },
];

const STATUS_COLOR = { "Delivered": "green", "In Transit": "orange", "Preparing": "orange", "Cancelled": "red" };

export default function Orders({ setScreen }) {
  return (
    <div className="orders-page">
      <div className="container">
        <h2 className="orders-title">My Orders</h2>
        <p className="orders-sub">Track and review your order history</p>

        {MOCK_ORDERS.length === 0 ? (
          <div className="orders-empty">
            <div>📦</div>
            <h3>No orders yet</h3>
            <button className="btn btn-orange" onClick={() => setScreen("menu")}>Place First Order</button>
          </div>
        ) : (
          <div className="orders-list">
            {MOCK_ORDERS.map(order => (
              <div key={order.id} className="order-card fade-up">
                <div className="order-card-header">
                  <div>
                    <span className="order-id">Order {order.id}</span>
                    <span className="order-date">{order.date}</span>
                  </div>
                  <span className={`order-status ${STATUS_COLOR[order.status]}`}>{order.status}</span>
                </div>
                <div className="order-items">
                  {order.items.map(item => <span key={item} className="order-item-pill">{item}</span>)}
                </div>
                <div className="order-card-footer">
                  <span className="order-total">₦{order.total.toLocaleString()}</span>
                  <div className="order-actions">
                    <button className="btn btn-white order-action-btn" onClick={() => setScreen("menu")}>Reorder</button>
                    <button className="btn btn-orange order-action-btn" onClick={() => setScreen("checkout-success")}>View Receipt</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
