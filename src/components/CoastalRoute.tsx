import React from "react";
import { ArrowUpRightIcon, Clock3Icon, MapPinIcon, RouteIcon } from "lucide-react";

export function CoastalRoute() {
  const stops = ["Galle", "Unawatuna", "Ahangama", "Weligama", "Mirissa"];
  return (
    <section className="w-full bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-12">
        <div><p className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-copper"><span className="h-px w-9 bg-copper" />Signature itinerary</p><h2 className="font-display text-[clamp(2.6rem,4.5vw,4.1rem)] uppercase leading-[.9] tracking-[-.03em] text-ink">Take the coastal route</h2><p className="mt-6 max-w-md text-[15px] leading-7 text-ink/65">One day, one exceptional stretch of road. Start with the fort walls, stop for a swim or a coffee, and arrive in Mirissa just as the light turns amber.</p><a href="#explore" className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-1 text-[11px] font-black uppercase tracking-[.14em] text-ink transition-colors duration-200 hover:border-copper hover:text-copper">Explore the route <ArrowUpRightIcon size={15} /></a></div>
        <div className="relative overflow-hidden bg-ink p-7 sm:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-copper/30" /><div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full border border-ivory/15" />
          <div className="relative"><div className="flex flex-wrap justify-between gap-5 border-b border-ivory/20 pb-7"><RouteInfo icon={<RouteIcon size={17} />} label="Distance" value="43 km" /><RouteInfo icon={<Clock3Icon size={17} />} label="Recommended" value="Full day" /><RouteInfo icon={<MapPinIcon size={17} />} label="Stops" value="5 places" /></div>
            <div className="mt-12 space-y-0">{stops.map((stop, index) => <div key={stop} className="relative flex items-center gap-5 pb-8 last:pb-0"><div className="relative z-10 grid h-7 w-7 place-items-center rounded-full border border-copper bg-ink text-[10px] font-black text-copper">{index + 1}</div>{index < stops.length - 1 && <span className="absolute left-[13px] top-7 h-8 w-px bg-copper" />}<span className="font-display text-2xl uppercase tracking-[-.01em] text-ivory">{stop}</span><span className="ml-auto text-[10px] font-bold uppercase tracking-[.12em] text-ivory/45">{index === 0 ? "Start" : index === stops.length - 1 ? "Finish" : "Stop"}</span></div>)}</div>
          </div>
        </div>
      </div>
    </section>);

}
function RouteInfo({ icon, label, value }: {icon: React.ReactNode;label: string;value: string;}) {return <div className="flex items-center gap-3 text-copper"><span>{icon}</span><span><span className="block text-[9px] font-bold uppercase tracking-[.14em] text-ivory/50">{label}</span><span className="mt-1 block text-sm font-bold text-ivory">{value}</span></span></div>;}