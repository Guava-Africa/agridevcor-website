import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}

export function GlassCard({ children, className, hover = true, dark = false }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "rounded-3xl border backdrop-blur-xl transition-shadow duration-500",
        hover && "group",
        dark
          ? "border-white/10 bg-white/5 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)] hover:shadow-[0_32px_90px_-20px_rgba(0,0,0,0.6)]"
          : "border-white/40 bg-white/70 shadow-soft hover:shadow-elegant",
        hover && "hover:border-primary/20",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function FloatingGlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/15 bg-black/40 p-6 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
