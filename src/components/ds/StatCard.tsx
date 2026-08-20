import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

interface StatCardGridProps {
  stats: StatItem[];
  variant?: "dark" | "light";
  className?: string;
}

export function StatCardGrid({ stats, variant = "dark", className }: StatCardGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
        className,
      )}
    >
      {stats.map((stat, i) => (
        <ScrollReveal key={stat.label} delay={i * 80}>
          <p
            className={cn(
              "text-4xl md:text-5xl font-bold",
              variant === "dark" ? "text-primary-light" : "text-primary",
            )}
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </p>
          <p
            className={cn(
              "mt-2 text-sm uppercase tracking-wider",
              variant === "dark" ? "text-white/60" : "text-muted-foreground",
            )}
          >
            {stat.label}
          </p>
        </ScrollReveal>
      ))}
    </div>
  );
}
