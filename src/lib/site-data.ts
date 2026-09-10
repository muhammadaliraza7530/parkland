/**
 * Single source of truth for all site content.
 * Every media file lives in /public and is referenced with an absolute path,
 * so it works identically on the preview, on Lovable hosting and on Vercel.
 */

export const img = {
  logo: "/logo.jpeg",

  // Photoreal hero / feature photography
  spanishVilla: "/homes/hero-spanish.jpg",
  luxuryVilla: "/homes/hero-villa.jpg",
  luxuryHouse: "/homes/hero-luxury.jpg",
  courtyard: "/homes/hero-courtyard.jpg",

  // Real house photography
  modernVilla: "/homes/home-1.jpg",
  classicMansion: "/homes/home-2.jpg",
  greyClassic: "/homes/home-3.jpg",
  completedVilla: "/homes/home-4.jpg",
  brickFront: "/homes/home-5.jpg",
};

export const showreelUrl = "/video/showreel.mp4";

export const site = {
  name: "Parkland Real Estate",
  short: "Parkland",
  fullName: "Parkland Real Estate",
  tagline: "Smart Deals. Real Returns.",
  logo: img.logo,
  address: "Plaza No 2, First Floor, Sector L, Phase-6, DHA, Lahore, Pakistan, 54000",
  addressShort: "DHA Phase-6, Lahore",
  email: "info@parklandrealestate.pk",
  phone: "0321 8464704",
  phoneTel: "+923218464704",
  facebook: "https://facebook.com/parklandrealestate",
  instagram: "https://instagram.com/parklandrealestate",
  youtube: "https://youtube.com/@parklandrealestate",
  whatsapp:
    "https://wa.me/923218464704?text=Hello%20Parkland%20Real%20Estate%2C%20I%20would%20like%20to%20discuss%20a%20property.",
  hours: [{ day: "Every day", time: "Always open" }],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Properties" },
  { to: "/contact", label: "Contact" },
];

export const heroSlides = [
  {
    title: "Your Trusted Partner for DHA Lahore Properties",
    highlight:
      "Buy. Sell. Invest. With Confidence. 100% verified deals, a transparent process, and maximum returns.",
    image: img.luxuryVilla,
  },
  {
    title: "Luxury Homes. Prime Plots. Real Returns.",
    highlight:
      "Discover carefully selected residential and commercial opportunities across DHA Lahore.",
    image: img.spanishVilla,
  },
  {
    title: "DHA Lahore, Explained Clearly",
    highlight:
      "Local experts help you understand every phase, price, document, and opportunity before you decide.",
    image: img.luxuryHouse,
  },
  {
    title: "A Smarter Way to Move Property",
    highlight:
      "From your first requirement to transfer, our on-ground team handles the details with you.",
    image: img.courtyard,
  },
];

export const stats = [
  { value: "6K+", label: "Followers" },
  { value: "100%", label: "Recommended" },
  { value: "100+", label: "Happy clients" },
];

/** Branded social posts — shown full-frame, never cropped. */
export const posts = [
  {
    image: "/posts/post-1.jpg",
    title: "DHA Phase 6 Luxury Home",
    location: "DHA Lahore",
    tag: "Featured property",
  },
  {
    image: "/posts/post-2.jpg",
    title: "Prime Residential Plot",
    location: "DHA Lahore Phase 9",
    tag: "Verified listing",
  },
  {
    image: "/posts/post-3.jpg",
    title: "DHA Commercial Opportunity",
    location: "DHA Lahore Phase 8",
    tag: "Investment pick",
  },
  {
    image: "/posts/post-4.jpg",
    title: "Family Villa for Sale",
    location: "DHA Lahore Phase 5",
    tag: "Available now",
  },
  {
    image: "/posts/post-5.jpg",
    title: "Commercial Building",
    location: "DHA Lahore Phase 6",
    tag: "Verified listing",
  },
  {
    image: "/posts/post-6.jpg",
    title: "Investment Advisory",
    location: "All DHA Lahore phases",
    tag: "Market insight",
  },
  {
    image: "/posts/post-7.jpg",
    title: "Buy, Sell, Invest",
    location: "DHA Lahore",
    tag: "Parkland advice",
  },
  {
    image: "/posts/post-8.jpg",
    title: "DHA Phase Guide",
    location: "DHA Lahore",
    tag: "Local insight",
  },
  {
    image: "/posts/post-9.jpg",
    title: "Smart Property Decisions",
    location: "DHA Lahore",
    tag: "Parkland advice",
  },
];

export const videoGallery = [
  {
    src: "/videogrally/video1.mp4",
    title: "DHA Lahore Property Tour",
    caption: "Explore verified opportunities",
  },
  {
    src: "/videogrally/video2.mp4",
    title: "Luxury Home Walkthrough",
    caption: "Residential property",
  },
  {
    src: "/videogrally/video3.mp4",
    title: "Commercial Property Tour",
    caption: "Business and investment",
  },
  {
    src: "/videogrally/video4.mp4",
    title: "Prime Plot Locations",
    caption: "Residential and commercial plots",
  },
];

export const testimonials = [
  {
    name: "Satisfied Client",
    role: "Homeowner · DHA Lahore",
    quote:
      "Parkland helped us find our dream 2 kanal home in DHA. 100% professional and transparent.",
  },
  {
    name: "Investor",
    role: "Property investor · DHA Lahore",
    quote: "Best team for investment in DHA. We got amazing returns within 6 months.",
  },
];

export const services = [
  {
    slug: "luxury-residential",
    title: "Luxury Residential Properties",
    image: img.luxuryHouse,
    short: "1 Kanal and 2 Kanal bungalows, villas, and houses across all DHA phases.",
    body: "Ready-to-move and under-construction homes selected for quality, location, and long-term value.",
  },
  {
    slug: "plots",
    title: "Residential & Commercial Plots",
    image: img.brickFront,
    short: "Prime residential and commercial plots from Phase 1 to Phase 9.",
    body: "Every file is carefully checked and physically verified by our DHA-based team before we recommend it.",
  },
  {
    slug: "commercial",
    title: "Commercial Buildings & Offices",
    image: img.greyClassic,
    short: "High-ROI commercial plots and corporate buildings in prime DHA zones.",
    body: "Find the right commercial location for your business, rental income, or next strategic investment.",
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    image: img.completedVilla,
    short: "Market analysis and expert guidance to help you achieve real returns.",
    body: "We compare phases, plot sizes, demand, and future development so your investment decision is grounded in the market.",
  },
];

export const registrations = [
  "DHA Lahore Phase 1",
  "DHA Lahore Phase 2",
  "DHA Lahore Phase 5",
  "DHA Lahore Phase 6",
  "DHA Lahore Phase 8",
  "DHA Lahore Phase 9",
];

export const process = [
  {
    step: "01",
    title: "Tell us your goal",
    body: "Share your budget, preferred phase, property type, and timeline.",
  },
  {
    step: "02",
    title: "Review verified options",
    body: "We shortlist suitable homes, plots, buildings, or offices from our network.",
  },
  {
    step: "03",
    title: "Make a clear decision",
    body: "Our team explains pricing, documents, location, and potential before you commit.",
  },
  {
    step: "04",
    title: "Complete the transfer",
    body: "From negotiation to paperwork and transfer, we stay with you through the finish.",
  },
];

export const galleryImages = [
  img.luxuryVilla,
  img.spanishVilla,
  img.luxuryHouse,
  img.courtyard,
  img.modernVilla,
  img.classicMansion,
  img.greyClassic,
  img.completedVilla,
  img.brickFront,
];
