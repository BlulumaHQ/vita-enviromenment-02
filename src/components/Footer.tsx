import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column A: Logo + blurb */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="font-heading font-extrabold text-accent-foreground text-sm">V</span>
              </div>
              <span className="font-heading font-bold text-lg">Vita Environmental</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Vita Environmental is a leading environmental abatement company that specializes in providing safe and effective solutions for hazardous materials.
            </p>
          </div>

          {/* Column B: Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column C: Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                110-60 East 5th Avenue, Vancouver, BC V5T 1G8
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href="tel:7785081118" className="hover:text-accent transition-colors">(778) 508-1118</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={16} className="shrink-0 text-accent" />
                <a href="mailto:info@vitaenv.com" className="hover:text-accent transition-colors">info@vitaenv.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-site py-5 text-center text-sm text-primary-foreground/50">
          Vita Environmental Copyright © 2026 All Rights Reserved. |{" "}
          Web Design by{" "}
          <a
            href="https://bluluma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:underline transition-colors"
          >
            Bluluma Design
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
