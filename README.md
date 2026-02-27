Chuks Kitchen — Frontend Web App

Client: Mr. Chukwudi Okorie (Mr. Chuks)
Built by: TrueMinds Innovations Ltd
Type: Food Ordering & Customer Management UI
What Was Built

A responsive single-page food ordering interface replicating the provided Figma designs. All state is managed in React — no backend, no API, no authentication.

10 screens implemented:
Screen 	Description
Home 	Hero with food image, popular categories, Chef's Specials grid, promo banner
Menu/Explore 	Sidebar category filters, sorted meal grid, price range slider
Meal Detail 	Full item view, description, ratings, special instructions
Cart 	Item management, quantity controls, promo code, order summary
Delivery Details 	Address, delivery time, contact — Step 1 of checkout
Payment 	Card/Bank/Transfer tabs, card number form — Step 2
Card Loading 	Animated spinner while "processing"
Order Confirmed 	Success state with order ID
Login 	Split layout — food photo left, form right
Sign Up 	Split layout — food photo left, registration form right
My Orders 	Order history with status badges and reorder action
Tech Stack
Tool 	Reason
React + Vite 	Fast dev server, component structure, useState for routing & cart
Plain CSS 	Per-component .css files co-located with each component
Google Fonts 	Playfair Display (headings) + Inter (body) — matches Figma typography
Unsplash 	Real food photography via URL (no local assets needed)

No frameworks, no Tailwind, no CSS modules — as specified.
Project Structure

src/
├── App.jsx                     # Root — cart state, screen routing
├── main.jsx                    # Entry point
│
├── data/
│   └── meals.js                # Hardcoded meal data (12 items + categories)
│
├── styles/
│   └── global.css              # CSS variables, resets, shared utilities
│
└── components/
    ├── Navbar.jsx / .css       # Sticky nav — logo, links, cart badge, login btn
    ├── Footer.jsx / .css       # Dark brown footer matching Figma
    ├── Home.jsx / .css         # Landing page — hero, categories, specials, promo
    ├── Menu.jsx / .css         # Explore page — sidebar + meal grid
    ├── MealDetail.jsx / .css   # Individual meal view
    ├── Cart.jsx / .css         # Cart with order summary panel
    ├── Checkout.jsx / .css     # Delivery Details, Payment, Loading, Confirmation
    ├── Auth.jsx / .css         # Login + Sign Up (split layout)
    └── Orders.jsx / .css       # My Orders history


How to Run + deployment link

# 1. Create a new Vite + React project
npm create vite@latest chuks-kitchen -- --template react
cd chuks-kitchen

# 2. Delete the default src/ folder
# 3. Copy all files from this src/ folder into the project's src/

# 4. Install & run
npm install
npm run dev

Runs at http://localhost:5173
Deployed at https://chuks-kitchen-gray.vercel.app/
