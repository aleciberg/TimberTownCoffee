import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      /* <Route path="/shop" element={<Shop />} />
      {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
