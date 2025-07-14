"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, MapPin, Car, TreePine, Home, Shield } from "lucide-react";
import { floorPlanData } from "@/data/floorPlanData";

const iconMap = {
  MapPin,
  Car,
  TreePine,
  Home,
  Shield,
};

const FloorPlansSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(floorPlanData.tabs[0]);

  return (
    <section id="floor-plans" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-3 text-slate-900">
          Explore Our Floor Plans
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-10">
          Dive into the visual representation of our thoughtfully designed spaces.
        </p>

        {/* Tabs - Horizontal Scrollable on Mobile */}
        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide mb-8">
          {floorPlanData.tabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab.title === tab.title
                  ? "bg-color-light-orange text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-300 hover:bg-color-light-orange hover:text-white"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Legend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Legend</h3>
            {activeTab.legend.map((item, idx) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-color-light-orange rounded-full">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-700 text-sm">{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* Image */}
          <div className="lg:col-span-2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src={activeTab.image}
                alt={activeTab.title}
                width={1200}
                height={700}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Info */}
              <div className="absolute top-4 left-4 bg-white/80 px-4 py-1 rounded-full text-xs font-semibold text-slate-800 shadow">
                Plan {floorPlanData.tabs.indexOf(activeTab) + 1} / {floorPlanData.tabs.length}
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow">
                N
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 bg-color-light-orange text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-color-orange transition">
            <Download size={18} />
            Download {activeTab.title}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FloorPlansSection;
