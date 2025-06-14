import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Car, Train, Plane, School, Guitar as Hospital, ShoppingBag } from 'lucide-react';

const LocationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const nearbyPlaces = [
    { icon: School, name: 'Department of Law, University of Calcutta', distance: '2.5 km', type: 'education' },
    { icon: Hospital, name: 'Woodlands Hospital', distance: '3.2 km', type: 'healthcare' },
    { icon: ShoppingBag, name: 'City Centre Salt Lake', distance: '4.1 km', type: 'shopping' },
    { icon: Train, name: 'Bidhannagar Railway Station', distance: '1.8 km', type: 'transport' },
    { icon: Car, name: 'EM Bypass', distance: '0.5 km', type: 'connectivity' },
    { icon: Plane, name: 'Netaji Subhash Chandra Bose Airport', distance: '12 km', type: 'transport' }
  ];

  const connectivityFeatures = [
    { icon: Car, title: 'Major Roads', items: ['EM Bypass - 0.5 km', 'VIP Road - 3 km', 'Salt Lake Bypass - 2 km'] },
    { icon: Train, title: 'Railway Stations', items: ['Bidhannagar - 1.8 km', 'New Town - 4 km', 'Sealdah - 8 km'] },
    { icon: Plane, title: 'Airport', items: ['NSCB Airport - 12 km', 'Direct connectivity via VIP Road'] }
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-slate-900 text-white relative overflow-hidden"
      id="location"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gold-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Prime Location
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Strategic Location
            <span className="block text-gold-400">& Connectivity</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Located at the heart of Salt Lake, Kolkata with excellent connectivity to major business districts and lifestyle destinations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Map */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Google Map Embed */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-800 h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0123456789!2d88.4324!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjQiTiA4OMKwMjUnNTYuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                
                {/* Map Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
                
                {/* VIRAR Location Marker */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
                    <div>
                      <h4 className="font-bold text-slate-800">VIRAR</h4>
                      <p className="text-sm text-slate-600">52D, Bondel Road</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="mt-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-6 text-white">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Project Address</h3>
                    <p className="text-white/90 leading-relaxed">
                      52D, Bondel Road, Ballygunge Park,<br />
                      Ballygunge, Kolkata, West Bengal - 700019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Connectivity & Nearby Places */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Connectivity Features */}
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-gold-400 mb-6">
                Excellent Connectivity
              </h3>
              
              {connectivityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-gold-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-white mb-2">{feature.title}</h4>
                        <ul className="space-y-1">
                          {feature.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-white/70 text-sm flex items-center">
                              <div className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Nearby Places */}
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-gold-400 mb-6">
                Nearby Landmarks
              </h3>
              
              <div className="grid gap-4">
                {nearbyPlaces.map((place, index) => {
                  const IconComponent = place.icon;
                  return (
                    <div key={index} className="bg-slate-800/30 rounded-lg p-4 hover:bg-slate-800/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-colors duration-300">
                            <IconComponent className="w-4 h-4 text-gold-400" />
                          </div>
                          <span className="text-white/90 text-sm font-medium">{place.name}</span>
                        </div>
                        <span className="text-gold-400 text-sm font-semibold">{place.distance}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 rounded-lg font-semibold uppercase tracking-wider hover:from-gold-600 hover:to-gold-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;