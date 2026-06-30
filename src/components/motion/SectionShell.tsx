import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { GradientOrbs } from "./GradientOrbs";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "soft" | "dark" | "gradient";
  orbs?: boolean;
  id?: string;
}

export function SectionShell({
  children,
  className,
  variant = "light",
  orbs = false,
  id,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-y relative overflow-hidden",
        variant === "soft" && "bg-soft",
        variant === "dark" && "bg-primary-dark text-white",
        variant === "gradient" && "bg-gradient-to-b from-soft to-background",
        className,
      )}
    >
      {orbs && <GradientOrbs />}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
