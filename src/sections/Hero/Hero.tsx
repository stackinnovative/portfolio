import { motion, type Variants, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Zap, Sparkles, MapPin, Layers, Code2, CheckCircle2 } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

const iconMap: Record<string, React.ElementType> = {
  mappin: MapPin,
  layers: Layers,
  code: Code2,
  zap: Zap,
  check: CheckCircle2,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const floatVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export const Hero = () => {
  const { hero } = usePortfolio();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 30);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 30);
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden pt-24 pb-16"
      onMouseMove={handleMouseMove}
    >
      {/* ── Background Orbs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-theme-accent/8 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut", repeatType: "mirror" }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-[320px] h-[320px] rounded-full bg-theme-accent/15 blur-2xl"
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", repeatType: "mirror" }}
        />
        <motion.div
          className="absolute bottom-16 left-0 w-[260px] h-[260px] rounded-full bg-theme-secondary/40 blur-2xl"
          animate={{ x: [0, -20, 0], y: [0, 14, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut", repeatType: "mirror" }}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.06),transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-10 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center"
        >
          {/* ── LEFT COLUMN ── */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 rounded-full border border-theme-accent/30 bg-theme-accent/10 px-4 py-2 shadow-sm shadow-theme-accent/10">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <Sparkles size={16} className="text-theme-accent" />
              </motion.span>
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-theme-accent">
                {hero.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.05] tracking-[-0.03em] text-theme-text">
                {hero.headingMain}{" "}
                <span className="relative inline-block">
                  <span className="theme-shimmer">{hero.headingHighlight}</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-theme-accent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
                  />
                </span>
              </h1>
              <p className="mx-auto lg:mx-0 max-w-xl text-base sm:text-lg leading-relaxed text-theme-muted">
                {hero.description}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-theme-accent px-7 py-3.5 text-sm font-bold text-theme-bg shadow-lg shadow-theme-accent/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-theme-accent/30"
              >
                <Zap size={18} className="group-hover:animate-pulse" />
                {hero.primaryCta}
              </motion.button>
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-theme-muted/25 bg-theme-secondary/60 px-7 py-3.5 text-sm font-semibold text-theme-text backdrop-blur-sm transition-colors duration-300 hover:border-theme-accent/40 hover:bg-theme-secondary/80"
              >
                {hero.secondaryCta}
                <ArrowRight size={18} className="text-theme-muted" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3"
            >
              {hero.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="rounded-2xl border border-theme-muted/10 bg-theme-card/70 p-4 text-center shadow-sm shadow-theme-accent/5 backdrop-blur-xl cursor-default"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-theme-text">{stat.value}</p>
                  <p className="mt-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-theme-muted">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            variants={panelVariants}
            style={{ rotateX: springY, rotateY: springX }}
            className="relative perspective-[1200px]"
          >
            {/* Main image card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-theme-accent/15 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-theme-accent/12 via-transparent to-theme-secondary/20 z-10" />

              {hero.image ? (
                <img
                  src={hero.image}
                  alt={hero.imageAlt ?? hero.headingMain}
                  className="h-[420px] sm:h-[480px] w-full object-cover object-center"
                />
              ) : (
                <div className="h-[480px] w-full bg-gradient-to-br from-theme-secondary via-theme-secondary/80 to-theme-accent/20" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Overlay top-left */}
              {hero.overlayBadge && (
                <motion.div
                  variants={floatVariants}
                  transition={{ delay: 0.6 }}
                  className="absolute left-5 top-5 z-20 rounded-2xl border border-white/20 bg-black/40 p-4 shadow-xl backdrop-blur-xl"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-theme-accent">
                    {hero.overlayBadge}
                  </p>
                  {hero.overlayTitle && (
                    <h2 className="mt-1.5 text-sm sm:text-base font-semibold text-white leading-snug max-w-[180px]">
                      {hero.overlayTitle}
                    </h2>
                  )}
                </motion.div>
              )}

              {/* Overlay bottom-right */}
              {hero.overlaySubtext && (
                <motion.div
                  variants={floatVariants}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-5 right-5 z-20 rounded-2xl border border-white/15 bg-theme-bg/80 p-4 shadow-xl backdrop-blur-xl max-w-[200px]"
                >
                  <p className="text-xs text-theme-muted leading-relaxed">{hero.overlaySubtext}</p>
                </motion.div>
              )}
            </motion.div>

            {/* Info Cards */}
            {hero.infoCards && hero.infoCards.length > 0 && (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {hero.infoCards.map((card, i) => {
                  const Icon = iconMap[card.icon] ?? MapPin;
                  return (
                    <motion.div
                      key={i}
                      variants={floatVariants}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="rounded-2xl border border-theme-muted/10 bg-theme-card/80 p-4 shadow-lg shadow-theme-accent/8 backdrop-blur-xl cursor-default"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="rounded-lg bg-theme-accent/10 p-2">
                          <Icon size={16} className="text-theme-accent" />
                        </div>
                        <p className="text-sm font-semibold text-theme-text">{card.title}</p>
                      </div>
                      <p className="mt-2.5 text-xs leading-relaxed text-theme-muted">{card.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};