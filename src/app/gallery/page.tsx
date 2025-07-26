"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/galleryData";
import Image from "next/image";
import Masonry from 'react-masonry-css';

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
      <section className="relative h-[70vh] sm:h-[70vh] md:h-[100vh] w-full bg-cover bg-center bg-[url('/ResizedImages/EMBRACE_THE_WIND_07.jpg')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold drop-shadow-xl leading-tight max-w-4xl">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Take a visual tour of elegant spaces and inspiring lifestyle moments.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Gallery
          </h2>
          <Masonry
            breakpointCols={{
              default: 2,
              1100: 2,
              700: 1,
            }}
            className="flex gap-6"
            columnClassName="masonry-column"
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="mb-6 cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={0} // set to 0 to allow dynamic height
                  sizes="(max-width: 768px) 100vw, 600px"
                  loading="lazy"
                  quality={75}
                  className="w-full h-auto rounded-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </Masonry>
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
