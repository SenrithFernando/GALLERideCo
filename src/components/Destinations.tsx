import React from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { destinations } from "../data/content";

export function Destinations() {
  return (
    <section id="explore" className="w-full bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-copper"><span className="h-px w-9 bg-copper" />South coast notes</p><h2 className="font-display text-[clamp(2.6rem,4.6vw,4.2rem)] uppercase leading-[.9] tracking-[-0.03em] text-ink">Where will you ride?</h2></div>
          <p className="max-w-xs text-sm leading-6 text-ink/60">A few stops worth making when you have two wheels and nowhere urgent to be.</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {destinations.map((destination, index) => <DestinationTile key={destination.name} {...destination} index={index} />)}
        </div>
      </div>
    </section>);

}

function DestinationTile({ name, distance, time, copy, image, size, index }: {name: string;distance: string;time: string;copy: string;image: string;size: string;index: number;}) {
  const classes = size === "large" ? "lg:col-span-2 lg:row-span-2 min-h-[500px]" : size === "tall" ? "lg:row-span-2 min-h-[500px]" : "min-h-[280px]";
  return <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08, duration: .45, ease: "easeOut" }} className={`group relative overflow-hidden ${classes}`}>
    <img src={image} alt={name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
    <div className="absolute inset-0 bg-ink/20 transition-colors duration-300 group-hover:bg-ink/45" />
    <div className="absolute inset-x-0 bottom-0 p-5 text-ivory sm:p-6">
      <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[.16em] text-copper">{distance} · {time}</span><ArrowUpRightIcon size={16} /></div>
      <h3 className="mt-2 font-display text-3xl uppercase leading-none tracking-[-.02em]">{name}</h3>
      <p className="mt-2 max-w-sm text-[13px] leading-5 text-ivory/75">{copy}</p>
    </div>
  </motion.article>;
}