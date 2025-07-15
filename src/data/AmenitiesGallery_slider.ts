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
    title: "Lounge Area",
    description:
      "Relax and unwind in our sophisticated lounge with premium furnishings and ambient lighting.",
    image:
      "/ResizedImages/EMBRACE_THE_WIND_23.jpg",
  },
  {
    id: "02",
    title: "Game Room",
    description:
      "Unwind with your close ones over a game of pool, or just relax watching your friends play!",
    image:
      "/ResizedImages/EMBRACE_THE_WIND_24.jpg",
  },
  {
    id: "03",
    title: "Party Hall",
    description:
      "Host memorable celebrations in our elegant party hall with modern amenities.",
    image:
      "/ResizedImages/EMBRACE_THE_WIND_26.jpg",
  },
  {
    id: "04",
    title: "Fitness Center",
    description:
      "State-of-the-art fitness equipment with panoramic city views to energize your workout.",
    image:
      "/ResizedImages/EMBRACE_THE_WIND_25.jpg",
  },
  {
    id: "05",
    title: "Swimming Pool",
    description:
      "Take a refreshing dip in our infinity pool overlooking the city skyline.",
    image:
      "/ResizedImages/EMBRACE_THE_WIND_06.jpg",
  },
];
