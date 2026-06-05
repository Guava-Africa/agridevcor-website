import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AgriDevcor — Start a conversation" },
      { name: "description", content: "Get in touch with AgriDevcor. Offices in Nairobi, Kigali and Accra. We respond within two working days." },
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
  { city: "Nairobi", addr: "Riverside Square, Westlands", role: "HQ" },
  { city: "Kigali", addr: "KG 7 Ave, Kacyiru", role: "East Africa" },
  { city: "Accra", addr: "Airport Residential, Accra", role: "West Africa" },
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
      <section className="bg-soft section-y">
        <div className="container-px mx-auto max-w-5xl text-center">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">Let's talk.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Programs, partnerships, proposals — share a few details and our team will respond within two working days.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-[1.3fr_1fr] gap-12">
          <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft">
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
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea id="message" name="message" rows={6} className="mt-2" aria-invalid={!!errors.message} />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="rounded-full bg-primary hover:bg-primary-dark w-full sm:w-auto px-8">
                    Send message
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold">Direct lines</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg bg-soft text-primary"><Mail className="size-4" /></span> hello@agridevcor.com</li>
                <li className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-lg bg-soft text-primary"><Phone className="size-4" /></span> +254 700 000 000</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Offices</h2>
              <ul className="mt-5 space-y-4">
                {offices.map((o) => (
                  <li key={o.city} className="flex gap-3 items-start rounded-xl border border-border p-4 bg-card">
                    <span className="grid size-9 place-items-center rounded-lg bg-soft text-primary shrink-0"><MapPin className="size-4" /></span>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{o.city} <span className="text-muted-foreground font-normal">· {o.role}</span></div>
                      <div className="text-sm text-muted-foreground">{o.addr}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3] bg-soft relative">
              <div className="absolute inset-0 grid place-items-center text-center p-6">
                <div>
                  <MapPin className="size-8 mx-auto text-primary" />
                  <p className="mt-3 text-sm text-muted-foreground">Interactive map available on request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error, className }: { label: string; name: string; type?: string; error?: string; className?: string }) {
  return (
    <div className={className}>
      <Label htmlFor={name} className="text-sm font-medium">{label}</Label>
      <Input id={name} name={name} type={type} className="mt-2" aria-invalid={!!error} />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
