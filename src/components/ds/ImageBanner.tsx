import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

interface ImageBannerProps {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "right";
  className?: string;
}

export function ImageBanner({
  image,
  alt,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: ImageBannerProps) {
  const imageFirst = align === "left";

  return (
    <div
      className={cn(
        "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center",
        className,
      )}
    >
      <ScrollReveal className={cn(!imageFirst && "lg:order-2")}>
        <div className="relative group">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120} className={cn(!imageFirst && "lg:order-1")}>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </ScrollReveal>
    </div>
  );
}
