import { whyWeBuiltThis } from "@/content/siteContent";

export function WhyWeBuiltThis() {
  return (
    <section id="community" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {whyWeBuiltThis.sectionTitle}
          </h2>

          <div className="mt-10 space-y-5">
            {whyWeBuiltThis.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-[16px] leading-[1.75] ${
                  i === 1
                    ? "text-stone-900 font-medium"
                    : "text-stone-600"
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
