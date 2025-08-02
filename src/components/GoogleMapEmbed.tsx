const GoogleMapEmbed = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.3439257996515!2d72.61613147509716!3d23.19413357905394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b88c9293683%3A0x76f11a7d3831f354!2sEmbrace%20The%20Wind!5e0!3m2!1sen!2sin!4v1750259842747!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="bg-white/80 h-full backdrop-blur-md rounded-3xl shadow-xl border border-gray-200 max-w-3xl mx-auto"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
