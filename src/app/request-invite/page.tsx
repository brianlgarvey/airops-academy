"use client";

import { useState } from "react";
import { requestInvitePage } from "@/content/siteContent";

export default function RequestInvitePage() {
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

  if (submitted) {
    return (
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-xl px-5 sm:px-6 lg:px-8 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-900 text-white mx-auto mb-6">
            <svg
              className="h-6 w-6"
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
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            Request received
          </h1>
          <p className="mt-4 text-lg text-stone-500 leading-relaxed">
            {requestInvitePage.successMessage}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {requestInvitePage.headline}
          </h1>
          <p className="mt-4 text-lg text-stone-500 leading-relaxed">
            {requestInvitePage.intro}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {requestInvitePage.fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-[14px] font-medium text-stone-700 mb-1.5"
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
                  rows={4}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-[15px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-colors"
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-[15px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-colors"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full rounded-lg bg-stone-900 px-7 py-3.5 text-[15px] font-medium text-white hover:bg-stone-700 transition-all"
          >
            {requestInvitePage.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
