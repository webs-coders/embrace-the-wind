// app/layout.tsx
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Embrace The Wind, Sargasan Gandhinagar – 3BHK & 4BHK Luxury Flats",
  description:
    "Embrace The Wind offers luxurious 3BHK and 4BHK apartments with triple height balconies, top amenities, and RERA approval. Located in Sargasan, Gandhinagar.",
  keywords:
    "Embrace The Wind, Gandhinagar flats, 3BHK apartment, 4BHK homes, RERA approved project, real estate Sargasan",
  metadataBase: new URL("https://www.embracethewind.in"),
  openGraph: {
    title: "Embrace The Wind – Premium 3 & 4 BHK Residences in Sargasan",
    description:
      "No Brokerage | RERA Approved | 352 Units | 1093 - 2030 sqft | 5 Towers | Dec 2030 Possession",
    url: "https://www.embracethewind.in",
    siteName: "Embrace The Wind",
    images: [
      {
        url: "https://www.embracethewind.in/logo.svg",
        width: 1200,
        height: 630,
        alt: "Embrace The Wind OG Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Embrace The Wind – Premium 3 & 4 BHK Residences in Sargasan",
    description:
      "Luxurious 3BHK and 4BHK flats in Gandhinagar with premium amenities. RERA approved.",
    images: ["https://www.embracethewind.in/logo.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: "Embrace The Wind",
    description:
      "Luxurious RERA approved residential project offering 3BHK and 4BHK apartments in Sargasan, Gandhinagar.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sargasan",
      addressRegion: "Gandhinagar",
      postalCode: "382421",
      addressCountry: "IN",
    },
    telephone: "+91-9797976577",
    email: "Embracethewind33@gmail.com",
    numberOfRooms: 352,
    floorSize: {
      "@type": "QuantitativeValue",
      minValue: 1093,
      maxValue: 2030,
      unitCode: "SQF",
    },
    numberOfAccommodationUnits: 352,
    numberOfBuildings: 5,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Swimming Pool",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Fitness Center",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Party Hall",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Children's Play Area",
        value: true,
      },
    ],
    url: "https://www.embracethewind.in",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
