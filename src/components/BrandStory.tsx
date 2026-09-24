import React from "react";
import { motion } from "framer-motion";
import { imageAssets } from "../data/content";

export function BrandStory() {
  return (
    <section id="story" className="w-full bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-4 lg:px-12">
        <motion.div initial={{ opacity: 0, scale: 1.04 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .7, ease: [0.23, 1, 0.32, 1] }} className="relative aspect-[4/3] overflow-hidden sm:aspect-[4/5] lg:aspect-auto">
          <img src={imageAssets.galleSurf} alt="Surfer riding a wave at Dewata Beach, Galle" className="h-full w-full object-cover" />
          <div className="absolute bottom-6 left-6 hidden max-w-[220px] rotate-[-2deg] border border-ink/15 bg-ivory/95 px-4 py-3 font-serif text-[13px] italic leading-snug text-ink/80 sm:block">— Dewata Beach, six minutes from our garage</div>
        </motion.div>
        <div className="flex flex-col justify-center lg:pl-14">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-copper"><span className="h-px w-9 bg-copper" />Why ride</p>
          <h2 className="max-w-lg font-display text-[clamp(2.3rem,10vw,2.6rem)] uppercase leading-[.92] tracking-[-0.03em] text-ink sm:text-[clamp(2.6rem,4.6vw,4.2rem)]">Your freedom to explore the south.</h2>
          <p className="mt-7 max-w-md text-[15px] leading-7 text-ink/70">The southern coast rewards travelers who can move on their own schedule. With a bike from Galle Ride Co., you reach quiet beaches, heritage streets, surf towns and back roads that taxis and buses simply don't cover — no waiting, no negotiating fares, no fixed itinerary.</p>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-ink/70">Every bike is inspected before it reaches you, every route recommendation comes from people who actually ride it, and support is one message away for the entire length of your stay.</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs font-bold uppercase tracking-[.14em] text-ink/50">
            <span className="font-display text-3xl tracking-tight text-ink">01</span> Galle
            <span className="h-px w-6 bg-ink/25" /> <span className="font-display text-3xl tracking-tight text-ink">02</span> Unawatuna
            <span className="h-px w-6 bg-ink/25" /> <span className="font-display text-3xl tracking-tight text-ink">03</span> Mirissa
          </div>
        </div>
      </div>
    </section>);

}
