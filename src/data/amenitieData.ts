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
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "02",
    title: "Game Room",
    description:
      "Unwind with your close ones over a game of pool, or just relax watching your friends play!",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "03",
    title: "Party Hall",
    description:
      "Host memorable celebrations in our elegant party hall with modern amenities.",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "04",
    title: "Fitness Center",
    description:
      "State-of-the-art fitness equipment with panoramic city views to energize your workout.",
    image:
      "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "05",
    title: "Swimming Pool",
    description:
      "Take a refreshing dip in our infinity pool overlooking the city skyline.",
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];
