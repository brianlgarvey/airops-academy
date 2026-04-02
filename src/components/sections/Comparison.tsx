import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { comparison } from "@/content/siteContent";

export function Comparison() {
  return (
    <SectionWrapper>
      <SectionHeader title={comparison.sectionTitle} />

      <div className="max-w-3xl mx-auto">
        {/* Header row */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="rounded-lg bg-surface-800/50 px-5 py-3 text-center">
            <span className="text-sm font-semibold text-gray-500">
              Generic AI Course
            </span>
          </div>
          <div className="rounded-lg bg-brand-600/10 border border-brand-600/20 px-5 py-3 text-center">
            <span className="text-sm font-semibold text-brand-400">
              AIRops Academy
            </span>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="space-y-3">
          {comparison.items.map((item, i) => (
            <div key={i} className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-surface-700/30 bg-surface-900/30 px-5 py-4 flex items-center">
                <div className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <p className="text-sm text-gray-500">{item.generic}</p>
                </div>
              </div>
              <div className="rounded-lg border border-brand-600/15 bg-brand-600/5 px-5 py-4 flex items-center">
                <div className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent-400"
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
                  <p className="text-sm text-gray-300">{item.airops}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
