'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Download, MapPin, Car, TreePine, Home, Shield } from 'lucide-react';
import { floorPlanData } from '../data/floorPlanData';

const iconMap = {
  MapPin,
  Car,
  TreePine,
  Home,
  Shield
};

const FloorPlansSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(floorPlanData.tabs[0]);

  return (
    <section className="py-20 bg-white" id="floor-plans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Explore Our Floor Plans</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Dive into the visual representation of our thoughtfully designed spaces.
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {floorPlanData.tabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                activeTab.title === tab.title
                  ? 'bg-gold-500 text-white border-gold-500 shadow-md'
                  : 'bg-white text-slate-800 border-slate-300 hover:bg-gold-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Legend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Legend</h3>
            {activeTab.legend.map((item, idx) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gold-100 flex items-center justify-center rounded-full">
                    <Icon className="w-4 h-4 text-gold-500" />
                  </div>
                  <span className="text-slate-600 text-sm">{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* Image Viewer */}
          <div className="lg:col-span-2 relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src={activeTab.image}
                alt={activeTab.title}
                width={1000}
                height={600}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Overlay */}
            <div className="absolute top-4 left-4 bg-white/80 rounded-full px-3 py-1 text-sm font-bold shadow">
              {floorPlanData.tabs.indexOf(activeTab) + 1}
            </div>
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md">
              <span className="font-bold text-xs">N</span>
            </div>
          </div>
        </div>

        {/* Download */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow hover:shadow-lg">
            <Download className="w-5 h-5" />
            Download {activeTab.title}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
