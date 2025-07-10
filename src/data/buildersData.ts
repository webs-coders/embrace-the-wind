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
      "With a vision rooted in \u201cRaising the Standard of Living,\u201d Shashwat Group creates environments that blend architectural grace with elevated living. Projects like Evana and Embrace The Wind are benchmarks of quality and planning.",
    description1:
      "They don\u2019t just build\u2014they craft experiences. Every residence offers more light, openness, and meaning.",
    dark: false,
  },
  {
    name: "Sriprad Group",
    logo: "/Sriprad-logo.png",
    description:
      "With 15+ years of experience and over 17 projects, Sriprad Group stands tall across Gandhinagar. Their focus on timeless design and smart functionality drives community-centric living.",
    description1:
      "More than homes\u2014they build thoughtfully planned environments. Precision, transparency, and vision define them.",
    dark: true,
  },
];

export const project: ProjectData = {
  title: "About Embrace The Wind",
  description:
    "The name says it all\u2014Embrace The Wind is built to breathe. Every space is bathed in natural light, filled with fresh air, and designed for seamless ventilation. Rising as a 20-storey landmark, it brings together world-class amenities for every age group, all under one thoughtfully crafted roof. It\u2019s not just a building\u2014it\u2019s a lifestyle that flows.",
};

export const architect: ArchitectData = {
  name: "Mansi Shah",
  description: "With over 300 thoughtfully realized projects, Mansi Shah stands as one of Gujarat\u2019s most respected voices in contemporary architecture. As the founder of Mansi Shah Architects (MSA), her philosophy goes beyond structure\u2014focusing on how people live, feel, and connect with their environment.",
  description1: "Known for her multidisciplinary approach and intuitive design language, she brings light, air, and soul into every space\u2014blending timeless elegance with everyday practicality. Her work embraces human-centric living, creating homes that aren\u2019t just built\u2014but truly felt.",
  caption: "Built with Heart. Designed for Life.",
  title: undefined
};
