import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  Shield,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  Gavel,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | AgriDevcor" },
      {
        name: "description",
        content:
          "Terms governing the use of AgriDevcor services, agricultural development programmes, consulting engagements and digital platforms.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const serviceCards = [
    {
      icon: Briefcase,
      title: "Agricultural Development",
      text: "Design and implementation of agricultural transformation programmes and development initiatives.",
    },
    {
      icon: Shield,
      title: "Advisory Services",
      text: "Technical, strategic and policy advisory services for governments, institutions and private sector clients.",
    },
    {
      icon: Scale,
      title: "Research & Evaluation",
      text: "Research, monitoring, evaluation, analytics and evidence-based decision support.",
    },
    {
      icon: FileText,
      title: "Capacity Building",
      text: "Training, knowledge transfer and institutional strengthening programmes.",
    },
  ];

  const responsibilities = [
    "Provide accurate and complete information",
    "Use services in accordance with applicable laws",
    "Respect intellectual property rights",
    "Maintain confidentiality where required",
    "Avoid misuse of AgriDevcor platforms and resources",
    "Comply with project-specific agreements",
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-green-900 to-black" />

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
        </div>

        <div className="container-px mx-auto max-w-7xl relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-2 text-sm font-medium text-white">
              Terms of Service
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">
              Professional Standards.
              <span className="block text-emerald-300">
                Responsible Engagement.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-white/90">
              These Terms of Service govern the use of AgriDevcor services,
              programmes, consulting engagements, digital platforms and
              professional interactions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-4 gap-6">
          {[
            "Professional Integrity",
            "Transparency",
            "Accountability",
            "Responsible Partnerships",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur"
            >
              <CheckCircle2 className="size-8 mx-auto mb-3 text-emerald-300" />
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Covered Services"
            title="Services governed by these terms"
            description="These terms apply across AgriDevcor programmes, projects, advisory services and digital platforms."
            align="center"
          />

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {serviceCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="size-14 rounded-2xl bg-soft flex items-center justify-center text-primary">
                  <card.icon className="size-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-4 text-muted-foreground leading-8">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="section-y bg-soft">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="User Responsibilities"
            title="Expectations for all users and stakeholders"
            description="To maintain effective partnerships and professional engagements."
            align="center"
          />

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {responsibilities.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white border p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle2 className="size-8 text-primary mb-4" />

                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTELLECTUAL PROPERTY */}
      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl">
          <div className="rounded-[36px] border bg-white p-10 md:p-16 shadow-lg">
            <div className="max-w-4xl">
              <Shield className="size-14 text-primary" />

              <h2 className="mt-6 text-4xl md:text-5xl font-bold">
                Intellectual Property
              </h2>

              <p className="mt-6 text-muted-foreground text-lg leading-8">
                All content, methodologies, reports, frameworks, branding,
                publications, training materials, graphics and digital assets
                developed or published by AgriDevcor remain the intellectual
                property of AgriDevcor unless otherwise agreed in writing.
              </p>

              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {[
                  "Reports & Publications",
                  "Training Materials",
                  "Brand Assets & Content",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-soft p-6"
                  >
                    <CheckCircle2 className="size-6 text-primary mb-3" />
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIABILITY */}
      <section className="section-y bg-primary text-primary-foreground">
        <div className="container-px mx-auto max-w-7xl">
          <AlertTriangle className="size-14 text-amber-400 mb-6" />

          <h2 className="text-4xl md:text-5xl font-bold">
            Limitation of Liability
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/80">
            Agricultural development outcomes may be affected by weather,
            environmental conditions, market fluctuations, government policy,
            third-party actions and factors beyond reasonable control.
            AgriDevcor does not guarantee specific outcomes unless expressly
            stated in a formal written agreement.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              "Weather Risks",
              "Market Conditions",
              "External Factors",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur"
              >
                <AlertTriangle className="size-6 text-amber-400 mb-3" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNING LAW */}
      <section className="section-y">
        <div className="container-px mx-auto max-w-5xl">
          <div className="rounded-[36px] bg-soft border p-10 md:p-16 text-center">
            <Gavel className="size-14 mx-auto text-primary" />

            <h2 className="mt-6 text-4xl font-bold">
              Governing Law
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              These terms shall be governed and interpreted in accordance
              with the laws of Zimbabwe unless otherwise specified within
              a separate contractual agreement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-soft">
        <div className="container-px mx-auto max-w-5xl">
          <div className="rounded-[36px] bg-white border p-10 md:p-16 text-center shadow-lg">
            <FileText className="size-12 mx-auto text-primary" />

            <h2 className="mt-6 text-4xl font-bold">
              Need Clarification?
            </h2>

            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              If you have questions regarding these Terms of Service,
              our team is available to assist and provide further guidance.
            </p>

            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact AgriDevcor
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Last Updated: June 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}