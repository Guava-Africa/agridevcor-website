import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/motion/PageHero";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { GlassCard } from "@/components/motion/GlassCard";
import { SectionShell } from "@/components/motion/SectionShell";
import seedPotato from "@/assets/seed-potato.jpg";
import peaBean from "@/assets/michigan-pea-bean.jpg";
import manuals from "@/assets/crop-production-manuals.svg";
import { PhotoCredit } from "@/components/ds/PhotoCredit";
import sorghum from "@/assets/red-sorghum.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — AgriDevcor" },
      { name: "description", content: "Seed Potato, Red Sorghum, Michigan Pea Bean and Crop Production Manuals." },
      { property: "og:title", content: "Products — AgriDevcor" },
      { property: "og:description", content: "Explore our portfolio of products across agriculture and sustainability." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

type Category = "All" | "Agriculture" | "Sustainability" | "Capacity";

const products = [
  { img: seedPotato, cat: "Agriculture" as const, title: "Seed Potato", impact: "AgriDevCor secures high-class seed from international breeders to ensure every seed batch delivers the yield, purity and performance modern farmers depend on.", country: "Zimbabwe" },
  { img: sorghum, cat: "Sustainability" as const, title: "Red Sorghum", impact: "Is a red-pigmented cereal grain that thrives in low rainfall areas due to its drought resistance. It is a versatile raw material for brewing, stockfeed, natural dyes and biofuel.", country: "Zimbabwe" },
  { img: peaBean, cat: "Agriculture" as const, title: "Michigan Pea Bean", impact: "Is a small white dry bean widely used in baked bean processing and valued for its high protein content, cooking quality and suitability for processing. It is a vehicle for climate-smart resilient value chains.", country: "Zimbabwe" },
  { img: manuals, cat: "Capacity" as const, title: "Crop Production Manuals", impact: "Crop Production Manuals", country: "Zimbabwe" },
];

const categories: Category[] = ["All", "Agriculture", "Sustainability", "Capacity"];

function ProductsPage() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = useMemo(() => filter === "All" ? products : products.filter((p) => p.cat === filter), [filter]);

  return (
    <>
      <PageHero
        image={seedPotato}
        eyebrow="Products"
        title={<>Quality products. <span className="text-primary-light">Resilient value chains.</span></>}
        description="Seed Potato, Red Sorghum, Michigan Pea Bean and Crop Production Manuals."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
        badges={["Commercial Crops", "Climate-Smart", "Capacity Building"]}
      />

      <SectionShell orbs>
        <div className="container-px mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12" role="tablist" aria-label="Product categories">
              {categories.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={filter === c}
                  onClick={() => setFilter(c)}
                  className={cn(
                    "rounded-full px-5 py-2 text-sm font-medium border transition-all duration-300",
                    filter === c
                      ? "bg-primary text-primary-foreground border-primary shadow-soft scale-105"
                      : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <StaggerItem key={p.title}>
                <GlassCard hover className="overflow-hidden p-0 h-full flex flex-col bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                    <img src={p.img} alt={p.title} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-4 left-4 rounded-full glass-light text-primary text-xs font-semibold px-3 py-1">{p.cat}</span>
                    <span className="absolute top-4 right-4 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1">{p.country}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.impact}</p>
                    <PhotoCredit image={p.img} className="mt-auto pt-4" />
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionShell>
    </>
  );
}
