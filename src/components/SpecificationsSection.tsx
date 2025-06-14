import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Building, Home, Waves, Shield, Zap, Wifi, Wind } from 'lucide-react';

const SpecificationsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const specifications = {
    'Living & Dining Area': [
      { item: 'Floor', details: 'Vitrified tiles' },
      { item: 'Wall & Ceiling', details: 'Putty Primer' },
      { item: 'Windows', details: 'Aluminium windows' },
      { item: 'Doors', details: 'Engineered wood doors' },
      { item: 'Door Handle / Hardware', details: 'Concealed door handle & hinges' },
      { item: 'Base Skirting', details: 'Marble' },
      { item: 'Electrical', details: 'Concealed copper wiring with modular switches' },
      { item: 'HVAC', details: '1.5 tonne A/C point, Concealed Duct & Diffusers' },
      { item: 'Water Point', details: 'Point for RO provided' }
    ],
    'Guest Bedroom': [
      { item: 'Floor', details: 'Vitrified tiles/Wooden' },
      { item: 'Wall & Ceiling', details: 'Putty Primer' },
      { item: 'Windows', details: 'Aluminium windows' },
      { item: 'Doors', details: 'Engineered wood doors' },
      { item: 'Door Handle', details: 'Concealed door handle & hinges' },
      { item: 'Base Skirting', details: 'Marble' },
      { item: 'Wardrobe', details: 'Modular wardrobe with mirror & laminate finish' },
      { item: 'Electrical', details: 'Concealed copper wiring with modular switches' },
      { item: 'HVAC', details: '1.5 tonne A/C point, Concealed Duct & Diffusers' }
    ],
    'Kitchen': [
      { item: 'Floor', details: 'Anti-skid tiles' },
      { item: 'Wall & Ceiling', details: 'Dado upto 2 feet height' },
      { item: 'Wall Cladding', details: 'Putty Primer above Dado height' },
      { item: 'Windows', details: 'Aluminium windows' },
      { item: 'Doors', details: 'Engineered wood doors' },
      { item: 'Door Handle', details: 'Stainless Steel' },
      { item: 'Base Skirting', details: 'Granite/Marble' },
      { item: 'Kitchen Platform', details: 'Granite top with stainless steel sink' },
      { item: 'Wall & Dry Area', details: 'Ceramic Vitrified wall tiles' },
      { item: 'Plumbing', details: 'Hot water - Cold water' },
      { item: 'Electrical', details: 'Concealed copper wiring with modular switches' },
      { item: 'Exhaust', details: 'Provision for Exhaust fan' },
      { item: 'Chimney', details: 'Provision for Chimney' },
      { item: 'Electrical Points', details: 'Point shall be provided' },
      { item: 'Water Purifier', details: 'Point for water purifier' },
      { item: 'Microwave', details: 'Provision for microwave' }
    ],
    'Bathrooms': [
      { item: 'Floor', details: 'Anti-skid tiles' },
      { item: 'Wall Cladding', details: 'Dado - upto 7 feet height' },
      { item: 'Wall & Ceiling', details: 'Putty Primer above Dado height' },
      { item: 'Windows', details: 'Aluminium windows' },
      { item: 'Doors', details: 'Engineered wood doors' },
      { item: 'Door Handle', details: 'Stainless Steel' },
      { item: 'Base Skirting', details: 'Granite/Marble' },
      { item: 'Sanitary Ware', details: 'Standard make' },
      { item: 'CP Fittings', details: 'Standard make' },
      { item: 'Plumbing', details: 'Hot water - Cold water' },
      { item: 'Electrical', details: 'Concealed copper wiring with modular switches' },
      { item: 'Exhaust', details: 'Provision for Exhaust fan' },
      { item: 'Geyser Point', details: 'Point shall be provided' },
      { item: 'Mirror', details: 'Standard mirror' },
      { item: 'Bathroom', details: 'Western type with flush' },
      { item: 'Shower Panel', details: 'Panel type to be provided' }
    ]
  };

  const additionalSpecs = {
    'Structural Features': [
      { item: 'Foundation', details: 'RCC with earthquake resistant design' },
      { item: 'Building Material Etc.', details: 'Earthquake resistant structure' },
      { item: 'RERA Registration No.', details: 'WBRERA/P/KOL/2023/000146' },
      { item: 'Structural Compliance', details: 'As per NBC 2016' }
    ],
    'Electrical': [
      { item: 'Power', details: 'Adequate power for each apartment' },
      { item: 'Backup', details: '100% power backup for common areas' },
      { item: 'Wiring', details: 'Concealed copper wiring throughout' },
      { item: 'Switches', details: 'Modular switches and sockets' }
    ],
    'Plumbing': [
      { item: 'Water Supply', details: '24x7 water supply' },
      { item: 'Storage', details: 'Overhead and underground water tanks' },
      { item: 'Quality', details: 'Treated water supply' },
      { item: 'Sewage', details: 'STP for sewage treatment' }
    ],
    'Safety & Security': [
      { item: 'Fire Safety', details: 'Fire detection systems with sprinklers and firefighting equipment' },
      { item: 'CCTV', details: 'CCTV surveillance' },
      { item: 'Access Control', details: 'Video door phone system' },
      { item: 'Security', details: '24x7 manned security' }
    ],
    'Elevators': [
      { item: 'Passenger Lifts', details: 'High speed passenger lifts with destination control' },
      { item: 'Service Lift', details: 'Dedicated service lift' }
    ],
    'Connectivity': [
      { item: 'Internet', details: 'Fiber optic ready infrastructure' },
      { item: 'Cable TV', details: 'Cable TV infrastructure' },
      { item: 'Intercom', details: 'Video door phone connectivity' }
    ]
  };

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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden" id="specifications">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="VIRAR Specifications - Luxury Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className={`font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Specifications
            </h1>
            <p className={`text-xl text-white/90 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Discover the premium finishes and world-class amenities that define luxury living at VIRAR
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side - Building Image */}
          <div className={`lg:col-span-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="sticky top-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <Image
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="VIRAR Building Exterior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                    Bringing finesse to homes & lifestyles
                  </h3>
                  <div className="flex items-center space-x-4 text-white/80 text-sm">
                    <div className="flex items-center space-x-1">
                      <Building className="w-4 h-4" />
                      <span>B+G+18 Floors</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Home className="w-4 h-4" />
                      <span>48 Units</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Specifications */}
          <div className={`lg:col-span-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-12">
              {Object.entries(specifications).map(([category, items]) => (
                <div key={category} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-4">
                    <h3 className="font-playfair text-2xl font-bold text-white">{category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid gap-4">
                      {items.map((spec, index) => (
                        <div key={index} className="flex justify-between items-start py-3 border-b border-slate-100 last:border-b-0">
                          <span className="font-semibold text-slate-700 flex-1">{spec.item}</span>
                          <span className="text-slate-600 flex-1 text-right">{spec.details}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(additionalSpecs).map(([category, items]) => (
                  <div key={category} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-slate-800 px-6 py-4">
                      <h3 className="font-playfair text-xl font-bold text-white">{category}</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {items.map((spec, index) => (
                          <div key={index} className="space-y-2">
                            <h4 className="font-semibold text-slate-700">{spec.item}</h4>
                            <p className="text-slate-600 text-sm">{spec.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
                <h3 className="font-playfair text-3xl font-bold text-gold-400 mb-8 text-center">Key Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Building, title: 'Premium Construction', desc: 'Earthquake resistant RCC structure' },
                    { icon: Zap, title: '100% Power Backup', desc: 'Uninterrupted power supply' },
                    { icon: Waves, title: '24x7 Water Supply', desc: 'Treated water with storage tanks' },
                    { icon: Shield, title: 'Advanced Security', desc: 'CCTV surveillance & access control' },
                    { icon: Wifi, title: 'Smart Connectivity', desc: 'Fiber optic ready infrastructure' },
                    { icon: Wind, title: 'Climate Control', desc: 'Central AC with individual controls' }
                  ].map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="text-center group">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-colors duration-300">
                          <IconComponent className="w-8 h-8 text-gold-400" />
                        </div>
                        <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                        <p className="text-white/70 text-sm">{feature.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-center bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8">
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Get Complete Specifications</h3>
                <p className="text-white/90 mb-6">
                  Download our detailed brochure for comprehensive specifications and floor plans
                </p>
                <button className="bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-lg">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gold-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gold-300 rounded-full opacity-10"></div>
    </section>
  );
};

export default SpecificationsSection;
