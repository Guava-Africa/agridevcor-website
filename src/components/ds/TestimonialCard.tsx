import { Quote } from "lucide-react";
import { GlassCard } from "@/components/motion/GlassCard";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  text: string;
  author: string;
  location?: string;
  className?: string;
}

export function TestimonialCard({ text, author, location, className }: TestimonialCardProps) {
  return (
    <GlassCard className={cn("p-8 h-full bg-card", className)}>
      <Quote className="size-8 text-primary/30 mb-4" aria-hidden />
      <blockquote className="text-foreground text-lg leading-relaxed mb-6">
        &ldquo;{text}&rdquo;
      </blockquote>
      <footer className="text-sm text-muted-foreground">
        <cite className="font-semibold text-foreground not-italic">{author}</cite>
        {location && <span> · {location}</span>}
      </footer>
    </GlassCard>
  );
}
