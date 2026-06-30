import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { PageHero } from "@/components/motion/PageHero";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { GlassCard } from "@/components/motion/GlassCard";
import { SectionShell } from "@/components/motion/SectionShell";
import { FloatingGlassCard } from "@/components/motion/GlassCard";
import heroFields from "@/assets/hero-fields.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AgriDevcor — Start a conversation" },
      { name: "description", content: "Get in touch with AgriDevcor. We respond within two working days." },
      { property: "og:title", content: "Contact AgriDevcor" },
      { property: "og:description", content: "Reach our team to discuss programs, partnerships or proposals." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  organization: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Required").max(160),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

const offices = [
  { city: "Harare", role: "Headquarters", addr: "55 Lawley Avenue Belvedere Harare, Zimbabwe" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      toast.error("Please review the form");
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Message sent — we'll be in touch shortly.");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        image={heroFields}
        eyebrow="Contact Us"
        title={<>Let's <span className="text-primary-light">talk.</span></>}
        description="Programs, partnerships, proposals — share a few details and our team will respond within two working days."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        badges={["2-Day Response", "Harare HQ", "Global Reach"]}
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
            <GlassCard className="p-8 md:p-10 bg-card">
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="size-14 text-primary mx-auto" />
                  <h2 className="mt-4 text-2xl font-bold">Thank you.</h2>
                  <p className="mt-2 text-muted-foreground">Your message is on its way. We'll be in touch shortly.</p>
                  <Button className="mt-6 rounded-full" onClick={() => setSent(false)}>Send another</Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" error={errors.name} />
                  <Field label="Email" name="email" type="email" error={errors.email} />
                  <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                  <Field label="Organization" name="organization" error={errors.organization} />
                  <Field label="Subject" name="subject" className="sm:col-span-2" error={errors.subject} />
                  <div className="sm:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" rows={6} className="mt-2" aria-invalid={!!errors.message} />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" className="rounded-full px-8 font-semibold">Send message</Button>
                  </div>
                </form>
              )}
            </GlassCard>
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

function Field({ label, name, type = "text", error, className }: { label: string; name: string; type?: string; error?: string; className?: string }) {
  return (
    <div className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} className="mt-2" aria-invalid={!!error} />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
