"use client";

import Image from "next/image";
import { useState } from "react";
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import LegendSection from "./LegendSection";

const allPlans = [
  { src: "/floor/floor1.jpg", alt: "1st & Typical Floor Plan", type: "3BHK" },
  { src: "/floor/floor2.jpg", alt: "3BHK & 4BHK - Block A & B", type: "4BHK" },
  { src: "/floor/floor3.jpg", alt: "3BHK - Block C, D & E", type: "3BHK" },
  { src: "/floor/floor4.jpg", alt: "18th & 19th Floor Plan", type: "3BHK" },
  { src: "/floor/floor5.jpg", alt: "4BHK Penthouse - Block A", type: "Penthouse" },
  { src: "/floor/floor6.jpg", alt: "4BHK Penthouse - Block B", type: "Penthouse" },
  { src: "/floor/floor7.jpg", alt: "4BHK Penthouse - Block C & D", type: "Penthouse" },
  { src: "/floor/floor8.jpg", alt: "3BHK Penthouse - Block E1", type: "Penthouse" },
  { src: "/floor/floor9.jpg", alt: "4BHK Penthouse - Block E2", type: "Penthouse" },
];

const filters = ["All", "3BHK", "4BHK", "Penthouse"];

export default function FloorPlansSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPlans =
    activeFilter === "All"
      ? allPlans
      : allPlans.filter((plan) => plan.type === activeFilter);

  const selectedImage =
    selectedIndex !== null ? filteredPlans[selectedIndex] : null;

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredPlans.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + filteredPlans.length) % filteredPlans.length
      );
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Floor Plans</h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              className={clsx(
                "px-4 py-2 rounded-full border text-sm font-medium transition",
                activeFilter === filter
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
              onClick={() => {
                setActiveFilter(filter);
                setSelectedIndex(null); // reset modal if filter changes
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Floor Plan Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {filteredPlans.map((plan, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow group transition"
            >
              <div
                className="cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={plan.src}
                  alt={plan.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain rounded"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <p className="text-sm text-gray-600">{plan.alt}</p>
                <a
                  href={plan.src}
                  download
                  className="text-sm inline-flex items-center gap-1 px-4 py-2 bg-color-light-orange text-white hover:scale-105 shadow-md hover:bg-color-orange"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
          <LegendSection/>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full h-full max-h-screen overflow-auto flex justify-center items-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full mt-8">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1600}
                height={1000}
                className="w-full h-auto object-contain rounded"
              />

              <div className="text-center mt-4 px-2">
                <p className="text-white text-sm mb-2">{selectedImage.alt}</p>
                <a
                  href={selectedImage.src}
                  download
                  className="inline-flex items-center gap-1 px-4 py-2 bg-color-light-orange text-white hover:scale-105 shadow-md hover:bg-color-orange"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
