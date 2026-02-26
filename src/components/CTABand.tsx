import { Link } from "react-router-dom";

interface CTABandProps {
  heading: string;
  body: string;
  buttonText: string;
  buttonLink: string;
  variant?: "accent" | "dark";
}

const CTABand = ({ heading, body, buttonText, buttonLink, variant = "accent" }: CTABandProps) => {
  const isDark = variant === "dark";

  return (
    <section
      className={`section-padding ${
        isDark ? "bg-section-dark text-section-dark-foreground" : "bg-cta-band text-cta-band-foreground"
      }`}
    >
      <div className="container-site text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{heading}</h2>
        <p className={`text-base md:text-lg mb-8 ${isDark ? "text-section-dark-foreground/80" : "text-cta-band-foreground/80"}`}>
          {body}
        </p>
        <Link
          to={buttonLink}
          className={`inline-block px-8 py-3.5 rounded-md font-semibold text-sm transition hover:brightness-110 ${
            isDark
              ? "bg-accent text-accent-foreground"
              : "bg-primary text-primary-foreground"
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTABand;
