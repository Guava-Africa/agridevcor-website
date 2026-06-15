import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { FaSeedling, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-fields.jpg";
import sorghum from "@/assets/sorgum.jpg";
import climate from "@/assets/project-climate.jpg";
import wateringMaize from "@/assets/man watering maize plants.jpg";
import { cn } from "@/lib/utils";

const slides = [
  { src: heroImg, alt: "Aerial view of green terraced farmland" },
  { src: sorghum, alt: "Sorghum field in full bloom" },
  { src: climate, alt: "Climate-smart agriculture in practice" },
  { src: wateringMaize, alt: "Farmer watering maize plants" },
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
      <div className="relative container-px mx-auto max-w-7xl pt-28 pb-20 md:pt-32 md:pb-28 text-white">
        <div className="max-full max-w-6xl">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-[0.12em] uppercase text-white/80 animate-fade-in">
            <FaSeedling className="size-3 text-accent shrink-0" />
            AgriDevcor · Growing a better tomorrow
          </span>

          {/* Headline */}
          <h1 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.08] tracking-tight animate-fade-up">
            Growing a better tomorrow through{" "}
            <em className="text-accent not-italic">sustainable agriculture</em>.
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-sm md:text-base text-white/75 leading-relaxed animate-fade-up delay-100">
            Empowering farmers, strengthening communities, advancing climate-smart
            agriculture, and delivering innovative development solutions that create
            lasting impact.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up delay-200">
            <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-10 px-6 text-sm font-bold">
              <Link to="/services">
                Explore our services <FaArrowRight className="ml-2 size-3" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="rounded-full border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white/50 h-10 px-6 text-sm font-semibold">
              <Link to="/products">View Products</Link>
            </Button>

            <Button asChild size="lg" variant="ghost" className="text-white/70 hover:text-white hover:bg-transparent underline underline-offset-4 decoration-white/30 h-10 px-2 text-sm">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 flex items-center gap-2">
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
