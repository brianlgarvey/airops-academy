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
  { startIndex: 1, intervalMs: 7200 },
  { startIndex: 2, intervalMs: 7900 },
];

function TestimonialCard({ startIndex, intervalMs }: Card) {
  const [index, setIndex] = useState(startIndex);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + cards.length) % hero.highlights.length);
        setVisible(true);
      }, 450);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs]);

  const highlight = hero.highlights[index];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm h-full min-h-[260px] flex flex-col">
      <div
        className={`flex flex-col h-full transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Badge */}
        <span
          className={`inline-block self-start text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${
            highlight.type === "build"
              ? "bg-stone-900 text-white"
              : "bg-stone-100 text-stone-500 border border-stone-200"
          }`}
        >
          {highlight.type === "build" ? "What they built" : "Feedback"}
        </span>

        {/* Quote */}
        <p className="text-[14px] text-stone-600 leading-relaxed flex-1">
          &ldquo;{highlight.quote}&rdquo;
        </p>

        {/* Face + name */}
        <div className="mt-5 pt-5 border-t border-stone-100 flex items-center gap-3">
          <Image
            src={highlight.avatar}
            alt={highlight.name}
            width={40}
            height={40}
            className="rounded-full object-cover ring-2 ring-white"
            unoptimized
          />
          <div>
            <p className="text-[13px] font-semibold text-stone-900">
              {highlight.name}
            </p>
            <p className="text-[12px] text-stone-400">{highlight.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsRotating() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-3">
            In the room
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
            What operators are building and saying.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <TestimonialCard
              key={i}
              startIndex={card.startIndex}
              intervalMs={card.intervalMs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
