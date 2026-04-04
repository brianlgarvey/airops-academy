import type { Metadata } from "next";
import Link from "next/link";
import { howItWorksPage } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "How It Works — AIRops Academy",
  description:
    "One hour a week. A small group of operators. Real work, real conversation, real progress.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
          {howItWorksPage.headline}
        </h1>
        <p className="mt-4 text-lg text-stone-500 leading-relaxed">
          {howItWorksPage.intro}
        </p>

        {/* Session breakdown */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-8">
            {howItWorksPage.sessionBreakdown.title}
          </h2>
          <div className="space-y-6">
            {howItWorksPage.sessionBreakdown.steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-5 rounded-xl border border-stone-200 bg-white p-6"
              >
                <div className="flex-shrink-0">
                  <span className="inline-block text-[13px] font-semibold text-stone-400 bg-stone-100 rounded-md px-3 py-1">
                    {step.time}
                  </span>
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[15px] text-stone-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to bring */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-6">
            {howItWorksPage.whatToBring.title}
          </h2>
          <ul className="space-y-3">
            {howItWorksPage.whatToBring.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-4 w-4 flex-shrink-0 text-stone-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-[15px] text-stone-600 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* What to expect */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-6">
            {howItWorksPage.whatToExpect.title}
          </h2>
          <div className="space-y-4">
            {howItWorksPage.whatToExpect.items.map((item, i) => (
              <p
                key={i}
                className="text-[15px] text-stone-500 leading-relaxed pl-5 border-l-2 border-stone-200"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-stone-200">
          <div className="text-center">
            <p className="text-lg text-stone-500 mb-6">
              Sound like your kind of thing?
            </p>
            <Link
              href="/request-invite"
              className="inline-flex items-center justify-center rounded-lg bg-stone-900 px-8 py-3.5 text-[15px] font-medium text-white hover:bg-stone-700 transition-all"
            >
              Request an Invite
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
          </div>
        </div>
      </div>
    </div>
  );
}
