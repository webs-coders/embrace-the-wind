import { MapPin, Phone, Mail } from "lucide-react";

const ContactDetails = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-200 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#B36930] mb-8 border-l-4 border-[#B36930] pl-4">
        Contact Us
      </h2>

      <div className="space-y-8 text-gray-800">
        {/* Address */}
        <div className="flex items-start gap-5">
          <div className="bg-[#FFF3E9] text-[#B36930] p-3 rounded-xl">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <p className="text-lg font-medium">Address</p>
            <p className="text-gray-600 leading-relaxed">
              Embrace The Wind, B/h McDonald&apos;s on S.G. Highway, Sargasan Cross Road,<br />
              Sargasan, Gandhinagar – 382421.
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-5">
          <div className="bg-[#FFF3E9] text-[#B36930] p-3 rounded-xl">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <p className="text-lg font-medium">Phone</p>
            <p className="text-gray-600">+91 9797976577</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-5">
          <div className="bg-[#FFF3E9] text-[#B36930] p-3 rounded-xl">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <p className="text-lg font-medium">Email</p>
            <p className="text-gray-600">Embracethewind33@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
