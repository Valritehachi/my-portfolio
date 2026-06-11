"use client";
import { useEffect, useState } from "react";

export default function SlideshowPreview({ urls, title }: { urls: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % urls.length);
        setVisible(true);
      }, 350);
    }, 3200);
    return () => clearInterval(interval);
  }, [urls.length]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(urls[idx])}?w=800`}
        alt={`${title} screenshot`}
        className="w-full h-full object-cover"
        style={{ objectPosition: "50% 0%", transition: "opacity 0.35s ease-in-out", opacity: visible ? 1 : 0 }}
      />
      {/* Dot indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
        {urls.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setIdx(i); }}
            className="w-1.5 h-1.5 rounded-full transition-all duration-200"
            style={{ backgroundColor: i === idx ? "#fff" : "rgba(255,255,255,0.4)" }}
            aria-label={`View screenshot ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
