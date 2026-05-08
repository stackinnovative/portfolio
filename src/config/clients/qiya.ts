import type { PortfolioConfig } from "../../types/portfolio";

export const QIYA: PortfolioConfig = {
  name: "Qiya Collections",
  description: "Handmade Scrunchies with Premium Quality",
  location: "Vaniyambadi, Tamilnadu",
  phone: "DM on Instagram", // Or add their number if you have it
  services: ["Premium Silk", "Daily Wear", "Custom Hampers"],
  tagline: "Gentle on hair. Heavy on style.",
  heroTitle: "Premium Handmade Scrunchies",
  logoText: "QIYA", // Kept all-caps to match their logo's serif font style
  logoImage:
    "https://res.cloudinary.com/ddblal31l/image/upload/v1778221974/Gemini_Generated_Image_7ijqqz7ijqqz7ijq_zt9bi9.png",
  features: [
    {
      title: "Handmade with Love",
      desc: "Every piece crafted meticulously by hand.",
    },
    {
      title: "Premium Fabrics",
      desc: "Silks and satins that prevent hair breakage.",
    },
    {
      title: "Pan-India Shipping",
      desc: "Delivering your favorites anywhere in India.",
    },
  ],
  navLinks: [
    { label: "Shop Collections", href: "#portfolio" },
    { label: "Our Story", href: "#about" },
    { label: "Order Custom", href: "#pricing" },
  ],
  ctaText: "Shop Now",

  hero: {
    badge: "Premium Quality • Handmade",
    headingMain: "Elevate Your Everyday",
    headingHighlight: "Hair Care",
    description:
      "Discover our exclusive collection of handmade, premium scrunchies. Gentle on your hair, crafted with love, and shipped directly from Vaniyambadi to anywhere in India.",
    primaryCta: "Explore Collections",
    secondaryCta: "Our Story",
    stats: [
      { label: "Shipping", value: "Pan-India" },
      { label: "Origin", value: "Vaniyambadi" },
      { label: "Quality", value: "Premium" },
    ],
  },

  featuresSection: {
    badge: "The Qiya Difference",
    headingMain: "Why Your Hair Will",
    headingHighlight: "Love Us",
    description:
      "Ditch the harsh elastics. Our handmade scrunchies are designed to protect your hair while elevating your outfit.",
    items: [
      {
        title: "Anti-Breakage",
        desc: "Smooth fabrics that glide over hair, reducing split ends and friction.",
        icon: "sparkles",
      },
      {
        title: "Locally Handmade",
        desc: "Proudly stitched by a college student, ensuring attention to every detail.",
        icon: "penTool",
      },
      {
        title: "All-Day Comfort",
        desc: "Perfectly tensioned elastic that holds secure without causing headaches.",
        icon: "leaf",
      },
    ],
  },

  portfolioSection: {
    badge: "Latest Drops",
    headingMain: "Our Premium",
    headingHighlight: "Collections",
    description:
      "From everyday cottons to luxurious evening silks, find the perfect match for your aesthetic.",
    projects: [
      {
        id: 1,
        title: "Rose Quartz Crystal Cuff",
        category: "Handcrafted Jewelry",
        // Hand-woven faceted crystals with gold-tone chain accents
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778222259/Screenshot_2026-05-08_120542_ncjzig.png",
      },
      {
        id: 2,
        title: "Dusty Rose Satin",
        category: "Bestseller",
        // Soft dusty rose satin texture
        image:
          "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Everyday Pastels",
        category: "Casual Wear",
        // The working scrunchie/pastel image!
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Royal Plum Tulip Scrunchie",
        category: "Silk Artisan Collection",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778228745/6049877954214432313_121_xyshxv.jpg",
      },
    ],
  },

  aboutSection: {
    badge: "The Founder",
    headingMain: "A Passion Project",
    headingHighlight: "Turned Brand",
    description:
      "What started as a creative outlet between college classes has grown into a premium hair care brand loved across India.",
    bentoBoxes: {
      mainStory: {
        title: "Student Led, Quality Driven",
        text: "Based in Vaniyambadi, Qiya Collections was born from a desire to create hair accessories that are both beautiful and gentle. Managing college and a growing brand isn't easy, but seeing customers across India wear my handmade creations makes every stitch worth it.",
      },
      statBox: { value: "100%", label: "Handmade" },
      features: [
        {
          title: "Premium Sourcing",
          desc: "We handpick every fabric to ensure it meets our strict quality standards.",
          icon: "sparkles",
        },
        {
          title: "Nationwide Love",
          desc: "Shipping carefully packaged orders to every corner of the country.",
          icon: "globe",
        },
      ],
    },
  },

  pricingSection: {
    badge: "Shop By Volume",
    headingMain: "Perfect For You,",
    headingHighlight: "Or For Gifting",
    description:
      "Pick up a single piece for yourself, or grab a combo pack to gift your bridesmaids, friends, or sisters.",
    toggleLeft: "Retail",
    toggleRight: "Bulk/Gifting",
    tiers: [
      {
        name: "Single Scrunchie",
        description:
          "Perfect for testing our quality and finding your new favorite everyday accessory.",
        priceStandard: "₹149",
        priceBulk: "N/A",
        features: [
          "1 Premium Scrunchie",
          "Standard Packaging",
          "Choose any color",
          "Care Instructions Card",
        ],
        ctaText: "Order One",
        isPopular: false,
      },
      {
        name: "The Classic Trio",
        description:
          "Our most popular option. Curate a set of 3 scrunchies that match your wardrobe.",
        priceStandard: "₹399",
        priceBulk: "₹349",
        features: [
          "3 Premium Scrunchies",
          "Aesthetic Mailer Box",
          "Mix & Match Fabrics",
          "Free Microfiber Pouch",
          "Priority Dispatch",
        ],
        ctaText: "Build Your Trio",
        isPopular: true,
      },
      {
        name: "Bulk / Party Favors",
        description:
          "Custom hampers for birthdays, weddings, or corporate gifting events.",
        priceStandard: "Contact Us",
        priceBulk: "Custom Quote",
        features: [
          "20+ Premium Scrunchies",
          "Customized Tagging",
          "Ribbon & Box Styling",
          "Wholesale Pricing",
          "Dedicated Support",
        ],
        ctaText: "Plan Your Event",
        isPopular: false,
      },
    ],
  },

  testimonialsSection: {
    badge: "Customer Love",
    headingMain: "What The Girls",
    headingHighlight: "Are Saying",
    description:
      "Real reviews from our beautiful customers across India who made the switch to Qiya.",
    reviews: [
      {
        name: "Priya S.",
        role: "Chennai",
        text: "I've completely stopped using regular rubber bands. The satin scrunchies from Qiya hold my thick hair perfectly without giving me a headache!",
        rating: 5,
      },
      {
        name: "Ananya R.",
        role: "Bangalore",
        text: "Ordered the trio pack for my sister's birthday. The packaging was so aesthetic and cute, and you can really feel the premium quality of the fabric.",
        rating: 5,
      },
      {
        name: "Meera K.",
        role: "Delhi",
        text: "It's amazing that a college student is running this! The shipping was super fast to Delhi and the dusty rose color matches my outfits perfectly.",
        rating: 5,
      },
    ],
  },

  footer: {
    description:
      "Handmade, premium quality scrunchies crafted with love in Vaniyambadi. Elevating hair care across India.",
    contact: {
      email: "hello@qiyacollections.com",
      phone: "DM us on Instagram",
      address: "Vaniyambadi, Tamilnadu, India",
    },
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "Shop", href: "#portfolio" },
      { label: "About", href: "#about" },
      { label: "Bulk Orders", href: "#pricing" },
    ],
    legal: [
      { label: "Return Policy", href: "#" },
      { label: "Shipping Policy", href: "#" },
      { label: "Care Instructions", href: "#" },
    ],
  },
};
