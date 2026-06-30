import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, HeartHandshake, Users, Briefcase, BarChart3, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/motion/PageHero";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { GlassCard } from "@/components/motion/GlassCard";
import { SectionShell } from "@/components/motion/SectionShell";
import { FloatingGlassCard } from "@/components/motion/GlassCard";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import chairmanImg from "@/assets/chairman.png";
import aboutVideo from "@/assets/aboutUs.mp4";
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

function AboutPage() {
  return (
    <>
      <PageHero
        video={aboutVideo}
        image={aboutImg}
        eyebrow="About AgriDevcor"
        title={<>Agricultural scientists. <span className="text-primary-light">Development leaders.</span></>}
        description="AgriDevcor is a multidisciplinary agricultural development consultancy helping governments, investors, development agencies and farming communities build resilient agricultural systems that create sustainable economic growth and lasting impact."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        badges={["Founded 2009", "12+ Countries", "Evidence-Based"]}
        ctas={[
          { label: "Partner With Us", to: "/contact" },
          { label: "Explore Services", to: "/services", variant: "outline" },
        ]}
        floatingCard={
          <FloatingGlassCard>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Our Reach</p>
            <div className="space-y-4">
              {[
                { value: 15, suffix: "+", label: "Years of Excellence" },
                { value: 200, suffix: "+", label: "Projects Delivered" },
                { value: 12, suffix: "", label: "African Countries" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between rounded-xl bg-white/5 border border-white/8 px-4 py-3">
                  <span className="text-sm text-white/60">{s.label}</span>
                  <span className="text-xl font-bold text-white">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </span>
                </div>
              ))}
            </div>
          </FloatingGlassCard>
        }
      />

      {/* Chairman message */}
      <SectionShell variant="soft" orbs>
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">
            <ScrollReveal>
              <GlassCard hover={false} className="overflow-hidden p-0">
                <img src={chairmanImg} alt="Eng. Tafadzwa Muguti" loading="lazy" className="w-full h-[460px] object-cover" />
              </GlassCard>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-foreground">Eng. Tafadzwa Muguti</h3>
                <p className="mt-1 text-accent font-semibold">Group Chairman</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <span className="eyebrow">Leadership</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Message From Our Chairman
              </h2>
              <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  At AgriDevcor, we believe agriculture is the cornerstone of sustainable economic
                  development, food security, and community resilience. Our commitment is to transform
                  agricultural systems through innovation, strategic partnerships, and practical solutions
                  that deliver measurable impact.
                </p>
                <p>
                  Through collaboration with governments, development partners, investors, and farming
                  communities, we continue to build programs that strengthen value chains, improve
                  livelihoods, and create opportunities for inclusive growth.
                </p>
                <p>
                  As we look toward the future, AgriDevcor remains dedicated to advancing agricultural
                  transformation through research, capacity building, climate-smart agriculture, and
                  sustainable investment. Together we can create resilient food systems and prosperous
                  rural economies.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionShell>

      {/* Leadership structure */}
      <SectionShell orbs>
        <div className="container-px mx-auto max-w-7xl">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Leadership Structure</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">The people behind AgriDevcor</h2>
            <p className="mt-4 text-muted-foreground">
              A multidisciplinary leadership team guiding agricultural transformation, innovation, and sustainable development.
            </p>
          </ScrollReveal>

          <ScrollReveal className="flex justify-center mb-12">
            <GlassCard className="bg-primary text-primary-foreground p-8 w-full max-w-sm text-center border-0">
              <div className="size-28 rounded-full bg-white/15 mx-auto flex items-center justify-center text-white/50 text-sm">Photo</div>
              <h3 className="mt-5 text-2xl font-bold">Managing Director Name</h3>
              <p className="mt-1 opacity-90">Managing Director</p>
              <p className="mt-4 text-sm opacity-85">
                Leads company strategy, operations, partnerships, and execution across all programs.
              </p>
            </GlassCard>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { title: "Head of Agricultural Development", icon: Briefcase },
              { title: "Head of Research & Analytics", icon: BarChart3 },
              { title: "Head of Capacity Building", icon: Users },
              { title: "Head of Finance & Operations", icon: Landmark },
            ].map((person) => (
              <StaggerItem key={person.title}>
                <GlassCard className="p-8 text-center h-full bg-card">
                  <div className="size-24 rounded-full bg-muted mx-auto flex items-center justify-center text-muted-foreground text-sm">Photo</div>
                  <person.icon className="size-7 text-primary mx-auto mt-5" />
                  <h3 className="mt-4 text-lg font-semibold">Person Name</h3>
                  <p className="text-primary mt-1 text-sm font-medium">{person.title}</p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Responsible for leadership, coordination, and delivery within the department.
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={200} className="mt-16">
            <GlassCard className="p-10 text-center bg-soft border-0">
              <h3 className="text-2xl font-bold">Supported by a Network of Experts</h3>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                AgriDevcor works with a diverse network of agricultural economists, agronomists, researchers,
                monitoring and evaluation specialists, climate experts, policy advisors, and development practitioners
                across Africa and beyond.
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Agronomists", "Economists", "M&E Specialists", "Researchers", "Climate Experts", "Policy Advisors", "Project Managers", "Technical Consultants"].map((item) => (
                  <div key={item} className="rounded-2xl bg-background border py-3 px-4 text-sm font-medium">{item}</div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </SectionShell>

      {/* Vision Mission Values */}
      <SectionShell variant="gradient" orbs>
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <img src={aboutImg} alt="Hands holding rich soil with seedling" loading="lazy" className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]" />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="space-y-10">
              {[
                { icon: Eye, title: "Vision", text: "A world where farming systems are productive, regenerative and dignified for those who depend on them." },
                { icon: Target, title: "Mission", text: "To design and deliver agricultural development programs that produce measurable, lasting outcomes for people and ecosystems." },
                { icon: HeartHandshake, title: "Values", text: "Evidence, humility, partnership, and an uncompromising commitment to impact at the farm gate." },
              ].map((v) => (
                <div key={v.title} className="flex gap-5">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground shrink-0 shadow-soft">
                    <v.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{v.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-10 rounded-full">
              <Link to="/contact">Work With Us <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </SectionShell>
    </>
  );
}
