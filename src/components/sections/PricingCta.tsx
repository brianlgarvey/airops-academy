import Link from "next/link";
import { pricing } from "@/content/siteContent";

export function PricingCta() {
  return (
    <section
      id="pricing"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-brand-900/10 to-surface-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-600/8 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to start building?
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
          Join the next AIRops Workshop cohort and start applying AI to real
          HubSpot work — practically, safely, and immediately.
        </p>

        {/* Pricing cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
          {/* Standard */}
          <div className="rounded-xl border border-surface-700/50 bg-surface-900/60 p-8 text-center flex-1 max-w-xs mx-auto sm:mx-0">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-2">
              {pricing.standard.label}
            </p>
            <p className="text-4xl font-bold text-white">
              ${pricing.standard.amount.toLocaleString()}
            </p>
            <Link
              href="/register"
              className="mt-6 block w-full rounded-lg border border-surface-600 py-3 text-sm font-semibold text-gray-300 hover:bg-surface-800 hover:border-surface-500 transition-all"
            >
              Register at Standard Rate
            </Link>
          </div>

          {/* Special offer */}
          {pricing.specialOffer.active && (
            <div className="rounded-xl border border-accent-500/30 bg-accent-500/5 p-8 text-center flex-1 max-w-xs mx-auto sm:mx-0 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white">
                  {pricing.specialOffer.label}
                </span>
              </div>
              <p className="text-sm text-accent-400 uppercase tracking-wider font-medium mb-2">
                {pricing.specialOffer.deadline}
              </p>
              <p className="text-4xl font-bold text-white">
                ${pricing.specialOffer.amount}
              </p>
              <p className="mt-2 text-xs text-gray-400">
                For {pricing.specialOffer.eligibility.join(" & ")}
              </p>
              <Link
                href="/register"
                className="mt-6 block w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-all hover:shadow-lg hover:shadow-brand-600/25"
              >
                Claim Launch Pricing
              </Link>
            </div>
          )}
        </div>

        {/* Microcopy */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          {pricing.details.map((detail, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-600" />
              {detail}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
