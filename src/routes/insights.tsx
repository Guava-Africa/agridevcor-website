import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ArrowRight, Droplets, Sun, Microscope, Sprout, Sparkles } from "lucide-react";
import { PageHero } from "@/components/motion/PageHero";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { GlassCard } from "@/components/motion/GlassCard";
import { SectionShell } from "@/components/motion/SectionShell";
import soilImg from "@/assets/about-soil.jpg";
import irrigationImg from "@/assets/man watering maize plants.jpg";
import fieldsImg from "@/assets/hero-fields.jpg";
import communityImg from "@/assets/women in tomatoe field.jpg";
import insightsImg from "@/images/insights.png";

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
  { tag: "Sustainability" as const, image: soilImg, alt: "Hands holding soil and a young plant", icon: Sprout, title: "Five levers to decarbonize African agri-value chains", excerpt: "From regenerative cropping to logistics electrification, where carbon really lives in the chain." },
  { tag: "Innovation" as const, image: irrigationImg, alt: "Farmer irrigating maize plants", icon: Droplets, title: "Why precision irrigation is the next frontier", excerpt: "Solar, IoT and smart valves are reshaping what irrigation can deliver." },
  { tag: "Climate" as const, image: fieldsImg, alt: "Cultivated farmland viewed from above", icon: Sun, title: "Designing climate finance that reaches the farm gate", excerpt: "Most climate dollars stall before the farmer. Here's how to fix that." },
  { tag: "Research" as const, image: irrigationImg, alt: "Maize plants growing in a field", icon: Microscope, title: "Maize varieties and agricultural resilience", excerpt: "Lessons from a multi-year trial across agro-ecological zones." },
  { tag: "Agriculture" as const, image: communityImg, alt: "Women working together in a tomato field", icon: Sprout, title: "Cooperatives 2.0 — beyond aggregation", excerpt: "Modern cooperatives compete on data, finance and shared services." },
];

const tags: Tag[] = ["All", "Research", "Sustainability", "Innovation", "Agriculture", "Climate"];

function InsightsPage() {
  const [tag, setTag] = useState<Tag>("All");
  const visible = useMemo(() => (tag === "All" ? posts : posts.filter((p) => p.tag === tag)), [tag]);

  return (
    <>
      <PageHero
        image={insightsImg}
        eyebrow="Insights"
        title={<>Thinking from <span className="text-primary-light">the field.</span></>}
        description="Research, innovation and practical knowledge shaping the future of agriculture — written by practitioners who work at the farm gate."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Insights" }]}
        badges={["Research", "Innovation", "Field Notes"]}
      />

      <SectionShell orbs>
        <div className="container-px mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={cn(
                    "rounded-full px-6 py-2 text-sm font-medium border transition-all duration-300",
                    tag === t
                      ? "bg-primary text-primary-foreground border-primary shadow-soft"
                      : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary",
                  )}
                >
                  {t === "All" ? t : (
                    <span className="inline-flex items-center gap-1.5">
                      {t === "Innovation" && <Sparkles className="size-3.5" />}
                      {t}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {visible.map((p) => (
              <StaggerItem key={p.title}>
                <GlassCard className="group p-8 h-full flex flex-col bg-card overflow-hidden">
                  <img src={p.image} alt={p.alt} loading="lazy" className="mb-6 aspect-[16/10] w-full rounded-2xl object-cover" />
                  <div className="size-14 rounded-2xl bg-soft grid place-items-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <p.icon size={26} />
                  </div>
                  <span className="mt-6 block text-xs uppercase tracking-widest text-primary font-semibold">{p.tag}</span>
                  <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground flex-grow leading-relaxed">{p.excerpt}</p>
                  <div className="mt-6 flex justify-between items-center pt-4 border-t border-border">
                    <button className="text-primary font-semibold flex gap-1 items-center group-hover:gap-2 transition-all">
                      Read more <ArrowRight size={15} />
                    </button>
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
