'use client';
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { nearbyPlaces, connectivityFeatures, projectAddress } from '@/data/locationData';

const LocationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsVisible(entry.isIntersecting)),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="location"
      className="py-24 px-4 lg:px-10 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-16 right-10 w-24 h-24 bg-gold-400/10 rounded-full blur-2xl" />
      </div>

      {/* Header */}
      <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="bg-gold-100 text-gold-700 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
          Location Advantage
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-6 font-playfair">
          Embrace the Best <span className="text-gold-400">Location</span> in Town
        </h2>
        <p className="text-white/80 mt-4 leading-relaxed">
          Situated at a premium spot in Gandhinagar with unbeatable access to all essentials.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Map Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-800 h-[480px]">
            <iframe
              src={projectAddress.mapIframeSrc}
              className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-5 left-5 bg-white/90 text-slate-800 rounded-xl px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold">{projectAddress.name}</p>
              <p className="text-xs">{projectAddress.addressLine1}</p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-gold-500 to-gold-600 p-5 rounded-xl shadow-lg">
            <div className="flex gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Address</h4>
                <p className="text-white/90 text-sm whitespace-pre-line">{projectAddress.fullAddress}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
          {/* Connectivity Features */}
          <div className="mb-10 space-y-5">
            <h3 className="text-2xl font-bold text-gold-400 font-playfair">Connectivity Highlights</h3>
            {connectivityFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-slate-800/40 p-5 rounded-lg hover:bg-slate-800/60 transition">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-gold-500/10 rounded-full">
                      <Icon className="text-gold-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <ul className="list-disc pl-4 space-y-1 text-sm text-white/70">
                        {feature.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nearby Landmarks */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-gold-400 font-playfair">Nearby Essentials</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {nearbyPlaces.map((place, idx) => {
                const Icon = place.icon;
                return (
                  <div key={idx} className="flex items-center justify-between bg-slate-800/30 p-4 rounded-lg hover:bg-slate-800/50 transition group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gold-500/10 rounded-full group-hover:bg-gold-500/20">
                        <Icon className="text-gold-400 w-4 h-4" />
                      </div>
                      <span className="text-white/90 text-sm">{place.name}</span>
                    </div>
                    <span className="text-gold-400 text-xs">{place.distance}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white py-4 rounded-xl font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2">
              <Navigation className="w-5 h-5" />
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
