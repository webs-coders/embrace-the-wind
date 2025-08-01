"use client";

import React from "react";
import Image from "next/image";
import { Tabs, Tab } from "@nextui-org/react";
import { Circle } from "lucide-react";

// Floor Plan Tabs with real image filenames (you'll need to rename accordingly in /public/assets)
const floorTabs = [
  {
    id: "master",
    label: "Master Plan",
    image: "/assets/ground-plan.jpg", // Rename your master plan image to this
  },
  {
    id: "typical-floor",
    label: "Typical Floor Plan",
    image: "/assets/typical-floor.jpg",
  },
  {
    id: "3bhk",
    label: "3 BHK Plans",
    images: [
      { block: "Block A", src: "/assets/3bhk-a.jpg" },
      { block: "Block B", src: "/assets/3bhk-b.jpg" },
      { block: "Block C&D", src: "/assets/3bhk-cd.jpg" },
      { block: "Block E", src: "/assets/3bhk-e.jpg" },
    ],
  },
  {
    id: "4bhk",
    label: "4 BHK Plans",
    images: [
      { block: "Block A", src: "/assets/4bhk-a.jpg" },
      { block: "Block C&D", src: "/assets/4bhk-cd.jpg" },
    ],
  },
  {
    id: "penthouse",
    label: "Penthouse Plans",
    images: [
      { block: "Block A (Lower)", src: "/assets/penthouse-a-lower.jpg" },
      { block: "Block A (Upper)", src: "/assets/penthouse-a-upper.jpg" },
      { block: "Block B (Lower)", src: "/assets/penthouse-b-lower.jpg" },
      { block: "Block B (Upper)", src: "/assets/penthouse-b-upper.jpg" },
      { block: "Block C&D (Lower)", src: "/assets/penthouse-cd-lower.jpg" },
      { block: "Block C&D (Upper)", src: "/assets/penthouse-cd-upper.jpg" },
      { block: "Block E2 (Lower)", src: "/assets/penthouse-e2-lower.jpg" },
      { block: "Block E2 (Upper)", src: "/assets/penthouse-e2-upper.jpg" },
    ],
  },
];

const legends: string[] = [
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

const FloorPlansSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-gray-50" id="floor-plans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Floor Plans</h2>

        <Tabs variant="underlined" aria-label="Floor Plans Tabs" className="mb-10">
          {floorTabs.map((tab) => (
            <Tab key={tab.id} title={tab.label}>
              {tab.image && (
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-md border bg-white">
                  <Image
                    src={tab.image}
                    alt={tab.label}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              )}

              {tab.images && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {tab.images.map((plan, index) => (
                    <div
                      key={index}
                      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border shadow bg-white"
                    >
                      <Image
                        src={plan.src}
                        alt={plan.block}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-sm font-medium">
                        {plan.block}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab.id === "master" && (
                <div className="mt-10 bg-white p-6 rounded-xl shadow-inner max-h-[600px] overflow-y-auto border">
                  <h3 className="text-xl font-semibold mb-4">Legend (54)</h3>
                  <ul className="space-y-2">
                    {legends.map((label, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Circle className="h-4 w-4 text-blue-500 mt-1" />
                        <span className="text-gray-700">{`${index + 1}. ${label}`}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FloorPlansSection;
