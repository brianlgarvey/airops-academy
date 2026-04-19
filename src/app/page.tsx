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

function FeaturedQuote() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % hero.highlights.length);
        setVisible(true);
      }, 500);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const highlight = hero.highlights[index];

  // Peek avatars — all the others in the rotation
  const peekAvatars = hero.highlights
    .filter((_, i) => i !== index)
    .slice(0, 6);

  return (
    <div className="relative">
      {/* Decorative stage — soft gradient glow behind the avatar */}
      <div
        aria-hidden
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full bg-gradient-to-br from-primary-100/60 via-amber-50/40 to-transparent blur-3xl pointer-events-none"
      />

      {/* Scattered peek avatars (ambient decoration) */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {peekAvatars.map((person, i) => {
          const positions = [
            "top-0 left-4",
            "top-8 right-0",
            "top-28 -left-2",
            "top-32 right-6",
            "top-48 left-10",
            "top-52 right-12",
          ];
          return (
            <div
              key={person.name}
              className={`absolute ${positions[i]} transition-opacity duration-700`}
              style={{ opacity: 0.5 }}
            >
              <Image
                src={person.avatar}
                alt=""
                width={32 + (i % 2) * 4}
                height={32 + (i % 2) * 4}
                className="rounded-full object-cover ring-2 ring-white/80 shadow-sm"
                unoptimized
              />
            </div>
          );
        })}
      </div>

      <div className="relative flex flex-col items-center text-center pt-4 px-4">
        {/* Featured avatar */}
        <div
          className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative inline-block">
            <Image
              src={highlight.avatar}
              alt={highlight.name}
              width={112}
              height={112}
              className="rounded-full object-cover ring-4 ring-white shadow-xl"
              unoptimized
            />
            {/* Type badge on avatar */}
            <span
              className={`absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${
                highlight.type === "build"
                  ? "bg-stone-900 text-white"
                  : "bg-amber-50 text-amber-800 border border-amber-200"
              }`}
            >
              {highlight.type === "build" ? "Built this" : "Feedback"}
            </span>
          </div>

          {/* Name + role */}
          <p className="mt-6 text-[15px] font-semibold text-stone-900">
            {highlight.name}
          </p>
          <p className="text-[13px] text-stone-400">{highlight.role}</p>
        </div>

        {/* Quote */}
        <div
          className={`mt-6 max-w-sm transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-[15px] md:text-base text-stone-600 leading-relaxed">
            &ldquo;{renderRichQuote(highlight.quote)}&rdquo;
          </p>
        </div>

        {/* Dots */}
        <div className="mt-6 flex gap-1.5">
          {hero.highlights.map((_, i) => (
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
              aria-label={`Show highlight ${i + 1}`}
            />
          ))}
        </div>
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

            {/* Right — featured participant + quote with decorative stage */}
            <div className="lg:pl-6 relative min-h-[440px]">
              <FeaturedQuote />

              {/* Sponsors — below quote */}
              <div className="mt-10 pt-6 border-t border-stone-200/70 flex flex-wrap items-center gap-2 text-[12px]">
                <span className="text-stone-400 uppercase tracking-wider font-semibold text-[11px] mr-1">
                  {studyGroupsHome.sponsors.label}
                </span>
                {studyGroupsHome.sponsors.items.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:text-stone-900 transition-colors"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-stone-900" />
                    <span className="font-semibold tracking-tight">
                      {sponsor.name}
                    </span>
                  </a>
                ))}
              </div>
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
