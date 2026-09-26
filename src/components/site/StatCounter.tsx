import { useEffect, useRef, useState } from "react";

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  note?: string;
  /** Set for years or other values that should not use a thousands separator. */
  plain?: boolean;
};


function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active);

  return (
    <div className="rule-accent">
      <p className="font-display text-4xl leading-none text-primary md:text-5xl">
        {stat.prefix}
        {stat.plain ? String(value) : value.toLocaleString("en-US")}
        {stat.suffix}
      </p>
      <p className="mt-3 text-sm font-semibold text-primary">{stat.label}</p>
      {stat.note ? (
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.note}</p>
      ) : null}
    </div>
  );
}

export function StatGrid({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} active={active} />
      ))}
    </div>
  );
}
