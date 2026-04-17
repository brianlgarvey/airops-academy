"use client";

import { useState } from "react";
import { studyGroupsHome, toolsFeatured } from "@/content/siteContent";
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
      <section id="top" className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — headline + tools row */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-semibold tracking-tight leading-[1.1] text-stone-900">
                {studyGroupsHome.headline}
              </h1>

              <p className="mt-6 text-lg text-stone-500 leading-relaxed">
                {studyGroupsHome.subheadline}
              </p>

              {/* Tools on the room's mind — compact in-hero row */}
              <div className="mt-10">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">
                  {toolsFeatured.eyebrow}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {toolsFeatured.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="inline-flex items-center gap-1.5"
                    >
                      <span className="text-[14px] text-stone-400 font-mono leading-none">
                        {tool.glyph}
                      </span>
                      <span className="text-[14px] font-medium tracking-tight text-stone-700 whitespace-nowrap">
                        {tool.name}
                      </span>
                    </div>
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
      <TestimonialsRotating />
      <StudyGroupsWhy />
    </>
  );
}
