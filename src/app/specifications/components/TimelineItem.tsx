"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

// Define the Specification type inline here
interface SpecificationItem {
  item: string;
  details: string;
}

interface Specification {
  title: string;
  image: string;
  items: SpecificationItem[];
}

export default function TimelineItem({
  spec,
  index,
}: {
  spec: Specification;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative w-full lg:w-1/2 px-4 mb-12 ${isLeft ? "lg:pr-12 lg:ml-auto" : "lg:pl-12 lg:mr-auto"}`}
    >
      {/* Card */}
      <div
        className="relative bg-[#ffffff] border border-color-orange rounded-xl shadow-lg p-6 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Center Dot - now inside the card and vertically centered */}
        {/* <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-full lg:-left-10 w-6 h-6 bg-color-orange border-4 border-white rounded-full z-10 shadow-lg ms-[10px]" /> */}

        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-xl font-bold text-color-light-orange">{spec.title}</h3>
          <ChevronDown
            className={`text-black transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>

        {isOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 space-y-2 text-sm text-black"
          >
            {spec.items.map(({ item, details }, i) => (
              <li key={i}>
                <strong>{item}:</strong> {details}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  );
}
