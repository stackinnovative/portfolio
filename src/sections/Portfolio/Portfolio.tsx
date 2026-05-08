import { motion, type Variants } from "framer-motion";
import { Camera, ArrowUpRight } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

// UPGRADED: Cinematic staggered entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Slightly longer delay between cards for a "wave" effect
      delayChildren: 0.1,
    },
  },
};

// UPGRADED: Slide from left, un-blur, and snap into place
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100, // Starts 100px off to the left
    filter: "blur(10px)", // Starts out of focus (Premium touch!)
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // Custom bezier curve for a buttery smooth snap
    },
  },
};

export const Portfolio = () => {
const { portfolioSection } = usePortfolio();
  return (
    <section
      id="portfolio"
      className="py-24 bg-theme-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }} // Header also slides from left now
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-secondary border border-theme-muted/10 mb-6"
          >
            <Camera size={16} className="text-theme-accent" />
            <span className="text-sm font-medium text-theme-text tracking-wide uppercase">
              {portfolioSection.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-theme-text mb-4"
          >
            {portfolioSection.headingMain}{" "}
            <span className="text-theme-accent">
              {portfolioSection.headingHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-theme-muted"
          >
            {portfolioSection.description}
          </motion.p>
        </div>

        {/* Image Grid with Wave Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioSection.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative h-[400px] w-full rounded-3xl overflow-hidden bg-theme-card border border-theme-muted/10 shadow-lg"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-theme-bg/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                {/* Content sliding up */}
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-bold tracking-widest uppercase text-theme-accent mb-2 block">
                    {project.category}
                  </span>

                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-theme-text">
                      {project.title}
                    </h3>

                    <button className="w-12 h-12 rounded-full bg-theme-accent text-theme-bg flex items-center justify-center hover:opacity-90 transition-opacity">
                      <ArrowUpRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
