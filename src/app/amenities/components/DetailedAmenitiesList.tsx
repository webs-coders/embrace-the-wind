import React from "react";
import { detailedAmenities } from "@/data/amenitiesData";

const DetailedAmenitiesSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Amenities Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {detailedAmenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow hover:shadow-md transition">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedAmenitiesSection;
