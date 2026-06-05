import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sprout, Globe2, BarChart3, Shield, Droplets, Sun, Users, Microscope, GraduationCap, LineChart, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { HeroSlider } from "@/components/home/HeroSlider";
import { StatsCounter } from "@/components/home/StatsCounter";
import aboutImg from "@/assets/about-soil.jpg";
import projTraining from "@/assets/project-training.jpg";
import projIrrigation from "@/assets/project-irrigation.jpg";
import projClimate from "@/assets/project-climate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgriDevcor — Agricultural Development, Sustainability & Green Tech" },
      { name: "description", content: "Premium consulting in climate-smart agriculture, irrigation, agribusiness and rural development. Trusted by governments, NGOs and investors." },
      { property: "og:title", content: "AgriDevcor — Agricultural Development & Sustainability" },
      { property: "og:description", content: "Climate-smart agriculture, sustainable farm development and agribusiness advisory." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const stats = [
  { value: "120+", label: "Projects delivered" },
];

const services = [
  { icon: Sprout, title: "Climate-Smart Agriculture", desc: "Regenerative practices, carbon-smart cropping and resilient value chains." },
  { icon: Droplets, title: "Irrigation & Water", desc: "Drip, pivot and solar-powered irrigation systems engineered for scale." },
  { icon: BarChart3, title: "Agribusiness Advisory", desc: "Feasibility, market entry and investment structuring for agri-enterprises." },
  { icon: GraduationCap, title: "Training & Capacity", desc: "Farmer field schools and extension programs that change practice at scale." },
  { icon: LineChart, title: "Monitoring & Evaluation", desc: "Theory of change, MEAL frameworks and impact verification." },
  { icon: Microscope, title: "Research & Innovation", desc: "Applied research on varieties, soils and climate-resilient systems." },
];

const projects = [
  { img: projIrrigation, tag: "Irrigation", title: "Smart Drip Network — Rift Valley", desc: "12,000 ha of horticulture under precision irrigation." },
  { img: projClimate, tag: "Climate", title: "Solar-Powered Cold Chains", desc: "Off-grid storage for 38 smallholder cooperatives." },
  { img: projTraining, tag: "Capacity", title: "Digital Extension Platform", desc: "Mobile-first advisory reaching 220,000 farmers." },
];

const insights = [
  { tag: "Sustainability", title: "Five levers to decarbonize African agri-value chains", read: "8 min read" },
  { tag: "Innovation", title: "Why precision irrigation is the next frontier", read: "6 min read" },
  { tag: "Policy", title: "Designing climate finance that reaches the farm gate", read: "10 min read" },
];

const partners = ["WORLD BANK", "FAO", "USAID", "GIZ", "AGRA", "IFAD", "AfDB"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Aerial view of green terraced farmland with modern irrigation"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.18_0.05_152/0.85)_0%,oklch(0.18_0.05_152/0.55)_55%,transparent_100%)]" />
        <div className="relative container-px mx-auto max-w-7xl pt-32 pb-20 md:pt-40 md:pb-32 text-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold tracking-widest uppercase animate-fade-in">
              <Sprout className="size-3.5" /> Agricultural Development · Since 2009
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-up">
              Building the future of <span className="text-accent">resilient</span> agriculture.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl animate-fade-up delay-100">
              We partner with governments, donors and agribusinesses to design climate-smart
              systems that increase productivity, restore ecosystems, and lift rural economies.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up delay-200">
              <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-7 text-base font-semibold">
                <Link to="/services">Explore our work <ArrowRight className="ml-1 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-white/0 border-white/40 text-white hover:bg-white/10 hover:text-white h-12 px-7 text-base">
                <Link to="/projects">View projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface">
        <div className="container-px mx-auto max-w-7xl py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-3xl md:text-5xl font-bold tracking-tight text-primary-dark">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Hands holding rich soil with a green seedling"
              loading="lazy"
              width={1280}
              height={960}
              className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/3]"
            />
            <div className="hidden md:flex absolute -bottom-6 -right-6 bg-card border border-border rounded-xl shadow-soft p-5 gap-3 items-center max-w-xs">
              <Globe2 className="size-8 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground">Active programs across <strong className="text-foreground">Africa, Asia & Latin America</strong>.</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About AgriDevcor"
              title="Development expertise. Agricultural depth. Measurable impact."
              description="For over a decade we've designed and delivered agricultural transformation programs at every scale — from smallholder cooperatives to national irrigation strategies. We combine technical rigor with development insight."
            />
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, text: "Independent & evidence-based" },
                { icon: Users, text: "Multi-disciplinary expert teams" },
                { icon: Sun, text: "Climate & nature positive" },
                { icon: BarChart3, text: "Outcomes you can measure" },
              ].map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-soft text-primary shrink-0">
                    <f.icon className="size-4" />
                  </span>
                  <span className="text-sm text-foreground/85 leading-relaxed pt-1.5">{f.text}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-10 rounded-full bg-primary hover:bg-primary-dark">
              <Link to="/about">Our story <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y bg-surface">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="What we do"
              title="Integrated services across the agri value chain."
              description="From soil to market, from policy to practice — a single trusted partner."
            />
            <Button asChild variant="ghost" className="hidden md:inline-flex text-primary hover:text-primary-dark hover:bg-soft self-end">
              <Link to="/services">All services <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl bg-card border border-border p-7 hover:border-primary/40 hover:shadow-elegant transition-all duration-300"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark">
                  Learn more <ArrowRight className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured projects"
            title="Programs that move the needle."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link
                key={p.title}
                to="/projects"
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="size-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 text-primary text-xs font-semibold px-3 py-1">{p.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/projects">Browse all projects <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-y bg-primary-dark text-primary-foreground">
        <div className="container-px mx-auto max-w-5xl text-center">
          <Quote className="size-10 mx-auto opacity-50" />
          <blockquote className="mt-6 text-2xl md:text-3xl font-display font-medium leading-snug">
            "AgriDevcor designed the most rigorous and grounded irrigation feasibility we've ever
            commissioned. Their team blends world-class technical depth with genuine field empathy."
          </blockquote>
          <div className="mt-8 text-sm text-white/70">
            Director of Agriculture Programs · Regional Development Bank
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-14 border-b border-border">
        <div className="container-px mx-auto max-w-7xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Trusted by leading institutions</p>
          <div className="mt-8 flex flex-wrap gap-x-12 gap-y-6 items-center justify-center opacity-70">
            {partners.map((p) => (
              <span key={p} className="font-display font-bold tracking-widest text-foreground/70 text-sm md:text-base">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading eyebrow="Latest insights" title="Thinking that shapes the field." />
            <Button asChild variant="ghost" className="hidden md:inline-flex text-primary hover:text-primary-dark hover:bg-soft self-end">
              <Link to="/insights">All insights <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {insights.map((i) => (
              <Link key={i.title} to="/insights" className="group rounded-2xl border border-border p-7 hover:border-primary/40 hover:shadow-elegant transition-all bg-card">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{i.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{i.title}</h3>
                <p className="mt-6 text-xs text-muted-foreground">{i.read}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y">
        <div className="container-px mx-auto max-w-6xl">
          <div className="rounded-3xl overflow-hidden bg-[var(--gradient-hero)] p-10 md:p-16 text-primary-foreground relative">
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_40%)]" />
            <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Have a program in mind?</h2>
                <p className="mt-3 text-white/85 max-w-xl">Tell us about your context and goals. We'll respond within two working days with how we can help.</p>
              </div>
              <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 text-base font-semibold">
                <Link to="/contact">Start a conversation <ArrowRight className="ml-1 size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
