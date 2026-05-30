import type { PortfolioConfig } from "../../types/portfolio";

export const DESERT_FRAMES_CONFIG: PortfolioConfig = {
  name: "Desert Frames and Glass",
  description: "Premium Custom Framing & Glass in Dubai",
  location: "Al Barsha & Satwa, Dubai",
  phone: "+971 45488335",
  services: ["Custom Framing", "Glass & Printing", "Art Preservation"],
  tagline: "Preserving memories. Crafting beauty.",
  heroTitle: "Frame Every Moment",
  logoText: "Desert Frames and Glass",
  logoImage: "https://res.cloudinary.com/ddblal31l/image/upload/v1780125721/desert-frame-logo_fgeglh.png",
  features: [
    { title: "Custom Framing", desc: "Over 1,500 frame designs crafted to your taste." },
    { title: "Glass & Printing", desc: "High-quality printing and protective glass options." },
    { title: "Art Preservation", desc: "Museum-quality conservation framing for your valuables." },
  ],
  navLinks: [
    { label: "Framing", href: "#services" },
    { label: "Printing", href: "#features" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  ctaText: "Get a Quote",

  hero: {
    badge: "Dubai's Framing Specialists",
    headingMain: "Frame Every",
    headingHighlight: "Cherished Moment",
    description:
      "From family portraits to fine art — Desert Frames and Glass brings over 1,500 designs and expert craftsmanship to Al Barsha and Satwa, Dubai.",
    primaryCta: "Visit Our Gallery",
    secondaryCta: "View Services",
    stats: [
      { label: "Frame Designs", value: "1,500+" },
      { label: "Locations", value: "2" },
      { label: "Years in Dubai", value: "10+" },
    ],
    image:
      "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Custom picture frames in a gallery",
    overlayBadge: "Handcrafted in Dubai",
    overlayTitle: "Precision framing, timeless results.",
    overlaySubtext: "Every frame is crafted with care to complement your artwork perfectly.",
    infoCards: [
      {
        icon: "mappin",
        title: "Two Dubai Locations",
        desc: "Visit us in Al Barsha or Satwa — easy to reach across the city.",
      },
      {
        icon: "layers",
        title: "In-Store & Online",
        desc: "Browse in-gallery or we'll deliver frame samples to your door.",
      },
    ],
  },

  highlightSection: {
    badge: "Why Choose Us",
    headingMain: "More Than",
    headingHighlight: "Just a Frame",
    description:
      "We treat every piece as a treasured possession — guiding you from selection to delivery with personal care.",
    items: [
      {
        title: "1,500+ Designs",
        desc: "The widest selection in Dubai to perfectly complement any artwork or style.",
        icon: "target",
      },
      {
        title: "Expert Craftsmanship",
        desc: "Every frame is built by skilled craftsmen who take pride in every detail.",
        icon: "layers",
      },
      {
        title: "Doorstep Collection",
        desc: "Our drivers collect your artwork and return it beautifully framed.",
        icon: "sparkles",
      },
    ],
  },

  featuresSection: {
    badge: "Our Services",
    headingMain: "Everything You Need,",
    headingHighlight: "Under One Roof",
    description:
      "From framing and printing to glass work and art preservation — we handle it all with precision.",
    items: [
      { title: "Custom Framing", desc: "Hundreds of moulding styles for every budget and taste.", icon: "frame" },
      { title: "Fine Art Printing", desc: "Giclée and large-format printing on premium media.", icon: "printer" },
      { title: "Conservation Glass", desc: "UV-protective and anti-reflective glass for lasting preservation.", icon: "shield" },
    ],
  },

  portfolioSection: {
    badge: "Our Work",
    headingMain: "Crafted for",
    headingHighlight: "Every Space",
    description:
      "A glimpse into the framing work we've delivered across Dubai homes, offices, and galleries.",
    projects: [
      {
        id: 1,
        title: "Neon Art Frame",
        category: "Custom Framing",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Acrylic Float Mount",
        category: "Glass Mounting",
        image: "https://res.cloudinary.com/ddblal31l/image/upload/v1780125881/Desert-Frames-and-glass-1536x1025_ecc8jc.webp",
      },
      {
        id: 3,
        title: "Natural Wood Frame",
        category: "Wood Framing",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Fine Art Print",
        category: "Giclée Printing",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },

  aboutSection: {
    badge: "Our Story",
    headingMain: "Trusted by Dubai",
    headingHighlight: "Since Day One",
    description:
      "Desert Frames and Glass has been the go-to framing destination for art lovers, photographers, and interior designers across Dubai.",
    bentoBoxes: {
      mainStory: {
        title: "How We Work",
        text: "Visit our gallery in Al Barsha or Satwa to browse over 1,500 frame designs, or request samples delivered to your home. Once you choose, our team crafts your frame with precision — and our drivers collect and return your artwork at your convenience.",
      },
      statBox: { value: "1,500+", label: "Frame Designs" },
      features: [
        { title: "In-Store Selection", desc: "Walk in and browse our full gallery of frames.", icon: "store" },
        { title: "Online & Delivery", desc: "We send samples, collect artwork, and deliver finished frames.", icon: "truck" },
      ],
    },
  },

  pricingSection: {
    badge: "Framing Options",
    headingMain: "Pricing Built for",
    headingHighlight: "Every Project",
    description:
      "Whether it's a single portrait or a full office installation, we have a solution that fits.",
    toggleLeft: "Single Piece",
    toggleRight: "Bulk Order",
    tiers: [
      {
        name: "Standard Framing",
        description: "Perfect for portraits, photos, and everyday artwork.",
        priceStandard: "Custom Quote",
        priceBulk: "Volume Discount",
        features: [
          "Choice of 1,500+ Designs",
          "Standard Glass",
          "Mat Board Options",
          "Ready in 5–7 Days",
          "Pickup or Delivery",
        ],
        ctaText: "Get a Quote",
        isPopular: false,
      },
      {
        name: "Premium Conservation",
        description: "Museum-quality framing for fine art and valuables.",
        priceStandard: "Custom Quote",
        priceBulk: "Volume Discount",
        features: [
          "Conservation Glass",
          "Acid-Free Matting",
          "UV Protection",
          "Expert Consultation",
          "Artwork Collection Service",
        ],
        ctaText: "Book Consultation",
        isPopular: true,
      },
      {
        name: "Commercial & Bulk",
        description: "Offices, hotels, and galleries — we handle large orders.",
        priceStandard: "Contract",
        priceBulk: "Contract",
        features: [
          "Dedicated Account Manager",
          "Site Visit Available",
          "Bulk Pricing",
          "Installation Service",
          "Priority Turnaround",
        ],
        ctaText: "Contact Us",
        isPopular: false,
      },
    ],
  },

  testimonialsSection: {
    badge: "Client Reviews",
    headingMain: "Memories Framed",
    headingHighlight: "With Care",
    description:
      "What our customers say about their Desert Frames experience.",
    reviews: [
      {
        name: "Sarah M.",
        role: "Interior Designer",
        text: "The quality of framing is exceptional. I recommend Desert Frames to all my clients for their wall art installations.",
        rating: 5,
      },
      {
        name: "Ahmed K.",
        role: "Photography Studio Owner",
        text: "Fast turnaround, stunning results. They framed over 50 prints for my studio and every single one was perfect.",
        rating: 5,
      },
      {
        name: "Priya R.",
        role: "Homeowner",
        text: "They picked up my canvas, framed it beautifully, and delivered it back. Incredibly convenient and great quality.",
        rating: 5,
      },
    ],
  },
  whatsapp: {
    number: "+971529520440",
    message: "Hello! I'm interested in your framing services.",
  },

  locationMap: {
    embedUrl: "https://maps.google.com/maps?q=Desert+Frames+and+Glass+Al+Barsha+Dubai&output=embed",
    link: "https://www.google.com/maps/search/?api=1&query=Desert+Frames+and+Glass+Al+Barsha+Dubai",
    label: "Al Barsha & Satwa, Dubai",
    address: "Al Barsha & Satwa, Dubai, UAE",
    description: "Two convenient locations across Dubai — visit us in Al Barsha or Satwa.",
  },

  footer: {
    description: "Desert Frames & Glass — premium custom framing in Al Barsha and Satwa, Dubai.",
    contact: {
      email: "info@frameshopdubai.com",
      phone: "+971 45488335",
      address: "Al Barsha & Satwa, Dubai, UAE",
    },
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "Framing", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
};