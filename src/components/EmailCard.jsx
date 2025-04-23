"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmailCard() {
  const [showInput, setShowInput] = useState(false);

  return (
    <div
      className="w-full max-w-xs mx-auto flex flex-col items-center justify-center space-y-4 transition-all duration-300"
      onClick={() => setShowInput((prev) => !prev)}
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
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
      </motion.div>

      <AnimatePresence>
        {showInput && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            coffee@beans.com
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
