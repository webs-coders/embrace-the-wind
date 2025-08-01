"use client";

import React from "react";
import Image from "next/image";
import { Circle } from "lucide-react";

const legends = [
  "Security Cabin",
  "Entry Plaza With Trees And Water Feature",
  "Signage Wall With Plantation, Gate And Boom Gate",
  "Entrance Foyer With Seating Area",
  "Pickup / Drop Off Zone With Benches And M.S Trellis",
  "Senior Citizen Indoor Sitout Area",
  "Sculpture Garden - Rock Sculptures Amidst Gravel Bed With Potted Plants And Benches",
  "Theme Wall With Raised Planter",
  "Cop-Plaza Area With Stone Crete And Granite Stone Flooring",
  "Entry Plaza With Sculpture",
  "Woodwalk - Meandering Walkway In Stone Crete Along Densely Planted Area",
  "Raised Planters With Dense Planting",
  "Water Body With Sculpture",
  "Seating Pavilions With M.S Trellis",
  "Mother's Sit Out Area",
  "Children's Play Area",
  "Outdoor Exercise Area",
  "Sand Pit",
  "Play Mound",
  "Kids Pool",
  "Swimming Pool",
  "Changing Rooms And Toilet",
  "Pool Deck With Sundowner",
  "Yoga Studio",
  "Block Entrance Lounges With Seating",
  "Multipurpose Play Court",
  "Floor Game Zone With Sitout Area",
  "Indoor Kids / Toddler's Play Area",
  "Indoor Game Zone",
  "Library & Work From Home Lounge",
  "Indoor Swimming Pool With Deck Area And Changing Room",
  "Gymnasium",
  "Common Male Toilets",
  "Common Female Toilets",
  "Society Store",
  "Banquet Hall",
  "Kitchen & Wash Area",
  "Indoor Theatre",
  "Jhula Plaza",
  "Block B - Entrance Plaza With Planting Clusters And Sitout Zone",
  "Box Cricket",
  "Cycle Parking Zones",
  "Arrival Plaza With Granite Flooring",
  "Driveway With Trimix Flooring",
  "Garbage Collection Area",
  "Commercial Frontage With Tree Plantation",
  "Commercial Entry Zones With Planting",
  "Signage Corner With Sculpture And Plantation",
  "Walking Skybridge Overlooking The Landscape",
  "Viewing Balconies With Rain Showers Below",
  "Drivers Waiting Area",
  "Society Office",
  "Mural Wall As Backdrop Of Swimming Pool Plaza",
  "Swing Plaza Outside Individual Block Entry"
];

const FloorPlanPage = () => {
  return (
    <main className="w-full py-16 px-4 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-primary">Master Floor Plan</h1>

        <div className="relative w-full aspect-[16/9] max-h-[800px] overflow-hidden rounded-2xl border-2 border-gray-200 shadow-lg mb-14">
          <Image
            src='/assets/1.jpg'
            alt="Master Plan"
            layout="fill"
            objectFit="contain"
            className="rounded-2xl"
          />
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center">Legend (54 Items)</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {legends.map((label, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition hover:scale-[1.01]"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-primary/10 rounded-full">
                <Circle size={16} className="text-primary" />
              </div>
              <div className="text-gray-700 text-sm leading-snug">
                <span className="font-medium text-gray-900">{String(i + 1).padStart(2, "0")}.</span> {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FloorPlanPage;
