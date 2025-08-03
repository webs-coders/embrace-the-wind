import Image from "next/image";
import { useState, useEffect } from "react";
import { galleryImages } from "@/data/galleryData";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "Escape") closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const renderBlocks = () => {
    const blocks = [];

    for (let i = 0; i < galleryImages.length; i += 3) {
      const group = galleryImages.slice(i, i + 3);
      if (group.length < 3) break;

      const isEven = (i / 3) % 2 === 0;

      blocks.push(
        <div
          key={i}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12"
        >
          {isEven ? (
            <>
              <div
                className="md:col-span-2 h-full rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openModal(i)}
              >
                <GalleryImage image={group[0]} />
              </div>
              <div className="flex flex-col gap-12">
                <div
                  className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => openModal(i + 1)}
                >
                  <GalleryImage image={group[1]} />
                </div>
                <div
                  className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => openModal(i + 2)}
                >
                  <GalleryImage image={group[2]} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-12">
                <div
                  className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => openModal(i)}
                >
                  <GalleryImage image={group[0]} />
                </div>
                <div
                  className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => openModal(i + 1)}
                >
                  <GalleryImage image={group[1]} />
                </div>
              </div>
              <div
                className="md:col-span-2 h-full rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openModal(i + 2)}
              >
                <GalleryImage image={group[2]} />
              </div>
            </>
          )}
        </div>
      );
    }

    return blocks;
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Gallery
        </h2>
        {renderBlocks()}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative h-[600px] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-8 text-white bg-black bg-opacity-60 rounded-full p-2 hover:bg-opacity-80 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              onClick={goPrev}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={goNext}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal image */}
            <Image
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              width={1600}
              height={600}
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

const GalleryImage = ({ image }: { image: { src: string; alt: string } }) => {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={1200}
      height={800}
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      quality={75}
      loading="lazy"
    />
  );
};

export default GallerySection;
