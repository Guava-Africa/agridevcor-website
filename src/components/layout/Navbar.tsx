import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { TopBar } from "@/components/layout/TopBar";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

const socials = [
  { href: "https://facebook.com/", label: "Facebook", Icon: FaFacebookF },
  { href: "https://instagram.com/", label: "Instagram", Icon: FaInstagram },
  { href: "https://linkedin.com/", label: "LinkedIn", Icon: FaLinkedinIn },
];

export function Navbar({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const isHomePage = pathname === "/";


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = !isHomePage || scrolled;

  console.log(
  "pathname:", pathname,
  "isHomePage:", isHomePage,
  "scrolled:", scrolled,
  "solid:", solid
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <TopBar />
      <div
        className={cn(
          "transition-all duration-300",
          solid
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="container-px mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between transition-all duration-300"
        >
          <Logo
               variant={solid ? "green" : "light"}
               imgClassName={cn(
              "w-auto object-contain transition-all duration-300",
               solid
              ? "h-30 md:h-20 lg:h-50"
              : "h-30 md:h-28 lg:h-50"
  )}
/>

          <ul className="hidden lg:flex items-center gap-5">
  {nav.map((item) => (
    <li key={item.to}>
      <Link
        to={item.to}
        activeOptions={{ exact: item.to === "/" }}
        className={cn(
          "group flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
          solid
            ? "text-foreground/80 hover:text-primary hover:bg-soft"
            : "text-white/90 hover:text-white hover:bg-white/10"
        )}
        activeProps={{
          className: solid
            ? "text-primary bg-soft"
            : "text-white bg-white/15"
        }}
      >
        {({ isActive }) => {
          const isHome = item.to === "/";

          return (
            <>
              <span>{item.label}</span>

              {/* Hide Home arrow when on Home page */}
              {!(isHome && isActive) && (
                isActive ? (
                  <ChevronUp
                    className={cn(
                      "h-3.5 w-3.5 transition-all duration-200",
                      solid ? "text-[#006400]" : "text-white"
                    )}
                  />
                ) : (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-all duration-200",
                      solid ? "text-[#006400]" : "text-white"
                    )}
                  />
                )
              )}
            </>
          );
        }}
      </Link>
    </li>
  ))}
</ul>
 
          <div className="hidden lg:block">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft">
              <Link to="/contact">Become A Partner</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden inline-flex items-center justify-center size-11 rounded-md transition-colors",
              solid ? "text-foreground hover:bg-soft" : "text-white hover:bg-white/10 bg-white/10 backdrop-blur",
            )}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={cn(
            "absolute top-0 right-0 h-full w-[85%] max-w-sm bg-background shadow-2xl flex flex-col transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-border">
            <Logo 
              variant= "green"
              imgClassName="h-12 md:h-14 w-auto object-contain"
                  
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="size-10 inline-flex items-center justify-center rounded-md text-foreground hover:bg-soft"
            >
              <X className="size-5" />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
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
          </ul>
          <div className="px-6 py-5 border-t border-border space-y-4">
            <Button asChild className="w-full rounded-full bg-primary hover:bg-primary-dark text-primary-foreground">
              <Link to="/contact" onClick={() => setOpen(false)}>Get Started</Link>
            </Button>
            <a
              href="tel:+263242257156"
              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary"
            >
              <FaPhoneAlt className="size-3.5 text-primary" />
              <span className="font-medium">+263 (0) 242-257156</span>
            </a>
            <div className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center size-9 rounded-full bg-soft text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
