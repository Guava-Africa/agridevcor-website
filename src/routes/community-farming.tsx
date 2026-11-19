import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ClipboardCheck,
  GraduationCap,
  Package,
  Sprout,
  Eye,
  Wheat,
  Factory,
  Store,
  Wallet,
  UserPlus,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/motion/PageHero";
import { SectionShell } from "@/components/motion/SectionShell";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/ScrollReveal";
import { GlassCard } from "@/components/motion/GlassCard";
import {
  Timeline,
  type TimelineStep,
  CTASection,
  FAQ,
  ImageBanner,
  SectionDivider,
} from "@/components/ds";
import { SectionHeading } from "@/components/ui/section-heading";
import heroFields from "@/assets/hero-fields.jpg";
import peaBean from "@/assets/michigan-pea-bean.jpg";
import redSorghum from "@/assets/red-sorghum.jpg";
import farmingCommunity from "@/assets/women in tomatoe field.jpg";
import wateringCrops from "@/assets/man watering maize plants.jpg";
import popcornSacks from "@/assets/popcorns in sacks.jpg";

export const Route = createFileRoute("/community-farming")({
  head: () => ({
    meta: [
      { title: "Community Farming — AgriDevcor" },
      {
        name: "description",
        content:
          "Follow the end-to-end community farming journey — from farmer registration to market access and payment — with AgriDevcor's inclusive rural development programs.",
      },
      { property: "og:title", content: "Community Farming — AgriDevcor" },
      {
        property: "og:description",
        content:
          "An immersive look at how AgriDevcor supports smallholder cooperatives from registration through harvest, processing, and market access.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/community-farming" },
    ],
    links: [{ rel: "canonical", href: "/community-farming" }],
  }),
  component: CommunityFarmingPage,
});

const journeySteps: TimelineStep[] = [
  {
    id: "registration",
    title: "Farmer Registration",
    description:
      "Cooperatives and individual smallholders enrol through structured onboarding — capturing farm profiles, land tenure, crop preferences, and household demographics to build a tailored support plan.",
    icon: UserPlus,
  },
  {
    id: "assessment",
    title: "Assessment",
    description:
      "Field teams conduct soil testing, water availability surveys, and baseline yield assessments. Each farm receives a diagnostic report with prioritized interventions.",
    icon: ClipboardCheck,
  },
  {
    id: "training",
    title: "Training",
    description:
      "Farmer field schools deliver hands-on training in climate-smart practices, integrated pest management, and post-harvest handling — building skills that persist beyond the project lifecycle.",
    icon: GraduationCap,
  },
  {
    id: "inputs",
    title: "Input Support",
    description:
      "Certified seed, fertilizer, and tools are distributed through cooperative structures with transparent tracking — ensuring inputs reach the farmers who need them most.",
    icon: Package,
  },
  {
    id: "planting",
    title: "Planting",
    description:
      "Extension officers guide planting calendars, spacing, and varietal selection aligned to local agro-ecological zones — maximizing germination and early crop establishment.",
    icon: Sprout,
  },
  {
    id: "monitoring",
    title: "Monitoring",
    description:
      "Regular field visits, digital check-ins, and crop health assessments track progress against milestones. Early warning systems flag pest outbreaks and weather risks.",
    icon: Eye,
  },
  {
    id: "harvest",
    title: "Harvest",
    description:
      "Harvest protocols ensure quality grading at source. Cooperatives coordinate collection points and logistics to minimize post-harvest losses during peak season.",
    icon: Wheat,
  },
  {
    id: "processing",
    title: "Processing",
    description:
      "Value-add facilities — drying, sorting, and packaging — transform raw produce into market-ready products, capturing more value within the community.",
    icon: Factory,
  },
  {
    id: "market",
    title: "Market Access",
    description:
      "Buyer linkages, contract farming arrangements, and export certifications connect cooperatives to premium markets — from local retailers to international buyers.",
    icon: Store,
  },
  {
    id: "payment",
    title: "Payment",
    description:
      "Transparent payment systems — mobile money and cooperative accounts — ensure farmers receive fair prices promptly, with full traceability from field to final sale.",
    icon: Wallet,
  },
];

const faqItems = [
  {
    question: "Who can join a community farming program?",
    answer:
      "Smallholder farmers, women-led cooperatives, and rural producer groups operating in our program areas. Registration is open to both existing cooperatives and newly formed groups.",
  },
  {
    question: "How long does the full journey take?",
    answer:
      "The crop cycle varies with the crop and local growing conditions. Training and input support begin immediately after registration and assessment.",
  },
  {
    question: "Is there a cost to farmers?",
    answer:
      "Core training and extension services are subsidized through donor and government partnerships. Input packages are offered at cooperative rates with flexible repayment aligned to harvest income.",
  },
  {
    question: "How is impact measured?",
    answer:
      "We use rigorous MEAL frameworks — baseline/endline surveys, yield tracking, income monitoring, and third-party verification — to demonstrate measurable outcomes for every program.",
  },
];

function CommunityFarmingPage() {
  return (
    <>
      <PageHero
        image={heroFields}
        eyebrow="Community Farming"
        title={
          <>
            From seed to <span className="text-primary-light">market</span> — together.
          </>
        }
        description="An end-to-end journey supporting smallholder cooperatives with training, inputs, monitoring, and fair market access across Africa."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: "Community Farming" },
        ]}
        badges={["Cooperative-Led", "Women Empowerment", "Climate-Smart"]}
        ctas={[
          { label: "Partner With Us", to: "/contact", variant: "primary" },
          { label: "View Products", to: "/products", variant: "outline" },
        ]}
      />

      {/* Intro */}
      <SectionShell orbs>
        <div className="container-px mx-auto max-w-7xl">
          <ScrollReveal className="max-w-3xl mx-auto text-center mb-6">
            <SectionHeading
              eyebrow="Our Approach"
              title="A complete value chain for rural communities"
              description="Community farming isn't a single intervention — it's a coordinated journey that builds capacity, reduces risk, and creates lasting economic opportunity for smallholder families."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <ScrollReveal>
              <img src={farmingCommunity} alt="Women working in a community tomato field" loading="lazy" className="aspect-[16/10] w-full rounded-3xl object-cover shadow-soft" />
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <img src={wateringCrops} alt="Farmer irrigating maize plants" loading="lazy" className="aspect-[16/10] w-full rounded-3xl object-cover shadow-soft" />
            </ScrollReveal>
          </div>
        </div>
      </SectionShell>

      <SectionDivider variant="line" />

      {/* Journey timeline */}
      <SectionShell variant="gradient" orbs id="journey">
        <div className="container-px mx-auto max-w-5xl">
          <ScrollReveal className="text-center mb-16 md:mb-24">
            <SectionHeading
              eyebrow="The Journey"
              title="Ten steps to transformation"
              description="Scroll through each stage of our community farming model — designed to deliver measurable impact at every milestone."
              align="center"
              className="mx-auto"
            />
          </ScrollReveal>
          <Timeline steps={journeySteps} />
        </div>
      </SectionShell>

      {/* Story sections — alternating layouts */}
      <SectionShell orbs>
        <div className="container-px mx-auto max-w-7xl space-y-24">
          <ImageBanner
            image={peaBean}
            alt="Dry white pea beans representing the crop grown under Project Kunaka"
            eyebrow="Project 1"
            title="Project Kunaka"
            description="National Climate Resilient Irrigation Scale-up for Michigan Pea Beans."
            align="left"
          />

          <ImageBanner
            image={redSorghum}
            alt="Harvested red sorghum grains representing the crop grown under Project Nyathi"
            eyebrow="Project 2"
            title="Project Nyathi"
            description="National Climate Smart Drought Tolerant Scale-up for Red Sorghum."
            align="right"
          />

          <ImageBanner
            image={popcornSacks}
            alt="Popcorn harvest stored in sacks ready for market"
            eyebrow="Post-Harvest Excellence"
            title="Capturing value after the harvest"
            description="Processing hubs and cold-chain infrastructure reduce losses and add value — turning raw harvests into premium products that command higher prices in local and export markets."
            align="left"
          />
        </div>
      </SectionShell>

      {/* Program highlights */}
      <SectionShell variant="soft" orbs>
        <div className="container-px mx-auto max-w-7xl">
          <ScrollReveal className="text-center mb-12">
            <SectionHeading
              eyebrow="Program Highlights"
              title="What makes our model work"
              align="center"
              className="mx-auto"
            />
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Cooperative Structure",
                desc: "Farmer-owned cooperatives aggregate produce, negotiate prices, and share resources — creating economies of scale for smallholders.",
              },
              {
                title: "Climate-Smart Practices",
                desc: "Drought-tolerant varieties, water-efficient irrigation, and soil health management build resilience against climate shocks.",
              },
              {
                title: "Transparent Payments",
                desc: "Mobile money and cooperative accounts ensure every farmer receives fair payment with full traceability from field to buyer.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <GlassCard className="p-8 h-full bg-card">
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={200} className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link to="/products">
                Explore All Products <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </SectionShell>

      {/* FAQ */}
      <SectionShell orbs>
        <div className="container-px mx-auto max-w-7xl">
          <FAQ items={faqItems} />
        </div>
      </SectionShell>

      <CTASection
        icon={Users}
        title="Ready to launch a community farming program?"
        description="Partner with AgriDevcor to design and deliver end-to-end smallholder programs with measurable impact."
        actions={[
          { label: "Start a Conversation", to: "/contact" },
          { label: "Our Services", to: "/services", variant: "outline" },
        ]}
      />
    </>
  );
}
