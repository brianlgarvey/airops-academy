"use client";

import { useState } from "react";
import { studyGroupsHome } from "@/content/siteContent";
import { StudyGroupsWhy } from "@/components/sections/StudyGroupsWhy";
import { TestimonialsRotating } from "@/components/sections/TestimonialsRotating";

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
      <section id="top" className="relative pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          {/* Top: headline + seamless form */}
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Left — headline */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-semibold tracking-tight leading-[1.1] text-stone-900">
                {studyGroupsHome.headline}
              </h1>

              <p className="mt-6 text-lg text-stone-500 leading-relaxed max-w-xl">
                {studyGroupsHome.subheadline}
              </p>
            </div>

            {/* Right — seamless form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-white mb-4">
                    <svg
                      className="h-4 w-4"
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
                  <h2 className="text-lg font-semibold text-stone-900 mb-1.5">
                    Request received
                  </h2>
                  <p className="text-[14px] text-stone-500">
                    {studyGroupsHome.successMessage}
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-[15px] font-semibold tracking-tight text-stone-900 uppercase tracking-wider">
                    {studyGroupsHome.formHeadline}
                  </h2>
                  <p className="mt-1 text-[13px] text-stone-500 leading-relaxed">
                    {studyGroupsHome.formSubheadline}
                  </p>

                  <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                    {studyGroupsHome.fields.map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text-[12px] font-medium text-stone-600 mb-1"
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
                            rows={2}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-colors"
                          />
                        ) : (
                          <input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            required={field.required}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-[13px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-colors"
                          />
                        )}
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-stone-900 px-5 py-2.5 text-[13px] font-medium text-white hover:bg-stone-700 transition-all"
                    >
                      {studyGroupsHome.submitLabel}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Rotating testimonial cards — above the fold */}
          <div className="mt-14">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">
              In the room right now
            </p>
            <TestimonialsRotating />
          </div>
        </div>
      </section>

      <StudyGroupsWhy />
    </>
  );
}
