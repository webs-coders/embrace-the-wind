"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function EmbraceChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [playSound, setPlaySound] = useState(false);

  const phoneNumber = "919797976577";
  const message = "Hi! I'm interested in Embrace The Wind project. Please assist me.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Trigger notification after 7s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
        setPlaySound(true);
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Play sound effect
  useEffect(() => {
    if (playSound) {
      const audio = new Audio("/sounds/notification.mp3");
      audio.play().catch((e) => console.warn("Sound play blocked:", e));
      setPlaySound(false);
    }
  }, [playSound]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowNotification(false);
  };

  return (
    <>
      {/* Floating Button with +1 Badge */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          <button
            onClick={handleOpen}
            className="relative bg-color-orange text-white rounded-full p-4 shadow-2xl animate-pulse hover:scale-105 transition-transform"
            aria-label="Open Embrace AI Assistant"
          >
            <MessageCircle className="w-6 h-6" />
            {showNotification && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-md animate-ping-fast">
                +1
              </span>
            )}
          </button>
        </div>
      )}

      {/* Chatbox Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100 animate-chat-slide-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold tracking-wide text-base">
              🤖 Embrace AI Assistant
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:scale-110 transition"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 text-sm text-gray-800 h-56 overflow-y-auto custom-scrollbar">
            <p>👋 Welcome to <span className="font-semibold text-black">Embrace The Wind</span>.</p>
            <p>I’m your smart assistant. I can help you with:</p>
            <ul className="list-disc ml-5 text-gray-600">
              <li>📍 Project location & landmarks</li>
              <li>💰 Pricing, offers, EMI options</li>
              <li>📐 Floor plans & carpet area</li>
              <li>📅 Site visit bookings</li>
            </ul>
            <p>Click below to continue the chat on WhatsApp. Our team will respond instantly.</p>
          </div>

          {/* Footer CTA */}
          <div className="border-t px-4 py-3 bg-gray-50">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white w-full block text-center py-2 rounded-lg font-medium"
            >
              💬 Continue on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Animations + Scrollbar */}
      <style jsx global>{`
        @keyframes chat-slide-in {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes ping-fast {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        .animate-chat-slide-in {
          animation: chat-slide-in 0.3s ease-out forwards;
        }

        .animate-ping-fast {
          animation: ping-fast 1s ease-in-out infinite;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e0a84c;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
}
