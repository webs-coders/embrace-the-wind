import { MapPin, Phone, Mail } from "lucide-react";

const ContactDetails = () => {
  return (
  <div className="bg-white-100 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-l-4 border-orange-500 pl-4">
        Contact Us
      </h2>

      <div className="space-y-6 text-gray-700">
        <div className="flex items-start gap-4">
          <MapPin className="text-orange-500 mt-1" />
          <div>
            <p className="font-semibold">Address:</p>
            <p>
              Embrace The Wind, B/h McDonald's On S.G. Highway, Sargasan Cross
              Road, Sargasan, Gandhinagar - 382421.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="text-orange-500 mt-1" />
          <div>
            <p className="font-semibold">Phone:</p>
            <p>+91 9797976577</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="text-orange-500 mt-1" />
          <div>
            <p className="font-semibold">Email:</p>
            <p>Embracethewind33@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ContactDetails;
