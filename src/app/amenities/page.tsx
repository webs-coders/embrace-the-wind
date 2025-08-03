"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import AmenitiesGallery from "@/components/AmenitiesGallery";
import AmenitiesHero from "./components/AmenitiesHero";
import DetailedAmenitiesList from "./components/DetailedAmenitiesList";
import LandscapeSection from "./components/LandscapeSection";
import LandscapeHighlights from "./components/LandscapeHighlights";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AmenitiesPage() {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <AmenitiesHero />

       {isMobile ? (
        <DetailedAmenitiesList />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <DetailedAmenitiesList />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <LandscapeSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <LandscapeHighlights />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <AmenitiesGallery />
      </motion.div>

      <Footer />
      <SocialSidebar />
    </div>
  );
}
