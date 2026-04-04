import { whatPeopleAreSharing } from "@/content/siteContent";

export function WhatPeopleAreSharing() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {whatPeopleAreSharing.sectionTitle}
          </h2>
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatPeopleAreSharing.items.map((item) => (
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
  );
}
