'use client';
import { useContactForm } from '../utils/useContactForm';
import { useState } from 'react';

const ContactForm = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    status,
    errors,
    resetForm,
  } = useContactForm();

  const [submitted, setSubmitted] = useState(false);

  const handleNewSubmission = () => {
    resetForm();
    setSubmitted(false);
  };

  if (status && !submitted) setSubmitted(true);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-2xl shadow-xl transition-all duration-300 ease-in-out"
    >
      {!isSubmitting && !submitted && (
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Send Us a Quick Message
        </h3>
      )}

      {isSubmitting ? (
        <div className="flex flex-col items-center justify-center py-10 animate-fade-in">
          <div className="w-8 h-8 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
          <span className="mt-3 text-sm text-gray-700">Submitting your enquiry...</span>
        </div>
      ) : submitted ? (
        <div className="text-center py-12 animate-fade-in">
          <h4 className="text-2xl font-semibold text-green-700 mb-2">🎉 Thank you!</h4>
          <p className="text-gray-700 text-sm mb-6">
            We&apos;ve received your message and will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={handleNewSubmission}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-all"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-1 border border-gray-300 rounded"
            required
          />
          {errors.name && <p className="text-red-600 text-sm mb-2">{errors.name}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Phone No."
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-1 border border-gray-300 rounded"
            required
          />
          {errors.phone && <p className="text-red-600 text-sm mb-2">{errors.phone}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-1 border border-gray-300 rounded"
            required
          />
          {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email}</p>}

          <input
            type="text"
            name="message"
            placeholder="Drop your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Submit Enquiry
          </button>
        </>
      )}

      <p className="w-full py-4 text-xs text-center mt-4 text-gray-500">
        Your information is safe with us.
      </p>
    </form>
  );
};

export default ContactForm;
