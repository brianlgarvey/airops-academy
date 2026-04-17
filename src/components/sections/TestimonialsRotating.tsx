"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { hero } from "@/content/siteContent";

type Card = {
  startIndex: number;
  intervalMs: number;
};

const cards: Card[] = [
  { startIndex: 0, intervalMs: 6500 },
  { startIndex: 1, intervalMs: 7400 },
  { startIndex: 2, intervalMs: 8100 },
];

function renderRichQuote(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-stone-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function TestimonialCard({ startIndex, intervalMs }: Card) {
  const [index, setIndex] = useState(startIndex);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + cards.length) % hero.highlights.length);
        setVisible(true);
      }, 500);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs]);

  const highlight = hero.highlights[index];

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <div
        className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex items-start gap-3">
          <Image
            src={highlight.avatar}
            alt={highlight.name}
            width={36}
            height={36}
            className="rounded-full object-cover ring-2 ring-white flex-shrink-0 mt-0.5"
            unoptimized
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <p className="text-[12px] font-semibold text-stone-900 leading-none">
                {highlight.name}
              </p>
              <span className="text-stone-300 leading-none">·</span>
              <p className="text-[11px] text-stone-400 leading-none">
                {highlight.role}
              </p>
              <span
                className={`ml-auto text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                  highlight.type === "build"
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-500"
                }`}
              >
                {highlight.type === "build" ? "Built" : "Feedback"}
              </span>
            </div>
            <p className="text-[13px] text-stone-600 leading-relaxed">
              &ldquo;{renderRichQuote(highlight.quote)}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsRotating() {
  return (
    <div className="space-y-3">
      {cards.map((card, i) => (
        <TestimonialCard
          key={i}
          startIndex={card.startIndex}
          intervalMs={card.intervalMs}
        />
      ))}
    </div>
  );
}
