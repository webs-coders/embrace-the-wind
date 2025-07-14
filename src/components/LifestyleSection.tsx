'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import { floatingImages, lifestyleContent } from '@/data/lifestyleData';
import { useRouter } from 'next/navigation';

const LifestyleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
const router = useRouter();
  const handleClick = () => {
    router.push('/contact');
  };
  return (
    <section
      ref={sectionRef}
      id="lifestyle"
      className="relative py-24 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Floating Images */}
      {floatingImages.map((image, idx) => (
        <div
          key={idx}
          className={`absolute ${image.className} transition-all duration-700 ease-in-out hover:scale-110 hover:shadow-2xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            animation: isVisible ? `float 6s ease-in-out infinite ${image.delay}` : 'none',
          }}
        >
          <div className="relative group w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
            </div>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className={`font-playfair text-4xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {lifestyleContent.heading}
            <span className="block text-transparent bg-clip-text bg-color-orange">
              {lifestyleContent.highlight}
            </span>
          </h2>

          <p
            className={`text-lg md:text-xl text-slate-600 mb-8 font-light leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {lifestyleContent.subtext}
          </p>

          <button
            onClick={handleClick}
            className={`group relative bg-color-light-orange text-white px-8 py-4 rounded-full font-semibold text-lg tracking-wide transition-all duration-500 hover:from-yellow-600 hover:to-yellow-700 hover:scale-105 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'

            }`}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>{lifestyleContent.buttonLabel}</span>
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            </span>
            <div className="absolute inset-0 bg-color-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          </button>

          {/* Decorative Divider */}
          <div
            className={`mt-16 flex justify-center space-x-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <div className="w-3 h-3 bg-[#FF6A00] rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Large decorative title */}
      <div className="absolute bottom-8 right-8 opacity-5 pointer-events-none">
        <h3 className="font-playfair text-8xl md:text-9xl font-bold text-slate-800 rotate-12">
          Embrace The Wind
        </h3>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default LifestyleSection;
