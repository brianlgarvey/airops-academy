import { whatThisIs } from "@/content/siteContent";

export function WhatThisIs() {
  return (
    <section id="study-groups" className="py-20 md:py-28 bg-stone-100/60 border-y border-stone-200/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {whatThisIs.sectionTitle}
          </h2>
          <p className="mt-4 text-lg text-stone-500 leading-relaxed">
            {whatThisIs.sectionSubtitle}
          </p>
        </div>

        {/* Points grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {whatThisIs.points.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-stone-200 bg-white p-7 hover:border-stone-300 transition-colors"
            >
              <h3 className="text-[17px] font-semibold text-stone-900">
                {point.title}
              </h3>
              <p className="mt-2 text-[15px] text-stone-500 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
