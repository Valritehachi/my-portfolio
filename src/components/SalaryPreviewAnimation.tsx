"use client";
import { useEffect, useRef, useState } from "react";

const scenarios = [
  { salary: 95000,  tax: 16290, afterTax: 67234, monthly: 5603, city: "NYC" },
  { salary: 120000, tax: 24800, afterTax: 82400, monthly: 6867, city: "SF"  },
  { salary: 75000,  tax: 11200, afterTax: 55800, monthly: 4650, city: "ATL" },
  { salary: 150000, tax: 35400, afterTax: 99600, monthly: 8300, city: "SEA" },
];

function AnimatedNum({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    const from = prevRef.current;
    prevRef.current = value;
    if (from === value) return;

    const startTime = Date.now();
    const duration = 700;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [value]);

  return <>{display.toLocaleString()}</>;
}

export default function SalaryPreviewAnimation() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % scenarios.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const s = scenarios[idx];

  return (
    <div
      className="w-full h-full flex items-center justify-center p-5"
      style={{ backgroundColor: "#0d0d0d", fontFamily: "ui-monospace, monospace" }}
    >
      <div style={{ fontSize: "0.8em", lineHeight: 2 }}>
        <div style={{ color: "#8eaf8e", marginBottom: "10px", fontSize: "0.85em" }}>
          $ calculate --salary {s.salary.toLocaleString()} --city {s.city}
        </div>
        <div style={{ color: "#888" }}>
          Base salary: &nbsp;
          <span style={{ color: "#fff", fontWeight: "bold" }}>
            $<AnimatedNum value={s.salary} />/yr
          </span>
        </div>
        <div style={{ color: "#888" }}>
          Federal tax: &nbsp;
          <span style={{ color: "#f87171" }}>
            $<AnimatedNum value={s.tax} />
          </span>
        </div>
        <div style={{ color: "#888" }}>
          After-tax: &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#4ade80", fontWeight: "bold" }}>
            $<AnimatedNum value={s.afterTax} />/yr
          </span>
        </div>
        <div style={{ color: "#888" }}>
          Take-home: &nbsp;&nbsp;
          <span style={{ color: "#60a5fa", fontWeight: "bold" }}>
            $<AnimatedNum value={s.monthly} />/mo
          </span>
        </div>
      </div>
    </div>
  );
}
