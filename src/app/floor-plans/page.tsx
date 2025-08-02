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
      <section className="relative h-[70vh] sm:h-[70vh] md:h-[100vh] w-full bg-cover bg-center bg-[url('/ResizedImages/EMBRACE_THE_WIND_21.jpg')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold drop-shadow-xl leading-tight max-w-4xl">
            Floor Plan
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Explore thoughtfully designed floor plans tailored for comfort, style, and modern living
          </p>
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
