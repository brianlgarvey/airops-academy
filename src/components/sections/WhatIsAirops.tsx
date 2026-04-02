import { whatIsAirops } from "@/content/siteContent";

export function WhatIsAirops() {
  return (
    <section id="airops" className="py-20 md:py-28 bg-stone-100/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {whatIsAirops.sectionTitle}
          </h2>
          <p className="mt-4 text-xl text-stone-500 leading-relaxed font-light">
            {whatIsAirops.sectionSubtitle}
          </p>

          {/* Paragraphs */}
          <div className="mt-10 space-y-5">
            {whatIsAirops.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[16px] text-stone-600 leading-[1.75]"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="max-w-3xl mx-auto mt-14 grid sm:grid-cols-3 gap-6">
          {whatIsAirops.pillars.map((pillar) => (
            <div key={pillar.title}>
              <h3 className="text-[15px] font-semibold text-stone-900 mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-[14px] text-stone-500 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
