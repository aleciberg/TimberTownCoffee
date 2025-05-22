import { useContext, useState } from "react";
import Layout from "../components/Layout";
import CartTable from "../components/CartTable";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, addToCart, removeFromCart, getTotal } = useCart();
  return (
    <Layout>
      <section>
        <CartTable
          cart={cart}
          total={getTotal(cart)}
          removeFromCart={removeFromCart}
        />
      </section>
    </Layout>
  );
}
