import "./Footer.css";

export default function Footer({ setScreen }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">Chuks Kitchen</div>
          <p>Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><button onClick={() => setScreen("home")}>Home</button></li>
            <li><button onClick={() => setScreen("menu")}>Explore</button></li>
            <li><button onClick={() => setScreen("orders")}>My Orders</button></li>
            <li><button onClick={() => setScreen("cart")}>Cart</button></li>
            <li><button onClick={() => setScreen("register")}>Account</button></li>
            <li><button onClick={() => setScreen("home")}>Contact</button></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li>+234 801 234 5678</li>
            <li>info@chukskitchen.com</li>
            <li>Support@truemindsltd.com</li>
            <li>123 Taste Blvd, Lagos, Nigeriat</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2020 Lift Media. All rights reserved.</span>
          <div className="footer-bottom-links">
            <button>Privacy Policy</button>
            <button>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
