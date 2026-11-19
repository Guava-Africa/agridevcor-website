import { createFileRoute, Link } from "@tanstack/react-router";
import { Sprout, Droplets, Sun, BarChart3, GraduationCap, Microscope, LineChart, Tractor, ArrowRight, CheckCircle2, Leaf, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/motion/PageHero";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { GlassCard } from "@/components/motion/GlassCard";
import { SectionShell } from "@/components/motion/SectionShell";
import { FloatingGlassCard } from "@/components/motion/GlassCard";
import farmerImg from "@/assets/woman in field.jpg";
import farmingCommunity from "@/assets/women in tomatoe field.jpg";
import harvestImg from "@/assets/popcorns in sacks.jpg";
import irrigationImg from "@/assets/man watering maize plants.jpg";
import seedPotato from "@/assets/seed-potato.jpg";
import { PhotoCredit } from "@/components/ds/PhotoCredit";
import heroFields from "@/assets/hero-fields.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AgriDevcor" },
      { name: "description", content: "Advisory and consultancy, training and capacity building, value chain development, climate smart technologies, seed potato certification, and monitoring and evaluation." },
      { property: "og:title", content: "Services — AgriDevcor" },
      { property: "og:description", content: "Integrated agricultural and sustainability services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Sprout, title: "Advisory and Consultancy", image: farmerImg, alt: "Farmer standing in a crop field", desc: "Strategy, technical assistance and program design for ministries, donors and agri-corporates.", outcomes: ["Sector strategies", "Feasibility studies", "Policy briefs"] },
  { icon: GraduationCap, title: "Training and Capacity Building", image: farmingCommunity, alt: "Women working together in a tomato field", desc: "Farmer field schools, extension training-of-trainers and curriculum development.", outcomes: ["Curricula", "ToT delivery", "Digital learning"] },
  { icon: BarChart3, title: "Value Chain Development", image: harvestImg, alt: "Harvested popcorn stored in sacks", desc: "Market entry, value chain analysis, investor due diligence and offtake structuring.", outcomes: ["Market studies", "Investor decks", "Offtake design"] },
  { icon: Sun, title: "Climate Smart Technologies", image: irrigationImg, alt: "Farmer watering maize plants", desc: "Drip, sprinkler and pivot systems with solar-powered pumping and IoT controls.", outcomes: ["Hydraulic design", "BOQ & supervision", "Performance audits"] },
  { icon: Microscope, title: "Seed Potato Certification", image: seedPotato, alt: "Sprouted seed potatoes ready for planting", desc: "Seed potato certification.", outcomes: [] },
  { icon: LineChart, title: "M&E (Monitoring and Evaluation)", image: heroFields, alt: "Aerial view of cultivated farmland", desc: "Theory of change, MEAL frameworks, baselines, midline and endline studies.", outcomes: ["MEAL design", "Impact studies", "Independent verification"] },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        image={heroFields}
        eyebrow="Our Services"
        title={<>Six practice areas. <span className="text-primary-light">One integrated team.</span></>}
        description="We drive success across the agricultural value chain by pairing agritech technical specialists with development economists, ecologists, engineers and investment partners to grow a better tomorrow."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        badges={["End-to-End", "Climate Positive", "Evidence-Based"]}
        ctas={[{ label: "Request a Proposal", to: "/contact" }]}
        floatingCard={
          <FloatingGlassCard>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Practice Areas</p>
            <div className="grid grid-cols-2 gap-3">
              {["Advisory and Consultancy", "Training and Capacity Building", "Value Chain Development", "Climate Smart Technologies", "Seed Potato Certification", "M&E (Monitoring and Evaluation)"].map((s) => (
                <div key={s} className="rounded-xl bg-white/5 border border-white/8 px-3 py-2.5 text-sm text-white/75 text-center">{s}</div>
              ))}
            </div>
          </FloatingGlassCard>
        }
      />

      <SectionShell orbs>
        <div className="container-px mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
            <span className="eyebrow">Comprehensive Solutions</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">From strategy to implementation</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We deliver measurable impact across every stage of your agricultural journey.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <GlassCard className="group p-8 h-full bg-card overflow-hidden">
                  <img src={s.image} alt={s.alt} loading="lazy" className="mb-6 aspect-[16/9] w-full rounded-2xl object-cover" />
                  <PhotoCredit image={s.image} className="mb-5 -mt-4" />
                  <span className="grid size-14 place-items-center rounded-2xl bg-soft text-primary group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="size-7" />
                  </span>
                  <h2 className="mt-6 text-2xl font-bold">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {s.outcomes.map((o) => (
                      <li key={o} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="size-4 shrink-0 text-primary" /> {o}
                      </li>
                    ))}
                  </ul>
                  <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                    Related products <ArrowRight className="size-4" />
                  </Link>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionShell>

      <SectionShell variant="dark">
        <div className="container-px mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-16">
            <span className="eyebrow text-primary-light">Why AgriDevcor</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
              Trusted expertise. <span className="text-primary-light">Proven results.</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Evidence-Based", desc: "Every recommendation backed by rigorous research and field-tested methodologies." },
              { icon: Zap, title: "End-to-End", desc: "From strategy to implementation, we're your single trusted partner." },
              { icon: Leaf, title: "Climate Positive", desc: "Every project designed for environmental impact and long-term sustainability." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <FloatingGlassCard className="h-full">
                  <item.icon className="size-10 text-primary-light mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </FloatingGlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell variant="soft">
        <div className="container-px mx-auto max-w-6xl">
          <ScrollReveal>
            <GlassCard className="p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 bg-primary text-primary-foreground border-0">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Need a tailored scope?</h2>
                <p className="mt-2 text-primary-foreground/80">Send us your ToR or program brief — we'll respond with a custom proposal.</p>
              </div>
              <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 font-bold shrink-0">
                <Link to="/contact">Request a proposal <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </GlassCard>
          </ScrollReveal>
        </div>
      </SectionShell>
    </>
  );
}
