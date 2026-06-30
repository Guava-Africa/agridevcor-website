import { cn } from "@/lib/utils";

export function GradientOrbs({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-primary/8 blur-[100px] animate-blob" />
      <div className="absolute -bottom-40 -left-40 size-[400px] rounded-full bg-accent/6 blur-[90px] animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary-light/5 blur-[120px] animate-blob animation-delay-4000" />
    </div>
  );
}
