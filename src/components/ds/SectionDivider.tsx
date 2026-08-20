import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "wave" | "dots" | "line";
  className?: string;
}

export function SectionDivider({ variant = "wave", className }: SectionDividerProps) {
  if (variant === "dots") {
    return (
      <div
        className={cn("flex justify-center gap-2 py-8", className)}
        aria-hidden
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="size-1.5 rounded-full bg-primary/30"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className={cn("container-px mx-auto max-w-7xl py-8", className)} aria-hidden>
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    );
  }

  return (
    <div className={cn("relative h-12 overflow-hidden", className)} aria-hidden>
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full h-12 text-soft"
        preserveAspectRatio="none"
      >
        <path
          d="M0 48V24C240 0 480 0 720 24C960 48 1200 48 1440 24V48H0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
