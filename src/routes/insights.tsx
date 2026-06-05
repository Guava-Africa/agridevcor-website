import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — AgriDevcor" },
      { name: "description", content: "Research, perspectives and field notes on agriculture, climate, sustainability and rural development." },
      { property: "og:title", content: "Insights — AgriDevcor" },
      { property: "og:description", content: "Thought leadership from our practitioners." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

type Tag = "All" | "Research" | "Sustainability" | "Innovation" | "Agriculture" | "Climate";

const posts = [
  { tag: "Sustainability" as const, title: "Five levers to decarbonize African agri-value chains", excerpt: "From regenerative cropping to logistics electrification, where carbon really lives in the chain.", read: "8 min" },
  { tag: "Innovation" as const, title: "Why precision irrigation is the next frontier", excerpt: "Solar, IoT and smart valves are quietly reshaping what irrigation can deliver.", read: "6 min" },
  { tag: "Climate" as const, title: "Designing climate finance that reaches the farm gate", excerpt: "Most climate dollars stall before the farmer. Here's how to fix that.", read: "10 min" },
  { tag: "Research" as const, title: "What 9 maize varieties taught us about resilience", excerpt: "Lessons from a multi-year trial across 12 agro-ecological zones.", read: "7 min" },
  { tag: "Agriculture" as const, title: "Cooperatives 2.0 — beyond aggregation", excerpt: "Modern cooperatives compete on data, finance and shared services.", read: "9 min" },
  { tag: "Sustainability" as const, title: "Nature-positive isn't a buzzword. It's a balance sheet.", excerpt: "Pricing biodiversity into agri-business decisions.", read: "5 min" },
];

const tags: Tag[] = ["All", "Research", "Sustainability", "Innovation", "Agriculture", "Climate"];

function InsightsPage() {
  const [tag, setTag] = useState<Tag>("All");
  const visible = useMemo(() => tag === "All" ? posts : posts.filter((p) => p.tag === tag), [tag]);

  return (
    <>
      <section className="bg-soft section-y">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow">Insights</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">Thinking from the field.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Notes, briefs and research from our practitioners on the questions shaping the future of agriculture.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium border transition-all",
                  tag === t
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground/75 border-border hover:border-primary/40 hover:text-primary",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <article key={p.title} className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:border-primary/40 transition-all flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="size-3.5" /> {p.read}</span>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark">
                    Read more <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
