import { PhotoCredit } from "@/components/ds/PhotoCredit";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export interface HeroCta {
  label: string;
  to: string;
  variant?: "primary" | "outline" | "ghost";
}

export interface Breadcrumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  image: string;
  video?: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  breadcrumbs?: Breadcrumb[];
  ctas?: HeroCta[];
  floatingCard?: ReactNode;
  badges?: string[];
  className?: string;
  minHeight?: string;
}

export function PageHero({
  image,
  video,
  eyebrow,
  title,
  description,
  breadcrumbs,
  ctas,
  floatingCard,
  badges,
  className,
  minHeight = "min-h-[75vh]",
}: PageHeroProps) {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: MouseEvent) {
    if (reducedMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative isolate flex items-center overflow-hidden grain",
        minHeight,
        className,
      )}
    >
      {/* Background media */}
      <div className="absolute inset-0">
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="size-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <motion.img
            src={image}
            alt=""
            initial={{ scale: reducedMotion ? 1 : 1.08 }}
            animate={{ scale: 1 }}
            style={reducedMotion ? undefined : { x: parallaxX, y: parallaxY }}
            transition={{ duration: 12, ease: "easeOut" }}
            className="size-full object-cover animate-ken-burns"
          />
        )}
      </div>

      {/* Decorative SVG curves */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full text-background/10"
        viewBox="0 0 1440 120"
        fill="none"
        aria-hidden
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="currentColor"
        />
      </svg>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.12_0.04_152/0.92)_0%,oklch(0.15_0.05_152/0.65)_50%,oklch(0.12_0.04_152/0.4)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.45_0.13_152/0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.1_0.03_250/0.5),transparent_50%)]" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-[480px] rounded-full bg-primary/20 blur-[100px] animate-blob" />
      <div className="pointer-events-none absolute -top-20 right-1/4 size-[320px] rounded-full bg-accent/10 blur-[80px] animate-blob animation-delay-4000" />

      <div className="relative container-px mx-auto max-w-7xl w-full pt-32 pb-20 md:pt-36 md:pb-28">
        <div className={cn("grid gap-12 lg:gap-16", floatingCard && "lg:grid-cols-[1fr_420px] lg:items-center")}>
          {/* Content */}
          <div className="max-w-3xl">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <motion.nav
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                aria-label="Breadcrumb"
                className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-white/60"
              >
                {breadcrumbs.map((crumb, i) => (
                  <span key={crumb.label} className="inline-flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="size-3.5 opacity-50" />}
                    {crumb.to ? (
                      <Link to={crumb.to} className="hover:text-white transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white/90">{crumb.label}</span>
                    )}
                  </span>
                ))}
              </motion.nav>
            )}

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-md"
            >
              {eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              {description}
            </motion.p>

            {badges && badges.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-6 flex flex-wrap gap-2"
              >
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
            )}

            {ctas && ctas.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                {ctas.map((cta, i) => (
                  <Button
                    key={cta.label}
                    asChild
                    size="lg"
                    className={cn(
                      "rounded-full h-11 px-6 text-sm font-semibold transition-all duration-300",
                      cta.variant === "outline" &&
                        "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm",
                      cta.variant === "ghost" &&
                        "text-white/70 hover:text-white hover:bg-white/10 underline-offset-4",
                      (!cta.variant || cta.variant === "primary") &&
                        (i === 0
                          ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                          : "bg-primary text-primary-foreground hover:bg-primary-dark"),
                    )}
                    variant={cta.variant === "outline" ? "outline" : cta.variant === "ghost" ? "ghost" : "default"}
                  >
                    <Link to={cta.to}>
                      {cta.label}
                      {i === 0 && cta.variant !== "ghost" && <ArrowRight className="ml-1.5 size-4" />}
                    </Link>
                  </Button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Floating card */}
          {floatingCard && (
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="animate-float">{floatingCard}</div>
            </motion.div>
          )}
        </div>
      </div>
      {!video && <PhotoCredit image={image} className="absolute bottom-3 left-6 right-6 z-10 m-0 w-fit rounded bg-black/60 px-3 py-1 text-white/90" />}
    </section>
  );
}
