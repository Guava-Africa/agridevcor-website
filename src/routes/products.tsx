import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import cauliflower from "@/assets/cauliflorwer.jpg";
import sweetPotatoes from "@/assets/harvesting sweet potatoes.jpg";
import heroFields from "@/assets/hero-fields.jpg";
import mufarinyaWoman from "@/assets/a woman in mufarinya field.jpg";
import wateringMaize from "@/assets/man watering maize plants.jpg";
import popcornSacks from "@/assets/popcorns in sacks.jpg";
import greenhouse from "@/assets/project-greenhouse.jpg";
import sorghum from "@/assets/sorgum.jpg";
import strawberries from "@/assets/strawberries.jpg";
import tomatoes from "@/assets/two hands holding 2 tomatoes.jpg";
import hoseWatering from "@/assets/watering from horse pipe.jpg";
import womenTomatoes from "@/assets/women in tomatoe field.jpg";



export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — AgriDevcor" },
      { name: "description", content: "A portfolio of agricultural development, irrigation, climate-smart and capacity-building programs delivered worldwide." },
      { property: "og:title", content: "Products — AgriDevcor" },
      { property: "og:description", content: "Explore our portfolio of products across agriculture and sustainability." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

type Category = "All" | "Agriculture" | "Sustainability" | "Irrigation" | "Community" | "Research" | "Capacity";

const products = [
  {
    img: wateringMaize,
    cat: "Irrigation" as const,
    title: "Climate-Smart Irrigation Systems",
    impact: "Efficient water management for sustainable crop production",
    country: "Zimbabwe",
  },
  {
    img: womenTomatoes,
    cat: "Community" as const,
    title: "Women-Led Tomato Production",
    impact: "Empowering women farmers through market-driven agriculture",
    country: "Zimbabwe",
  },
  {
    img: sweetPotatoes,
    cat: "Agriculture" as const,
    title: "Sweet Potato Value Chain Development",
    impact: "Improved productivity and food security for rural households",
    country: "Zimbabwe",
  },
  {
    img: greenhouse,
    cat: "Sustainability" as const,
    title: "Protected Agriculture & Greenhouse Farming",
    impact: "Year-round production with resource-efficient technologies",
    country: "Zimbabwe",
  },
  {
    img: strawberries,
    cat: "Agriculture" as const,
    title: "High-Value Strawberry Production",
    impact: "Supporting diversification into profitable horticulture",
    country: "Zimbabwe",
  },
  {
    img: cauliflower,
    cat: "Agriculture" as const,
    title: "Commercial Vegetable Production",
    impact: "Strengthening local food systems and market access",
    country: "Zimbabwe",
  },
  {
    img: sorghum,
    cat: "Sustainability" as const,
    title: "Drought-Tolerant Sorghum Initiative",
    impact: "We grow sorghum for African breweries under long term contracts. Through our vast farming communities and financial support systems we are currently able to deliver high grade sorghum to our clients whilst ensuring consistency to meet demand.",
    country: "Zimbabwe",
  },
  {
    img: mufarinyaWoman,
    cat: "Community" as const,
    title: "Smallholder Farmer Empowerment",
    impact: "Improving livelihoods through skills and innovation",
    country: "Zimbabwe",
  },
  {
    img: tomatoes,
    cat: "Agriculture" as const,
    title: "Horticulture Value Addition",
    impact: "Connecting farmers to higher-value markets",
    country: "Zimbabwe",
  },
  {
    img: hoseWatering,
    cat: "Irrigation" as const,
    title: "Water-Efficient Crop Management",
    impact: "Promoting sustainable irrigation practices",
    country: "Zimbabwe",
  },
  {
    img: popcornSacks,
    cat: "Community" as const,
    title: "Post-Harvest Management Program",
    impact: "We specialize in popcorn production for local and export markets. Although many farmers traditionally grow white maize due to limited market access, our guaranteed 100% purchase of harvests has encouraged more farmers to switch to popcorn as a more profitable crop.",

    country: "Zimbabwe",
  },
  {
    img: heroFields,
    cat: "Sustainability" as const,
    title: "Landscape Restoration & Regenerative Agriculture",
    impact: "Enhancing productivity while protecting ecosystems",
    country: "Zimbabwe",
  },

];

const categories: Category[] = ["All", "Agriculture", "Sustainability", "Irrigation", "Community", "Research", "Capacity"];

function ProductsPage() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = useMemo(() => filter === "All" ? products : products.filter((p) => p.cat === filter), [filter]);

  return (
    <>
      <section className="bg-soft section-y">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow"><strong>Products</strong></span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground animate-fade-up">
            Programs delivered. Outcomes proven.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of recent engagements across agriculture, climate and rural development.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Project categories">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium border transition-all",
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground/75 border-border hover:border-primary/40 hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <article key={p.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-all animate-fade-up">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 text-primary text-xs font-semibold px-3 py-1">{p.cat}</span>
                  <span className="absolute top-4 right-4 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1">{p.country}</span>
                </div>
                <div className="p-6">
  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
    {p.title}
  </h3>

  <p
    className="mt-2 text-sm text-muted-foreground"
    style={{ textAlign: "justify" }}
  >
    {p.impact}
  </p>
</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
