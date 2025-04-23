import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import products from "./products";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCoffees from "./components/FeaturedCoffees";
import About from "./components/AboutSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <FeaturedCoffees products={products} />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
