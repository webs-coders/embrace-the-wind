"use client";

interface SpecificationHeroProps {
  isVisible: boolean;
}

const SpecificationHero: React.FC<SpecificationHeroProps> = ({ isVisible }) => {
  return (
    <section className="relative h-[70vh] sm:h-[70vh] md:h-[100vh] w-full bg-cover bg-center bg-[url('/ResizedImages/EMBRACE_THE_WIND_24.jpg')]">
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
        <h1
          className={`text-white text-2xl md:text-5xl font-extrabold font-playfair transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Crafted Spaces. Trusted Standards.
        </h1>

        <p
          className={`mt-4 max-w-2xl text-lg text-white/80 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Precision in materials. Passion in every finish.
        </p>
      </div>
    </section>
  );
};

export default SpecificationHero;
