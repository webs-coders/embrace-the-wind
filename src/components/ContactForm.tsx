'use client';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // You can integrate EmailJS / Firebase / backend API here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Enquire</h3>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-3 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone No."
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 mb-3 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-3 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
