"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { studyGroupsHome, hero } from "@/content/siteContent";
import { StudyGroupsWhy } from "@/components/sections/StudyGroupsWhy";

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

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
      <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — headline + rotating spotlight */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-semibold tracking-tight leading-[1.1] text-stone-900">
              {studyGroupsHome.headline}
            </h1>

            <p className="mt-6 text-lg text-stone-500 leading-relaxed">
              {studyGroupsHome.subheadline}
            </p>

            {/* Rotating spotlight */}
            <div className="mt-10">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">
                {studyGroupsHome.socialProofLabel}
              </p>

              <div
                className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
              >
                {/* Quote card */}
                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                  <span
                    className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${
                      highlight.type === "build"
                        ? "bg-stone-900 text-white"
                        : "bg-stone-100 text-stone-500 border border-stone-200"
                    }`}
                  >
                    {highlight.type === "build" ? "What they built" : "Feedback"}
                  </span>
                  <p className="text-[14px] text-stone-600 leading-relaxed">
                    &ldquo;{highlight.quote}&rdquo;
                  </p>
                </div>

                {/* Face + name */}
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={highlight.avatar}
                    alt={highlight.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover shadow-md ring-2 ring-white"
                    unoptimized
                  />
                  <div>
                    <p className="text-[14px] font-semibold text-stone-900">
                      {highlight.name}
                    </p>
                    <p className="text-[12px] text-stone-400">
                      {highlight.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="mt-5 flex gap-1.5">
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

          {/* Right — sign-up form */}
          <div className="lg:pl-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-7 md:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-8">
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
                  <h2 className="text-xl font-semibold text-stone-900 mb-2">
                    Request received
                  </h2>
                  <p className="text-[15px] text-stone-500">
                    {studyGroupsHome.successMessage}
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold tracking-tight text-stone-900">
                    {studyGroupsHome.formHeadline}
                  </h2>
                  <p className="mt-2 text-[14px] text-stone-500 leading-relaxed">
                    {studyGroupsHome.formSubheadline}
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                      className="w-full rounded-lg bg-stone-900 px-6 py-3 text-[14px] font-medium text-white hover:bg-stone-700 transition-all"
                    >
                      {studyGroupsHome.submitLabel}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    <StudyGroupsWhy />
    </>
  );
}
