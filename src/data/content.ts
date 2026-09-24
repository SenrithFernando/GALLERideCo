export const imageAssets = {
  hero: "/5ea6881e-4a43-4bac-b35c-805e292ee684.jpg",
  scooter: "/34e7c3f6-a8c6-435e-88d4-682a8024bde5.jpg",
  motorbike: "/fe732fac-1094-4c26-a1f0-216e9d135b17.jpg",
  fort: "/f10b624e-3273-44cb-9875-0bf8d82a140e.jpg",
  journal: "/7fba6ad9-489d-4e3a-b909-82864355a3ef.jpg",
  galleFort: "/galle-fort-lighthouse.jpg",
  galleSurf: "/galle-dewata-surf.jpg",
  mirissa: "/mirissa-coconut-tree-hill.jpg"
};

export type BikeCategory = "All" | "Scooters" | "Motorbikes" | "Premium";

export const bikes = [
{ name: "Honda Dio", category: "Scooters", cc: "110cc", transmission: "Automatic", seats: "2 riders", price: "3,500", weekly: "LKR 20,000/week", image: imageAssets.scooter, label: "Easy coastal days", status: "Available today" },
{ name: "Yamaha FZ-S", category: "Motorbikes", cc: "155cc", transmission: "Manual", seats: "2 riders", price: "5,500", weekly: "LKR 33,000/week", image: imageAssets.motorbike, label: "Built for the long way", status: "2 left this week" },
{ name: "TVS Ntorq Race", category: "Premium", cc: "125cc", transmission: "Automatic", seats: "2 riders", price: "4,500", weekly: "LKR 27,000/week", image: imageAssets.scooter, label: "Agile around Galle", status: "Available today" }];


export const destinations = [
{ name: "Galle Fort", distance: "2 km from Galle", time: "8 min ride", copy: "Golden walls, ocean air and a slow lap around the old town.", image: imageAssets.galleFort, size: "large" },
{ name: "Unawatuna", distance: "6 km from Galle", time: "18 min ride", copy: "A sun-washed bay with a quieter route to Jungle Beach.", image: imageAssets.hero, size: "tall" },
{ name: "Ahangama", distance: "24 km from Galle", time: "45 min ride", copy: "Palm-lined curves, surf breaks and roadside coffee stops.", image: imageAssets.journal, size: "wide" },
{ name: "Mirissa", distance: "42 km from Galle", time: "75 min ride", copy: "Take the coast south for beaches that deserve an unhurried afternoon.", image: imageAssets.mirissa, size: "small" }];


export const reviews = [
{ quote: "Renting the scooter was incredibly easy. We explored Galle, Unawatuna and Ahangama without depending on tuk-tuks.", name: "Elena R.", place: "Italy · Honda Dio" },
{ quote: "The helmets were clean, the bike was immaculate, and the local route advice was genuinely useful.", name: "Max T.", place: "Germany · Yamaha FZ-S" },
{ quote: "A really straightforward, thoughtful service for travelers who want to see more of the south.", name: "Sophie K.", place: "Australia · TVS Ntorq" }];


export const faqs = [
["What documents do tourists need?", "Bring your passport, a valid driving licence and any applicable local driving authorization. Requirements can vary, so message us before your trip and we will confirm exactly what you need."],
["Is a helmet provided?", "Yes. Every rental includes clean, well-maintained helmets for both riders where needed."],
["Can the bike be delivered to my hotel?", "Pickup and delivery can be arranged around Galle, Galle Fort and nearby south-coast stays, subject to availability."],
["Can I rent for one week or longer?", "Absolutely. Our weekly and long-stay prices make it easy to settle into the south at your own pace."],
["What happens if the bike has a problem?", "Contact our local support team by WhatsApp. We will help troubleshoot or arrange assistance as quickly as possible."],
["Is there a security deposit?", "Some rentals require a refundable deposit. We will make this clear before you confirm your booking."]];
