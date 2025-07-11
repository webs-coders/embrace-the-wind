"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ErrorState {
  name: string | null;
  email: string | null;
  phone: string | null;
}

export default function BrochureFormModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorState>({
    name: null,
    email: null,
    phone: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error as user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  const handleDownload = () => {
    const newErrors: ErrorState = {
      name: formData.name.trim() ? null : "Name is required",
      email: formData.email.trim() ? null : "Email is required",
      phone: formData.phone.trim() ? null : "Phone number is required",
    };

    if (newErrors.name || newErrors.email || newErrors.phone) {
      setErrors(newErrors);
      return;
    }

    // Trigger download
    const brochureUrl = "/EmbraceTheWind.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "EmbraceTheWind.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onClose(); // Close modal after download
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

    <div className="space-y-5 text-black">
      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full border-b outline-none py-2 ${
            errors.name ? "border-red-500" : "border-black"
          }`}
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
          className={`w-full border-b outline-none py-2 ${
            errors.email ? "border-red-500" : "border-black"
          }`}
        />
        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
      </div>

      {/* Phone Field */}
      <div>
        <label className="block text-sm font-medium">Contact No</label>
        <div
          className={`flex border-b py-2 gap-2 ${
            errors.phone ? "border-red-500" : "border-black"
          }`}
        >
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
          onClick={handleDownload}
          className="w-full bg-[#ff8c00] text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</div>

  );
}
