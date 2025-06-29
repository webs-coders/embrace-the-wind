"use client";
import Image from "next/image";

interface SidebarImageProps {
  image: string;
}

const SidebarImage: React.FC<SidebarImageProps> = ({ image }) => {
  return (
    <div className="lg:col-span-4 w-full">
      <div className="sticky top-8 hidden lg:block">
        <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[500px] w-full">
          <Image src={image} alt="Section Image" fill className="object-cover" />
        </div>
      </div>
      {/* For mobile/tablet: show image inline */}
      <div className="lg:hidden mb-6">
        <div className="rounded-2xl overflow-hidden relative h-64 w-full">
          <Image src={image} alt="Section Image" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SidebarImage;
