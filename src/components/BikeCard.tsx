import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";

interface BikeCardProps {
  name: string;cc: string;transmission: string;seats: string;price: string;weekly: string;image: string;label: string;status: string;
  onBook: () => void;
  onDetails: () => void;
}

export function BikeCard({ name, cc, transmission, seats, price, weekly, image, label, status, onBook, onDetails }: BikeCardProps) {
  return (
    <motion.article whileHover="hover" className="group flex min-w-[300px] flex-1 flex-col border border-ink/10 bg-ivory transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-72 overflow-hidden bg-ink/5">
        <motion.img variants={{ hover: { scale: 1.06 } }} transition={{ duration: .5, ease: [0.23, 1, 0.32, 1] }} src={image} alt={name} className="h-full w-full object-cover" />
        <span className="absolute left-4 top-4 bg-ink/85 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em] text-ivory">{status}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] font-bold uppercase tracking-[.16em] text-copper">{label}</p>
        <h3 className="mt-2 font-display text-3xl uppercase tracking-[-0.01em] text-ink">{name}</h3>
        <motion.div variants={{ hover: { height: "auto", opacity: 1, marginTop: 14 } }} initial={{ height: 0, opacity: 0, marginTop: 0 }} transition={{ duration: .3, ease: "easeOut" }} className="grid grid-cols-3 gap-2 overflow-hidden text-[11px] text-ink/60">
          <span><span className="block font-bold text-ink">{cc}</span>Engine</span>
          <span><span className="block font-bold text-ink">{transmission}</span>Gearbox</span>
          <span><span className="block font-bold text-ink">{seats}</span>Capacity</span>
        </motion.div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <div><span className="font-display text-2xl text-ink">LKR {price}</span><span className="text-xs text-ink/50"> / day</span><span className="mt-0.5 block text-[11px] text-ink/50">{weekly}</span></div>
          <div className="flex flex-col items-end gap-2"><button onClick={onDetails} className="text-[10px] font-bold uppercase tracking-[.1em] text-ink/55 transition-colors duration-200 hover:text-copper">View details</button><button onClick={onBook} className="flex items-center gap-2 border-b border-ink pb-0.5 text-[11px] font-black uppercase tracking-[.1em] text-ink transition-colors duration-200 hover:border-copper hover:text-copper">Book now <ArrowUpRightIcon size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button></div>
        </div>
      </div>
    </motion.article>);

}