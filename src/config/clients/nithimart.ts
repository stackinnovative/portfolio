import type { PortfolioConfig } from "../../types/portfolio";

export const NITHI_MART: PortfolioConfig = {
  name: "Nithi Mart",
  description: "Premium Customized Packaging Solutions",
  location: "Kochi, Kerala",
  phone: "+91 9188050342",
  services: ["Design", "Print", "Manufacture"],
  tagline: "Premium quality. Made to measure.",
  heroTitle: "Elevate Your Brand with Custom Packaging",
  logoText: "nithi mart",
  logoImage:
    "https://res.cloudinary.com/ddblal31l/image/upload/v1778210107/Gemini_Generated_Image_avfiewavfiewavfi_cadwvw.png",
  features: [
    { title: "Custom Design", desc: "Tailored to your brand identity." },
    {
      title: "Quality Print",
      desc: "High-resolution eco-friendly printing.",
    },
    {
      title: "Bulk Manufacturing",
      desc: "Scalable production for any business size.",
    },
  ],
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  ctaText: "Get a Quote",

  hero: {
    badge: "Premium quality. Made to measure.",
    headingMain: "Customized Packaging Solutions for",
    headingHighlight: "Modern Brands",
    description:
      "End-to-end packaging excellence. From custom design to high-quality print and scalable manufacturing. Proudly based in Kochi, Kerala.",
    primaryCta: "Start Your Project",
    secondaryCta: "Our Services",
    stats: [
      { label: "Community", value: "6.9K+" },
      { label: "Location", value: "Kochi" },
      { label: "Delivery", value: "Pan-India" },
    ],
  },

  featuresSection: {
    badge: "Why Choose Us",
    headingMain: "Premium Quality at",
    headingHighlight: "Every Step",
    description:
      "We handle the entire process from conceptualization to the final product, ensuring your brand stands out on the shelf.",
    items: [
      {
        title: "Custom Design",
        desc: "Tailored strictly to your brand identity.",
        icon: "design",
      },
      {
        title: "Quality Print",
        desc: "High-resolution, eco-friendly printing.",
        icon: "print",
      },
      {
        title: "Bulk Manufacturing",
        desc: "Scalable production for any business size.",
        icon: "manufacture",
      },
    ],
  },

  portfolioSection: {
    badge: "Our Work",
    headingMain: "Crafted to",
    headingHighlight: "Perfection",
    description:
      "Take a look at some of our recent custom packaging projects that helped modern brands elevate their unboxing experience.",
    projects: [
      {
        id: 1,
        title: "Nari Astra Custom Box",
        category: "Retail Packaging",
        // Best Match: This image shows how a flat sheet becomes a structured box with a clear window. It matches the complexity of your source image.
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778213691/Gemini_Generated_Image_o31b3ko31b3ko31b_kf9bkw.png",
      },
      {
        id: 2,
        title: "Luxury Rigid Boxes",
        category: "Premium Matte",
        // High-end jewelry/gift style box
        image:
          "https://images.unsplash.com/photo-1607227063002-677dc5fdf96f?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Precision Print Labels",
        category: "Custom Die-Cut",
        // Shows printing quality and paper texture
        image:
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Glow Gold Serum Box",
        category: "Premium Cosmetic Packaging",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778214048/8e27ce96-f780-48e1-87b7-b10ddb3f8f7d_gwboix.jpg",
      },
    ],
  },

  aboutSection: {
    badge: "Who We Are",
    headingMain: "Redefining the",
    headingHighlight: "Unboxing Experience",
    description:
      "We don't just make boxes; we craft the first physical touchpoint between your brand and your customer.",
    bentoBoxes: {
      mainStory: {
        title: "Our Journey",
        text: "Founded in Kochi, Nithi Mart started with a simple mission: to bridge the gap between premium branding and sustainable packaging. We believe the outside of your product should be just as remarkable as what's inside.",
      },
      statBox: { value: "100%", label: "Customizable" },
      features: [
        {
          title: "Sustainable Practices",
          desc: "Eco-friendly materials that don't compromise on luxury or durability.",
          icon: "leaf",
        },
        {
          title: "Local Roots, Global Reach",
          desc: "Proudly manufactured in Kerala, delivered seamlessly across Pan-India.",
          icon: "globe",
        },
      ],
    },
  },

  pricingSection: {
    badge: "Clear Investment",
    headingMain: "Scaled for Your",
    headingHighlight: "Brand's Growth",
    description:
      "Whether you need a handful of prototypes or a massive nationwide rollout, our production lines adapt to your scale.",
    toggleLeft: "Standard Run",
    toggleRight: "Bulk Run",
    tiers: [
      {
        name: "Prototype & Sample",
        description:
          "Perfect for testing materials, structural integrity, and design concepts before a massive launch.",
        priceStandard: "Custom Quote",
        priceBulk: "Included in Bulk",
        features: [
          "1-5 Physical Prototypes",
          "Standard Material Selection",
          "Digital 3D Proofs",
          "Basic Structural Design",
          "1 Design Revision",
        ],
        ctaText: "Order Samples",
        isPopular: false,
      },
      {
        name: "Brand Growth",
        description:
          "The sweet spot for emerging brands looking to elevate their unboxing experience at scale.",
        priceStandard: "MOQ: 500+",
        priceBulk: "MOQ: 5,000+",
        features: [
          "Premium Material Access",
          "High-Res Eco-Friendly Print",
          "Foil Stamping & Embossing",
          "Custom Inserts & Sleeves",
          "Dedicated Account Manager",
        ],
        ctaText: "Start Production",
        isPopular: true,
      },
      {
        name: "Enterprise Custom",
        description:
          "End-to-end supply chain integration and warehousing for established, high-volume brands.",
        priceStandard: "Contract",
        priceBulk: "Contract",
        features: [
          "Advanced Die-Cuts & Engineering",
          "Inventory Warehousing",
          "Just-in-Time (JIT) Delivery",
          "Multi-Location Shipping",
          "24/7 Priority Support",
        ],
        ctaText: "Contact Sales",
        isPopular: false,
      },
    ],
  },

  testimonialsSection: {
    badge: "Client Stories",
    headingMain: "Trusted by",
    headingHighlight: "Modern Brands",
    description:
      "Don't just take our word for it. Here is what our partners have to say about our packaging solutions.",
    reviews: [
      {
        name: "Sarah Jenkins",
        role: "Founder, EcoGlow Skincare",
        text: "Nithi Mart completely transformed our unboxing experience. The custom eco-friendly mailers not only look incredibly premium but align perfectly with our sustainable mission.",
        rating: 5,
      },
      {
        name: "David Chen",
        role: "Operations Manager, Brew & Co.",
        text: "Finding a reliable partner for bulk manufacturing was tough until we found them. Their print quality is consistently flawless, and their turnaround times have saved our product launches.",
        rating: 5,
      },
      {
        name: "Aisha Rahman",
        role: "Creative Director, Aura Fragrances",
        text: "The attention to detail on our rigid perfume boxes is unmatched. The gold foil stamping was crisp, and the structural integrity is exactly what a luxury product needs.",
        rating: 5,
      },
    ],
  },

  footer: {
    description:
      "Premium customized packaging solutions. Elevating brands from concept to delivery, proudly based in Kerala.",
    contact: {
      email: "hello@nithimart.com",
      phone: "+91 9188050342",
      address: "Kochi, Kerala, India",
    },
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "Features", href: "#features" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Pricing", href: "#pricing" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Shipping Policy", href: "#" },
    ],
  },
};
