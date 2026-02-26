import hero1 from "@/assets/hero-1.jpg";

interface PageHeroProps {
  title: string;
}

const PageHero = ({ title }: PageHeroProps) => {
  return (
    <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
      <img
        src={hero1}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.8)]" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-section-dark-foreground">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHero;
