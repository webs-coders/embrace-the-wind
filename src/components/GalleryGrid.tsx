import Image from "next/image";
import { galleryImages } from "@/data/galleryData";

const GallerySection = () => {
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
              {/* Large image on left */}
              <div className="md:col-span-2 h-full rounded-3xl overflow-hidden shadow-lg">
                <GalleryImage image={group[0]} />
              </div>
              {/* Two stacked small images right */}
              <div className="flex flex-col gap-12">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <GalleryImage image={group[1]} />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <GalleryImage image={group[2]} />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Two stacked small images left */}
              <div className="flex flex-col gap-12">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <GalleryImage image={group[0]} />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <GalleryImage image={group[1]} />
                </div>
              </div>
              {/* Large image right */}
              <div className="md:col-span-2 h-full rounded-3xl overflow-hidden shadow-lg">
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
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Gallery
        </h2>
        {renderBlocks()}
      </div>
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
