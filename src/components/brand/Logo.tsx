import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/agridevcor-logo.png.asset.json";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "light";
  withTagline?: boolean;
  className?: string;
  imgClassName?: string;
  asLink?: boolean;
}

export function Logo({
  variant = "default",
  withTagline = false,
  className,
  imgClassName,
  asLink = true,
}: LogoProps) {
  const img = (
    <img
      src={logoAsset.url}
      alt="AgriDevcor — Growing a better tomorrow"
      width={1920}
      height={820}
      className={cn(
        "h-9 md:h-10 w-auto object-contain select-none",
        variant === "light" && "brightness-0 invert",
        imgClassName,
      )}
      draggable={false}
    />
  );

  const content = (
    <span className={cn("inline-flex items-center", className)}>
      {img}
      {withTagline && (
        <span className="sr-only">AgriDevcor — Growing a better tomorrow</span>
      )}
    </span>
  );

  if (!asLink) return content;
  return (
    <Link to="/" aria-label="AgriDevcor home" className="inline-flex items-center">
      {content}
    </Link>
  );
}
