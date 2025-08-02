import {
  Car,
  Train,
  Plane,
  School,
  Hospital,
  ShoppingBag,
} from "lucide-react";
import { SVGProps } from "react";


// Type definitions
export type NearbyPlace = {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  distance: string;
  type: string;
};

export type ConnectivityFeature = {
 icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  items: string[];
};

export type LocationHighlight = {
  title: string;
  description: string;
};

export type ProjectAddress = {
  name: string;
  addressLine1: string;
  fullAddress: string;
  mapIframeSrc: string;
};

// Data
export const nearbyPlaces: NearbyPlace[] = [
  {
    icon: School,
    name: "Primary School",
    distance: "1.4 km",
    type: "Education",
  },
  {
    icon: School,
    name: "PDPU University",
    distance: "9.9 km",
    type: "Education",
  },
  {
    icon: Hospital,
    name: "Apollo Hospital",
    distance: "12.3 km",
    type: "Healthcare",
  },
  {
    icon: Hospital,
    name: "City Hospital",
    distance: "18 km",
    type: "Healthcare",
  },
  {
    icon: ShoppingBag,
    name: "Infocity Mall",
    distance: "2.3 km",
    type: "Shopping",
  },
  {
    icon: ShoppingBag,
    name: "Palladium Mall",
    distance: "20 km",
    type: "Shopping",
  },
  
];

export const connectivityFeatures: ConnectivityFeature[] = [
  {
    icon: Car,
    title: "Major Roads",
    items: ["S.G. Highway - 100 m", "Koba Circle - 9.2 km", "Infocity Road - 2.2 km"],
  },
  {
    icon: Train,
    title: "Railway Stations",
    items: ["Gandhinagar Capital - 5.8 km", "Sabarmati - 16 km"],
  },
  {
    icon: Plane,
    title: "Airport",
    items: ["Sardar Vallabhbhai Patel Airport - 17 km"],
  },
];

export const locationHighlights: LocationHighlight[] = [
  {
    title: "Prime S.G. Highway Location",
    description:
      "Located right off the prestigious S.G. Highway, offering unparalleled connectivity to Gandhinagar and Ahmedabad.",
  },
  {
    title: "Corner Plot Advantage",
    description:
      "Maximum visibility and accessibility from multiple approach roads, thanks to the strategic corner plot location.",
  },
  {
    title: "Wide Road Frontage",
    description:
      "Frontage on an 18-meter wide road ensures easy vehicular access and great visibility for commercial units.",
  },
  {
    title: "No High Rises Nearby",
    description:
      "Unobstructed natural light and air flow with no tall buildings adjacent to the project site.",
  },
];

export const commercialBrands: string[] = [
  "FOREVER 21",
  "ZARA",
  "UNIQUE STORE",
  "ORGANICA",
  "SHOP 24",
  "ATM",
];

export const projectAddress: ProjectAddress = {
  name: "Embrace The Wind",
  addressLine1: "B/h McDonald's On S.G. Highway",
  fullAddress:
    "B/h McDonald's On S.G. Highway, Sargasan Cross Rd, Sargasan, Gandhinagar, Gujarat 382421",
  mapIframeSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.3439257996515!2d72.61613147509716!3d23.19413357905394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b88c9293683%3A0x76f11a7d3831f354!2sEmbrace%20The%20Wind!5e0!3m2!1sen!2sin!4v1750259842747!5m2!1sen!2sin",
};
