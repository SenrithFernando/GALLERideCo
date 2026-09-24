import React, { useEffect, useState } from "react";
import { MenuIcon, MessageCircleIcon, XIcon } from "lucide-react";

interface NavbarProps {
  onBook: () => void;
}

export function Navbar({ onBook }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
  ["Home", "home"], ["Our bikes", "fleet"], ["Explore Galle", "explore"], ["Rental guide", "guide"], ["About", "about"], ["Contact", "contact"]];


  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ${scrolled ? "bg-ink/95 py-3 shadow-lg backdrop-blur-md" : "bg-transparent py-5"}`}>
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <button onClick={() => navigate("home")} className="group flex min-w-0 items-center gap-2 text-left sm:gap-3" aria-label="Galle Ride Co. home">
          <span className="grid h-9 w-9 place-items-center border border-copper text-[11px] font-black tracking-[-0.12em] text-copper transition-transform duration-300 group-hover:scale-95">GR</span>
          <span className="font-display text-lg uppercase tracking-[0.08em] text-ivory sm:text-2xl sm:tracking-[0.12em]">Galle Ride <i className="font-serif font-normal normal-case tracking-normal">Co.</i></span>
        </button>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, id]) => <button key={id} onClick={() => navigate(id)} className="text-[11px] font-bold uppercase tracking-[0.15em] text-ivory/75 transition-colors duration-200 hover:text-copper">{label}</button>)}
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <a href="https://wa.me/94770000000" className="grid h-10 w-10 place-items-center border border-ivory/30 text-ivory transition-[border-color,color] duration-200 hover:border-copper hover:text-copper" aria-label="Chat on WhatsApp"><MessageCircleIcon size={18} /></a>
          <button onClick={onBook} className="bg-copper px-5 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-ink transition-[background-color,transform] duration-200 hover:bg-ivory hover:-translate-y-0.5">Book a bike</button>
        </div>
        <button className="grid h-10 w-10 place-items-center border border-ivory/30 text-ivory lg:hidden" onClick={() => setIsOpen(true)} aria-label="Open navigation"><MenuIcon size={21} /></button>
      </nav>
      {isOpen && <div className="absolute inset-x-0 top-0 min-h-screen bg-ink px-6 py-5 lg:hidden">
        <div className="flex items-center justify-between"><span className="font-display text-xl uppercase tracking-[0.12em] text-ivory">Galle Ride Co.</span><button className="grid h-10 w-10 place-items-center border border-ivory/30 text-ivory" onClick={() => setIsOpen(false)} aria-label="Close navigation"><XIcon /></button></div>
        <div className="mt-20 flex flex-col items-start gap-7">{links.map(([label, id]) => <button key={id} onClick={() => navigate(id)} className="font-display text-4xl uppercase tracking-wide text-ivory">{label}</button>)}</div>
        <button onClick={() => {setIsOpen(false);onBook();}} className="mt-14 w-full bg-copper py-4 text-xs font-black uppercase tracking-[0.16em] text-ink">Book a bike</button>
      </div>}
    </header>);

}
