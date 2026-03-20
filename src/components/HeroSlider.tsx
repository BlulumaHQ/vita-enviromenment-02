import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@vitaenv.com?subject=Quote Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

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
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay)/0.85)] via-[hsl(var(--hero-overlay)/0.6)] to-[hsl(var(--hero-overlay)/0.4)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-accent/30">
                General Contracting
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-section-dark-foreground leading-tight mb-5">
                General Contracting, Made Simple.
              </h1>
              <p className="text-section-dark-foreground/80 text-sm md:text-base leading-relaxed mb-6">
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

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-1">Get a Free Quote</h3>
                <p className="text-muted-foreground text-xs mb-4">Tell us about your project and we'll get back to you quickly.</p>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-accent text-2xl mb-2">✓</div>
                    <p className="text-foreground font-semibold text-sm">Thank you!</p>
                    <p className="text-muted-foreground text-xs">We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                    <input
                      type="tel"
                      placeholder="Phone (optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                    <textarea
                      placeholder="Tell us about your project *"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-md bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground py-2.5 rounded-md font-semibold hover:brightness-110 transition text-sm"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
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
