import { experience } from "@/content/siteContent";

export function Experience() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-10">
            {experience.sectionTitle}
          </h2>

          {/* Staccato lines */}
          <div className="space-y-1 mb-10">
            {experience.lines.map((line, i) => (
              <p
                key={i}
                className="text-xl md:text-2xl text-stone-500 italic"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Paragraphs */}
          <div className="space-y-3">
            {experience.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[16px] text-stone-600 leading-relaxed"
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
