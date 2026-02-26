import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current]}
            alt="Vita Environmental project"
            className="w-full h-full object-cover animate-kenburns"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.85)] via-[hsl(var(--hero-overlay)/0.6)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-accent/30">
              General Contracting
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-section-dark-foreground leading-tight mb-6">
              General Contracting, Made Simple.
            </h1>
            <p className="text-section-dark-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Vita is a general contracting company delivering clean, durable builds with 15+ years of experience. We lead projects with clear communication, strong coordination, and the flexibility to meet tight timelines and practical budgets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-7 py-3 rounded-md font-semibold hover:brightness-110 transition text-sm"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="border border-section-dark-foreground/30 text-section-dark-foreground px-7 py-3 rounded-md font-semibold hover:bg-section-dark-foreground/10 transition text-sm"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-accent w-8" : "bg-section-dark-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
