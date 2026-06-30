import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHero } from "@/components/motion/PageHero";
import { StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { SectionShell } from "@/components/motion/SectionShell";
import heroImg from "@/assets/hero-fields.jpg";
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
  { src: cauliflower, alt: "Cauliflower production", category: "Vegetables" },
  { src: heroImg, alt: "Aerial of green terraced farmland", category: "Agriculture" },
  { src: sweetPotatoes, alt: "Harvesting sweet potatoes", category: "Harvesting" },
  { src: mufarinyaWoman, alt: "Farmer in mufarinya field", category: "Farmers" },
  { src: wateringMaize, alt: "Watering maize plants", category: "Irrigation" },
  { src: aboutImg, alt: "Healthy soil with seedling", category: "Soil" },
  { src: popcornSacks, alt: "Popcorn stored in sacks", category: "Post Harvest" },
  { src: climate, alt: "Climate smart agriculture", category: "Climate" },
  { src: greenhouse, alt: "Greenhouse farming", category: "Greenhouse" },
  { src: irrigation, alt: "Irrigation system", category: "Irrigation" },
  { src: projCoffee, alt: "Aerial view of coffee plantation", category: "Agriculture" },
  { src: sorghum, alt: "Sorghum production", category: "Crops" },
  { src: strawberries, alt: "Fresh strawberries", category: "Horticulture" },
  { src: strawberryPlants, alt: "Strawberry cultivation", category: "Horticulture" },
  { src: projClimate, alt: "Solar-powered cold chain facility", category: "Climate" },
  { src: tomatoes, alt: "Freshly harvested tomatoes", category: "Vegetables" },
  { src: hoseWatering, alt: "Irrigation using hose pipe", category: "Irrigation" },
  { src: heroFields, alt: "Terraced farmland", category: "Agriculture" },
  { src: womanField, alt: "Woman working in field", category: "Farmers" },
  { src: womenTomatoes, alt: "Women in tomato field", category: "Farmers" },
  { src: projGreenhouse, alt: "Greenhouse farming interior", category: "Greenhouse" },
];

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Our Gallery"
        title={<>Field notes, <span className="text-primary-light">in pictures.</span></>}
        description="A visual archive of the people, places and systems we work with every day — from precision irrigation to community harvests across Africa."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
        badges={["African Agriculture", "Editorial Quality", "Field Photography"]}
      />

      <SectionShell orbs>
        <div className="container-px mx-auto max-w-7xl">
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, i) => (
              <StaggerItem key={i}>
                <motion.button
                  onClick={() => setActive(i)}
                  aria-label={`Open image: ${img.alt}`}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.35 }}
                  className="group relative overflow-hidden rounded-3xl w-full glass-dark shadow-elegant"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 rounded-full glass-light px-3 py-1">
                    <span className="text-xs font-semibold text-primary">{img.category}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white text-lg font-semibold text-left">{img.alt}</h3>
                  </div>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionShell>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 grid size-11 place-items-center rounded-full glass text-white hover:bg-white/20 transition-colors"
            >
              <X className="size-5" />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={images[active].src}
              alt={images[active].alt}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
