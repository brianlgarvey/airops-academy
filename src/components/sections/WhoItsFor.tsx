import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { whoItsFor } from "@/content/siteContent";

export function WhoItsFor() {
  return (
    <SectionWrapper pattern="grid">
      <SectionHeader
        title={whoItsFor.sectionTitle}
        subtitle={whoItsFor.sectionSubtitle}
      />

      {/* Audience cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {whoItsFor.audiences.map((audience, i) => (
          <div
            key={i}
            className="rounded-xl border border-surface-700/50 bg-surface-900/50 p-7 hover:border-brand-600/20 transition-all"
          >
            <h3 className="text-base font-semibold text-white mb-2">
              {audience.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {audience.description}
            </p>
          </div>
        ))}
      </div>

      {/* Not for section */}
      <div className="rounded-xl border border-surface-700/30 bg-surface-900/30 p-8 max-w-2xl mx-auto">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
          {whoItsFor.notFor.title}
        </h3>
        <ul className="space-y-2">
          {whoItsFor.notFor.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
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
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
