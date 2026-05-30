import { motion } from "framer-motion";
import { ExternalLink, Globe, MapPin } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const MapSection = () => {
  const { locationMap } = usePortfolio();

  if (!locationMap) {
    return null;
  }

  return (
    <motion.section
      id="location"
      className="py-24 bg-theme-secondary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-theme-muted/20 bg-theme-card/70 px-4 py-2 text-sm uppercase tracking-[0.25em] text-theme-accent">
            <Globe size={16} />
            Location
          </span>
          <h2 className="mt-6 text-4xl font-bold text-theme-text sm:text-5xl">
            Where your next meeting takes shape.
          </h2>
          <p className="mt-4 text-lg leading-8 text-theme-muted">
            {locationMap.description ?? "Find us in the neighborhood and step into a modern outreach experience."}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="rounded-[32px] border border-theme-muted/10 bg-theme-card/90 p-10 shadow-xl shadow-theme-accent/5 backdrop-blur-xl"
            variants={containerVariants}
          >
            <div className="flex items-center gap-3 text-theme-accent">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-theme-accent/15 text-theme-accent">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-theme-muted">Address</p>
                <p className="mt-2 text-xl font-semibold text-theme-text">{locationMap.label ?? "Local Office"}</p>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-theme-muted">
              <p className="text-base leading-7">{locationMap.address ?? "Address not available."}</p>
              <p className="text-base leading-7">We keep our location easy to reach so clients feel confident from the first visit.</p>
            </div>

            {locationMap.link ? (
              <a
                href={locationMap.link}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-3xl bg-theme-accent px-6 py-3 text-sm font-semibold text-theme-bg transition-transform duration-300 hover:-translate-y-1"
              >
                <ExternalLink size={18} />
                Open in Maps
              </a>
            ) : null}
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[32px] border border-theme-muted/10 bg-theme-card/80 shadow-xl shadow-theme-accent/5 backdrop-blur-xl"
            variants={containerVariants}
          >
            {locationMap.embedUrl ? (
              <iframe
                className="h-[420px] w-full border-0"
                src={locationMap.embedUrl}
                loading="lazy"
                title="Location map"
              />
            ) : (
              <div className="flex h-[420px] flex-col items-center justify-center gap-4 p-10 text-center text-theme-text">
                <MapPin size={36} className="text-theme-accent" />
                <p className="text-lg font-semibold">Map preview is unavailable.</p>
                <p className="max-w-sm text-theme-muted">
                  Add a map URL in your configuration to show the embedded location here.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
