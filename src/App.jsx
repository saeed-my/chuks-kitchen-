import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import MealDetail from "./components/MealDetail";
import Cart from "./components/Cart";
import { DeliveryDetails, Payment, CardLoading, OrderConfirmed } from "./components/Checkout";
import { Login, Register } from "./components/Auth";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [cart, setCart] = useState([]);

  // screen can be a string or an object { name, meal }
  const screenName = typeof screen === "string" ? screen : screen.name;
  const screenMeal = typeof screen === "object" ? screen.meal : null;

  const addToCart = (item) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === item.id);
      if (ex) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  // Pages that don't show footer
  const noFooter = ["login", "register"];
  // Pages that don't show navbar
  const noNavbar = [];

  const showNavbar = !noNavbar.includes(screenName);
  const showFooter = !noFooter.includes(screenName);

  return (
    <div className="app">
      {showNavbar && (
        <Navbar screen={screenName} setScreen={setScreen} cartCount={cartCount} />
      )}

      <main style={{ flex: 1 }}>
        {screenName === "home" && <Home setScreen={setScreen} addToCart={addToCart} />}
        {screenName === "menu" && <Menu addToCart={addToCart} setScreen={setScreen} />}
        {screenName === "meal-detail" && (<MealDetail meal={screenMeal} addToCart={addToCart} setScreen={setScreen} />)}
        {screenName === "cart" && <Cart cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} setScreen={setScreen} />}
        {screenName === "checkout-delivery" && <DeliveryDetails setScreen={setScreen} cart={cart} />}
        {screenName === "checkout-payment" && <Payment setScreen={setScreen} cart={cart} />}
        {screenName === "checkout-loading" && <CardLoading setScreen={setScreen} />}
        {screenName === "checkout-success" && <OrderConfirmed setScreen={setScreen} />}
        {screenName === "login" && <Login setScreen={setScreen} />}
        {screenName === "register" && <Register setScreen={setScreen} />}
        {screenName === "orders" && <Orders setScreen={setScreen} />}
      </main>

      {showFooter && <Footer setScreen={setScreen} />}
    </div>
  );
}
