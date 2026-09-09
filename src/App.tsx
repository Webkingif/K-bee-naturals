import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WhyKbee } from './components/WhyKbee';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { InstagramSection } from './components/InstagramSection';
import { BookingCTA } from './components/BookingCTA';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { StyleLightbox } from './components/StyleLightbox';
import { GalleryItem } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleExploreStyles = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverClick = () => {
    const whySection = document.getElementById('whykbee');
    if (whySection) {
      whySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectGalleryLook = (item: GalleryItem) => {
    setActiveGalleryItem(item);
  };

  const handleCloseLightbox = () => {
    setActiveGalleryItem(null);
  };

  const handleBookFromLightbox = (item: GalleryItem) => {
    // Map category to service ID
    let srvId = 'natural-styling';
    if (item.category === 'braids' || item.category === 'twists' || item.category === 'locs') {
      srvId = 'protective-styles';
    } else if (item.category === 'special') {
      srvId = 'special-occasion';
    }
    handleOpenBooking(srvId);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#161815] flex flex-col font-sans selection:bg-[#F05A24] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreStyles={handleExploreStyles}
        />

        {/* 3. Social Proof Strip (Marquee) */}
        <SocialProof />

        {/* 4. About Section */}
        <About onDiscoverClick={handleDiscoverClick} />

        {/* 5. Services Section */}
        <Services onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* 6. Signature Styles / Gallery */}
        <Gallery
          onSelectLook={handleSelectGalleryLook}
          onViewMore={() => handleOpenBooking()}
        />

        {/* 7. Why KBee Section */}
        <WhyKbee onBookAppointment={() => handleOpenBooking()} />

        {/* 8. Before & After Transformation */}
        {/* <BeforeAfter /> */}

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Instagram Section */}
        <InstagramSection />

        {/* 11. Final CTA */}
        <BookingCTA
          onBookAppointment={() => handleOpenBooking()}
          onExploreStyles={handleExploreStyles}
        />

        {/* 12. Contact / Location */}
        <ContactLocation />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceId}
      />

      <StyleLightbox
        item={activeGalleryItem}
        onClose={handleCloseLightbox}
        onBookThisLook={handleBookFromLightbox}
      />
    </div>
  );
}
