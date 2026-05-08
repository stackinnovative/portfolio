// // src/config/clientConfig.ts

import { DEFAULT_CONFIG } from "./clients/default";
import { NITHI_MART } from "./clients/nithimart";
import { QIYA } from "./clients/qiya";

// export const clientConfigs = {
//   // ---------------------------------------------------------
//   // 1. DEFAULT (Your Main Developer Portfolio)
//   // ---------------------------------------------------------
//   default: {
//     name: "Stack Innovative",
//     description: "High-Performance Web & Mobile Applications",
//     location: "Kochi, Kerala",
//     phone: "+91 9188050342",
//     services: ["React.js", "Capacitor Mobile", "Node.js Backend"],
//     tagline: "Scalable architecture. Pixel-perfect design.",
//     heroTitle: "Build Better Digital Experiences",
//     logoText: "stack innovative",
//     logoImage: "",
//     features: [
//       {
//         title: "Modern Web Apps",
//         desc: "Fast, responsive single-page applications.",
//       },
//       {
//         title: "Cross-Platform Mobile",
//         desc: "Native-feeling apps built with Capacitor.",
//       },
//       {
//         title: "Robust Backends",
//         desc: "Secure Node.js and custom database architectures.",
//       },
//     ],
//     navLinks: [
//       { label: "Services", href: "#services" },
//       { label: "About", href: "#about" },
//       { label: "Contact", href: "#contact" },
//     ],
//     ctaText: "Let's Talk Code",

//     hero: {
//       badge: "Full-Stack Development",
//       headingMain: "Engineered for",
//       headingHighlight: "Performance",
//       description:
//         "End-to-end application development. From custom database schemas and JWT authentication to seamless React frontends and Capacitor mobile builds.",
//       primaryCta: "View GitHub",
//       secondaryCta: "My Stack",
//       stats: [
//         { label: "Uptime", value: "99.9%" },
//         { label: "Location", value: "Kochi" },
//         { label: "Stack", value: "MERN" },
//       ],
//     },

//     featuresSection: {
//       badge: "Technical Expertise",
//       headingMain: "Scalable Solutions at",
//       headingHighlight: "Every Layer",
//       description:
//         "Handling the entire development lifecycle, ensuring your application is fast, secure, and ready to scale.",
//       items: [
//         {
//           title: "Frontend Engineering",
//           desc: "Dynamic UIs tailored to user needs.",
//           icon: "code",
//         },
//         {
//           title: "Backend Systems",
//           desc: "Secure APIs with optimized SQL/NoSQL databases.",
//           icon: "server",
//         },
//         {
//           title: "Mobile Deployment",
//           desc: "Bringing web technologies natively to iOS and Android.",
//           icon: "smartphone",
//         },
//       ],
//     },

//     portfolioSection: {
//       badge: "Recent Commits",
//       headingMain: "Shipped to",
//       headingHighlight: "Production",
//       description:
//         "A look at recent technical builds, including custom SaaS dashboards and financial management applications.",
//       projects: [
//         {
//           id: 1,
//           title: "Custom Expense Tracker",
//           category: "Full-Stack Web App",
//           image:
//             "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
//         },
//         {
//           id: 2,
//           title: "E-Commerce Dashboard",
//           category: "React / Node.js",
//           image:
//             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
//         },
//         {
//           id: 3,
//           title: "Mobile Task Manager",
//           category: "Capacitor",
//           image:
//             "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
//         },
//         {
//           id: 4,
//           title: "Secure Auth Portal",
//           category: "JWT / bcrypt",
//           image:
//             "https://images.unsplash.com/photo-1555949963-aa79dcee9811?q=80&w=800&auto=format&fit=crop",
//         },
//       ],
//     },

//     aboutSection: {
//       badge: "The Developer",
//       headingMain: "Writing Code that",
//       headingHighlight: "Solves Problems",
//       description:
//         "Bridging the gap between complex technical requirements and intuitive user experiences.",
//       bentoBoxes: {
//         mainStory: {
//           title: "The Workflow",
//           text: "I specialize in building robust digital products. Whether drafting a complex relational database or fine-tuning frontend state management, I focus on clean, maintainable code that scales with your business.",
//         },
//         statBox: { value: "100%", label: "Committed" },
//         features: [
//           {
//             title: "Clean Architecture",
//             desc: "Maintainable and modular codebases.",
//             icon: "cpu",
//           },
//           {
//             title: "Optimized Performance",
//             desc: "Ensuring maximum efficiency across devices.",
//             icon: "zap",
//           },
//         ],
//       },
//     },

//     pricingSection: {
//       badge: "Development Scope",
//       headingMain: "Structured for",
//       headingHighlight: "Project Needs",
//       description:
//         "From rapid prototyping to complete enterprise application builds.",
//       toggleLeft: "MVP Build",
//       toggleRight: "Full Scale",
//       tiers: [
//         {
//           name: "Consultation & Architecture",
//           description:
//             "System design, database mapping, and tech stack planning.",
//           priceStandard: "Custom Quote",
//           priceBulk: "Included in Build",
//           features: [
//             "Database Schema Design",
//             "API Planning",
//             "Tech Stack Selection",
//             "Feasibility Study",
//             "1 Revision",
//           ],
//           ctaText: "Book a Call",
//           isPopular: false,
//         },
//         {
//           name: "Standard Application",
//           description:
//             "The sweet spot for getting a robust product to market quickly.",
//           priceStandard: "Sprint Based",
//           priceBulk: "Sprint Based",
//           features: [
//             "Full-Stack Development",
//             "Responsive UI",
//             "Secure Authentication",
//             "Admin Dashboard",
//             "Deployment Setup",
//           ],
//           ctaText: "Start Sprints",
//           isPopular: true,
//         },
//         {
//           name: "Enterprise Architecture",
//           description:
//             "Complex logic, microservices, and high-availability setups.",
//           priceStandard: "Contract",
//           priceBulk: "Contract",
//           features: [
//             "Advanced Data Pipelines",
//             "Cross-Platform Mobile App",
//             "Third-Party Integrations",
//             "Continuous CI/CD",
//             "Priority Support",
//           ],
//           ctaText: "Discuss Details",
//           isPopular: false,
//         },
//       ],
//     },

//     testimonialsSection: {
//       badge: "Peer Review",
//       headingMain: "Collaborative",
//       headingHighlight: "Success",
//       description:
//         "Feedback from teams and clients on recent development sprints.",
//       reviews: [
//         {
//           name: "Vinod",
//           role: "Team Lead",
//           text: "Exceptional understanding of complex system requirements. The custom architecture provided exactly the performance boost we needed.",
//           rating: 5,
//         },
//         {
//           name: "Sourav",
//           role: "Frontend Engineer",
//           text: "Cleanest API documentation and backend structures I've worked with. Made integrating the React frontend completely seamless.",
//           rating: 5,
//         },
//         {
//           name: "Goutham",
//           role: "Project Manager",
//           text: "Always delivers on time and handles high-pressure technical challenges with ease. A core asset to any development lifecycle.",
//           rating: 5,
//         },
//       ],
//     },

//     footer: {
//       description:
//         "Building scalable web and mobile applications from the ground up.",
//       contact: {
//         email: "stackinnovativee@gmail.com",
//         phone: "+91 7994285615",
//         address: "Calicut, Kerala, India",
//       },
//       quickLinks: [
//         { label: "Home", href: "#home" },
//         { label: "Services", href: "#services" },
//         { label: "Portfolio", href: "#portfolio" },
//         { label: "Pricing", href: "#pricing" },
//       ],
//       legal: [
//         { label: "Privacy Policy", href: "#" },
//         { label: "Terms of Service", href: "#" },
//       ],
//     },
//   },

//   // ---------------------------------------------------------
//   // 2. NITHI MART (The Packaging Client Pitch)
//   // ---------------------------------------------------------
//   nithimart: {
//     name: "Nithi Mart",
//     description: "Premium Customized Packaging Solutions",
//     location: "Kochi, Kerala",
//     phone: "+91 9188050342",
//     services: ["Design", "Print", "Manufacture"],
//     tagline: "Premium quality. Made to measure.",
//     heroTitle: "Elevate Your Brand with Custom Packaging",
//     logoText: "nithi mart",
//     logoImage:
//       "https://res.cloudinary.com/ddblal31l/image/upload/v1778210107/Gemini_Generated_Image_avfiewavfiewavfi_cadwvw.png",
//     features: [
//       { title: "Custom Design", desc: "Tailored to your brand identity." },
//       {
//         title: "Quality Print",
//         desc: "High-resolution eco-friendly printing.",
//       },
//       {
//         title: "Bulk Manufacturing",
//         desc: "Scalable production for any business size.",
//       },
//     ],
//     navLinks: [
//       { label: "Services", href: "#services" },
//       { label: "About", href: "#about" },
//       { label: "Contact", href: "#contact" },
//     ],
//     ctaText: "Get a Quote",

//     hero: {
//       badge: "Premium quality. Made to measure.",
//       headingMain: "Customized Packaging Solutions for",
//       headingHighlight: "Modern Brands",
//       description:
//         "End-to-end packaging excellence. From custom design to high-quality print and scalable manufacturing. Proudly based in Kochi, Kerala.",
//       primaryCta: "Start Your Project",
//       secondaryCta: "Our Services",
//       stats: [
//         { label: "Community", value: "6.9K+" },
//         { label: "Location", value: "Kochi" },
//         { label: "Delivery", value: "Pan-India" },
//       ],
//     },

//     featuresSection: {
//       badge: "Why Choose Us",
//       headingMain: "Premium Quality at",
//       headingHighlight: "Every Step",
//       description:
//         "We handle the entire process from conceptualization to the final product, ensuring your brand stands out on the shelf.",
//       items: [
//         {
//           title: "Custom Design",
//           desc: "Tailored strictly to your brand identity.",
//           icon: "design",
//         },
//         {
//           title: "Quality Print",
//           desc: "High-resolution, eco-friendly printing.",
//           icon: "print",
//         },
//         {
//           title: "Bulk Manufacturing",
//           desc: "Scalable production for any business size.",
//           icon: "manufacture",
//         },
//       ],
//     },

//     portfolioSection: {
//       badge: "Our Work",
//       headingMain: "Crafted to",
//       headingHighlight: "Perfection",
//       description:
//         "Take a look at some of our recent custom packaging projects that helped modern brands elevate their unboxing experience.",
//       projects: [
//         {
//           id: 1,
//           title: "Nari Astra Custom Box",
//           category: "Retail Packaging",
//           // Best Match: This image shows how a flat sheet becomes a structured box with a clear window. It matches the complexity of your source image.
//           image:
//             "https://res.cloudinary.com/ddblal31l/image/upload/v1778213691/Gemini_Generated_Image_o31b3ko31b3ko31b_kf9bkw.png",
//         },
//         {
//           id: 2,
//           title: "Luxury Rigid Boxes",
//           category: "Premium Matte",
//           // High-end jewelry/gift style box
//           image:
//             "https://images.unsplash.com/photo-1607227063002-677dc5fdf96f?q=80&w=800&auto=format&fit=crop",
//         },
//         {
//           id: 3,
//           title: "Precision Print Labels",
//           category: "Custom Die-Cut",
//           // Shows printing quality and paper texture
//           image:
//             "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
//         },
//         {
//           id: 4,
//           title: "Glow Gold Serum Box",
//           category: "Premium Cosmetic Packaging",
//           image:
//             "https://res.cloudinary.com/ddblal31l/image/upload/v1778214048/8e27ce96-f780-48e1-87b7-b10ddb3f8f7d_gwboix.jpg",
//         },
//       ],
//     },

//     aboutSection: {
//       badge: "Who We Are",
//       headingMain: "Redefining the",
//       headingHighlight: "Unboxing Experience",
//       description:
//         "We don't just make boxes; we craft the first physical touchpoint between your brand and your customer.",
//       bentoBoxes: {
//         mainStory: {
//           title: "Our Journey",
//           text: "Founded in Kochi, Nithi Mart started with a simple mission: to bridge the gap between premium branding and sustainable packaging. We believe the outside of your product should be just as remarkable as what's inside.",
//         },
//         statBox: { value: "100%", label: "Customizable" },
//         features: [
//           {
//             title: "Sustainable Practices",
//             desc: "Eco-friendly materials that don't compromise on luxury or durability.",
//             icon: "leaf",
//           },
//           {
//             title: "Local Roots, Global Reach",
//             desc: "Proudly manufactured in Kerala, delivered seamlessly across Pan-India.",
//             icon: "globe",
//           },
//         ],
//       },
//     },

//     pricingSection: {
//       badge: "Clear Investment",
//       headingMain: "Scaled for Your",
//       headingHighlight: "Brand's Growth",
//       description:
//         "Whether you need a handful of prototypes or a massive nationwide rollout, our production lines adapt to your scale.",
//       toggleLeft: "Standard Run",
//       toggleRight: "Bulk Run",
//       tiers: [
//         {
//           name: "Prototype & Sample",
//           description:
//             "Perfect for testing materials, structural integrity, and design concepts before a massive launch.",
//           priceStandard: "Custom Quote",
//           priceBulk: "Included in Bulk",
//           features: [
//             "1-5 Physical Prototypes",
//             "Standard Material Selection",
//             "Digital 3D Proofs",
//             "Basic Structural Design",
//             "1 Design Revision",
//           ],
//           ctaText: "Order Samples",
//           isPopular: false,
//         },
//         {
//           name: "Brand Growth",
//           description:
//             "The sweet spot for emerging brands looking to elevate their unboxing experience at scale.",
//           priceStandard: "MOQ: 500+",
//           priceBulk: "MOQ: 5,000+",
//           features: [
//             "Premium Material Access",
//             "High-Res Eco-Friendly Print",
//             "Foil Stamping & Embossing",
//             "Custom Inserts & Sleeves",
//             "Dedicated Account Manager",
//           ],
//           ctaText: "Start Production",
//           isPopular: true,
//         },
//         {
//           name: "Enterprise Custom",
//           description:
//             "End-to-end supply chain integration and warehousing for established, high-volume brands.",
//           priceStandard: "Contract",
//           priceBulk: "Contract",
//           features: [
//             "Advanced Die-Cuts & Engineering",
//             "Inventory Warehousing",
//             "Just-in-Time (JIT) Delivery",
//             "Multi-Location Shipping",
//             "24/7 Priority Support",
//           ],
//           ctaText: "Contact Sales",
//           isPopular: false,
//         },
//       ],
//     },

//     testimonialsSection: {
//       badge: "Client Stories",
//       headingMain: "Trusted by",
//       headingHighlight: "Modern Brands",
//       description:
//         "Don't just take our word for it. Here is what our partners have to say about our packaging solutions.",
//       reviews: [
//         {
//           name: "Sarah Jenkins",
//           role: "Founder, EcoGlow Skincare",
//           text: "Nithi Mart completely transformed our unboxing experience. The custom eco-friendly mailers not only look incredibly premium but align perfectly with our sustainable mission.",
//           rating: 5,
//         },
//         {
//           name: "David Chen",
//           role: "Operations Manager, Brew & Co.",
//           text: "Finding a reliable partner for bulk manufacturing was tough until we found them. Their print quality is consistently flawless, and their turnaround times have saved our product launches.",
//           rating: 5,
//         },
//         {
//           name: "Aisha Rahman",
//           role: "Creative Director, Aura Fragrances",
//           text: "The attention to detail on our rigid perfume boxes is unmatched. The gold foil stamping was crisp, and the structural integrity is exactly what a luxury product needs.",
//           rating: 5,
//         },
//       ],
//     },

//     footer: {
//       description:
//         "Premium customized packaging solutions. Elevating brands from concept to delivery, proudly based in Kerala.",
//       contact: {
//         email: "hello@nithimart.com",
//         phone: "+91 9188050342",
//         address: "Kochi, Kerala, India",
//       },
//       quickLinks: [
//         { label: "Home", href: "#home" },
//         { label: "Features", href: "#features" },
//         { label: "Portfolio", href: "#portfolio" },
//         { label: "Pricing", href: "#pricing" },
//       ],
//       legal: [
//         { label: "Privacy Policy", href: "#" },
//         { label: "Terms of Service", href: "#" },
//         { label: "Shipping Policy", href: "#" },
//       ],
//     },
//   },
//   // ---------------------------------------------------------
//   // 3. QIYA COLLECTIONS (D2C E-commerce Pitch)
//   // ---------------------------------------------------------
//   qiya: {
//     name: "Qiya Collections",
//     description: "Handmade Scrunchies with Premium Quality",
//     location: "Vaniyambadi, Tamilnadu",
//     phone: "DM on Instagram", // Or add their number if you have it
//     services: ["Premium Silk", "Daily Wear", "Custom Hampers"],
//     tagline: "Gentle on hair. Heavy on style.",
//     heroTitle: "Premium Handmade Scrunchies",
//     logoText: "QIYA", // Kept all-caps to match their logo's serif font style
//     lgoImage: "",
//     features: [
//       {
//         title: "Handmade with Love",
//         desc: "Every piece crafted meticulously by hand.",
//       },
//       {
//         title: "Premium Fabrics",
//         desc: "Silks and satins that prevent hair breakage.",
//       },
//       {
//         title: "Pan-India Shipping",
//         desc: "Delivering your favorites anywhere in India.",
//       },
//     ],
//     navLinks: [
//       { label: "Shop Collections", href: "#portfolio" },
//       { label: "Our Story", href: "#about" },
//       { label: "Order Custom", href: "#pricing" },
//     ],
//     ctaText: "Shop Now",

//     hero: {
//       badge: "Premium Quality • Handmade",
//       headingMain: "Elevate Your Everyday",
//       headingHighlight: "Hair Care",
//       description:
//         "Discover our exclusive collection of handmade, premium scrunchies. Gentle on your hair, crafted with love, and shipped directly from Vaniyambadi to anywhere in India.",
//       primaryCta: "Explore Collections",
//       secondaryCta: "Our Story",
//       stats: [
//         { label: "Shipping", value: "Pan-India" },
//         { label: "Origin", value: "Vaniyambadi" },
//         { label: "Quality", value: "Premium" },
//       ],
//     },

//     featuresSection: {
//       badge: "The Qiya Difference",
//       headingMain: "Why Your Hair Will",
//       headingHighlight: "Love Us",
//       description:
//         "Ditch the harsh elastics. Our handmade scrunchies are designed to protect your hair while elevating your outfit.",
//       items: [
//         {
//           title: "Anti-Breakage",
//           desc: "Smooth fabrics that glide over hair, reducing split ends and friction.",
//           icon: "sparkles",
//         },
//         {
//           title: "Locally Handmade",
//           desc: "Proudly stitched by a college student, ensuring attention to every detail.",
//           icon: "penTool",
//         },
//         {
//           title: "All-Day Comfort",
//           desc: "Perfectly tensioned elastic that holds secure without causing headaches.",
//           icon: "leaf",
//         },
//       ],
//     },

//     portfolioSection: {
//       badge: "Latest Drops",
//       headingMain: "Our Premium",
//       headingHighlight: "Collections",
//       description:
//         "From everyday cottons to luxurious evening silks, find the perfect match for your aesthetic.",
//       projects: [
//         {
//           id: 1,
//           title: "The Mulberry Silk Range",
//           category: "Luxury",
//           // Deep premium pink silk folds
//           image:
//             "https://images.unsplash.com/photo-1533158022807-6bb4b197ec0e?q=80&w=800&auto=format&fit=crop",
//         },
//         {
//           id: 2,
//           title: "Dusty Rose Satin",
//           category: "Bestseller",
//           // Soft dusty rose satin texture
//           image:
//             "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop",
//         },
//         {
//           id: 3,
//           title: "Everyday Pastels",
//           category: "Casual Wear",
//           // The working scrunchie/pastel image!
//           image:
//             "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
//         },
//         {
//           id: 4,
//           title: "Festive Velvet Combos",
//           category: "Special Occasion",
//           // Rich, dark velvet texture
//           image:
//             "https://images.unsplash.com/photo-1607582498263-2287eb1ba44a?q=80&w=800&auto=format&fit=crop",
//         },
//       ],
//     },

//     aboutSection: {
//       badge: "The Founder",
//       headingMain: "A Passion Project",
//       headingHighlight: "Turned Brand",
//       description:
//         "What started as a creative outlet between college classes has grown into a premium hair care brand loved across India.",
//       bentoBoxes: {
//         mainStory: {
//           title: "Student Led, Quality Driven",
//           text: "Based in Vaniyambadi, Qiya Collections was born from a desire to create hair accessories that are both beautiful and gentle. Managing college and a growing brand isn't easy, but seeing customers across India wear my handmade creations makes every stitch worth it.",
//         },
//         statBox: { value: "100%", label: "Handmade" },
//         features: [
//           {
//             title: "Premium Sourcing",
//             desc: "We handpick every fabric to ensure it meets our strict quality standards.",
//             icon: "sparkles",
//           },
//           {
//             title: "Nationwide Love",
//             desc: "Shipping carefully packaged orders to every corner of the country.",
//             icon: "globe",
//           },
//         ],
//       },
//     },

//     pricingSection: {
//       badge: "Shop By Volume",
//       headingMain: "Perfect For You,",
//       headingHighlight: "Or For Gifting",
//       description:
//         "Pick up a single piece for yourself, or grab a combo pack to gift your bridesmaids, friends, or sisters.",
//       toggleLeft: "Retail",
//       toggleRight: "Bulk/Gifting",
//       tiers: [
//         {
//           name: "Single Scrunchie",
//           description:
//             "Perfect for testing our quality and finding your new favorite everyday accessory.",
//           priceStandard: "₹149",
//           priceBulk: "N/A",
//           features: [
//             "1 Premium Scrunchie",
//             "Standard Packaging",
//             "Choose any color",
//             "Care Instructions Card",
//           ],
//           ctaText: "Order One",
//           isPopular: false,
//         },
//         {
//           name: "The Classic Trio",
//           description:
//             "Our most popular option. Curate a set of 3 scrunchies that match your wardrobe.",
//           priceStandard: "₹399",
//           priceBulk: "₹349",
//           features: [
//             "3 Premium Scrunchies",
//             "Aesthetic Mailer Box",
//             "Mix & Match Fabrics",
//             "Free Microfiber Pouch",
//             "Priority Dispatch",
//           ],
//           ctaText: "Build Your Trio",
//           isPopular: true,
//         },
//         {
//           name: "Bulk / Party Favors",
//           description:
//             "Custom hampers for birthdays, weddings, or corporate gifting events.",
//           priceStandard: "Contact Us",
//           priceBulk: "Custom Quote",
//           features: [
//             "20+ Premium Scrunchies",
//             "Customized Tagging",
//             "Ribbon & Box Styling",
//             "Wholesale Pricing",
//             "Dedicated Support",
//           ],
//           ctaText: "Plan Your Event",
//           isPopular: false,
//         },
//       ],
//     },

//     testimonialsSection: {
//       badge: "Customer Love",
//       headingMain: "What The Girls",
//       headingHighlight: "Are Saying",
//       description:
//         "Real reviews from our beautiful customers across India who made the switch to Qiya.",
//       reviews: [
//         {
//           name: "Priya S.",
//           role: "Chennai",
//           text: "I've completely stopped using regular rubber bands. The satin scrunchies from Qiya hold my thick hair perfectly without giving me a headache!",
//           rating: 5,
//         },
//         {
//           name: "Ananya R.",
//           role: "Bangalore",
//           text: "Ordered the trio pack for my sister's birthday. The packaging was so aesthetic and cute, and you can really feel the premium quality of the fabric.",
//           rating: 5,
//         },
//         {
//           name: "Meera K.",
//           role: "Delhi",
//           text: "It's amazing that a college student is running this! The shipping was super fast to Delhi and the dusty rose color matches my outfits perfectly.",
//           rating: 5,
//         },
//       ],
//     },

//     footer: {
//       description:
//         "Handmade, premium quality scrunchies crafted with love in Vaniyambadi. Elevating hair care across India.",
//       contact: {
//         email: "hello@qiyacollections.com",
//         phone: "DM us on Instagram",
//         address: "Vaniyambadi, Tamilnadu, India",
//       },
//       quickLinks: [
//         { label: "Home", href: "#home" },
//         { label: "Shop", href: "#portfolio" },
//         { label: "About", href: "#about" },
//         { label: "Bulk Orders", href: "#pricing" },
//       ],
//       legal: [
//         { label: "Return Policy", href: "#" },
//         { label: "Shipping Policy", href: "#" },
//         { label: "Care Instructions", href: "#" },
//       ],
//     },
//   },
// };

export const clientConfigs = {
  default: DEFAULT_CONFIG,
  nithimart: NITHI_MART,
  qiya: QIYA,
};
