import { studyGroupsSections } from "@/content/siteContent";

export function StudyGroupsWhy() {
  const { pace, value, rules } = studyGroupsSections;

  return (
    <>
      {/* Pace / Problem */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">
              {pace.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
              {pace.title}
            </h2>
            <p className="mt-5 text-lg text-stone-500 leading-relaxed">
              {pace.body}
            </p>
          </div>
        </div>
      </section>

      {/* Value grid */}
      <section className="py-20 md:py-28 border-t border-stone-200/70">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">
              {value.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
              {value.title}
            </h2>
            <p className="mt-4 text-lg text-stone-500 leading-relaxed">
              {value.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {value.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-stone-200/80 bg-white p-6 hover:border-stone-300 transition-colors"
              >
                <h3 className="text-[16px] font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] text-stone-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two rules */}
      <section className="py-20 md:py-28 border-t border-stone-200/70">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-stone-400 mb-4">
              {rules.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 leading-tight">
              {rules.title}
            </h2>
            {rules.subtitle && (
              <p className="mt-4 text-lg text-stone-500 leading-relaxed">
                {rules.subtitle}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {rules.items.map((rule, i) => (
              <div
                key={i}
                className="rounded-xl border border-stone-200 bg-white p-7"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-[13px] font-semibold text-white">
                    {i + 1}
                  </div>
                  <h4 className="text-[17px] font-semibold text-stone-900">
                    Rule {i + 1}
                  </h4>
                </div>
                <p className="text-[16px] font-medium text-stone-800 leading-snug mb-2">
                  {rule.title}
                </p>
                <p className="text-[15px] text-stone-500 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>

          {rules.closing && (
            <p className="mt-10 text-xl md:text-2xl font-semibold tracking-tight text-stone-900">
              {rules.closing}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
