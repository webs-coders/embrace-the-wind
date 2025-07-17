// app/data/amenitiesData.ts

export interface AmenitySlide {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const amenitySlides: AmenitySlide[] = [
  {
    id: "01",
    title: "Work-from-Home Lounge & Library",
    description:
      "Purpose-built for the new hybrid lifestyle, this zone combines productivity and peace, offering serene corners for reading, online meetings, or quiet reflection.",
    image:
      "/ResizedImages/EMBRACE_THE_WIND_26.jpg",
  },
  {
    id: "02",
    title: "Premium Residences with Private Patios",
    description:
      "Each home features a private patio, generous balconies, and personal foyers, offering comfort, privacy, and an elevated living experience every day.",
    image:
      "/ResizedImages/EMBRACE_THE_WIND_20.jpg",
  },
  {
    id: "03",
    title: "Designer Kitchen with Smart Storage",
    description:
      "Elegant kitchens feature polished granite counters, vitrified tile backsplashes, smart layouts, a wash yard, and a dedicated store room for everyday ease.",
    image:
      "/ResizedImages/EMBRACE_THE_WIND_23.jpg",
  },
  {
    id: "04",
    title: "Penthouse Splendor",
    description:
      "The 4BHK penthouses redefine luxury with expansive terraces (up to 685 sq ft), signature glass bridges, and exclusive lounge spaces designed to impress.",
    image:
      "/ResizedImages/EMBRACE_THE_WIND_21.jpg",
  },
  {
    id: "05",
    title: "Resort-Style Dual Swimming Pools",
    description:
      "Two exclusive pools—one for laps, another for leisure—create a dynamic escape for residents",
    image:
      "/ResizedImages/EMBRACE_THE_WIND_06.jpg",
  },
];
