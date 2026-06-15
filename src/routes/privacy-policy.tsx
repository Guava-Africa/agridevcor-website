import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Database,
  Lock,
  Eye,
  UserCheck,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | AgriDevcor" },
      {
        name: "description",
        content:
          "Learn how AgriDevcor collects, uses, protects, and manages information across our agricultural development programs, advisory services and digital platforms.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      text: "We may collect personal information, project information, farm-related data, communications, website analytics and information voluntarily provided through forms and engagements.",
    },
    {
      icon: Eye,
      title: "How We Use Information",
      text: "Information helps us deliver consulting services, support agricultural programs, improve user experience, manage partnerships, communicate with stakeholders and fulfill contractual obligations.",
    },
    {
      icon: Lock,
      title: "Data Protection",
      text: "AgriDevcor employs technical and organizational safeguards designed to protect information from unauthorized access, misuse, disclosure or alteration.",
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      text: "You may request access, correction, deletion or restriction of personal information where permitted under applicable laws and regulations.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[75vh] flex items-center">
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
              Privacy & Data Protection
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">
              Protecting Information.
              <span className="block text-emerald-300">
                Building Trust.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-white/90">
              AgriDevcor is committed to responsible data management,
              transparency, security and protecting the privacy of our
              stakeholders, partners, clients and farming communities.
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
                <Link to="/about">Learn About AgriDevcor</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-4 gap-6">
          {[
            "Secure Data Practices",
            "Responsible Governance",
            "Ethical Operations",
            "Stakeholder Protection",
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

      {/* OVERVIEW */}
      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Privacy Principles"
            title="How we collect, use and protect information"
            description="Our commitment to transparency, accountability and responsible information management."
            align="center"
          />

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {sections.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="size-14 rounded-2xl bg-soft flex items-center justify-center text-primary">
                  <item.icon className="size-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-muted-foreground leading-8">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA RIGHTS */}
      <section className="section-y bg-soft">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Your Rights"
            title="You remain in control"
            description="We believe individuals should understand and manage how their information is used."
            align="center"
          />

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              "Access Information",
              "Correct Information",
              "Request Deletion",
              "Withdraw Consent",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white border p-8 shadow-sm text-center hover:shadow-xl transition-all duration-300"
              >
                <ShieldCheck className="size-10 mx-auto text-primary" />

                <h3 className="mt-4 font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl">
          <div className="rounded-[36px] bg-primary text-primary-foreground p-10 md:p-16">
            <div className="max-w-4xl">
              <span className="text-emerald-300 font-semibold uppercase tracking-wider">
                Security & Protection
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Protecting Information Through Responsible Governance
              </h2>

              <p className="mt-6 text-lg text-white/80 leading-8">
                We implement security measures designed to protect
                information against unauthorized access, misuse,
                disclosure, loss or alteration. While no system can
                guarantee absolute security, we continuously improve
                our practices to maintain a secure environment.
              </p>

              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {[
                  "Secure Infrastructure",
                  "Access Controls",
                  "Continuous Monitoring",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 p-6 backdrop-blur"
                  >
                    <CheckCircle2 className="size-6 text-emerald-300 mb-3" />
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-y bg-soft">
        <div className="container-px mx-auto max-w-5xl">
          <div className="rounded-[36px] bg-white border p-10 md:p-16 text-center shadow-lg">
            <Mail className="size-12 mx-auto text-primary" />

            <h2 className="mt-6 text-4xl font-bold">
              Questions About Privacy?
            </h2>

            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              If you have questions regarding this Privacy Policy or
              how information is handled, our team is available to assist.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us
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