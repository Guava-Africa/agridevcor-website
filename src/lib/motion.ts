/** Unified motion presets for consistent premium animations. */
export const ease = {
  premium: [0.22, 1, 0.36, 1] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
};

export const spring = {
  gentle: { type: "spring" as const, stiffness: 120, damping: 20 },
  confident: { type: "spring" as const, stiffness: 200, damping: 28 },
  snappy: { type: "spring" as const, stiffness: 400, damping: 30 },
};

export const duration = {
  fast: 0.35,
  normal: 0.6,
  slow: 0.85,
  hero: 1.2,
};

export const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export function transition(
  delay = 0,
  reducedMotion = false,
  preset: "normal" | "slow" | "fast" = "normal",
) {
  if (reducedMotion) {
    return { duration: 0.01, delay: 0 };
  }
  return {
    duration: duration[preset],
    delay: delay / 1000,
    ease: ease.premium,
  };
}
