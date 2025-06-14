'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import slides from '@/data/heroSlides.json'; // Adjust path as needed

type Slide = {
  image: string;
  title: string;
  subtitle: string;
};

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const current = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide: Slide, index: number) => (
          <div
            key={index}
            ref={index === currentSlide ? heroRef : null}
            className={`absolute inset-0 w-full h-[120%] bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80 z-0" />

      <button onClick={prevSlide} className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button onClick={nextSlide} className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="animate-fade-in-up text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {current.title.split(' ').slice(0, -1).join(' ')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
              {current.title.split(' ').slice(-1)[0]}
            </span>
          </h1>
          <p className="animate-fade-in-up text-lg md:text-xl lg:text-2xl text-white/90 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            {current.subtitle}
          </p>
          <button className="group relative bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-medium tracking-wider uppercase transition-all duration-500 hover:bg-white hover:text-slate-900 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
            <span className="relative z-10">Explore Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gold-400 scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>

      <div className="absolute top-1/4 left-8 w-2 h-16 bg-gradient-to-b from-gold-400 to-transparent opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-8 w-2 h-16 bg-gradient-to-t from-gold-400 to-transparent opacity-60 animate-pulse"></div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
