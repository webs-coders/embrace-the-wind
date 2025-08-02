"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import AmenitiesGallery from "@/components/AmenitiesGallery";
// import FloorPlansSection from "@/components/FloorPlansSection";
import LocationSection from "@/components/LocationSection";
// import LifestyleSection from "@/components/LifestyleSection";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import "./globals.css";
import FloorPlansSection from "@/components/FloorPlansSections";

import HighlightsSection from "@/components/HighlightsSection";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  return (
    <main>
      <Header />
      <motion.div {...fadeInUp}>
        <HeroSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <OverviewSection />
      </motion.div>
       <motion.div {...fadeInUp}>
        <HighlightsSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <AmenitiesSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <AmenitiesGallery />
      </motion.div>
      <motion.div {...fadeInUp}>
        <FloorPlansSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <LocationSection />
      </motion.div>
      {/* <motion.div {...fadeInUp}> */}
      {/*   <LifestyleSection /> */}
      {/* </motion.div> */}
      <Footer />
      <SocialSidebar />
    </main>
  );
}
