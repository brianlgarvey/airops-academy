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
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm h-full min-h-[220px] flex flex-col">
      <div
        className={`flex flex-col h-full transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Badge */}
        <span
          className={`inline-block self-start text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${
            highlight.type === "build"
              ? "bg-stone-900 text-white"
              : "bg-stone-100 text-stone-500 border border-stone-200"
          }`}
        >
          {highlight.type === "build" ? "What they built" : "Feedback"}
        </span>

        {/* Quote */}
        <p className="text-[13px] text-stone-600 leading-relaxed flex-1">
          &ldquo;{renderRichQuote(highlight.quote)}&rdquo;
        </p>

        {/* Face + name */}
        <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-2.5">
          <Image
            src={highlight.avatar}
            alt={highlight.name}
            width={34}
            height={34}
            className="rounded-full object-cover ring-2 ring-white"
            unoptimized
          />
          <div>
            <p className="text-[12px] font-semibold text-stone-900">
              {highlight.name}
            </p>
            <p className="text-[11px] text-stone-400">{highlight.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsRotating() {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
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
