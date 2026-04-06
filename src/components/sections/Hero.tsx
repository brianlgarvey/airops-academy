"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { hero } from "@/content/siteContent";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIndex((i) => (i + 1) % hero.highlights.length);
        setVisible(true);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const highlight = hero.highlights[activeIndex];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
          {/* Left — copy */}
          <div className="max-w-xl lg:flex-1">
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

          {/* Right — featured spotlight */}
          <div className="mt-14 lg:mt-0 lg:w-[380px] lg:flex-shrink-0">
            <div
              className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
            >
              {/* Quote at top */}
              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                {/* Type badge */}
                <span
                  className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${
                    highlight.type === "build"
                      ? "bg-stone-900 text-white"
                      : "bg-stone-100 text-stone-500 border border-stone-200"
                  }`}
                >
                  {highlight.type === "build" ? "What they built" : "Feedback"}
                </span>

                <p className="text-[15px] text-stone-600 leading-relaxed">
                  &ldquo;{highlight.quote}&rdquo;
                </p>
              </div>

              {/* Face + name below */}
              <div className="mt-5 flex items-center gap-4 justify-center">
                <Image
                  src={highlight.avatar}
                  alt={highlight.name}
                  width={140}
                  height={140}
                  className="rounded-full object-cover shadow-lg ring-4 ring-white"
                  unoptimized
                />
                <div>
                  <p className="text-[16px] font-semibold text-stone-900">
                    {highlight.name}
                  </p>
                  <p className="text-[13px] text-stone-400">
                    {highlight.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="mt-6 flex gap-1.5 justify-center">
              {hero.highlights.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setVisible(false);
                    setTimeout(() => {
                      setActiveIndex(i);
                      setVisible(true);
                    }, 300);
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
