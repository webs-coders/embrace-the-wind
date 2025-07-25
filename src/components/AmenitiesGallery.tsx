"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Slider from "react-slick";
import { amenitySlides, AmenitySlide } from "@/data/AmenitiesGallery_slider";


const AmenitiesGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider refs for syncing
  const mainSliderRef = useRef<Slider>(null);
  const thumbSliderRef = useRef<Slider>(null);


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

  // Main slider settings
const mainSettings = {
  asNavFor: thumbSliderRef.current || undefined,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 800, // smoother transition
  beforeChange: (_: number, next: number) => {
    setCurrentSlide(next);
  },
};



  // Thumbnail slider settings
  const thumbnailSettings = {
  asNavFor: mainSliderRef.current || undefined,
  slidesToShow: 5,
  swipeToSlide: true,
  focusOnSelect: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
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
          <Slider {...mainSettings} ref={mainSliderRef}>
            {amenitySlides.map((slide: AmenitySlide) => (
              <div key={slide.id} className="relative h-[70vh] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute left-6 lg:left-16 top-1/2 -translate-y-1/2 max-w-lg space-y-4 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-color-light-orange text-black flex items-center justify-center">
                      <Play size={18} />
                    </div>
                    <span className="text-orange-500 font-bold text-lg">
                      0{slide.id}/0{amenitySlides.length}
                    </span>
                  </div>
                  <h3
                    className={`text-3xl lg:text-5xl font-bold transition-all ease-in-out duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {slide.title}
                  </h3>

                  <p
                    className={`text-white/90 text-base lg:text-lg transition-all ease-in-out duration-700 delay-200 ${
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
          </Slider>

          {/* Manual Arrows */}
          <button
            onClick={() => mainSliderRef.current?.slickPrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 hover:scale-110 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => mainSliderRef.current?.slickNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 hover:scale-110 transition"
          >
            <ChevronRight size={20} />
          </button>
          {/* Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {amenitySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => mainSliderRef.current?.slickGoTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-orange-400 scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Slider */}
        <div className="mt-8 relative">
          <Slider {...thumbnailSettings} ref={thumbSliderRef}>
            {amenitySlides.map((slide, index) => (
              <div key={slide.id} className="px-2">
                <div
                  className={`relative w-full h-[80px] rounded-xl overflow-hidden group cursor-pointer transition transform ${
                    index === currentSlide
                      ? "ring-4 ring-yellow-400 scale-105"
                      : "hover:scale-105"
                  }`}
                  onClick={() => mainSliderRef.current?.slickGoTo(index)}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 ${
                      index === currentSlide
                        ? "bg-color-light-orange/80"
                        : "bg-black/40 group-hover:bg-black/30"
                    } transition`}
                  />
                  <span className="absolute bottom-1 left-1 text-white text-xs font-semibold">
                    0{slide.id}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGallery;
