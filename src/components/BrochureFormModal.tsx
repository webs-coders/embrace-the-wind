"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useContactForm } from "../utils/useContactForm";

export default function BrochureFormModal({ onClose }: { onClose: () => void }) {
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    status,
    errors,
    resetForm,
  } = useContactForm("DownloadForm");

  const [submitted, setSubmitted] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
  e.preventDefault();

  const formSubmitSuccess = await handleSubmit(e, { silent: true }); // we'll modify the hook to support this

  if (formSubmitSuccess) {
    const brochureUrl = "/EmbraceTheWind.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "EmbraceTheWind.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onClose(); // Close modal only after successful download
  }
};

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div className="relative bg-[#fff] max-w-lg w-full p-8 rounded-lg shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-[#ff8c00] rounded-full p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-playfair font-semibold mb-8 text-black">
          DOWNLOAD BROCHURE
        </h2>

        <form onSubmit={handleDownload} className="space-y-5 text-black">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border-b outline-none py-2 ${errors.name ? "border-red-500" : "border-black"}`}
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border-b outline-none py-2 ${errors.email ? "border-red-500" : "border-black"}`}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium">Contact No</label>
            <div className={`flex border-b py-2 gap-2 ${errors.phone ? "border-red-500" : "border-black"}`}>
              <span className="text-black">+91</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 outline-none text-black"
              />
            </div>
            {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-black outline-none py-2 resize-none text-black"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ff8c00] text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
            >
              {isSubmitting ? "Submitting..." : "Send & Download"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
