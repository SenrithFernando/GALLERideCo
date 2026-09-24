import React, { FormEvent, useState } from "react";
import { ArrowDownIcon, ArrowUpRightIcon, CalendarDaysIcon, ChevronDownIcon, MapPinIcon, MessageCircleIcon, SearchIcon } from "lucide-react";
import { motion } from "framer-motion";
import { imageAssets } from "../data/content";

interface HeroProps {onBook: () => void;}

export function Hero({ onBook }: HeroProps) {
  const [submitted, setSubmitted] = useState(false);
  const submitBooking = (event: FormEvent) => {event.preventDefault();setSubmitted(true);};
  return <>
    <section id="home" className="relative flex min-h-[800px] w-full items-end overflow-hidden bg-ink pb-28 pt-32 sm:min-h-[860px] lg:pb-40">
      <motion.img initial={{ scale: 1.06 }} animate={{ scale: 1 }} transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }} src={imageAssets.hero} alt="Rider and scooter on the coast near Galle" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-ink/50" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .45, ease: "easeOut" }} className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-copper"><span className="h-px w-9 bg-copper" />Bike rental · Galle · Sri Lanka</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28, duration: .65, ease: [0.23, 1, 0.32, 1] }} className="max-w-4xl font-display text-[clamp(3.6rem,8vw,8rem)] uppercase leading-[.82] tracking-[-0.055em] text-ivory">Ride Galle.<br /><span className="text-copper">Explore</span> beyond.</motion.h1>
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .46, duration: .5, ease: "easeOut" }} className="mt-8 flex max-w-xl flex-col gap-7 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xs text-sm leading-6 text-ivory/85">Reliable bikes, flexible rentals and local support for travelers discovering Sri Lanka’s southern coast.</p>
          <div className="flex flex-wrap gap-3"><button onClick={onBook} className="group flex items-center gap-4 bg-copper px-5 py-4 text-[11px] font-black uppercase tracking-[0.14em] text-ink transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-ivory">Find your bike <ArrowUpRightIcon size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button><a href="https://wa.me/94770000000" className="flex items-center gap-3 border border-ivory/40 px-5 py-4 text-[11px] font-black uppercase tracking-[0.14em] text-ivory transition-[border-color,color] duration-200 hover:border-copper hover:text-copper"><MessageCircleIcon size={15} /> WhatsApp us</a></div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }} className="mt-12 flex max-w-xl flex-wrap gap-x-6 gap-y-3 border-t border-ivory/25 pt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-ivory/80"><span>Helmet included</span><span>Tourist friendly</span><span>Daily & weekly rentals</span><span>Local support</span></motion.div>
      </div>
      <a href="#story" className="absolute bottom-9 right-5 flex flex-col items-center gap-2 text-[9px] font-bold uppercase tracking-[.2em] text-ivory/80 sm:right-10"><span className="hidden sm:block">Scroll to explore</span><ArrowDownIcon size={17} className="animate-bounce" /></a>
    </section>
    <section className="relative z-10 -mt-16 px-4 sm:-mt-20 sm:px-8 lg:px-12">
      <form onSubmit={submitBooking} className="mx-auto grid max-w-[1320px] gap-px bg-ink/15 shadow-2xl sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.1fr_auto]">
        <BookingField icon={<CalendarDaysIcon size={17} />} label="Pickup date" value="14 Nov 2026" />
        <BookingField icon={<CalendarDaysIcon size={17} />} label="Return date" value="18 Nov 2026" />
        <BookingField icon={<ChevronDownIcon size={17} />} label="Bike type" value="Any bike" />
        <BookingField icon={<MapPinIcon size={17} />} label="Pickup location" value="Galle Fort" />
        <button type="submit" className="flex min-h-[88px] items-center justify-center gap-3 bg-copper px-7 text-[11px] font-black uppercase tracking-[.14em] text-ink transition-[background-color] duration-200 hover:bg-ink hover:text-ivory"><SearchIcon size={17} /> Check availability</button>
      </form>
      {submitted && <p className="mx-auto max-w-[1320px] bg-ink px-5 py-3 text-center text-xs text-ivory">We have your dates — <button onClick={onBook} className="font-bold text-copper underline underline-offset-4">view matching bikes</button>.</p>}
    </section>
  </>;
}

function BookingField({ icon, label, value }: {icon: React.ReactNode;label: string;value: string;}) {return <label className="flex min-h-[88px] cursor-pointer items-center gap-3 bg-ivory px-5 text-ink"><span className="text-copper">{icon}</span><span><span className="block text-[9px] font-black uppercase tracking-[.16em] text-ink/45">{label}</span><span className="mt-1 block text-sm font-semibold">{value}</span></span></label>;}