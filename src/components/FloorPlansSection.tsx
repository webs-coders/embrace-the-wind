import React, { useEffect, useRef, useState } from 'react';
import { Download, MapPin, Car, TreePine, Home, Shield, Waves } from 'lucide-react';

const FloorPlansSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Master Plan');

  const planTabs = [
    'Master Plan',
    'Club Level Plan',
    'Pool Level Plan',
    'Floor Plan Type A',
    'Floor PlanType B',
    'Floor Plan Type C'
  ];

  const legendItems = [
    { icon: MapPin, label: 'Entry / Exit', color: 'text-gold-500' },
    { icon: Home, label: 'Gate House', color: 'text-gold-500' },
    { icon: Car, label: 'Ramp DN To Basement', color: 'text-gold-500' },
    { icon: Car, label: 'Ramp UP From Basement', color: 'text-gold-500' },
    { icon: Home, label: 'Entrance Lobby', color: 'text-gold-500' },
    { icon: Home, label: 'Party Hall', color: 'text-gold-500' },
    { icon: TreePine, label: 'Party Lawn', color: 'text-gold-500' },
    { icon: Home, label: "Kid's Play Area", color: 'text-gold-500' },
    { icon: TreePine, label: 'Green Area', color: 'text-gold-500' },
    { icon: Shield, label: "Driver's Toilet", color: 'text-gold-500' },
    { icon: Home, label: 'Services', color: 'text-gold-500' },
    { icon: Car, label: 'Covered Parking', color: 'text-gold-500' },
    { icon: Car, label: 'Open Parking', color: 'text-gold-500' }
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
      className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
      id="floor-plans"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gold-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gold-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold-300 rounded-full opacity-10"></div>
      
      {/* Large decorative gold circle */}
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gold-400 rounded-full opacity-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Sidebar - Plan Navigation */}
          <div className={`lg:col-span-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {planTabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full px-6 py-4 text-left font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gold-500 text-white'
                      : index === 0
                      ? 'bg-slate-800 text-white hover:bg-slate-700'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  } ${index === 0 ? 'rounded-t-2xl' : ''} ${index === planTabs.length - 1 ? 'rounded-b-2xl' : ''}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className={`lg:col-span-9 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Section Header */}
            <div className="mb-12">
              <span className="inline-block px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Floor Plans
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Master plan
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Step into a world of absolute grandeur and bliss, to experience the 
                finest of the classic elite lifestyle.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Legend */}
              <div className="lg:col-span-1">
                <h3 className="font-bold text-xl text-slate-800 mb-6 flex items-center">
                  <span className="w-8 h-0.5 bg-gold-500 mr-3"></span>
                  LEGEND
                </h3>
                
                <div className="space-y-4">
                  {legendItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 group">
                        <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center group-hover:bg-gold-200 transition-colors duration-300">
                          <IconComponent className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floor Plan Image */}
              <div className="lg:col-span-2">
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Master Floor Plan - VIRAR Classic Residence"
                    className="w-full h-[500px] object-cover"
                  />
                  
                  {/* Overlay with compass */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-xs font-bold text-slate-800">N</div>
                    <div className="absolute top-2 w-0.5 h-4 bg-slate-800"></div>
                  </div>
                  
                  {/* Plan number indicator */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-slate-800">1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-12 text-center">
              <button className="group bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wider hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Download Floor Plan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;