import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "../hooks/usePortFolio";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-7 h-7 fill-white"
  >
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.826.736 5.476 2.027 7.782L0 32l8.451-2.013A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.852l-.486-.29-5.013 1.194 1.225-4.877-.318-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.884c-.398-.199-2.355-1.162-2.72-1.295-.366-.133-.632-.199-.898.199-.266.398-1.03 1.295-1.263 1.561-.232.266-.465.299-.863.1-.398-.2-1.68-.619-3.2-1.974-1.183-1.054-1.981-2.355-2.214-2.753-.232-.398-.025-.613.175-.811.18-.179.398-.465.597-.698.2-.232.266-.398.399-.664.133-.266.066-.498-.033-.697-.1-.2-.898-2.165-1.23-2.963-.325-.779-.655-.673-.898-.685l-.764-.013c-.266 0-.698.1-1.063.498-.366.398-1.395 1.363-1.395 3.323s1.428 3.854 1.628 4.12c.199.266 2.809 4.288 6.808 6.013.951.411 1.694.656 2.272.839.954.304 1.824.261 2.511.158.766-.114 2.355-.963 2.688-1.894.333-.931.333-1.728.233-1.894-.1-.166-.366-.266-.764-.465z" />
  </svg>
);

export const FloatingWhatsApp = () => {
  const { whatsapp } = usePortfolio();

  if (!whatsapp?.number) return null;

  const href = whatsapp.message
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`
    : `https://wa.me/${whatsapp.number}`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      >
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20b858] transition-colors"
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsAppIcon />
        </motion.a>
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-50"
          animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};
