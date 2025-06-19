"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/galleryData";
import Image from "next/image";

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-cover bg-center bg-[url('/images/EMBRACETHEWIND1.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">Gallery</h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500 cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  priority={false}
                  quality={75}
                  loading="lazy"
                  height={400}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-gray-900 text-white text-sm px-4 py-2 text-center">
                  {image.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>

          {/* Prev */}
          <button
            onClick={showPrev}
            className="absolute left-4 text-white text-4xl font-bold"
          >
            ‹
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[80vh] flex items-center justify-center">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              width={1200}
              height={800}
              priority={false}
              quality={75}
              loading="lazy"
              className="rounded-xl object-contain max-h-[80vh] w-auto"
            />
          </div>

          {/* Next */}
          <button
            onClick={showNext}
            className="absolute right-4 text-white text-4xl font-bold"
          >
            ›
          </button>
        </div>
      )}

      {/* Amenities Section */}
      <AmenitiesGallery />

      <Footer />
      <SocialSidebar />
    </div>
  );
}
