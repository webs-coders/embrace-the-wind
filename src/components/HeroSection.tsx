'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import slides from '@/data/heroSlides.json';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const offset = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((s, i) => (
          <div
            key={i}
            ref={i === currentSlide ? heroRef : null}
            className={`absolute inset-0 w-full h-[120%] bg-cover bg-center transition-all duration-1000 ease-in-out 
              ${i === currentSlide 
                ? 'opacity-100 blur-0 scale-100' 
                : 'opacity-0 blur-md scale-105'}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 container mx-auto">
        <div className="max-w-4xl mx-auto space-y-6 transition-opacity duration-1000 ease-in-out">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {slide.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF8C00]">
              {slide.title.split(' ').slice(-1)[0]}
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light">
            {slide.subtitle}
          </p>
          <button className="group relative px-8 py-4 border-2 border-white text-white text-lg font-medium uppercase tracking-wider transition-all duration-500 hover:bg-white hover:text-[#1A1A1A] hover:scale-105 hover:shadow-xl">
            <span className="relative z-10">Explore Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded" />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-[#FFB300] scale-125' : 'bg-white/40 hover:bg-white/60'}`}
            />
          ))}
        </div>

        {/* Scroll Icon */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-6 w-2 h-16 bg-gradient-to-b from-[#FFB300] to-transparent opacity-60 animate-pulse" />
      <div className="absolute bottom-1/4 right-6 w-2 h-16 bg-gradient-to-t from-[#FFB300] to-transparent opacity-60 animate-pulse" />

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-10">
        <div
          className="h-full bg-gradient-to-r from-[#FF6A00] to-[#FF8C00] transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
