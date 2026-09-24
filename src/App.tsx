import React, { useState } from "react";
import { MessageCircleIcon } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandStory } from "./components/BrandStory";
import { Fleet } from "./components/Fleet";
import { HowItWorks } from "./components/HowItWorks";
import { Requirements } from "./components/Requirements";
import { Destinations } from "./components/Destinations";
import { CoastalRoute } from "./components/CoastalRoute";
import { WhyUs } from "./components/WhyUs";
import { Reviews } from "./components/Reviews";
import { PhotoJournal } from "./components/PhotoJournal";
import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";

export function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-ivory font-sans text-ink">
      <Navbar onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <BrandStory />
        <Fleet onBook={openBooking} />
        <HowItWorks />
        <Requirements />
        <Destinations />
        <CoastalRoute />
        <WhyUs />
        <Reviews />
        <PhotoJournal />
        <About />
        <FAQ />
        <FinalCTA onBook={openBooking} />
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/15 bg-ivory p-2 shadow-[0_-6px_20px_rgba(16,24,32,.14)] sm:hidden">
        <a href="https://wa.me/94770000000" className="flex items-center justify-center gap-2 py-3 text-[10px] font-black uppercase tracking-[.12em] text-ink"><MessageCircleIcon size={15} /> WhatsApp</a>
        <button onClick={openBooking} className="bg-copper py-3 text-[10px] font-black uppercase tracking-[.12em] text-ink">Book bike</button>
      </div>
    </div>);

}