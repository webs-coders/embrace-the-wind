"use client";

import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import LocationHighlights from "./components/LocationHighlights";
import LocationHero from "./components/LocationHero";
import MapSection from "./components/MapSection";
import LocationSection from "./components/LocationSection";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <LocationHero />
      <MapSection />
      <LocationSection />
      <LocationHighlights />
      <AmenitiesGallery />
      <Footer />
      <SocialSidebar />
    </div>
  );
}
