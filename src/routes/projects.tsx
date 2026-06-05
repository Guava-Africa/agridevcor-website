import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import projTraining from "@/assets/project-training.jpg";
import projIrrigation from "@/assets/project-irrigation.jpg";
import projClimate from "@/assets/project-climate.jpg";
import projResearch from "@/assets/project-research.jpg";
import projCoffee from "@/assets/project-coffee.jpg";
import projGreenhouse from "@/assets/project-greenhouse.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — AgriDevcor" },
      { name: "description", content: "A portfolio of agricultural development, irrigation, climate-smart and capacity-building programs delivered worldwide." },
      { property: "og:title", content: "Projects — AgriDevcor" },
      { property: "og:description", content: "Explore our portfolio of programs across agriculture and sustainability." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Category = "All" | "Agriculture" | "Sustainability" | "Irrigation" | "Community" | "Research" | "Capacity";

const projects = [
  { img: projIrrigation, cat: "Irrigation" as const, title: "Smart Drip Network — Rift Valley", impact: "12,000 ha · 38% yield uplift", country: "Kenya" },
  { img: projClimate, cat: "Sustainability" as const, title: "Solar-Powered Cold Chains", impact: "38 cooperatives · 22% loss reduction", country: "Rwanda" },
  { img: projTraining, cat: "Capacity" as const, title: "Digital Extension Platform", impact: "220k farmers · 4 languages", country: "Ghana" },
  { img: projResearch, cat: "Research" as const, title: "Drought-Tolerant Maize Trials", impact: "9 varieties · 12 agro-zones", country: "Ethiopia" },
  { img: projCoffee, cat: "Agriculture" as const, title: "Regenerative Coffee Program", impact: "4,200 farmers · carbon-positive", country: "Uganda" },
  { img: projGreenhouse, cat: "Community" as const, title: "Women-Led Greenhouse Co-ops", impact: "60 co-ops · 1,800 jobs", country: "Tanzania" },
];

const categories: Category[] = ["All", "Agriculture", "Sustainability", "Irrigation", "Community", "Research", "Capacity"];

function ProjectsPage() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = useMemo(() => filter === "All" ? projects : projects.filter((p) => p.cat === filter), [filter]);

  return (
    <>
      <section className="bg-soft section-y">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow">Projects</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">Programs delivered. Outcomes proven.</h1>
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
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.impact}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
