"use client";

import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import Footer from "@/components/Footer";
// import FloorPlanPage from "./components/FloorPlansPage";
import FloorPlansPage from "./components/floor-plans";

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-cover bg-center bg-[url('/ResizedImages/EMBRACE_THE_WIND_21.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
           Floor Plan
          </h1>
        </div>
      </section>

      {/* Play Area Section */}
     <FloorPlansPage/>
  

      {/* Amenities Gallery */}
      <AmenitiesGallery />
      <Footer />
      <SocialSidebar />
    </div>
  );
}
