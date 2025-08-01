"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import AmenitiesGallery from "@/components/AmenitiesGallery";
// import FloorPlansSection from "@/components/FloorPlansSection";
import LocationSection from "@/components/LocationSection";
import LifestyleSection from "@/components/LifestyleSection";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import "./globals.css";
import FloorPlansSection from "@/components/FloorPlansSections";

export default function HomePage() {
  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <OverviewSection />
        <AmenitiesSection />
        <AmenitiesGallery />
        <FloorPlansSection />
        <LocationSection />
        <LifestyleSection />
        <Footer />
        <SocialSidebar />
      </main>
    </>
  );
}
