import type { Metadata } from "next";
import Link from "next/link";
import { sessionsPage } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Sessions — AIRops Academy",
  description:
    "Every week, a small group of operators gets together to share what they're building with AI.",
};

export default function SessionsPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
          {sessionsPage.headline}
        </h1>
        <p className="mt-4 text-lg text-stone-500 leading-relaxed">
          {sessionsPage.intro}
        </p>

        {/* Format */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-6">
            {sessionsPage.format.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {sessionsPage.format.points.map((point, i) => (
              <div
                key={i}
                className="rounded-xl border border-stone-200 bg-white p-5"
              >
                <p className="text-[15px] text-stone-600">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typical flow */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-8">
            {sessionsPage.typicalFlow.title}
          </h2>
          <div className="space-y-5">
            {sessionsPage.typicalFlow.items.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-[12px] font-semibold text-white">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-stone-900">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-[15px] text-stone-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-6">
            {sessionsPage.topics.title}
          </h2>
          <ul className="space-y-3">
            {sessionsPage.topics.items.map((item, i) => (
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

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-stone-200">
          <div className="text-center">
            <p className="text-lg text-stone-500 mb-6">
              Ready to join a session?
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
