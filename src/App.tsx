import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SocialSidebar from './components/SocialSidebar';
import AmenitiesSection from './components/AmenitiesSection';
import OverviewSection from './components/OverviewSection';
import AmenitiesGallery from './components/AmenitiesGallery';
import FloorPlansSection from './components/FloorPlansSection';
import LocationSection from './components/LocationSection';
import LifestyleSection from './components/LifestyleSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <OverviewSection />
      <AmenitiesSection />
      <AmenitiesGallery />
      <FloorPlansSection />
      <LocationSection />
      <LifestyleSection />
      <Footer />
      <SocialSidebar />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Embrace The Wind - The Classic Residence",
            "description": "Luxury 4BHK homes with triple height balconies in premium location",
            "telephone": "+91-80353-86343",
            "email": "info@embracethewind.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "52D, Bondel Road, Ballygunge Park",
              "addressLocality": "Ballygunge",
              "addressRegion": "Kolkata",
              "postalCode": "700019",
              "addressCountry": "IN"
            },
            "offers": {
              "@type": "Offer",
              "name": "4BHK Luxury Apartments",
              "description": "Elite living in 4BHK homes with triple height balconies"
            },
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Swimming Pool",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification", 
                "name": "Fitness Center",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Party Hall", 
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Children's Play Area",
                "value": true
              }
            ]
          })
        }}
      />
    </div>
  );
}

export default App;
