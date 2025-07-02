"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { amenitySlides, AmenitySlide } from "@/data/amenitieData";

const AmenitiesGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % amenitySlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + amenitySlides.length) % amenitySlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      ref={sectionRef}
      id="amenities-gallery"
      className="relative overflow-hidden py-16 bg-slate-100"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Image Slider */}
        <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-xl">
          {amenitySlides.map((slide: AmenitySlide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

              {/* Slide Text */}
              <div className="absolute left-6 lg:left-16 top-1/2 -translate-y-1/2 max-w-lg space-y-4 text-white">
                {/* Number and Icon */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center">
                    <Play size={18} />
                  </div>
                  <span className="text-[#FF6A00] font-bold text-lg">
                    {slide.id}/0{amenitySlides.length}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-3xl lg:text-5xl font-bold transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {slide.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-white/90 text-base lg:text-lg transition-all duration-700 delay-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {slide.description}
                </p>
              </div>
            </div>
          ))}

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 hover:scale-110 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 hover:scale-110 transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {amenitySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-yellow-400 scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {amenitySlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative group overflow-hidden rounded-xl transition transform ${
                index === currentSlide
                  ? "ring-4 ring-yellow-400 scale-105"
                  : "hover:scale-105"
              }`}
            >
              <div className="relative w-full h-24">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`absolute inset-0 ${
                  index === currentSlide
                    ? "bg-yellow-400/20"
                    : "bg-black/40 group-hover:bg-black/30"
                } transition`}
              ></div>
              <span className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                {slide.id}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGallery;
