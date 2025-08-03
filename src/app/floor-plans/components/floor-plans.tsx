'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
import LegendSection from '@/components/LegendSection';

const TABS = ['All', 'Ground Floor', '3BHK & 4BHK', '18 & 19 Floor', 'Penthouse'] as const;
type TabType = typeof TABS[number];

const floorPlans = [
  { src: '/floor/floor1.jpg', alt: '1st and Typical Floor Plan', category: 'Ground Floor' },
  { src: '/floor/floor2.jpg', alt: '3BHK & 4BHK Unit Plan - Block A & B', category: '3BHK & 4BHK' },
  { src: '/floor/floor3.jpg', alt: '3BHK Unit Plan - Block C, D & E', category: '3BHK & 4BHK' },
  { src: '/floor/floor4.jpg', alt: '18th & 19th Floor Plan', category: '18 & 19 Floor'},
  { src: '/floor/floor5.jpg', alt: '4BHK Penthouse - Block A', category: 'Penthouse, ' },
  { src: '/floor/floor6.jpg', alt: '4BHK Penthouse - Block B', category: 'Penthouse' },
  { src: '/floor/floor7.jpg', alt: '4BHK Penthouse - Block C & D', category: 'Penthouse' },
  { src: '/floor/floor8.jpg', alt: '3BHK Penthouse - Block E1', category: 'Penthouse' },
  { src: '/floor/floor9.jpg', alt: '4BHK Penthouse - Block E2', category: 'Penthouse' },
  { src: '/floor/floor10.jpg', alt: 'Ground Floor', category: 'Ground Floor' },
  
];

export default function FloorPlansPage() {
  const [activeTab, setActiveTab] = useState<TabType>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPlans =
    activeTab === 'All'
      ? floorPlans
      : floorPlans.filter(plan => plan.category === activeTab);

  const selectedImage = selectedIndex !== null ? filteredPlans[selectedIndex] : null;

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredPlans.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredPlans.length) % filteredPlans.length);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex gap-4 mb-8 justify-center flex-wrap">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSelectedIndex(null);
            }}
            className={`px-4 py-2 rounded-full border transition-all duration-150 ${
              activeTab === tab
                ? 'bg-color-light-orange text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {filteredPlans.map((plan, index) => (
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

      <LegendSection />

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
