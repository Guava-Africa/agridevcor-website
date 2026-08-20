import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/motion/GlassCard";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  gradient?: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  linkLabel = "Learn More",
  gradient = "from-primary to-primary-dark",
  className,
}: FeatureCardProps) {
  return (
    <GlassCard
      className={cn(
        "group p-8 bg-gradient-to-br text-white border-0 h-full",
        gradient,
        className,
      )}
      dark
    >
      <div className="size-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="size-7" aria-hidden />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/85 leading-relaxed mb-6">{description}</p>
      {href && (
        <Link
          to={href}
          className="inline-flex items-center text-sm font-semibold text-white/90 hover:text-white transition-colors"
        >
          {linkLabel}
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </GlassCard>
  );
}
