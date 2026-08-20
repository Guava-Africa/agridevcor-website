import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionShell } from "@/components/motion/SectionShell";
import { cn } from "@/lib/utils";

export interface CtaAction {
  label: string;
  to: string;
  variant?: "primary" | "outline";
}

interface CTASectionProps {
  icon?: LucideIcon;
  title: ReactNode;
  description: string;
  actions: CtaAction[];
  variant?: "dark" | "gradient";
  className?: string;
}

export function CTASection({
  icon: Icon,
  title,
  description,
  actions,
  variant = "dark",
  className,
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <SectionShell variant={variant} className={className}>
      <div className="container-px mx-auto max-w-4xl text-center">
        <ScrollReveal>
          {Icon && (
            <Icon
              className={cn(
                "size-10 mx-auto mb-6",
                isDark ? "text-primary-light" : "text-primary",
              )}
              aria-hidden
            />
          )}
          <h2
            className={cn(
              "text-3xl md:text-5xl font-bold text-balance",
              isDark ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mt-6 text-lg max-w-2xl mx-auto",
              isDark ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {actions.map((action, i) => (
              <Button
                key={action.label}
                asChild
                size="lg"
                variant={action.variant === "outline" ? "outline" : "default"}
                className={cn(
                  "rounded-full px-8 font-semibold transition-all duration-300 hover:scale-[1.02]",
                  action.variant === "outline" && isDark &&
                    "border-white/30 text-white hover:bg-white/10 bg-transparent",
                  action.variant === "outline" && !isDark &&
                    "border-border",
                  (!action.variant || action.variant === "primary") && isDark &&
                    "bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl",
                )}
              >
                <Link to={action.to}>
                  {action.label}
                  {i === 0 && action.variant !== "outline" && (
                    <ArrowRight className="ml-2 size-4" />
                  )}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
