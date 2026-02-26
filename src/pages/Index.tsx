import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Clock, Wrench, MessageCircle, HardHat, ClipboardList, Truck, Eye, CheckCircle, ArrowRight } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import ScrollReveal from "@/components/ScrollReveal";
import CTABand from "@/components/CTABand";

const whyVita = [
  { icon: Shield, title: "Strong GC management", desc: "We coordinate trades, schedules, materials, and site standards so the work stays organized and moving." },
  { icon: Clock, title: "Experience you can trust", desc: "15+ years delivering builds, renovations, and improvements with consistent results." },
  { icon: Wrench, title: "Flexible delivery", desc: "When timelines or budgets are tight, we help you prioritize scope, offer options, and phase work where it makes sense." },
  { icon: MessageCircle, title: "Clear communication", desc: "Fast answers, regular updates, and transparent change management." },
  { icon: HardHat, title: "Professional jobsites", desc: "Clean, safe, respectful—especially important for occupied homes and active businesses." },
];

const commercial = [
  "Tenant Improvements & Buildouts",
  "Interior Renovations & Refreshes",
  "Unit Turnovers & Make-Good",
  "Back-of-House Upgrades (storage, staff areas, washrooms)",
  "Repairs & Ongoing Maintenance",
];

const residential = [
  "Home Renovations (full or partial)",
  "Kitchens & Bathrooms",
  "Basement Finishing",
  "Additions & Structural Changes",
  "Exterior Upgrades (decks, siding, doors/windows)",
  "Repairs & Upgrades (dry rot, water damage, framing)",
];

const handling = [
  "Scope planning & estimating with clear inclusions/exclusions",
  "Scheduling & sequencing to reduce downtime and prevent trade conflicts",
  "Procurement planning for long-lead items and site readiness",
  "Site logistics (access, safety, protection, cleanliness)",
  "Quality control throughout, not just at the end",
  "Closeout with punch-list completion and turnover support",
];

const steps = [
  { num: "01", title: "Consultation", desc: "Goals, budget range, timeline, and site conditions." },
  { num: "02", title: "Scope & Estimate", desc: "Clear breakdown, options, and realistic expectations." },
  { num: "03", title: "Plan & Schedule", desc: "Trades, materials, milestones, and site logistics." },
  { num: "04", title: "Build", desc: "Consistent communication, clean site practices, quality checks." },
  { num: "05", title: "Final Walkthrough", desc: "Punch-list completed and project wrapped properly." },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vita Environmental | Home</title>
        <meta name="description" content="General Contracting, Made Simple. Vita delivers clean, durable builds with 15+ years of experience—clear communication, strong coordination, and flexible delivery for commercial and residential work." />
      </Helmet>

      <HeroSlider />

      {/* Why Vita */}
      <section className="section-padding">
        <div className="container-site">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Why Vita</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">
                Reliable Project Leadership From Start to Finish
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyVita.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-section-alt">
        <div className="container-site">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Services</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">General Contracting Services</h2>
              <p className="text-muted-foreground">
                Vita manages projects from planning to closeout—so you have one accountable team driving the job forward.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-heading font-bold text-xl mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" /> Commercial
                </h3>
                <ul className="space-y-3">
                  {commercial.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-heading font-bold text-xl mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" /> Residential
                </h3>
                <ul className="space-y-3">
                  {residential.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm mb-4 italic">
              If you're not sure where your project fits, send the details—we'll tell you quickly and honestly.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold text-sm hover:brightness-110 transition"
            >
              Tell Us About Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">What We Handle</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">
                  Coordination That Keeps Projects Moving
                </h2>
                <p className="text-muted-foreground mb-6">
                  The finish matters—but the process matters just as much. We focus on the fundamentals that protect schedule, budget, and quality:
                </p>
                <ul className="space-y-3">
                  {handling.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative">
                <div className="bg-accent/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                      <ClipboardList className="mx-auto text-accent mb-3" size={32} />
                      <span className="text-sm font-semibold">Planning</span>
                    </div>
                    <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                      <Truck className="mx-auto text-accent mb-3" size={32} />
                      <span className="text-sm font-semibold">Procurement</span>
                    </div>
                    <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                      <HardHat className="mx-auto text-accent mb-3" size={32} />
                      <span className="text-sm font-semibold">Site Management</span>
                    </div>
                    <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                      <Eye className="mx-auto text-accent mb-3" size={32} />
                      <span className="text-sm font-semibold">Quality Control</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-section-dark text-section-dark-foreground">
        <div className="container-site">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Process</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">A Straightforward Build Process</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={i}>
                <div className="relative p-6 rounded-lg border border-section-dark-foreground/10 bg-section-dark-foreground/5 hover:bg-section-dark-foreground/10 transition-colors">
                  <span className="text-accent font-extrabold text-2xl mb-3 block">{step.num}</span>
                  <h3 className="font-heading font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-section-dark-foreground/70 text-sm">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        heading="Ready to start?"
        body="Tell us what you're building—we'll respond quickly with clear next steps."
        buttonText="Request a Quote"
        buttonLink="/contact"
      />
    </>
  );
};

export default Index;
