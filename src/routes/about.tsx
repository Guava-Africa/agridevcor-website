import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import chairmanImg from "@/assets/chairman.png";
import aboutVideo from "@/assets/aboutUs.mp4";

import {
  ArrowRight,
  Target,
  Eye,
  HeartHandshake,
  Users,
  Briefcase,
  BarChart3,
  Landmark,
} from "lucide-react";

import aboutImg from "@/assets/about-soil.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AgriDevcor — Our story & leadership" },
      {
        name: "description",
        content:
          "Founded in 2009, AgriDevcor is a multidisciplinary agricultural development consultancy working across Africa, Asia and Latin America.",
      },
      { property: "og:title", content: "About AgriDevcor" },
      {
        property: "og:description",
        content:
          "Our story, mission and the team driving agricultural transformation.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
    
<section className="relative min-h-[65vh] flex items-center overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover brightness-110"
  >
    <source src={aboutVideo} type="video/mp4" />
  </video>

  {/* Lighter Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Softer Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20" />

  {/* Content */}
  <div className="container-px mx-auto max-w-7xl relative z-10 pt-20">
    <div className="max-w-4xl">

      <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 text-sm font-medium text-white">
        About AgriDevcor
      </span>

      <p
        className="mt-8 text-lg md:text-xl text-white/95 max-w-3xl leading-8"
        style={{ textAlign: "justify" }}
      >
        AgriDevcor is a multidisciplinary agricultural development consultancy
        helping governments, investors, development agencies and farming
        communities build resilient agricultural systems that create
        sustainable economic growth and lasting impact. Through innovation,
        research, capacity building and strategic partnerships, we deliver
        practical solutions that strengthen food systems, improve livelihoods,
        and support sustainable agricultural transformation.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button asChild size="lg">
          <Link to="/contact">
            Partner With Us
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-white/30 bg-white/10 text-white hover:bg-white/20"
        >
          <Link to="/services">
            Explore Services
          </Link>
        </Button>
      </div>

    </div>
  </div>
</section>

{/* CHAIRMAN MESSAGE */}
<section className="section-y bg-soft relative overflow-hidden">
  <div className="container-px mx-auto max-w-7xl">
    <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">

      {/* LEFT COLUMN */}
      <div>
        <div
  className="bg-white shadow-lg overflow-hidden"
  style={{ borderRadius: "20px" }}
>
          <img
            src={chairmanImg}
            alt="Eng. Tafadzwa Muguti"
            loading="lazy"
            className="w-full h-[460px] object-cover"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-3xl font-bold text-primary">
            Eng. Tafadzwa Muguti
          </h3>

          <p className="mt-2 text-xl text-amber-500">
            Group Chairman
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-1 h-12 bg-amber-500 rounded-full" />

          <h2 className="text-4xl font-bold text-primary">
            Message From Our Chairman
          </h2>
        </div>

        <div
  className="space-y-6 text-lg leading-9 text-muted-foreground"
  style={{ textAlign: "justify" }}
>
          <p>
            At AgriDevcor, we believe agriculture is the cornerstone of
            sustainable economic development, food security, and community
            resilience. Our commitment is to transform agricultural systems
            through innovation, strategic partnerships, and practical
            solutions that deliver measurable impact.
          </p>

          <p>
            Through collaboration with governments, development partners,
            investors, and farming communities, we continue to build
            programs that strengthen value chains, improve livelihoods,
            and create opportunities for inclusive growth.
          </p>

          <p>
            As we look toward the future, AgriDevcor remains dedicated to
            advancing agricultural transformation through research,
            capacity building, climate-smart agriculture, and sustainable
            investment. Together we can create resilient food systems and
            prosperous rural economies.
          </p>
        </div>

        <div className="mt-10">
          <Button size="lg">
            Read More
          </Button>
        </div>
      </div>

    </div>
  </div>
</section>

      
{/* COMPANY STRUCTURE */}
<section className="section-y">
  <div className="container-px mx-auto max-w-7xl">
    <SectionHeading
      eyebrow="Leadership Structure"
      title="The people behind AgriDevcor"
      description="A multidisciplinary leadership team guiding agricultural transformation, innovation, and sustainable development."
      align="center"
    />

    <div className="mt-20">

      

      {/* MANAGING DIRECTOR */}
      <div className="flex justify-center">
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-xl w-full max-w-sm text-center">
          <div className="size-28 rounded-full bg-white/20 mx-auto flex items-center justify-center">
            Photo
          </div>

          <h3 className="mt-5 text-2xl font-bold">
            Managing Director Name
          </h3>

          <p className="mt-1 opacity-90">
            Managing Director
          </p>

          <p className="mt-4 text-sm opacity-90">
            Leads company strategy, operations, partnerships, and execution
            across all programs.
          </p>
        </div>
      </div>

      {/* CONNECTOR */}
      <div className="relative mt-12 mb-12">
        <div className="absolute left-1/2 -translate-x-1/2 h-10 w-px bg-border" />
      </div>

      {/* DEPARTMENT HEADS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          {
            title: "Head of Agricultural Development",
            icon: Briefcase,
          },
          {
            title: "Head of Research & Analytics",
            icon: BarChart3,
          },
          {
            title: "Head of Capacity Building",
            icon: Users,
          },
          {
            title: "Head of Finance & Operations",
            icon: Landmark,
          },
        ].map((person) => (
          <div
            key={person.title}
            className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="size-24 rounded-full bg-muted mx-auto flex items-center justify-center text-muted-foreground">
              Photo
            </div>

            <person.icon className="size-8 text-primary mx-auto mt-5" />

            <h3 className="mt-4 text-lg font-semibold">
              Person Name
            </h3>

            <p className="text-primary mt-1 text-sm">
              {person.title}
            </p>

            <p className="mt-4 text-sm text-muted-foreground">
              Responsible for leadership, coordination, and delivery within the
              department.
            </p>
          </div>
        ))}
      </div>

      {/* SUPPORT TEAM */}
      <div className="mt-20">
        <div className="rounded-[32px] bg-soft border p-10 text-center">
          <h3 className="text-2xl font-bold">
            Supported by a Network of Experts
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            AgriDevcor works with a diverse network of agricultural economists,
            agronomists, researchers, monitoring and evaluation specialists,
            climate experts, policy advisors, and development practitioners
            across Africa and beyond.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Agronomists",
              "Economists",
              "M&E Specialists",
              "Researchers",
              "Climate Experts",
              "Policy Advisors",
              "Project Managers",
              "Technical Consultants",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-2xl py-4 px-5 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


             {/* VISION MISSION VALUES */}
      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img
            src={aboutImg}
            alt="Hands holding rich soil with seedling"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]"
          />

          <div className="space-y-10">
            {[
              {
                icon: Eye,
                title: "Vision",
                text: "A world where farming systems are productive, regenerative and dignified for those who depend on them.",
              },
              {
                icon: Target,
                title: "Mission",
                text: "To design and deliver agricultural development programs that produce measurable, lasting outcomes for people and ecosystems.",
              },
              {
                icon: HeartHandshake,
                title: "Values",
                text: "Evidence, humility, partnership, and an uncompromising commitment to impact at the farm gate.",
              },
            ].map((v) => (
              <div key={v.title} className="flex gap-5">
                <span className="grid size-12 place-items-center rounded-xl bg-soft text-primary shrink-0">
                  <v.icon className="size-5" />
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {v.title}
                  </h3>

                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

