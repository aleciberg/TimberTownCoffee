import { useState } from "react";
import Layout from "../components/Layout";

export default function Cart() {
  const [customerCart, setCustomerCart] = useState([]); // thinking about state

  return (
    <Layout>
      <section>
        <div>Cart Page</div>
        <div>Display Cart Items Here</div>
      </section>
    </Layout>
  );
}
