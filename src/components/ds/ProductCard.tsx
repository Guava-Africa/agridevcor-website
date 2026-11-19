import { PhotoCredit } from "@/components/ds/PhotoCredit";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  tag?: string;
  href?: string;
  className?: string;
}

export function ProductCard({
  image,
  title,
  description,
  tag,
  href = "/products",
  className,
}: ProductCardProps) {
  return (
    <div>
      <Link
        to={href}
        className={cn(
          "group block rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant card-hover",
          className,
        )}
      >
        <div className="relative grid aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
          {tag && (
            <span className="absolute top-4 left-4 rounded-full glass-light text-primary text-xs font-semibold px-4 py-1.5">
              {tag}
            </span>
          )}
          <div className="relative self-end p-8 pt-24 text-white">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/85">{description}</p>
          </div>
        </div>
      </Link>
      <PhotoCredit image={image} />
    </div>
  );
}
