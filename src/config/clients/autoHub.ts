import type { PortfolioConfig } from "../../types/portfolio";

export const AUTOHUB: PortfolioConfig = {
  name: "AutoHub Pre-Owned Bikes",
  description: "Premium Quality Pre-Owned Vehicles & Two-Wheel Garage",
  location: "Nanminda 14, Kozhikode",
  phone: "+91 81290 93237",
  services: [
    "Used Vehicle Sales",
    "Buying & Exchange",
    "Two Wheel Garage",
    "Quality Inspection",
  ],
  tagline: "Quality is our priority",
  heroTitle: "Make Your Dream Ride With Us",
  logoText: "AUTOHUB",
  logoImage:
    "https://res.cloudinary.com/ddblal31l/image/upload/v1778231973/Gemini_Generated_Image_algd4salgd4salgd_haowt8.png",
  features: [
    {
      title: "Quality Certified",
      desc: "Every bike undergoes a rigorous multi-point inspection before reaching you.",
    },
    {
      title: "Dream Rides",
      desc: "Extensive collection of premium pre-owned bikes including Royal Enfields.",
    },
    {
      title: "Garage Services",
      desc: "Expert maintenance and tuning at our dedicated two-wheel garage.",
    },
  ],
  navLinks: [
    { label: "Available Stock", href: "#portfolio" },
    { label: "Services", href: "#features" },
    { label: "Location", href: "#about" },
  ],
  ctaText: "Check Inventory",

  hero: {
    badge: "Trusted Pre-Owned Dealer",
    headingMain: "Your Next Adventure",
    headingHighlight: "Starts Here",
    description:
      "Kozhikode's premier destination for high-quality used bikes. From cruisers to commuters, we ensure every ride meets our priority standards.",
    primaryCta: "View Available Bikes",
    secondaryCta: "Sell Your Bike",
    stats: [
      { label: "Followers", value: "4K+" },
      { label: "Happy Riders", value: "800+" },
      { label: "Location", value: "Nanminda" },
    ],
  },

  featuresSection: {
    badge: "The AutoHub Standard",
    headingMain: "Why Buy From",
    headingHighlight: "AutoHub?",
    description:
      "We don't just sell bikes; we build relationships through transparency and mechanical excellence.",
    items: [
      {
        title: "Buy & Exchange",
        desc: "Get the best market value for your old bike and upgrade to your dream machine effortlessly.",
        icon: "refresh",
      },
      {
        title: "Verified History",
        desc: "Complete documentation and service history verification for total peace of mind.",
        icon: "shieldCheck",
      },
      {
        title: "Expert Tuning",
        desc: "Our in-house mechanics ensure your bike is in peak performance condition.",
        icon: "tool",
      },
    ],
  },

  portfolioSection: {
    badge: "Featured Stock",
    headingMain: "Recently",
    headingHighlight: "Available",
    description:
      "Explore our handpicked selection of premium pre-owned motorcycles.",
    projects: [
      {
        id: 1,
        title: "Royal Enfield Interceptor 650",
        category: "Available Now",
        // Clean side profile of a chrome/orange Interceptor
        image:
          "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Himalayan 411",
        category: "Sold",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778232712/Himalayan_eh8nj4.webp",
      },
      {
        id: 3,
        title: "Classic 350 Reborn",
        category: "Available Now",
        // Studio-style shot of a matte/chrome Classic
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778232494/82766231-1631-4ede-a25f-76448e2170a6_ha8q6e.webp",
      },
      {
        id: 4,
        title: "Continental GT 650",
        category: "Recently Added",
        // High-end cafe racer angle
        image:
          "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },

  aboutSection: {
    badge: "Visit Us",
    headingMain: "Conveniently Located",
    headingHighlight: "On Kozhikode Road",
    description:
      "Our showroom in Nanminda is designed for enthusiasts to explore, test ride, and discuss their next purchase over a coffee.",
    bentoBoxes: {
      mainStory: {
        title: "Kozhikode's Trusted Hub",
        text: "AutoHub has grown into a community of 4,000+ followers by staying true to one principle: Quality. Whether you are looking for a weekend cruiser or a daily commuter, our team is here to help.",
      },
      statBox: { value: "100%", label: "Genuine" },
      features: [
        {
          title: "Easy Finance",
          desc: "Tie-ups with leading banks for quick loan approvals.",
          icon: "creditCard",
        },
        {
          title: "Service Support",
          desc: "Full post-sales support through our two-wheel garage.",
          icon: "settings",
        },
      ],
    },
  },

  pricingSection: {
    badge: "Service Plans",
    headingMain: "Garage &",
    headingHighlight: "Maintenance",
    description:
      "Keep your machine running like new with our specialized garage services.",
    toggleLeft: "Standard",
    toggleRight: "Premium",
    tiers: [
      {
        name: "General Service",
        description: "Periodic maintenance for all 150cc-250cc bikes.",
        priceStandard: "₹999",
        priceBulk: "N/A",
        features: [
          "Oil Filter Change",
          "Chain Cleaning",
          "Brake Check",
          "Full Wash",
        ],
        ctaText: "Book Service",
        isPopular: true,
      },
      {
        name: "Cruiser Special",
        description:
          "Specialized tuning for Royal Enfield & high-capacity bikes.",
        priceStandard: "₹1800",
        priceBulk: "N/A",
        features: [
          "Engine Diagnostic",
          "Tappet Adjustment",
          "Clutch Overhaul",
          "Polishing",
        ],
        ctaText: "Book Specialist",
        isPopular: false,
      },
      {
        name: "Value Assessment",
        description:
          "Professional valuation for selling or exchanging your bike.",
        priceStandard: "Free",
        priceBulk: "Custom",
        features: [
          "Condition Report",
          "Market Price Check",
          "Instant Offer",
          "Paperwork Help",
        ],
        ctaText: "Get Valuation",
        isPopular: false,
      },
    ],
  },

  testimonialsSection: {
    badge: "Rider Reviews",
    headingMain: "What Our",
    headingHighlight: "Customers Say",
    description:
      "Join the hundreds of happy riders who found their dream bike at AutoHub.",
    reviews: [
      {
        name: "Arafath",
        role: "Interceptor Owner",
        text: "Got my Interceptor from here. The condition was exactly as shown on Instagram. Smooth paperwork!",
        rating: 5,
      },
      {
        name: "Musammil",
        role: "Classic 350 Owner",
        text: "Best place for used Enfields in Kozhikode. Their garage service is also top-notch.",
        rating: 5,
      },
      {
        name: "Nidhin",
        role: "Interceptor Owner",
        text: "Best place for used Enfields in Kozhikode. Their garage service is also top-notch.",
        rating: 5,
      },
    ],
  },

  footer: {
    description:
      "Your dream ride starts here. Quality pre-owned vehicles and expert garage services in Kozhikode.",
    contact: {
      email: "autohubkozhikode@gmail.com",
      phone: "+91 81290 93237",
      address: "Nanminda 14, Kozhikode Road, Kerala",
    },
    quickLinks: [
      { label: "Inventory", href: "#portfolio" },
      { label: "Garage", href: "#features" },
      { label: "Contact", href: "#footer" },
    ],
    legal: [
      { label: "Exchange Policy", href: "#" },
      { label: "Terms of Sale", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
};
