import React from "react";
import { motion } from "framer-motion";
import { imageAssets } from "../data/content";

const journalImages = [
{ src: imageAssets.journal, alt: "A coastal cafe stop", className: "row-span-2 min-h-[420px]" },
{ src: imageAssets.fort, alt: "Galle Fort in morning light", className: "min-h-[200px]" },
{ src: imageAssets.hero, alt: "Rider on the Galle coast", className: "min-h-[200px]" },
{ src: imageAssets.motorbike, alt: "Motorbike ready for a coastal route", className: "min-h-[240px] sm:col-span-2" }];


export function PhotoJournal() {
  return <section className="w-full bg-ivory py-24 sm:py-32"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-copper"><span className="h-px w-9 bg-copper" />Field notes</p><h2 className="font-display text-[clamp(2.5rem,4.5vw,4rem)] uppercase leading-[.9] tracking-[-.03em] text-ink">Stories from the road</h2></div><p className="max-w-xs text-sm leading-6 text-ink/60">Tiny moments from the coast: the bends, the beach stops and the route between them.</p></div><div className="mt-14 grid auto-rows-[200px] gap-3 sm:grid-cols-2 lg:grid-cols-4">{journalImages.map((image, index) => <motion.figure key={image.alt} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: index * .06, ease: "easeOut" }} className={`group relative overflow-hidden ${image.className}`}><img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />{index === 0 && <figcaption className="absolute bottom-4 left-4 bg-ivory px-3 py-2 text-[10px] font-black uppercase tracking-[.14em] text-ink">Coffee stop · Unawatuna</figcaption>}</motion.figure>)}</div></div></section>;
}
