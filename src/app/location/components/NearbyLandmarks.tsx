"use client";

import { nearbyPlaces } from "@/data/locationPageData";

export default function NearbyLandmarks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-navy mb-4">Everything You Need, Just Minutes Away</h2>
        <p className="text-gray-600 mb-12">Embrace The Wind puts life&apos;s essentials right at your doorstep.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {nearbyPlaces.map((place, index) => {
            const Icon = place.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition duration-300">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-color-light-orange mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-lg text-slate-800 mb-1">{place.name}</h4>
                <p className="text-sm text-color-orange">{place.distance}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
