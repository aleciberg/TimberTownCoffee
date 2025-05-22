import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        /* <Route path="/shop" element={<Shop />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
