import { howItWorks } from "@/content/siteContent";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-stone-100/60 border-y border-stone-200/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {howItWorks.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-stone-500 leading-relaxed">
            {howItWorks.sectionSubtitle}
          </p>
        </div>

        {/* Two rules */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {howItWorks.rules.map((rule, i) => (
            <div
              key={i}
              className="rounded-xl border border-stone-200 bg-white p-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-[13px] font-semibold text-white">
                  {i + 1}
                </div>
                <h3 className="text-[17px] font-semibold text-stone-900">
                  Rule {i + 1}
                </h3>
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

        {/* Deep dive format */}
        <div className="max-w-3xl mb-10">
          <h3 className="text-2xl font-semibold tracking-tight text-stone-900">
            {howItWorks.format.title}
          </h3>
          <p className="mt-3 text-[16px] text-stone-500 leading-relaxed">
            {howItWorks.format.description}
          </p>
        </div>

        {/* Guarantee */}
        <p className="text-lg md:text-xl font-semibold text-stone-900">
          {howItWorks.guarantee}
        </p>
      </div>
    </section>
  );
}
