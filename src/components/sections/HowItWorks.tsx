import { howItWorks } from "@/content/siteContent";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-stone-100/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {howItWorks.sectionTitle}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-[14px] font-semibold text-white mb-5">
                {step.number}
              </div>
              <h3 className="text-[17px] font-semibold text-stone-900">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] text-stone-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
