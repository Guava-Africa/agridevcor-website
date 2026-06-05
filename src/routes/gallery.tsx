import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import heroImg from "@/assets/hero-fields.jpg";
import projTraining from "@/assets/project-training.jpg";
import projIrrigation from "@/assets/project-irrigation.jpg";
import projClimate from "@/assets/project-climate.jpg";
import projResearch from "@/assets/project-research.jpg";
import projCoffee from "@/assets/project-coffee.jpg";
import projGreenhouse from "@/assets/project-greenhouse.jpg";
import aboutImg from "@/assets/about-soil.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — AgriDevcor" },
      { name: "description", content: "Stories told through imagery: farmers, fields, water and the systems we help build." },
      { property: "og:title", content: "Gallery — AgriDevcor" },
      { property: "og:description", content: "A visual archive of our work in the field." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const images = [
  { src: heroImg, alt: "Aerial of green terraced farmland", tall: true },
  { src: projTraining, alt: "Farmer training session" },
  { src: aboutImg, alt: "Soil with seedling" },
  { src: projIrrigation, alt: "Drip irrigation system", tall: true },
  { src: projCoffee, alt: "Coffee plantation aerial" },
  { src: projClimate, alt: "Solar panels by crops" },
  { src: projGreenhouse, alt: "Greenhouse interior", tall: true },
  { src: projResearch, alt: "Scientist inspecting maize" },
];

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <section className="bg-soft py-16 md:py-24">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow">Gallery</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">Field notes, in pictures.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A small window into the people, places and systems we work with every day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="mb-5 block w-full overflow-hidden rounded-2xl border border-border bg-muted group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="size-5" />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
