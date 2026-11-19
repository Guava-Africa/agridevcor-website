import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-fields.jpg";
import sorghum from "@/assets/sorgum.jpg";
import climate from "@/assets/project-climate.jpg";
import wateringMaize from "@/assets/man watering maize plants.jpg";
import farmingCommunity from "@/assets/women in tomatoe field.jpg";
import tomatoes from "@/assets/two hands holding 2 tomatoes.jpg";
import { cn } from "@/lib/utils";

const slides = [
  { src: heroImg, alt: "Aerial view of green terraced farmland" },
  { src: sorghum, alt: "Cereal crop field" },
  { src: climate, alt: "Climate-smart agriculture in practice" },
  { src: wateringMaize, alt: "Farmer watering maize plants" },
];

const SLIDE_MS = 7000;

export function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate min-h-[92vh] flex items-center overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          {slides.map((s, i) =>
            i === idx ? (
              <motion.img
                key={s.src}
                src={s.src}
                alt={s.alt}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1.06 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 1.2 }, scale: { duration: 8, ease: "easeOut" } }}
                className="absolute inset-0 size-full object-cover"
              />
            ) : null,
          )}
        </AnimatePresence>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.12_0.04_152/0.92)_0%,oklch(0.15_0.05_152/0.6)_55%,oklch(0.12_0.04_152/0.35)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.1_0.05_152/0.55),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-[480px] rounded-full bg-primary/25 blur-[100px] animate-blob" />

      <div className="relative container-px mx-auto max-w-7xl w-full pt-28 pb-24 md:pt-32 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-16">
          {/* Left content */}
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-md"
            >
              <Sprout className="size-3.5 text-accent" />
              AgriDevcor · African Agritech Excellence
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-[3.4rem]"
            >
              Grow smarter.{" "}
              <span className="text-primary-light">Feed the future.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base leading-relaxed text-white/75 md:text-lg max-w-xl"
            >
              Empowering farmers, strengthening communities, and delivering climate-smart
              agricultural solutions that create lasting impact across Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {["Climate-Smart", "Evidence-Based", "Farm-Gate Impact"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium text-white/75 backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-11 px-7 font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 h-11 px-7 font-semibold backdrop-blur-sm">
                <Link to="/products">View Products</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mx-auto w-full max-w-md pb-8 pr-8"
          >
            <img src={farmingCommunity} alt="Women working together in a tomato field" className="aspect-[4/5] max-h-[420px] w-full rounded-3xl object-cover shadow-2xl" />
            <img src={tomatoes} alt="Freshly harvested tomatoes held in a farmer's hands" className="absolute bottom-0 right-0 aspect-square w-2/5 rounded-2xl border-4 border-primary-dark object-cover shadow-xl" />
          </motion.div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === idx ? "w-10 bg-white" : "w-5 bg-white/35 hover:bg-white/60",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
