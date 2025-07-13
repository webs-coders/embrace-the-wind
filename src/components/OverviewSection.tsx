import React, { useEffect, useRef, useState } from "react";
import { Building, Home, Download } from "lucide-react";
import Image from "next/image";
import BrochureFormModal from "./BrochureFormModal";

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
      className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
      id="overview"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gold-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gold-300 rounded-full opacity-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-[600px]">
                <Image
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury Interior - Embrace The Wind Classic Residence"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay with Embrace The Wind branding */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="font-playfair text-4xl font-bold text-white mb-2">
                  Embrace The Wind
                </h3>
                <div className="w-2 h-2 bg-gold-400 rounded-full inline-block"></div>
              </div>

              {/* Decorative gold circle */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gold-400 rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Section Label */}
            <div>
              <span className="inline-block px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Overview
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                Elegance at Every Corner!  World-Class 
                <span className="block text-gold-600">lifestyles!</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed">
              Elite 3 & 4 BHK residences with personal patios, 10.25 ft ceilings, and panoramic balconies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 py-8">
              {/* Total Units */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
                  <Home className="w-8 h-8 text-gold-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Total Units
                  </p>
                  <p className="text-2xl font-bold text-slate-800">
                    <span className="text-gold-600">352</span> (3 & 4 BHK)
                  </p>
                </div>
              </div>

              {/* Total Tower */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-gold-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Total Tower
                  </p>
                  <p className="text-2xl font-bold text-slate-800">
                    <span className="text-gold-600">5</span> (B+G+18)
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div> 
              <button onClick={() => setIsOpen(true)} className="group bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wider hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
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
