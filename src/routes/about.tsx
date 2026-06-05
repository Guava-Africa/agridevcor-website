import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, HeartHandshake } from "lucide-react";
import aboutImg from "@/assets/about-soil.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AgriDevcor — Our story & leadership" },
      { name: "description", content: "Founded in 2009, AgriDevcor is a multidisciplinary agricultural development consultancy working across Africa, Asia and Latin America." },
      { property: "og:title", content: "About AgriDevcor" },
      { property: "og:description", content: "Our story, mission and the team driving agricultural transformation." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2009", text: "AgriDevcor founded in Nairobi as a specialist agronomy advisory." },
  { year: "2013", text: "Expanded into climate-smart agriculture and water resource engineering." },
  { year: "2017", text: "Opened West Africa hub in Accra; launched digital extension platform." },
  { year: "2021", text: "Surpassed 1M smallholder farmers reached through partner programs." },
  { year: "2024", text: "Carbon & nature-positive practice formally established." },
];

const team = [
  { name: "Dr. Amani Otieno", role: "Managing Director", initials: "AO" },
  { name: "Léa Konaté", role: "Head of Climate Practice", initials: "LK" },
  { name: "Rajiv Sharma", role: "Director, Agribusiness", initials: "RS" },
  { name: "Ngozi Adeyemi", role: "Director, M&E", initials: "NA" },
];

function AboutPage() {
  return (
    <>
      <section className="bg-soft section-y">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow">About us</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Quietly building the systems that feed the future.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            AgriDevcor is an independent agricultural development consultancy.
            We work with governments, donors, investors and farmer organizations to design
            programs that are technically sound, commercially viable, and socially just.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img src={aboutImg} alt="Hands holding rich soil with seedling" loading="lazy" width={1280} height={960} className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/3]" />
          <div className="space-y-10">
            {[
              { icon: Eye, title: "Vision", text: "A world where farming systems are productive, regenerative and dignified for those who depend on them." },
              { icon: Target, title: "Mission", text: "To design and deliver agricultural development programs that produce measurable, lasting outcomes for people and ecosystems." },
              { icon: HeartHandshake, title: "Values", text: "Evidence, humility, partnership, and an uncompromising commitment to impact at the farm gate." },
            ].map((v) => (
              <div key={v.title} className="flex gap-5">
                <span className="grid size-12 place-items-center rounded-xl bg-soft text-primary shrink-0">
                  <v.icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeading eyebrow="Our journey" title="Fifteen years of compounding expertise." align="center" />
          <ol className="mt-16 relative border-l-2 border-primary/20 pl-8 space-y-10">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[42px] grid size-6 place-items-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold">●</span>
                <div className="text-sm font-semibold text-primary">{t.year}</div>
                <p className="mt-1 text-foreground leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="Leadership" title="A team rooted in practice." align="center" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl border border-border bg-card p-8 text-center hover:shadow-elegant transition-shadow">
                <div className="mx-auto grid size-20 place-items-center rounded-full bg-[var(--gradient-accent)] text-primary-foreground font-display font-bold text-2xl">{m.initials}</div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{m.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-px mx-auto max-w-6xl">
          <div className="rounded-3xl bg-primary-dark text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Let's design what's next, together.</h2>
            <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">Get in touch <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
