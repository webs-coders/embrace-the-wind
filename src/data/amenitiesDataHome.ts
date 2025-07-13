import {
  Droplets,
  HeartHandshake,
  Dumbbell,
  GlassWater,
  Video,
  Joystick,
  Baby,
  Sunset,
  ShieldHalf,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Amenity {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const amenities: Amenity[] = [
  {
    icon: Droplets,
    title: "Infinity Edge Rooftop Pool",
    description: "Two stunning swimming pools designed for relaxation and elevated living.",
  },
  {
    icon: HeartHandshake,
    title: "Yoga & Wellness Pavilion",
    description: "Dedicated studio for yoga and meditation within the landscaped amenity zone.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Studio",
    description: "A well-equipped gymnasium for strength, cardio, and functional training.",
  },
  {
    icon: GlassWater,
    title: "Banquet Hall",
    description: "Spacious indoor venue ideal for celebrations, gatherings, and private events.",
  },
  {
    icon: Video,
    title: "Indoor Theatre",
    description: "On-site movie screening room offering cinema-style entertainment.",
  },
  {
    icon: Joystick,
    title: "Indoor Games Zone",
    description: "Spaces featuring activities for all ages—carrom, table tennis, and more.",
  },
  {
    icon: Baby,
    title: "Children’s Play Area",
    description: "Thoughtfully designed zones for toddlers and kids to play safely and freely.",
  },
  {
    icon: Sunset,
    title: "Sky Lounge / Party Terrace",
    description: "Open-air rooftop spaces ideal for social gatherings and tranquil evenings.",
  },
  {
    icon: ShieldHalf,
    title: "Box Cricket Arena",
    description: "A unique feature—compact cricket arena for residents to enjoy casual matches.",
  },
];
