import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sprout, Globe2, BarChart3, Shield, Droplets, Sun, Users, Microscope, GraduationCap, LineChart, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { HeroSlider } from "@/components/home/HeroSlider";
import aboutImg from "@/assets/about-soil.jpg";
import projIrrigation from "@/assets/project-irrigation.jpg";
import ScrollIndicator from "@/components/home/ScrollIndicator";
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


const services = [
  { icon: Sprout, title: "Climate-Smart Agriculture", desc: "Regenerative practices, carbon-smart cropping and resilient value chains." },
  { icon: Droplets, title: "Irrigation & Water", desc: "Drip, pivot and solar-powered irrigation systems engineered for scale." },
  { icon: BarChart3, title: "Agribusiness Advisory", desc: "Feasibility, market entry and investment structuring for agri-enterprises." },
  { icon: GraduationCap, title: "Training & Capacity", desc: "Farmer field schools and extension programs that change practice at scale." },
  { icon: LineChart, title: "Monitoring & Evaluation", desc: "Theory of change, MEAL frameworks and impact verification." },
  { icon: Microscope, title: "Research & Innovation", desc: "Applied research on varieties, soils and climate-resilient systems." },
];

const products = [
  { img: projIrrigation, tag: "Irrigation", title: "Smart Drip Network — Rift Valley", desc: "12,000 ha of horticulture under precision irrigation." },
  { img: projClimate, tag: "Climate", title: "Solar-Powered Cold Chains", desc: "Off-grid storage for 38 smallholder cooperatives." },
  
];

const insights = [
  { tag: "Sustainability", title: "Five levers to decarbonize African agri-value chains", read: "8 min read" },
  { tag: "Innovation", title: "Why precision irrigation is the next frontier", read: "6 min read" },
  { tag: "Policy", title: "Designing climate finance that reaches the farm gate", read: "10 min read" },
];

function Home() {
  return (
    <>

      <section id="hero">
      <HeroSlider />
      </section>

      <ScrollIndicator />
      


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
              <p className="text-sm text-muted-foreground">Active programs across <strong className="text-foreground">Africa</strong>.</p>
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

      {/* FEATURED PRODUCTS */}
      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured products"
            title="Innovative solutions for modern agriculture."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.title}
                to="/products"
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
              <Link to="/products">Browse all products <ArrowRight className="ml-1 size-4" /></Link>
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
    </>
  );
}
