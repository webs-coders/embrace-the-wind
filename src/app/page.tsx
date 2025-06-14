'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import AmenitiesGallery from '@/components/AmenitiesGallery';
import FloorPlansSection from '@/components/FloorPlansSection';
import LocationSection from '@/components/LocationSection';
import LifestyleSection from '@/components/LifestyleSection';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';
import './globals.css';
export default function HomePage() {
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "Residence",
  "name": "Embrace The Wind",
  "description": "Luxurious RERA approved residential project offering 3BHK and 4BHK apartments in Sargasan, Gandhinagar.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sargasan",
    "addressRegion": "Gandhinagar",
    "postalCode": "382421",
    "addressCountry": "IN"
  },
  "telephone": "+91-9797976577",
  "email": "Embracethewind33@gmail.com",
  "numberOfRooms": 352,
  "floorSize": {
    "@type": "QuantitativeValue",
    "minValue": 1093,
    "maxValue": 2030,
    "unitCode": "SQF"
  },
  "numberOfAccommodationUnits": 352,
  "numberOfBuildings": 5,
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Fitness Center", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Party Hall", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Children's Play Area", "value": true }
  ],
  "url": "https://www.embracethewind.in"
};


  return (
    <>
      <Head>
        <title>Embrace The Wind, Sargasan Gandhinagar – 3BHK & 4BHK Luxury Flats</title>
        <meta name="description" content="Embrace The Wind offers luxurious 3BHK and 4BHK apartments with triple height balconies, top amenities, and RERA approval. Located in Sargasan, Gandhinagar." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Embrace The Wind, Gandhinagar flats, 3BHK apartment, 4BHK homes, RERA approved project, real estate Sargasan" />
        <meta property="og:title" content="Embrace The Wind – Premium 3 & 4 BHK Residences in Sargasan" />
        <meta property="og:description" content="No Brokerage | RERA Approved | 352 Units | 1093 - 2030 sqft | 5 Towers | Dec 2030 Possession" />
        <meta property="og:image" content="/your-path-to-image.jpg" />
        <meta property="og:url" content="https://www.embracethewind.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.embracethewind.in/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
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
