'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  MapPin,
  Navigation,
} from 'lucide-react';
import {
  nearbyPlaces,
  connectivityFeatures,
  projectAddress,
} from '@/data/locationData';

const handleGetDirections = () => {
  window.open(
    "https://maps.app.goo.gl/RAtgakuaKove6z6b8",
    "_blank"
  );
};
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
      id="location"
      ref={sectionRef}
      className="relative bg-slate-950 text-white px-4 py-24 lg:px-16 overflow-hidden"
    >
      {/* Title */}
      <div className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <span className="inline-block px-4 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold uppercase">
          Location Advantage
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-playfair font-extrabold leading-tight">
          Discover a <span className="text-gold-400">Premium Location</span>
        </h2>
        <p className="mt-4 text-white/70 text-lg">
          At the center of progress. Minutes from business, healthcare, shopping & more.
        </p>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Map */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
          <div className="relative h-[420px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src={projectAddress.mapIframeSrc}
              className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 bg-white text-slate-800 rounded-xl px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold">{projectAddress.name}</p>
              <p className="text-xs">{projectAddress.addressLine1}</p>
            </div>
          </div>

          {/* Address block */}
          <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-xl flex items-start gap-4">
            <MapPin className="w-6 h-6 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-1">Project Address</h4>
              <p className="text-sm whitespace-pre-line">{projectAddress.fullAddress}</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
          {/* Connectivity */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gold-400 font-playfair mb-4">
              Connectivity Highlights
            </h3>
            <div className="space-y-4">
              {connectivityFeatures.map((feature, idx) => {
                const Icon = feature.icon as React.FC<{ className?: string }>;
                return (
                  <div key={idx} className="flex gap-4 p-4 bg-slate-800/40 rounded-xl hover:bg-slate-800/60 transition">
                    <div className="p-3 bg-gold-500/10 rounded-full">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <ul className="list-disc pl-5 text-sm text-white/70 space-y-1">
                        {feature.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nearby */}
          <div>
            <h3 className="text-2xl font-bold text-gold-400 font-playfair mb-4">
              Nearby Essentials
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {nearbyPlaces.map((place, idx) => {
                const Icon = place.icon as React.FC<{ className?: string }>;
                return (
                  <div key={idx} className="flex items-center justify-between bg-slate-800/30 p-4 rounded-xl hover:bg-slate-800/50 transition group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gold-500/10 rounded-full group-hover:bg-gold-500/20">
                        <Icon className="w-4 h-4 text-gold-400" />
                      </div>
                      <span className="text-white/90 text-sm">{place.name}</span>
                    </div>
                    <span className="text-gold-400 text-xs">{place.distance}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <button onClick={handleGetDirections} className="mt-8 w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white py-4 rounded-xl font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2">
            <Navigation className="w-5 h-5" />
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
