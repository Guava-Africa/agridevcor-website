import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import heroImg from "@/assets/hero-fields.jpg"
import projClimate from "@/assets/project-climate.jpg";
import cauliflower from "@/assets/cauliflorwer.jpg";
import sweetPotatoes from "@/assets/harvesting sweet potatoes.jpg";
import heroFields from "@/assets/hero-fields.jpg";
import mufarinyaWoman from "@/assets/a woman in mufarinya field.jpg";
import wateringMaize from "@/assets/man watering maize plants.jpg";
import popcornSacks from "@/assets/popcorns in sacks.jpg";
import climate from "@/assets/project-climate.jpg";
import greenhouse from "@/assets/project-greenhouse.jpg";
import irrigation from "@/assets/project-irrigation.jpg";
import sorghum from "@/assets/sorgum.jpg";
import strawberries from "@/assets/strawberries.jpg";
import strawberryPlants from "@/assets/strawberry plants.jpg";
import tomatoes from "@/assets/two hands holding 2 tomatoes.jpg";
import hoseWatering from "@/assets/watering from horse pipe.jpg";
import womanField from "@/assets/woman in field.jpg";
import womenTomatoes from "@/assets/women in tomatoe field.jpg";
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
  
  {
    src: cauliflower,
    alt: "Cauliflower production",
    category: "Vegetables",
  },

  { 
    src: heroImg,
    alt: "Aerial of green terraced farmland",
    tall: true,    
    category: "Agriculture",
  },

  {
    src: sweetPotatoes,
    alt: "Harvesting sweet potatoes",
    category: "Harvesting",
  },
  {
    src: mufarinyaWoman,
    alt: "Farmer in mufarinya field",
    category: "Farmers",
  },
  {
    src: wateringMaize,
    alt: "Watering maize plants",
    category: "Irrigation",
  },

  { 
    src: aboutImg,
    alt: "Healthy soil with seedling",
    category: "Soil",},


  {
    src: popcornSacks,
    alt: "Popcorn stored in sacks",
    category: "Post Harvest",
  },
  {
    src: climate,
    alt: "Climate smart agriculture",
    category: "Climate",
  },

  {
    src: greenhouse,
    alt: "Greenhouse farming",
    category: "Greenhouse",
  },
  {
    src: irrigation,
    alt: "Irrigation system",
    category: "Irrigation",
  },

  { 
    src: projCoffee,
    alt: "Aerial view of coffee plantation",
    category: "Agriculture",
  
  },


  {
    src: sorghum,
    alt: "Sorghum production",
    category: "Crops",
  },
  {
    src: strawberries,
    alt: "Fresh strawberries",
    category: "Horticulture",
  },
  {
    src: strawberryPlants,
    alt: "Strawberry cultivation",
    category: "Horticulture",
  },

  { 
    src: projClimate, 
    alt: "Solar-powered cold chain facility",
    category: "Climate",
  },


  {
    src: tomatoes,
    alt: "Freshly harvested tomatoes",
    category: "Vegetables",
  },
  {
    src: hoseWatering,
    alt: "Irrigation using hose pipe",
    category: "Irrigation",
  },

 {
    src: heroFields,
    alt: "Terraced farmland",
    category: "Agriculture",
  },

  {
    src: womanField,
    alt: "Woman working in field",
    category: "Farmers",
  },
  {
    src: womenTomatoes,
    alt: "Women in tomato field",
    category: "Farmers",
  },

  { 
    src: projGreenhouse,     
    alt: "Greenhouse farming interior",
    tall: true,
    category: "Greenhouse", 
  },

];

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <section className="bg-soft py-16 md:py-24">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow"><strong>Our Gallery</strong></span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground animate-fade-up">Field notes, in pictures.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A small window into the people, places and systems we work with every day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, i) => (
  <button
    key={i}
    onClick={() => setActive(i)}
    aria-label={`Open image: ${img.alt}`}
    className="group relative overflow-hidden rounded-3xl border border-border bg-muted shadow-lg hover:shadow-2xl transition-all duration-500"
  >
    <img
      src={img.src}
      alt={img.alt}
      loading="lazy"
      className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-110"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Category Badge - TOP RIGHT */}
    <div className="absolute top-4 right-4 rounded-full bg-[#006400]/90 backdrop-blur-sm px-3 py-1">
      <span className="text-xs font-semibold text-white">
        {img.category || "Gallery"}
      </span>
    </div>

    {/* Image Title - BOTTOM */}
    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
      <h3 className="text-white text-lg font-semibold">
        {img.alt}
      </h3>
    </div>
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
