import { useContext } from "react";
import { useCart } from "../context/CartContext";

export default function CoffeeCard({ coffee }) {
  const { addToCart } = useCart();
  return (
    <div className="bg-white-smoke border border-taupe rounded-lg p-4 shadow-md w-[300px] mx-auto">
      <div className="mb-4">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <h3 className="text-xl text-cocoa-brown font-semibold mb-2">
        {coffee.name}
      </h3>
      <p className="text-sm font-semibold text-taupe text-gray-600 mb-1">
        {coffee.desc}
      </p>
      <p className="text-sm text-fern-green text-gray-600">
        Location: {coffee.location || "N/A"}
      </p>
      <p className="text-sm text-fern-green">
        Elevation: {coffee.elevation || "N/A"}
      </p>
      <p className="text-sm text-fern-green">
        Process: {coffee.process || "N/A"}
      </p>
      <p className="text-sm text-fern-green">
        Variety: {coffee.variety || "N/A"}
      </p>
      <div className="pt-2 flex justify-center items-center">
        <p className="text-lg px-8 font-bold text-cocoa-brown">
          {coffee.price}
        </p>
        <button
          className="bg-cocoa-brown hover:bg-desert-sand text-white font-bold py-2 px-8 rounded-full"
          onClick={() => addToCart(coffee)}
        >
          Buy
        </button>
      </div>
    </div>
  );
}
