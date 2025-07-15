"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { useContactForm } from "../utils/useContactForm";

export default function GetInTouchModal() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    status,
    errors,
    resetForm,
  } = useContactForm("EnquiryForm");

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDepth =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);

      if (scrollDepth > 0.5 && !sessionStorage.getItem("modalShown")) {
        setIsOpen(true);
        sessionStorage.setItem("modalShown", "true");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNewSubmission = () => {
    resetForm();
    setSubmitted(false);
  };

  if (status && !submitted) setSubmitted(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl relative flex overflow-hidden">
        {/* Left Side - Image + Project Info */}
        <div className="w-1/2 bg-gray-100 p-6 hidden md:flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-5">Embrace The Wind</h3>
          <Image
            src="/ResizedImages/EMBRACE_THE_WIND_01.jpg"
            alt="Project"
            width={400}
            height={300}
            className="rounded-lg object-cover mb-4"
          />
          
          <p className="text-sm text-gray-500 mt-2 text-center px-4">
            Luxurious Living at S.G. Highway – Enquire now and get the brochure & best deals.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 relative">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitting && !submitted && (
            <div>
              <p className="text-sm text-gray-500 mb-4">
                Please fill in your details below and we will get in touch with you shortly.
              </p>
            </div>
          )}

          {isSubmitting ? (
            <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
              <div className="w-8 h-8 border-4 border-t-transparent border-orange-500 rounded-full animate-spin"></div>
              <span className="mt-3 text-sm text-gray-700">Submitting your enquiry...</span>
            </div>
          ) : submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <h4 className="text-2xl font-semibold text-green-700 mb-2">🎉 Thank you!</h4>
              <p className="text-gray-700 text-sm mb-6">
                We&apos;ve received your message and will call you shortly.
              </p>
              <button
                type="button"
                onClick={handleNewSubmission}
                className="bg-color-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-gray-600 font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-600 font-medium">Phone No.</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-gray-600 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-600 font-medium">Message (optional)</label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-color-light-orange hover:bg-color-orange text-white py-2 rounded-lg font-medium"
              >
                Get a Call
              </button>
            </form>
          )}

          <p className="text-xs text-gray-500 text-center mt-6">
            Your information is safe with us.
          </p>
        </div>
      </div>
    </div>
  );
}
