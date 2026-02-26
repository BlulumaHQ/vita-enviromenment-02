import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import CTABand from "@/components/CTABand";
import serviceAbatement from "@/assets/service-abatement.jpg";
import serviceDemolition from "@/assets/service-demolition.jpg";
import serviceRestoration from "@/assets/service-restoration.jpg";

const services = [
  { title: "Asbestos Removal", desc: "AES asbestos abatement service is a dedicated solution crafted to tackle the hazardous presence of asbestos in buildings and structures.", img: serviceAbatement },
  { title: "Selective Demolition", desc: "Our specialized team is experienced in working through challenges and provide creative approaches to every project.", img: serviceDemolition },
  { title: "Interior Demolition", desc: "AES's interior demolition team is highly efficient and are flexible with scheduling to meet difficult timeline requirements.", img: serviceDemolition },
  { title: "Lead Abatement", desc: "AES's abatement service is a comprehensive solution designed to address the unique challenges associated with lead-based materials.", img: serviceAbatement },
  { title: "Deconstruction", desc: "Our deconstruction service is a sustainable and strategic approach to dismantling structures with an emphasis on salvaging materials for reuse.", img: serviceDemolition },
  { title: "Asbestos Sampling and Testing", desc: "Our specialized sampling service involves collecting samples from suspect materials in your environment, followed by rigorous laboratory analysis.", img: serviceAbatement },
  { title: "Water and Flood Damage Restoration", desc: "AES's flood damage restoration service is a swift and comprehensive solution to mitigate the aftermath of water-related disasters.", img: serviceRestoration },
  { title: "Mold Removal", desc: "AES's mold removal service is a swift and efficient solution to address the potential health hazards associated with mold infestations.", img: serviceRestoration },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Vita Environmental | Services</title>
        <meta name="description" content="Environmental abatement and related services including asbestos removal, selective demolition, interior demolition, lead abatement, deconstruction, sampling/testing, water/flood damage restoration, and mold removal." />
      </Helmet>

      <PageHero title="Services" />

      <section className="section-padding">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6">Our Services</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Asbestos is a naturally occurring mineral that was commonly used in building materials before 1990. Breathing in asbestos fibers can cause serious health problems, including lung cancer, asbestosis, and mesothelioma. Symptoms of asbestosis include shortness of breath, persistent cough, fatigue, wheezing, chest pain, and weight loss. If you suspect that you have been exposed to asbestos, it is important to seek medical attention immediately.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To reduce your exposure to asbestos, avoid disturbing materials that may contain asbestos, hire a professional to test for asbestos before renovating or remodeling, and hire a qualified asbestos removal specialist to remove it safely.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-base mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                    <button className="text-accent text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="We are ready to build your dream, tell us more about your project"
        body="Building Tomorrow, Safely Today: Your Reliable Abatement Partner"
        buttonText="Contact Us"
        buttonLink="/contact"
        variant="dark"
      />
    </>
  );
};

export default Services;
