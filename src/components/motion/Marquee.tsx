import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
}

export function Marquee({ children, className, speed = "normal", reverse = false }: MarqueeProps) {
  const duration = speed === "slow" ? "60s" : speed === "fast" ? "20s" : "35s";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div
        className="flex w-max gap-8"
        style={{
          animation: `marquee ${duration} linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
