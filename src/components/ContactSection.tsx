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
          <div>
            <Image
              src="/images/EMBRACETHEWIND3.jpg"
              alt="Building Image"
              width={600}
              height={800}
              className="rounded-lg object-cover"
            />
          </div>
          {/* <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.3439257996515!2d72.61613147509716!3d23.19413357905394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b88c9293683%3A0x76f11a7d3831f354!2sEmbrace%20The%20Wind!5e0!3m2!1sen!2sin!4v1750259842747!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="rounded-md border-2 border-gray-200"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div> */}
          <ContactDetails />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GoogleMapEmbed />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
