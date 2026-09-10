import {
  img,
  showreelUrl as reelUrl,
  process as processSteps,
  services as serviceList,
} from "@/lib/site-data";

export const logoUrl = img.logo;
export const showreelUrl = reelUrl;

export const company = {
  name: "Parkland Real Estate",
  tagline: "Smart Deals. Real Returns.",
  since: "Trusted DHA Lahore property specialists",
  phoneDisplay: "0321 8464704",
  phoneTel: "+923218464704",
  whatsapp:
    "https://wa.me/923218464704?text=Hello%20Parkland%20Real%20Estate%2C%20I%20would%20like%20to%20discuss%20a%20property.",
  email: "info@parklandrealestate.pk",
  addressShort: "DHA Phase-6, Lahore",
  address: "Plaza No 2, First Floor, Sector L, Phase-6, DHA, Lahore",
  hours: "Always open · 7 days a week",
  socials: [
    { label: "Instagram", href: "https://instagram.com/parklandrealestate" },
    { label: "Facebook", href: "https://facebook.com/parklandrealestate" },
    { label: "YouTube", href: "https://youtube.com/@parklandrealestate" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  status: "Available" | "Under Offer" | "Sold";
  category: "Luxury Home" | "Residential Plot" | "Commercial" | "Investment";
  image: string;
  gallery: string[];
  blurb: string;
};

export const projects: Project[] = [
  {
    slug: "dha-phase-6-luxury-home",
    title: "2 Kanal Luxury Home",
    location: "DHA Lahore Phase 6",
    status: "Available",
    category: "Luxury Home",
    image: img.luxuryVilla,
    gallery: [img.luxuryVilla, img.luxuryHouse, img.modernVilla],
    blurb: "A spacious luxury home in one of DHA Lahore's most sought-after residential phases.",
  },
  {
    slug: "dha-phase-5-family-villa",
    title: "1 Kanal Family Villa",
    location: "DHA Lahore Phase 5",
    status: "Available",
    category: "Luxury Home",
    image: img.spanishVilla,
    gallery: [img.spanishVilla, img.courtyard, img.classicMansion],
    blurb: "A move-in-ready villa with generous living spaces and a prime residential location.",
  },
  {
    slug: "dha-phase-8-commercial-plot",
    title: "Commercial Plot Opportunity",
    location: "DHA Lahore Phase 8",
    status: "Available",
    category: "Commercial",
    image: img.classicMansion,
    gallery: [img.classicMansion, img.courtyard, img.completedVilla],
    blurb:
      "A high-potential commercial opportunity positioned for future growth and strong demand.",
  },
  {
    slug: "dha-phase-6-modern-residence",
    title: "Modern Luxury Residence",
    location: "DHA Lahore Phase 6",
    status: "Available",
    category: "Luxury Home",
    image: img.luxuryHouse,
    gallery: [img.luxuryHouse, img.modernVilla, img.brickFront],
    blurb: "A polished modern residence for buyers seeking comfort, design, and lasting value.",
  },
  {
    slug: "dha-phase-9-residential-plot",
    title: "Residential Plot",
    location: "DHA Lahore Phase 9",
    status: "Available",
    category: "Residential Plot",
    image: img.modernVilla,
    gallery: [img.modernVilla, img.greyClassic, img.brickFront],
    blurb: "A verified residential plot for a custom home in a developing DHA phase.",
  },
  {
    slug: "dha-phase-6-corporate-office",
    title: "Corporate Office Building",
    location: "DHA Lahore Phase 6",
    status: "Available",
    category: "Commercial",
    image: img.brickFront,
    gallery: [img.brickFront, img.greyClassic, img.luxuryHouse],
    blurb:
      "A prominent commercial building suited to a corporate office or income-focused investment.",
  },
];

export const services = serviceList.map((s) => ({ title: s.title, body: s.body }));
export const process = processSteps;
