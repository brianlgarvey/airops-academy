import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { futureProof } from "@/content/siteContent";

export function FutureProof() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={futureProof.sectionTitle}
        subtitle={futureProof.sectionSubtitle}
      />
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {futureProof.points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-lg border border-surface-700/30 bg-surface-900/30 p-5"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600/20">
                <svg
                  className="h-3.5 w-3.5 text-brand-400"
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
              </div>
              <p className="text-gray-300 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
