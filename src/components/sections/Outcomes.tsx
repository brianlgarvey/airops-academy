import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { outcomes } from "@/content/siteContent";

export function Outcomes() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={outcomes.sectionTitle}
        subtitle={outcomes.sectionSubtitle}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {outcomes.items.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-xl border border-surface-700/50 bg-surface-900/50 p-6 hover:border-brand-600/30 hover:bg-surface-800/50 transition-all"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
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
            <p className="text-sm text-gray-300 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
