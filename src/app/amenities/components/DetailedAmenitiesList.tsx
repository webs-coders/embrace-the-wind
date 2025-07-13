"use client";
import React from "react";
import { detailedAmenities } from "@/data/amenitiesData";

const DetailedAmenitiesSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-12">
          Amenities Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {detailedAmenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-lg text-slate-800 mb-2">
                  {item.name}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedAmenitiesSection;
