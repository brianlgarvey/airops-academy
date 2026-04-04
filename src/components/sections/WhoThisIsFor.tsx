import { whoThisIsFor } from "@/content/siteContent";

export function WhoThisIsFor() {
  return (
    <section className="py-20 md:py-28 bg-stone-100/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {whoThisIsFor.sectionTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* For you */}
          <div>
            <h3 className="text-[15px] font-semibold uppercase tracking-wider text-stone-900 mb-6">
              This is for you if
            </h3>
            <ul className="space-y-4">
              {whoThisIsFor.forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-stone-900"
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
                  <span className="text-[16px] text-stone-600 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div>
            <h3 className="text-[15px] font-semibold uppercase tracking-wider text-stone-400 mb-6">
              Not for you if
            </h3>
            <ul className="space-y-4">
              {whoThisIsFor.notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-stone-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-[16px] text-stone-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
