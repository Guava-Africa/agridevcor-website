import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Sprout, Droplets, Sun, BarChart3, GraduationCap, Microscope, LineChart, Tractor, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AgriDevcor" },
      { name: "description", content: "Consulting in climate-smart agriculture, irrigation, farm development, training, agribusiness support, monitoring and evaluation." },
      { property: "og:title", content: "Services — AgriDevcor" },
      { property: "og:description", content: "Integrated agricultural and sustainability services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Sprout, title: "Agricultural Consultancy", desc: "Strategy, technical assistance and program design for ministries, donors and agri-corporates.", outcomes: ["Sector strategies", "Feasibility studies", "Policy briefs"] },
  { icon: Tractor, title: "Farm Development", desc: "Greenfield and brownfield farm design — from soil and water assessment to operations setup.", outcomes: ["Master plans", "CapEx models", "Operations playbooks"] },
  { icon: Sun, title: "Climate-Smart Agriculture", desc: "Regenerative practices, agroforestry, carbon and nature-positive cropping systems.", outcomes: ["CSA roadmaps", "Carbon baselines", "Adaptation plans"] },
  { icon: Droplets, title: "Irrigation Solutions", desc: "Drip, sprinkler and pivot systems with solar-powered pumping and IoT controls.", outcomes: ["Hydraulic design", "BOQ & supervision", "Performance audits"] },
  { icon: GraduationCap, title: "Training Programs", desc: "Farmer field schools, extension training-of-trainers and curriculum development.", outcomes: ["Curricula", "ToT delivery", "Digital learning"] },
  { icon: BarChart3, title: "Agribusiness Support", desc: "Market entry, value chain analysis, investor due diligence and offtake structuring.", outcomes: ["Market studies", "Investor decks", "Offtake design"] },
  { icon: Microscope, title: "Sustainability Services", desc: "ESG, biodiversity, water stewardship and supply chain decarbonization.", outcomes: ["ESG audits", "Net-zero roadmaps", "Biodiversity plans"] },
  { icon: LineChart, title: "Monitoring & Evaluation", desc: "Theory of change, MEAL frameworks, baselines, midline and endline studies.", outcomes: ["MEAL design", "Impact studies", "Independent verification"] },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-soft section-y">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow">Services</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Eight practice areas. One integrated team.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            We work across the agri value chain — pairing technical specialists with development
            economists, ecologists and engineers to solve complex problems end-to-end.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article key={s.title} className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:border-primary/40 transition-all">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-soft text-primary">
                  <s.icon className="size-6" />
                </span>
              </div>
              <h2 className="mt-6 text-xl font-semibold text-foreground">{s.title}</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="size-4 text-primary shrink-0" /> {o}
                  </li>
                ))}
              </ul>
              <Link to="/projects" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark">
                Related projects <ArrowRight className="size-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-px mx-auto max-w-6xl">
          <div className="rounded-3xl bg-[var(--gradient-hero)] text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Need a tailored scope?</h2>
              <p className="mt-2 text-white/85">Send us your ToR or program brief — we'll respond with a custom proposal.</p>
            </div>
            <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">Request a proposal <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
