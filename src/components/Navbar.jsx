import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-[#493B2A] text-white px-6 py-4 shadow-md relative z-50">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Timber Town Coffee
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li className="hover:text-amber-400 transition">Home</li>
          <li className="hover:text-amber-400 transition">Shop</li>
          <li className="hover:text-amber-400 transition">About</li>
          <li className="hover:text-amber-400 transition">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <ul className="md:hidden mt-4 px-6 py-4 bg-[#493B2A] space-y-4 text-sm font-medium">
          <li className="hover:text-amber-400 transition">Home</li>
          <li className="hover:text-amber-400 transition">Shop</li>
          <li className="hover:text-amber-400 transition">About</li>
          <li className="hover:text-amber-400 transition">Contact</li>
        </ul>
      )}
    </nav>
  );
}
