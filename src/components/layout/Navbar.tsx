import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparentOnTop || scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        solid
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="container-px mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between"
      >
        <Link to="/" className="flex items-center gap-2 group" aria-label="AgriDevcor home">
          <span
            className={cn(
              "grid size-9 place-items-center rounded-lg transition-colors",
              solid ? "bg-primary text-primary-foreground" : "bg-white/15 text-white backdrop-blur",
            )}
          >
            <Leaf className="size-5" />
          </span>
          <span
            className={cn(
              "font-display text-lg font-bold tracking-tight",
              solid ? "text-foreground" : "text-white",
            )}
          >
            AgriDevcor
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  solid
                    ? "text-foreground/80 hover:text-primary hover:bg-soft"
                    : "text-white/85 hover:text-white hover:bg-white/10",
                )}
                activeProps={{
                  className: solid
                    ? "text-primary bg-soft"
                    : "text-white bg-white/15",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "lg:hidden inline-flex items-center justify-center size-11 rounded-md transition-colors",
            solid ? "text-foreground hover:bg-soft" : "text-white hover:bg-white/10",
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container-px mx-auto max-w-7xl py-4 space-y-1">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-foreground/85 hover:text-primary hover:bg-soft"
                  activeProps={{ className: "text-primary bg-soft" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full rounded-full bg-primary hover:bg-primary-dark text-primary-foreground">
                <Link to="/contact" onClick={() => setOpen(false)}>Get Started</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
