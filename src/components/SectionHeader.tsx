"use client";
import Image from "next/image";

interface SectionHeaderProps {
  isVisible: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ isVisible }) => {
  return (
    <div className="relative mb-20">
      <Image
        src="/images/EMBRACETHEWIND1.jpg"
        alt="Specifications Banner"
        fill
        className="absolute object-cover z-0 brightness-50"
      />
      <div className="relative z-10 container mx-auto px-6 py-32 text-center text-white">
        <h1
          className={`text-5xl md:text-6xl font-extrabold font-playfair transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Modern Specifications
        </h1>
        <p
          className={`mt-4 max-w-2xl mx-auto text-lg text-white/80 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          }`}
        >
          Designed for elegance. Engineered for tomorrow.
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
