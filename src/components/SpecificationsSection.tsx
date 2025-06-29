"use client";
import { useRef } from "react";
import SidebarImage from "./SidebarImage";
import SectionHeader from "./SectionHeader";
import PrimarySpecifications from "./PrimarySpecifications";
import AdditionalSpecifications from "./AdditionalSpecifications";
import KeyFeatures from "./KeyFeatures";
import BrochureCTA from "./BrochureCTA";

const SpecificationsSection: React.FC = () => {
  const primaryRef = useRef<HTMLDivElement>(null);
  const additionalRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const brochureRef = useRef<HTMLDivElement>(null);

  return (
    <section id="specifications" className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      <SectionHeader />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 space-y-24">

        {/* Primary Specifications */}
        <div id="primary" ref={primaryRef} className="grid lg:grid-cols-12 gap-8">
          <SidebarImage image="/images/EMBRACETHEWIND1.jpg" />
          <div className="lg:col-span-8">
            <PrimarySpecifications />
          </div>
        </div>

        {/* Additional Specifications */}
        <div id="additional" ref={additionalRef} className="grid lg:grid-cols-12 gap-8">
          <SidebarImage image="/images/EMBRACETHEWIND2.jpg" />
          <div className="lg:col-span-8">
            <AdditionalSpecifications />
          </div>
        </div>

        {/* Key Features */}
        <div id="features" ref={featuresRef} className="grid lg:grid-cols-12 gap-8">
          <SidebarImage image="/images/EMBRACETHEWIND3.jpg" />
          <div className="lg:col-span-8">
            <KeyFeatures />
          </div>
        </div>

        {/* Brochure CTA */}
        <div id="brochure" ref={brochureRef} className="grid lg:grid-cols-12 gap-8">
          <SidebarImage image="/images/EMBRACETHEWIND4.jpg" />
          <div className="lg:col-span-8">
            <BrochureCTA />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecificationsSection;
