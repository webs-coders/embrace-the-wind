import { ReactNode } from "react";

// /data/buildersData.ts
export interface BuilderData {
  name: string;
  logo: string;
  description: string;
  description1: string;
  dark?: boolean;
}

export interface ArchitectData {
  title: ReactNode;
  name: string;
  description: string;
  description1: string;
  caption: string;
}

export interface ProjectData {
  title: string;
  description: string;
}

export const builders: BuilderData[] = [
  {
    name: "Shashwat Group",
    logo: "/New Project.png",
    description:
      "With a vision rooted in “Raising the Standard of Living,” Shashwat Group is committed to creating environments that blend architectural grace with lifestyle elevation. From celebrated developments like Evana, Shivanjali, and Florus to the iconic Embrace The Wind, each project stands as a testament to their pursuit of unmatched quality and unique spatial planning.",
    description1:
      "Shashwat doesn’t just build spaces—they craft experiences. Every residence is designed to offer more light, more openness, and more meaning—setting them apart as true curators of modern, luxurious living.",
    dark: false,
  },
  {
    name: "Sriprad Group",
    logo: "/Sriprad-White-logo.png",
    description:
      "With 15+ years of experience and over 17 distinguished projects across Gandhinagar, Sriprad Group has earned its stature as a trusted name in next-generation real estate. From Aayansh to Embrace The Wind, each development reflects their focus on timeless design, efficient functionality, and community-driven living.",
    description1:
      "Their strength lies in building more than homes—crafting thoughtfully planned environments that elevate the everyday. Guided by precision, transparency, and a progressive vision, Sriprad continues to set benchmarks in quality and lifestyle excellence across Gujarat’s evolving skyline.",
    dark: true,
  },
];

export const project: ProjectData = {
  title: "About Embrace The Wind",
  description:
    "The name says it all—Embrace The Wind is built to breathe. Every space is bathed in natural light, filled with fresh air, and designed for seamless ventilation. Rising as a 20-storey landmark, it brings together world-class amenities for every age group, all under one thoughtfully crafted roof. It’s not just a building—it’s a lifestyle that flows.",
};

export const architect: ArchitectData = {
  name: "Mansi Shah",
  description: "With over 300 thoughtfully realized projects, Mansi Shah stands as one of Gujarat’s most respected voices in contemporary architecture. As the founder of Mansi Shah Architects (MSA), her philosophy goes beyond structure—focusing on how people live, feel, and connect with their environment.",
  description1: "Known for her multidisciplinary approach and intuitive design language, she brings light, air, and soul into every space—blending timeless elegance with everyday practicality. Her work embraces human-centric living, creating homes that aren’t just built—but truly felt.",
  caption: "Built with Heart. Designed for Life.",
  title: "Architect: Mansi Shah"
};
