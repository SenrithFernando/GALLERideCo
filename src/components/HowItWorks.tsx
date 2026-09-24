import React from "react";
import { motion } from "framer-motion";

const steps = [
["01", "Choose your bike", "Browse the fleet and pick the ride that fits your route and group."],
["02", "Select your dates", "Daily, weekly or long-term — set the pickup and return that suit your trip."],
["03", "Verify your documents", "Share your passport and licence details ahead of pickup for a fast handover."],
["04", "Pick up & ride", "Collect your bike near Galle Fort or arrange delivery, and head south."]];


export function HowItWorks() {
  return (
    <section id="guide" className="w-full bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <p className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-copper"><span className="h-px w-9 bg-copper" />How it works</p>
        <h2 className="max-w-xl font-display text-[clamp(2.6rem,4.6vw,4.2rem)] uppercase leading-[.9] tracking-[-0.03em] text-ink">Four steps to the open road</h2>
        <div className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink/15 lg:block" />
          {steps.map(([n, title, copy], i) =>
          <motion.div key={n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .5, delay: i * .08, ease: "easeOut" }} className="relative lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <span className="relative z-10 mb-6 block bg-ivory pr-6 font-display text-4xl text-ink/25 lg:inline-block">{n}</span>
              <h3 className="font-display text-xl uppercase tracking-[-0.01em] text-ink">{title}</h3>
              <p className="mt-3 max-w-[220px] text-[13px] leading-6 text-ink/60">{copy}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}