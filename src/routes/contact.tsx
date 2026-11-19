import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/motion/PageHero";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { GlassCard } from "@/components/motion/GlassCard";
import { SectionShell } from "@/components/motion/SectionShell";
import { FloatingGlassCard } from "@/components/motion/GlassCard";
import farmingCommunity from "@/assets/women in tomatoe field.jpg";
import heroFields from "@/assets/hero-fields.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AgriDevcor — Start a conversation" },
      { name: "description", content: "Get in touch with AgriDevcor by email or phone, or visit our Harare office." },
      { property: "og:title", content: "Contact AgriDevcor" },
      { property: "og:description", content: "Reach our team to discuss programs, partnerships or proposals." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const offices = [
  { city: "Harare", role: "Headquarters", addr: "55 Lawley Avenue Belvedere Harare, Zimbabwe" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        image={heroFields}
        eyebrow="Contact Us"
        title={<>Let's <span className="text-primary-light">talk.</span></>}
        description="Contact our team by email or phone to discuss programs, partnerships and proposals."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        badges={["Harare HQ", "Agricultural Development"]}
        floatingCard={
          <FloatingGlassCard>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Direct Lines</p>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="mailto:info@agridevcor.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Mail className="size-4 text-primary-light shrink-0" />
                  info@agridevcor.com
                </a>
              </li>
              <li>
                <a href="tel:+263242257156" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <Phone className="size-4 text-primary-light shrink-0" />
                  +263 (0) 242-257156
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="size-4 text-primary-light shrink-0 mt-0.5" />
                55 Lawley Avenue Belvedere, Harare
              </li>
            </ul>
          </FloatingGlassCard>
        }
      />

      <SectionShell orbs>
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-[1.3fr_1fr] gap-10">
          <ScrollReveal>
            <img src={farmingCommunity} alt="Women tending crops in a tomato field" loading="lazy" className="h-full min-h-80 max-h-[620px] w-full rounded-3xl object-cover shadow-elegant" />
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={120}>
              <GlassCard className="p-8 bg-card">
                <h2 className="text-xl font-semibold">Direct lines</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg bg-soft text-primary"><Mail className="size-4" /></span>
                    <a href="mailto:info@agridevcor.com" className="hover:text-primary transition-colors">info@agridevcor.com</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg bg-soft text-primary"><Phone className="size-4" /></span>
                    <a href="tel:+263242257156" className="hover:text-primary transition-colors">+263 (0) 242-257156 / 257157</a>
                  </li>
                </ul>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <GlassCard className="p-8 bg-card">
                <h2 className="text-xl font-semibold">Offices</h2>
                <ul className="mt-5 space-y-4">
                  {offices.map((o) => (
                    <li key={o.city} className="flex gap-3 items-start rounded-xl bg-soft p-4">
                      <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground shrink-0"><MapPin className="size-4" /></span>
                      <div>
                        <div className="text-sm font-semibold">{o.city} <span className="text-muted-foreground font-normal">· {o.role}</span></div>
                        <div className="text-sm text-muted-foreground mt-1">{o.addr}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
