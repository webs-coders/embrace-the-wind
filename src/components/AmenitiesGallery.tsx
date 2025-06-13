import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const AmenitiesGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const amenitySlides = [
    {
      id: '01',
      title: 'Lounge Area',
      description: 'Relax and unwind in our sophisticated lounge with premium furnishings and ambient lighting.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: '02',
      title: 'Game Room',
      description: 'Unwind with your close ones over a game of pool, or just relax watching your friends play!',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: '03',
      title: 'Party Hall',
      description: 'Host memorable celebrations in our elegant party hall with modern amenities.',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: '04',
      title: 'Fitness Center',
      description: 'State-of-the-art fitness equipment with panoramic city views to energize your workout.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: '05',
      title: 'Swimming Pool',
      description: 'Take a refreshing dip in our infinity pool overlooking the city skyline.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % amenitySlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + amenitySlides.length) % amenitySlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-slate-100 relative overflow-hidden"
      id="amenities-gallery"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Slider */}
        <div className="relative">
          {/* Slider Container */}
          <div className="relative h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
            {amenitySlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute left-8 lg:left-16 top-1/2 transform -translate-y-1/2 max-w-lg">
                  {/* Slide Number */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-slate-900" />
                    </div>
                    <span className="text-gold-400 font-bold text-lg">
                      {slide.id}/0{amenitySlides.length}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`font-playfair text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    {slide.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-lg text-white/90 leading-relaxed transition-all duration-1000 delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {amenitySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gold-400 scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {amenitySlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative group rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentSlide 
                  ? 'ring-4 ring-gold-400 scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-24 object-cover"
              />
              <div className={`absolute inset-0 transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gold-400/20' 
                  : 'bg-slate-900/40 group-hover:bg-slate-900/20'
              }`}></div>
              <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                {slide.id}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGallery;