import { Link } from "@tanstack/react-router";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground mt-24">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-lg bg-white/10">
              <Leaf className="size-5" />
            </span>
            <span className="font-display text-lg font-bold">AgriDevcor</span>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs leading-relaxed">
            Advancing sustainable agriculture, climate-smart innovation, and inclusive
            development for a resilient food future.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/90">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/insights" className="hover:text-white transition-colors">Insights</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/90">Practice areas</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Climate-Smart Agriculture</li>
            <li>Irrigation & Water</li>
            <li>Agribusiness Advisory</li>
            <li>Monitoring & Evaluation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-white/90">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 shrink-0" /> Nairobi · Kigali · Accra</li>
            <li className="flex items-center gap-3"><Mail className="size-4 shrink-0" /> hello@agridevcor.com</li>
            <li className="flex items-center gap-3"><Phone className="size-4 shrink-0" /> +254 700 000 000</li>
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
