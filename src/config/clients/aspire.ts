import type { PortfolioConfig } from "../../types/portfolio";

export const ASPIRE_DENTAL: PortfolioConfig = {
  name: "Aspire Dental Studio",
  description: "Advanced Dental Care & Implant Center",
  location: "Narikkuni, Kozhikode",
  phone: "+91 75 111 22 513",
  services: [
    "Implantology",
    "Orthodontics",
    "Pediatric Dentistry",
    "Root Canal",
  ],
  tagline: "Unleashing your dream smile",
  heroTitle: "Expert Dental Care You Can Trust",
  logoText: "ASPIRE",
  logoImage:
    "https://res.cloudinary.com/ddblal31l/image/upload/v1778230879/Gemini_Generated_Image_sjkgwgsjkgwgsjkg_uiarbz.png", // Use clinic logo here
  features: [
    {
      title: "Expert Specialists",
      desc: "A dedicated team of MDS surgeons and specialists for every dental need.",
    },
    {
      title: "Advanced Technology",
      desc: "Modern equipment for painless root canals and precision implants.",
    },
    {
      title: "Family Dentistry",
      desc: "Specialized care for children and preventive treatments for all ages.",
    },
  ],
  navLinks: [
    { label: "Our Doctors", href: "#portfolio" },
    { label: "Treatments", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  ctaText: "Book Appointment",

  hero: {
    badge: "Smile Transformation Experts",
    headingMain: "Experience The Art of",
    headingHighlight: "Modern Dentistry",
    description:
      "Located in Narikkuni, Aspire Dental Studio brings together a team of highly qualified specialists to provide comprehensive oral health solutions with a gentle touch.",
    primaryCta: "Meet Our Experts",
    secondaryCta: "View Services",
    stats: [
      { label: "Specialists", value: "6+" },
      { label: "Location", value: "Narikkuni" },
      { label: "Care", value: "24/7 Support" },
    ],
  },

  featuresSection: {
    badge: "Our Services",
    headingMain: "Comprehensive Care for",
    headingHighlight: "Every Smile",
    description:
      "From routine checkups to complex oral surgeries, our studio is equipped to handle all aspects of dental health under one roof.",
    items: [
      {
        title: "Dental Implants",
        desc: "Permanent and natural-looking solutions for missing teeth using world-class implant systems.",
        icon: "sparkles",
      },
      {
        title: "Orthodontics",
        desc: "Braces and airway-focused treatments to align your teeth and improve your profile.",
        icon: "activity",
      },
      {
        title: "Pediatric Care",
        desc: "Friendly and fearless dental experiences designed specifically for our youngest patients.",
        icon: "heart",
      },
    ],
  },

  portfolioSection: {
    badge: "Medical Team",
    headingMain: "Meet Our",
    headingHighlight: "Experts",
    description:
      "Our strength lies in our multidisciplinary team of experienced MDS doctors.",
    projects: [
      {
        id: 1,
        title: "Dr. Thahir Abdurahman MDS",
        category: "Root Canal & Conservative Specialist",
        image:
          "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Dr. Sulfiker Ali",
        category: "Orthodontic & Airway Specialist",
        image:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Dr. Nicolas Mathew MDS",
        category: "Prosthodontic & Implant Specialist",
        image:
          "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Dr. Arathi MDS",
        category: "Oral & Maxillofacial Surgeon",
        // Different professional portrait to avoid duplication in the demo
        image:
          "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },

  aboutSection: {
    badge: "The Studio",
    headingMain: "Quality Care",
    headingHighlight: "At Narikkuni",
    description:
      "Aspire Dental Studio was founded on the principle of providing high-end dental technology to the local community with transparency and compassion.",
    bentoBoxes: {
      mainStory: {
        title: "Your Smile, Our Mission",
        text: "Conveniently located near Canara Bank on Koduvally Road, we offer a sterile, modern environment where patient comfort is our highest priority. Our team works together to ensure every treatment plan is personalized.",
      },
      statBox: { value: "100%", label: "Sterile" },
      features: [
        {
          title: "Specialized Surgeons",
          desc: "Expertise in complex oral and maxillofacial surgeries.",
          icon: "userCheck",
        },
        {
          title: "Easy Access",
          desc: "Prime location in Narikkuni with ample parking and easy connectivity.",
          icon: "mapPin",
        },
      ],
    },
  },

  pricingSection: {
    badge: "Consultation",
    headingMain: "Flexible Care",
    headingHighlight: "Options",
    description:
      "We believe high-quality dental care should be accessible. Choose the consultation path that fits your schedule.",
    toggleLeft: "Clinical",
    toggleRight: "Emergency",
    tiers: [
      {
        name: "General Checkup",
        description:
          "Routine examination and professional cleaning to maintain oral hygiene.",
        priceStandard: "₹300",
        priceBulk: "N/A",
        features: [
          "Full Oral Examination",
          "Digital X-Ray (if needed)",
          "Treatment Planning",
          "Hygiene Consultation",
        ],
        ctaText: "Book Now",
        isPopular: true,
      },
      {
        name: "Specialist Visit",
        description:
          "Direct consultation with our MDS surgeons for specific treatments.",
        priceStandard: "₹500",
        priceBulk: "N/A",
        features: [
          "Specialist Assessment",
          "Procedure Roadmap",
          "Detailed Costing",
          "Priority Scheduling",
        ],
        ctaText: "Consult Specialist",
        isPopular: false,
      },
      {
        name: "Emergency Care",
        description:
          "Immediate attention for acute pain, trauma, or urgent dental issues.",
        priceStandard: "₹800",
        priceBulk: "Custom",
        features: [
          "Priority Triage",
          "Immediate Pain Relief",
          "Emergency X-Ray",
          "Post-Op Care Plan",
        ],
        ctaText: "Emergency Call",
        isPopular: false,
      },
    ],
  },

  testimonialsSection: {
    badge: "Patient Stories",
    headingMain: "What Our",
    headingHighlight: "Patients Say",
    description:
      "Read about the experiences of people who trusted us with their smiles.",
    reviews: [
      {
        name: "Rahul K.",
        role: "Patient",
        text: "The best dental clinic in Narikkuni. The doctors are very professional and the treatment was completely painless.",
        rating: 5,
      },
      {
        name: "Saritha V.",
        role: "Parent",
        text: "I took my son for a pediatric checkup. The doctors made him feel so comfortable and the kids' area is great!",
        rating: 5,
      },
      {
        name: "Riyas K.",
        role: "Patient",
        text: "I took my son for a pediatric checkup. The doctors made him feel so comfortable and the kids' area is great!",
        rating: 5,
      },
    ],
  },

  footer: {
    description:
      "Professional dental excellence in Narikkuni. Trust your smile to the experts at Aspire Dental Studio.",
    contact: {
      email: "info@aspiredental.com",
      phone: "+91 75 111 22 513",
      address: "Nr. Canara Bank, Koduvally Road, Narikkuni",
    },
    quickLinks: [
      { label: "Doctors", href: "#portfolio" },
      { label: "Treatments", href: "#features" },
      { label: "About", href: "#about" },
      { label: "Appointments", href: "#pricing" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Patient Rights", href: "#" },
      { label: "Clinic Timings", href: "#" },
    ],
  },
};
