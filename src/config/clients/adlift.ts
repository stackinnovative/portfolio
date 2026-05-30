import type { PortfolioConfig } from "../../types/portfolio";

export const ADLIFT_PHYSIO: PortfolioConfig = {
  name: "Adlift Physio",
  description: "Sports Rehab & Wellness Centre",
  location: "Chakkalakkal, Padanilam, Calicut",
  phone: "+91 7736 969 897",
  whatsapp: {
    number: "917736969897",
    message: "Hi, I'd like to book an appointment at Adlift Physio.",
  },
  services: [
    "Ortho Physiotherapy",
    "Sports Rehab",
    "Pain Management",
    "Injury Prevention",
    "Strength & Conditioning",
  ],
  tagline: "Move Better. Recover Faster.",
  heroTitle: "Expert Sports Rehabilitation & Injury Care",
  logoText: "ADLIFT PHYSIO",
  logoImage: "", // You can add their logo URL here
  features: [
    {
      title: "Pain Relief",
      desc: "Targeted therapies for back, neck, and joint pain to restore your daily comfort.",
    },
    {
      title: "Joint Mobility",
      desc: "Advanced knee and ligament care designed to improve your range of motion.",
    },
    {
      title: "Strength & Recovery",
      desc: "Muscle strengthening and posture correction for long-term physical wellness.",
    },
  ],
  navLinks: [
    { label: "Therapies", href: "#features" },
    { label: "Our Programs", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  ctaText: "Schedule an Appointment",

  hero: {
    badge: "Sports Rehab & Wellness",
    headingMain: "Move Better.",
    headingHighlight: "Recover Faster.",
    description:
      "Expert sports rehabilitation and orthopedic physiotherapy in Calicut. We combine advanced therapies and customized exercises to help you overcome pain and rebuild your strength.",
    primaryCta: "Book Consultation",
    secondaryCta: "View Services",
    stats: [
      { label: "Specialty", value: "Ortho & Sports" },
      { label: "Location", value: "Calicut" },
      { label: "Focus", value: "Pain Relief" },
    ],
  },

  featuresSection: {
    badge: "Our Expertise",
    headingMain: "Comprehensive",
    headingHighlight: "Injury Care",
    description:
      "From acute sports injuries to chronic postural issues, our specialized treatments are tailored to accelerate your healing process.",
    items: [
      {
        title: "Sports Injury Rehab",
        desc: "Specialized recovery programs for athletes focusing on safe return-to-sport protocols.",
        icon: "activity",
      },
      {
        title: "Ortho Physiotherapy",
        desc: "Expert management of knee, ligament, back, and neck pain using evidence-based practices.",
        icon: "heart",
      },
      {
        title: "Posture Correction",
        desc: "Targeted muscle strengthening and ergonomic guidance to fix imbalances and prevent future injuries.",
        icon: "sparkles",
      },
    ],
  },

  portfolioSection: {
    badge: "Clinical Focus",
    headingMain: "Specialized",
    headingHighlight: "Rehab Programs",
    description:
      "We design custom rehabilitation pathways based on your specific condition and physical goals.",
    projects: [
      {
        id: 1,
        title: "Knee & Ligament Care",
        category: "Pain Relief & Mobility",
        image:
          "https://images.unsplash.com/photo-1715801903235-4d779e90d7d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "Back & Neck Pain Relief",
        category: "Orthopedic Therapy",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Strength & Conditioning",
        category: "Sports Performance",
        image:
          "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Injury Prevention",
        category: "Wellness & Maintenance",
        image:
          "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },

  aboutSection: {
    badge: "The Centre",
    headingMain: "Healing Hands Behind",
    headingHighlight: "Every Strong Step",
    description:
      "Adlift Physio is dedicated to helping you move without limitations. We honor the dedication of those who help you move better and live stronger.",
    bentoBoxes: {
      mainStory: {
        title: "Your Recovery, Our Priority",
        text: "Located in Chakkalakkal, Padanilam, our wellness centre is fully equipped for sports rehab, joint mobility training, and advanced pain management. We don't just treat the symptoms; we identify the root cause.",
      },
      statBox: { value: "100%", label: "Personalized" },
      features: [
        {
          title: "Expert Diagnosis",
          desc: "Thorough physical assessments to pinpoint the exact source of your pain.",
          icon: "activity",
        },
        {
          title: "Active Recovery",
          desc: "Hands-on therapy combined with guided functional movement.",
          icon: "userCheck",
        },
      ],
    },
  },

  pricingSection: {
    badge: "Therapy Options",
    headingMain: "Start Your",
    headingHighlight: "Recovery",
    description:
      "Choose a consultation or therapy package that fits your rehabilitation needs.",
    toggleLeft: "Clinical",
    toggleRight: "Sports",
    tiers: [
      {
        name: "Initial Assessment",
        description:
          "Complete physical evaluation and diagnosis to map out your recovery plan.",
        priceStandard: "₹400",
        priceBulk: "N/A",
        features: [
          "Postural Analysis",
          "Mobility Testing",
          "Pain Assessment",
          "Custom Rehab Roadmap",
        ],
        ctaText: "Book Assessment",
        isPopular: true,
      },
      {
        name: "Therapy Session",
        description:
          "Hands-on pain relief, manual therapy, and supervised exercises.",
        priceStandard: "₹600",
        priceBulk: "N/A",
        features: [
          "Targeted Pain Relief",
          "Manual Therapy",
          "Joint Mobilization",
          "Home Exercise Plan",
        ],
        ctaText: "Book Session",
        isPopular: false,
      },
      {
        name: "Sports Rehab Package",
        description:
          "Intensive recovery protocols designed for athletes and active individuals.",
        priceStandard: "Custom",
        priceBulk: "Custom",
        features: [
          "Ligament & Muscle Rehab",
          "Strength & Conditioning",
          "Return-to-Sport clearance",
          "Injury Prevention Strategies",
        ],
        ctaText: "Inquire Now",
        isPopular: false,
      },
    ],
  },

  testimonialsSection: {
    badge: "Success Stories",
    headingMain: "Stronger",
    headingHighlight: "Every Day",
    description:
      "See how our dedicated therapies have helped our patients return to their active lives.",
    reviews: [
      {
        name: "Nihal K.",
        role: "Athlete",
        text: "The sports rehab program at Adlift is exceptional. They helped me recover from a severe knee ligament issue much faster than I anticipated. Highly recommend!",
        rating: 5,
      },
      {
        name: "Mohammed S.",
        role: "Patient",
        text: "I was suffering from chronic back pain for months. The posture correction and strengthening exercises provided here completely changed my daily life.",
        rating: 5,
      },
      {
        name: "Arjun V.",
        role: "Fitness Enthusiast",
        text: "Excellent facility in Calicut! The physiotherapists really take the time to understand your injury. The hands-on treatment is top-notch.",
        rating: 5,
      },
    ],
  },

  footer: {
    description:
      "Adlift Physio - Expert Sports Rehab & Wellness Centre. Healing hands behind every strong step.",
    contact: {
      email: "info@adliftphysio.com",
      phone: "+91 7736 969 897",
      address: "Chakkalakkal, Padanilam, Calicut",
    },
    quickLinks: [
      { label: "Treatments", href: "#features" },
      { label: "Rehab Programs", href: "#portfolio" },
      { label: "About Clinic", href: "#about" },
      { label: "Appointments", href: "#pricing" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      {
        label: "Google Maps",
        href: "https://maps.app.goo.gl/kdkDvtFudcZUyvwj6",
      },
    ],
  },
};
