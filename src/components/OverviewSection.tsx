"use client";

import React, { useEffect, useRef, useState } from "react";
import { Building, Home, Download } from "lucide-react";
import Image from "next/image";
import BrochureFormModal from "@/components/BrochureFormModal";

const OverviewSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
      id="overview"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 sm:w-24 sm:h-24 bg-gold-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gold-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gold-300 rounded-full opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Side - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[800px]">
                <Image
                  src="/ResizedImages/EMBRACE_THE_WIND_20.jpg"
                  alt="Luxury Interior - Embrace The Wind Classic Residence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <h3 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Embrace The Wind
                </h3>
                <div className="w-2 h-2 bg-color-orange rounded-full inline-block"></div>
              </div>
              <div className="absolute top-6 sm:top-8 left-6 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 bg-color-light-orange rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Section Label */}
            <div>
              <span className="inline-block px-4 py-2 bg-gold-100 text-color-orange rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
                Overview
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
              Elegance at Every Corner!{" "}
              <span className="block text-color-orange">
                World-Class Life Style!
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Elite 3 & 4 BHK residences with personal patios, 10.25 ft ceilings, and panoramic balconies.
            </p>

            {/* Additional Content - Enhanced UI */}
            <div
              className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="relative pl-4 border-l-4 border-color-orange">
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-slate-800 leading-snug">
                  You Deserve More Than a Home!
                </h3>
                <p className="mt-2 text-sm sm:text-base italic text-slate-500">
                  You Deserve a Landmark of Luxury!
                </p>
              </div>

              <div className="bg-slate-100 rounded-xl p-5 sm:p-6 shadow-inner border border-slate-200">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  Here, <span className="text-color-orange font-semibold">comfort</span> isn’t an amenity—it’s a feeling.
                  <br />
                  <span className="text-color-orange font-semibold">Luxury</span> isn’t a feature—it’s a way of life.
                  <br />
                  And every day feels like a quiet celebration of being home.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 py-4 sm:py-8">
              {/* Total Units */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-color-light-orange rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Total Units
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-slate-800">
                    <span className="text-color-orange">352</span> (3 & 4 BHK)
                  </p>
                </div>
              </div>

              {/* Total Tower */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-color-light-orange rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Total Tower
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-slate-800">
                    <span className="text-color-orange">5</span> (B+G+18)
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => setIsOpen(true)}
                className="group bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold uppercase tracking-wider hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <BrochureFormModal onClose={() => setIsOpen(false)} />}
    </section>
  );
};

export default OverviewSection;
