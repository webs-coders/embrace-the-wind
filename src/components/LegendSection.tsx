"use client";

export default function LegendSection() {
  const legendItems = [
    "01 - Security Cabin",
    "02 - Entry Plaza With Trees And Water Feature",
    "03 - Signage Wall With Plantation, Gate And Boom Gate",
    "04 - Entrance Foyer With Seating Area",
    "05 - Pickup / Drop Off Zone With Benches And M.S Trellis",
    "06 - Senior Citizen Indoor Sitout Area",
    "07 - Sculpture Garden - Rock Sculptures Amidst Gravel Bed With Potted Plants And Benches",
    "08 - Theme Wall With Raised Planter",
    "09 - Cop-Plaza Area With Stone Crete And Granite Flooring",
    "10 - Entry Plaza With Sculpture",
    "11 - Woodwalk - Meandering Walkway In Stone Crete Along Densely Planted Area",
    "12 - Raised Planters With Dense Planting",
    "13 - Water Body With Sculpture",
    "14 - Seating Pavilions With M.S Trellis",
    "15 - Mother's Sit Out Area",
    "16 - Children's Play Area",
    "17 - Outdoor Exercise Area",
    "18 - Sand Pit",
    "19 - Play Mound",
    "20 - Kids Pool",
    "21 - Swimming Pool",
    "22 - Changing Rooms And Toilet",
    "23 - Pool Deck With Sundowner",
    "24 - Yoga Studio",
    "25 - Block Entrance Lounges With Seating",
    "26 - Multipurpose Play Court",
    "27 - Floor Game Zone With Sitout Area",
    "28 - Indoor Kids / Toddler's Play Area",
    "29 - Indoor Game Zone",
    "30 - Library & Work From Home Lounge",
    "31 - Indoor Swimming Pool With Deck Area And Changing Room",
    "32 - Gymnasium",
    "33 - Common Male Toilets",
    "34 - Common Female Toilets",
    "35 - Society Store",
    "36 - Banquet Hall",
    "37 - Kitchen & Wash Area",
    "38 - Indoor Theatre",
    "39 - Jhula Plaza",
    "40 - Block B - Entrance Plaza With Planting Clusters And Sitout Zone",
    "41 - Box Cricket",
    "42 - Cycle Parking Zones",
    "43 - Arrival Plaza With Granite Flooring",
    "44 - Driveway With Trimix Flooring",
    "45 - Garbage Collection Area",
    "46 - Commercial Frontage With Tree Plantation",
    "47 - Commercial Entry Zones With Planting",
    "48 - Signage Corner With Sculpture And Plantation",
    "49 - Walking Skybridge Overlooking The Landscape",
    "50 - Viewing Balconies With Rain Showers Below",
    "51 - Drivers Waiting Area",
    "52 - Society Office",
    "53 - Mural Wall As Backdrop Of Swimming Pool Plaza",
    "54 - Swing Plaza Outside Individual Block Entry",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Legend</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[500px] overflow-y-auto pr-2">
          {legendItems.map((item, index) => (
            <div key={index} className="text-sm text-gray-800">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
