import React from 'react'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
// import Header from '@/components/Header';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Embrace The Wind - Luxury 3BHK-4BHK Homes",
  description: "Premium living with triple-height balconies and top-tier amenities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
