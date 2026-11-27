import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 18, label: "Guest rooms", suffix: "" },
  { value: 10000, label: "Sattvic dining hall", suffix: " sq ft" },
  { value: 1.5, label: "Walking & jogging track", suffix: " km", decimal: true },
  { value: 21, label: "Recommended extended stay", suffix: " nights" },
];

function Counter({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 900);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const text = decimal
    ? n.toLocaleString("en-IN", { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    : Math.round(n).toLocaleString("en-IN");
  return (
    <strong ref={ref} className="font-serif text-4xl lg:text-5xl text-forest font-normal">
      {text}
      {suffix}
    </strong>
  );
}

export default function StatBand() {
  return (
    <section className="bg-cream-dark border-y border-line py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <Counter value={s.value} suffix={s.suffix} decimal={s.decimal} />
            <p className="mt-2 text-xs tracking-[0.2em] uppercase text-text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
