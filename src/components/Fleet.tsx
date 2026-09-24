import React, { useState } from "react";
import { motion } from "framer-motion";
import { bikes, BikeCategory } from "../data/content";
import { BikeCard } from "./BikeCard";
import { BikeDetailModal } from "./BikeDetailModal";

interface FleetProps {onBook: () => void;}
const categories: BikeCategory[] = ["All", "Scooters", "Motorbikes", "Premium"];

export function Fleet({ onBook }: FleetProps) {
  const [active, setActive] = useState<BikeCategory>("All");
  const [selectedBike, setSelectedBike] = useState<(typeof bikes)[number] | null>(null);
  const filtered = active === "All" ? bikes : bikes.filter((b) => b.category === active);
  return (
    <section id="fleet" className="w-full bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-copper"><span className="h-px w-9 bg-copper" />The fleet</p>
            <h2 className="font-display text-[clamp(2.6rem,4.6vw,4.2rem)] uppercase leading-[.9] tracking-[-0.03em] text-ivory">Choose your ride</h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-ivory/65">From easy city scooters to powerful bikes for longer coastal journeys.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => <button key={c} onClick={() => setActive(c)} className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-[.1em] transition-colors duration-200 ${active === c ? "bg-copper text-ink" : "border border-ivory/25 text-ivory/70 hover:border-copper hover:text-copper"}`}>{c}</button>)}
          </div>
        </div>
        <motion.div layout className="mt-14 flex snap-x gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {filtered.map((bike) => <div key={bike.name} className="snap-start"><BikeCard {...bike} onBook={onBook} onDetails={() => setSelectedBike(bike)} /></div>)}
        </motion.div>
      </div>
      <BikeDetailModal bike={selectedBike} onClose={() => setSelectedBike(null)} onBook={onBook} />
    </section>);

}