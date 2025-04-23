"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MapCard() {
  const [showButtons, setShowButtons] = useState(false);

  const address = "1600 Amphitheatre Parkway, Mountain View, CA"; // Example address

  // Function to generate Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

  // Function to generate Apple Maps URL
  const appleMapsUrl = `https://maps.apple.com/?daddr=${encodeURIComponent(
    address
  )}`;

  return (
    <div
      className="w-full max-w-xs mx-auto flex flex-col items-center justify-center space-y-4 transition-all duration-300"
      onClick={() => setShowButtons((prev) => !prev)} // Toggle buttons visibility
    >
      <motion.div
        whileTap={{ y: -20 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>

      <AnimatePresence>
        {showButtons && (
          <div className="space-y-4">
            <motion.a
              href={googleMapsUrl} // Link to Google Maps
              target="_blank"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="px-4 py-2 bg-fern-green text-white rounded-lg shadow-lg transition"
            >
              Google Maps
            </motion.a>

            <motion.a
              href={appleMapsUrl} // Link to Apple Maps
              target="_blank"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="px-4 py-2 bg-cocoa-brown text-white rounded-lg shadow-lg transition"
            >
              Apple Maps
            </motion.a>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
