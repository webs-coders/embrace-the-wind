"use client";

import Header from "@/components/Header";
import SpecificationsSection from "@/components/SpecificationsSection";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import AmenitiesGallery from "@/components/AmenitiesGallery";

export default function SpecificationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <SpecificationsSection />
      <AmenitiesGallery />
      <Footer />
      <SocialSidebar />
    </div>
  );
}
