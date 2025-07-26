'use client';
import Image from 'next/image';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import GoogleMapEmbed from './GoogleMapEmbed';

const ContactSection = () => {
  return (
    <section className="bg-white text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          <GoogleMapEmbed />
          <ContactDetails />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/ResizedImages/EMBRACE_THE_WIND_29.jpg"
              alt="Building Image"
              width={600}
              height={800}
              className="rounded-lg object-cove h-100"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
