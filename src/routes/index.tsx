import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sprout, BarChart3, Shield, Sun, Users, Microscope, GraduationCap, LineChart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { SectionShell } from "@/components/motion/SectionShell";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  CTASection,
  FeatureCard,
  // TestimonialCard, // Restore with the testimonials section below.
  ProductCard,
} from "@/components/ds";
import aboutImg from "@/assets/about-soil.jpg";
import seedPotato from "@/assets/seed-potato.jpg";
import redSorghum from "@/assets/red-sorghum.jpg";
import farmingCommunity from "@/assets/women in tomatoe field.jpg";
import wateringCrops from "@/assets/man watering maize plants.jpg";
import harvest from "@/assets/popcorns in sacks.jpg";

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
  { icon: BarChart3, title: "Advisory and Consultancy", desc: "Feasibility, market entry and investment structuring for agri-enterprises.", color: "from-primary to-primary-dark" },
  { icon: GraduationCap, title: "Training and Capacity Building", desc: "Farmer field schools and extension programs that change practice at scale.", color: "from-emerald-600 to-primary-dark" },
  { icon: Sprout, title: "Value Chain Development", desc: "Market entry, value chain analysis, investor due diligence and offtake structuring.", color: "from-teal-700 to-primary-dark" },
  { icon: Sun, title: "Climate Smart Technologies", desc: "Drip, pivot and solar-powered irrigation systems engineered for scale.", color: "from-green-700 to-primary-dark" },
  { icon: Microscope, title: "Seed Potato Certification", desc: "Seed potato certification.", color: "from-primary-dark to-emerald-900" },
  { icon: LineChart, title: "M&E (Monitoring and Evaluation)", desc: "Theory of change, MEAL frameworks and impact verification.", color: "from-emerald-700 to-teal-900" },
];

/* Testimonials temporarily disabled.
const testimonials = [
  { text: "AgriDevcor designed the most rigorous and grounded irrigation feasibility we've ever commissioned.", author: "Director of Agriculture Programs", location: "Regional Development Bank" },
  { text: "Their team blends world-class technical depth with genuine field empathy. Transformational work.", author: "Sarah Mitchell", location: "Nairobi, Kenya" },
  { text: "The impact on our smallholder cooperative has been immeasurable. We've doubled our yield sustainably.", author: "James Omondi", location: "Kisumu, Kenya" },
  { text: "Finally, an agricultural consultancy that puts both people and planet first. Highly recommended.", author: "Dr. Amina Hassan", location: "Dar es Salaam, Tanzania" },
];
*/


function Home() {
  return (
    <>
      <section id="hero">
        <HeroSlider />
      </section>

      {/* Hero message */}
      <SectionShell orbs>
        <div className="container-px mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Mission"
              title={<>Grow a better tomorrow. <span className="gradient-text">Change lives.</span></>}
              description="We drive success across the agricultural value chain by pairing agritech technical specialists with development economists, ecologists, engineers and investment partners to grow a better tomorrow."
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
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { image: farmingCommunity, alt: "Women tending a tomato crop" },
              { image: wateringCrops, alt: "Farmer watering maize plants" },
              { image: harvest, alt: "Harvested popcorn stored in sacks" },
            ].map((photo, index) => (
              <ScrollReveal key={photo.image} delay={index * 100}>
                <img src={photo.image} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
              </ScrollReveal>
            ))}
          </div>
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

      {/* Testimonials temporarily disabled.
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
      */}

      {/* About preview */}
      <SectionShell variant="soft" orbs>
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img src={aboutImg} alt="Hands holding rich soil" loading="lazy" className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <span className="eyebrow">About AgriDevcor</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
                Development expertise. Agricultural depth. Measurable impact.
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                We drive success across the agricultural value chain by pairing agritech technical specialists with development economists, ecologists, engineers and investment partners to grow a better tomorrow.
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
              { img: seedPotato, tag: "Products", title: "Seed Potato", desc: "AgriDevCor secures high-class seed from international breeders to ensure every seed batch delivers the yield, purity and performance modern farmers depend on." },
              { img: redSorghum, tag: "Products", title: "Red Sorghum", desc: "Is a red-pigmented cereal grain that thrives in low rainfall areas due to its drought resistance. It is a versatile raw material for brewing, stockfeed, natural dyes and biofuel." },
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
