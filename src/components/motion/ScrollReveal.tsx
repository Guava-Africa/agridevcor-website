import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ease, reveal, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

const variants: Variants = reveal;

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  className,
  once = true,
  amount = 0.15,
}: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={transition(delay, reducedMotion)}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reducedMotion ? 0 : stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.premium } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
