import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { X } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import CTABand from "@/components/CTABand";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { title: "Project Reference 1", desc: "Downtown Vancouver luxury hotel demolition project", img: project1 },
  { title: "Project Reference 2", desc: "Oakridge area, two multi-use commercial building construction prior to 1960.", img: project2 },
  { title: "Project Reference 3", desc: "Large commercial retail unit in a Coquitlam shopping mall.", img: project2 },
  { title: "Project Reference 4", desc: "Downtown Vancouver heritage building double height asbestos boiler demolition project", img: project3 },
  { title: "Project Reference 5", desc: "Metro Vancouver affordable housing demolition project", img: project1 },
  { title: "Project Reference 6", desc: "Canada Place mechanical system selective demolition and removal completed on schedule with no retail operating downtime", img: project3 },
];

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Vita Environmental | Projects</title>
        <meta name="description" content="A selection of Vita Environmental project references across Metro Vancouver and beyond." />
      </Helmet>

      <PageHero title="Projects" />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={i}>
                <div className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-base mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                    <button
                      onClick={() => setSelected(i)}
                      className="text-accent text-sm font-semibold hover:underline"
                    >
                      More
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-card rounded-lg max-w-lg w-full overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={projects[selected].img} alt={projects[selected].title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading font-bold text-xl">{projects[selected].title}</h3>
                <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground">
                  <X size={20} />
                </button>
              </div>
              <p className="text-muted-foreground text-sm">{projects[selected].desc}</p>
            </div>
          </div>
        </div>
      )}

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

export default Projects;
