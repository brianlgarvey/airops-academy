import { finalCta } from "@/content/siteContent";

export function FinalCta() {
  return (
    <section id="request-invite" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">
            {finalCta.headline}
          </h2>
          <p className="mt-5 text-lg text-stone-500 leading-relaxed">
            {finalCta.subheadline}
          </p>

          <div className="mt-10">
            <a
              href={finalCta.cta.href}
              className="inline-flex items-center justify-center rounded-lg bg-stone-900 px-8 py-3.5 text-[15px] font-medium text-white hover:bg-stone-700 transition-all"
            >
              {finalCta.cta.label}
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          <p className="mt-5 text-[14px] text-stone-400">
            {finalCta.supportingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
