"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { studyGroupsHome, hero } from "@/content/siteContent";
import { StudyGroupsWhy } from "@/components/sections/StudyGroupsWhy";

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

// Build a unified slides array: a sponsor slide is inserted after every N quotes
type QuoteSlide = { kind: "quote"; data: (typeof hero.highlights)[number] };
type SponsorSlide = {
  kind: "sponsor";
  data: (typeof studyGroupsHome.sponsors.items)[number];
};
type Slide = QuoteSlide | SponsorSlide;

function buildSlides(): Slide[] {
  const quotesPerSponsor = 3;
  const quotes: QuoteSlide[] = hero.highlights.map((h) => ({
    kind: "quote",
    data: h,
  }));
  const sponsors: SponsorSlide[] = studyGroupsHome.sponsors.items.map((s) => ({
    kind: "sponsor",
    data: s,
  }));

  const out: Slide[] = [];
  let sponsorIdx = 0;
  for (let i = 0; i < quotes.length; i++) {
    out.push(quotes[i]);
    if ((i + 1) % quotesPerSponsor === 0 && sponsors.length > 0) {
      out.push(sponsors[sponsorIdx % sponsors.length]);
      sponsorIdx++;
    }
  }
  // If total quotes don't divide evenly, append any remaining sponsors
  while (sponsorIdx < sponsors.length) {
    out.push(sponsors[sponsorIdx % sponsors.length]);
    sponsorIdx++;
  }
  return out;
}

const slides = buildSlides();

function FeaturedQuote() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setVisible(true);
      }, 500);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <div className="relative">
      {/* Callout card — swaps treatment for quote vs sponsor */}
      <div
        className={`relative rounded-2xl p-7 md:p-8 min-h-[340px] md:min-h-[360px] transition-colors duration-500 ${
          slide.kind === "sponsor"
            ? "bg-stone-900 border border-stone-900 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_12px_32px_-12px_rgba(12,10,9,0.35)]"
            : "bg-white border border-stone-200 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]"
        }`}
      >
        {/* Tail — right triangle with vertical edge on the LEFT.
            Built from two stacked triangles: border behind, fill on top.
            Uses right border = hypotenuse (transparent), top border = fill color. */}
        <div
          aria-hidden
          className="absolute left-10 -bottom-[36px] w-0 h-0 transition-colors duration-500"
          style={{
            borderRight: "36px solid transparent",
            borderTop: `36px solid ${
              slide.kind === "sponsor" ? "rgb(28, 25, 23)" : "rgb(231, 229, 228)"
            }`,
          }}
        />
        {/* Fill triangle — slightly smaller, offset to cover the border except at the hypotenuse edge */}
        <div
          aria-hidden
          className="absolute left-10 -bottom-[34px] w-0 h-0 transition-colors duration-500"
          style={{
            borderRight: "34px solid transparent",
            borderTop: `34px solid ${
              slide.kind === "sponsor" ? "rgb(28, 25, 23)" : "#ffffff"
            }`,
          }}
        />
        <div
          className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {/* Eyebrow — fixed height, reserved on every slide */}
          <div className="h-5 mb-4 flex items-center">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
              {slide.kind === "sponsor"
                ? "Sponsored by"
                : slide.data.type === "build"
                  ? "What participants are building"
                  : "What participants are saying"}
            </span>
          </div>

          {/* Body — matched min-height */}
          <div className="min-h-[168px] md:min-h-[140px] flex flex-col justify-center">
            {slide.kind === "quote" ? (
              <p className="text-lg md:text-xl text-stone-800 leading-relaxed">
                &ldquo;{renderRichQuote(slide.data.quote)}&rdquo;
              </p>
            ) : (
              <>
                <p className="text-2xl md:text-3xl font-semibold tracking-tight text-white leading-tight">
                  {slide.data.name}
                </p>
                <p className="mt-3 text-[15px] md:text-base text-stone-300 leading-relaxed">
                  {slide.data.description}
                </p>
              </>
            )}
          </div>

          {/* Footer — matched height */}
          <div
            className={`mt-6 pt-5 border-t min-h-[57px] flex items-center ${
              slide.kind === "sponsor"
                ? "border-stone-700/60"
                : "border-stone-100"
            }`}
          >
            {slide.kind === "quote" ? (
              <div className="flex items-center gap-3 w-full">
                <Image
                  src={slide.data.avatar}
                  alt={slide.data.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover ring-2 ring-white shadow-sm"
                  unoptimized
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-semibold text-stone-900">
                    {slide.data.name}
                  </p>
                  <p className="text-[13px] text-stone-400">
                    {slide.data.role}
                  </p>
                </div>
              </div>
            ) : (
              <a
                href={slide.data.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white hover:text-stone-300 transition-colors"
              >
                Visit {slide.data.name}
                <svg
                  className="h-3.5 w-3.5"
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
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-5 flex gap-1.5 justify-center">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => {
              setVisible(false);
              setTimeout(() => {
                setIndex(i);
                setVisible(true);
              }, 300);
            }}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "w-5 bg-stone-900"
                : "w-1.5 bg-stone-300 hover:bg-stone-400"
            }`}
            aria-label={
              s.kind === "sponsor"
                ? `Show sponsor ${s.data.name}`
                : `Show highlight ${i + 1}`
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <>
      {/* Hero — proposition left, featured quote right */}
      <section
        id="top"
        className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-stone-200/70"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — proposition */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-semibold tracking-tight leading-[1.1] text-stone-900">
                {studyGroupsHome.headline}
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-stone-500 leading-relaxed max-w-lg">
                {studyGroupsHome.subheadline}
              </p>

              <div className="mt-9">
                <Link
                  href="#invite-form"
                  className="inline-flex items-center justify-center rounded-lg bg-stone-900 px-8 py-3.5 text-[15px] font-medium text-white hover:bg-stone-700 transition-all"
                >
                  {studyGroupsHome.ctaLabel}
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
                <p className="mt-4 text-[13px] text-stone-400">
                  Completely free. Invite-only.
                </p>
              </div>
            </div>

            {/* Right — featured quote (seamless, no box) */}
            <div className="lg:pl-6">
              <FeaturedQuote />
            </div>
          </div>
        </div>
      </section>

      <StudyGroupsWhy />

      {/* Invite form at bottom */}
      <section
        id="invite-form"
        className="py-20 md:py-28 bg-stone-100 border-t border-stone-200/80"
      >
        <div className="mx-auto max-w-xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
              Ready to join?
            </h2>
            <p className="mt-4 text-lg text-stone-500 leading-relaxed">
              Request an invite and we&rsquo;ll follow up if it&rsquo;s a fit.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-7 md:p-9 shadow-sm">
            {submitted ? (
              <div className="text-center py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-white mx-auto mb-5">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">
                  Request received
                </h3>
                <p className="text-[15px] text-stone-500">
                  {studyGroupsHome.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {studyGroupsHome.fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-[13px] font-medium text-stone-700 mb-1.5"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-stone-400 ml-1">*</span>
                      )}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        rows={3}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-stone-200 bg-white px-3.5 py-2.5 text-[14px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-colors"
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-stone-200 bg-white px-3.5 py-2.5 text-[14px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-colors"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-stone-900 px-6 py-3 text-[14px] font-medium text-white hover:bg-stone-700 transition-all mt-2"
                >
                  {studyGroupsHome.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
