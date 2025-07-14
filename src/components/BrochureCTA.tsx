"use client";

import { useState } from "react";
import BrochureFormModal from "@/components/BrochureFormModal";

const BrochureCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-400 text-white text-center p-12 rounded-3xl shadow-xl overflow-hidden">
        <h3 className="text-3xl font-playfair font-bold mb-4 drop-shadow-lg">Want Full Specs?</h3>
        <p className="text-white/90 mb-6 text-sm md:text-base max-w-xl mx-auto">
          Download the detailed brochure including all layouts, specifications, and architectural details of Embrace The Wind.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-color-orange px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 animate-pulse shadow-lg"
        >
          📄 Download Brochure
        </button>
      </div>

      {isOpen && <BrochureFormModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default BrochureCTA;
