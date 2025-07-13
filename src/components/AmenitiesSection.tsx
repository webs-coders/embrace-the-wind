'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  Droplets,
  HeartHandshake,
  Dumbbell,
  GlassWater,
  Video,
  Joystick,
  Baby,
  Sunset,
  ShieldHalf,
} from 'lucide-react';
import { useContactForm } from '../utils/useContactForm';

const AmenitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    status,
    errors,
    resetForm,
  } = useContactForm('EnquiryForm');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNewSubmission = () => {
    resetForm();
    setSubmitted(false);
  };

  if (status && !submitted) setSubmitted(true);

  const amenities = [
    { icon: Droplets, title: 'Infinity Edge Rooftop Pool', description: 'Two stunning swimming pools designed for relaxation and elevated living.' },
    { icon: HeartHandshake, title: 'Yoga & Wellness Pavilion', description: 'Dedicated studio for yoga and meditation within the landscaped amenity zone.' },
    { icon: Dumbbell, title: 'Fitness Studio', description: 'A well-equipped gymnasium for strength, cardio, and functional training.' },
    { icon: GlassWater, title: 'Banquet Hall', description: 'Spacious indoor venue ideal for celebrations, gatherings, and private events.' },
    { icon: Video, title: 'Indoor Theatre', description: 'On-site movie screening room offering cinema-style entertainment.' },
    { icon: Joystick, title: 'Indoor Games Zone', description: 'Spaces featuring activities for all ages—carrom, table tennis, and more.' },
    { icon: Baby, title: "Children’s Play Area", description: 'Thoughtfully designed zones for toddlers and kids to play safely and freely.' },
    { icon: Sunset, title: 'Sky Lounge / Party Terrace', description: 'Open-air rooftop spaces ideal for social gatherings and tranquil evenings.' },
    { icon: ShieldHalf, title: "Box Cricket Arena", description: 'A unique feature—compact cricket arena for residents to enjoy casual matches.' },
  ];

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
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gold-400 mb-4">Amenities</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <div
                    key={index}
                    className={`group text-center transition-all duration-700 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-full flex items-center justify-center group-hover:from-gold-400/30 group-hover:to-gold-600/30 transition-all duration-300">
                      <Icon className="w-8 h-8 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-gold-300 transition-colors duration-300">{amenity.title}</h3>
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
              {!isSubmitting && !submitted && (
                <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-slate-800 mb-8">Enquire</h3>
              )}

              {isSubmitting ? (
                <div className="flex flex-col items-center justify-center py-10 animate-fade-in">
                  <div className="w-8 h-8 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
                  <span className="mt-3 text-sm text-gray-700">Submitting your enquiry...</span>
                </div>
              ) : submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <h4 className="text-2xl font-semibold text-green-700 mb-2">🎉 Thank you!</h4>
                  <p className="text-gray-700 text-sm mb-6">We&apos;ll get in touch with you shortly.</p>
                  <button
                    type="button"
                    onClick={handleNewSubmission}
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-all"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-2 uppercase">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors text-slate-800"
                      required
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-2 uppercase">Phone No.</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors text-slate-800"
                      required
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-2 uppercase">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors text-slate-800"
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-2 uppercase">Message</label>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors text-slate-800"
                      placeholder="Optional message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white py-4 rounded-lg font-semibold text-lg uppercase hover:bg-slate-800 hover:scale-105 transition duration-300"
                  >
                    Submit
                  </button>

                  <p className="w-full py-4 text-xs text-center mt-4 text-gray-500">
                    Your information is safe with us.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
