import { socialProof } from "@/content/siteContent";

export function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-stone-100/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {socialProof.sectionTitle}
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {socialProof.testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-stone-200/80 bg-white p-7"
            >
              <p className="text-[15px] text-stone-700 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="h-9 w-9 rounded-full bg-stone-200 flex items-center justify-center text-[13px] font-medium text-stone-500">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-[14px] font-medium text-stone-900">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-stone-400">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
