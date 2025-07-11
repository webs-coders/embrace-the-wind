"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function GetInTouchModal() {
  const [isOpen, setIsOpen] = useState(false);

  // 👇 Trigger modal on scroll depth
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl relative p-6">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Get in Touch</h2>
        <p className="text-sm text-gray-500 mb-4">
          Please fill in your details below and we will get in touch with you shortly.
        </p>

        <div className="rounded-xl overflow-hidden mb-4">
          <Image
            src="/images/EMBRACETHEWIND1.jpg"
            alt="Project"
            width={600}
            height={300}
            className="w-full h-40 object-cover"
          />
          <p className="px-3 py-2 text-sm font-medium text-gray-700">
            Embrace The Wind
          </p>
        </div>

        <form className="space-y-4 text-sm">
          <div>
            <label className="block text-gray-600 font-medium">I am interested in</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex gap-2">
            <select className="border border-gray-300 rounded-lg px-2 py-2 text-sm bg-white">
              <option value="+91">+91 India</option>
              <option value="+1">+1 USA</option>
              <option value="+44">+44 UK</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-gray-600 text-xs">
              I agree to <a className="text-purple-600 underline">T&C</a> and{" "}
              <a className="text-purple-600 underline">Privacy Policy</a>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff8c00] hover:bg-purple-700 text-white py-2 rounded-lg font-medium"
          >
            Get a Call
          </button>
        </form>
      </div>
    </div>
  );
}