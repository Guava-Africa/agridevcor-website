import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Logo } from "@/components/brand/Logo";

const socials = [
  { href: "https://facebook.com/", label: "Facebook", Icon: FaFacebookF },
  { href: "https://instagram.com/", label: "Instagram", Icon: FaInstagram },
  { href: "https://linkedin.com/", label: "LinkedIn", Icon: FaLinkedinIn },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground mt-24">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />

          <p className="mt-5 text-sm text-white/70 max-w-xs leading-relaxed">
            Growing a better tomorrow through sustainable agriculture, climate-smart
            innovation, and inclusive rural development.
          </p>
          <ul className="mt-6 flex items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center size-9 rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/90">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/90">Practice areas</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Climate-Smart Agriculture</li>
            <li>Irrigation & Water</li>
            <li>Agribusiness Advisory</li>
            <li>Training & Capacity</li>
            <li>Monitoring & Evaluation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/90">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="size-4 mt-0.5 shrink-0 text-accent" />
              <span>Harare, Zimbabwe</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="size-4 shrink-0 text-accent" />
              <a href="mailto:hello@agridevcor.com" className="hover:text-white transition-colors">hello@agridevcor.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="size-4 shrink-0 text-accent" />
              <a href="tel:+263242257156" className="hover:text-white transition-colors">+263 (0) 242-257156</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} AgriDevcor. All rights reserved.</p>
          <p>Sustainability · Innovation · Impact</p>
        </div>
      </div>
    </footer>
  );
}
