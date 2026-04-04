import type { Metadata } from "next";
import Link from "next/link";
import { aboutPage } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "About — AIRops Academy",
  description:
    "Most AI learning is passive. Most real progress comes from doing. AIRops Academy exists to close that gap.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
          {aboutPage.headline}
        </h1>

        {/* Body */}
        <div className="mt-8 space-y-5">
          {aboutPage.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-[16px] text-stone-500 leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-stone-200">
          <div className="text-center">
            <p className="text-lg text-stone-500 mb-6">
              Want to be part of it?
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
