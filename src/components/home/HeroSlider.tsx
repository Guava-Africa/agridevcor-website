import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { FaSeedling, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-fields.jpg";
import irrigation from "@/assets/project-irrigation.jpg";
import climate from "@/assets/project-climate.jpg";
import training from "@/assets/project-training.jpg";
import { cn } from "@/lib/utils";

const slides = [
  { src: heroImg, alt: "Aerial view of green terraced farmland" },
  { src: irrigation, alt: "Precision irrigation in operation" },
  { src: climate, alt: "Climate-smart agriculture in practice" },
  { src: training, alt: "Farmers training on digital extension" },
];

const SLIDE_MS = 6500;

export function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate min-h-[92vh] flex items-center overflow-hidden">
      {/* Slides — Ken Burns */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1920}
            height={1280}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ease-out will-change-transform",
              i === idx ? "opacity-100 animate-ken-burns" : "opacity-0",
            )}
          />
        ))}
      </div>

      {/* Gradient + vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.18_0.05_152/0.88)_0%,oklch(0.18_0.05_152/0.55)_55%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.1_0.05_152/0.55),transparent_60%)]" />

      {/* Content */}
      <div className="relative container-px mx-auto max-w-7xl pt-32 pb-24 md:pt-40 md:pb-32 text-white">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold tracking-widest uppercase animate-fade-in">
            <FaSeedling className="size-3.5" /> AgriDevcor · Growing a better tomorrow
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up">
            Growing a better tomorrow through{" "}
            <span className="text-accent">sustainable agriculture</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl animate-fade-up delay-100">
            Empowering farmers, strengthening communities, advancing climate-smart
            agriculture, and delivering innovative development solutions that create
            lasting impact.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up delay-200">
            <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-7 text-base font-semibold">
              <Link to="/services">Explore our services <FaArrowRight className="ml-2 size-3.5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-white/0 border-white/40 text-white hover:bg-white/10 hover:text-white h-12 px-7 text-base">
              <Link to="/projects">View projects</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full text-white hover:bg-white/10 hover:text-white h-12 px-5 text-base">
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === idx ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
