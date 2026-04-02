import { thePath } from "@/content/siteContent";

export function ThePath() {
  return (
    <section id="path" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {thePath.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-stone-500 leading-relaxed">
            {thePath.sectionSubtitle}
          </p>
        </div>

        {/* Stages */}
        <div className="grid md:grid-cols-3 gap-6">
          {thePath.stages.map((stage, i) => (
            <div
              key={stage.title}
              className={`relative rounded-xl border p-7 transition-colors ${
                i === 0
                  ? "border-primary-300 bg-primary-50/40"
                  : "border-stone-200 bg-white hover:border-stone-300"
              }`}
            >
              {/* Status badge */}
              <span
                className={`inline-block text-[11px] font-semibold uppercase tracking-wider mb-4 ${
                  i === 0 ? "text-primary-700" : "text-stone-400"
                }`}
              >
                {stage.status}
              </span>

              {/* Title row */}
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-xl font-semibold text-stone-900">
                  {stage.title}
                </h3>
                <span
                  className={`text-[13px] font-medium ${
                    stage.subtitle === "Free"
                      ? "text-primary-600"
                      : "text-stone-400"
                  }`}
                >
                  {stage.subtitle}
                </span>
              </div>

              <p className="text-[15px] text-stone-500 leading-relaxed mb-5">
                {stage.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {stage.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[14px] text-stone-600"
                  >
                    <svg
                      className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                        i === 0 ? "text-primary-500" : "text-stone-300"
                      }`}
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
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow connector (desktop only) */}
              {i < thePath.stages.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <svg
                    className="h-6 w-6 text-stone-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
