"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import AmenitiesHero from "./components/AmenitiesHero";
// import MainAmenitiesGrid from "./components/MainAmenitiesGrid";
import DetailedAmenitiesList from "./components/DetailedAmenitiesList";
import LandscapeHighlights from "./components/LandscapeHighlights";

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <AmenitiesHero />
      <div className="bg-[url('/images/overview-bg.jpg')] bg-cover bg-center">
        {/* <MainAmenitiesGrid /> */}
        <DetailedAmenitiesList />
      </div>
      <LandscapeHighlights />
      <AmenitiesGallery />
      <Footer />
      <SocialSidebar />
    </div>
  );
}
