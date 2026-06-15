import { Link } from "@tanstack/react-router";
import whiteLogo from "@/assets/agridevcorlogo.png";
import greenLogo from "@/assets/agridevcorlogo-green.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  withTagline?: boolean;
  className?: string;
  imgClassName?: string;
  asLink?: boolean;
  variant?: "light" | "green";
}

export function Logo({
  withTagline = false,
  className,
  imgClassName,
  asLink = true,
  variant = "green",
}: LogoProps) {
  const content = (
    <span
      className={cn(
        "inline-flex items-center group",
        className
      )}
    >
      <img
        src={variant === "light" ? whiteLogo : greenLogo}
        alt="AgriDevcor — Growing a better tomorrow"
        draggable={false}
        className={cn(
          `
          h-24
          md:h-32
          lg:h-40
          w-auto
          object-contain
          select-none
          transition-all
          duration-300
          group-hover:scale-105
          `,
          imgClassName
        )}
      />

      {withTagline && (
        <span className="sr-only">
          AgriDevcor — Growing a better tomorrow
        </span>
      )}
    </span>
  );

  if (!asLink) return content;

  return (
    <Link
      to="/"
      aria-label="AgriDevcor Home"
      className="inline-flex items-center"
    >
      {content}
    </Link>
  );
}