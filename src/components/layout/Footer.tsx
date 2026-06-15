import { Link } from "@tanstack/react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Logo } from "@/components/brand/Logo";

const socials = [
  { href: "https://facebook.com/", label: "Facebook", Icon: FaFacebookF },
  { href: "https://instagram.com/", label: "Instagram", Icon: FaInstagram },
  { href: "https://linkedin.com/", label: "LinkedIn", Icon: FaLinkedinIn },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative border-t border-emerald-500/20 bg-gradient-to-b from-primary-dark to-[#052d14] text-white"
    >

      {/* Main Footer */}
      <div className="container-px mx-auto max-w-7xl py-2 grid gap-12 md:grid-cols-2 lg:grid-cols-5 items-start">
        {/* Brand */}
        <div className="lg:pt-0">
          <Logo variant="light" 
          imgClassName="h-24 md:h-28 lg:h-32 w-auto"
          />

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Growing a better tomorrow through sustainable agriculture,
            climate-smart innovation, and inclusive rural development.
          </p>

          <ul className="mt-6 flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div className="lg:pt-12">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
            Explore
          </h3>

          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <Link
                to="/about"
                className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/gallery"
                className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                to="/insights"
                className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                Insights
              </Link>
            </li>
          </ul>
        </div>

        {/* Practice Areas */}
        <div className="lg:pt-12">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
            Practice Areas
          </h3>

          <ul className="space-y-3 text-sm text-white/70">
            <li>Climate-Smart Agriculture</li>
            <li>Irrigation & Water</li>
            <li>Agribusiness Advisory</li>
            <li>Training & Capacity Building</li>
            <li>Monitoring & Evaluation</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:pt-12">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
            Contact
          </h3>

          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-accent" />
              <span>Harare, Zimbabwe</span>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="shrink-0 text-accent" />
              <a
                href="mailto:info@agridevcor.com"
                className="transition-colors hover:text-white"
              >
                info@agridevcor.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="shrink-0 text-accent" />
              <a
                href="tel:+263242257156"
                className="transition-colors hover:text-white"
              >
                +263 (0) 242-257156
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:pt-12">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
            Newsletter
          </h3>

          <p className="mb-4 text-sm text-white/70">
            Get the latest agricultural insights, project updates and industry
            trends.
          </p>

          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.02]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} AgriDevcor. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-white/60">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>

          <p className="text-xs text-white/60">
            Sustainability · Innovation · Impact
          </p>
        </div>
      </div>
    </footer>
  );
}