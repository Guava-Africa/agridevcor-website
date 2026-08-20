import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ease, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface TimelineStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  stat?: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={cn("relative", className)}>
      {/* Connecting line */}
      <div
        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:-translate-x-px"
        aria-hidden
      />

      <ol className="space-y-16 md:space-y-24">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          const Icon = step.icon;

          return (
            <li key={step.id} className="relative">
              <motion.div
                initial={{ opacity: 0, y: reducedMotion ? 0 : 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={transition(index * 60, reducedMotion, "slow")}
                className={cn(
                  "grid md:grid-cols-2 gap-8 md:gap-16 items-center",
                  !isEven && "md:[direction:rtl] md:[&>*]:![direction:ltr]",
                )}
              >
                {/* Content */}
                <div className={cn("pl-16 md:pl-0", !isEven && "md:text-right")}>
                  <span className="eyebrow">{`Step ${String(index + 1).padStart(2, "0")}`}</span>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg md:max-w-none">
                    {step.description}
                  </p>
                  {step.stat && (
                    <motion.p
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, ease: ease.premium }}
                      className="mt-4 inline-flex items-center rounded-full bg-soft px-4 py-1.5 text-sm font-semibold text-primary"
                    >
                      {step.stat}
                    </motion.p>
                  )}
                </div>

                {/* Icon node */}
                <div className="relative pl-16 md:pl-0 flex md:justify-center">
                  <motion.div
                    initial={{ scale: reducedMotion ? 1 : 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ ...transition(index * 80, reducedMotion), type: "spring", stiffness: 200, damping: 24 }}
                    className="relative z-10 grid size-16 md:size-20 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-elegant"
                  >
                    <Icon className="size-8 md:size-9" aria-hidden />
                  </motion.div>
                </div>
              </motion.div>

              {/* Mobile + desktop node dot on line */}
              <div
                className="absolute left-6 md:left-1/2 top-8 md:top-1/2 size-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:-translate-y-1/2"
                aria-hidden
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
