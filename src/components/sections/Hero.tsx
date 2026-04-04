"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { hero } from "@/content/siteContent";

const avatarColors = [
  "bg-stone-800",
  "bg-stone-600",
  "bg-stone-700",
  "bg-stone-500",
  "bg-stone-900",
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex((i) => (i + 1) % hero.highlights.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const highlight = hero.highlights[activeIndex];
  const initials = highlight.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left — copy */}
          <div className="max-w-2xl lg:flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-semibold tracking-tight leading-[1.1] text-stone-900">
              {hero.headline}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-500 leading-relaxed">
              {hero.subheadline}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-lg bg-stone-900 px-7 py-3 text-[15px] font-medium text-white hover:bg-stone-700 transition-all"
              >
                {hero.primaryCta.label}
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-7 py-3 text-[15px] font-medium text-stone-600 hover:border-stone-400 hover:text-stone-900 transition-all"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Right — rotating testimonial card */}
          <div className="mt-12 lg:mt-0 lg:w-[340px] lg:flex-shrink-0">
            <div
              className={`transition-opacity duration-400 ${visible ? "opacity-100" : "opacity-0"}`}
            >
              {/* Speech bubble */}
              <div className="relative rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                {/* Bubble tail */}
                <div className="absolute -bottom-2 left-10 h-4 w-4 rotate-45 border-b border-r border-stone-200 bg-white" />

                <p className="text-[15px] text-stone-600 leading-relaxed italic">
                  &ldquo;{highlight.quote}&rdquo;
                </p>
              </div>

              {/* Avatar + name */}
              <div className="mt-5 flex items-center gap-3 pl-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-semibold text-white ${avatarColors[activeIndex % avatarColors.length]}`}
                >
                  {initials}
                </div>
                <div>
                  <p className="text-[14px] font-medium text-stone-900">
                    {highlight.name}
                  </p>
                  <p className="text-[13px] text-stone-400">
                    {highlight.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="mt-6 flex gap-1.5 pl-2">
              {hero.highlights.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setVisible(false);
                    setTimeout(() => {
                      setActiveIndex(i);
                      setVisible(true);
                    }, 200);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-5 bg-stone-900"
                      : "w-1.5 bg-stone-300 hover:bg-stone-400"
                  }`}
                  aria-label={`Show highlight ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
