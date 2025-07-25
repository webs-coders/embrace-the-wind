"use client";

import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import Footer from "@/components/Footer";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import NearbyLandmarks from "./components/NearbyLandmarks";
import LocationHighlights from "./components/LocationHighlights";
import CommercialSpaces from "./components/CommercialSpaces";
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
      <NearbyLandmarks />
      <LocationHighlights />
      <CommercialSpaces />
      <AmenitiesGallery />
      <Footer />
      <SocialSidebar />
    </div>
  );
}
