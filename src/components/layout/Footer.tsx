import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Logo } from "@/components/brand/Logo";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { NewsletterForm } from "@/components/ds/NewsletterForm";

const socials = [
  { href: "https://facebook.com/", label: "Facebook", Icon: FaFacebookF },
  { href: "https://instagram.com/", label: "Instagram", Icon: FaInstagram },
  { href: "https://linkedin.com/", label: "LinkedIn", Icon: FaLinkedinIn },
];

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/community-farming", label: "Community Farming" },
  { to: "/gallery", label: "Gallery" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

const products = [
  { label: "Climate-Smart Irrigation", to: "/products" },
  { label: "Community Farming", to: "/community-farming" },
  { label: "Greenhouse Production", to: "/products" },
  { label: "Sorghum Value Chain", to: "/products" },
  { label: "Post-Harvest Programs", to: "/products" },
];

const services = [
  { label: "Agricultural Consultancy", to: "/services" },
  { label: "Farm Development", to: "/services" },
  { label: "Irrigation Solutions", to: "/services" },
  { label: "Training Programs", to: "/services" },
  { label: "Monitoring & Evaluation", to: "/services" },
];

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#041a0e] text-white grain">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.45_0.13_152/0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 container-px mx-auto max-w-7xl py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <ScrollReveal className="lg:col-span-2">
            <Logo variant="light" imgClassName="h-20 md:h-24 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Growing a better tomorrow through sustainable agriculture,
              climate-smart innovation, and inclusive rural development across Africa.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="size-4" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1 transition-colors hover:text-white"
                  >
                    <FaArrowRight className="size-3 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white/90">
              Products
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              {products.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white/90">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              {services.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white/90">
              Stay Connected
            </h3>
            <p className="mb-4 text-sm text-white/60">
              Agricultural insights, project updates and industry trends.
            </p>
            <NewsletterForm variant="dark" />

            <ul className="mt-6 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-accent" aria-hidden />
                <span>55 Lawley Avenue Belvedere, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-accent" aria-hidden />
                <a href="mailto:info@agridevcor.com" className="hover:text-white transition-colors">
                  info@agridevcor.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-accent" aria-hidden />
                <a href="tel:+263242257156" className="hover:text-white transition-colors">
                  +263 (0) 242-257156
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>

      {/* Animated separator */}
      <div className="relative z-10" aria-hidden>
        <div className="container-px mx-auto max-w-7xl">
          <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/8">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} AgriDevcor. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-white/45">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>

          <p className="text-xs text-white/50">
            Powered by{" "}
            <motion.a
              href="https://guava.africa"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/75 underline decoration-white/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              whileHover={{ y: -1 }}
            >
              Guava Africa
            </motion.a>
          </p>
        </div>
      </div>
    </footer>
  );
}
