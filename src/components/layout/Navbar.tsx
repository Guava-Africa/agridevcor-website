import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
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

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <TopBar />
      <motion.div
        initial={false}
        animate={{
          backgroundColor: solid ? "oklch(0.99 0.005 150 / 0.88)" : "transparent",
          borderBottomWidth: solid ? 1 : 0,
          backdropFilter: solid ? "blur(20px)" : "blur(0px)",
        }}
        transition={{ duration: 0.35 }}
        className={cn(
          "border-border/60",
          solid && "shadow-[0_4px_30px_-10px_rgba(0,0,0,0.08)]",
        )}
      >
        <nav
          aria-label="Primary"
          className="container-px mx-auto flex h-18 md:h-20 max-w-7xl items-center justify-between"
        >
          <Logo
            variant={solid ? "green" : "light"}
            imgClassName={cn(
              "w-auto object-contain transition-all duration-300",
              solid ? "h-14 md:h-16" : "h-16 md:h-18",
            )}
          />

          <ul className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    solid
                      ? "text-foreground/75 hover:text-primary hover:bg-soft"
                      : "text-white/85 hover:text-white hover:bg-white/10",
                  )}
                  activeProps={{
                    className: solid
                      ? "text-primary bg-soft font-semibold"
                      : "text-white bg-white/15 font-semibold",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className={cn(
                "rounded-full border font-medium",
                solid
                  ? "border-border text-foreground hover:bg-soft"
                  : "border-white/25 bg-white/5 text-white hover:bg-white/15 backdrop-blur-sm",
              )}
            >
              <Link to="/contact">Contact</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <Link to="/contact">Become A Partner</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "lg:hidden inline-flex items-center justify-center size-11 rounded-xl transition-colors",
              solid ? "text-foreground hover:bg-soft" : "text-white hover:bg-white/10 glass",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-40 bg-foreground/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="lg:hidden fixed top-0 right-0 z-50 h-full w-[88%] max-w-sm bg-background shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-border">
                <Logo variant="green" imgClassName="h-12 w-auto object-contain" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="size-10 inline-flex items-center justify-center rounded-xl text-foreground hover:bg-soft"
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
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-foreground/85 hover:text-primary hover:bg-soft"
                      activeProps={{ className: "text-primary bg-soft font-semibold" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {item.label}
                      <ChevronDown className="size-4 -rotate-90 opacity-40" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-6 py-6 border-t border-border space-y-4">
                <Button asChild className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link to="/contact" onClick={() => setOpen(false)}>Become A Partner</Link>
                </Button>
                <a
                  href="tel:+263242257156"
                  className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary"
                >
                  <FaPhoneAlt className="size-3.5 text-primary" />
                  <span className="font-medium">+263 (0) 242-257156</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
