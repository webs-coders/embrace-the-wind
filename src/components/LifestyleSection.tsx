import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

const LifestyleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const floatingImages = [
    {
      src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Luxury Swimming Pool',
      className: 'top-16 left-8 w-48 h-32 rotate-[-8deg] hover:rotate-[-4deg]',
      delay: '0s'
    },
    {
      src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Modern Interior',
      className: 'top-20 right-12 w-56 h-36 rotate-[12deg] hover:rotate-[6deg]',
      delay: '0.2s'
    },
    {
      src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Luxury Living Room',
      className: 'bottom-32 left-16 w-52 h-34 rotate-[8deg] hover:rotate-[4deg]',
      delay: '0.4s'
    },
    {
      src: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Elegant Dining',
      className: 'bottom-20 right-8 w-44 h-28 rotate-[-12deg] hover:rotate-[-6deg]',
      delay: '0.6s'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-amber-50 via-gold-50 to-amber-100 relative overflow-hidden min-h-[80vh] flex items-center"
      id="lifestyle"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gold-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gold-600 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Images */}
      {floatingImages.map((image, index) => (
        <div
          key={index}
          className={`absolute ${image.className} transition-all duration-700 hover:scale-110 hover:shadow-2xl cursor-pointer ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            animationDelay: image.delay,
            animation: isVisible ? `float 6s ease-in-out infinite ${image.delay}` : 'none'
          }}
        >
          <div className="relative group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Sparkle effect on hover */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
            </div>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className={`font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Thrive in stylish
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">
              life style
            </span>
          </h2>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-slate-600 mb-8 font-light leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Live the elite life in 4BHK homes with triple height balconies.
          </p>

          {/* CTA Button */}
          <button className={`group relative bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg tracking-wide transition-all duration-500 hover:from-gold-600 hover:to-gold-700 hover:scale-105 hover:shadow-2xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ animationDelay: '0.6s' }}>
            <span className="relative z-10 flex items-center space-x-2">
              <span>ENQUIRE NOW</span>
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          </button>

          {/* Decorative Elements */}
          <div className={`mt-16 flex justify-center space-x-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Large decorative VIRAR text */}
      <div className="absolute bottom-8 right-8 opacity-5 pointer-events-none">
        <h3 className="font-playfair text-8xl md:text-9xl font-bold text-slate-800 transform rotate-12">
          VIRAR
        </h3>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rotation)); }
          50% { transform: translateY(-20px) rotate(var(--rotation)); }
        }
      `}</style>
    </section>
  );
};

export default LifestyleSection;