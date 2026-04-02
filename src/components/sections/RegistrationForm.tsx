"use client";

import { useState } from "react";
import { registration, pricing } from "@/content/siteContent";

type FormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  background: string;
  eligibility: string;
};

export function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    background: "",
    eligibility: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isEligible =
    formData.eligibility === "provider" ||
    formData.eligibility === "kickoff";

  const displayPrice = isEligible && pricing.specialOffer.active
    ? pricing.specialOffer.amount
    : pricing.standard.amount;

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    /**
     * ================================================================
     * INTEGRATION POINT
     * ================================================================
     * Replace this timeout with your actual form submission logic:
     *
     * Option 1: HubSpot Form API
     *   await fetch('https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify({ fields: [...] }),
     *   });
     *
     * Option 2: Next.js API route → Stripe Checkout
     *   const res = await fetch('/api/checkout', {
     *     method: 'POST',
     *     body: JSON.stringify(formData),
     *   });
     *   const { url } = await res.json();
     *   window.location.href = url;
     *
     * Option 3: Any custom backend
     *   await fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) });
     * ================================================================
     */
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-accent-500/30 bg-accent-500/5 p-10 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/20">
            <svg
              className="h-7 w-7 text-accent-400"
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
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          You&apos;re registered!
        </h3>
        <p className="text-gray-400">{registration.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          {registration.fields.name.label}{" "}
          {registration.fields.name.required && (
            <span className="text-brand-400">*</span>
          )}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required={registration.fields.name.required}
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-surface-600 bg-surface-800 px-4 py-3 text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-colors"
          placeholder="Jane Smith"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          {registration.fields.email.label}{" "}
          {registration.fields.email.required && (
            <span className="text-brand-400">*</span>
          )}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required={registration.fields.email.required}
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-surface-600 bg-surface-800 px-4 py-3 text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-colors"
          placeholder="jane@company.com"
        />
      </div>

      {/* Company + Role side by side */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-300 mb-1.5"
          >
            {registration.fields.company.label}{" "}
            {registration.fields.company.required && (
              <span className="text-brand-400">*</span>
            )}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required={registration.fields.company.required}
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-surface-600 bg-surface-800 px-4 py-3 text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-colors"
            placeholder="Acme Corp"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-300 mb-1.5"
          >
            {registration.fields.role.label}{" "}
            {registration.fields.role.required && (
              <span className="text-brand-400">*</span>
            )}
          </label>
          <input
            type="text"
            id="role"
            name="role"
            required={registration.fields.role.required}
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-lg border border-surface-600 bg-surface-800 px-4 py-3 text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-colors"
            placeholder="RevOps Manager"
          />
        </div>
      </div>

      {/* Background (optional) */}
      <div>
        <label
          htmlFor="background"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          {registration.fields.background.label}
        </label>
        <textarea
          id="background"
          name="background"
          rows={3}
          value={formData.background}
          onChange={handleChange}
          className="w-full rounded-lg border border-surface-600 bg-surface-800 px-4 py-3 text-white placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none transition-colors resize-none"
          placeholder={registration.fields.background.placeholder}
        />
      </div>

      {/* Eligibility selector */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          {registration.eligibilityLabel}
        </label>
        <div className="space-y-2">
          {registration.eligibilityOptions.map((option) => (
            <label
              key={option.value}
              className={`flex items-center gap-3 rounded-lg border p-4 cursor-pointer transition-all ${
                formData.eligibility === option.value
                  ? "border-brand-500/50 bg-brand-600/10"
                  : "border-surface-600 bg-surface-800/50 hover:border-surface-500"
              }`}
            >
              <input
                type="radio"
                name="eligibility"
                value={option.value}
                checked={formData.eligibility === option.value}
                onChange={handleChange}
                className="h-4 w-4 border-surface-600 text-brand-600 focus:ring-brand-500"
              />
              <span className="text-sm text-gray-300">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Dynamic pricing display */}
      {formData.eligibility && (
        <div
          className={`rounded-lg p-4 text-center ${
            isEligible
              ? "border border-accent-500/30 bg-accent-500/10"
              : "border border-surface-700/50 bg-surface-800/50"
          }`}
        >
          <p className="text-sm text-gray-400">Your price</p>
          <p className="text-2xl font-bold text-white mt-1">
            ${displayPrice.toLocaleString()}
          </p>
          {isEligible && pricing.specialOffer.active && (
            <p className="text-xs text-accent-400 mt-1">
              {pricing.specialOffer.label} applied
            </p>
          )}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-brand-600 py-4 text-base font-semibold text-white hover:bg-brand-500 transition-all hover:shadow-lg hover:shadow-brand-600/25 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Processing...
          </span>
        ) : (
          registration.submitLabel
        )}
      </button>

      <p className="text-xs text-gray-600 text-center">
        By registering, you&apos;ll receive cohort details and onboarding
        instructions via email. No payment is collected on this form.
      </p>
    </form>
  );
}
