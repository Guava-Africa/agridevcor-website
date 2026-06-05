import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const decimals = Number.isInteger(target) ? 0 : 1;
    const factor = Math.pow(10, decimals);
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased * factor) / factor);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return n;
}

function Stat({ value, suffix = "", prefix = "", label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, visible);
  const display = Number.isInteger(value) ? n.toLocaleString() : n.toFixed(1);
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-3xl md:text-5xl font-bold tracking-tight text-primary-dark tabular-nums">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const stats: StatProps[] = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 32, label: "Countries reached" },
  { value: 1.4, suffix: "M", label: "Smallholders impacted" },
  { value: 480, prefix: "$", suffix: "M", label: "Investment mobilized" },
];

export function StatsCounter() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-px mx-auto max-w-7xl py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-y-10">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
