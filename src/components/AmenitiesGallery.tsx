"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { amenitySlides, AmenitySlide } from "@/data/AmenitiesGallery_slider";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const AmenitiesGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const thumbnailSliderRef = useRef<HTMLDivElement>(null);

  const autoplayDelay = 4000;
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, autoplayDelay);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

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

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          perView: 3.5,
          spacing: 12,
        },
      },
    },
    slides: {
      perView: 5,
      spacing: 16,
    },
    mode: "free",
    rubberband: false,
  });

  useEffect(() => {
    const thumb = thumbnailSliderRef.current?.querySelector(
      `.keen-slider__slide:nth-child(${currentSlide + 1})`
    );
    if (thumb) {
      thumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentSlide]);

  return (
    <section
      ref={sectionRef}
      id="amenities-gallery"
      className="relative overflow-hidden py-12 sm:py-16 bg-slate-100"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Slider */}
        <div
          className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-xl"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {amenitySlides.map((slide: AmenitySlide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute left-4 sm:left-6 lg:left-16 top-1/2 -translate-y-1/2 max-w-lg space-y-4 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-color-light-orange text-black flex items-center justify-center">
                    <Play size={16} />
                  </div>
                  <span className="text-orange-500 font-bold text-sm sm:text-lg">
                    {slide.id}/0{amenitySlides.length}
                  </span>
                </div>
                <h3
                  className={`text-xl sm:text-3xl lg:text-5xl font-bold transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {slide.title}
                </h3>
                <p
                  className={`text-white/90 text-sm sm:text-base lg:text-lg transition-all duration-700 delay-300 ${
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
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1 sm:p-2 rounded-full hover:bg-white/30 hover:scale-110 transition"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1 sm:p-2 rounded-full hover:bg-white/30 hover:scale-110 transition"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {amenitySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-orange-400 scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div
          ref={(ref) => {
            thumbnailRef(ref);
            thumbnailSliderRef.current = ref;
          }}
          className="keen-slider mt-6 sm:mt-10 overflow-x-auto whitespace-nowrap"
        >
          {amenitySlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`keen-slider__slide relative group overflow-hidden rounded-xl transition-all transform min-w-[100px] sm:min-w-[120px] h-20 sm:h-24 ${
                index === currentSlide
                  ? "ring-4 ring-orange-300 scale-105"
                  : "hover:scale-105"
              }`}
            >
              <div className="relative w-full h-full">
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
                    ? "bg-orange-200/70"
                    : "bg-black/40 group-hover:bg-black/30"
                } transition`}
              />
              <span className="absolute bottom-1 left-1 text-white text-xs font-semibold">
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
