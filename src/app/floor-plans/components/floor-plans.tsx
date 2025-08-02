'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
import LegendSection from '@/components/LegendSection';

const floorPlans = [
  { src: '/floor/floor1.jpg', alt: '1st and Typical Floor Plan' },
  { src: '/floor/floor2.jpg', alt: '3BHK & 4BHK Unit Plan - Block A & B' },
  { src: '/floor/floor3.jpg', alt: '3BHK Unit Plan - Block C, D & E' },
  { src: '/floor/floor4.jpg', alt: '18th & 19th Floor Plan' },
  { src: '/floor/floor5.jpg', alt: '4BHK Penthouse - Block A' },
  { src: '/floor/floor6.jpg', alt: '4BHK Penthouse - Block B' },
  { src: '/floor/floor7.jpg', alt: '4BHK Penthouse - Block C & D' },
  { src: '/floor/floor8.jpg', alt: '3BHK Penthouse - Block E1' },
  { src: '/floor/floor9.jpg', alt: '4BHK Penthouse - Block E2' },
];

export default function FloorPlansPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage = selectedIndex !== null ? floorPlans[selectedIndex] : null;

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % floorPlans.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + floorPlans.length) % floorPlans.length);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {floorPlans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-lg shadow overflow-hidden flex flex-col"
          >
            <div
              className="relative w-full h-[400px] cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={plan.src}
                alt={plan.alt}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-contain"
              />
            </div>

            <div className="text-center text-sm text-gray-700 p-4">
              <p className="mb-2">{plan.alt}</p>
              <a
                href={plan.src}
                download
                className="inline-flex items-center gap-1 px-4 py-2 bg-color-light-orange text-white hover:scale-105 shadow-md hover:bg-color-orange"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
      <LegendSection/>
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
    </div>
  );
}
