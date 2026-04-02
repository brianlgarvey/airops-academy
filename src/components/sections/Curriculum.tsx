import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { curriculum } from "@/content/siteContent";

export function Curriculum() {
  return (
    <SectionWrapper id="curriculum" pattern="dots">
      <SectionHeader
        title={curriculum.sectionTitle}
        subtitle={curriculum.sectionSubtitle}
      />

      {/* Operating Loop */}
      <div className="mb-14 rounded-xl border border-accent-500/20 bg-accent-500/5 p-8 text-center">
        <p className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
          {curriculum.operatingLoop.label}
        </p>
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          {curriculum.operatingLoop.steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2 sm:gap-4">
              <span className="rounded-lg bg-accent-500/15 border border-accent-500/20 px-4 py-2 text-base sm:text-lg font-semibold text-white">
                {step}
              </span>
              {i < curriculum.operatingLoop.steps.length - 1 && (
                <svg
                  className="h-4 w-4 text-accent-500/50"
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
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">
          {curriculum.operatingLoop.description}
        </p>
      </div>

      {/* Session cards */}
      <div className="grid lg:grid-cols-3 gap-6">
        {curriculum.sessions.map((session) => (
          <div
            key={session.number}
            className="group rounded-xl border border-surface-700/50 bg-surface-900/60 p-8 hover:border-brand-600/30 transition-all"
          >
            {/* Session number */}
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                {session.number}
              </span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                  Session {session.number}
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              {session.title}
            </h3>
            <p className="text-sm text-gray-400 mb-6">{session.subtitle}</p>

            <ul className="space-y-3">
              {session.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
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
                  <span className="text-sm text-gray-300">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
