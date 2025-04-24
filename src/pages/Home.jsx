import "../App.css";
import products from "../products";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import FeaturedCoffees from "../components/FeaturedCoffees";
import About from "../components/AboutSection";
import Contact from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <FeaturedCoffees products={products} />
        <About />
        <Contact />
      </Layout>
    </>
  );
}
