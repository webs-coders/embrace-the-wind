import React, { useEffect, useRef, useState } from 'react';
import { Droplets,
  HeartHandshake,
  Dumbbell,
  GlassWater,
  Video,
  Joystick,
  Baby,
  Sunset,
  ShieldHalf } from 'lucide-react';


const AmenitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const amenities = [
    {
      icon: Droplets,
      subtitle:'',
      title: 'Infinity Edge Rooftop Pool',
      description: 'Two stunning swimming pools designed for relaxation and elevated living.'
    },
    {
      icon: HeartHandshake,
      title: 'Yoga & Wellness Pavilion',
      subtitle: '',
      description: 'Dedicated studio for yoga and meditation within the landscaped amenity zone.'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Studio',
      subtitle: '',
      description: 'A well-equipped gymnasium for strength, cardio, and functional training.'
    },
    {
      icon: GlassWater,
      title: 'Banquet Hall',
      subtitle: '',
      description: 'Spacious indoor venue ideal for celebrations, gatherings, and private events.'
    },
    {
      icon: Video,
      title: 'Indoor Theatre',
      subtitle: '',
      description: 'On-site movie screening room offering cinema-style entertainment.'
    },
    {
      icon: Joystick,
      title: 'Indoor Games Zone',
      subtitle: '',
      description: 'Spaces featuring activities for all ages—carrom, table tennis, and more.'
    },
    {
      icon: Baby,
      title: "Children’s Play Area",
      subtitle: '',
      description: 'Thoughtfully designed zones for toddlers and kids to play safely and freely.'
    },
     {
      icon: Sunset,
      title: 'Sky Lounge / Party Terrace',
      subtitle: '',
      description: 'Open-air rooftop spaces ideal for social gatherings and tranquil evenings.'
    },
    {
      icon: ShieldHalf,
      title: "Box Cricket Arena",
      subtitle: '',
      description: ' A unique feature—compact cricket arena for residents to enjoy casual matches.'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-slate-900 text-white relative overflow-hidden"
      id="amenities"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gold-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Amenities */}
          <div className="space-y-12">
            {/* Section Title */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-gold-400 mb-4">
                Amenities
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600"></div>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <div
                    key={index}
                    className={`group text-center transition-all duration-700 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-full flex items-center justify-center group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-semibold text-lg text-white group-hover:text-gold-300 transition-colors duration-300">
                      {amenity.title}
                    </h3>
                    {amenity.subtitle && (
                      <p className="text-white/80 group-hover:text-gold-300/80 transition-colors duration-300">
                        {amenity.subtitle}
                      </p>
                    )}
                    
                    {/* Description - Hidden by default, shown on hover */}
                    <p className="text-sm text-white/90 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {amenity.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Enquiry Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-slate-800 mb-8">
                Enquire
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors duration-300 text-slate-800"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">
                    Phone No.
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors duration-300 text-slate-800"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors duration-300 text-slate-800"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 rounded-lg font-semibold text-lg uppercase tracking-wider hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;