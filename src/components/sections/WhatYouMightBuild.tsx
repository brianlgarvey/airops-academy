import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { whatYouMightBuild } from "@/content/siteContent";

export function WhatYouMightBuild() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={whatYouMightBuild.sectionTitle}
        subtitle={whatYouMightBuild.sectionSubtitle}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whatYouMightBuild.examples.map((example, i) => (
          <div
            key={i}
            className="rounded-xl border border-surface-700/50 bg-surface-900/40 p-6 hover:border-brand-600/20 transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600/10 text-brand-400 group-hover:bg-brand-600/20 transition-colors">
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
                    d="M11.42 15.17l-5.384-3.19A2.625 2.625 0 016 9.375V5.25A2.625 2.625 0 018.625 2.625h6.75A2.625 2.625 0 0118 5.25v4.125a2.625 2.625 0 01-.036.606l-5.384 3.19a2.625 2.625 0 01-3.16 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white">
                {example.title}
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {example.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
