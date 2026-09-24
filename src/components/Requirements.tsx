import React from "react";
import { CheckIcon, MessageCircleIcon } from "lucide-react";

const items = [
["Valid passport", "Required for every rental as identification and reference."],
["Driving licence required", "A valid licence covering the bike category you plan to ride."],
["Local driving authorization", "Some tourists need a Sri Lankan permit — confirm your case with us before arrival."],
["Refundable deposit where applicable", "Returned in full once the bike comes back in its original condition."],
["Rental agreement", "A short, plain-language agreement covering the terms of your rental."]];


export function Requirements() {
  return (
    <section id="requirements" className="w-full bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-12">
        <div>
          <p className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-copper"><span className="h-px w-9 bg-copper" />For tourists</p>
          <h2 className="max-w-md font-display text-[clamp(2.4rem,4.2vw,3.8rem)] uppercase leading-[.92] tracking-[-0.03em] text-ivory">Everything you need before you ride</h2>
          <div className="mt-10 border border-ivory/20 bg-ivory/5 p-6">
            <p className="text-sm leading-6 text-ivory/75">Not sure what documents you need? Message us before your trip and we'll confirm exactly what applies to your nationality and stay.</p>
            <a href="https://wa.me/94770000000" className="mt-5 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[.14em] text-copper"><MessageCircleIcon size={15} /> Ask on WhatsApp</a>
          </div>
        </div>
        <ul className="mt-12 flex flex-col divide-y divide-ivory/10 border-t border-ivory/10 lg:mt-0">
          {items.map(([title, copy]) =>
          <li key={title} className="flex gap-4 py-6">
              <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center border border-copper text-copper"><CheckIcon size={13} /></span>
              <div><h3 className="font-display text-lg uppercase tracking-[-0.01em] text-ivory">{title}</h3><p className="mt-1.5 max-w-md text-[13px] leading-6 text-ivory/60">{copy}</p></div>
            </li>
          )}
        </ul>
      </div>
    </section>);

}