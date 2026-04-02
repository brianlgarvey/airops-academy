import Link from "next/link";
import { featuredProgram, pricing } from "@/content/siteContent";

export function FeaturedProgram() {
  return (
    <section id="program" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-surface-700/50 bg-surface-900/80 backdrop-blur-sm">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-600/10 rounded-full blur-[80px]" />

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left: Program info */}
              <div className="flex-1">
                {featuredProgram.badge && (
                  <span className="inline-block rounded-full bg-brand-600/20 border border-brand-500/30 px-3 py-1 text-xs font-semibold text-brand-400 uppercase tracking-wider mb-6">
                    {featuredProgram.badge}
                  </span>
                )}
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {featuredProgram.name}
                </h2>
                <p className="mt-2 text-lg text-gray-400">
                  {featuredProgram.subtitle}
                </p>
                <p className="mt-6 text-gray-300 leading-relaxed">
                  {featuredProgram.description}
                </p>

                {/* Highlights */}
                <ul className="mt-8 space-y-3">
                  {featuredProgram.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent-400"
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
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Pricing card */}
              <div className="lg:w-[380px] shrink-0">
                <div className="rounded-xl border border-surface-600 bg-surface-800/80 p-8">
                  {/* Standard price */}
                  <div className="text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                      {pricing.standard.label}
                    </p>
                    <p className="mt-2 text-4xl font-bold text-white">
                      ${pricing.standard.amount.toLocaleString()}
                    </p>
                  </div>

                  {/* Special offer */}
                  {pricing.specialOffer.active && (
                    <div className="mt-6 rounded-lg border border-accent-500/30 bg-accent-500/10 p-4">
                      <p className="text-sm font-semibold text-accent-400 text-center">
                        {pricing.specialOffer.label} —{" "}
                        {pricing.specialOffer.deadline}
                      </p>
                      <p className="mt-1 text-2xl font-bold text-white text-center">
                        ${pricing.specialOffer.amount}
                      </p>
                      <p className="mt-2 text-xs text-gray-400 text-center">
                        {pricing.specialOffer.description}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    href="/register"
                    className="mt-6 block w-full rounded-lg bg-brand-600 py-3.5 text-center text-base font-semibold text-white hover:bg-brand-500 transition-all hover:shadow-lg hover:shadow-brand-600/25"
                  >
                    Register Now
                  </Link>

                  {/* Details */}
                  <ul className="mt-6 space-y-2">
                    {pricing.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <span className="h-1 w-1 rounded-full bg-gray-600" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
