import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sprout, Globe2, BarChart3, Shield, Droplets, Sun, Users, Microscope, GraduationCap, LineChart, Leaf, Tractor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { GlassCard } from "@/components/motion/GlassCard";
import { SectionShell } from "@/components/motion/SectionShell";
import { Marquee } from "@/components/motion/Marquee";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  CTASection,
  FeatureCard,
  StatCardGrid,
  TestimonialCard,
  ProductCard,
} from "@/components/ds";
import aboutImg from "@/assets/about-soil.jpg";
import projIrrigation from "@/assets/project-irrigation.jpg";
import projClimate from "@/assets/project-climate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgriDevcor — Agricultural Development & Sustainability" },
      { name: "description", content: "Premium consulting in climate-smart agriculture, irrigation, agribusiness and rural development." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Sprout, title: "Climate-Smart Agriculture", desc: "Regenerative practices, carbon-smart cropping and resilient value chains.", color: "from-primary to-primary-dark" },
  { icon: Droplets, title: "Irrigation & Water", desc: "Drip, pivot and solar-powered irrigation systems engineered for scale.", color: "from-emerald-600 to-primary-dark" },
  { icon: BarChart3, title: "Agribusiness Advisory", desc: "Feasibility, market entry and investment structuring for agri-enterprises.", color: "from-teal-700 to-primary-dark" },
  { icon: GraduationCap, title: "Training & Capacity", desc: "Farmer field schools and extension programs that change practice at scale.", color: "from-green-700 to-primary-dark" },
  { icon: LineChart, title: "Monitoring & Evaluation", desc: "Theory of change, MEAL frameworks and impact verification.", color: "from-primary-dark to-emerald-900" },
  { icon: Microscope, title: "Research & Innovation", desc: "Applied research on varieties, soils and climate-resilient systems.", color: "from-emerald-700 to-teal-900" },
];

const testimonials = [
  { text: "AgriDevcor designed the most rigorous and grounded irrigation feasibility we've ever commissioned.", author: "Director of Agriculture Programs", location: "Regional Development Bank" },
  { text: "Their team blends world-class technical depth with genuine field empathy. Transformational work.", author: "Sarah Mitchell", location: "Nairobi, Kenya" },
  { text: "The impact on our smallholder cooperative has been immeasurable. We've doubled our yield sustainably.", author: "James Omondi", location: "Kisumu, Kenya" },
  { text: "Finally, an agricultural consultancy that puts both people and planet first. Highly recommended.", author: "Dr. Amina Hassan", location: "Dar es Salaam, Tanzania" },
];

const partners = [
  "World Bank", "FAO", "USAID", "AfDB", "EU Delegation", "UNDP", "IFAD", "GIZ", "Syngenta", "Corteva",
];

function Home() {
  return (
    <>
      <section id="hero">
        <HeroSlider />
      </section>

      {/* Stats marquee */}
      <div className="border-y border-border/60 bg-soft/50 py-5">
        <Marquee speed="slow">
          {partners.map((p) => (
            <span key={p} className="flex items-center gap-3 px-6 text-sm font-semibold text-muted-foreground/60 uppercase tracking-widest">
              <Tractor className="size-4 text-primary/40" />
              {p}
            </span>
          ))}
        </Marquee>
      </div>

      {/* Hero message */}
      <SectionShell orbs>
        <div className="container-px mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Mission"
              title={<>Grow a better tomorrow. <span className="gradient-text">Change lives.</span></>}
              description="Agricultural transformation is hard. Getting expert support doesn't need to be. We put sustainable farming solutions in your hands, with proven strategies to increase yield, build resilience, and create lasting impact for communities."
              align="center"
              className="mx-auto max-w-3xl [&_h2]:text-balance"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8 font-semibold shadow-soft hover:shadow-elegant hover:scale-[1.02] transition-all">
                <Link to="/contact">Start Your Journey <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 font-semibold">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </SectionShell>

      {/* Services */}
      <SectionShell variant="gradient" orbs>
        <div className="container-px mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
            <SectionHeading
              eyebrow="What We Do"
              title="Transform agriculture at every scale"
              description="Integrated expertise across climate, water, markets and capacity building."
              align="center"
              className="mx-auto"
            />
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <FeatureCard
                  icon={service.icon}
                  title={service.title}
                  description={service.desc}
                  href="/services"
                  gradient={service.color}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionShell>

      {/* Impact stats */}
      <SectionShell variant="dark">
        <div className="container-px mx-auto max-w-7xl">
          <StatCardGrid
            stats={[
              { value: 200, suffix: "+", label: "Projects Delivered" },
              { value: 12, suffix: "", label: "African Countries" },
              { value: 15, suffix: "+", label: "Years of Excellence" },
              { value: 50, suffix: "K+", label: "Farmers Reached" },
            ]}
            variant="dark"
          />
        </div>
      </SectionShell>

      {/* Testimonials */}
      <SectionShell orbs>
        <div className="container-px mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by governments, NGOs & investors"
              align="center"
              className="mx-auto"
            />
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <TestimonialCard text={t.text} author={t.author} location={t.location} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionShell>

      {/* About preview */}
      <SectionShell variant="soft" orbs>
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img src={aboutImg} alt="Hands holding rich soil" loading="lazy" className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]" />
                <GlassCard hover={false} className="absolute -bottom-6 -right-6 p-6 max-w-xs hidden md:block bg-primary text-white border-0">
                  <Globe2 className="size-8 mb-2 text-primary-light" />
                  <p className="text-sm">Active programs across <strong>12 African countries</strong></p>
                </GlassCard>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <span className="eyebrow">About AgriDevcor</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
                Development expertise. Agricultural depth. Measurable impact.
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                For over a decade we've designed and delivered agricultural transformation programs
                at every scale — from smallholder cooperatives to national irrigation strategies.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Shield, text: "Independent & evidence-based" },
                  { icon: Users, text: "Multi-disciplinary expert teams" },
                  { icon: Sun, text: "Climate & nature positive" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft">
                      <item.icon className="size-5" />
                    </span>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="mt-8 rounded-full px-8">
                <Link to="/about">Our Story <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </SectionShell>

      {/* Products preview */}
      <SectionShell orbs>
        <div className="container-px mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-16">
            <SectionHeading
              eyebrow="Products"
              title="Innovative solutions for modern agriculture"
              align="center"
              className="mx-auto"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { img: projIrrigation, tag: "Irrigation", title: "Smart Drip Network — Rift Valley", desc: "12,000 ha of horticulture under precision irrigation." },
              { img: projClimate, tag: "Climate", title: "Solar-Powered Cold Chains", desc: "Off-grid storage for 38 smallholder cooperatives." },
            ].map((product, index) => (
              <ScrollReveal key={product.title} delay={index * 120}>
                <ProductCard
                  image={product.img}
                  title={product.title}
                  description={product.desc}
                  tag={product.tag}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200} className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link to="/products">Browse All Products <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </SectionShell>

      <CTASection
        icon={Leaf}
        title="Ready to transform your agricultural impact?"
        description="Partner with AgriDevcor to design climate-smart solutions that deliver measurable results for communities and investors."
        actions={[
          { label: "Get Started", to: "/contact" },
          { label: "Learn More", to: "/about", variant: "outline" },
        ]}
      />
    </>
  );
}
